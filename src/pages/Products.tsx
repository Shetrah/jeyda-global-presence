import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  products,
  categoryLabels,
  type ProductCategory,
} from "@/data/products";

const allSizes = ["250ml", "500ml", "750ml", "1L", "1.5L", "5L", "20L"];
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

  const availableSizes = useMemo(() => {
    const categoryProducts =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);
    const sizes = new Set(categoryProducts.flatMap((product) => product.sizes));

    return allSizes.filter((availableSize) => sizes.has(availableSize));
  }, [category]);

  useEffect(() => {
    if (size !== "all" && !availableSizes.includes(size)) {
      setSize("all");
    }
  }, [availableSizes, size]);

  const filtered = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (size !== "all" && !p.sizes.includes(size)) return false;
    return true;
  });

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="section-padding pb-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
            <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            <p className="label-tag text-foreground">Product Catalog</p>
          </div>
          <h1 className="heading-display text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Premium Range
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl">
            Explore our complete line of eco-friendly home and personal care products, available in multiple sizes for domestic and commercial use.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-5 pb-6 sm:px-6 md:px-12 lg:sticky lg:top-16 lg:z-40 lg:px-20 xl:px-32 bg-background/95 lg:bg-background/90 lg:backdrop-blur-lg border-y border-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 py-5">
          {/* Category */}
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`min-h-10 font-body text-xs font-bold px-3.5 sm:px-4 py-2.5 rounded-lg transition-all ${
                    category === cat
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                      : "bg-secondary/20 text-foreground hover:bg-secondary/40 border border-primary/10"
                  }`}
                >
                  {cat === "all" ? "All Products" : categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Volume */}
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Volume
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSize("all")}
                className={`min-h-10 font-body text-xs font-bold px-3.5 sm:px-4 py-2.5 rounded-lg transition-all ${
                  size === "all"
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                    : "bg-secondary/20 text-foreground hover:bg-secondary/40 border border-primary/10"
                }`}
              >
                All Sizes
              </button>
              {availableSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-h-10 font-body text-xs font-bold px-3.5 sm:px-4 py-2.5 rounded-lg transition-all ${
                    size === s
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                      : "bg-secondary/20 text-foreground hover:bg-secondary/40 border border-primary/10"
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
      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product, idx) => (
                <div key={product.id} className="fade-in">
                  <ProductCard
                    product={product}
                    selectedSize={size === "all" ? undefined : size}
                  />
                </div>
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
