import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Leaf,
  Shield,
  Award,
  Factory,
  Beaker,
} from "lucide-react";
import heroImage from "@/assets/hero-2.jpg";
import manufacturingImage from "@/assets/manufacturing.jpg";
import sustainabilityImage from "@/assets/hero-products-2.jpg";
import heroProductsImage from "@/assets/hero-products.jpg";
import sustainabilityMainImage from "@/assets/sustainability.jpg";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";
import { products } from "@/data/products";

const stats = [
  { value: "50+", label: "Countries Served" },
  { value: "15M+", label: "Units Exported" },
  { value: "12+", label: "Years of Excellence" },
  { value: "100%", label: "Eco-Certified" },
];

const values = [
  {
    icon: Shield,
    title: "Certified Quality",
    desc: "ISO 9001, GMP, and international safety standards across all production lines.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    desc: "Biodegradable formulas, recyclable packaging, and carbon-neutral manufacturing.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Trusted by distributors and partners across 50+ countries worldwide.",
  },
  {
    icon: Factory,
    title: "OEM & ODM",
    desc: "Full-service private label and custom formulation capabilities for global brands.",
  },
  {
    icon: Award,
    title: "Premium Standards",
    desc: "Every product is developed with the highest-grade raw materials and tested rigorously.",
  },
  {
    icon: Beaker,
    title: "R&D Innovation",
    desc: "Continuous research into plant-based, high-performance cleaning technologies.",
  },
];

const heroSlides = [
  {
    image: heroImage,
    alt: "Jeyda premium home care products lineup",
  },
  {
    image: manufacturingImage,
    alt: "Jeyda manufacturing facility",
  },
  {
    image: sustainabilityImage,
    alt: "Sustainable eco-friendly manufacturing",
  },
  {
    image: heroProductsImage,
    alt: "Jeyda premium care products",
  },
  {
    image: sustainabilityMainImage,
    alt: "Jeyda sustainability commitment",
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides}>
        <div className="max-w-2xl">
          <p className="label-tag text-accent mb-4 md:mb-6 animate-fade-up text-center text-base md:text-xl font-semibold">
            Ingenious Daily Chemicals, Cleanliness Easily Achieved
          </p>
          <h1 className="heading-display text-background mb-6 animate-fade-up-delay-1">
            <span className="text-3xl md:text-6xl block mb-2">Welcome to</span>
            <span className="text-background drop-shadow-2xl block text-4xl md:text-7xl font-black text-center" style={{textShadow: '0 12px 24px rgba(0, 0, 0, 0.6), 0 6px 12px rgba(0, 0, 0, 0.5)'}}>Jeyda Supplies Co., Ltd</span>
            <span className="text-2xl md:text-6xl mt-3 md:mt-5 block">Thank you for reaching out!</span>
          </h1>
          <div className="mb-6 md:mb-8 max-w-lg animate-fade-up-delay-2">
            <p className="text-sm md:text-body text-background/80 font-semibold mb-2 md:mb-3">
              We are specialised in:
            </p>
            <ul className="text-sm md:text-body text-background/80 space-y-1 md:space-y-2 list-disc list-inside">
              <li>Shower Gel</li>
              <li>HandWash</li>
              <li>DishWash</li>
              <li>Laundry Detergents</li>
              <li>Shampoo</li>
              <li>Oil Stain Remover</li>
              <li>Glass Cleaner</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body text-sm font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-background/30 text-background font-body text-sm font-semibold px-6 py-3 rounded-md hover:bg-background/10 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </HeroCarousel>

      {/* Stats */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-primary-foreground/70 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="label-tag mb-3">Our Collection</p>
            <h2 className="heading-section text-foreground mb-4">
              Premium Care Products
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Scientifically formulated, sustainably produced — engineered for the world's most demanding markets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View Full Catalog <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="label-tag mb-3">Why Jeyda</p>
            <h2 className="heading-section text-foreground mb-4">
              Global Excellence, Responsibly Crafted
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item) => (
              <div key={item.title} className="glass-card p-8">
                <item.icon className="text-accent mb-4" size={28} />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-tag mb-3">Manufacturing Strength</p>
            <h2 className="heading-section text-foreground mb-6">
              Advanced Production.
              <br />
              Uncompromising Quality.
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              Our state-of-the-art manufacturing facility features fully automated production lines, precision dosing systems, and in-house quality control laboratories. Every batch undergoes rigorous testing to meet international standards.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Automated high-speed bottling & packaging lines",
                "In-house QC laboratory with advanced analytics",
                "OEM/ODM services for private label partners",
                "Bulk production capacity: 500,000+ units/month",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground">
                  <Shield size={16} className="text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={manufacturingImage}
              alt="Jeyda advanced manufacturing facility"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={sustainabilityImage}
            alt="Sustainable eco-friendly manufacturing"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="max-w-7xl mx-auto max-w-2xl text-center mx-auto">
            <p className="label-tag text-accent mb-3">Sustainability</p>
            <h2 className="heading-section text-background mb-6">
              Our Commitment to the Planet
            </h2>
            <p className="text-body text-background/80 mb-8">
              From biodegradable formulations to recyclable packaging and solar-powered facilities, sustainability isn't an afterthought — it's the foundation of everything we create. We are committed to reducing our carbon footprint while delivering uncompromising product performance.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body text-sm font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Our Green Initiatives <Leaf size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-4">
            Ready to Partner With Jeyda?
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you're a distributor, retailer, or looking for OEM/ODM solutions, we'd love to explore how we can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-border text-foreground font-body text-sm font-semibold px-8 py-3 rounded-md hover:bg-secondary transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
