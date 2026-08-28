import { categories as sourceCategories } from "../categories";
import { consola } from "consola";
import {
  categoryRawSchema,
  DEFAULT_VARIANT_SLUG,
  imageUrlSchema,
  templateRawSchema,
  templateVariantRawSchema,
} from "../schemas";
import type {
  Category,
  CategoryRaw,
  Template,
  TemplateRaw,
  TemplateVariant,
  TemplateVariantRaw,
} from "../schemas";
import { normalizeString, slugify } from "../utils/strings";

const sourceDirectory = `${import.meta.dir}/../templates`;
const outputDirectory = `${import.meta.dir}/../generated`;
const imageExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

type GeneratedCategory = Category;
type GeneratedVariant = Omit<TemplateVariant, "lastUpdate" | "createdAt"> & {
  lastUpdate: string;
  createdAt: string;
};
type GeneratedTemplate = Omit<Template, "variants"> & {
  variants: GeneratedVariant[];
};

async function sourceImages(path: string, glob = "**/*") {
  try {
    return (
      await Array.fromAsync(
        new Bun.Glob(glob).scan({ cwd: path, onlyFiles: true }),
      )
    )
      .filter((file) =>
        imageExtensions.has(`.${file.split(".").pop()?.toLowerCase()}`),
      )
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

function normalizeVariant(
  templateSlug: string,
  variant: TemplateVariantRaw,
  description: string,
  category: GeneratedCategory,
): GeneratedVariant {
  const name = normalizeString(variant.name);
  if (!name) throw new Error(`${templateSlug}: a variant has an empty name.`);
  const slug = slugify(name);
  const validHttps = (value: string) =>
    URL.canParse(value) && new URL(value).protocol === "https:";
  for (const [label, link] of Object.entries({
    developedBy: variant.developedBy,
    submittedBy: variant.submittedBy,
  }))
    if (!validHttps(link.url))
      throw new Error(`${templateSlug}/${slug}: invalid ${label} URL.`);
  for (const [label, links] of Object.entries(variant.links))
    for (const url of Array.isArray(links) ? links : [links])
      if (!validHttps(url))
        throw new Error(`${templateSlug}/${slug}: invalid ${label} URL.`);

  return {
    ...variant,
    name,
    shortDescription: normalizeString(variant.shortDescription),
    category,
    developedBy: {
      ...variant.developedBy,
      label: normalizeString(variant.developedBy.label),
    },
    submittedBy: {
      ...variant.submittedBy,
      label: normalizeString(variant.submittedBy.label),
    },
    description: description.trim(),
    logo: null,
    images: [],
    slug,
    files: {
      config: `/files/${templateSlug}/${slug}/template.toml`,
      compose: `/files/${templateSlug}/${slug}/docker-compose.yml`,
    },
    lastUpdate: variant.lastUpdate.toISOString(),
    createdAt: variant.createdAt.toISOString(),
  };
}

function normalizeTemplate(
  template: TemplateRaw,
  variants: GeneratedVariant[],
  hasLogo: boolean,
): GeneratedTemplate {
  const name = normalizeString(template.name);
  if (!name) throw new Error("A template has an empty name.");
  const slug = slugify(name);

  return {
    name,
    logo: hasLogo ? `/images/${slug}/logo.webp` : null,
    variants,
    slug,
  };
}

async function convertImage(source: string, destination: string) {
  await new Bun.Image(await Bun.file(source).arrayBuffer())
    .webp()
    .write(destination);
}

type GeneratedData = {
  categories: GeneratedCategory[];
  templates: GeneratedTemplate[];
};

function sortKeys(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (!value || typeof value !== "object") return value;
  const record = value as Record<string, unknown>;
  return Object.fromEntries(
    Object.keys(record)
      .sort()
      .map((key) => [key, sortKeys(record[key])]),
  );
}

function stableJson(value: unknown) {
  return JSON.stringify(sortKeys(value)) ?? "";
}

function dataFile(data: GeneratedData, version: string) {
  const serialized = JSON.stringify(data, null, 2).replace(
    /"(lastUpdate|createdAt)": "([^"]+)"/g,
    '"$1": new Date("$2")',
  );
  return `import type { Category, Template } from "../schemas";\n\nconst data = ${serialized} as const satisfies { categories: readonly Category[]; templates: readonly Template[] };\n\nexport const categories: readonly Category[] = data.categories;\nexport const templates: readonly Template[] = data.templates;\nexport const version = ${JSON.stringify(version)};\n`;
}

export async function generate() {
  const categories = Object.values(sourceCategories).map((category) =>
    normalizeCategory(categoryRawSchema.parse(category)),
  );
  const categoriesBySlug = new Map(
    categories.map((category) => [category.slug, category]),
  );
  if (categoriesBySlug.size !== categories.length)
    throw new Error("Category names must produce unique slugs.");

  const templates: GeneratedTemplate[] = [];
  const jobs: { source: string; destination: string }[] = [];
  const files: { source: string; destination: string }[] = [];
  const fileContents: Record<string, string> = {};
  const metaFiles = await Array.fromAsync(
    new Bun.Glob("*/meta.ts").scan({ cwd: sourceDirectory, onlyFiles: true }),
  );
  for (const metaFile of metaFiles.sort()) {
    const directory = metaFile.split("/")[0]!;
    const templateDirectory = `${sourceDirectory}/${directory}`;
    const metaPath = `${templateDirectory}/meta.ts`;
    let raw: TemplateRaw;
    try {
      raw = templateRawSchema.parse((await import(metaPath)).default);
    } catch (error) {
      throw new Error(
        `${directory}: could not load meta.ts (${error instanceof Error ? error.message : error}).`,
      );
    }
    const templateSlug = slugify(normalizeString(raw.name));
    const variants: GeneratedVariant[] = [];
    const variantSources = new Map<string, string>();
    const variantMetaFiles = await Array.fromAsync(
      new Bun.Glob("*/meta.ts").scan({
        cwd: templateDirectory,
        onlyFiles: true,
      }),
    );
    if (!variantMetaFiles.length)
      throw new Error(`${directory}: at least one variant is required.`);

    for (const variantMetaFile of variantMetaFiles.sort()) {
      const variantDirectory = variantMetaFile.split("/")[0]!;
      const variantPath = `${templateDirectory}/${variantDirectory}`;
      const descriptionPath = `${variantPath}/description.md`;
      let rawVariant: TemplateVariantRaw;
      try {
        rawVariant = templateVariantRawSchema.parse(
          (await import(`${variantPath}/meta.ts`)).default,
        );
      } catch (error) {
        throw new Error(
          `${directory}/${variantDirectory}: could not load meta.ts (${error instanceof Error ? error.message : error}).`,
        );
      }

      const category = categoriesBySlug.get(slugify(rawVariant.category.name));
      if (!category)
        throw new Error(
          `${directory}/${variantDirectory}: category \"${rawVariant.category.name}\" does not exist.`,
        );
      const variant = normalizeVariant(
        templateSlug,
        rawVariant,
        await Bun.file(descriptionPath).text(),
        category,
      );
      const configPath = `${variantPath}/template.toml`;
      const composePath = `${variantPath}/docker-compose.yml`;
      const [configContent, composeContent] = await Promise.all([
        Bun.file(configPath).text(),
        Bun.file(composePath).text(),
      ]);
      // Deplo reads template.toml with its own lenient parser, so a strict TOML
      // failure is a warning, not a reason to keep a working variant out.
      try {
        Bun.TOML.parse(configContent);
      } catch (error) {
        consola.warn(
          `${directory}/${variantDirectory}: template.toml is not strict TOML (${error instanceof Error ? error.message : error}).`,
        );
      }
      try {
        Bun.YAML.parse(composeContent);
      } catch (error) {
        throw new Error(
          `${directory}/${variantDirectory}: invalid docker-compose.yml (${error instanceof Error ? error.message : error}).`,
        );
      }

      const outputFiles = `${outputDirectory}/files/${templateSlug}/${variant.slug}`;
      files.push(
        { source: configPath, destination: `${outputFiles}/template.toml` },
        {
          source: composePath,
          destination: `${outputFiles}/docker-compose.yml`,
        },
      );
      fileContents[`${templateSlug}/${variant.slug}/template.toml`] =
        configContent;
      fileContents[`${templateSlug}/${variant.slug}/docker-compose.yml`] =
        composeContent;
      variants.push(variant);
      variantSources.set(variant.slug, variantPath);
    }

    if (new Set(variants.map(({ slug }) => slug)).size !== variants.length)
      throw new Error(`${directory}: variant names must produce unique slugs.`);
    if (!variants.some(({ slug }) => slug === DEFAULT_VARIANT_SLUG))
      throw new Error(`${directory}: a "Default" variant is required.`);

    const fallbackLogo = (await sourceImages(templateDirectory, "*")).find(
      (file) =>
        file
          .split("/")
          .pop()
          ?.replace(/\.[^.]+$/, "")
          .toLowerCase() === "logo",
    );
    const template = normalizeTemplate(raw, variants, Boolean(fallbackLogo));
    if (fallbackLogo)
      jobs.push({
        source: fallbackLogo,
        destination: `${outputDirectory}/images/${template.slug}/logo.webp`,
      });
    for (const variant of template.variants) {
      const variantSource = variantSources.get(variant.slug)!;
      const outputImages = `${outputDirectory}/images/${template.slug}/${variant.slug}`;
      const logo = (await sourceImages(variantSource, "*")).find(
        (file) =>
          file
            .split("/")
            .pop()
            ?.replace(/\.[^.]+$/, "")
            .toLowerCase() === "logo",
      );
      if (!logo && !fallbackLogo)
        throw new Error(
          `${directory}/${variant.slug}: missing logo; add a template logo or a variant logo.`,
        );
      variant.logo = `/images/${template.slug}/${variant.slug}/logo.webp`;
      jobs.push({
        source: logo ?? fallbackLogo!,
        destination: `${outputImages}/logo.webp`,
      });
      for (const [index, image] of (
        await sourceImages(`${variantSource}/images`)
      ).entries()) {
        const output = imageUrlSchema.parse(
          `/images/${template.slug}/${variant.slug}/${index + 1}.webp`,
        );
        variant.images.push(output);
        jobs.push({
          source: image,
          destination: `${outputImages}/${index + 1}.webp`,
        });
      }
    }
    templates.push(template);
  }

  if (
    new Set(templates.map((template) => template.slug)).size !==
    templates.length
  )
    throw new Error("Template names must produce unique slugs.");
  const data = { categories, templates } satisfies GeneratedData;
  const hashableData = {
    ...data,
    templates: data.templates.map((template) => ({
      ...template,
      logo: null,
      variants: template.variants.map((variant) => ({
        ...variant,
        logo: null,
        images: [],
      })),
    })),
  };
  const hash = new Bun.CryptoHasher("sha256")
    .update(stableJson({ data: hashableData, files: fileContents }))
    .digest("hex");
  const version = `${hash}`;
  for await (const file of new Bun.Glob("**/*").scan({
    cwd: outputDirectory,
    onlyFiles: true,
  }))
    await Bun.file(`${outputDirectory}/${file}`).delete();
  await Promise.all(
    jobs.map(({ source, destination }) => convertImage(source, destination)),
  );
  await Promise.all(
    files.map(({ source, destination }) =>
      Bun.write(destination, Bun.file(source)),
    ),
  );
  await Bun.write(`${outputDirectory}/data.ts`, dataFile(data, version));

  consola.success("Templates generated");
  consola.info(
    `${templates.length} templates · ${templates.reduce((total, template) => total + template.variants.length, 0)} variants · ${categories.length} categories · ${jobs.length} WebP images · ${files.length} files`,
  );
}
