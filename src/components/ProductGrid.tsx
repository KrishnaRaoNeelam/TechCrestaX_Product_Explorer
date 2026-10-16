import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <ul className="grid">
      {products.map((product) => (
        <li key={product.id} className="grid__item">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
