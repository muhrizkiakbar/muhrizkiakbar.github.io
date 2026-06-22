---
name: PrimeDrive Professional
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0daee'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff3ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dfe9fc'
  surface-container-highest: '#d9e3f7'
  on-surface: '#121c2a'
  on-surface-variant: '#434655'
  inverse-surface: '#273140'
  inverse-on-surface: '#ebf1ff'
  outline: '#747685'
  outline-variant: '#c4c5d7'
  surface-tint: '#2f54cb'
  primary: '#00247d'
  on-primary: '#ffffff'
  primary-container: '#0037b0'
  on-primary-container: '#9baeff'
  inverse-primary: '#b7c4ff'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#521f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#753000'
  on-tertiary-container: '#fd9963'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#063ab2'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783201'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f7'
  brand-cta: '#FF8A00'
  primary-fixed-variant: '#0039b5'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  price-display:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: '1'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 80px
  section-gap-mobile: 48px
  stack-lg: 32px
  stack-md: 16px
  stack-sm: 8px
  gutter: 24px
  container-max: 1200px
---

## Brand & Style
The brand identity is rooted in **Corporate Modernism** with a high-conversion focus. It balances the reliability of an institutional dealership with the approachability of a personal sales consultant. The visual language is "High-Key" and airy, prioritizing clarity, trust, and premium service.

The design style utilizes **Glassmorphism** for secondary elements and **Corporate Flat** for structural components. It employs a "Showroom Aesthetic"—utilizing bright, clean surfaces, subtle depth through layered containers, and energetic orange accents to drive user action. The emotional response should be one of professional confidence and effortless luxury.

## Colors
The palette is dominated by **Deep Professional Blue** (#0037b0) for authority and **Safety Orange** (#FF8A00) for high-priority calls to action. 

The background utilizes a "Cool White" (#f8f9ff) rather than pure white to reduce glare and provide a modern, tech-forward feel. Neutral tones are used strictly for hierarchy: deep navy for headings to ensure maximum legibility and soft slate-greys for secondary metadata. The "Fidelity" variant approach ensures that container backgrounds (like `surface-container-low`) maintain a consistent blue tint to reinforce brand cohesion across the entire page depth.

## Typography
The system uses a pairing of **Montserrat** for display roles and **Inter** for functional roles. 

Montserrat provides a geometric, bold, and urban character suitable for marketing headlines and section titles. Inter is used for body copy and data-rich elements (like prices and specifications) to provide maximum utility and a neutral, systematic feel. Note the negative letter-spacing on `display-lg` to create a tighter, more "editorial" impact. Mobile scaling is critical; headlines drop significantly in size to maintain composition on narrow viewports.

## Layout & Spacing
The layout follows a **Fixed Grid** approach for desktop, centering content within a 1200px container. On mobile, it transitions to a fluid model with consistent 24px side gutters.

Vertical rhythm is governed by specific "stack" tokens. `stack-lg` (32px) separates major content blocks within a section, while `stack-md` (16px) is the standard for related elements like a label and its input. Section gaps are generous (80px) to provide breathable white space, reinforcing the "premium" brand positioning.

## Elevation & Depth
Depth is created through a combination of **Ambient Shadows** and **Glassmorphism**:

1.  **Standard Cards:** Use a soft, multi-layered shadow (`0 10px 15px -3px rgba(0, 0, 0, 0.05)`) to lift items slightly off the surface.
2.  **Interactive Cards:** On hover, depth increases (`shadow-xl`) and the element scales (+1%) to provide tactile feedback.
3.  **Glass Layers:** Semi-transparent white backgrounds (`rgba(255, 255, 255, 0.8)`) with a 12px backdrop blur are used for feature callouts and secondary containers to maintain a sense of lightness.
4.  **Floating Elements:** Global navigation and floating action buttons (FAB) use `shadow-sm` and `shadow-2xl` respectively to denote their priority in the Z-index stack.

## Shapes
The shape language is **Rounded**, favoring 0.5rem (8px) for standard components and 0.75rem (12px) to 1rem (16px) for larger containers like cards and promo banners. 

Buttons and input fields should utilize `rounded-xl` to feel modern and friendly. Hero images and large promotional "bento" boxes use even larger radii (up to 24px) to soften the overall interface. Interactive tags and filter chips use a `full` (pill-shaped) radius.

## Components
-   **Buttons:** The primary action button is the "Brand CTA," featuring an orange background, white text, and a constant "pulse" animation to draw the eye. Secondary buttons use a primary-colored border (ghost style).
-   **Cards:** Car cards feature an overflow-hidden top section for images and a padded bottom section for data. They must include a subtle 1px border (`outline-variant`) when placed on very light surfaces to maintain definition.
-   **Input Fields:** Use a 12px padding, 1px grey border, and a 2px blue ring on focus.
-   **Chips/Badges:** Use "Ready Stock" or "Best Seller" badges positioned absolutely in the top-left of cards, using high-contrast fills.
-   **Glass Cards:** Specifically for USP (Unique Selling Point) grids, these use the backdrop-blur effect to separate features without adding visual weight.
-   **Floating Action Button:** A large, circular orange FAB is persistent in the bottom right (desktop) for immediate WhatsApp access.