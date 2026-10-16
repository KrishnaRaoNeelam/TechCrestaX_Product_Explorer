import type { SortOption } from "../types/Product";
import { ALL_CATEGORIES } from "../utils/productFilters";

interface FilterControlsProps {
  categories: string[];
  category: string;
  sort: SortOption;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: SortOption) => void;
}

export default function FilterControls({
  categories,
  category,
  sort,
  onCategoryChange,
  onSortChange,
}: FilterControlsProps) {
  return (
    <>
      <div className="field">
        <label htmlFor="category" className="field__label">
          Category
        </label>
        <select
          id="category"
          className="control"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value={ALL_CATEGORIES}>{ALL_CATEGORIES}</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="sort" className="field__label">
          Sort by
        </label>
        <select
          id="sort"
          className="control"
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
        >
          <option value="default">Default Order</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </>
  );
}
