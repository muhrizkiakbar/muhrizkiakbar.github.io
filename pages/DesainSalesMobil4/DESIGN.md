---
name: Kinetic Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#8c2f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b43f00'
  on-tertiary-container: '#ffded2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#802a00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-x: 32px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for high-value personal transactions, blending the reliability of an established dealership with the agility of a modern tech startup. The brand personality is "Professional-Concierge"—authoritative yet approachable. 

The aesthetic follows a **Modern Corporate** direction with **Minimalist** restraint. It prioritizes clarity through generous whitespace and high-impact photography. To differentiate from cluttered marketplaces, this design system utilizes "Airy Logic": every element is given room to breathe, suggesting a premium, curated experience rather than a volume-based auction site. The emotional response is one of confidence, transparency, and momentum.

## Colors

The palette is strictly Light Mode to maintain a sense of cleanliness and "new car" freshness.

- **Primary (Electric Blue):** Used for primary actions, active states, and brand-building accents. It signals innovation and trust.
- **Secondary (Sophisticated Navy):** Applied to headings and deep structural elements to provide a grounded, premium weight.
- **Tertiary (Vibrant Orange):** Reserved exclusively for high-conversion Call-to-Action (CTA) elements. Its high contrast against the blue and white ensures the "Path to Purchase" is never missed.
- **Neutral:** A range of cool grays (Slate) provides soft containment for data and specifications without adding visual noise.

## Typography

This design system uses a strategic pairing of **Montserrat** for impact and **Inter** for utility. 

Headlines utilize Montserrat’s geometric construction to evoke a sense of automotive precision and modernism. Letter spacing is slightly tightened on large display text to create a cohesive visual block. 

Body copy leverages Inter for its exceptional legibility at all sizes, particularly when displaying technical car specifications. We use a "Label-Bold" style for category tags (e.g., "MILEAGE", "ENGINE TYPE") to create a clear scan-path for potential buyers.

## Layout & Spacing

The design system employs a **12-column Fixed Grid** for desktop to ensure a premium, editorial feel that doesn't over-stretch on ultra-wide monitors. 

- **Vertical Rhythm:** Sections are separated by large 120px gaps to signal a transition in the narrative (e.g., from "Gallery" to "Specifications").
- **Component Padding:** Elements like cards and input fields use a spacious internal padding (24px - 32px) to maintain the minimalist philosophy.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to 1 column. Margins are reduced to 20px, and section gaps are tightened to 64px to maintain momentum on shorter viewports.

## Elevation & Depth

To maintain a clean, high-conversion look, the design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Soft Ambient Shadows**.

- **Level 1 (Surface):** Pure White (#FFFFFF).
- **Level 2 (Containers/Cards):** Off-white (#F8FAFC) or White with a very subtle 1px border (#E2E8F0).
- **Floating Elements:** Primary CTAs or modals use an "Ambient Lift"—a wide-spread, low-opacity (8%) shadow tinted with the Secondary Navy color to prevent a "dirty" gray look.
- **Depth via Imagery:** Photography should be shot with a shallow depth of field (bokeh) to naturally create focus and perceived depth without UI gimmicks.

## Shapes

The shape language is "Refined Geometric." Elements use a **0.5rem (8px)** base radius. This strikes a balance between the "sharp" precision of high-end machinery and the "soft" approachability required for a personal sales hub. 

Large containers like Image Galleries and Feature Cards use the `rounded-lg` (16px) setting to create a friendly, modern frame for high-quality photography. Buttons remain slightly more "squared" at 8px to maintain a professional, high-intent character.

## Components

- **Buttons:** 
    - *Primary:* Electric Blue, white text, bold weight.
    - *Conversion (CTA):* Vibrant Orange, white text. Must include a subtle "hover-lift" animation.
    - *Secondary:* Ghost style with 1px Navy border.
- **Feature Cards:** Used for highlighting car specs. Minimalist design, high-contrast typography, no heavy borders. Icons should be thin-stroke (2px) in Electric Blue.
- **Input Fields:** Large, 56px height for touch-readiness. Light gray background that shifts to white with a 2px Electric Blue border on focus.
- **Status Chips:** Small, pill-shaped tags (e.g., "JUST LISTED", "CERTIFIED") using low-opacity primary colors with bold text.
- **Image Gallery:** A main hero carousel with smaller thumbnails below. Thumbnails should have a high-contrast active state (2px Electric Blue border).
- **Specification List:** A two-column layout on desktop using subtle horizontal dividers (Hairlines) in light gray to separate technical data.