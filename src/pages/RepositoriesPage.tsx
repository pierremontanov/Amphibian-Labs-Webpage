import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Star, GitFork, ExternalLink, ArrowRight,
  FlaskConical, Shield, Globe, FileCheck,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { useGitHubRepos, type GitHubRepo } from "@/hooks/useGitHubRepos";

// Language colour mapping
const langColors: Record<string, string> = {
  Python: "bg-blue-500",
  TypeScript: "bg-blue-600",
  JavaScript: "bg-yellow-400",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  Shell: "bg-green-600",
  Dockerfile: "bg-sky-600",
  Go: "bg-cyan-500",
};

// Pinned repo slugs (manually curated)
const pinnedRepoNames = [
  "Amphibian-Labs-Webpage",
  "HealthParse",
];

// Category keyword matching
const categoryKeywords: Record<string, string[]> = {
  automations: ["automate", "automation", "workflow", "power-automate", "n8n", "make"],
  templates: ["template", "boilerplate", "starter", "scaffold"],
  utilities: ["util", "tool", "cli", "script", "helper"],
  documentation: ["docs", "documentation", "guide", "wiki", "readme"],
};

function categoriseRepo(repo: GitHubRepo): string[] {
  const text = `${repo.name} ${repo.description || ""} ${repo.topics.join(" ")}`.toLowerCase();
  const cats: string[] = [];
  for (const [cat, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some((kw) => text.includes(kw))) {
      cats.push(cat);
    }
  }
  return cats;
}

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const days = Math.floor((now - then) / (1000 * 60 * 60 * 24));
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

// Skeleton card for loading state
function RepoSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-card p-5 animate-pulse">
      <div className="h-4 bg-muted rounded w-2/3 mb-3" />
      <div className="h-3 bg-muted rounded w-full mb-2" />
      <div className="h-3 bg-muted rounded w-4/5 mb-4" />
      <div className="flex gap-3">
        <div className="h-3 bg-muted rounded w-16" />
        <div className="h-3 bg-muted rounded w-12" />
        <div className="h-3 bg-muted rounded w-14" />
      </div>
    </div>
  );
}

// Repo card
function RepoCard({ repo, t }: { repo: GitHubRepo; t: (key: string) => string }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-lg border border-border dark:border-slate-700 bg-card dark:bg-slate-800/50 p-5 hover:shadow-card-hover hover:border-teal-400 dark:hover:border-teal-600 transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-semibold text-foreground dark:text-white group-hover:text-teal-600 transition-colors truncate">
          {repo.name}
        </h3>
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-teal-600 transition-colors flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
        {repo.description || t("all_repos.no_description")}
      </p>
      <div className="flex items-center gap-3 text-xs text-muted-foreground dark:text-slate-500">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${langColors[repo.language] || "bg-slate-400"}`} />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1">
            <GitFork className="w-3 h-3" />
            {repo.forks_count}
          </span>
        )}
        <span className="ml-auto">
          {t("all_repos.updated")} {timeAgo(repo.updated_at)}
        </span>
      </div>
    </a>
  );
}

export default function RepositoriesPage() {
  const { t } = useTranslation("repositories");
  const { data: repos, isLoading, isError } = useGitHubRepos();
  const [filter, setFilter] = useState("all");

  const filterKeys = ["all", "automations", "templates", "utilities", "documentation"];

  // Split repos into pinned + rest
  const { pinned, allRepos } = useMemo(() => {
    if (!repos) return { pinned: [], allRepos: [] };
    const pinned = repos.filter((r) => pinnedRepoNames.includes(r.name));
    const rest = repos.filter((r) => !pinnedRepoNames.includes(r.name));
    return { pinned, allRepos: rest };
  }, [repos]);

  // Filter repos by category
  const filteredRepos = useMemo(() => {
    if (filter === "all") return allRepos;
    return allRepos.filter((r) => categoriseRepo(r).includes(filter));
  }, [allRepos, filter]);

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "DocIQ",
            applicationCategory: "HealthcareApplication",
            operatingSystem: "Cross-platform",
            description: "Open-source AI document intelligence engine for healthcare. FHIR R4 compliant.",
            url: "https://github.com/pierremontanov/HealthParse",
            author: {
              "@type": "Organization",
              name: "Amphibian Labs",
              url: "https://amphibianlabs.com.au",
            },
            license: "https://opensource.org/licenses/MIT",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "AUD",
            },
          })}
        </script>
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Open Source" },
            ]}
          />

          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground dark:text-white mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground dark:text-slate-300 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* DocIQ Spotlight */}
          <div className="mb-16 rounded-xl border border-teal-200 dark:border-teal-700/40 bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/40 dark:to-slate-900 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-600 text-white">
                {t("spotlight.label")}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-2">
              {t("spotlight.title")}
            </h2>
            <p className="text-muted-foreground dark:text-slate-300 mb-1">
              {t("spotlight.tagline")}
            </p>
            <p className="text-sm text-muted-foreground dark:text-slate-400 leading-relaxed mb-6 max-w-2xl">
              {t("spotlight.description")}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-700/30">
                <FlaskConical className="w-3.5 h-3.5" />
                {t("spotlight.tests")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-700/30">
                <Globe className="w-3.5 h-3.5" />
                {t("spotlight.languages")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-700/30">
                <Shield className="w-3.5 h-3.5" />
                {t("spotlight.fhir")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-foreground border border-border">
                <FileCheck className="w-3.5 h-3.5" />
                {t("spotlight.license")}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/pierremontanov/HealthParse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg gradient-teal shadow-button hover:opacity-90 transition-opacity"
              >
                {t("spotlight.view_on_github")}
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/services/ai-extraction"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground rounded-lg border border-border bg-card hover:bg-muted transition-colors"
              >
                {t("spotlight.read_case_study")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pinned Repos */}
          {pinned.length > 0 && (
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-foreground dark:text-white mb-6">
                {t("pinned.title")}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {pinned.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} t={t} />
                ))}
              </div>
            </div>
          )}

          {/* All Repos */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-xl font-semibold text-foreground dark:text-white">
                {t("all_repos.title")}
              </h2>
              <a
                href="https://github.com/pierremontanov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-600 hover:underline inline-flex items-center gap-1"
              >
                {t("all_repos.view_all")}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filterKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    filter === key
                      ? "bg-teal-600 text-white border-teal-600"
                      : "bg-card dark:bg-slate-800/50 text-muted-foreground dark:text-slate-400 border-border dark:border-slate-700 hover:border-teal-400 hover:text-foreground dark:hover:text-white"
                  }`}
                >
                  {t(`filters.${key}`)}
                </button>
              ))}
            </div>

            {/* Loading state */}
            {isLoading && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <RepoSkeleton key={i} />
                ))}
              </div>
            )}

            {/* Error state */}
            {isError && (
              <div className="rounded-lg border border-border dark:border-slate-700 bg-card dark:bg-slate-800/50 p-8 text-center">
                <h3 className="text-sm font-semibold text-foreground dark:text-white mb-2">
                  {t("error.title")}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-slate-400 mb-4">
                  {t("error.body")}
                </p>
                <a
                  href="https://github.com/pierremontanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-600 hover:underline inline-flex items-center gap-1"
                >
                  {t("error.link")}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Repo grid */}
            {!isLoading && !isError && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRepos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} t={t} />
                ))}
                {filteredRepos.length === 0 && (
                  <p className="col-span-full text-center text-sm text-muted-foreground py-8">
                    No repositories match this filter.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
