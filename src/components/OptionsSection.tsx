import { Badge } from "@/components/ui/badge";

const options = [
  {
    label: "Option A",
    title: "Clarity Session",
    popular: false,
    bullets: ["Process map", "Recommendations", "Short plan and next steps"],
  },
  {
    label: "Option B",
    title: "Build Sprint",
    popular: true,
    bullets: [
      "Automation, app, or system improvement",
      "Testing and go-live support",
      "Handover notes",
    ],
  },
  {
    label: "Option C",
    title: "Ongoing Tech Lead",
    popular: false,
    bullets: [
      "Priorities and planning",
      "Provider and software management",
      "Ongoing improvements and reporting",
    ],
  },
];

const OptionsSection = () => {
  return (
    <section id="options" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Simple ways to engage
        </h2>
        <p className="text-base text-muted-foreground mb-12">
          Flexible options — no lock-in contracts. Start small and scale up when you're ready.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div
              key={opt.title}
              className={`rounded-xl p-6 sm:p-8 border relative ${
                opt.popular
                  ? "border-primary bg-accent/50 shadow-card-hover ring-2 ring-primary/20"
                  : "border-border bg-card shadow-card"
              } transition-shadow duration-300 hover:shadow-card-hover flex flex-col`}
            >
              {opt.popular && (
                <Badge className="absolute -top-3 left-6 gradient-teal text-primary-foreground border-0 px-3 py-1 text-xs">
                  Most Popular
                </Badge>
              )}
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {opt.label}
              </span>
              <h3 className="mt-2 text-xl font-bold text-foreground">{opt.title}</h3>
              <ul className="mt-4 space-y-2 flex-1">
                {opt.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:info@amphibianlabs.com.au"
                className={`mt-6 inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 ${
                  opt.popular
                    ? "gradient-teal text-primary-foreground shadow-button hover:opacity-90"
                    : "text-primary border border-primary/30 hover:bg-accent hover:border-primary"
                }`}
              >
                Get started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptionsSection;
