import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Search, Puzzle, Presentation, Brain, Network, Zap, GitBranch, Users,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Icon map for accordion items ─── */
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  discovery: Search,
  advisory: Puzzle,
  training: Presentation,
  ai_backends: Brain,
  integration: Network,
  automation: Zap,
  open_source: GitBranch,
  community: Users,
};

const tiers = [
  {
    key: "understand",
    accent: "#1D9E75",
    services: ["discovery", "advisory", "training"],
  },
  {
    key: "build",
    accent: "#0284C7",
    services: ["ai_backends", "integration", "automation"],
  },
  {
    key: "share",
    accent: "#EF9F27",
    services: ["open_source", "community"],
  },
];

/* ─── Accordion Item ─── */
function ServiceItemDark({
  tierKey,
  serviceKey,
  accent,
  isLast,
}: {
  tierKey: string;
  serviceKey: string;
  accent: string;
  isLast: boolean;
}) {
  const { t } = useTranslation("home");
  const [open, setOpen] = useState(false);
  const Icon = iconMap[serviceKey];

  return (
    <div style={{ borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.07)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 cursor-pointer bg-transparent border-none"
        style={{ padding: "18px 0" }}
      >
        <div className="flex items-center gap-3.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
            style={{
              background: open ? `${accent}22` : "rgba(255,255,255,0.05)",
              border: `1px solid ${open ? accent + "55" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            {Icon && (
              <Icon
                className="w-4 h-4 transition-colors duration-200"
                style={{ color: open ? accent : "rgba(185,210,225,0.75)" }}
              />
            )}
          </div>
          <span
            className="text-[15px] font-semibold transition-colors duration-200"
            style={{
              color: open ? "white" : "rgba(185,210,225,0.88)",
              letterSpacing: "-0.01em",
            }}
          >
            {t(`services.${tierKey}.${serviceKey}.title`)}
          </span>
        </div>
        <span
          className="text-xl flex-shrink-0 leading-none inline-block transition-all duration-200"
          style={{
            color: open ? accent : "rgba(255,255,255,0.2)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {/* Expandable body */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? 160 : 0,
          paddingLeft: 46,
        }}
      >
        <p
          className="text-sm pb-4.5 leading-relaxed"
          style={{ color: "rgba(185,210,225,0.86)", lineHeight: 1.72 }}
        >
          {t(`services.${tierKey}.${serviceKey}.body`)}
        </p>
      </div>
    </div>
  );
}

/* ─── Main Tabs Component ─── */
export default function ServicesSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const pendingTab = useRef<number | null>(null);

  const switchTab = (i: number) => {
    if (i === active || fading) return;
    setFading(true);
    pendingTab.current = i;
    setTimeout(() => {
      setActive(pendingTab.current!);
      setFading(false);
    }, 200);
  };

  const tier = tiers[active];

  return (
    <section
      id="services"
      className="py-28 relative overflow-hidden"
      style={{ background: "#0C1F2C" }}
      ref={sectionRef}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,158,117,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div
            className="font-mono text-[11px] font-medium uppercase mb-3.5"
            style={{ letterSpacing: "0.12em", color: "#6DCBAB" }}
          >
            Our practice
          </div>
          <h2 className="font-bold text-white" style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
            {t("services.section_title")}
          </h2>
          <p className="mt-3.5 text-lg" style={{ color: "rgba(185,210,225,0.9)", maxWidth: 520 }}>
            {t("services.intro")}
          </p>
        </div>

        {/* Two-panel grid: tabs left, content right */}
        <div
          className="rounded-[20px] overflow-hidden"
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {/* Tab list */}
          <div className="flex flex-col" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
            {tiers.map((t_item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={t_item.key}
                  onClick={() => switchTab(i)}
                  className="relative text-left cursor-pointer bg-transparent border-none transition-colors duration-200"
                  style={{
                    padding: "26px 24px",
                    borderBottom: i < tiers.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                  }}
                >
                  {/* Active indicator bar */}
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r transition-all duration-300"
                    style={{
                      height: isActive ? 40 : 0,
                      background: t_item.accent,
                      transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                  />

                  <div
                    className="font-mono text-[10px] font-medium uppercase mb-1.5 transition-colors duration-200"
                    style={{
                      letterSpacing: "0.1em",
                      color: isActive ? t_item.accent : "rgba(185,210,225,0.65)",
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div
                    className="text-[17px] font-bold mb-0.5 transition-colors duration-200"
                    style={{
                      color: isActive ? "white" : "rgba(185,210,225,0.8)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {t(`services.${t_item.key}.title`)}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(185,210,225,0.65)", lineHeight: 1.4 }}>
                    {t(`services.${t_item.key}.subtitle`)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div
            className="transition-all duration-200"
            style={{
              padding: "36px 40px",
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(6px)" : "translateY(0)",
            }}
          >
            {/* Tier header */}
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: tier.accent }}
                />
              </div>
              <div>
                <div className="text-[17px] font-bold text-white" style={{ letterSpacing: "-0.01em" }}>
                  {t(`services.${tier.key}.title`)}
                </div>
                <div className="text-xs" style={{ color: "rgba(185,210,225,0.75)" }}>
                  {t(`services.${tier.key}.subtitle`)}
                </div>
              </div>
            </div>

            {/* Accordion items */}
            {tier.services.map((svc, si) => (
              <ServiceItemDark
                key={`${active}-${si}`}
                tierKey={tier.key}
                serviceKey={svc}
                accent={tier.accent}
                isLast={si === tier.services.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile responsive: stack tabs vertically */}
      <style>{`
        @media (max-width: 768px) {
          #services .rounded-\\[20px\\] {
            grid-template-columns: 1fr !important;
          }
          #services .rounded-\\[20px\\] > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            flex-direction: row !important;
            overflow-x: auto;
          }
          #services .rounded-\\[20px\\] > div:first-child button {
            border-bottom: none !important;
            border-right: 1px solid rgba(255,255,255,0.07);
            min-width: 140px;
          }
        }
      `}</style>
    </section>
  );
}
