import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const validSlugs = [
  "automation",
  "integration",
  "ai-extraction",
  "web-solutions",
  "vendor-selection",
  "crm-cleanup",
];

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation("service-detail");

  if (!slug || !validSlugs.includes(slug)) {
    return <Navigate to="/services" replace />;
  }

  const technologies = t(`${slug}.technologies`, { returnObjects: true }) as string[];
  const scenario = t(`${slug}.scenario`, { returnObjects: true }) as {
    title: string;
    context: string;
    solution: string;
    outcome: string;
  };

  return (
    <>
      <Helmet>
        <title>{t(`${slug}.meta.title`)}</title>
        <meta name="description" content={t(`${slug}.meta.description`)} />
        <meta property="og:title" content={t(`${slug}.meta.title`)} />
        <meta property="og:description" content={t(`${slug}.meta.description`)} />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: t("breadcrumb_services"), to: "/services" },
              { label: t(`${slug}.title`) },
            ]}
          />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {t(`${slug}.title`)}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t(`${slug}.subtitle`)}
            </p>
          </div>

          {/* Problem */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t("sections.problem")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t(`${slug}.problem`)}
            </p>
          </section>

          {/* Approach */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t("sections.approach")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t(`${slug}.approach`)}
            </p>
          </section>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t("sections.technologies")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1.5 text-sm rounded-full bg-muted text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Scenario / Case Study */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t("sections.scenario")}
            </h2>
            <div className="rounded-lg border border-teal-200 dark:border-teal-700/30 bg-teal-50/50 dark:bg-teal-900/10 p-6 space-y-4">
              <h3 className="font-semibold text-foreground">
                {scenario.title}
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-medium text-foreground">Context: </span>
                  {scenario.context}
                </p>
                <p>
                  <span className="font-medium text-foreground">Solution: </span>
                  {scenario.solution}
                </p>
                <div className="flex items-start gap-2 pt-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <p className="font-medium text-teal-800 dark:text-teal-300">
                    {scenario.outcome}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 rounded-lg bg-navy-800 dark:bg-navy-900">
            <h2 className="text-xl font-semibold text-white mb-3">
              {t("sections.cta_title")}
            </h2>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
            >
              {t("sections.cta_button")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
