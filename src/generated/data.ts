import type { Category, Template } from "../schemas";

const data = {
  "categories": [],
  "templates": []
} as const satisfies { categories: readonly Category[]; templates: readonly Template[] };

export const categories: readonly Category[] = data.categories;
export const templates: readonly Template[] = data.templates;
export const version = "2a58993dc6ebd1165942df1dccd21b89b6391c06d874837c99139e7c69b65c85";
