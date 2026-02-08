# Portfolio Content & UI Instructions (Adapted)

This document translates the provided reference paragraph into instructions that fit the current portfolio codebase (React + Vite + Tailwind, with a minimal structure: Navbar + Hero).

## Current Scope (What This Repo Supports Today)

- Single-page layout rendered in [Home.tsx](file:///c:/Users/DELL/Desktop/Marr/src/pages/Home.tsx)
- Sections currently present:
  - Navbar: [Navbar.tsx](file:///c:/Users/DELL/Desktop/Marr/src/components/sections/Navbar.tsx)
  - Hero: [Hero.tsx](file:///c:/Users/DELL/Desktop/Marr/src/components/sections/Hero.tsx)
- Theme handling:
  - CSS variables in [index.css](file:///c:/Users/DELL/Desktop/Marr/src/index.css)
  - Theme state in [ThemeContext.tsx](file:///c:/Users/DELL/Desktop/Marr/src/contexts/ThemeContext.tsx)
- Navigation items live in [navigation.ts](file:///c:/Users/DELL/Desktop/Marr/src/constants/navigation.ts)

Everything below is written so it can be implemented as additional sections within the same page (no multi-page routing required).

## 1) About Section (Personal Narrative)

### Goal

Create a concise story section (300–500 words) that explains education, skills, and values with a warm tone and skimmable structure.

### Naming

Use one of these headings instead of a generic “About Me”:

- “My Story”
- “About Raven”
- “Unveiling Raven”

Pick one and keep it consistent in the navbar label.

### Content Blueprint (Recommended Structure)

Use this structure to keep it readable and aligned with the reference:

- **Headline (1 line)**: who you are and what you’re building toward.
- **Education (2–4 bullets)**:
  - Year-3 medical student
  - Key focus areas (examples from the reference: anatomy, pharmacology)
  - A reason for medicine (example: inspired by Burmese healthcare challenges)
- **Skills (5–7 bullets)** (transferable + real):
  - Medical Research & Analysis
  - Video Editing (for vlogs)
  - Multilingual Communication (Burmese / English)
  - Mindful Leadership (from Buddhist practices)
  - Creative Storytelling
  - Public Speaking or Community Building (optional)
  - Time Management (optional)
- **Personal Touch (2–3 sentences)**:
  - Burmese heritage + Buddhism as perspective and resilience
  - Example phrasing style: balancing med school rigor with daily meditation

### UI / UX Instructions (Fits Current Layout)

Use a two-column layout:

- Left: text (headline + short paragraphs + bullets)
- Right: photo, icons, or a simple timeline visual

Make it skimmable:

- Use short headings (Education / Skills / Values)
- Use bullets for lists
- Bold only key phrases (not whole sentences)

Animations you can implement in this repo:

- Fade-in or slide-up on scroll using `framer-motion` (already installed)
- Keep animations subtle and consistent with Hero motion style

### Timeline (What You Can Do Here)

The reference suggests a “timeline infographic”. In this repo, implement it as one of these lightweight options:

- A vertical list of milestones with a left border (Tailwind border + spacing)
- A simple “stepper” using circles + lines (pure HTML/CSS)

Avoid heavy infographic tooling; keep it component-based and responsive.

### Engineering Notes (Adjusted From “Cannot” → “Can”)

- Use semantic HTML:
  - Wrap the section in `<section id="about">`
  - Use `<h2>` for the section title and `<h3>` for subheadings
- Keep the content easy to update:
  - Store About content as a simple exported object in a TS module (example: `src/constants/about.ts`)
  - Import and render it in the About component

This is more reliable than runtime “fetch” for a small portfolio and works well with Vite.

## 2) “Worlds” Gallery (Multifaceted Life)

### Goal

Create themed “worlds” as an immersive way to explore categories of content (vlogs, culture, mindfulness, and fun).

### Overall Naming

Use one:

- “My Worlds”
- “Explore My Realms”

### Present as Cards (Single Page-Friendly)

Implement as a responsive grid of cards. Each card can open:

- A modal overlay (recommended for a single-page portfolio), or
- An expanded “details” area below the grid (accordion-like)

This repo can do both without adding a router.

### Theme Renames (Ethical + Clear)

Use these names to avoid implying professional qualification before it’s true:

- “As a Doctor” → “My Medical Journey” or “Healing Horizons”
- “As a Burmese Girl” → “Burmese Roots” or “Heritage Heartbeat”
- “As a Buddhist” → “Mindful Path” or “Zen Reflections”
- “Random” → “Wild Whims” or “Unexpected Adventures”

### Content Per World (What to Include)

Medical world:

- Med school photos/videos (lab sessions, study vlogs)
- Student-life tips
- Add a visible disclaimer line for any health talk:
  - “Not medical advice — sharing my learnings as a student.”

Burmese roots:

- Festivals (Thingyan), food, travel photos
- Language lessons (short clips or text snippets)
- How culture influences your interests (e.g., tropical medicine focus)

Mindful path:

- Meditation routine, temple visits
- Applying Buddhist principles to stress management
- Quotes + personal reflection (keep short, avoid preachy tone)

Wild whims:

- Hobbies, experiments, behind-the-scenes vlog creation
- “Day in the life” posts, collaborations

### Extra Galleries (Optional, Still Single Page)

If you want more completeness (as suggested), add these as additional “world” cards or sub-sections:

- “Vlog Vault” / “Story Streams” (video-first)
- “Achievements & Milestones” / “Victory Vibes”
- “Community Corner” / “Connect & Converse”

Adjusted to what is realistic for this repo right now:

- “Community Corner” can start as a simple “Contact” CTA (email/social links) instead of a forum/comments system.

### UI / UX Tips (Works With Tailwind)

- Use CSS Grid (Tailwind grid utilities) for a masonry-like feel:
  - Use a normal grid first; simulate masonry by varied card heights
- Add hover effects:
  - Slight scale
  - Reveal teaser text
- Accessibility:
  - Always provide meaningful `alt` for images
  - Ensure keyboard focus styles are visible

### Engineering Notes (Adjusted From “Cannot” → “Can”)

- Layout: Tailwind CSS Grid is already available; use it.
- Popups:
  - Avoid adding a new lightbox dependency initially.
  - Use a simple modal overlay component (div overlay + focus management) or a native `<dialog>`.
- Media performance:
  - Images: use `loading="lazy"`
  - Videos/embeds: lazy-render with Intersection Observer (simple hook) when the card/modal opens

## 3) How to Integrate With the Current Page

### Add New Sections

- Create new section components next to Hero/Navbar (same folder pattern):
  - `src/components/sections/About.tsx`
  - `src/components/sections/Worlds.tsx`
- Render them in [Home.tsx](file:///c:/Users/DELL/Desktop/Marr/src/pages/Home.tsx) under Hero.
- Add matching navbar anchors by updating [navigation.ts](file:///c:/Users/DELL/Desktop/Marr/src/constants/navigation.ts):
  - `#about`
  - `#worlds`

### Keep the Look Consistent

- Use the existing theme tokens already wired into Tailwind:
  - `bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`
- Use the pink palette utilities where direct palette color is desired:
  - `pink-50` … `pink-900`

## 4) Tone, Accuracy, and Ethics

- Don’t present yourself as a licensed doctor; use “medical student” language consistently.
- Include a short disclaimer wherever health guidance appears.
- Keep the “About” narrative short and specific; the goal is clarity, not completeness.

