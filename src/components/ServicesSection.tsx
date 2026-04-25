import { useTranslation } from "react-i18next";
import { Search, Puzzle, Presentation, Brain, Network, Zap, GitBranch, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
}

function ServiceCard({ icon, title, body }: ServiceCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-card transition-shadow">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-muted">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

const tiers = [
  {
    key: "understand",
    accent: "teal",
    borderColor: "border-teal-200 dark:border-teal-700/30",
    iconColor: "text-teal-600",
    bgAccent: "bg-teal-50 dark:bg-teal-900/20",
    services: [
      { key: "discovery", icon: Search },
      { key: "advisory", icon: Puzzle },
      { key: "training", icon: Presentation },
    ],
  },
  {
    key: "build",
    accent: "sky",
    borderColor: "border-sky-100 dark:border-sky-800/30",
    iconColor: "text-sky-600",
    bgAccent: "bg-sky-50 dark:bg-sky-800/10",
    services: [
      { key: "ai_backends", icon: Brain },
      { key: "integration", icon: Network },
      { key: "automation", icon: Zap },
    ],
  },
  {
    key: "share",
    accent: "amber",
    borderColor: "border-amber-100 dark:border-amber-800/30",
    iconColor: "text-amber-600",
    bgAccent: "bg-amber-50 dark:bg-amber-800/10",
    services: [
      { key: "open_source", icon: GitBranch },
      { key: "community", icon: Users },
    ],
  },
];

export default function ServicesSection() {
  const { t } = useTranslation("home");
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="py-24 bg-muted/50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
          {t("services.section_title")}
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
          {t("services.intro")}
        </p>

        <div className="mt-16 space-y-12">
          {tiers.map((tier) => (
            <div key={tier.key}>
              {/* Tier header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1.5 h-8 rounded-full ${
                  tier.key === "understand" ? "bg-teal-600" :
                  tier.key === "build" ? "bg-sky-600" :
                  "bg-amber-600"
                }`} />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t(`services.${tier.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`services.${tier.key}.subtitle`)}
                  </p>
                </div>
              </div>

              {/* Service cards grid */}
              <div className={`grid gap-4 sm:grid-cols-2 ${tier.services.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
                {tier.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <ServiceCard
                      key={service.key}
                      icon={<Icon className={`w-5 h-5 ${tier.iconColor}`} />}
                      title={t(`services.${tier.key}.${service.key}.title`)}
                      body={t(`services.${tier.key}.${service.key}.body`)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
