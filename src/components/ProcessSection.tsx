import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProcessSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();
  const steps = t("process.steps", { returnObjects: true }) as Array<{
    title: string;
    body: string;
  }>;

  return (
    <section
      id="process"
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

      {/* Teal radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          background: "radial-gradient(ellipse, rgba(29,158,117,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-[72px]">
          <div
            className="font-mono text-[11px] font-medium uppercase mb-3.5"
            style={{ letterSpacing: "0.12em", color: "#6DCBAB" }}
          >
            Our approach
          </div>
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
          >
            {t("process.section_title")}
          </h2>
        </div>

        {/* Desktop stepper */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div
            className="absolute z-0 pointer-events-none"
            style={{
              top: 24,
              left: "10%",
              right: "10%",
              height: 1,
              background: "rgba(109,203,171,0.12)",
            }}
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Numbered circle with gradient */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-[15px] mb-5.5 flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #0F6E56, #1D9E75)",
                    boxShadow: "0 4px 18px rgba(15,110,86,0.4)",
                  }}
                >
                  {i + 1}
                </div>
                <div
                  className="text-[15px] font-bold text-white mb-2"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </div>
                <div
                  className="text-[13px]"
                  style={{ color: "rgba(185,210,225,0.9)", lineHeight: 1.68 }}
                >
                  {step.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet vertical stepper */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-[15px] flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #0F6E56, #1D9E75)",
                    boxShadow: "0 4px 18px rgba(15,110,86,0.4)",
                  }}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "rgba(109,203,171,0.12)" }} />
                )}
              </div>
              <div className="pt-1.5 pb-4">
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm" style={{ color: "rgba(185,210,225,0.9)", lineHeight: 1.68 }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key message */}
        <p
          className="text-center text-sm italic max-w-[560px] mx-auto"
          style={{ marginTop: 64, color: "rgba(185,210,225,0.7)" }}
        >
          {t("process.key_message")}
        </p>
      </div>
    </section>
  );
}
