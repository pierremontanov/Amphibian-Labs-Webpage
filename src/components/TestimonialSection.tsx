import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Amphibian Labs helped us automate our quoting process - what used to take two days now takes 20 minutes.",
    name: "Operations Manager",
    business: "Trades & Services",
    stars: 5,
  },
  {
    quote: "We finally have visibility across our projects. No more chasing emails or checking spreadsheets.",
    name: "Business Owner",
    business: "Professional Services",
    stars: 5,
  },
  {
    quote: "He explained everything in plain language and delivered exactly what we needed, on time.",
    name: "Office Manager",
    business: "Construction",
    stars: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          What clients say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 sm:p-8 shadow-card flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-base text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
