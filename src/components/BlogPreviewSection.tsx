import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categoryAccents: Record<string, { color: string; bg: string; border: string }> = {
  Philosophy: { color: "#1D9E75", bg: "rgba(29,158,117,0.12)", border: "rgba(29,158,117,0.25)" },
  Engineering: { color: "#0284C7", bg: "rgba(2,132,199,0.12)", border: "rgba(2,132,199,0.25)" },
  Guide: { color: "#EF9F27", bg: "rgba(239,159,39,0.12)", border: "rgba(239,159,39,0.25)" },
};

interface ArticleCardProps {
  article: {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    reading_time: string;
  };
  index: number;
}

function ArticleCard({ article, index }: ArticleCardProps) {
  const [hovered, setHovered] = useState(false);
  const accent = categoryAccents[article.category] || categoryAccents.Philosophy;
  const slugMap = [
    "why-we-enhance-not-replace",
    "building-dociq-open-source",
    "5-signs-ai-ready",
  ];

  return (
    <Link
      to={`/blog/${slugMap[index] || slugMap[0]}`}
      className="no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className="flex flex-col h-full rounded-[20px] transition-all duration-300 cursor-pointer"
        style={{
          padding: "32px 28px",
          background: hovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}`,
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 8px 32px rgba(0,0,0,0.2)"
            : "none",
        }}
      >
        {/* Top row: number + category */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="font-mono text-[11px] font-medium"
            style={{
              letterSpacing: "0.1em",
              color: hovered ? accent.color : "rgba(185,210,225,0.45)",
              transition: "color 0.3s",
            }}
          >
            0{index + 1}
          </span>
          <span
            className="text-[11px] font-medium rounded-full px-3 py-1 transition-all duration-200"
            style={{
              background: accent.bg,
              border: `1px solid ${accent.border}`,
              color: accent.color,
            }}
          >
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[17px] font-bold mb-3 transition-colors duration-300"
          style={{
            color: hovered ? "white" : "rgba(220,235,245,0.93)",
            letterSpacing: "-0.015em",
            lineHeight: 1.35,
          }}
        >
          {article.title}
        </h3>

        {/* Accent line */}
        <div
          className="h-0.5 rounded-sm mb-4 transition-all duration-500"
          style={{
            width: hovered ? 48 : 24,
            background: accent.color,
            opacity: 0.6,
            transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />

        {/* Excerpt */}
        <p
          className="text-sm flex-1 leading-relaxed mb-5"
          style={{ color: "rgba(185,210,225,0.78)", lineHeight: 1.72 }}
        >
          {article.excerpt}
        </p>

        {/* Meta footer */}
        <div
          className="pt-4 flex items-center justify-between text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-2.5" style={{ color: "rgba(185,210,225,0.55)" }}>
            <time className="font-mono" style={{ fontSize: 11, letterSpacing: "0.02em" }}>
              {article.date}
            </time>
            <span style={{ opacity: 0.4 }}>&middot;</span>
            <span className="font-mono" style={{ fontSize: 11 }}>
              {article.reading_time}
            </span>
          </div>
          <span
            className="flex items-center gap-1 text-xs font-medium transition-all duration-200"
            style={{
              color: hovered ? accent.color : "rgba(185,210,225,0.4)",
              gap: hovered ? 8 : 4,
            }}
          >
            Read
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPreviewSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();
  const articles = t("blog_preview.articles", { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    category: string;
    date: string;
    reading_time: string;
  }>;

  return (
    <section
      id="blog"
      className="py-28 relative overflow-hidden"
      style={{ background: "#06111A" }}
      ref={sectionRef}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(29,158,117,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div
            className="font-mono text-[11px] font-medium uppercase mb-3.5"
            style={{ letterSpacing: "0.12em", color: "#6DCBAB" }}
          >
            Insights
          </div>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {t("blog_preview.section_title")}
          </h2>
        </div>

        {/* Article cards grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} index={i} />
          ))}
        </div>

        {/* Read more CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[15px] font-medium no-underline transition-all duration-200"
            style={{ color: "#6DCBAB" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#1D9E75";
              (e.currentTarget as HTMLElement).style.gap = "12px";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#6DCBAB";
              (e.currentTarget as HTMLElement).style.gap = "8px";
            }}
          >
            {t("blog_preview.read_more")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
