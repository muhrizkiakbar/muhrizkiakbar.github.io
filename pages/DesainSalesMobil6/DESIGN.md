---
name: Personal Concierge Aesthetic
colors:
  surface: '#f8f9ff'
  surface-dim: '#d1dbec'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dfe9fa'
  surface-container-highest: '#d9e3f4'
  on-surface: '#121c28'
  on-surface-variant: '#41474e'
  inverse-surface: '#27313e'
  inverse-on-surface: '#eaf1ff'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#316289'
  primary: '#074469'
  on-primary: '#ffffff'
  primary-container: '#2a5c82'
  on-primary-container: '#a5d4ff'
  inverse-primary: '#9ccbf7'
  secondary: '#576066'
  on-secondary: '#ffffff'
  secondary-container: '#dbe4eb'
  on-secondary-container: '#5d666c'
  tertiary: '#6f2d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#933f00'
  on-tertiary-container: '#ffc1a2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#9ccbf7'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#124a6f'
  secondary-fixed: '#dbe4eb'
  secondary-fixed-dim: '#bfc8ce'
  on-secondary-fixed: '#141d22'
  on-secondary-fixed-variant: '#3f484e'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f8f9ff'
  on-background: '#121c28'
  surface-variant: '#d9e3f4'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
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
  base: 8px
  container-max: 1200px
  gutter: 24px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
---

## Brand & Style

The design system is built to feel like a conversation with a trusted friend rather than a transaction at a dealership. It prioritizes a **personal, approachable, and high-touch service** narrative. The style is a blend of **Minimalism** and **Soft Modernism**, moving away from the cold, industrial grit often associated with automotive sales.

The visual language emphasizes transparency and accessibility. By using generous whitespace, soft-focus photography of "Rian" and happy clients, and avoiding aggressive "Sales" banners, the UI establishes an immediate sense of psychological safety. The goal is to evoke a "concierge" experience—curated, thoughtful, and human-centric.

## Colors

The palette revolves around "Warm Blues" to project stability and trust without the sterile feel of corporate banking. 

- **Primary:** A deep, muted ocean blue used for key actions and brand headers. It is authoritative yet calm.
- **Secondary:** A soft "Air Blue" used for background sectioning and large surface areas to keep the interface light and airy.
- **Tertiary:** A sun-kissed orange used sparingly for "Human Touch" moments, such as WhatsApp icons, rating stars, or personal badges.
- **Neutral:** Slate greys are used for body text to maintain high legibility while appearing softer than pure black.

## Typography

This design system utilizes **Plus Jakarta Sans** across all levels. Its slightly rounded terminals and open apertures provide an optimistic, friendly character that perfectly balances modern professionalism with a "human" touch.

Headlines should use tighter letter-spacing to feel impactful but remain in sentence case to avoid looking like a loud advertisement. Body text is set with generous line height to ensure a relaxed reading experience, mimicking the pace of a friendly conversation.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for desktop (12 columns) to maintain a centered, editorial feel, transitioning to a fluid single-column stack on mobile. 

Spacing is governed by an 8px linear scale. To emphasize the "Non-Dealership" feel, vertical padding between sections is intentionally large (80px+), allowing each car listing or testimonial to breathe. Elements should never feel "packed"; white space is used as a premium design asset to denote quality service.

## Elevation & Depth

To maintain a friendly and light atmosphere, this design system avoids heavy drop shadows. Depth is achieved through **Tonal Layers** and **Ambient Glows**.

- **Surfaces:** Use the secondary blue color for background containers to create "soft" depth.
- **Interactive Depth:** Cards and buttons use a very subtle, diffused shadow (15% opacity of the primary blue) only when hovered, giving a tactile "lift" that suggests responsiveness.
- **Outlines:** Use 1px borders in a slightly darker shade of the background color rather than harsh grey lines to define boundaries.

## Shapes

The shape language is consistently **Rounded**. Sharp corners are avoided as they appear aggressive or industrial. A 0.5rem (8px) base radius is applied to standard cards and inputs, while buttons and featured "Contact Rian" badges may use the `rounded-xl` (1.5rem) setting to feel even more inviting and "touchable."

## Components

- **Buttons:** Primary buttons are fully rounded (pill-shaped) using the Primary Blue. Use "Human" labels like "Chat with Rian" instead of "Submit."
- **Cards (Vehicle/Testimonial):** Cards use a white background against the secondary blue page background. They feature a 1px soft border and the standard `rounded-lg` corner.
- **Input Fields:** Search and contact fields use a soft-grey background with no initial border, gaining a Primary Blue 2px stroke only on focus.
- **Chips:** Used for car features (e.g., "Low Mileage," "One Owner"). These should have light blue backgrounds with dark blue text, using high roundedness.
- **Personal Badge:** A recurring component featuring Rian's photo, a "Verified" icon, and a quick-action WhatsApp button. This should be pinned or prominently placed to reinforce the personal connection.
- **Testimonial Sliders:** Emphasis on the client's story rather than just a star rating. Use a larger font size for the quote text.