import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problemData = [
  { key: "tech_gap", n: "01", color: "#E8643A" },
  { key: "rip_replace", n: "02", color: "#1D9E75" },
  { key: "trust_gap", n: "03", color: "#EF9F27" },
] as const;

/* Inline SVG icons matching the prototype */
function TechGapIcon({ color, size = 18 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="10" width="4" height="7" rx="0.5" />
      <rect x="8" y="6" width="4" height="11" rx="0.5" />
      <rect x="13" y="3" width="4" height="14" rx="0.5" />
    </svg>
  );
}

function RipReplaceIcon({ color, size = 18 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h8M4 6l3-3M4 6l3 3" />
      <path d="M16 14H8M16 14l-3-3M16 14l-3 3" />
    </svg>
  );
}

function TrustGapIcon({ color, size = 18 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2L3 5v5c0 4 3.5 7 7 8 3.5-1 7-4 7-8V5L10 2z" />
      <path d="M7 10l2 2 4-4" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ color: string; size?: number }>> = {
  tech_gap: TechGapIcon,
  rip_replace: RipReplaceIcon,
  trust_gap: TrustGapIcon,
};

export default function ProblemSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="problems"
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div
            className="font-mono text-[11px] font-medium uppercase mb-3.5"
            style={{ letterSpacing: "0.12em", color: "#6DCBAB" }}
          >
            The problem space
          </div>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {t("problems.section_title")}
          </h2>
        </div>

        {/* Problem rows */}
        <div className="flex flex-col">
          {problemData.map((item, i) => {
            const IconComp = iconMap[item.key];
            const isHovered = hovered === i;

            return (
              <div
                key={item.key}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="grid gap-y-4 transition-all duration-300 cursor-default"
                style={{
                  gridTemplateColumns: "80px 1fr 1fr",
                  gap: "0 48px",
                  alignItems: "start",
                  padding: isHovered ? "48px 16px" : "48px 0",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  borderBottom:
                    i === problemData.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  background: isHovered ? "rgba(255,255,255,0.025)" : "transparent",
                  borderRadius: isHovered ? 4 : 0,
                  marginLeft: isHovered ? -16 : 0,
                  marginRight: isHovered ? -16 : 0,
                }}
              >
                {/* Number + icon */}
                <div className="flex flex-col gap-3 pt-1">
                  <div
                    className="font-mono font-bold leading-none transition-opacity duration-300"
                    style={{
                      fontSize: "clamp(32px, 3.5vw, 52px)",
                      color: item.color,
                      opacity: isHovered ? 1 : 0.35,
                    }}
                  >
                    {item.n}
                  </div>
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered ? `${item.color}22` : "rgba(255,255,255,0.05)",
                      border: `1px solid ${isHovered ? item.color + "44" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <IconComp
                      color={isHovered ? item.color : "rgba(185,210,225,0.65)"}
                      size={18}
                    />
                  </div>
                </div>

                {/* Title + accent line */}
                <div>
                  <h3
                    className="font-bold transition-colors duration-300"
                    style={{
                      fontSize: "clamp(22px, 2.5vw, 32px)",
                      color: isHovered ? "white" : "rgba(255,255,255,0.93)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                    }}
                  >
                    {t(`problems.${item.key}.title`)}
                  </h3>
                  <div
                    className="h-0.5 rounded-sm mt-4 transition-all duration-500"
                    style={{
                      width: isHovered ? 48 : 24,
                      background: item.color,
                      opacity: 0.8,
                      transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                  />
                </div>

                {/* Body */}
                <p
                  className="text-base leading-relaxed pt-1 transition-colors duration-300"
                  style={{
                    color: isHovered ? "rgba(148,174,190,0.95)" : "rgba(185,210,225,0.9)",
                    lineHeight: 1.75,
                  }}
                >
                  {t(`problems.${item.key}.body`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: stack into single column */}
      <style>{`
        @media (max-width: 768px) {
          #problems .grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
