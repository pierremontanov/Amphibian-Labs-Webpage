import { useTranslation } from "react-i18next";
import { MapPin, GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import { techLogos } from "./TechLogos";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = [
  "Python", "FastAPI", "Docker", "Power Automate", "SharePoint",
  "Microsoft 365", "Azure", "Tesseract", "GitHub",
];

export default function AboutSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
          {t("about.section_title")}
        </h2>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Bio */}
          <div className="space-y-5">
            <p className="text-foreground leading-relaxed">{t("about.bio_p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.bio_p2")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.bio_p3")}</p>

            {/* Philosophy quote */}
            <blockquote className="border-l-2 border-teal-600 pl-4 mt-6">
              <p className="text-foreground italic">{t("about.philosophy")}</p>
            </blockquote>
          </div>

          {/* Credentials card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4">
              {t("about.credentials.name")}
            </h3>
            <p className="text-sm text-teal-600 font-medium mb-4">
              {t("about.credentials.title")}
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground/60" />
                {t("about.credentials.location")}
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-muted-foreground/60" />
                {t("about.credentials.degree")}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-muted-foreground/60" />
                {t("about.credentials.experience")}
              </div>
            </div>
            {/* Social links */}
            <div className="mt-5 pt-4 border-t border-border flex gap-4">
              <a
                href="https://linkedin.com/in/pierremontanov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/pierremontanov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Tech stack SVG logos */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {techStack.map((name) => {
              const LogoComp = techLogos[name];
              return (
                <div
                  key={name}
                  className="group flex flex-col items-center gap-1.5"
                  title={name}
                >
                  {LogoComp ? (
                    <LogoComp className="w-7 h-7 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                  ) : (
                    <span className="text-sm text-muted-foreground/50 group-hover:text-foreground transition-colors font-medium">
                      {name}
                    </span>
                  )}
                  <span className="text-[10px] text-muted-foreground/40 group-hover:text-muted-foreground transition-colors">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
