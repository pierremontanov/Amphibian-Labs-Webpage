import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* Row icons matching the prototype */
function AutomationIcon({ color = "rgba(185,210,225,0.5)", size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2L4 11h6l-1 7 7-9h-6l1-7z" />
    </svg>
  );
}

function IntegrationIcon({ color = "rgba(185,210,225,0.5)", size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="10" r="2" />
      <circle cx="16" cy="5" r="2" />
      <circle cx="16" cy="15" r="2" />
      <path d="M6 10h4l2-3.5M10 10l2 3.5" />
    </svg>
  );
}

function RipReplaceIcon({ color = "rgba(185,210,225,0.5)", size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h8M4 6l3-3M4 6l3 3" />
      <path d="M16 14H8M16 14l-3-3M16 14l-3 3" />
    </svg>
  );
}

function AIBackendIcon({ color = "rgba(185,210,225,0.5)", size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="3" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" />
    </svg>
  );
}

const rowIcons = [AutomationIcon, IntegrationIcon, RipReplaceIcon, AIBackendIcon];

export default function OutcomesSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();
  const rows = t("outcomes.rows", { returnObjects: true }) as Array<{
    before: string;
    after: string;
  }>;

  return (
    <section
      id="outcomes"
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

      {/* Teal radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 400,
          background: "radial-gradient(ellipse, rgba(29,158,117,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div
            className="font-mono text-[11px] font-medium uppercase mb-3.5"
            style={{ letterSpacing: "0.12em", color: "#6DCBAB" }}
          >
            The transformation
          </div>
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
          >
            {t("outcomes.section_title")}
          </h2>
        </div>

        {/* Table */}
        <div className="rounded-[20px] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Header row */}
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: "52px 1fr 52px 1fr",
              background: "rgba(255,255,255,0.04)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div />
            <div className="flex items-center gap-2" style={{ padding: "14px 20px" }}>
              <div className="w-2 h-2 rounded-full" style={{ background: "rgba(232,100,58,0.7)" }} />
              <span
                className="font-mono text-[11px] font-medium uppercase"
                style={{ letterSpacing: "0.1em", color: "rgba(232,100,58,0.8)" }}
              >
                {t("outcomes.before_label")}
              </span>
            </div>
            <div />
            <div
              className="flex items-center gap-2"
              style={{ padding: "14px 20px", borderLeft: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "#1D9E75" }} />
              <span
                className="font-mono text-[11px] font-medium uppercase"
                style={{ letterSpacing: "0.1em", color: "#6DCBAB" }}
              >
                {t("outcomes.after_label")}
              </span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => {
            const IconComp = rowIcons[i];
            return (
              <div
                key={i}
                className="hidden md:grid transition-colors duration-200 hover:bg-white/[0.025]"
                style={{
                  gridTemplateColumns: "52px 1fr 52px 1fr",
                  borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                {/* Icon cell */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    padding: "24px 0",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-[30px] h-[30px] rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {IconComp && <IconComp />}
                  </div>
                </div>

                {/* Before cell */}
                <div className="flex items-center" style={{ padding: "24px 24px" }}>
                  <p
                    className="text-base m-0"
                    style={{
                      color: "rgba(185,210,225,0.6)",
                      lineHeight: 1.65,
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(232,100,58,0.35)",
                      textDecorationThickness: "1px",
                    }}
                  >
                    {row.before}
                  </p>
                </div>

                {/* Arrow cell */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ color: "#1D9E75", fontSize: 18, opacity: 0.7 }}>→</span>
                </div>

                {/* After cell */}
                <div
                  className="flex items-center"
                  style={{ padding: "24px 24px", background: "rgba(29,158,117,0.04)" }}
                >
                  <p
                    className="text-[17px] font-semibold m-0"
                    style={{ color: "rgba(220,240,232,0.95)", lineHeight: 1.6 }}
                  >
                    {row.after}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Mobile rows (stacked) */}
          {rows.map((row, i) => (
            <div
              key={`mobile-${i}`}
              className="md:hidden p-5"
              style={{
                borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <p
                className="text-sm mb-3"
                style={{
                  color: "rgba(185,210,225,0.6)",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(232,100,58,0.35)",
                }}
              >
                {row.before}
              </p>
              <span style={{ color: "#1D9E75", fontSize: 16 }}>↓</span>
              <p
                className="text-base font-semibold mt-2"
                style={{ color: "rgba(220,240,232,0.95)" }}
              >
                {row.after}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white rounded-[10px] gradient-teal shadow-button hover:opacity-90 hover:-translate-y-px transition-all"
          >
            Start your transformation →
          </a>
        </div>
      </div>
    </section>
  );
}
