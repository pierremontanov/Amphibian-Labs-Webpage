import { useTranslation } from "react-i18next";

export default function BlogPage() {
  const { t } = useTranslation("nav");

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {t("blog")}
        </h1>
        <p className="text-muted-foreground">
          Blog listing coming in Phase 4. Articles on AI philosophy, engineering deep-dives, and practical guides.
        </p>
      </div>
    </div>
  );
}
