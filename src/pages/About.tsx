import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Globe,
  Factory,
  Leaf,
  Recycle,
  Sun,
  Droplets,
} from "lucide-react";
import manufacturingImage from "@/assets/manufacturing.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="About Us — ISO Certified Global Manufacturer"
        description="Learn about Jeyda Daily Supplies Co. Ltd. — an ISO 9001 certified manufacturer of eco-friendly home and personal care products, serving 50+ countries with OEM/ODM services since 2013."
        path="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Jeyda Daily Supplies Co. Ltd.",
          "description": "Jeyda is an ISO 9001 certified, eco-conscious manufacturer of premium laundry, dish, handwash, and shower gel products serving 50+ countries worldwide.",
          "url": "https://www.jeydasupplies.com/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Jeyda Daily Supplies Co. Ltd.",
            "foundingDate": "2013",
            "areaServed": "Worldwide",
            "certification": "ISO 9001, GMP"
          }
        }}
      />
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
            <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            <p className="label-tag text-foreground">About Jeyda</p>
          </div>
          <h1 className="heading-display text-foreground mb-6 max-w-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Pioneering Premium Care
            <span className="block">for a Sustainable World</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl leading-relaxed">
            Founded on the belief that exceptional quality and environmental responsibility are inseparable, Jeyda has grown from a regional manufacturer into a globally recognized premium care brand — serving markets in over 50 countries.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Reach */}
      <section className="section-padding relative bg-gradient-to-b from-background to-slate-50">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To create premium home and personal care products that deliver exceptional performance while minimizing environmental impact — making sustainable living accessible to consumers worldwide.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become the global benchmark for eco-conscious care products — trusted by consumers, valued by partners, and respected for our commitment to innovation, quality, and sustainability.",
            },
            {
              icon: Globe,
              title: "Global Reach",
              text: "With distribution networks spanning over 50 countries across Asia, Africa, the Middle East, Europe, and the Americas, Jeyda brings premium care to every corner of the world.",
            },
          ].map((item, idx) => (
            <div key={item.title} className="premium-card p-6 sm:p-8 rounded-xl group fade-in">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 blur-lg rounded-full transition-opacity"></div>
                <item.icon className="relative text-primary group-hover:text-secondary transition-colors" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all group">
            <img
              src={manufacturingImage}
              alt="Jeyda manufacturing facility"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              <p className="label-tag text-foreground">Manufacturing Strength</p>
            </div>
            <h2 className="heading-section text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              World-Class Production Capabilities
            </h2>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              Our 25,000 sq. meter facility houses fully automated production lines, advanced mixing and blending systems, precision filling equipment, and comprehensive quality control laboratories.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {[
                { icon: Factory, label: "500K+ units/month capacity" },
                { icon: Factory, label: "Automated bottling & packaging" },
                { icon: Factory, label: "In-house R&D laboratory" },
                { icon: Factory, label: "OEM/ODM private label services" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 font-body text-sm text-foreground group hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg group-hover:from-primary/30 group-hover:to-secondary/30 transition-all mt-0.5">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-primary to-secondary font-body text-base font-bold px-7 py-3.5 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Discuss OEM Partnership <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sustainabilityImage}
            alt="Jeyda sustainability initiatives"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/75 to-foreground/70" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="w-2 h-2 bg-gradient-to-r from-accent to-white rounded-full"></span>
              <p className="label-tag text-white font-semibold">Sustainable Solutions</p>
            </div>
            <h2 className="heading-section text-white mb-10 md:mb-16 max-w-3xl drop-shadow-lg">
              Environmental Responsibility at Every Step
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Biodegradable Formulas",
                  desc: "All products are formulated with plant-derived, biodegradable surfactants that break down safely in the environment.",
                },
                {
                  icon: Recycle,
                  title: "Recyclable Packaging",
                  desc: "We use 100% recyclable materials and are transitioning to post-consumer recycled plastics across all product lines.",
                },
                {
                  icon: Sun,
                  title: "Solar-Powered Facility",
                  desc: "Over 60% of our manufacturing energy comes from on-site solar panels, reducing our carbon footprint significantly.",
                },
                {
                  icon: Droplets,
                  title: "Water Conservation",
                  desc: "Advanced water recycling systems reduce freshwater consumption in our production processes by 40%.",
                },
              ].map((item, idx) => (
                <div key={item.title} className="fade-in">
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all group">
                    <item.icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={28} />
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-r from-primary via-secondary to-primary opacity-10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="heading-section text-foreground mb-6">
            Let's Build Something
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Whether you're seeking a premium private label partner, a bulk supplier, or a trusted distribution partner — Jeyda is ready to elevate your brand.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-body text-base font-bold px-8 py-3.5 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105 active:scale-95"
          >
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
