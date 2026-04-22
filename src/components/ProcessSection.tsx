import { useTranslation } from "react-i18next";

export default function ProcessSection() {
  const { t } = useTranslation("home");
  const steps = t("process.steps", { returnObjects: true }) as Array<{
    title: string;
    body: string;
  }>;

  return (
    <section id="process" className="py-24 bg-navy-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16">
          {t("process.section_title")}
        </h2>

        {/* Desktop stepper */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-5 left-[10%] right-[10%] h-px bg-navy-400/30 z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Numbered circle */}
                <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center text-white font-bold text-sm shadow-button mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-navy-200/80 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet vertical stepper */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              {/* Number + vertical line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center text-white font-bold text-sm shadow-button flex-shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-navy-400/30 mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pt-1.5 pb-4">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-navy-200/80 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key messaging */}
        <p className="mt-16 text-center text-sm text-navy-200/60 max-w-2xl mx-auto italic">
          {t("process.key_message")}
        </p>
      </div>
    </section>
  );
}
