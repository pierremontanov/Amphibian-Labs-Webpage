import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  reading_time: number;
  author: string;
  tags: string[];
}

const categoryColors: Record<string, string> = {
  philosophy: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  engineering: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  guide: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "case-study": "bg-coral-100 text-coral-800 dark:bg-coral-50/10 dark:text-coral-200",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const { t } = useTranslation("blog");
  const [filter, setFilter] = useState("all");

  const articles = t("articles", { returnObjects: true }) as Article[];
  const filterKeys = ["all", "philosophy", "engineering", "guide", "case-study"];

  const filtered = useMemo(() => {
    if (filter === "all") return articles;
    return articles.filter((a) => a.category === filter);
  }, [articles, filter]);

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <link rel="alternate" type="application/rss+xml" title="Amphibian Labs Blog" href="/feed.xml" />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Blog" },
            ]}
          />

          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {filterKeys.map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  filter === key
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-card text-muted-foreground border-border hover:border-teal-400 hover:text-foreground"
                }`}
              >
                {t(`filters.${key}`)}
              </button>
            ))}
          </div>

          {/* Article cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-card-hover hover:border-teal-400 dark:hover:border-teal-600 transition-all"
              >
                <div className="p-5">
                  {/* Category pill */}
                  <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full mb-3 capitalize ${categoryColors[article.category] || "bg-muted text-foreground"}`}>
                    {article.category.replace("-", " ")}
                  </span>

                  <h2 className="text-base font-semibold text-foreground group-hover:text-teal-600 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.reading_time} {t("reading_time_suffix")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-12">
              No articles in this category yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
