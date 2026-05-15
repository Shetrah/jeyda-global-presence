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
        <div className="max-w-2xl py-2">
          <p className="label-tag mb-3 md:mb-5 animate-fade-up text-left text-xs sm:text-sm md:text-base font-semibold tracking-[0.12em] text-rainbow-premium hero-copy-glow">
            Ingenious Daily Chemicals, Cleanliness Easily Achieved
          </p>
          <h1 className="text-background mb-5 animate-fade-up-delay-1 font-heading font-semibold leading-tight tracking-normal hero-copy-glow">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 text-white/95">Welcome to</span>
            <span className="text-rainbow-premium drop-shadow-2xl block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black hero-title-shadow">Jeyda Supplies Co., Ltd</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-3 md:mt-5 text-white/90">Thank you for reaching out!</span>
          </h1>
          <div className="mb-6 md:mb-8 max-w-lg animate-fade-up-delay-2 rounded-xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm">
            <p className="text-sm md:text-body text-white font-semibold mb-2 md:mb-3">
              We are specialised in:
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:text-body text-white/88">
              <li>Shower Gel</li>
              <li>HandWash</li>
              <li>DishWash</li>
              <li>Laundry Detergents</li>
              <li>Shampoo</li>
              <li>Oil Stain Remover</li>
              <li>Glass Cleaner</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 animate-fade-up-delay-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/products"
              className="premium-link inline-flex min-h-11 items-center justify-center gap-2 bg-gradient-to-r from-accent via-primary to-secondary text-white font-body text-sm font-semibold px-6 py-3 rounded-md transition-all hover:-translate-y-0.5"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/40 bg-white/10 text-white font-body text-sm font-semibold px-6 py-3 rounded-md backdrop-blur-sm hover:bg-white/18 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </HeroCarousel>

      {/* Stats */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary/95 via-accent/80 to-secondary/95 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="text-center fade-in">
                <div className="inline-block">
                  <p className="font-heading text-4xl md:text-5xl font-bold text-rainbow-premium drop-shadow-lg">
                    {stat.value}
                  </p>
                </div>
                <p className="font-body text-sm md:text-base text-white/90 mt-2 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 soft-highlight rounded-full">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              <p className="label-tag text-brand-blend">Our Collection</p>
            </div>
            <h2 className="heading-section mb-4 text-brand-blend section-title-glow">
              Premium Care Products
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Scientifically formulated, sustainably produced — engineered for the world's most demanding markets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div key={product.id} className="fade-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="premium-link inline-flex items-center gap-2 font-body text-base font-bold bg-gradient-to-r from-primary via-accent to-secondary text-white px-8 py-3.5 rounded-lg transition-all transform hover:scale-105 active:scale-95"
            >
              View Full Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative bg-gradient-to-b from-background to-slate-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 soft-highlight rounded-full">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              <p className="label-tag text-brand-blend">Why Jeyda</p>
            </div>
            <h2 className="heading-section text-foreground mb-4 section-title-glow">
              Global Excellence,
              <span className="block text-brand-blend">
                Responsibly Crafted
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div 
                key={item.title} 
                className="premium-card p-8 rounded-xl fade-in group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 blur-lg rounded-full transition-opacity"></div>
                  <item.icon className="relative text-primary group-hover:text-secondary transition-colors" size={32} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-blend mb-3 transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 soft-highlight rounded-full">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              <p className="label-tag text-brand-blend">Manufacturing Strength</p>
            </div>
            <h2 className="heading-section text-foreground mb-6 section-title-glow">
              Advanced Production.
              <span className="block text-brand-blend">
                Uncompromising Quality.
              </span>
            </h2>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art manufacturing facility features fully automated production lines, precision dosing systems, and in-house quality control laboratories. Every batch undergoes rigorous testing to meet international standards.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Automated high-speed bottling & packaging lines",
                "In-house QC laboratory with advanced analytics",
                "OEM/ODM services for private label partners",
                "Bulk production capacity: 500,000+ units/month",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 font-body text-sm text-foreground group">
                  <div className="p-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg group-hover:from-primary/30 group-hover:to-secondary/30 transition-all mt-0.5">
                    <Shield size={18} className="text-primary" />
                  </div>
                  <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="premium-link inline-flex items-center gap-2 font-body text-base font-bold text-white bg-gradient-to-r from-primary via-accent to-secondary px-7 py-3.5 rounded-lg transition-all"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all group">
            <img
              src={manufacturingImage}
              alt="Jeyda advanced manufacturing facility"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sustainabilityImage}
            alt="Sustainable eco-friendly manufacturing"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/70 to-foreground/75" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="max-w-2xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="w-2 h-2 bg-gradient-to-r from-accent to-white rounded-full"></span>
              <p className="label-tag text-rainbow-premium font-semibold">Sustainability</p>
            </div>
            <h2 className="heading-section text-rainbow-premium mb-6 drop-shadow-lg">
              Our Commitment to the Planet
            </h2>
            <p className="text-body text-white/90 mb-10 leading-relaxed drop-shadow-md">
              From biodegradable formulations to recyclable packaging and solar-powered facilities, sustainability isn't an afterthought — it's the foundation of everything we create. We are committed to reducing our carbon footprint while delivering uncompromising product performance.
            </p>
            <Link
              to="/about"
              className="premium-link inline-flex items-center gap-2 bg-gradient-to-r from-accent via-primary to-secondary text-white font-body text-base font-bold px-8 py-3.5 rounded-lg transition-all transform hover:scale-105 active:scale-95"
            >
              Our Green Initiatives <Leaf size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary via-secondary to-primary opacity-10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="heading-section text-foreground mb-6 section-title-glow">
            Ready to Partner With
            <span className="block text-brand-blend">
              Jeyda?
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Whether you're a distributor, retailer, or looking for OEM/ODM solutions, we'd love to explore how we can work together to deliver premium products to your markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              to="/contact"
              className="premium-link inline-flex items-center gap-2 bg-gradient-to-r from-primary via-accent to-secondary text-white font-body text-base font-bold px-8 py-3.5 rounded-lg transition-all transform hover:scale-105 active:scale-95"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-body text-base font-bold px-8 py-3.5 rounded-lg hover:bg-primary/5 transition-all group"
            >
              Browse Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
