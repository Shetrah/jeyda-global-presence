import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group glass-card overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="label-tag mb-2">{product.category}</p>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          {product.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="font-body text-[11px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
            >
              {size}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary group-hover:gap-2 transition-all">
          View Details <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
