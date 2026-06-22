---
name: Premium Velocity
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
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  price-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 20px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
  section-gap: 40px
---

## Brand & Style

This design system embodies a **Modern Minimalist** aesthetic tailored for high-value transactions. It balances the efficiency of a utility tool with the prestige of a luxury showroom. The visual language is defined by high-quality whitespace, a reduction of non-essential decorative elements, and a focus on clarity through typography.

The target audience is discerning users looking for a frictionless, trustworthy experience. The emotional response is one of confidence, transparency, and effortless control. We achieve this through "breathable" layouts, soft tonal transitions, and a sophisticated approach to elevation that avoids heavy visual noise.

## Colors

The palette is rooted in a crisp white environment to maximize the impact of product photography. 

- **Primary Blue:** A vibrant, saturated blue used exclusively for primary actions, critical interactive states, and branding accents. It signifies movement and reliability.
- **Success Green:** Used sparingly for badges (e.g., "Sale" or "Available") to provide high-visibility status indicators.
- **Neutrals:** A range of cool greys is utilized for background surfaces, borders, and secondary text to maintain a low-contrast, easy-on-the-eyes hierarchy.
- **Surface:** Pure white (#FFFFFF) is the base for all primary cards and containers to create a distinct separation from the off-white application background.

## Typography

We use **Plus Jakarta Sans** across all levels to maintain a cohesive, modern, and friendly tone. The typeface’s open counters and geometric structure ensure legibility at small sizes while appearing premium at display sizes.

- **Headlines:** Use tight letter-spacing and bold weights to create a strong visual anchor.
- **Body:** Standard weight with generous line height to facilitate scanning technical specifications.
- **Labels:** Used for metadata and specifications; these should be concise and often paired with iconography.
- **Numeric Data:** Prices and technical specs (miles, battery capacity) are emphasized with semi-bold or bold weights to ensure key information is never missed.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high horizontal margins (20px) on mobile to create a "contained" and organized feel. 

- **Vertical Rhythm:** Elements are grouped in logical stacks using 8px increments. 16px is the standard gap between related items within a card, while 24px is used between distinct content blocks.
- **Card-Based Architecture:** Information is modularized into cards. This allows for a flexible layout that can easily reflow from a single column on mobile to a multi-column grid on desktop.
- **Safe Zones:** Content must maintain a minimum 16px padding from the edges of cards and containers to prevent visual crowding.

## Elevation & Depth

This design system uses a **Tonal & Ambient Shadow** approach to depth. We avoid harsh borders in favor of soft shadows and subtle background shifts.

- **Surface 0 (Background):** Neutral light grey (#F1F5F9) provides the base canvas.
- **Surface 1 (Cards/Containers):** Pure white (#FFFFFF) with a very soft, diffused shadow (Blur: 15px, Y: 4px, Opacity: 4% Black). This makes cards feel like they are resting lightly on the background.
- **Interaction Depth:** On hover or tap, shadows may intensify slightly (Opacity: 8%) to provide tactile feedback without looking "heavy."
- **Overlays:** Modals and bottom sheets use a backdrop blur (Glassmorphism) of 10px to maintain context with the layer beneath while focusing the user's attention.

## Shapes

The shape language is defined by **Rounded** geometry. Hard corners are strictly avoided to maintain the approachable, premium feel of the interface.

- **Primary Cards:** Use a 16px (1rem) radius.
- **Buttons & Chips:** Use a pill-shaped (full-round) or 12px radius depending on the context. Primary action buttons on mobile should be large and rounded for thumb-friendly interaction.
- **Small Elements:** Form inputs and small utility tags use an 8px radius.
- **Media:** Images of vehicles should always inherit the corner radius of their parent container.

## Components

### Buttons
- **Primary:** Full-width (on mobile), high-saturation blue background with white text. Full rounded corners.
- **Secondary:** Light blue or grey tint background with primary blue text.
- **Icon Buttons:** Circular white backgrounds with subtle shadows for floating actions (like "Favorite").

### Chips & Tags
- **Filter Chips:** Light grey backgrounds with medium-weight text. Active state switches to a dark background or blue outline.
- **Status Badges:** Small, rounded rectangles with soft background colors (e.g., light green for "Sale") and high-contrast text.

### Cards
- **Product Card:** White background, 16px radius, soft shadow. Product image at the top, followed by 16px padding for the title, spec row (using labels), and price.

### Input Fields
- **Search Bar:** Large, 12px+ rounded corners, subtle border or soft shadow. Icons should be light grey and non-intrusive.

### Lists
- **Spec Grid:** Use 2x2 or 1x4 grids for car specifications, each spec housed in a subtle "sub-card" or separated by clear whitespace and icons.