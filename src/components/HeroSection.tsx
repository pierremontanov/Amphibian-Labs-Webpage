import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-800 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-800 to-navy-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-up">
            {t("hero.headline")}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-navy-200 leading-relaxed animate-fade-up animation-delay-100">
            {t("hero.subheadline")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-200">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
            >
              {t("hero.cta_primary")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#repositories"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-teal-400 border border-teal-400/30 rounded-lg hover:bg-teal-400/10 transition-colors"
            >
              {t("hero.cta_secondary")}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
