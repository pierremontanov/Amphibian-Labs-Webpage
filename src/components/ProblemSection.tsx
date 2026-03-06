import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

const painPoints = [
  "Manual work, chasing emails",
  "Retyping data into spreadsheets",
  "Systems that don't talk to each other",
  "Errors, rework, no visibility",
];

const solutions = [
  "Automated workflows that run themselves",
  "One source of truth — no double handling",
  "Systems connected and talking",
  "Real-time visibility and fewer mistakes",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-background">
      {/* Thin teal divider at the top */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-16" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          The problem you see every day
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pain points column */}
          <div className="space-y-4">
            {painPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl p-4 bg-destructive/5 border border-destructive/10"
              >
                <AlertTriangle size={20} className="text-destructive mt-0.5 shrink-0" />
                <span className="text-base text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Solution teaser column */}
          <div className="space-y-4">
            {solutions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl p-4 bg-accent/60 border border-primary/10"
              >
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-base text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-muted-foreground">
          <ArrowRight size={18} className="text-primary shrink-0" />
          <p className="text-base leading-relaxed">
            If it feels messy or unclear, we help you get clarity on what to fix first.
          </p>
        </div>
        <p className="mt-4 text-base font-semibold text-foreground">
          We fix this without the cost of hiring a full-time IT manager.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
