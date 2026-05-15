import { Link } from "react-router-dom";
import { Leaf, Globe, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-primary/80 to-secondary/70 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="py-20 px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Jeyda logo" className="h-12 w-auto brightness-0 invert" />
                <span className="font-heading text-2xl font-bold">Jeyda</span>
              </div>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Premium manufacturer & global exporter of eco-conscious home and personal care products.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/80 group cursor-pointer hover:text-white transition-colors">
                <Leaf size={16} className="group-hover:rotate-12 transition-transform" />
                <span className="font-body font-semibold">Eco-Certified Manufacturing</span>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-6 text-white">Products</h4>
              <ul className="space-y-3 font-body text-sm">
                <li>
                  <Link to="/products" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    Multi-Effect Laundry Detergent
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    Utensil Cleanser Essence
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    Antibacterial Handwash
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    Aloe Moisturizing Shower Gel
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3 font-body text-sm">
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-6 text-white">Get in Touch</h4>
              <ul className="space-y-3 font-body text-sm text-white/70">
                <li className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/10 group-hover:bg-white/20 rounded-lg transition-all">
                    <Mail size={14} />
                  </div>
                  <span>215179755@qq.com</span>
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/10 group-hover:bg-white/20 rounded-lg transition-all">
                    <Phone size={14} />
                  </div>
                  <span>+254729596868</span>
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/10 group-hover:bg-white/20 rounded-lg transition-all">
                    <Phone size={14} />
                  </div>
                  <span>+254759898222</span>
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/10 group-hover:bg-white/20 rounded-lg transition-all shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </div>
                  <span>Wuyi Rd, Machakos, Kenya<br />P.O. Box: 1234-00100</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-body text-xs text-white/50 order-2 md:order-1">
                © {new Date().getFullYear()} Jeyda Daily Supplies Co. Ltd. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 font-body text-xs text-white/60">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                  ISO 9001 Certified
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                  GMP Compliant
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                  Eco-Friendly
                </span>
              </div>
              <p className="font-body text-xs text-white/50 order-3 md:order-3">
                Designed & Published by: NexxaCrafts.co.ke
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
