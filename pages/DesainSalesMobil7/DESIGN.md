---
name: Personal Consultant Aesthetic
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#444653'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#4c2e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b4200'
  on-tertiary-container: '#ffa929'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
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
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
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
  section-padding: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is centered around the persona of a **dedicated personal consultant** rather than a faceless dealership. The brand personality is authoritative yet highly accessible, prioritizing transparency and one-on-one relationships. 

The visual style follows a **Modern Corporate** approach softened by **Minimalist** layouts. It avoids the cluttered "inventory-first" look of marketplaces, opting instead for a "service-first" experience. Use high-quality photography of a single professional and clear, direct communication in Indonesian using "Saya" to establish immediate rapport and accountability.

**Emotional Response:**
- **Trust:** "I am buying from a person, not a corporation."
- **Clarity:** "The process is simple and the consultant is reachable."
- **Efficiency:** "No red tape; direct communication."

## Colors

The palette is strictly Light Mode to maintain a clean, "open-book" feeling.
- **Primary (Royal Blue):** Used for primary branding, headings, and key UI elements to establish professional authority.
- **Secondary (WhatsApp Emerald):** Reserved strictly for direct communication triggers (WhatsApp CTA), leveraging the familiar "safe" color for Indonesian users.
- **Tertiary (Amber):** Used sparingly for "Special Offers" or "Sold" badges to create contrast without appearing aggressive.
- **Neutrals (Slate):** Used for body text and borders to maintain a soft, sophisticated contrast rather than harsh blacks.

## Typography

This design system utilizes a dual-font strategy. **Plus Jakarta Sans** is used for headlines to provide a friendly, modern, and slightly rounded character that feels approachable. **Inter** is used for all body text and interface elements to ensure maximum legibility and a systematic, professional feel.

All copy must be in Indonesian. Use active voice and personal pronouns.
- *Instead of:* "Mobil kami dijamin berkualitas."
- *Use:* "Saya menjamin setiap unit yang saya tawarkan memiliki kualitas terbaik."

## Layout & Spacing

The layout uses a **Fixed Grid** model to keep content centered and readable, mimicking a personal portfolio. 
- **Desktop:** 12-column grid with a 1200px max-width.
- **Mobile:** Single column with 20px side margins.

Avoid dense grids of cars. Instead, use wide horizontal sections or large cards to give each vehicle or service "breathing room." Use generous `section-padding` (80px+) to separate the "About Me," "Inventory," and "Testimonials" sections, reinforcing a calm, unhurried sales experience.

## Elevation & Depth

To maintain the "Personal Sales" vibe, this design system avoids heavy shadows that feel "app-like." Instead, it uses **Tonal Layers** and **Soft Ambient Shadows**.

- **Level 1 (Base):** White (#FFFFFF).
- **Level 2 (Cards/Inputs):** Faint Slate borders (1px, 10% opacity) with a very soft, large-radius shadow (Blur: 20px, Opacity: 4%) to make elements feel like they are resting gently on the surface.
- **Level 3 (Modals/Popovers):** Medium diffused shadows to indicate focus.

Interaction depth is achieved through subtle background color shifts (e.g., a button darkening slightly on hover) rather than physical lifting.

## Shapes

The shape language is **Rounded** (0.5rem base), creating a friendly and modern aesthetic that removes the "sharp edge" of traditional high-pressure sales. 

- **Buttons:** 0.5rem (Rounded) for a standard professional look.
- **Feature Cards:** 1rem (Rounded-lg) to frame car photography softly.
- **Input Fields:** 0.5rem to match buttons.
- **Avatars:** Always circular to emphasize the "Personal" aspect of the consultant.

## Components

### Buttons
- **Primary:** Solid Blue (#1E40AF) with white text. High emphasis.
- **Secondary/WhatsApp:** Solid Emerald (#10B981) with a WhatsApp icon. This is the "Hero" action.
- **Tertiary:** Ghost style with primary-color text and a subtle border.

### Cards (Vehicle & Testimonial)
Cards should not look like marketplace listings. Vehicle cards should feature a single, high-quality image, a clear title (Year + Model), and a "Tanya Saya" (Ask Me) button directly on the card. Testimonial cards must feature a small photo of the client to build social proof.

### Input Fields
Use "Soft" styling. Labels should be placed above the field in `label-md` typography. Use placeholder text that feels conversational (e.g., "Nama Lengkap Anda").

### Contact Floating Action
A persistent, circular WhatsApp button should remain in the bottom-right corner of the mobile view, providing a constant direct line to the consultant.

### Personal Badge
A small UI component featuring the consultant's photo and the text "Konsultan Pribadi Anda" (Your Personal Consultant) should appear near any price or call-to-action to remind the user of the human element.