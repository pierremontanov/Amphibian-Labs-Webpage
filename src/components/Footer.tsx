import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 font-semibold text-foreground">
            <img src={logo} alt="Amphibian Labs logo" className="h-7 w-7 object-contain" />
            Amphibian Labs
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>QLD, Australia</span>
            <a href="tel:0420729667" className="hover:text-foreground transition-colors">
              0420 729 667
            </a>
            <a href="mailto:pierremontanov@gmail.com" className="hover:text-foreground transition-colors">
              pierremontanov@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
