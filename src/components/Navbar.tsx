import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { key: "services", to: "/services" },
  { key: "about", to: "/about" },
  { key: "blog", to: "/blog" },
  { key: "contact", to: "/#contact" },
];

export default function Navbar() {
  const { t } = useTranslation("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle hash scrolling when navigating to home page sections
  const handleNavClick = (to: string) => {
    if (to.startsWith("/#")) {
      const hash = to.slice(1); // e.g. "#about"
      if (location.pathname === "/") {
        // Already on home, just scroll
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
      // If not on home, the Link will navigate to / and the hash
      // will be handled by the browser
    }
  };

  const isActiveRoute = (to: string) => {
    if (to.startsWith("/#")) return false; // hash links are never "active"
    return location.pathname === to || location.pathname.startsWith(to + "/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-lg border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Amphibian Labs logo" className="w-8 h-8" />
            <span className="font-semibold text-foreground text-sm tracking-tight">
              {t("brand")}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <Link
                  key={link.key}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(link.key)}
                </Link>
              ) : (
                <NavLink
                  key={link.key}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive || isActiveRoute(link.to)
                        ? "text-teal-600 font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {t(link.key)}
                </NavLink>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              to="/#contact"
              onClick={() => handleNavClick("/#contact")}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
            >
              {t("book_session")}
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-8 h-8 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.to.startsWith("/#") ? (
                <Link
                  key={link.key}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {t(link.key)}
                </Link>
              ) : (
                <NavLink
                  key={link.key}
                  to={link.to}
                  className={({ isActive }) =>
                    `block text-sm transition-colors py-1 ${
                      isActive
                        ? "text-teal-600 font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {t(link.key)}
                </NavLink>
              )
            )}
            <Link
              to="/#contact"
              onClick={() => handleNavClick("/#contact")}
              className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white rounded-lg gradient-teal shadow-button mt-2"
            >
              {t("book_session")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
