import { Target, Clock, Wrench, FileText, ShieldCheck } from "lucide-react";

const outcomes = [
  {
    icon: Target,
    title: "Clarity on the problem",
    desc: "Know what \"done\" means before any work starts",
  },
  {
    icon: Clock,
    title: "Fits your budget & timeline",
    desc: "A plan scoped to what you can actually deliver",
  },
  {
    icon: Wrench,
    title: "A working solution",
    desc: "Not just advice — real systems you can use",
  },
  {
    icon: FileText,
    title: "Simple documentation",
    desc: "Your team can run it without calling me",
  },
  {
    icon: ShieldCheck,
    title: "Built for exceptions",
    desc: "Handles edge cases instead of falling apart",
  },
];

const OutcomesSection = () => {
  return (
    <section id="outcomes" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          What you get
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 shadow-card flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
