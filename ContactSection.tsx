import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  industry: z.string().optional(),
  frustration: z.string().optional(),
  referral: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { t } = useTranslation("home");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await fetch("https://formspree.io/f/xvzdwben", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success(t("contact.confirmation"));
        reset();
      } else {
        toast.error("Something went wrong. Please try email instead.");
      }
    } catch {
      // Fallback - open mailto
      toast.error("Connection error. Please try email instead.");
    }
  };

  const industries = ["healthcare", "construction", "professional", "trades", "retail", "other"];

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
          {t("contact.section_title")}
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          {t("contact.subtitle")}
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 mx-auto rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <p className="text-lg font-medium text-foreground">
              {t("contact.confirmation")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                {t("contact.name_label")} *
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-colors"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                {t("contact.email_label")} *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-colors"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-1.5">
                {t("contact.industry_label")}
              </label>
              <select
                id="industry"
                {...register("industry")}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-colors"
              >
                <option value="">{t("contact.industry_options.placeholder")}</option>
                {industries.map((key) => (
                  <option key={key} value={key}>
                    {t(`contact.industry_options.${key}`)}
                  </option>
                ))}
              </select>
            </div>

            {/* Frustration */}
            <div>
              <label htmlFor="frustration" className="block text-sm font-medium text-foreground mb-1.5">
                {t("contact.frustration_label")}
              </label>
              <textarea
                id="frustration"
                rows={4}
                {...register("frustration")}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-colors resize-none"
              />
            </div>

            {/* Referral */}
            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-foreground mb-1.5">
                {t("contact.referral_label")}
              </label>
              <input
                id="referral"
                type="text"
                {...register("referral")}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : null}
              {t("contact.submit")}
            </button>
          </form>
        )}

        {/* Fallback email */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          {t("contact.fallback")}{" "}
          <a
            href="mailto:info@amphibianlabs.com.au"
            className="text-teal-600 hover:underline"
          >
            info@amphibianlabs.com.au
          </a>
        </p>
      </div>
    </section>
  );
}
