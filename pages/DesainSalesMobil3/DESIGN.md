---
name: Velocity Auto Premium
colors:
  surface: '#fbf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fbf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#006d2f'
  on-secondary: '#ffffff'
  secondary-container: '#5dfd8a'
  on-secondary-container: '#007232'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#66ff8e'
  secondary-fixed-dim: '#3de273'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005322'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#fbf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The brand personality is authoritative yet approachable, positioning itself as a high-end personal consultant for automotive transactions. The target audience includes affluent professionals and car enthusiasts in Indonesia who value efficiency, transparency, and a premium service experience.

The design style is **Modern Corporate / Minimalist**, characterized by a vast amount of whitespace to let high-quality automotive photography breathe. The UI feels "expensive" through restraint, utilizing a limited color palette and precise alignment rather than decorative elements. The emotional response should be one of immediate trust and clarity, removing the friction and "noise" typically associated with the used car market.

## Colors
The palette is rooted in a "Light Mode ONLY" philosophy to maintain a clean, clinical, and high-end feel. 

- **Primary (Professional Navy):** Used for navigation, headings, and primary action buttons to establish authority.
- **Secondary (WhatsApp Green):** Reserved exclusively for high-intent conversion points (e.g., "Hubungi Konsultan"). This creates a "safe zone" for the user to initiate contact.
- **Surface (Soft Gray):** Used to differentiate sections (e.g., testimonials or technical specs) from the main white background without breaking the minimalist flow.
- **Neutral (Slate/Navy):** Text colors use a deep slate rather than pure black to soften the contrast and improve readability.

## Typography
The system uses **Inter** for its systematic, clean, and highly legible characteristics. To achieve the "premium" look requested, generous tracking (letter spacing) is applied to uppercase labels, while headlines use slightly tighter tracking to feel cohesive and impactful.

The hierarchy is strictly maintained to guide the user from the value proposition (Display) to the supporting details (Body). All Indonesian copy should favor shorter, punchy sentences to maintain the clean aesthetic.

## Layout & Spacing
This design system utilizes a **Fixed Grid** approach for desktop (12 columns, 1200px max-width) to ensure car photography is presented with optimal focus. 

- **Section Gaps:** A significant vertical rhythm of 120px on desktop ensures that each "offering" or "car feature" feels distinct and important.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a single column with 20px side margins. 
- **Content Density:** Maintain low density. If a section feels crowded, increase the vertical `stack-lg` spacing between elements.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layers**. Shadows should be almost imperceptible—using a very large blur radius (30px+) and very low opacity (3-5%) with a slight Navy tint (#1E293B) to avoid a "dirty" gray look.

Floating cards (like car listings) should use a subtle 1px border in `#E2E8F0` alongside these ambient shadows to define the edges against the white background. Background blurs are not used here to maintain the "Clean/Professional" requirement.

## Shapes
The design uses **Rounded** (Level 2) geometry. 
- Base components (buttons, input fields) use `0.5rem` (8px).
- Larger containers like Car Cards or Image Wrappers should scale up to `rounded-xl` (1.5rem / 24px) to create a soft, modern, and inviting feel that contrasts against the technical nature of automobiles.
- Buttons never use sharp corners; they are always significantly rounded to feel approachable.

## Components
- **Buttons:** 
  - *Primary:* Navy Blue background, White text. Bold and high-contrast.
  - *Conversion:* WhatsApp Green background with a "WhatsApp" icon prefix. This button is slightly larger than standard buttons.
- **Car Cards:** Features a high-resolution image at the top with `rounded-t-xl`, followed by a clean white area for price (`headline-sm`) and specs (`label-caps`).
- **Input Fields:** Soft Gray (#F8FAFC) background with no border, becoming White with a 1px Navy border on focus.
- **Chips/Badges:** Small, subtle gray backgrounds with `label-caps` text to denote car status (e.g., "TERJUAL", "BARU").
- **Consultant List:** A clean vertical or horizontal list with high-quality circular avatars of the consultants, emphasizing the "Personal" aspect of the service.
- **Stats Counter:** Large, bold Navy numbers with small slate-colored labels to build immediate credibility (e.g., "500+ Unit Terjual").