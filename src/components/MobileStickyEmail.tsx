import { Mail } from "lucide-react";

const MobileStickyEmail = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-card/90 backdrop-blur-lg border-t border-border">
      <a
        href="mailto:info@amphibianlabs.com.au"
        className="flex items-center justify-center gap-2 w-full gradient-teal text-primary-foreground py-3 rounded-lg text-base font-semibold shadow-button"
      >
        <Mail size={18} />
        Email
      </a>
    </div>
  );
};

export default MobileStickyEmail;
