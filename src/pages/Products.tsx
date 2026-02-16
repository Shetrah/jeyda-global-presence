import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  products,
  categoryLabels,
  type ProductCategory,
} from "@/data/products";

const allSizes = ["250ml", "500ml", "1L", "1.5L", "5L", "20L"];
const categories: (ProductCategory | "all")[] = [
  "all",
  "laundry",
  "dish",
  "handwash",
  "shower",
];

const Products = () => {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [size, setSize] = useState<string>("all");

  const filtered = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (size !== "all" && !p.sizes.includes(size)) return false;
    return true;
  });

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3">Product Catalog</p>
          <h1 className="heading-display text-foreground mb-4">
            Our Premium Range
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl">
            Explore our complete line of eco-friendly home and personal care products, available in multiple sizes for domestic and commercial use.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Category */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`font-body text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                    category === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat === "all" ? "All Products" : categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Volume */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Volume
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSize("all")}
                className={`font-body text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                  size === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All Sizes
              </button>
              {allSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`font-body text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                    size === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-body text-muted-foreground">
                No products match your current filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
