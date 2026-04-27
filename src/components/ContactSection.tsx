import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  industry: z.string().optional(),
  frustration: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const industries = ["healthcare", "construction", "professional", "trades", "retail", "other"];

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
      toast.error("Connection error. Please try email instead.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    background: "rgba(255,255,255,0.06)",
    color: "white",
    fontFamily: "inherit",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "#06111A" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at 80% 60%, rgba(29,158,117,0.09) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-[88px] items-center">
          {/* Left side: contact info */}
          <div>
            <div
              className="font-mono text-[11px] font-medium uppercase mb-3.5"
              style={{ letterSpacing: "0.12em", color: "#6DCBAB" }}
            >
              Get in touch
            </div>
            <h2
              className="font-bold text-white mb-5"
              style={{
                fontSize: "clamp(36px, 4.5vw, 60px)",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
              }}
            >
              {t("contact.section_title")}
            </h2>
            <p
              className="text-lg mb-11"
              style={{ color: "rgba(185,210,225,0.92)", lineHeight: 1.7 }}
            >
              {t("contact.subtitle")}
            </p>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(29,158,117,0.12)",
                    border: "1px solid rgba(29,158,117,0.25)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="16" height="12" rx="2" />
                    <path d="M2 6l8 5 8-5" />
                  </svg>
                </div>
                <a
                  href="mailto:info@amphibianlabs.com.au"
                  className="text-[15px] transition-colors duration-200"
                  style={{ color: "rgba(185,210,225,0.88)", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(185,210,225,0.88)")}
                >
                  info@amphibianlabs.com.au
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(29,158,117,0.12)",
                    border: "1px solid rgba(29,158,117,0.25)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 2H8.5L10 6.5 8 8C9 10.5 11 12.5 13.5 13.5L15 11.5L19 13V16.5C19 17.3 18.3 18 17.5 18C9 17.5 2 10.5 2 3.5C2 2.7 2.7 2 3.5 2H5Z" />
                  </svg>
                </div>
                <a
                  href="tel:0420729667"
                  className="text-[15px] transition-colors duration-200"
                  style={{ color: "rgba(185,210,225,0.88)", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(185,210,225,0.88)")}
                >
                  0420 729 667
                </a>
              </div>
              {/* Location - Australia */}
              <div className="flex items-center gap-3.5">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(29,158,117,0.12)",
                    border: "1px solid rgba(29,158,117,0.25)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="10" r="8" />
                    <path d="M2 10h16" />
                    <path d="M10 2c2.5 2.5 4 5.2 4 8s-1.5 5.5-4 8" />
                    <path d="M10 2c-2.5 2.5-4 5.2-4 8s1.5 5.5 4 8" />
                  </svg>
                </div>
                <span className="text-[15px]" style={{ color: "rgba(185,210,225,0.82)" }}>
                  Australia
                </span>
              </div>
            </div>
          </div>

          {/* Right side: form */}
          <div>
            {submitted ? (
              <div
                className="rounded-[20px] text-center"
                style={{
                  background: "rgba(29,158,117,0.08)",
                  border: "1px solid rgba(29,158,117,0.25)",
                  padding: "52px 40px",
                }}
              >
                <div className="text-[40px] mb-5" style={{ color: "#1D9E75" }}>✓</div>
                <div className="text-xl font-semibold text-white mb-2.5">
                  {t("contact.confirmation")}
                </div>
                <div style={{ color: "rgba(185,210,225,0.86)", fontSize: 15 }}>
                  We'll be in touch within 24 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5">
                {/* Name + Email row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      placeholder={t("contact.name_label")}
                      {...register("name")}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(29,158,117,0.45)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      placeholder={t("contact.email_label")}
                      type="email"
                      {...register("email")}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(29,158,117,0.45)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Industry */}
                <select
                  {...register("industry")}
                  style={{
                    ...inputStyle,
                    color: "rgba(185,210,225,0.75)",
                  }}
                >
                  <option value="" disabled>
                    {t("contact.industry_options.placeholder")}
                  </option>
                  {industries.map((key) => (
                    <option key={key} value={key} style={{ color: "black", background: "white" }}>
                      {t(`contact.industry_options.${key}`)}
                    </option>
                  ))}
                </select>

                {/* Message */}
                <textarea
                  placeholder={t("contact.frustration_label")}
                  rows={4}
                  {...register("frustration")}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(29,158,117,0.45)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-medium text-white rounded-[10px] gradient-teal shadow-button hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {t("contact.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
