import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation("nav");

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {t("services")}
        </h1>
        <p className="text-muted-foreground">
          Full services hub coming soon. Explore our service tiers, detailed offerings, and case studies.
        </p>
      </div>
    </div>
  );
}
