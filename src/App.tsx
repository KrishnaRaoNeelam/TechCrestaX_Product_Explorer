import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterControls from "./components/FilterControls";
import ProductGrid from "./components/ProductGrid";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import { products } from "./data/products";
import type { SortOption } from "./types/Product";
import {
  ALL_CATEGORIES,
  DEFAULT_FILTERS,
  filterAndSortProducts,
  getCategories,
} from "./utils/productFilters";

const categories = getCategories(products);

export default function App() {
  const [search, setSearch] = useState<string>(DEFAULT_FILTERS.search);
  const [category, setCategory] = useState<string>(ALL_CATEGORIES);
  const [sort, setSort] = useState<SortOption>(DEFAULT_FILTERS.sort);

  const visibleProducts = useMemo(
    () => filterAndSortProducts(products, { search, category, sort }),
    [search, category, sort]
  );

  const clearFilters = () => {
    setSearch(DEFAULT_FILTERS.search);
    setCategory(DEFAULT_FILTERS.category);
    setSort(DEFAULT_FILTERS.sort);
  };

  const count = visibleProducts.length;

  return (
    <div className="app">
      <Navbar />
      <main className="container main">
        <section className="intro">
          <h1 className="intro__title">Find your next favourite thing</h1>
          <p className="intro__text">
            Search by name, narrow by category and sort by price.
          </p>
        </section>

        <section className="toolbar" aria-label="Search and filters">
          <SearchBar value={search} onChange={setSearch} />
          <FilterControls
            categories={categories}
            category={category}
            sort={sort}
            onCategoryChange={setCategory}
            onSortChange={setSort}
          />
        </section>

        <p className="count" aria-live="polite">
          Showing {count} {count === 1 ? "product" : "products"}
        </p>

        {count > 0 ? (
          <ProductGrid products={visibleProducts} />
        ) : (
          <EmptyState onClear={clearFilters} />
        )}
      </main>
      <Footer />
    </div>
  );
}
