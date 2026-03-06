import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "What You Get", href: "#outcomes" },
  { label: "How It Works", href: "#process" },
  { label: "Options", href: "#options" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-lg font-bold text-foreground tracking-tight">
            <img src={logo} alt="Amphibian Labs logo" className="h-9 w-9 object-contain" />
            Amphibian Labs
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:pierremontanov@gmail.com"
              className={`inline-flex items-center gap-2 gradient-teal text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-button hover:opacity-90 transition-all ${
                scrolled ? "scale-100 opacity-100" : "scale-95 opacity-80"
              }`}
            >
              <Mail size={16} />
              Email me
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:pierremontanov@gmail.com"
            className="mt-2 block text-center gradient-teal text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Email me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
