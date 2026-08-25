import { categories, templates } from "./generated/data";
import type { CategoryListQuery, TemplateListQuery } from "./schemas";

function compare(left: string | Date, right: string | Date) {
  return left instanceof Date && right instanceof Date
    ? left.getTime() - right.getTime()
    : String(left).localeCompare(String(right));
}

export function listTemplates(query: TemplateListQuery) {
  const search = query.search.toLocaleLowerCase();
  const items = templates.filter(
    (template) =>
      (!query.category ||
        template.variants.some(
          ({ category }) => category.slug === query.category,
        )) &&
      (!search ||
        [
          template.name,
          template.slug,
          ...template.variants.flatMap((variant) => [
            variant.name,
            variant.slug,
            variant.shortDescription,
            variant.description,
            variant.category.name,
            variant.category.slug,
          ]),
        ].some((value) => value.toLocaleLowerCase().includes(search))),
  );

  const value = (template: (typeof templates)[number]) => template.name;
  const direction = query.order === "asc" ? 1 : -1;
  return items.toSorted(
    (left, right) => direction * compare(value(left), value(right)),
  );
}

export function listCategories(query: CategoryListQuery) {
  const search = query.search.toLocaleLowerCase();
  const items = categories.filter(
    (category) =>
      !search ||
      [category.name, category.slug, category.description].some((value) =>
        value.toLocaleLowerCase().includes(search),
      ),
  );
  const direction = query.order === "asc" ? 1 : -1;
  return items.toSorted(
    (left, right) => direction * compare(left[query.sort], right[query.sort]),
  );
}

export function paginate<T>(
  items: readonly T[],
  { page, limit }: Pick<TemplateListQuery, "page" | "limit">,
) {
  const total = items.length;
  return {
    data: items.slice((page - 1) * limit, page * limit),
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
}
