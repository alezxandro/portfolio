# Design brief

Source: Stitch HTML
Mood: concise, precise, loud. High-impact technical poster layout with oversized typography, sharp architectural lines, monospace metadata, and a striking deep teal accent.

## Style

- Style: Bold, with a Technical touch: monospace dates and metadata.
- Feel: concise, precise, loud.
- Personal detail: a small gymnastics rings badge next to the name.
- Motion: confident and quick: big elements move once, then stay. When the visitor prefers reduced motion, nothing moves.

## Colours

| Token | Light | Dark | Used for |
|---|---|---|---|
| background | #fcf9f2 | #121515 | page background: crisp bone |
| surface | #f6f3ec | #1c2222 | cards, metadata chips, status boxes |
| text | #1c1c18 | #f3f0e9 | headings, body text, sharp borders |
| muted | #5f5e5e | #9c9b98 | headline under the name, dates, metadata labels |
| accent | #006565 | #76d6d5 | links, focus ring, primary buttons, borders |
| on-accent | #ffffff | #002020 | text on an accent button |

## Type

| Role | Font | Size | Weight |
|---|---|---|---|
| headings | "Anton", Impact, "Arial Narrow", sans-serif | name clamp(3rem, 10vw, 6rem), section clamp(2rem, 5vw, 3.5rem), item 1.5rem, in uppercase | 400 |
| body | "Work Sans", system-ui, sans-serif | 1.125rem, line height 1.6 | 400 |
| details | "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace | dates and metadata 0.8125rem, letter-spacing 0.05em | 500 |

## Shapes

| Property | Value |
|---|---|
| Corner radius | Sharp corners (0px) on cards, buttons, badges, and boxes |
| Borders | 2px solid in text or muted border token around cards, sections, and chips |
| Shadows | None: flat, crisp technical structure |

- Corner radius: sharp corners (0px) across cards, boxes, and buttons.
- Borders: 2px solid borders separating sections and enclosing cards.
- Shadows: none: completely flat, high-contrast structural blocks.

## Layout

- Page width: wide container, at most 72rem (max-w-7xl), with 1.5rem space at the sides on phones.
- Section spacing: 4rem to 6rem vertical spacing between sections, with clear 2px dividing rules.
- Cards & Lists: multi-column grids (1 column on mobile, 2 or 3 columns on tablet/desktop) with sharp 2px borders.

## Components

- Links: high-contrast with accent colour (#006565 / #76d6d5), subtle arrow icons (↗) on external links, clear 2px focus ring.
- CV & Experience: grid blocks with monospace dates, prominent role headings, and metadata tags in JetBrains Mono.
- Skills: prominent ticker-style or block banner with bold typography and monospace delimiters.
- Section headings: oversized Anton typography in uppercase accompanied by uppercase monospace label tags.

## Signature

- Move: Reading progress line
- Guide: guides/ui-atoms/scroll-progress-indicator.md
- Where: a sharp deep teal line at the very top of the window that tracks reading progress.

## Sections

1. `bio`: name, headline, location, pitch, status card, and gymnastics rings detail.
2. `cv`: education, work experience milestones, and technical certifications.
3. `events`: DevFest Milano 2026 conference session details.
4. `links`: direct channels to GitHub, LinkedIn, and email.
