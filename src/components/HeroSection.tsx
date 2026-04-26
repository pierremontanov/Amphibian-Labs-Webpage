import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

const techChips = ["Python", "FastAPI", "Power Automate", "Azure", "Docker"];

export default function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section className="relative min-h-screen flex items-center bg-[#06111A] overflow-hidden pt-[70px]">
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,158,117,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Teal radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          right: "20%",
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(29,158,117,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Amber accent glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "5%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(239,159,39,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-[820px]">
          {/* Headline */}
          <h1
            className="font-bold text-white leading-none tracking-tight animate-fade-up"
            style={{
              fontSize: "clamp(52px, 7vw, 100px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            {t("hero.headline").split(". ")[0]}.
            <br />
            {t("hero.headline").split(". ")[1]?.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-teal-400">
              {t("hero.headline").split(". ")[1]?.split(" ").slice(-1)[0]}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-7 text-xl leading-relaxed animate-fade-up animation-delay-200"
            style={{ color: "rgba(200,220,232,0.94)", maxWidth: 540, lineHeight: 1.7 }}
          >
            {t("hero.subheadline")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up animation-delay-300">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white rounded-[10px] gradient-teal shadow-button hover:opacity-90 hover:-translate-y-px transition-all"
            >
              {t("hero.cta_primary")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#repositories"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium rounded-[10px] border transition-colors"
              style={{
                color: "rgba(109,203,171,0.9)",
                borderColor: "rgba(109,203,171,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(109,203,171,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#6DCBAB";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "rgba(109,203,171,0.9)";
              }}
            >
              {t("hero.cta_secondary")}
            </a>
          </div>

          {/* Built with strip */}
          <div className="mt-16 flex items-center gap-6 flex-wrap animate-fade-up animation-delay-400">
            <span
              className="font-mono text-[11px] font-medium uppercase"
              style={{ color: "rgba(185,210,225,0.65)", letterSpacing: "0.08em" }}
            >
              {t("hero.trust_strip")}
            </span>
            {techChips.map((chip) => (
              <span
                key={chip}
                className="font-mono text-xs"
                style={{ color: "rgba(185,210,225,0.6)" }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
