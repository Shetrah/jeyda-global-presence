import { Link } from "react-router-dom";
import { Leaf, Globe, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src={logo} alt="Jeyda logo" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="font-body text-sm opacity-80 leading-relaxed mb-6">
              Jeyda Daily Supplies Co. Ltd. — Premium manufacturer & global exporter of eco-conscious home and personal care products.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-70">
              <Leaf size={14} />
              <span className="font-body">Eco-Certified Manufacturing</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 font-body text-sm opacity-80">
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Multi-Effect Laundry Detergent</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Utensil Cleanser Essence</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Antibacterial Handwash</Link></li>
              <li><Link to="/products" className="hover:opacity-100 transition-opacity">Aloe Moisturizing Shower Gel</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 font-body text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Manufacturing</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 font-body text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>215179755@qq.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span>+254729596868</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span>+254759898222</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Wuyi Rd, Machakos, Kenya<br />P.O. Box: 1234-00100</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} />
                <span>Global Export Partners</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs opacity-60">
            © {new Date().getFullYear()} Jeyda Daily Supplies Co. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-body text-xs opacity-60">
            <span>ISO 9001 Certified</span>
            <span>GMP Compliant</span>
            <span>Eco-Friendly</span>
          </div>
          <p className="font-body text-xs opacity-60">
            Designed & Published by: NexxaCrafts.co.ke
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
