import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles } from "lucide-react";

const tierKeys = ["discover", "build", "evolve"] as const;

export default function EngagementSection() {
  const { t } = useTranslation("home");

  return (
    <section id="engagement" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
          {t("engagement.section_title")}
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          {t("engagement.intro")}
        </p>

        {/* Discovery session callout */}
        <div className="mb-12 rounded-xl border-2 border-amber-400 bg-amber-50 dark:bg-amber-800/10 p-6 sm:p-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-800/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-2xl font-bold text-foreground">
                  {t("engagement.discovery.price")}
                </span>
                <span className="text-sm text-muted-foreground">
                  &middot; {t("engagement.discovery.duration")}
                </span>
                <span className="text-sm text-muted-foreground">
                  &middot; {t("engagement.discovery.title")}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {t("engagement.discovery.description")}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
              >
                {t("engagement.discovery.cta")}
              </a>
            </div>
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tierKeys.map((key) => {
            const bullets = t(`engagement.${key}.bullets`, { returnObjects: true }) as string[];
            return (
              <div
                key={key}
                className="flex flex-col rounded-xl border border-border bg-card p-6 hover:shadow-card-hover transition-shadow"
              >
                {/* Label */}
                <span className="text-xs font-medium uppercase tracking-widest text-teal-600 mb-2">
                  {t(`engagement.${key}.label`)}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {t(`engagement.${key}.title`)}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2 flex-1 mb-6">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Best for */}
                <p className="text-xs text-muted-foreground/80 italic mb-4">
                  {t(`engagement.${key}.best_for`)}
                </p>

                {/* Pricing note */}
                <p className="text-xs text-muted-foreground mb-4">
                  {t("engagement.scoped")}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                >
                  {t("cta.lets_talk", { ns: "common" })}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
