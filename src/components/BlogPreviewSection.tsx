import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  Philosophy: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  Engineering: "bg-sky-100 text-sky-800 dark:bg-sky-800/30 dark:text-sky-300",
  Guide: "bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-300",
};

export default function BlogPreviewSection() {
  const { t } = useTranslation("home");
  const articles = t("blog_preview.articles", { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    category: string;
    date: string;
    reading_time: string;
  }>;

  return (
    <section id="blog" className="py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
          {t("blog_preview.section_title")}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <article
              key={i}
              className="flex flex-col rounded-xl bg-card border border-border p-6 hover:shadow-card-hover transition-shadow cursor-pointer"
            >
              {/* Category pill */}
              <span
                className={`inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-medium mb-4 ${
                  categoryColors[article.category] || "bg-muted text-muted-foreground"
                }`}
              >
                {article.category}
              </span>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground leading-snug mb-3">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-3 text-xs text-muted-foreground">
                <time>{article.date}</time>
                <span>&middot;</span>
                <span>{article.reading_time}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Read more link */}
        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            {t("blog_preview.read_more")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
