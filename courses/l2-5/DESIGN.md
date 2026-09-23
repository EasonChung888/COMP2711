---
name: COMP2711
description: Offline COMP2711 course site organized by module, chapter and topic.
colors:
  paper: "#f5f0e7"
  surface: "#fffdf8"
  surface-blue: "#edf3f7"
  ink: "#20272d"
  muted: "#626b72"
  line: "#d7d0c5"
  accent: "#285f82"
  accent-dark: "#17425f"
  selection: "#cbdfea"
typography:
  display:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(2.35rem, 7vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  headline:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(1.45rem, 3vw, 2.15rem)"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  module-entry-title:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.4
  entry-action:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9rem"
  body:
    fontFamily: 'Georgia, "Times New Roman", serif'
    fontSize: "clamp(17px, 1.5vw, 19px)"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.82rem"
rounded:
  control: "8px"
  disclosure: "12px"
  course-card: "14px"
  surface: "16px"
spacing:
  grid-gap: "1rem"
  course-card-padding: "1.15rem"
  practice-padding: "1.5rem"
components:
  module-entry:
    textColor: "{colors.ink}"
    padding: "1.7rem 0"
  entry-action:
    textColor: "{colors.accent-dark}"
    typography: "{typography.entry-action}"
  page-breadcrumb:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  portal-meta:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0.65rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.surface}"
  course-card:
    backgroundColor: "rgba(255, 253, 248, 0.8)"
    textColor: "{colors.ink}"
    rounded: "{rounded.course-card}"
    padding: "{spacing.course-card-padding}"
  read-toggle:
    backgroundColor: "{colors.surface-blue}"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "0.6rem 0.8rem"
  practice-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.surface}"
    padding: "{spacing.practice-padding}"
  attempt-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem"
  original-slide:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.surface}"
    padding: "0.7rem 1rem"
---
# Design System: COMP2711

## Overview

**Creative North Star: "The Logic Reading Notebook"**

A paper-colored reading notebook that inherits the existing Logic site. Muted blue identifies links, actions and reading controls; Georgia-led prose sits beneath compact system-sans headings. The design serves sustained reading, with restrained borders and generous separation between source pages.

This is a record of the implemented site, extracted from `assets/logic.css`, its later `assets/site.css` overrides, `tools/portal.mjs`, `tools/render.mjs` and the lesson structure. The site brand is COMP2711. Navigation follows COMP2711 (`index.html`) → Counting (`counting.html`) → L2.5 (`l2-5.html`) → 8 existing topic lessons. L2.5 contains 39 source pages and 17 practice questions; lesson URLs and the `comp2711:l2-5:` progress namespace remain stable. The existing Logic visual direction is authoritative.

**Key Characteristics:**
- Read mode: complete explanations first, practice after each topic.
- Warm paper, blue emphasis and softly rounded reading surfaces.
- Local assets, local progress and direct file opening.

## Colors

Warm neutrals support a single muted-blue accent family. Frontmatter records the source values without renaming CSS roles.

- **Paper / surface:** page background and near-white disclosure or practice panels.
- **Surface blue:** goal callout and read-completion controls.
- **Ink / muted:** primary prose and quieter metadata.
- **Line:** card outlines and section dividers.
- **Accent / accent dark:** primary action, links, focus context and practice separators; the primary link-button darkens on hover.
- **Selection:** pale blue text selection.

The inherited stylesheet also contains success/error colors and quiz styles. These are not active design requirements for the current read-and-self-practice pages.

## Typography

Body uses Georgia, Times New Roman, serif; Chinese glyphs use the platform's available fallback. Headings and navigation declare Inter followed by system-sans fallbacks. No external font download is required; Inter is not bundled.

The main heading retains the inherited fluid size, with the site's final 22ch maximum width, 1.18 line height and −0.03em tracking. Section headings use 1.4 line height. Inside saved responses, h1 is `clamp(1.55rem,3.5vw,2.2rem)`, h2 is `1.35rem`, and h3 is `1.08rem`. Body line height is 1.68; prose measure is 74ch. Module and chapter entry headings intentionally use `1.5rem`, with `0.9rem` entry actions; these are distinct roles rather than replacements for lesson heading sizes. `.page-breadcrumb` and `.portal-meta` use the 0.82rem sans label role, with breadcrumb line height 1.9. Metadata is mostly 0.82rem; course-card status is 0.78rem. Local KaTeX renders mathematical notation at 1.06em with horizontally scrollable display equations.

## Layout

The centered shell is `min(100% - 2rem, 980px)`. Main content has fluid top padding `clamp(2.5rem, 7vw, 5.5rem)` and 4rem bottom padding. The course homepage and Counting module page use full-width module-entry rows. Each row separates its content from its entry action with a 2rem gap and stacks at 600px with a 1rem gap. The L2.5 chapter’s topic cards form a two-column grid with 1rem gaps; they become one column at 720px. Lesson headers also collapse at 720px; at 600px lesson navigation becomes vertical, home actions wrap and practice-card padding reduces from 1.5rem to 1rem.

A lesson reads vertically: topic navigation, separated source-page explanations, optional source-page disclosure, then practice and one lesson-completion checkbox. Each source-page section uses a top rule, 2rem top margin and 2.5rem top padding. Practice starts with a blue 2px rule and 4rem top margin. Tables, code and equations scroll within their own containers where needed.

Print rules use A4 with 14mm/15mm margins, white paper, 10.5pt prose and simplified chrome. Navigation, completion controls, textareas and home actions are hidden in print.

## Elevation & Depth

The active course cards, practice panels and original-slide disclosures are flat bordered surfaces. Depth comes primarily from paper/surface tones, not floating panels. The header uses `rgba(245, 240, 231, 0.9)` with an 8px backdrop blur. The inherited `--shadow` is `0 14px 34px rgba(35, 44, 50, 0.08)` for legacy card/score classes; do not imply that every current card uses it. The page background includes a very faint blue vertical rule every 28px.

There are no authored animated transitions. Smooth anchor scrolling is disabled for reduced-motion preferences.

## Shapes

Course cards have 14px corners; practice and original-slide panels use 16px. Primary link-buttons, read toggles and attempt textareas use 8px. General answer disclosures use 12px corners. Blue callouts use a strong left rule and rounded right corners. Borders are generally 1px in the line color.

## Components

- **Primary link-button:** blue, 8px corners, 0.65rem × 1rem padding and inherited 42px minimum height; darkens on hover. The active site override applies to `.button`; inherited native buttons still use pill corners.
- **Module / chapter entry row:** full-row link with top and bottom 1px rules, 1.7rem vertical padding, no panel background or rounded corners, and a trailing underlined action. Hover changes the rules and action to accent; global keyboard focus applies. The row stacks below 600px.
- **Portal metadata:** `.portal-meta` presents progress and content counts as muted 0.82rem sans text on the course and module pages and entry rows.
- **Course card:** chapter-level topic entry; full-card link with a bold sans title, serif description and muted progress status. Hover changes border to accent and surface to opaque near-white.
- **Lesson-completion checkbox:** native 1.1rem checkbox with blue accent inside a pale-blue label. Checked state is the browser's native checked control; no custom completion animation is defined.
- **Attempt textarea:** Georgia-led text on paper, 8px corners, 7rem minimum height and vertical resize.
- **Original slide / answer disclosure:** native `details` and `summary`; source image expands to panel width while retaining its aspect ratio. Source disclosure is 16px; general answer disclosure is 12px.
- **Navigation:** the COMP2711 brand always links to the course homepage. Wrapping utility links reflect the current level: course modules, Counting, then chapter directory and source-page index on chapter content. `.page-breadcrumb` adds location context above page headers with a 1.5rem bottom margin; navigation breadcrumbs expose the current page semantically. Previous/next lesson links remain separated by a top rule.
- **Focus:** interactive elements receive a 3px `rgba(40, 95, 130, 0.38)` outline with 3px offset. The skip link appears on focus.

Documentation follows the delivered Read mode. Independent finish review passed; a desktop long-title final-character orphan remains an optional P3 typography refinement, not a blocker or an instruction to change content.

## Do's and Don'ts

- Do preserve the Logic palette and Georgia/system-sans pairing.
- Do keep complete explanations readable within the 74ch text measure.
- Do keep original pages and answers available through native disclosure controls.
- Do preserve keyboard focus, responsive wrapping and local asset paths.
- Don't replace the reading layout with a dashboard or day-based organization.
- Don't require downloaded fonts, remote math rendering or network access.
- Don't rewrite saved explanations as a visual-design change.
