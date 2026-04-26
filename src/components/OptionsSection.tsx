import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tierKeys = ["discover", "build", "evolve"] as const;
const tierAccents = ["#1D9E75", "#0284C7", "#EF9F27"];

function TierCard({
  tierKey,
  accent,
}: {
  tierKey: (typeof tierKeys)[number];
  accent: string;
}) {
  const { t } = useTranslation(["home", "common"]);
  const [hovered, setHovered] = useState(false);
  const bullets = t(`engagement.${tierKey}.bullets`, {
    ns: "home",
    returnObjects: true,
  }) as string[];

  return (
    <div
      className="flex flex-col rounded-[20px] transition-all duration-300 cursor-default"
      style={{
        padding: "32px 28px",
        background: hovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}`,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.2)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label */}
      <div
        className="font-mono text-[10px] font-medium uppercase mb-2.5"
        style={{ letterSpacing: "0.12em", color: accent }}
      >
        {t(`engagement.${tierKey}.label`, { ns: "home" })}
      </div>

      {/* Title */}
      <h3
        className="text-[17px] font-bold mb-5 transition-colors duration-300"
        style={{
          color: hovered ? "white" : "rgba(220,235,245,0.93)",
          letterSpacing: "-0.015em",
          lineHeight: 1.3,
        }}
      >
        {t(`engagement.${tierKey}.title`, { ns: "home" })}
      </h3>

      {/* Bullets */}
      <ul className="flex-1 mb-5 space-y-2.5">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm"
            style={{ color: "rgba(185,210,225,0.82)", lineHeight: 1.5 }}
          >
            <span
              className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-2"
              style={{ background: accent }}
            />
            {b}
          </li>
        ))}
      </ul>

      {/* Best for */}
      <p
        className="text-xs italic mb-4.5"
        style={{ color: "rgba(185,210,225,0.55)", lineHeight: 1.5 }}
      >
        Best for: {t(`engagement.${tierKey}.best_for`, { ns: "home" })}
      </p>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center text-sm font-medium no-underline transition-all duration-200"
        style={{
          color: accent,
          gap: hovered ? 10 : 6,
        }}
      >
        {t("cta.lets_talk", { ns: "common" })}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function EngagementSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();

  return (
    <section
      id="engagement"
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
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(239,159,39,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="font-mono text-[11px] font-medium uppercase mb-3.5"
            style={{ letterSpacing: "0.12em", color: "#6DCBAB" }}
          >
            Pricing
          </div>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {t("engagement.section_title")}
          </h2>
          <p
            className="mt-3.5 text-lg mx-auto"
            style={{
              color: "rgba(185,210,225,0.9)",
              maxWidth: 520,
              lineHeight: 1.65,
            }}
          >
            {t("engagement.intro")}
          </p>
        </div>

        {/* Discovery session callout */}
        <div
          className="max-w-[780px] mx-auto mb-12 rounded-[22px] flex gap-6 items-start cursor-pointer"
          style={{
            padding: "32px 36px",
            background: "rgba(239,159,39,0.04)",
            border: "2px solid rgba(239,159,39,0.25)",
            boxShadow: "0 4px 28px rgba(239,159,39,0.08)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(239,159,39,0.1)";
            el.style.borderColor = "rgba(239,159,39,0.5)";
            el.style.boxShadow = "0 6px 40px rgba(239,159,39,0.18)";
            el.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "rgba(239,159,39,0.04)";
            el.style.borderColor = "rgba(239,159,39,0.25)";
            el.style.boxShadow = "0 4px 28px rgba(239,159,39,0.08)";
            el.style.transform = "translateY(0)";
          }}
        >
          {/* Sparkle icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
            style={{
              background: "rgba(239,159,39,0.1)",
              color: "#EF9F27",
            }}
          >
            ✦
          </div>

          <div className="flex-1">
            {/* Price row */}
            <div className="flex items-baseline gap-3 flex-wrap mb-2">
              <span
                className="text-[28px] font-bold text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t("engagement.discovery.price")}
              </span>
              <span className="text-sm" style={{ color: "rgba(185,210,225,0.75)" }}>
                · {t("engagement.discovery.duration")}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "rgba(185,210,225,0.75)" }}
              >
                · {t("engagement.discovery.title")}
              </span>
            </div>

            <p
              className="text-sm mb-5"
              style={{ color: "rgba(185,210,225,0.82)", lineHeight: 1.72 }}
            >
              {t("engagement.discovery.description")}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5.5 py-3 text-sm font-medium text-white rounded-[10px] gradient-teal shadow-button hover:opacity-90 hover:-translate-y-px transition-all"
            >
              Book a discovery session →
            </a>
          </div>
        </div>

        {/* Tier cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {tierKeys.map((key, i) => (
            <TierCard key={key} tierKey={key} accent={tierAccents[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
