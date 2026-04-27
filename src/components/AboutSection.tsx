import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = [
  "Python", "FastAPI", "Docker", "Power Automate", "SharePoint",
  "Microsoft 365", "Azure", "n8n", "GitHub",
];

export default function AboutSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
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
            The company
          </div>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {t("about.section_title")}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-[72px] items-start">
          {/* Bio */}
          <div>
            <p
              className="text-lg mb-5"
              style={{ color: "rgba(220,235,245,0.95)", lineHeight: 1.78 }}
            >
              {t("about.bio_p1")}
            </p>
            <p
              className="text-base mb-5"
              style={{ color: "rgba(185,210,225,0.85)", lineHeight: 1.78 }}
            >
              {t("about.bio_p2")}
            </p>
            <p
              className="text-base"
              style={{ color: "rgba(185,210,225,0.85)", lineHeight: 1.78 }}
            >
              {t("about.bio_p3")}
            </p>

            {/* Philosophy quote */}
            <blockquote
              className="mt-9"
              style={{
                borderLeft: "3px solid #1D9E75",
                paddingLeft: 22,
              }}
            >
              <p
                className="text-[17px] italic"
                style={{ color: "rgba(220,235,245,0.92)", lineHeight: 1.65 }}
              >
                "{t("about.philosophy")}"
              </p>
            </blockquote>
          </div>

          {/* Credentials card */}
          <div
            className="rounded-[20px] p-7"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 4px 18px -2px rgba(0,0,0,0.15)",
            }}
          >
            {/* Company icon */}
            <div
              className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[22px] font-bold mb-4.5"
              style={{
                background: "linear-gradient(135deg, #0F6E56, #1D9E75)",
              }}
            >
              AL
            </div>

            <div
              className="text-lg font-bold mb-1"
              style={{ color: "white" }}
            >
              {t("about.credentials.name")}
            </div>
            <div
              className="text-[13px] font-medium mb-5"
              style={{ color: "#1D9E75" }}
            >
              {t("about.credentials.title")}
            </div>

            {/* Info rows */}
            <div className="space-y-3.5">
              {/* Location */}
              <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(185,210,225,0.82)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(29,158,117,0.12)", border: "1px solid rgba(29,158,117,0.25)" }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="10" r="8" />
                    <path d="M2 10h16" />
                    <path d="M10 2c2.5 2.5 4 5.2 4 8s-1.5 5.5-4 8" />
                    <path d="M10 2c-2.5 2.5-4 5.2-4 8s1.5 5.5 4 8" />
                  </svg>
                </div>
                <span>{t("about.credentials.location")}</span>
              </div>
              {/* Focus */}
              <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(185,210,225,0.82)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(2,132,199,0.12)", border: "1px solid rgba(2,132,199,0.25)" }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="10" r="7" />
                    <path d="M10 7v3l2 2" />
                  </svg>
                </div>
                <span>{t("about.credentials.focus")}</span>
              </div>
              {/* Experience */}
              <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(185,210,225,0.82)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239,159,39,0.12)", border: "1px solid rgba(239,159,39,0.25)" }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="7" width="14" height="10" rx="1.5" />
                    <path d="M7 7V5a3 3 0 0 1 6 0v2" />
                    <path d="M10 11v2" />
                  </svg>
                </div>
                <span>{t("about.credentials.experience")}</span>
              </div>
            </div>

            {/* Social links */}
            <div
              className="mt-4 pt-4 flex gap-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {[
                ["GitHub", "https://github.com/amphibian-labs"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] no-underline transition-colors duration-200"
                  style={{ color: "rgba(185,210,225,0.6)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "white")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "rgba(185,210,225,0.6)")
                  }
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack chips */}
        <div
          className="mt-16 pt-12 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div
            className="font-mono text-[11px] font-medium uppercase mb-6"
            style={{ letterSpacing: "0.1em", color: "rgba(185,210,225,0.5)" }}
          >
            Tech stack
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techStack.map((name) => (
              <span
                key={name}
                className="font-mono text-xs px-4 py-1.5 rounded-lg cursor-default transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(185,210,225,0.7)",
                  background: "rgba(255,255,255,0.03)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#1D9E75";
                  el.style.color = "#1D9E75";
                  el.style.background = "rgba(29,158,117,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.color = "rgba(185,210,225,0.7)";
                  el.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
