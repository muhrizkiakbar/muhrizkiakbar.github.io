---
name: Andi's Personal Consultant Narrative
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#434653'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#1d59c1'
  primary: '#003c90'
  on-primary: '#ffffff'
  primary-container: '#0f52ba'
  on-primary-container: '#bcceff'
  inverse-primary: '#b0c6ff'
  secondary: '#006d37'
  on-secondary: '#ffffff'
  secondary-container: '#6bfe9c'
  on-secondary-container: '#00743a'
  tertiary: '#3d4143'
  on-tertiary: '#ffffff'
  tertiary-container: '#55585a'
  on-tertiary-container: '#ccced0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#00419c'
  secondary-fixed: '#6bfe9c'
  secondary-fixed-dim: '#4ae183'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005228'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  button-text:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

The design system is built around the persona of a trusted advisor rather than a traditional car salesperson. The brand personality is approachable, transparent, and expert, moving away from the high-pressure environment of a dealership and toward a personalized consultancy. 

The aesthetic is **Modern Minimalism** with a **Tactile** twist. It uses generous whitespace and a "soft-UI" approach to evoke comfort and reliability. By utilizing a "Light Mode ONLY" constraint, the design system ensures a clean, optimistic, and airy feel that mimics a high-end lifestyle magazine or a personal portfolio. The emotional response should be one of relief and confidence—the user feels they have found a partner in their car-buying journey rather than a vendor.

## Colors

This design system utilizes a palette rooted in "Trust Blue" and "Growth Green." 

- **Primary (Sapphire Blue):** Used for key actions and brand identity. It communicates authority and dependability.
- **Secondary (Emerald Green):** Reserved specifically for WhatsApp integrations and success states, symbolizing the "go" signal and friendly communication.
- **Tertiary (Cloud White):** A slightly cool-tinted off-white used for background layering to reduce eye strain compared to pure hex white.
- **Neutral (Slate):** A deep, de-saturated blue-gray used for typography to maintain softness while ensuring high legibility.

Avoid pure black; all "dark" elements should be derived from the Slate neutral to keep the interface feeling premium and approachable.

## Typography

The typography strategy balances the friendly, rounded nature of **Plus Jakarta Sans** for headings with the functional, grounded clarity of **Work Sans** for body copy.

- **Headlines:** Should use tight letter-spacing and semi-bold weights to appear modern and confident.
- **Body Copy:** Set with generous line-height to ensure the "consultant" narrative is easy to read and digest.
- **Micro-copy:** Small labels should be in uppercase with slight tracking to provide a professional, organized structure to the information.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to create a centered, intentional feel reminiscent of a personal portfolio.

- **Grid:** A 12-column system with a 24px gutter. Content should primarily occupy the center 8 columns for long-form text to maintain readability.
- **Rhythm:** An 8px linear scale is used for all padding and margins. 
- **Sectioning:** Large vertical gaps (120px on desktop) are used between sections to allow the design to "breathe," reinforcing the premium, non-cluttered consultant vibe.
- **Mobile:** Transition to a single-column fluid layout with 20px side margins. Large display type should scale down significantly to avoid awkward breaks.

## Elevation & Depth

To maintain a clean and approachable "Light Mode" aesthetic, the design system avoids heavy shadows in favor of **Tonal Layering** and **Soft Ambient Occlusion**.

- **Surface Levels:** The base background is the Tertiary color (#F8FAFC). Foreground cards use pure White (#FFFFFF).
- **Shadows:** Use a single, ultra-soft shadow for floating elements (like the WhatsApp CTA). 
  - *Style:* `0px 10px 30px rgba(15, 82, 186, 0.08)` (a subtle blue-tinted shadow).
- **Borders:** Use thin, low-contrast 1px borders (#E2E8F0) to define sections without creating visual noise. This reinforces the "clean and modern" requirement.

## Shapes

The shape language is "Rounded," avoiding sharp clinical corners to maintain a friendly and welcoming tone.

- **Standard Components:** Use a 0.5rem (8px) radius for input fields and small cards.
- **Large Sections/Feature Cards:** Use a 1.5rem (24px) radius to create a soft, containerized look.
- **Interactive Elements:** Buttons should be slightly more rounded than containers to invite interaction, but not fully pill-shaped, keeping them looking "professional yet warm."

## Components

- **Primary Button:** High-contrast Sapphire Blue with white text. Large padding (16px 32px) and subtle 8px rounded corners.
- **WhatsApp Floating Action Button (FAB):** A circular Emerald Green button fixed to the bottom right, featuring the WhatsApp icon. This is the primary conversion point.
- **Consultant Cards:** White background, 24px corner radius, and a subtle 1px border. These should house "Andi’s Picks" or "Testimonials."
- **Input Fields:** Soft gray backgrounds (#F1F5F9) instead of white boxes to make the forms feel less "standard corporate" and more integrated into the page.
- **Direct Link Chips:** Use small, rounded labels for car categories (e.g., "Family SUV," "City Hatchback") with a light blue tint to help users self-segment quickly.
- **Personal Touchpoint:** A signature component—a "Personal Note" block with a different background tint and a hand-drawn-style divider to emphasize Andi's personal involvement.