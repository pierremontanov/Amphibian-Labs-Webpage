# Amphibian Labs - Webpage Enhancement Roadmap

**Date:** April 20, 2026
**Current stack:** React 18 + TypeScript + Tailwind CSS + shadcn/ui + Vite (Lovable-generated)
**Current state:** Single-page landing site with 11 sections, no routing beyond index, no backend

---

## Current Site Audit

The existing site is a well-designed single-page landing site. The section flow is: Navbar > Hero > Problem > Services > Outcomes > Process > Testimonials > Options > About > Contact > Footer. It uses a teal/navy color palette with DM Sans + Inter typography, card-based layouts, and responsive grids. The only user actions currently available are email links and a phone call link - there are no forms, no dynamic content, and no backend integration.

**What works well:**

- Clean, professional visual identity with consistent teal/navy branding
- Responsive layout with mobile-specific sticky CTA
- Good information architecture for a consulting business
- Dark mode CSS variables already defined (not yet toggled)
- Smooth scroll anchoring between sections

**What's missing (based on your requirements):**

- No dedicated "Main Services" page with deep-dive content
- No "Repositories" section showcasing code, tools, or open-source work
- No "Donation Portal" for accepting contributions
- No dynamic content, backend, or CMS
- No blog, case studies, or content marketing layer
- No analytics, SEO sitemap, or structured data

---

## Phase 1 - Main Services Section (Rework + Expand)

### Goal
Transform the existing `ServicesSection.tsx` from a flat 6-card grid into a rich, navigable services hub that gives each service its own identity and deep-dive content.

### 1.1 Restructure the Services Section

**Current problem:** All six services sit in a single grid with equal visual weight. A visitor scanning quickly can't tell which service is the primary offering vs. supplementary.

**Actions:**

- Group the six services into 2–3 tiers: **Core Services** (operations automation, system integration, AI document processing) and **Supporting Services** (web solutions, vendor selection, CRM cleanup)
- Add a short intro paragraph above the grid that frames what Amphibian Labs *does* in one sentence - something anchored to the tagline "We turn problems into working systems"
- Consider a tabbed or accordion layout for mobile instead of stacking all 6 cards vertically

### 1.2 Add Individual Service Detail Pages (or Expandable Panels)

**Actions:**

- Create a `/services/:slug` route for each service (e.g., `/services/automation`, `/services/ai-extraction`)
- Each page should include: a problem statement, the Amphibian Labs approach, tools/technologies used, a mini case study or example scenario, and a CTA to book a clarity session
- Alternatively, if you want to stay single-page, use expandable `Dialog` or `Sheet` components from shadcn/ui (already installed) that slide in with full detail when a card is clicked

### 1.3 Add Service-Specific Icons or Illustrations

**Current state:** Services use Lucide icons (Settings, Zap, Database, Globe, ShieldCheck, Brain). These are functional but generic.

**Actions:**

- Commission or create custom SVG illustrations for each service that feel more "Amphibian Labs"
- At minimum, consider using the teal gradient background with more distinctive icon compositions

### 1.4 Add a "Tech Stack" or "Tools We Use" Strip

**Actions:**

- Below or within the services section, add a logo strip showing tools: Power Automate, SharePoint, Dynamics 365, Teams, plus any others (Azure, Power BI, etc.)
- This is partially in `AboutSection.tsx` as badge pills - pull it out into its own visual component with actual logos

---

## Phase 2 - Repositories Section (New)

### Goal
Showcase open-source projects, templates, tools, or sample automations that Amphibian Labs has built or contributed to. This builds credibility and creates a community touchpoint.

### 2.1 Create a New `RepositoriesSection.tsx` Component

**Actions:**

- Add a new section to `Index.tsx` between the About and Contact sections (or as a new page at `/repositories`)
- Design it as a card grid (similar to the services grid) where each card represents a repository

### 2.2 Repository Card Design

**Each card should show:**

- Repository name and a one-line description
- Primary language/technology badge (e.g., "Power Automate", "TypeScript", "Python")
- Star count and last-updated date (if pulling from GitHub API)
- A link to the GitHub repo

**Layout suggestion:** 2-column grid on desktop, 1-column on mobile, with a filter bar at the top for categories (e.g., "Automations", "Templates", "Utilities", "Documentation")

### 2.3 GitHub API Integration

**Actions:**

- Use `@tanstack/react-query` (already installed) to fetch repos from the GitHub API: `GET https://api.github.com/users/pierremontanov/repos`
- Cache results with a 5-minute stale time to avoid rate limiting
- Show a skeleton loader (shadcn `Skeleton` component already available) while data loads
- Fallback: if the API is unavailable, display a static list of featured repositories

### 2.4 Featured vs. All Repos

**Actions:**

- Pin 3–4 "featured" repositories at the top with larger cards and more detail
- Below that, show a collapsible list of all other public repos
- Add a "View all on GitHub" button linking to `github.com/pierremontanov`

### 2.5 Navigation Update

**Actions:**

- Add "Repos" or "Open Source" to the Navbar links
- Add the section ID (`#repositories`) for smooth scrolling if staying single-page
- If going multi-page, add a `/repositories` route in `App.tsx`

---

## Phase 3 - Donation Portal (New)

### Goal
Allow visitors to support Amphibian Labs through one-time or recurring donations - particularly relevant if any of the repositories or tools are open-source community projects.

### 3.1 Create a `DonationSection.tsx` Component

**Actions:**

- Add a new section (or dedicated page at `/donate`) with a warm, transparent message about why donations matter - e.g., funding open-source development, maintaining community tools, supporting SMB automation education
- Include clear tiers or suggested amounts

### 3.2 Payment Integration Options

**Option A - Stripe (Recommended for full control):**
- Create a Stripe account and set up a payment link or Stripe Checkout session
- Use Stripe's embeddable pricing table or payment links (no backend required for simple donations)
- For recurring donations, use Stripe's subscription mode

**Option B - Ko-fi / Buy Me a Coffee / GitHub Sponsors (Fastest to ship):**
- Embed a Ko-fi or Buy Me a Coffee widget directly on the page
- Link to a GitHub Sponsors profile for developer-focused donations
- Pros: zero backend work, instant setup. Cons: less brand control, platform fees

**Option C - PayPal Donate Button:**
- Embed a PayPal donation button (simple HTML embed)
- Supports one-time donations out of the box

### 3.3 Donation Tier Design

**Suggested tiers:**

| Tier | Amount | What it supports |
|------|--------|------------------|
| Supporter | $5–$10 | Keep the lights on, maintain open-source repos |
| Builder | $25–$50 | Fund new automation templates for the community |
| Champion | $100+ | Sponsor a full open-source tool or integration |

### 3.4 Transparency & Trust

**Actions:**

- Add a brief "Where your donation goes" section with a simple breakdown (e.g., 60% development, 20% hosting & infrastructure, 20% community content)
- If applicable, show a progress bar toward a current funding goal
- Include a thank-you wall or donor acknowledgment (with permission)

### 3.5 Navigation & CTA Integration

**Actions:**

- Add a "Support Us" or "Donate" link to the Navbar (with a heart icon from Lucide)
- Add a subtle donation CTA in the Footer
- Consider a small banner or callout within the Repositories section: "Love this tool? Support its development"

---

## Phase 4 - Additional Recommendations

### 4.1 Add Multi-Page Routing

**Current state:** Everything lives on `Index.tsx`. The app already has React Router installed with only `/` and `*` (404) routes.

**Actions:**

- Add routes for: `/services`, `/services/:slug`, `/repositories`, `/donate`, `/about`, `/blog` (future)
- Create a shared `Layout.tsx` wrapper with Navbar + Footer so they persist across pages
- Update `Navbar.tsx` to use `NavLink` (already have `NavLink.tsx` component) with active states for page routes instead of just hash anchors

### 4.2 Activate Dark Mode Toggle

**Current state:** Full dark mode CSS variables are defined in `index.css` under `.dark` class, and `next-themes` is installed in `package.json`. But there's no toggle in the UI.

**Actions:**

- Add a sun/moon toggle button to the Navbar (between nav links and the "Email me" CTA)
- Wire it up with `next-themes` ThemeProvider
- Test all sections for proper contrast in dark mode

### 4.3 Contact Form (Replace Email-Only CTA)

**Current state:** Every CTA is a `mailto:` link. There's no way to capture leads on-site.

**Actions:**

- Replace or supplement `ContactSection.tsx` with an actual contact form (name, email, business type, describe your problem)
- Options for form backend: Formspree, Supabase, Resend, or a simple serverless function
- Add form validation with `react-hook-form` + `zod` (both already installed)
- Send a confirmation toast using `sonner` (already installed)

### 4.4 SEO & Metadata Improvements

**Current state:** Basic OG tags exist in `index.html`, but no structured data, no sitemap, no canonical URLs.

**Actions:**

- Add JSON-LD structured data for `Organization` and `LocalBusiness` schema
- Generate a `sitemap.xml` (can be static for now, or use `vite-plugin-sitemap`)
- Add canonical `<link>` tags
- Add `robots.txt` improvements (current one is minimal)
- Add page-level `<title>` and `<meta description>` for each new route

### 4.5 Performance & Asset Optimization

**Current state:** `logo.png` is 1.4 MB - very large for a small navbar logo.

**Actions:**

- Compress `logo.png` to WebP format (should drop to ~30–50KB)
- Add `loading="lazy"` to below-fold images
- Consider code-splitting service detail pages with `React.lazy()`
- Audit the shadcn/ui component imports - many are installed but unused (carousel, calendar, chart, etc.), which may inflate the bundle

### 4.6 Blog or Case Studies Section

**Actions:**

- Add a `/blog` or `/case-studies` route
- Start with 2–3 written case studies showing before/after for real client engagements
- Use markdown files with a simple frontmatter parser, or integrate a headless CMS (Sanity, Contentlayer, or even GitHub-based markdown)
- This is the single best thing for organic SEO in the consulting space

### 4.7 Testimonials Enhancement

**Current state:** Three anonymous testimonials with generic industry labels ("Trades & Services", "Professional Services", "Construction"). No names, no photos, no company names.

**Actions:**

- Add real client names and company names (with permission)
- Add small avatar photos or company logos
- Consider a carousel for 5+ testimonials
- Add a "View case study" link on each testimonial card

### 4.8 Analytics Integration

**Actions:**

- Add Plausible, Fathom, or Google Analytics 4
- Track key events: CTA clicks (email, call), section scroll depth, service card clicks, donation conversions
- Add UTM parameter handling for marketing campaigns

### 4.9 Accessibility Audit

**Current state:** Decent semantic HTML, but some gaps.

**Actions:**

- Add `aria-label` to all icon-only buttons
- Ensure keyboard navigation works for the mobile menu
- Check color contrast ratios (especially muted-foreground text on light backgrounds)
- Add skip-to-content link
- Test with a screen reader

### 4.10 Fix the `.gitignore`

**Current state:** The file is named `gitignore.txt` instead of `.gitignore`, which means it's not functional.

**Actions:**

- Rename `gitignore.txt` to `.gitignore`
- Verify `node_modules/`, `.env`, and build artifacts are properly ignored

---

## Suggested Implementation Priority

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| 1 | Restructure Services section (1.1–1.3) | Medium | High |
| 2 | Repositories section with GitHub API (2.1–2.5) | Medium | High |
| 3 | Donation portal with Stripe/Ko-fi (3.1–3.5) | Low–Medium | Medium |
| 4 | Multi-page routing (4.1) | Medium | High |
| 5 | Contact form (4.3) | Low | High |
| 6 | Logo compression & performance (4.5) | Low | Medium |
| 7 | Fix .gitignore (4.10) | Trivial | Low |
| 8 | Dark mode toggle (4.2) | Low | Low |
| 9 | SEO improvements (4.4) | Medium | High |
| 10 | Blog / case studies (4.6) | High | Very High |
| 11 | Analytics (4.8) | Low | Medium |
| 12 | Accessibility audit (4.9) | Medium | Medium |
| 13 | Testimonials enhancement (4.7) | Low | Medium |

---

## Architecture Notes

The current codebase is well-organized for a single-page site. As you expand to multi-page, consider this structure:

```
src/
  components/
    layout/
      Layout.tsx          (shared Navbar + Footer wrapper)
      Navbar.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      ServicesSection.tsx
      RepositoriesSection.tsx   (NEW)
      DonationSection.tsx       (NEW)
      ...existing sections
    ui/
      ...shadcn components
  pages/
    Index.tsx
    ServicesPage.tsx       (NEW)
    ServiceDetail.tsx      (NEW)
    RepositoriesPage.tsx   (NEW)
    DonatePage.tsx         (NEW)
    BlogPage.tsx           (FUTURE)
    NotFound.tsx
  hooks/
    useGitHubRepos.ts     (NEW - React Query hook for GitHub API)
  lib/
    utils.ts
```

This keeps the existing section-based architecture while adding proper page routing on top.
