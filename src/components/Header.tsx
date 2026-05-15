import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import jeydalogo from "@/assets/logo jeyda 2.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const currentLogo = isAboutPage ? jeydalogo : logo;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex min-h-16 items-center justify-between px-5 py-2.5 sm:px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-lg rounded-lg transition-opacity"></div>
            <img src={currentLogo} alt="Jeyda logo" className="h-9 sm:h-10 md:h-12 w-auto transition-all group-hover:scale-105 relative" />
          </div>
          {!isAboutPage && (
            <span className="hidden sm:inline-block text-[10px] font-body font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent border-l-2 border-primary/30 pl-3 ml-1 hover:border-primary/60 transition-colors">
              Premium Care
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm font-semibold tracking-wide transition-all relative group ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-transform origin-left ${
                location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-body text-sm font-bold bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105 active:scale-95"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground hover:bg-secondary/10 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} className="animate-spin" style={{animationDuration: '0.3s'}} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden max-h-[calc(100svh-4rem)] overflow-y-auto bg-background/98 backdrop-blur-xl border-t border-primary/10 animate-fade-in">
          <nav className="flex flex-col px-5 py-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-body text-base font-semibold py-2.5 px-3 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary"
                    : "text-muted-foreground hover:bg-secondary/10 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="font-body text-sm font-bold bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-lg text-center hover:shadow-lg transition-all w-full"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
