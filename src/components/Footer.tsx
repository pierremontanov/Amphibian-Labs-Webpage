import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import logoDark from "@/assets/ALL.png";
import logoLight from "@/assets/ALL2.png";

export default function Footer() {
  const { t } = useTranslation(["common", "nav"]);
  const { resolvedTheme } = useTheme();
  const year = new Date().getFullYear();
  const logo = resolvedTheme === "dark" ? logoDark : logoLight;

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Amphibian Labs logo" className="h-8 w-auto" />
          </Link>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-foreground transition-colors">
              {t("services", { ns: "nav" })}
            </Link>
            <Link to="/repositories" className="hover:text-foreground transition-colors">
              Open Source
            </Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">
              {t("blog", { ns: "nav" })}
            </Link>
            <Link to="/donate" className="hover:text-foreground transition-colors">
              Donate
            </Link>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>{t("contact_info.location")}</span>
          <a href="tel:0420729667" className="hover:text-foreground transition-colors">
            {t("contact_info.phone")}
          </a>
          <a href="mailto:info@amphibianlabs.com.au" className="hover:text-foreground transition-colors">
            {t("contact_info.email")}
          </a>
        </div>

        {/* Copyright & ABN */}
        <p className="mt-4 text-center text-xs text-muted-foreground/60">
          {t("footer.copyright", { year })} &middot; ABN 91 155 211 230
        </p>
      </div>
    </footer>
  );
}
