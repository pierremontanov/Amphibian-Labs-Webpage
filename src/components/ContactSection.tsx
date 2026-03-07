import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Contact
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone size={18} className="text-primary" />
            <a href="tel:0420729667" className="hover:text-foreground transition-colors">
              0420 729 667
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail size={18} className="text-primary" />
            <a href="mailto:info@amphibianlabs.com.au" className="hover:text-foreground transition-colors">
              info@amphibianlabs.com.au
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-primary" />
            <span>QLD, Australia</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="mailto:info@amphibianlabs.com.au"
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
        <p className="text-sm text-muted-foreground">
          Tell us the process that is wasting the most time. We'll reply with the next step.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
