# Adobe Rose Restaurant — High Desert Refined Dining

Stitch project: `projects/16579421703207010067`  
Stitch screen: `projects/16579421703207010067/screens/7203dc1ce41741f6b3120ca1260a4e80`  
Design-system asset: `assets/a290a169a88f442e9e25027fb47eee07`

## Direction

Sophisticated Southwestern hospitality grounded in adobe architecture, natural linen, candlelight, and New Mexico's high-desert landscape. The experience is warm and deliberate, with editorial hierarchy and tactile restraint rather than frontier kitsch. Client-source evidence remains authoritative whenever generated design copy conflicts with the content manifest.

## Typography

- Headings: **EB Garamond**, Georgia, serif; weights 400 and 500.
- Body and controls: **Open Sans**, Arial, sans-serif; weights 400, 600, and 700.
- Hero: `clamp(3rem, 7vw, 6.5rem)`, 0.9 line-height, weight 400.
- H2: `clamp(2.4rem, 5vw, 4.75rem)`, 0.95 line-height, weight 400.
- H3: `clamp(1.55rem, 2.4vw, 2rem)`, 1.1 line-height, weight 500.
- Body large: 17px/28px; body regular: 15px/24px; small: 13px/20px.
- Eyebrows and labels: 11–12px, weight 700, uppercase, `0.14em` tracking.

## Color roles

- Primary brand / CTA: `#CD3B30` Adobe Red; white text. Hover: `#B63329`.
- Secondary brand: `#6A6930` High Desert Olive; use sparingly for labels and details.
- Text / dark surface: `#32373C` Deep Charcoal.
- Primary text on light: `#1B1C1A`.
- Muted text: `#595F65`.
- Page background: `#FBF9F5` Warm Bone Linen.
- Secondary surface: `#EFECE6` Desert Sand.
- Elevated surface: `#FFFFFF`.
- Border: `#E2DDD5` Earthen Mortar.
- Error: `#BA1A1A`.

Normal text uses `#1B1C1A` on `#FBF9F5`; CTA text uses white on `#CD3B30`. Both combinations target WCAG AA or better.

## Grid and spacing

- Maximum content width: 1240px.
- Desktop: 12 columns, 24px gaps, 64px outer margins where space permits.
- Tablet: 8 columns, 20px gaps, 32px outer margins.
- Mobile: 4 columns, 16px gaps, 20px outer margins.
- Base rhythm: 4px. Key steps: 8, 12, 16, 24, 32, 48, 72, 96px.
- Section spacing: 64px mobile and 96px desktop.
- Keep body copy near 65 characters per line.

## Components

- Buttons: 4px radius, minimum 44px height, 14px/700 type. Primary uses Adobe Red; secondary is transparent with a charcoal border.
- Cards: 8px radius, `1px solid #E2DDD5`, white or sand surface.
- Inputs: 4px radius, white background, 1px border, 14px vertical padding.
- Images: 8px radius; use 4:5 portraits and 16:9 environment crops.
- Notice panels: sand surface with a 2px Adobe Red rule.
- Header: translucent warm-white surface with a subtle bottom border; no heavy shadow.

## Elevation

- Level 1: `0 4px 20px -2px rgba(50, 55, 60, 0.08)`.
- Level 2: `0 10px 30px -4px rgba(50, 55, 60, 0.12)`.
- Borders provide most structure; shadows remain ambient and sparse.

## Interaction and motion

- Hover transitions: 180–240ms, color/opacity/transform only.
- Links and controls receive a visible 2px Adobe Red focus outline with 3px offset.
- Cards may translate at most 2px on hover; no bounce or parallax.
- Honor `prefers-reduced-motion` by disabling smooth scrolling and transitions.
- Mobile navigation is progressively enhanced; primary content and calls to action remain available without JavaScript.

