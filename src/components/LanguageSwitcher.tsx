import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt-BR", label: "Português" },
  { code: "zh-Hans", label: "中文" },
  { code: "ja", label: "日本語" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-slate-500 hover:text-teal-400 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium uppercase tracking-wide">
          {i18n.language.split("-")[0]}
        </span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-36 rounded-lg border border-border bg-card shadow-card-hover py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              className={`w-full text-left px-3 py-2 text-sm transition-colors hover:bg-muted ${
                i18n.language === lang.code
                  ? "text-teal-600 font-medium"
                  : "text-foreground"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
