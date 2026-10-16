import type { FilterState, Product } from "../types/Product";

export const ALL_CATEGORIES = "All Categories";

export const DEFAULT_FILTERS: FilterState = {
  search: "",
  category: ALL_CATEGORIES,
  sort: "default",
};

export function getCategories(items: Product[]): string[] {
  return Array.from(new Set(items.map((item) => item.category))).sort();
}

/** Applies search, category and sort without mutating the source array. */
export function filterAndSortProducts(
  items: Product[],
  { search, category, sort }: FilterState
): Product[] {
  const query = search.trim().toLowerCase();

  const filtered = items.filter((item) => {
    const matchesName = query === "" || item.name.toLowerCase().includes(query);
    const matchesCategory = category === ALL_CATEGORIES || item.category === category;
    return matchesName && matchesCategory;
  });

  if (sort === "price-asc") return [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") return [...filtered].sort((a, b) => b.price - a.price);
  return filtered;
}
