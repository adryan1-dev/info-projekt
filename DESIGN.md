---
name: Info Projekt
description: Night field, city tape, and a paper deck that opens on 700 Mega.
colors:
  night: "#12100e"
  paper: "#f6f1ea"
  white: "#fffaf5"
  ink: "#1c1714"
  hero-ink: "#f7f4f2"
  muted: "#6b635c"
  line: "#e6dfd6"
  red: "#e10600"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.35rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  speed:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 7vw, 2.8rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 6vw, 2.35rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  inner: "8px"
  card: "14px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "40px"
  gutter: "1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.inner}"
    padding: "11px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "color-mix(in srgb, #e10600 86%, #12100e)"
    textColor: "{colors.white}"
    rounded: "{rounded.inner}"
    padding: "11px 16px"
    height: "44px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.inner}"
    padding: "11px 16px"
    height: "44px"
  button-quiet-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.inner}"
    padding: "11px 16px"
    height: "44px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.hero-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
    height: "44px"
  chip-pressed:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
    height: "44px"
  card-plan:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px 16px 16px"
  card-plan-featured:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px 16px 16px"
    width: "100%"
  place:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
    height: "40px"
  place-on:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
    height: "40px"
---

# Design System: Info Projekt

## Overview

**Creative North Star: "Fita e Deck"**

The home is a night mast and a paper page. The mast is an opaque field of night with no photograph: sticky bar, the headline *Planos em {cidade}*, a pill tape of cities, and a deck that opens on the 700 Mega card. Below the mast the page is warm paper. Cream cards sit on that paper. The visitor confirms a city, reads 700 Mega and the price in ink, and touches Assinar on the same card.

This is a regional fiber seller, not a national telecom grid. Density is mobile-first and linear: one featured plan at full width, the other three in a snapped row with a peek, or three columns from 760px. Type is Manrope only, heavy at 800 for the shout, 500 for the reading. Red is a light, not a wash.

**Key Characteristics:**
- Opaque night mast (`#12100e`) with no hero photograph
- Manrope 800 for headlines and speed; city name in red
- City selector as a pill tape, not a dropdown or a map
- Paper deck that opens on 700 Mega; the other three plans are the rest of the deck
- City change is a crease: clip on the city word and on the price line
- Filled red only for the primary ask; price always in ink

## Colors

A warm night-and-paper field with one signal red. Neutrals carry the page; red lights a choice.

### Primary
- **Signal Red** (`{colors.red}`): Lights the chosen city in the headline, the pressed tape chip, and the coverage pill. Colors the words 700 Mega on the featured card. Fills the primary Assinar (and the same filled ask on the success card and 404). Also the caret, text selection, and `:focus-visible` ring — chrome, not decoration.

### Neutral
- **Night Field** (`{colors.night}`): Mast, sticky topbar, skip-link focus, and the modal veil mix. The first viewport. No photograph on this field.
- **Paper** (`{colors.paper}`): Body background below the mast; perk row fill inside plan cards.
- **Cream White** (`{colors.white}`): Plan, store, business, and success surfaces. Selection text on red.
- **Ink** (`{colors.ink}`): Body text, quiet Assinar stroke and hover fill, prices, phones, legal links.
- **Hero Ink** (`{colors.hero-ink}`): Type on night — headline, tape chips at rest, ghost links.
- **Muted** (`{colors.muted}`): Secondary copy, `/mês`, addresses, footer and legal body.
- **Line** (`{colors.line}`): Footer and legal rules; map iframe placeholder.

### Named Rules
**The Lit-City Rule.** Red lights the chosen city, the 700 Mega speed line, and the filled Assinar. It is not a card fill, not a page wash, not a speed color on 100, 300, or 1 Giga.

**The Night Field Rule.** The first viewport is opaque night. A photograph may sit in the business aside on paper. It does not sit in the mast.

## Typography

**Display Font:** Manrope (with system-ui, sans-serif)
**Body Font:** Manrope (with system-ui, sans-serif)

**Character:** One family, four weights. 800 is the shout (headline, city, speed). 700 is the price and the filled ask. 600 is the tape, nav, and labels. 500 is the reading line. Optical sizing is on; letter-spacing tightens only on the 800 sizes.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 8vw, 4.2rem)`, line-height 1.05, letter-spacing `-0.03em`): Home H1 *Planos em {cidade}*. The city word is a red inline span.
- **Headline** (800, `clamp(1.7rem, 3.4vw, 2.35rem)`, line-height 1.1, letter-spacing `-0.03em`): Section titles on paper — cobertura, lojas, empresa — and the success title.
- **Speed** (800, `clamp(2.15rem, 7vw, 2.8rem)` on the featured card, `clamp(1.85rem, 6vw, 2.35rem)` on the rest): Plan megabit line. Featured speed is red; the others stay ink.
- **Title** (800, `1.35rem`, letter-spacing `-0.02em`): Store city name; legal H2 at `1.15rem` 800. Featured price value at `1.55rem` 700; rest price value at `1.35rem` 700, tabular-nums.
- **Body** (500, 16px, line-height 1.55): Page default. Hero sub at 16px (15px under 760px), max-width 54ch, hero-ink at 88% on night. Leads at muted, max-width 52ch.
- **Label** (600, 13px): Tape chips, desktop nav, ghost “Área do cliente”, perk names. Filled ask is 700 14px/1.2. Coverage pills and map link 14px 600. Period `/mês` is 0.85rem 600 muted.

### Named Rules
**The Manrope Rule.** Manrope only. No second family, no system display face, no italic as a voice.

**The Ink Price Rule.** Price is ink on cream, even on the 700 card. Red is the speed word and the filled button, not the reais.

## Layout

A centered rail (`min(76rem, 100% - 2 × gutter)`). Gutter is `1.25rem`, then `2rem` from 760px. The mast is night and contains the sticky topbar plus the hero. The page below is paper with 40px section padding and 40px before the business block and footer.

On small screens the city tape is sticky under the bar (`top: 68px`, `60px` under 760px), horizontal, with an 88% night mix behind the chips. “Ver todas” wraps the tape. The featured plan is full rail width. The other three sit in a mandatory-x snap row, each `min(78%, 18.5rem)` wide, with a right-edge mask so the next card peeks.

From 760px the topbar becomes three columns (brand, nav, actions), the tape is static and wrapping with no night wash, the rest of the deck is three equal columns, and the featured card becomes a two-column grid: speed and price on the left, extras on the right, Assinar spanning and capped at `22rem`. Business becomes `0.9fr / 1.1fr`. Stores become a radio list (`minmax(16rem, 0.42fr)`) beside the map.

Legal and 404 reuse the rail on paper. No second grid system.

### Named Rules
**The Tape-and-Deck Rule.** Cities are a pill tape. Plans open on 700 Mega at full width; the other three are a peeked snap or three columns. Never a grid of four equal telecom cards.

## Elevation & Depth

Depth is tonal first: night against paper against cream. Shadows are warm and soft, used to seat cream cards, not to float them off a white page. The featured plan does not get a louder shadow than the rest. Hover lifts only the non-featured plan (`translateY(-2px)`). The active store uses the paper shadow plus a `1.5px` ink outline. The success veil is night at 72% opacity.

### Shadow Vocabulary
- **Night seat** (`box-shadow: 0 14px 32px rgb(18 16 14 / 0.28)`): Plan cards and the success card.
- **Paper seat** (`box-shadow: 0 10px 24px rgb(28 23 20 / 0.08)`): Business block; selected store.

### Named Rules
**The Soft Seat Rule.** Shadows are diffuse night or ink at low opacity. No hard offset drop shadow.

## Shapes

Paper surfaces (plan, store, business, success, map frame) use a 14px corner. Inner controls (filled ask, skip link, perk row) use 8px. The tape and the coverage list are pills (`999px`). The signature motion is not a radius: changing city creases the city word and the price line with `clip-path: inset(0 0 88% 0)` to `inset(0)` over 0.42s (`cubic-bezier(0.22, 1, 0.36, 1)`). Reduced motion drops the crease, the veil, and hover transforms.

### Named Rules
**The Crease Rule.** Swapping the city is a vinco on the same deck: clip the red city word and clip the ink price. Do not fade, slide, or restamp the whole card.

## Components

### Buttons
- **Shape:** Inner radius (8px), min-height 44px, padding 11px 16px, 220ms ease-out.
- **Primary (Assinar filled):** Red on cream-white text, 700 14px/1.2. Hover mixes red 86% with night and lifts 1px. Active scales to 0.98. Used on the 700 card, the success dialog, and 404 “Ver planos”. Full width on plan cards; `min(22rem, 100%)` on the featured card from 760px.
- **Quiet:** Transparent with a `1.5px` inset ink stroke. Hover fills ink and sets type to cream-white. Used on 100 / 300 / 1 Giga Assinar and “Pedir para empresa”.
- **Focus:** 2px red outline, 3px offset, on every control.

### Chips
- **Style:** Pill on night. Transparent fill, hero-ink type, `1px` white at 22% border, 13px 600, opacity 0.58, min-height 44px, padding 10px 14px.
- **State:** Hover (unpressed) raises opacity to 0.92 and border to white at 50%. Pressed is red fill, cream-white type, red border, opacity 1 — the lit city. “Ver todas” / “Menos cidades” is the same pill with a dashed border.

### Cards / Containers
- **Corner Style:** 14px on plan, store, business, success.
- **Background:** Cream white. Perks inside a plan sit on paper rows at the inner radius.
- **Shadow Strategy:** Night seat on plans; paper seat on business and the active store.
- **Border:** None on plans. Active store takes a 1.5px ink outline.
- **Internal Padding:** 18×16×16 on plans (20×16×16 from 760px). Featured from 760px is 26×22×18 with a 32px column gap. Business copy 28×24×32. Success 32×24×28.

### Inputs / Fields
No text fields on the shipped home. City is the tape; store is a radio list.

### Navigation
Sticky opaque night bar, 12px vertical padding, hairline `rgb(247 244 242 / 0.14)` under the bar. White wordmark at 40px height under 760px, 48px default, 56px from 760px. Desktop nav is 13px 600, 22px gaps, 0.62 opacity at rest, full opacity on hover or `aria-current`, with a 2px hero-ink underline on the current section. “Área do cliente” is a ghost link, 13px 600, hero-ink at 0.86 opacity. The bar does not contain Assinar.

### Plan Deck (signature)
The 700 card is `is-featured`: full width, red speed line, ink price, compact extras, filled Assinar on the card. The rest of the deck is three quieter cards with ink speed, ink price, quiet Assinar, and a peeked snap (or three columns). Extras are paper rows: app name at 13px 600, row min-height 36px, inner radius, compact as a wrapping row on the cards.

### Coverage pills
Cream pills on paper, 14px 600, opacity 0.72, min-height 40px. The selected city matches the tape: red fill, cream-white type, opacity 1.

### Store list
Cream blocks at 14px, 16px padding, opacity 0.78 at rest. The selected store is opacity 1, paper seat, ink outline. City name 1.35rem 800; address muted; phone 700 tabular-nums in ink.

### Success dialog
Fixed night veil at 72%. Cream card, night seat, 14px radius. Title 800; body muted. Primary ask closes (“Escolher outro”). Escape and backdrop click dismiss. Prefer-reduced-motion skips the veil fade.

## Do's and Don'ts

### Do:
- **Do** keep the mast as opaque night with type, tape, and paper cards — no hero photograph in that field.
- **Do** set H1 to Manrope 800 and paint only the city word red; crease that word and the price when the city changes.
- **Do** open the deck on 700 Mega at full width, price in ink, filled Assinar on the same card; keep the other three as a peeked snap or three columns from 760px.
- **Do** use cream cards at 14px and pills at 999px for cities.
- **Do** use filled red for the primary ask and quiet ink for the rest of the deck.

### Don't:
- **Don't** lay out four equal plan cards.
- **Don't** put red on a card background, on 100 / 300 / 1 Giga speed lines, or as a page wash.
- **Don't** add a second typeface or a system display face.
- **Don't** put a photograph, fiber overlay, or mascot in the night mast.
- **Don't** fade or restamp the whole plan card when the city changes; crease the city word and the price.
