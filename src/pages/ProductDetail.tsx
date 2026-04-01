import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Leaf, Shield, Beaker } from "lucide-react";
import { useState } from "react";
import { products, categoryLabels } from "@/data/products";
import VarietyCarousel from "@/components/VarietyCarousel";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  if (!product) {
    return (
      <main className="pt-24 section-padding">
        <div className="max-w-7xl mx-auto text-center py-20">
          <h1 className="heading-section text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="font-body text-sm text-primary hover:underline">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Image Carousel */}
            <VarietyCarousel
              images={product.sizeImages[product.sizes[selectedSizeIndex]] || [product.image]}
              altText={`${product.name} - ${product.sizes[selectedSizeIndex]}`}
            />

            {/* Info */}
            <div>
              <p className="label-tag mb-2">{categoryLabels[product.category]}</p>
              <h1 className="heading-display text-foreground mb-3">
                {product.name}
              </h1>
              <p className="font-heading text-xl text-accent font-medium mb-6">
                {product.tagline}
              </p>
              <p className="text-body text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Important Note */}
              {product.importantNote && (
                <div className="bg-accent/15 border-l-4 border-accent rounded-r p-6 mb-8">
                  <p className="font-heading text-base font-black text-accent uppercase tracking-wider mb-3">
                    Important Note:
                  </p>
                  <p className="font-body text-base font-bold text-foreground leading-relaxed">
                    {product.importantNote}
                  </p>
                </div>
              )}

              {/* Uses */}
              {product.uses && (
                <div className="bg-accent/15 border-l-4 border-accent rounded-r p-6 mb-8">
                  <p className="font-heading text-base font-black text-accent uppercase tracking-wider mb-3">
                    Uses:
                  </p>
                  <ul className="space-y-2">
                    {product.uses.map((use) => (
                      <p key={use} className="font-body text-base font-bold text-foreground leading-relaxed flex items-start gap-2">
                        <span className="text-accent mt-1">•</span> {use}
                      </p>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sizes */}
              <div className="mb-8">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Available Sizes
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s, index) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSizeIndex(index)}
                      className={`font-body text-sm font-medium px-4 py-2 rounded-md transition-all ${
                        selectedSizeIndex === index
                          ? "bg-accent text-accent-foreground shadow-md"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price for Selected Size */}
              {/* Removed */}

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Request Bulk Quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border text-foreground font-body text-sm font-semibold px-6 py-3 rounded-md hover:bg-secondary transition-colors"
                >
                  Become a Distributor
                </Link>
              </div>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card p-8">
              <Shield className="text-accent mb-4" size={24} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8">
              <Beaker className="text-accent mb-4" size={24} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Key Ingredients
              </h3>
              <ul className="space-y-2">
                {product.ingredients.map((i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">•</span> {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8">
              <Leaf className="text-accent mb-4" size={24} />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Eco & Quality Standards
              </h3>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Biodegradable formula</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Recyclable packaging</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> ISO 9001 certified production</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> GMP compliant facility</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Dermatologically tested</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Cruelty-free</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
