import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  MapPin, GraduationCap, Briefcase, ExternalLink,
  ArrowRight, Code, Users, Heart,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { techLogos } from "@/components/TechLogos";

const techStack = [
  "Python", "FastAPI", "Docker", "Power Automate", "SharePoint",
  "Microsoft 365", "Azure", "Tesseract", "GitHub",
];

const values = [
  {
    icon: Heart,
    title: "Enhancement over replacement",
    body: "We don't tear down what works. We add intelligent layers on top of your existing systems - no migrations, no disruption.",
  },
  {
    icon: Users,
    title: "Radical honesty",
    body: "We'll recommend a competitor if they're a better fit. We'll tell you when you don't need us. Our reputation is built on trust, not sales.",
  },
  {
    icon: Code,
    title: "You own everything",
    body: "Full source code, documentation, and knowledge transfer. No vendor lock-in, no recurring fees for code we wrote. When we're done, it's yours.",
  },
];

export default function AboutPage() {
  const { t } = useTranslation("home");

  return (
    <>
      <Helmet>
        <title>About - Amphibian Labs</title>
        <meta name="description" content="Amphibian Labs is an Australian tech consultancy founded by Pierre Montanov. AI backends, system integration, and workflow automation for SMBs." />
        <meta property="og:title" content="About - Amphibian Labs" />
        <meta property="og:description" content="AI backends, system integration, and workflow automation. Founded by Pierre Montanov on the Gold Coast." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Amphibian Labs",
            url: "https://amphibianlabs.com.au",
            founder: {
              "@type": "Person",
              name: "Pierre Montanov",
              jobTitle: "Founder & Technical Consultant",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University (Master's in Information Technology)",
              },
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gold Coast",
              addressRegion: "QLD",
              addressCountry: "AU",
            },
            description: "Australian tech consultancy that enhances existing business systems with AI-powered backend services, workflow automation, and system integration.",
          })}
        </script>
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "About" },
            ]}
          />

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Amphibian Labs
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Intelligence. Inspired by nature.
            </p>
          </div>

          {/* Bio */}
          <section className="mb-16">
            <div className="space-y-5">
              <p className="text-foreground leading-relaxed">{t("about.bio_p1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.bio_p2")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.bio_p3")}</p>
            </div>

            <blockquote className="border-l-2 border-teal-600 pl-4 mt-8">
              <p className="text-foreground italic">{t("about.philosophy")}</p>
            </blockquote>
          </section>

          {/* Credentials */}
          <section className="mb-16">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card max-w-sm">
              <h2 className="font-semibold text-foreground mb-4">
                {t("about.credentials.name")}
              </h2>
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
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-8">
              What we believe
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="text-center p-5">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Tech stack */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Technologies we work with
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {techStack.map((name) => {
                const LogoComp = techLogos[name];
                return (
                  <div key={name} className="group flex flex-col items-center gap-1.5" title={name}>
                    {LogoComp ? (
                      <LogoComp className="w-7 h-7 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                    ) : (
                      <span className="text-sm text-muted-foreground/50 group-hover:text-foreground transition-colors font-medium">{name}</span>
                    )}
                    <span className="text-[10px] text-muted-foreground/40 group-hover:text-muted-foreground transition-colors">{name}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-10 px-6 rounded-lg bg-navy-800 dark:bg-navy-900">
            <h2 className="text-lg font-semibold text-white mb-3">
              Want to work together?
            </h2>
            <p className="text-sm text-slate-300 mb-5">
              Start with a discovery session. No pitch, no commitment.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
            >
              Book a discovery session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
