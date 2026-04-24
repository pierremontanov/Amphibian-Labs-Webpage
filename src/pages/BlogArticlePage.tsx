import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
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
  body: string[];
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
    month: "long",
    day: "numeric",
  });
}

// Simple markdown-ish renderer for body paragraphs
function renderParagraph(text: string, i: number) {
  // H2 headings
  if (text.startsWith("## ")) {
    return (
      <h2 key={i} className="text-xl font-semibold text-foreground mt-8 mb-4">
        {text.slice(3)}
      </h2>
    );
  }
  // Bold text inline
  const parts = text.split(/\*\*(.*?)\*\*/g);
  if (parts.length > 1) {
    return (
      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className="text-foreground font-medium">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  }
  return (
    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
      {text}
    </p>
  );
}

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation("blog");

  const articles = t("articles", { returnObjects: true }) as Article[];

  const article = useMemo(
    () => articles.find((a) => a.slug === slug),
    [articles, slug]
  );

  const related = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.slug !== slug)
      .slice(0, 2);
  }, [articles, article, slug]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - Amphibian Labs</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            author: {
              "@type": "Person",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Amphibian Labs",
              url: "https://amphibianlabs.com.au",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://amphibianlabs.com.au/blog/${article.slug}`,
            },
            wordCount: article.body.join(" ").split(/\s+/).length,
            timeRequired: `PT${article.reading_time}M`,
          })}
        </script>
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Blog", to: "/blog" },
              { label: article.title },
            ]}
          />

          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t("back_to_blog")}
          </Link>

          {/* Article header */}
          <header className="mb-10">
            <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full mb-4 capitalize ${categoryColors[article.category] || "bg-muted text-foreground"}`}>
              {article.category.replace("-", " ")}
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{t("by")} {article.author}</span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.reading_time} {t("reading_time_suffix")}
              </span>
            </div>
          </header>

          {/* Article body */}
          <article className="mb-16">
            {article.body.map((para, i) => renderParagraph(para, i))}
          </article>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-border">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="text-center py-10 px-6 rounded-lg bg-navy-800 dark:bg-navy-900 mb-16">
            <h2 className="text-lg font-semibold text-white mb-2">
              {t("cta.title")}
            </h2>
            <p className="text-sm text-slate-300 mb-5">
              {t("cta.body")}
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
            >
              {t("cta.button")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {t("related")}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/blog/${rel.slug}`}
                    className="group rounded-lg border border-border bg-card p-4 hover:shadow-card hover:border-teal-400 dark:hover:border-teal-600 transition-all"
                  >
                    <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-2 capitalize ${categoryColors[rel.category] || "bg-muted text-foreground"}`}>
                      {rel.category.replace("-", " ")}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-teal-600 transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
