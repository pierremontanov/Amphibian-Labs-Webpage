import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

export default function OutcomesSection() {
  const { t } = useTranslation("home");
  const rows = t("outcomes.rows", { returnObjects: true }) as Array<{
    before: string;
    after: string;
  }>;

  return (
    <section id="outcomes" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
          {t("outcomes.section_title")}
        </h2>

        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
          {/* Header row — desktop only */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-4 text-xs font-medium uppercase tracking-widest text-muted-foreground px-6">
            <span>{t("outcomes.before_label")}</span>
            <span className="w-8" />
            <span>{t("outcomes.after_label")}</span>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch"
            >
              {/* Before */}
              <div className="rounded-lg p-5 bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40">
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {row.before}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-teal-600" />
              </div>

              {/* After */}
              <div className="rounded-lg p-5 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700/30">
                <p className="text-sm text-teal-800 dark:text-teal-300 leading-relaxed font-medium">
                  {row.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
