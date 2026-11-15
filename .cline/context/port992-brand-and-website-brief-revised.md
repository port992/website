# port992 --- Brand & Website Planning Brief

> Context document for an agentic coding tool. Use this as the initial
> product, brand, and technical brief when planning the port992
> organization website.

## 1. Project overview

**Brand name:** `port992`\
**Initial landing-page domain:** `port992.eu.org`\
**GitHub organization:** `github.com/port992` (intended organization
URL; verify availability and ownership before deployment)\
**Business direction:** A small technology and software-engineering
studio focused on practical digital solutions, reusable software
components, web development, and reliable infrastructure.

The name is a deliberate reference to networking and secure
communications. Port 992 is conventionally assigned to **Telnet over TLS
(TELNETS)**; it is not the standard SSH port (22). The name should be
treated primarily as a distinctive technical brand, not marketed with
the inaccurate claim that port 992 is SSH.

The initial website is a landing page for the organization. It should
establish credibility, explain what port992 does, and provide clear
paths to its work, packages, documentation, GitHub organization, and
contact channel.

## 2. Brand positioning and business orientation

### Positioning

Present port992 as a **technology and engineering brand**, not merely a
computer-repair shop, generic digital agency, or cybersecurity company.

The identity should be able to grow from freelance and small-business
projects into a more mature engineering consultancy and product
ecosystem.

Suggested positioning:

-   Software engineering and custom web solutions.
-   Reusable frontend and UI component packages.
-   Linux, systems, infrastructure, and deployment work.
-   Practical IT and computer support where appropriate.
-   Security-conscious engineering as a principle across the work.

Do not overstate specialist cybersecurity capabilities. Security should
inform the engineering approach---sensible defaults, secure
configuration, maintainability, and responsible practices---rather than
imply that port992 already offers penetration testing, formal security
audits, or other specialist services unless those services are actually
established.

### Potential service pillars

Use these as an initial organizing model. They can be narrowed or
expanded as the business and portfolio develop.

1.  **Software & Web**
    -   Custom websites and web applications.
    -   Angular development.
    -   .NET / C# and Blazor WebAssembly development.
    -   WebAssembly technologies and browser-based execution where
        relevant.
    -   APIs, backend services, integrations, and business automation.
2.  **Infrastructure & Linux**
    -   Linux and Debian systems.
    -   Server setup and administration.
    -   Self-hosted services and deployment.
    -   Infrastructure automation and operational maintenance.
    -   Cloud and DevOps work where supported by real experience and
        project scope.
3.  **Systems & Support**
    -   Computer and laptop diagnostics.
    -   Hardware upgrades, refurbishment, and maintenance.
    -   Practical technical support for individuals and small
        businesses.

These pillars should be described through concrete deliverables, not
vague claims. The website should distinguish current services from
future ambitions.

### Brand principles

-   **Reliable:** deliver solutions that work and can be maintained.
-   **Practical:** solve real problems without unnecessary complexity.
-   **Secure-minded:** treat security as part of sound engineering.
-   **Transparent:** communicate scope, trade-offs, and limitations
    clearly.
-   **Maintainable:** prefer understandable architecture and documented
    decisions.
-   **Independent:** use appropriate open standards and avoid
    unnecessary vendor lock-in.
-   **Craft-focused:** show real work and technical quality rather than
    relying on hype.

### Suggested messaging

Primary tagline explored:

> Secure access. Real solutions.

Other suitable messaging explored:

> Build. Secure. Deliver.

A broader positioning sentence:

> Engineering reliable digital solutions.

Possible supporting copy:

> Software, web and infrastructure solutions built with care for
> security, performance and maintainability.

Choose one primary tagline for the actual website. Do not crowd the hero
with several competing slogans.

## 3. Visual identity

### Overall art direction

The visual identity should make a strong but sober statement:

-   Minimalist, modern, technical, and sophisticated.
-   Predominantly black, charcoal, and white.
-   Violet as the primary brand accent.
-   Debian-inspired red as a small, deliberate secondary accent,
    primarily reserved for the favicon mark or other limited brand
    details.
-   High contrast, deliberate whitespace, restrained motion, and clear
    typography.
-   Avoid generic hacker imagery, stock padlocks, excessive neon, gaming
    aesthetics, and gratuitous gradients.
-   Architectural photography, dark technical environments, server
    infrastructure, and restrained abstract terminal/connection motifs
    can be used selectively.

The brand should feel like a serious engineering studio---not a
cyberpunk gaming brand.

### Core colour palette

  -----------------------------------------------------------------------
  Role              Name              Hex               Guidance
  ----------------- ----------------- ----------------- -----------------
  Main background   Obsidian          `#0B0B0D`         Primary dark
                                                        background

  Main text /       White             `#F5F5F5`         Headlines,
  contrast                                              important text,
                                                        light surfaces

  Primary accent    Violet            `#8B5CF6`         Logo underscore
                                                        and `992`, links,
                                                        active states,
                                                        small highlights
                                                        and brand details

  Secondary accent  Debian red        `#D70A53`         Small, selective
                                                        details; notably
                                                        the favicon dot
  -----------------------------------------------------------------------

Additional practical neutrals may be selected during implementation,
while staying consistent with the palette:

-   Secondary dark surface: a charcoal close to `#151518`.
-   Muted text: a neutral grey with sufficient contrast against the
    background.
-   Borders and dividers: subtle dark grey, not bright outlines
    everywhere.

**Colour guidance:** violet is the default brand accent. Debian red
should remain secondary and sparingly used. Do not use violet and Debian
red as equally prominent accents in the same interface. Keep the
majority of the design monochrome and use colour deliberately.

### Logo direction

The current preferred logo concept is a minimalist terminal-inspired
mark based on **`$_`**, replacing the earlier `>_` symbol and circular
badge concept.

There are three intended logo variants:

1.  **Standalone symbol --- `$_`**
    -   `$` in white (`#F5F5F5`).
    -   `_` in violet (`#8B5CF6`).
    -   The underscore should be thinner than the dollar sign and should
        read as a terminal cursor or command-line indicator.
    -   No circle, ring, enclosing shape, or decorative frame.
    -   Intended for compact brand placements, avatars, and contexts
        where the symbol can be displayed at a useful size.
2.  **Horizontal wordmark --- `$_ port992`**
    -   `$` in white (`#F5F5F5`).
    -   `_` in Debian red (`#D70A53`).
    -   `port` in white (`#F5F5F5`).
    -   `992` in violet (`#8B5CF6`).
    -   Set on one horizontal line, with balanced spacing between the
        symbol and wordmark.
    -   The underscore remains a thin cursor-like line, not a
        full-height character.
3.  \*\*Favicon mark --- `$_ .` / \`$_.'**
    - `$`in white (`#F5F5F5\`).
    -   `_` in violet (`#8B5CF6`).
    -   `.` in Debian red (`#D70A53`).
    -   The dot is a small, distinct terminal-style accent. The favicon
        should read as a compact `$_.'` mark, without a circle or
        surrounding badge.

The visual hierarchy is intentional: white carries the main symbol and
wordmark, violet identifies the underscore in the standalone mark and
the `992` numerals, and Debian red provides a small distinguishing
detail in the horizontal logo and favicon. Do not introduce additional
colours into the logo.

Use the standalone symbol for compact contexts only when it remains
legible. Use the horizontal wordmark for the website header,
documentation, presentations, and other brand placements. Use the
dedicated favicon variant for browser tabs and small application icons.

The generated logo concepts are visual starting points, not final vector
assets. Create clean, scalable SVG variants in Inkscape. Build the
underscore and favicon dot as vector shapes rather than relying on font
glyphs, so their thickness, length, position, and spacing can be
controlled precisely. Verify legibility at small sizes, especially 16×16
and 32×32 pixels. Also test the mark on both dark and light backgrounds;
if a light-background variant is needed, adapt it without changing the
core proportions or colour roles.

### Typography and layout

The current preferred typeface candidate is **Manrope**, with **Space
Grotesk** and **Sora** as alternatives to compare before making the
final choice.

-   **Manrope:** preferred starting point; test weights 700 and 800 for
    the wordmark. It offers a contemporary, geometric, clean appearance
    without becoming excessively futuristic.
-   **Space Grotesk:** alternative with a more pronounced technical
    character; test weights 600 and 700.
-   **Sora:** alternative with a more futuristic, rounded character;
    test weights 600 and 700.

The final typeface is not yet confirmed. Compare the candidates in the
actual `port992` wordmark, paying particular attention to the shapes and
spacing of `p`, `o`, `r`, `t`, and the numerals `992`. The logo should
remain distinctive and legible rather than looking like a generic
technology template.

For the wordmark, experiment with `port` at weight 700 and `992` at
weight 800, but treat this as a starting point rather than a fixed
requirement. Keep the symbol's dollar sign visually strong and the
underscore noticeably thinner.

For the wider website:

-   Prefer a clean contemporary sans-serif for headings and body copy.
-   A restrained monospace face may be used for terminal details, code
    snippets, labels, or small technical accents.
-   Use strong typographic hierarchy and generous whitespace.
-   Keep navigation simple and content readable.
-   Avoid excessive letter spacing in body copy and avoid making every
    element uppercase.

## 4. Product direction: reusable component packages

A key product initiative is to build reusable, templated UI component
packages for **Angular** and **Blazor WebAssembly**.

The intended approach is to organize components by category rather than
create one enormous, tightly coupled library. Initial categories
discussed:

-   Hero sections and hero variants.
-   Sliders and carousels.
-   Contact sections and contact layouts.
-   Maps and map sections.
-   Footers.
-   Further reusable website sections as the collection grows.

Potential package/repository naming examples:

### Angular / npm

-   `@port992/angular-heroes`
-   `@port992/angular-sliders`
-   `@port992/angular-contact`
-   `@port992/angular-maps`
-   `@port992/angular-footers`

### Blazor / NuGet

-   `port992.Blazor.Heroes`
-   `port992.Blazor.Sliders`
-   `port992.Blazor.Contact`
-   `port992.Blazor.Maps`
-   `port992.Blazor.Footers`

These are naming proposals, not confirmed package names. Check
namespace, package-name, and organization availability before adopting
them.

### Package design principles

-   Keep packages independently versionable and releasable.
-   Avoid unnecessary dependencies between component categories.
-   Provide sensible defaults and customization points.
-   Include responsive behaviour and accessibility from the start.
-   Document installation, configuration, parameters, events, and
    examples.
-   Include working demos and visual examples.
-   Test supported framework versions and browsers.
-   Avoid claiming that Angular and Blazor packages share implementation
    code; they may share design principles and visual language, but each
    should use idiomatic framework-specific implementations.
-   Consider a shared design system for tokens, spacing, colours,
    typography, and component behaviour.

Do not create every package at once. Start with one polished, useful
package, establish the release and documentation workflow, then expand.

## 5. Source code, registries, and visibility

The intended distribution model is to host source code in GitHub and
publish installable packages through the relevant ecosystem registries.

  Ecosystem   Preferred registry   Example
  ----------- -------------------- ---------------------------
  Angular     npm                  `@port992/angular-heroes`
  Blazor      NuGet.org            `port992.Blazor.Heroes`

GitHub Packages is also an option for hosting npm and NuGet packages,
particularly when private distribution is required.

Important distinction:

-   A GitHub repository stores and manages source code.
-   npm, NuGet.org, or GitHub Packages distributes installable packages.
-   A documentation site explains and showcases the packages.

Repository visibility and package visibility are separate concerns,
subject to each registry's policies and configuration. It is possible to
keep a GitHub source repository private while publishing a public
package to npm or NuGet.org. NuGet.org packages are public; use a
private feed such as GitHub Packages for private NuGet distribution.
Private npm packages have plan and access requirements.

The initial preference is to develop privately, validate the packages,
and decide which repositories and packages should become public when
they are ready. Do not expose secrets, credentials, private customer
code, or internal configuration in published packages. Inspect package
contents before every release, including source maps and bundled source
files.

## 6. CI/CD and release workflow

Use GitHub Actions to automate package quality checks and publishing.

A typical release pipeline:

1.  Trigger on a release or approved version tag.
2.  Restore dependencies.
3.  Build the library.
4.  Run unit and integration tests where applicable.
5.  Run linting, formatting, accessibility, and package validation
    checks.
6.  Generate package artifacts.
7.  Publish to npm or NuGet using securely stored credentials or
    supported trusted publishing mechanisms.
8.  Attach release notes and package artifacts to the GitHub release.

Use semantic versioning (`MAJOR.MINOR.PATCH`) and maintain changelogs.
Each independently distributed package should have its own version
history. Avoid publishing from a developer's local machine as the normal
release process.

## 7. Landing page goals and proposed structure

The initial landing page should be a polished, responsive introduction
to port992. It should not pretend the company already has a large
catalogue or extensive client portfolio.

### Suggested sections

1.  **Hero**
    -   Clear `port992` identity.
    -   One primary tagline.
    -   A concise statement of the work.
    -   Primary call to action, such as "Explore our work" or "Get in
        touch".
    -   Secondary link to GitHub.
2.  **Services / What we build**
    -   Software & Web.
    -   Infrastructure & Linux.
    -   Systems & Support.
    -   Explain each with concrete examples.
3.  **Packages / Engineering resources**
    -   Introduce the Angular and Blazor component collections.
    -   Show only packages that actually exist and are ready to be
        presented.
    -   Link to package registries, source repositories, demos, and
        documentation as appropriate.
4.  **Approach / Engineering principles**
    -   Reliability.
    -   Security-minded design.
    -   Maintainability.
    -   Performance.
    -   Clear communication.
5.  **Selected work**
    -   Real projects, screenshots, and concise case studies.
    -   Do not invent clients, testimonials, project metrics, or
        outcomes.
    -   If the portfolio is initially small, omit the section or label
        demonstrative projects honestly.
6.  **Contact**
    -   A simple contact route.
    -   Add professional email and social links only after they are
        configured and verified.

### Website experience

-   Responsive across mobile, tablet, and desktop.
-   Accessible semantic HTML, keyboard navigation, visible focus states,
    and suitable colour contrast.
-   Fast loading and optimized images.
-   Search-engine basics: page title, description, canonical URL, social
    preview metadata, sitemap, and robots configuration.
-   Good privacy practices; do not add analytics, tracking, or
    third-party embeds without a clear reason and appropriate
    disclosures.
-   Subtle interaction and motion only where they improve usability.
-   Strong dark-mode-first art direction; consider a light variant only
    if it can be designed consistently.

### Suggested navigation

-   Home
-   Services
-   Packages
-   About
-   Contact

Keep navigation compact. GitHub can be a visible external link rather
than a complicated section.

## 8. Initial domain and infrastructure

**Initial domain:** `port992.eu.org`, obtained through EU.org.

This is intended as the initial landing-page domain while the
organization is being established. It is a free subdomain and is
suitable for getting started, but it should not be represented as
equivalent to owning a commercial registered domain.

Potential infrastructure choices discussed:

-   **DNS:** Cloudflare DNS, provided the EU.org delegation and domain
    configuration permit it.
-   **Static hosting:** Cloudflare Pages is a suitable candidate for a
    static landing page.
-   **Source control:** GitHub organization `port992`.
-   **Website repository:** `port992/website` (suggested).
-   **Documentation:** a separate documentation site or repository when
    the component packages mature.
-   **Email:** a professional address such as `hello@port992.eu.org`,
    only after selecting and configuring an email provider and verifying
    DNS support.

If port992 becomes an established business, consider acquiring a
commercial `.pt` or `.com` domain. Do not delay the initial website
solely because the commercial domain has not yet been acquired.

## 9. Implementation guidance for the coding agent

Before coding, inspect the existing repository and ask for clarification
only where a decision materially affects the architecture or final
result.

The agent should:

-   Treat this document as product and brand context, not as permission
    to invent business facts.
-   Propose a simple, maintainable architecture appropriate for a
    landing page.
-   Avoid unnecessary backend services if the site is static.
-   Keep content, design tokens, and reusable UI elements organized.
-   Build mobile-first and validate responsive layouts.
-   Use the specified palette and logo direction consistently, including
    the distinct standalone, horizontal, and favicon variants.
-   Ensure accessibility, SEO basics, and performance.
-   Use real links and contact details only when supplied.
-   Avoid placeholder testimonials, fake client logos, fabricated
    metrics, and unsupported claims.
-   Keep the initial scope focused: a high-quality landing page that can
    later link to package demos and documentation.
-   Explain significant technology choices and trade-offs before
    introducing unnecessary complexity.

## 10. Decisions still to make

The following items remain open and should be resolved during planning
rather than silently assumed:

-   Final tagline and homepage copy.
-   Whether the initial service offering includes all three proposed
    pillars.
-   Final logo SVGs, exact proportions and spacing, and light/dark
    variants.
-   Final typeface selection among Manrope, Space Grotesk, and Sora (or
    another suitable option).
-   Final wordmark font weights and spacing.
-   Frontend framework and build tooling for the landing page.
-   Whether the site is fully static or needs a backend/contact form
    service.
-   Contact email provider and actual address.
-   Whether package source repositories will remain private permanently
    or become public.
-   First component package to build and its supported framework
    versions.
-   Documentation tooling and hosting.
-   How consistently Debian red should be used beyond the favicon dot
    and the horizontal logo underscore.
-   Future commercial domain strategy.

------------------------------------------------------------------------

## Short brief

**port992 is a sober, modern engineering brand with a black-and-white
visual foundation, violet as its primary accent, and restrained
Debian-red details. Its visual identity is built around a
terminal-inspired `$_` symbol: a white dollar sign and a thin violet
cursor-like underscore. The horizontal `$_ port992` wordmark uses a
white dollar sign, Debian-red underscore, white `port`, and violet
`992`; the dedicated favicon uses a white dollar sign, violet
underscore, and Debian-red dot. The logo has no enclosing circle or
badge. Manrope is the preferred typeface candidate, with Space Grotesk
and Sora still under consideration. port992 aims to provide software and
web development, Linux/infrastructure work, and practical systems
support, while building reusable Angular and Blazor WebAssembly
component libraries distributed through npm and NuGet. Its technology
interests include .NET/C#, Angular, Blazor, WebAssembly, Linux, Debian,
Bash, PowerShell, AWS, Kubernetes, Docker, and NGINX. The initial
website at `port992.eu.org` should be a fast, accessible, responsive
landing page that communicates the brand clearly, showcases real work
and packages as they become available, and provides a straightforward
contact route. The brand should emphasize reliability, maintainability,
practical engineering, and security-minded development without making
unsupported cybersecurity claims.**
