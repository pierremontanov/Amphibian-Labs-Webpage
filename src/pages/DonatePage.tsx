import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Code, Server, BookOpen, Users, Check, GitBranch } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const whyIcons = [Code, Heart, Users];

const tierConfig = [
  {
    key: "supporter",
    border: "border-border",
    accent: "bg-teal-50 dark:bg-teal-900/20",
    badge: "bg-muted text-foreground",
    featured: false,
    stripeUrl: "https://buy.stripe.com/aFa6oG8mjagd4UR8N1grS00",
  },
  {
    key: "builder",
    border: "border-teal-400 dark:border-teal-600",
    accent: "bg-teal-50 dark:bg-teal-900/20",
    badge: "bg-teal-600 text-white",
    featured: true,
    stripeUrl: "https://buy.stripe.com/dRm9ASfOL9c9fzvd3hgrS01",
  },
  {
    key: "champion",
    border: "border-amber-400 dark:border-amber-600",
    accent: "bg-amber-50 dark:bg-amber-900/20",
    badge: "bg-amber-600 text-white",
    featured: false,
    stripeUrl: "https://buy.stripe.com/7sY00i8mj885evrd3hgrS02",
  },
];

const breakdownIcons = [Code, Server, BookOpen, Users];

export default function DonatePage() {
  const { t } = useTranslation("donate");

  const whyItems = t("why.items", { returnObjects: true }) as Array<{
    title: string;
    body: string;
  }>;

  const transparencyItems = t("transparency.items", { returnObjects: true }) as Array<{
    label: string;
    percent: number;
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
              { label: "Support Open Source" },
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

          {/* Why support */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              {t("why.title")}
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {whyItems.map((item, i) => {
                const Icon = whyIcons[i] || Heart;
                return (
                  <div key={i} className="text-center p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tier cards */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">
              {t("tiers.title")}
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {tierConfig.map((tier) => {
                const perks = t(`tiers.${tier.key}.perks`, { returnObjects: true }) as string[];
                return (
                  <div
                    key={tier.key}
                    className={`relative rounded-xl border-2 ${tier.border} bg-card p-6 flex flex-col ${
                      tier.featured ? "shadow-card-hover" : ""
                    }`}
                  >
                    {/* Badge */}
                    <span className={`inline-block self-start px-3 py-0.5 text-xs font-medium rounded-full mb-4 ${tier.badge}`}>
                      {t(`tiers.${tier.key}.label`)}
                    </span>

                    {/* Price */}
                    <div className="mb-1">
                      <span className="text-2xl font-bold text-foreground">
                        {t(`tiers.${tier.key}.price`)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      {t(`tiers.${tier.key}.frequency`)}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {t(`tiers.${tier.key}.description`)}
                    </p>

                    {/* Perks */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                          {perk}
                        </li>
                      ))}
                    </ul>

                    {/* Stripe payment link */}
                    <a
                      href={tier.stripeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 text-sm font-medium rounded-lg text-center block transition-opacity hover:opacity-90 ${
                        tier.featured
                          ? "gradient-teal text-white shadow-button"
                          : "border border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                      }`}
                    >
                      {t("payment.button")}
                    </a>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              {t("payment.note")}{" "}
              <a
                href="mailto:info@amphibianlabs.com.au"
                className="text-teal-600 hover:underline"
              >
                info@amphibianlabs.com.au
              </a>
            </p>
          </div>

          {/* Transparency */}
          <div className="mb-20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              {t("transparency.title")}
            </h2>
            <div className="space-y-4">
              {transparencyItems.map((item, i) => {
                const Icon = breakdownIcons[i] || Code;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted flex-shrink-0">
                      <Icon className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-foreground font-medium">
                          {item.label}
                        </span>
                        <span className="text-sm text-muted-foreground font-medium">
                          {item.percent}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-teal-600 transition-all"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              {t("transparency.note")}
            </p>
          </div>

          {/* Code CTA */}
          <div className="text-center py-10 px-6 rounded-lg bg-navy-800 dark:bg-navy-900">
            <GitBranch className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-white mb-2">
              {t("cta.title")}
            </h2>
            <p className="text-sm text-slate-300 mb-5 max-w-lg mx-auto">
              {t("cta.body")}
            </p>
            <Link
              to="/repositories"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
