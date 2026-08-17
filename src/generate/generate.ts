import { categories as sourceCategories } from "../categories";
import { consola } from "consola";
import { categoryRawSchema, imageUrlSchema, templateRawSchema, templateVariantRawSchema } from "../schemas";
import type { Category, CategoryRaw, Template, TemplateRaw, TemplateVariant, TemplateVariantRaw } from "../schemas";
import { normalizeString, slugify } from "../utils/strings";

const sourceDirectory = `${import.meta.dir}/../templates`;
const outputDirectory = `${import.meta.dir}/../generated`;
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

type GeneratedCategory = Category;
type GeneratedVariant = Omit<TemplateVariant, "lastUpdate" | "createdAt"> & {
  lastUpdate: string;
  createdAt: string;
};
type GeneratedTemplate = Omit<Template, "lastUpdate" | "createdAt" | "variants"> & {
  lastUpdate: string;
  createdAt: string;
  variants: GeneratedVariant[];
};

async function sourceImages(path: string, glob = "**/*") {
  try {
    return (await Array.fromAsync(new Bun.Glob(glob).scan({ cwd: path, onlyFiles: true })))
      .filter((file) => imageExtensions.has(`.${file.split(".").pop()?.toLowerCase()}`))
      .map((file) => `${path}/${file}`)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

function normalizeCategory(category: CategoryRaw): GeneratedCategory {
  const name = normalizeString(category.name);
  if (!name) throw new Error("A category has an empty name.");
  return {
    name,
    icon: normalizeString(category.icon),
    description: normalizeString(category.description),
    slug: slugify(name),
  };
}

function normalizeVariant(templateSlug: string, variant: TemplateVariantRaw): GeneratedVariant {
  const name = normalizeString(variant.name);
  if (!name) throw new Error(`${templateSlug}: a variant has an empty name.`);
  const slug = slugify(name);

  return {
    ...variant,
    name,
    shortDescription: normalizeString(variant.shortDescription),
    slug,
    files: {
      config: `/files/${templateSlug}/${slug}/template.toml`,
      compose: `/files/${templateSlug}/${slug}/docker-compose.yml`,
    },
    lastUpdate: variant.lastUpdate.toISOString(),
    createdAt: variant.createdAt.toISOString(),
  };
}

function normalizeTemplate(template: TemplateRaw, description: string, category: GeneratedCategory, variants: GeneratedVariant[]): GeneratedTemplate {
  const name = normalizeString(template.name);
  if (!name) throw new Error("A template has an empty name.");
  const slug = slugify(name);

  const validHttps = (value: string) => URL.canParse(value) && new URL(value).protocol === "https:";
  for (const [label, link] of Object.entries({ developedBy: template.developedBy, submittedBy: template.submittedBy }))
    if (!validHttps(link.url)) throw new Error(`${name}: invalid ${label} URL.`);
  for (const [label, url] of Object.entries(template.links))
    if (!validHttps(url)) throw new Error(`${name}: invalid ${label} URL.`);

  return {
    ...template,
    name,
    shortDescription: normalizeString(template.shortDescription),
    category,
    developedBy: { ...template.developedBy, label: normalizeString(template.developedBy.label) },
    submittedBy: { ...template.submittedBy, label: normalizeString(template.submittedBy.label) },
    description: description.trim(),
    logo: null,
    images: [],
    variants,
    slug,
    lastUpdate: new Date(Math.max(...variants.map(({ lastUpdate }) => Date.parse(lastUpdate)))).toISOString(),
    createdAt: new Date(Math.min(...variants.map(({ createdAt }) => Date.parse(createdAt)))).toISOString(),
  };
}

async function convertImage(source: string, destination: string) {
  await new Bun.Image(await Bun.file(source).arrayBuffer()).webp().write(destination);
}

type GeneratedData = {
  categories: GeneratedCategory[];
  templates: GeneratedTemplate[];
}

function sortKeys(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (!value || typeof value !== "object") return value;
  const record = value as Record<string, unknown>;
  return Object.fromEntries(
    Object.keys(record).sort().map((key) => [key, sortKeys(record[key])]),
  );
}

function stableJson(value: unknown) {
  return JSON.stringify(sortKeys(value)) ?? "";
}

function dataFile(data: GeneratedData, version: string) {
  const serialized = JSON.stringify(data, null, 2).replace(/"(lastUpdate|createdAt)": "([^"]+)"/g, '"$1": new Date("$2")');
  return `import type { Category, Template } from "../schemas";\n\nconst data = ${serialized} as const satisfies { categories: readonly Category[]; templates: readonly Template[] };\n\nexport const categories: readonly Category[] = data.categories;\nexport const templates: readonly Template[] = data.templates;\nexport const version = ${JSON.stringify(version)};\n`;
}

export async function generate() {
  const categories = Object.values(sourceCategories).map((category) => normalizeCategory(categoryRawSchema.parse(category)));
  const categoriesBySlug = new Map(categories.map((category) => [category.slug, category]));
  if (categoriesBySlug.size !== categories.length) throw new Error("Category names must produce unique slugs.");

  const templates: GeneratedTemplate[] = [];
  const jobs: { source: string; destination: string }[] = [];
  const files: { source: string; destination: string }[] = [];
  const metaFiles = await Array.fromAsync(new Bun.Glob("*/meta.ts").scan({ cwd: sourceDirectory, onlyFiles: true }));
  for (const metaFile of metaFiles.sort()) {
    const directory = metaFile.split("/")[0]!;
    const templateDirectory = `${sourceDirectory}/${directory}`;
    const metaPath = `${templateDirectory}/meta.ts`;
    const descriptionPath = `${templateDirectory}/description.md`;
    let raw: TemplateRaw;
    try {
      raw = templateRawSchema.parse((await import(metaPath)).default);
    } catch (error) {
      throw new Error(`${directory}: could not load meta.ts (${error instanceof Error ? error.message : error}).`);
    }
    const category = categoriesBySlug.get(slugify(raw.category.name));
    if (!category) throw new Error(`${directory}: category \"${raw.category.name}\" does not exist.`);

    const templateSlug = slugify(normalizeString(raw.name));
    const variants: GeneratedVariant[] = [];
    const variantMetaFiles = await Array.fromAsync(new Bun.Glob("*/meta.ts").scan({ cwd: templateDirectory, onlyFiles: true }));
    if (!variantMetaFiles.length) throw new Error(`${directory}: at least one variant is required.`);

    for (const variantMetaFile of variantMetaFiles.sort()) {
      const variantDirectory = variantMetaFile.split("/")[0]!;
      const variantPath = `${templateDirectory}/${variantDirectory}`;
      let rawVariant: TemplateVariantRaw;
      try {
        rawVariant = templateVariantRawSchema.parse((await import(`${variantPath}/meta.ts`)).default);
      } catch (error) {
        throw new Error(`${directory}/${variantDirectory}: could not load meta.ts (${error instanceof Error ? error.message : error}).`);
      }

      const variant = normalizeVariant(templateSlug, rawVariant);
      const configPath = `${variantPath}/template.toml`;
      const composePath = `${variantPath}/docker-compose.yml`;
      // Deplo reads template.toml with its own lenient parser, so a strict TOML
      // failure is a warning, not a reason to keep a working variant out.
      try {
        Bun.TOML.parse(await Bun.file(configPath).text());
      } catch (error) {
        consola.warn(`${directory}/${variantDirectory}: template.toml is not strict TOML (${error instanceof Error ? error.message : error}).`);
      }
      try {
        Bun.YAML.parse(await Bun.file(composePath).text());
      } catch (error) {
        throw new Error(`${directory}/${variantDirectory}: invalid docker-compose.yml (${error instanceof Error ? error.message : error}).`);
      }

      const outputFiles = `${outputDirectory}/files/${templateSlug}/${variant.slug}`;
      files.push(
        { source: configPath, destination: `${outputFiles}/template.toml` },
        { source: composePath, destination: `${outputFiles}/docker-compose.yml` },
      );
      variants.push(variant);
    }

    if (new Set(variants.map(({ slug }) => slug)).size !== variants.length)
      throw new Error(`${directory}: variant names must produce unique slugs.`);

    const template = normalizeTemplate(raw, await Bun.file(descriptionPath).text(), category, variants);
    const outputImages = `${outputDirectory}/images/${template.slug}`;
    const logo = (await sourceImages(templateDirectory, "*")).find((file) => file.split("/").pop()?.replace(/\.[^.]+$/, "").toLowerCase() === "logo");
    if (logo) {
      template.logo = `/images/${template.slug}/logo.webp`;
      jobs.push({ source: logo, destination: `${outputImages}/logo.webp` });
    }
    for (const [index, image] of (await sourceImages(`${templateDirectory}/images`)).entries()) {
      const output = imageUrlSchema.parse(`/images/${template.slug}/${index + 1}.webp`);
      template.images.push(output);
      jobs.push({ source: image, destination: `${outputImages}/${index + 1}.webp` });
    }
    templates.push(template);
  }

  if (new Set(templates.map((template) => template.slug)).size !== templates.length) throw new Error("Template names must produce unique slugs.");
  const data = { categories, templates } satisfies GeneratedData;
  const hash = new Bun.CryptoHasher("sha256").update(stableJson(data)).digest("hex");
  const version = `${hash}`;
  for await (const file of new Bun.Glob("**/*").scan({ cwd: outputDirectory, onlyFiles: true }))
    await Bun.file(`${outputDirectory}/${file}`).delete();
  await Promise.all(jobs.map(({ source, destination }) => convertImage(source, destination)));
  await Promise.all(files.map(({ source, destination }) => Bun.write(destination, Bun.file(source))));
  await Bun.write(`${outputDirectory}/data.ts`, dataFile(data, version));

  consola.success("Templates generated");
  consola.info(`${templates.length} templates · ${templates.reduce((total, template) => total + template.variants.length, 0)} variants · ${categories.length} categories · ${jobs.length} WebP images · ${files.length} files`);
}
