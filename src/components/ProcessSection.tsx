const steps = [
  { num: "1", title: "Quick call", desc: "Confirm problem, urgency, outcome", outcome: "You know if we're a fit" },
  { num: "2", title: "Discovery", desc: "Workflow, bottlenecks and quick wins", outcome: "Clear picture of what to fix first" },
  { num: "3", title: "Delivery", desc: "We build or manage the right provider", outcome: "Working solution, tested and live" },
  { num: "4", title: "Handover", desc: "Steps, training if needed, next improvements", outcome: "Your team runs it independently" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-[hsl(174_40%_18%)] text-[hsl(210_20%_95%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          How it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-5 left-[calc(2.5rem+8px)] right-[calc(2.5rem+8px)] h-1 rounded-full bg-primary/30">
            <div className="h-full rounded-full gradient-teal opacity-50" />
          </div>

          {steps.map((step) => (
            <div key={step.num} className="relative z-10">
              <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center text-primary-foreground font-bold text-sm mb-4 shadow-button">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm opacity-80">{step.desc}</p>
              <p className="mt-2 text-xs opacity-50 italic">{step.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
