import { z } from "zod";
import { slugify } from "./utils/strings";

export const slugSchema = z.string().min(1).max(80).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Expected a lowercase kebab-case slug.");
const nameSchema = z.string().trim().min(2).max(80);

const listQuerySchema = z.strictObject({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().trim().max(200).default(""),
  order: z.enum(["asc", "desc"]).default("asc"),
});

export const templateListQuerySchema = listQuerySchema.extend({
  category: slugSchema.optional(),
  sort: z.enum(["name", "category", "createdAt", "lastUpdate"]).default("name"),
});

export const categoryListQuerySchema = listQuerySchema.extend({
  sort: z.enum(["name"]).default("name"),
});

export const imageUrlSchema = z.string().regex(/^\/images\/[a-z0-9]+(?:-[a-z0-9]+)*\/[1-9]\d*\.webp$/, "Expected a numbered WebP image path.");
export const httpsUrlSchema = z.url().max(2_048).refine((url) => url.startsWith("https://"), "Expected an HTTPS URL.");

export const linkSchema = z.object({
  label: z.string().trim().min(2).max(80),
  url: httpsUrlSchema,
}).strict();

export const categoryRawSchema = z.object({
  name: nameSchema.max(48),
  icon: z.string().min(3).max(64).regex(/^[a-z][a-z0-9-]*$/, "Expected a kebab-case icon name."),
  description: z.string().trim().min(20).max(400),
}).strict();

export const categorySchema = categoryRawSchema.extend({ slug: slugSchema }).superRefine(({ name, slug }, context) => {
  if (slug !== slugify(name)) context.addIssue({ code: "custom", path: ["slug"], message: "Slug must match the category name." });
});

export const templateRawSchema = z.object({
  name: nameSchema,
  shortDescription: z.string().trim().min(20).max(240),
  category: categoryRawSchema,
  developedBy: linkSchema,
  submittedBy: linkSchema,
  links: z.object({
    github: httpsUrlSchema.optional(),
    website: httpsUrlSchema.optional(),
    docs: httpsUrlSchema.optional(),
  }).strict().refine((links) => Object.values(links).some(Boolean), "At least one project link is required."),
  lastUpdate: z.date(),
  createdAt: z.date(),
}).strict().superRefine(({ createdAt, lastUpdate }, context) => {
  if (createdAt > lastUpdate) context.addIssue({ code: "custom", path: ["lastUpdate"], message: "lastUpdate must be on or after createdAt." });
});

const logoUrlSchema = z.string().regex(/^\/images\/[a-z0-9]+(?:-[a-z0-9]+)*\/logo\.webp$/, "Expected a WebP logo path.");
const templateFilesSchema = z.object({
  config: z.string().regex(/^\/files\/[a-z0-9]+(?:-[a-z0-9]+)*\/template\.toml$/),
  compose: z.string().regex(/^\/files\/[a-z0-9]+(?:-[a-z0-9]+)*\/docker-compose\.yml$/),
}).strict();

export const templateSchema = templateRawSchema.safeExtend({
  slug: slugSchema,
  logo: logoUrlSchema.nullable(),
  images: z.array(imageUrlSchema),
  files: templateFilesSchema,
  category: categorySchema,
  description: z.string().trim().min(20).max(20_000),
}).superRefine(({ name, slug }, context) => {
  if (!slugSchema.safeParse(slug).success || slug !== slugify(name))
    context.addIssue({ code: "custom", path: ["slug"], message: "Slug must match the template name." });
});

export type ImageURL = z.infer<typeof imageUrlSchema>;
export type URL = z.infer<typeof httpsUrlSchema>;
export type Link = z.infer<typeof linkSchema>;
export type CategoryRaw = z.infer<typeof categoryRawSchema>;
export type Category = z.infer<typeof categorySchema>;
export type TemplateRaw = z.infer<typeof templateRawSchema>;
export type Template = z.infer<typeof templateSchema>;
export type TemplateListQuery = z.infer<typeof templateListQuerySchema>;
export type CategoryListQuery = z.infer<typeof categoryListQuerySchema>;
