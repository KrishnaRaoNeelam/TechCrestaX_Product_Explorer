import { useState } from "react";
import type { Product } from "../types/Product";
import { formatPrice, getFallbackImage } from "../utils/format";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const src = imageFailed ? getFallbackImage(product.name) : product.image;

  return (
    <article className="card">
      <div className="card__media">
        <img
          src={src}
          alt={`${product.name} - ${product.category}`}
          loading="lazy"
          width={600}
          height={450}
          onError={() => setImageFailed(true)}
        />
      </div>
      <div className="card__body">
        <span className="card__category">{product.category}</span>
        <h3 className="card__title">{product.name}</h3>
        <p className="card__description">{product.description}</p>
        <p className="card__price">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
