import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          About
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-start">
          {/* Profile placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="w-28 h-28 rounded-full bg-accent flex items-center justify-center border-2 border-primary/20">
              <User size={40} className="text-primary/60" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Amphibian Labs specialises in turning messy day-to-day operations into reliable technology systems for small and medium businesses. We design and improve workflows using the Microsoft ecosystem — including Power Automate, Dynamics CRM, SharePoint, and Teams — plus lightweight apps and integrations, so teams spend less time on manual work and get cleaner data and better visibility.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our approach is hands-on from discovery through to delivery. Every solution comes with simple documentation, so it keeps running long after the project ends — no internal IT department required.
            </p>

            {/* Tool badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Power Automate", "SharePoint", "Dynamics 365", "Teams"].map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center px-3 py-1.5 rounded-md bg-muted text-xs font-medium text-muted-foreground border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
