# Amphibian Labs - Full Site Build Task List

**Date:** April 25, 2026
**Baseline:** feature/home-page-rebuild branch (home page sections, i18n, colour system, dark mode, contact form, SEO schema done)

---

## Phase 0 - Foundation (already complete)

- [x] Colour system CSS variables (light + dark)
- [x] i18n infrastructure (react-i18next, English JSON, 5 language stubs)
- [x] Dark mode toggle (next-themes)
- [x] Navbar with language switcher
- [x] Home page 9 sections (Hero, Problem, Services, Outcomes, Process, Blog Preview, About, Engagement, Contact)
- [x] Contact form (react-hook-form + zod + Formspree)
- [x] JSON-LD Organization + FAQPage schema
- [x] sitemap.xml, robots.txt, llms.txt
- [x] Logo compressed to WebP
- [x] .gitignore fixed

---

## Phase 1 - Global Layout + Routing Infrastructure

**Goal:** Every page shares Navbar, Footer, dark mode, and i18n. Routes exist for all five top-level paths.

1. Create shared Layout component (Navbar + Footer wrapper with `<Outlet />`)
1. Refactor App.tsx routing: add `/services`, `/services/:slug`, `/repositories`, `/blog`, `/blog/:slug`, `/donate` routes - all wrapped in Layout
1. Add scroll-to-top on route change (useEffect on location)

2. Update Navbar links from hash anchors (#services, #about) to proper route links (/services, /about section on home, /blog, etc.)
2. Add active link styling using NavLink or useLocation

---

## Phase 2 - Services Hub + Detail Pages

**Goal:** /services shows a hub with tiered service cards. Each card links to /services/:slug with full detail content.

3. Create /services hub page component (ServicesPage.tsx)
3. Write i18n content for /services hub intro and per-tier descriptions (public/locales/en/services.json)

4. Create service detail page template (ServiceDetail.tsx) with sections: problem statement, approach, technologies used, example scenario/case study, CTA to contact
4. Write i18n content for all 6 service detail pages (public/locales/en/service-detail.json):
   - /services/automation
   - /services/integration
   - /services/ai-extraction
   - /services/web-solutions
   - /services/vendor-selection
   - /services/crm-cleanup

5. Add FAQ section to services hub with FAQPage schema markup (AEO)
5. Add breadcrumb navigation component (reusable across all detail pages)
5. Add meta tags per service page (title, description, OG)

---

## Phase 3 - Repositories / Open Source Showcase

**Goal:** /repositories shows pinned repos, all public repos from GitHub API, category filtering, and DocIQ spotlight.

6. Create useGitHubRepos hook (React Query, fetches from api.github.com/users/pierremontanov/repos, 5-min stale time, error/loading states)
6. Write i18n content for repositories page (public/locales/en/repositories.json)

7. Create RepositoriesPage.tsx:
   - DocIQ spotlight card (large, featured, with test count, languages, FHIR compliance badge)
   - Pinned/featured repos section (3-4 manually curated)
   - All repos grid (from GitHub API) with language badge, star count, last updated
   - Category filter bar (Automations, Templates, Utilities, Documentation)
   - "View all on GitHub" link
   - Skeleton loading states

8. Add meta tags and JSON-LD SoftwareApplication schema for DocIQ

---

## Phase 4 - Blog System

**Goal:** /blog listing page and /blog/:slug article pages. Content-led, AEO-optimised. This is the highest-impact SEO asset.

9. Design blog data model (frontmatter structure: title, slug, excerpt, category, date, reading_time, author, tags)
9. Decide content source: markdown files with frontmatter (simplest) vs headless CMS (Sanity/Contentlayer)

10. Create BlogPage.tsx (listing):
    - Article cards grid (title, excerpt, date, reading time, category pill)
    - Category filter (Philosophy, Engineering, Guide, Case Study)
    - Search/filter by tag
10. Create BlogArticle.tsx (detail):
    - Article header (title, date, reading time, category, author)
    - Markdown/MDX rendered body with prose styling (@tailwindcss/typography)
    - Related articles at bottom
    - CTA to book discovery session

11. Write first 3 articles (stub or full):
    - "Why we enhance your systems instead of replacing them" (Philosophy)
    - "How we built DocIQ: an open-source AI engine for medical document processing" (Engineering)
    - "5 signs your business is ready for AI - and 3 signs you're not" (Guide)
11. Add ArticlePage JSON-LD schema (BlogPosting)
11. Add blog RSS feed (public/feed.xml)

---

## Phase 5 - Donation / Support Open Source Page

**Goal:** /donate page with tier cards, payment integration, and transparency section.

12. Choose payment provider and set up account:
    - Option A: Stripe payment links (recommended, no backend)
    - Option B: Ko-fi / GitHub Sponsors embed (fastest)
    - Option C: PayPal donate button
12. Write i18n content for donate page (public/locales/en/donate.json): tier descriptions, transparency breakdown, CTA copy

13. Create DonatePage.tsx:
    - Why support section (funding open source, community tools)
    - 3 tier cards (Supporter $5-10, Builder $25-50, Champion $100+)
    - Payment embed or link (Stripe/Ko-fi/PayPal)
    - "Where your donation goes" transparency breakdown
    - Optional: progress bar toward funding goal
    - Optional: donor acknowledgment wall

---

## Phase 6 - Visual Polish + Assets

**Goal:** Replace text-only tech logos with real SVGs. Create OG images. Refine animations and mobile UX.

14. Download and normalise tech stack SVG logos (Python, FastAPI, Docker, Power Automate, SharePoint, M365, Azure, Tesseract, GitHub) from simpleicons.org - monochrome + colour variants, consistent 32x40px
14. Create OG image template (1200x630px, navy-800 bg, logo, DM Sans) and generate variants: homepage, services, blog template

15. Replace text tech stack strip in AboutSection with actual SVG logos (monochrome default, colour on hover)
15. Add scroll-triggered reveal animations to all sections (IntersectionObserver, CSS-only fade-up)
15. Audit and refine mobile layouts across all pages (375px viewport)
15. Add skip-to-content link for accessibility

---

## Phase 7 - Translations

**Goal:** Populate the 4 non-English language files with real translations.

16. Translate all JSON files to Spanish (es)
16. Translate all JSON files to Portuguese-BR (pt-BR)

17. Translate all JSON files to Simplified Chinese (zh-Hans) - needs native review
17. Translate all JSON files to Japanese (ja) - needs native review
17. Add CJK font stacks (Noto Sans SC, Noto Sans JP) to CSS
17. Add per-language meta tags and hreflang validation

---

## Phase 8 - Analytics + Performance

**Goal:** Track user behaviour, optimise bundle size, ensure fast load times.

18. Integrate analytics (Plausible, Fathom, or GA4)
18. Set up event tracking: CTA clicks, section scroll depth, form submissions, donation conversions

19. Audit and remove unused shadcn/ui components from bundle (carousel, calendar, chart, command, etc.)
19. Add React.lazy() code splitting for service detail pages, blog articles, donate page
19. Add loading="lazy" to all below-fold images
19. Run Lighthouse audit and fix any issues (target 90+ on all categories)

---

## Phase 9 - E-E-A-T + AEO Hardening

**Goal:** Maximise trust signals for AI answer engines and search rankings.

20. Add ABN to footer and about page (when registered)
20. Add structured data testing (Google Rich Results Test) for all JSON-LD
20. Add entity consistency audit: ensure "Amphibian Labs", "Pierre Montanov", "Gold Coast, QLD" appear identically across all pages, schema, and external profiles

21. Create /about standalone page (expanded bio, full credentials, certifications, publications)
21. Add testimonials section back (with real client names, companies, photos - with permission)
21. Implement AEO patterns on all pages: question-led H2s, direct answers in first 2 lines, FAQ schema on every page with questions

---

## Phase 10 - Pre-Launch QA

**Goal:** Everything works, looks right, and is ready for production deployment.

22. Full cross-browser testing (Chrome, Firefox, Safari, Edge)
22. Full responsive testing (375px, 768px, 1024px, 1440px)
22. Dark mode contrast audit on every page
22. Accessibility audit (screen reader, keyboard nav, aria labels, colour contrast WCAG AA)

23. Verify all i18n keys resolve (no missing translations shown)
23. Verify all internal links work (no 404s)
23. Verify contact form submits to Formspree correctly
23. Verify all JSON-LD validates (schema.org validator)
23. Verify sitemap.xml includes all pages
23. Final Lighthouse audit (target 90+ all categories)

24. Merge feature/home-page-rebuild to main via PR
24. Deploy to production
24. Verify live site renders correctly
24. Submit sitemap to Google Search Console

---

## Summary

| Phase | What | Tasks | Parallel groups |
|-------|------|-------|-----------------|
| 0 | Foundation | Done | - |
| 1 | Layout + Routing | 1-2 | 2 |
| 2 | Services pages | 3-5 | 3 |
| 3 | Repositories | 6-8 | 3 |
| 4 | Blog system | 9-11 | 3 |
| 5 | Donate page | 12-13 | 2 |
| 6 | Visual polish | 14-15 | 2 |
| 7 | Translations | 16-17 | 2 |
| 8 | Analytics + perf | 18-19 | 2 |
| 9 | E-E-A-T + AEO | 20-21 | 2 |
| 10 | QA + Launch | 22-24 | 3 |

**Total: 24 task groups across 10 phases.**
**Phases 2, 3, 4, 5 can run in parallel once Phase 1 (routing) is complete.**
**Phases 6 and 7 can run in parallel with anything after Phase 1.**
**Phases 8 and 9 should run after all content pages exist.**
**Phase 10 is always last.**
