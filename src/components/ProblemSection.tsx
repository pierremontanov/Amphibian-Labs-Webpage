import { useTranslation } from "react-i18next";

const problemKeys = ["tech_gap", "rip_replace", "trust_gap"] as const;

export default function ProblemSection() {
  const { t } = useTranslation("home");

  return (
    <section id="problems" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
          {t("problems.section_title")}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problemKeys.map((key) => (
            <div
              key={key}
              className="rounded-xl p-6 bg-coral-50 dark:bg-coral-800/10 border border-coral-100 dark:border-coral-800/20"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(`problems.${key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`problems.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
