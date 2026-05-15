import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  selectedSize?: string;
}

const ProductCard = ({ product, selectedSize }: ProductCardProps) => {
  const image =
    selectedSize && product.sizeImages[selectedSize]?.[0]
      ? product.sizeImages[selectedSize][0]
      : product.image;

  return (
    <Link
      to={`/products/${product.id}`}
      className="group premium-card flex h-full flex-col rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="bg-gradient-to-br from-secondary/40 to-primary/20 px-4 py-6 sm:px-6 flex items-center justify-center min-h-56 sm:min-h-64">
        <img
          src={image}
          alt={selectedSize ? `${product.name} - ${selectedSize}` : product.name}
          className="w-auto max-w-full h-auto max-h-64 sm:max-h-72 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6 bg-gradient-to-br from-white/80 to-white/60">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block font-body text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-widest">
            {product.category}
          </span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-semibold leading-tight text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.sizes.slice(0, 3).map((size) => (
            <span
              key={size}
              className="font-body text-[11px] font-semibold bg-gradient-to-r from-secondary/20 to-primary/20 text-foreground px-3 py-1 rounded-full border border-primary/20"
            >
              {size}
            </span>
          ))}
          {product.sizes.length > 3 && (
            <span className="font-body text-[11px] font-semibold text-muted-foreground px-3 py-1">
              +{product.sizes.length - 3} more
            </span>
          )}
        </div>
        <div className="mt-auto inline-flex items-center gap-2 font-body text-sm font-bold text-primary group-hover:gap-3 transition-all group-hover:text-secondary">
          View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
