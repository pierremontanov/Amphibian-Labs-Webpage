import { Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column – copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight leading-[1.1]">
              Tech to help businesses
            </h2>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Amphibian Labs
            </h1>
            <p className="mt-3 text-lg text-muted-foreground font-medium italic">
              We turn problems into working systems
            </p>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Many businesses know something isn't working but don't know where to start. Amphibian Labs translates the business problem into a clear tech plan, selects the right software and integrations, and delivers improvements step by step — without the cost of a full IT department.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:pierremontanov@gmail.com"
                className="inline-flex items-center gap-2 gradient-teal text-primary-foreground px-6 py-3 rounded-lg text-base font-semibold shadow-button hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Email us
              </a>
              <a
                href="tel:0420729667"
                className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-lg text-base font-semibold hover:bg-secondary transition-colors"
              >
                <Phone size={18} />
                Call us
              </a>
            </div>
            <p className="mt-2 text-xs text-muted-foreground/70 tracking-wide uppercase">
              Trusted by Australian small and medium businesses
            </p>
          </div>

          {/* Right column – animated abstract graphic */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Floating circles / abstract tech graphic */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border-2 border-primary/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-primary/15 animate-[spin_25s_linear_infinite]" />
              {/* Glowing dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 animate-pulse" />
              <div className="absolute bottom-8 right-4 w-2.5 h-2.5 rounded-full bg-primary/50 animate-pulse [animation-delay:0.5s]" />
              <div className="absolute top-1/3 left-2 w-2 h-2 rounded-full bg-primary/40 animate-pulse [animation-delay:1s]" />
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/50 animate-pulse [animation-delay:1.5s]" />
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl gradient-teal opacity-20 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-primary/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-6 h-6 rounded-md bg-primary/60" />
                </div>
              </div>
              {/* Connector lines */}
              <div className="absolute top-1/2 left-0 w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
              <div className="absolute top-1/2 right-0 w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
              <div className="absolute top-0 left-1/2 w-px h-12 bg-gradient-to-b from-transparent to-primary/30" />
              <div className="absolute bottom-0 left-1/2 w-px h-12 bg-gradient-to-t from-transparent to-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
