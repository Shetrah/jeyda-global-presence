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

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="label-tag mb-3">About Jeyda</p>
          <h1 className="heading-display text-foreground mb-6 max-w-3xl">
            Pioneering Premium Care
            <br />
            for a Sustainable World
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl">
            Founded on the belief that exceptional quality and environmental responsibility are inseparable, Jeyda has grown from a regional manufacturer into a globally recognized premium care brand — serving markets in over 50 countries.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Reach */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
          ].map((item) => (
            <div key={item.title} className="glass-card p-8">
              <item.icon className="text-accent mb-4" size={28} />
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={manufacturingImage}
              alt="Jeyda manufacturing facility"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="label-tag mb-3">Manufacturing Strength</p>
            <h2 className="heading-section text-foreground mb-6">
              World-Class Production Capabilities
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              Our 25,000 sq. meter facility houses fully automated production lines, advanced mixing and blending systems, precision filling equipment, and comprehensive quality control laboratories.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Factory, label: "500K+ units/month capacity" },
                { icon: Factory, label: "Automated bottling & packaging" },
                { icon: Factory, label: "In-house R&D laboratory" },
                { icon: Factory, label: "OEM/ODM private label services" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 font-body text-sm text-foreground"
                >
                  <item.icon size={16} className="text-accent mt-0.5 shrink-0" />
                  {item.label}
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Discuss OEM Partnership <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={sustainabilityImage}
            alt="Jeyda sustainability initiatives"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="max-w-7xl mx-auto">
            <p className="label-tag text-accent mb-3">Sustainable Solutions</p>
            <h2 className="heading-section text-background mb-12 max-w-2xl">
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
              ].map((item) => (
                <div key={item.title}>
                  <item.icon className="text-accent mb-3" size={24} />
                  <h3 className="font-heading text-lg font-semibold text-background mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-background/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-4">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you're seeking a premium private label partner, a bulk supplier, or a trusted distribution partner — Jeyda is ready.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
