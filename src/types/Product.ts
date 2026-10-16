export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export type SortOption = "default" | "price-asc" | "price-desc";

export interface FilterState {
  search: string;
  category: string;
  sort: SortOption;
}
