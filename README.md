# 25eight home — theme component

Implements the approved interface direction (artifact "25eight Community —
interface direction", Aug 2026) with Sam's two changes: **point-up hexagons**
and the **real 25eight marks**. Installs on top of the base `25eight` theme.

What it adds: the navy "25eight ecosystem" strip (Dashboard · Community ·
Website · Snapshot), a navy hero with faint hex field and "Ask a question" on
the home page, hex-badged domain cards (styling the native category boxes),
the CEO Circle members-only teaser, the Business Brain pipeline note, and the
navy site footer. Home-page sections appear only on the categories page.

## Install

1. Install the base theme first (`../25eight-theme.zip`), set as default.
2. Build this component: `./build.sh` → `25eight-home.zip`.
3. Admin → Customize → Themes → Install → From your device → the zip.
   It installs as a **component** — add it to the 25eight theme.
4. Site settings:
   - `desktop_category_page_style` → **categories boxes** (renders the six
     domain cards).
   - `top_menu` → put `categories` first (makes the home page the categories
     page, where the hero and cards live).

## The six domain categories (slugs are a sync contract)

Create these categories with these exact slugs and colours. The hex badge
colour keys off the slug; a renamed slug loses its colour and falls back to
navy.

| Category | Slug | Colour | Suggested description (from the mockup) |
| :-- | :-- | :-- | :-- |
| Human | `human` | `DD1A6D` | Confidence, identity and the inner work of leading yourself. |
| Leadership | `leadership` | `762C82` | Building a team that carries the business without you. |
| Business | `business` | `091C3B` | Margins, offers and the numbers that keep it healthy. |
| Community | `community` | `FFA6DE` | Finding customers and being known for the right thing. |
| Capacity | `capacity` | `FA8111` | Freeing hours through systems, not sheer effort. |
| Digital & AI | `digital-ai` | `5FE6FF` | Practical AI and tools that give you leverage. |

Also: **CEO Circle** with slug `ceo-circle`, security restricted to the
`ceo-circle` group — the teaser's "Enter the Circle" button links to
`/c/ceo-circle`.

## Ask-a-question routing (component settings)

The hero's "Ask a question" button pre-selects the composer's category by
the member's groups. `ask_button_routes` maps `group name,category slug`
per row, first match wins; `ask_button_fallback` (default `general`) covers
everyone else. Defaults route `ceo-circle` → the CEO Circle category and
`program-nlgp` → `next-level-growth`. Keep each route pointed at a category
its group can create topics in, and fix the slugs in the component settings
if the real categories differ — the member can still change the category in
the composer, and an unknown slug simply opens a plain composer.

## Deliberately deferred

- **Watch & read strip** (featured video + news cards): needs a content
  source (a `news` category or the resource library) — build once real
  content exists.
- **"Saved to Business Brain" badges** on answered threads: needs the
  Business Brain pipeline (spec v2) — a later phase.
- Member counts / open-question stats in the hero: needs a small JS fetch;
  add once the community has numbers worth showing.
