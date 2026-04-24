import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Zap, Network, Brain, Globe, Search, Database,
  ArrowRight, ChevronDown, ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  network: Network,
  brain: Brain,
  globe: Globe,
  search: Search,
  database: Database,
};

const tierConfig = {
  understand: {
    color: "teal",
    barBg: "bg-teal-600",
    cardBorder: "border-teal-200 dark:border-teal-700/30",
    cardHover: "hover:border-teal-400 dark:hover:border-teal-600",
    iconBg: "bg-teal-50 dark:bg-teal-900/20",
    iconColor: "text-teal-600",
  },
  build: {
    color: "sky",
    barBg: "bg-sky-600",
    cardBorder: "border-sky-100 dark:border-sky-800/30",
    cardHover: "hover:border-sky-400 dark:hover:border-sky-600",
    iconBg: "bg-sky-50 dark:bg-sky-800/10",
    iconColor: "text-sky-600",
  },
  share: {
    color: "amber",
    barBg: "bg-amber-600",
    cardBorder: "border-amber-100 dark:border-amber-800/30",
    cardHover: "hover:border-amber-400 dark:hover:border-amber-600",
    iconBg: "bg-amber-50 dark:bg-amber-800/10",
    iconColor: "text-amber-600",
  },
};

const servicesByTier: Record<string, string[]> = {
  understand: ["vendor-selection", "crm-cleanup"],
  build: ["automation", "integration", "ai-extraction", "web-solutions"],
  share: [],
};

const tierOrder = ["understand", "build", "share"] as const;

export default function ServicesPage() {
  const { t } = useTranslation("services");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqItems = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: t("breadcrumb_services", { defaultValue: "Services" }) },
            ]}
          />

          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Tiers + Service Cards */}
          <div className="space-y-16">
            {tierOrder.map((tierKey) => {
              const config = tierConfig[tierKey];
              const services = servicesByTier[tierKey];

              return (
                <div key={tierKey}>
                  {/* Tier header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-1.5 h-8 rounded-full ${config.barBg}`} />
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        {t(`tiers.${tierKey}.title`)}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {t(`tiers.${tierKey}.subtitle`)}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 max-w-3xl">
                    {t(`tiers.${tierKey}.description`)}
                  </p>

                  {/* Service cards */}
                  {services.length > 0 && (
                    <div className={`grid gap-4 sm:grid-cols-2 ${services.length > 2 ? "lg:grid-cols-2" : ""}`}>
                      {services.map((slug) => {
                        const IconComp = iconMap[t(`services.${slug}.icon`)] || Brain;
                        return (
                          <Link
                            key={slug}
                            to={`/services/${slug}`}
                            className={`group flex items-start gap-4 p-5 rounded-lg bg-card border ${config.cardBorder} ${config.cardHover} hover:shadow-card-hover transition-all`}
                          >
                            <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${config.iconBg}`}>
                              <IconComp className={`w-5 h-5 ${config.iconColor}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-foreground group-hover:text-teal-600 transition-colors">
                                {t(`services.${slug}.title`)}
                              </h3>
                              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                {t(`services.${slug}.excerpt`)}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-teal-600 transition-colors mt-1 flex-shrink-0" />
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {/* Share tier has no detail pages - show inline content */}
                  {tierKey === "share" && (
                    <div className="p-5 rounded-lg bg-card border border-amber-100 dark:border-amber-800/30">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Visit our{" "}
                        <Link to="/repositories" className="text-teal-600 hover:underline font-medium">
                          open-source repositories
                        </Link>{" "}
                        to explore production-grade tools, templates, and community resources - all under MIT license.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              {t("faq.title")}
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {item.question}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ JSON-LD */}
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.answer,
                    },
                  })),
                })}
              </script>
            </Helmet>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("cta.body")}
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
