import { Settings, Zap, Database, Globe, ShieldCheck, Brain } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Make operations easier",
    outcome: "So your team stops wasting hours on repetitive tasks",
    bullets: [
      "Remove repetitive admin work",
      "Reduce mistakes and rework",
      "Clear steps for the team",
      "Track what failed and what needs action",
    ],
  },
  {
    icon: Zap,
    title: "Automate the boring stuff",
    outcome: "So work moves forward without you chasing it",
    bullets: [
      "Process requests from emails and forms",
      "Approval flows (quotes, invoices, leave, purchases)",
      "Reminders and follow-ups",
      "Move info between systems (no copy and paste)",
      "Simple dashboards",
    ],
  },
  {
    icon: Database,
    title: "Improve systems without replacing everything",
    outcome: "So you get more from tools you already pay for",
    bullets: [
      "Clean up CRM usage",
      "Data entry rules and validation",
      "Simple internal apps for consistent capture",
    ],
  },
  {
    icon: Globe,
    title: "Simple web solutions when needed",
    outcome: "So customers and staff get what they need online",
    bullets: [
      "Basic business websites or landing pages",
      "Forms that route data correctly",
      "Small tools that save time (validation, booking, reporting)",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Choose the right provider",
    outcome: "So you don't overpay or get locked in",
    bullets: [
      "Compare options in plain language",
      "Get quotes, reduce risk, avoid vendor traps",
      "Manage delivery so you get what you paid for",
    ],
  },
  {
    icon: Brain,
    title: "Practical AI (no hype)",
    outcome: "So you extract value from documents automatically",
    bullets: [
      "Extract key info from documents (invoices, forms, PDFs)",
      "Structured summaries and reports",
      "Human review step for accuracy",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          What I help you with
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                <s.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-primary italic mb-4">{s.outcome}</p>
              <ul className="space-y-2 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
