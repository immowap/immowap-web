# immowap Design System

Internal reference for building consistent UI across the immowap platform.
All new pages and components must consume tokens and shared primitives — never hardcode visual values.

**Source of truth:** `src/app/globals.css` (CSS variables) + `src/lib/design-system/` (TypeScript tokens & class maps)

---

## 1. Color Palette

### Brand (use only these)

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-primary` / `brand-800` | `#0F3D2E` | Headlines, primary surfaces, accent buttons |
| `brand-secondary` / `brand-600` | `#1F7A4D` | Hover states, success, links on hover |
| `gold-500` | `#B9965B` | Primary buttons, labels, accents |
| `gold-600` | `#A3834F` | Primary button hover |
| `cream` / `background` | `#F7F5EF` | Page background |
| `foreground` | `#1D1D1B` | Body text |
| `warm-gray` | `#D7D2C8` | Borders, dividers |
| `surface` | `#FFFFFF` | Cards, inputs, panels |
| `muted` | `#6B6A65` | Secondary text |

### Semantic

| Token | Purpose |
|-------|---------|
| `--color-success` | Confirmations, positive states |
| `--color-warning` | Caution messages |
| `--color-info` | Informational highlights |
| `--color-error` | Validation errors |
| `--color-disabled` | Disabled controls |
| `--color-border` | Default borders |
| `--color-hover` | Interactive hover |
| `--color-focus` | Focus rings |

**Tailwind:** `text-brand-800`, `bg-gold-500`, `border-warm-gray`, `text-muted`, etc.

---

## 2. Typography

| Class | Use |
|-------|-----|
| `.text-display` | Rare marketing emphasis |
| `.text-h1` | Page titles |
| `.text-h2` | Section headlines |
| `.text-h3` | Card titles, subsections |
| `.text-h4` | Small headings |
| `.text-body-lg` | Lead paragraphs |
| `.text-body` | Default body (also on `<body>`) |
| `.text-body-sm` | Secondary copy, labels |
| `.text-caption` | Meta, timestamps |
| `.text-button` | Button labels |
| `.text-label` | Section labels (uppercase) |

**Font:** Inter (`--font-inter`) — weights 400, 500, 600, 700

**Import:** `typographyClasses` from `@/lib/design-system`

---

## 3. Spacing Scale

| Token | px |
|-------|-----|
| `--space-1` | 4 |
| `--space-2` | 8 |
| `--space-3` | 12 |
| `--space-4` | 16 |
| `--space-6` | 24 |
| `--space-8` | 32 |
| `--space-10` | 40 |
| `--space-12` | 48 |
| `--space-16` | 64 |
| `--space-20` | 80 |
| `--space-24` | 96 |

**Layout helpers:** `layoutSpacing.sectionY`, `.sectionYLarge`, `.containerX`

---

## 4. Containers

| Variant | Max width | Class / Component |
|---------|-----------|-------------------|
| Page | 80rem (1280px) | `containerClasses.page` / `<Container variant="page">` |
| Content | 48rem | `containerClasses.content` |
| Article | 50rem | `containerClasses.article` |
| Narrow | 36rem | `containerClasses.narrow` |

**Section wrapper:** `<Section>` applies page container + vertical padding automatically.

---

## 5. Border Radius

| Token | px | Tailwind |
|-------|-----|----------|
| `--radius-sm` | 8 | `rounded-lg` |
| `--radius-md` | 16 | `rounded-2xl` |
| `--radius-xl` | 28 | Cards |
| `--radius-2xl` | 32 | Hero images |
| `--radius-full` | pill | Buttons |

---

## 6. Shadows

| Token | Use |
|-------|-----|
| `--shadow-sm` | Subtle elevation |
| `--shadow-md` | Cards (default) |
| `--shadow-lg` | Raised panels |
| `--shadow-xl` | Forms, modals |
| `--shadow-hero` | Hero images |
| `--shadow-hover` | Card/button hover |

---

## 7. Buttons

**Import:** `@/components/ui/buttons` or `@/components/ui/Button`

| Component | Variant |
|-----------|---------|
| `PrimaryButton` | Gold fill, dark text |
| `SecondaryButton` | Outlined |
| `GhostButton` | Text only |
| `AccentButton` | Emerald fill |
| `SecondaryButtonOnDark` | For dark backgrounds |

**Props:** `size` (`default` | `compact`), `disabled`, `loading`, `href`

**Tokens:** `buttonVariants`, `buttonSizes` from `@/lib/design-system/classes/buttons`

---

## 8. Cards

**Import:** `@/components/ui/Card`

```tsx
<Card interactive>
  <CardTitle>Title</CardTitle>
  <CardSubtitle>Optional</CardSubtitle>
  <CardDescription>Body</CardDescription>
</Card>
```

Uses `.card-premium` utility (padding `--space-10`, radius `--radius-xl`).

---

## 9. Forms

**Import:** `@/components/ui/forms`

| Component | Purpose |
|-----------|---------|
| `FormField` | Wrapper spacing |
| `Label` | With optional `optional` flag |
| `Input` | Text inputs |
| `Select` | Dropdowns |
| `Textarea` | Multi-line |
| `Checkbox` | With optional label |
| `FormMessage` | helper / error / success |

**Class maps:** `formFieldBase`, `formLabel`, etc. in `@/lib/design-system/classes/forms`

---

## 10. Icons

**Import:** `@/components/ui/icons/Icon`

**Stroke width:** 1.5 (fixed)

**Sizes:** `xs` 16 · `sm` 20 · `md` 24 · `lg` 32

**Names:** `market-value`, `risk`, `investment`, `cashflow`, `location`, `documents`, `reports`, `ai-analysis`, `renovation`, `strategy`, `chart`, `building`, `map`, `phone`, `mail`, etc.

**Social:** `@/components/ui/SocialLinks` (LinkedIn, YouTube, Instagram)

---

## 11. Grid

**Import:** `@/components/ui/Grid`

```tsx
<Grid columns={3}>{items}</Grid>
```

Columns: `1` | `2` | `3` | `4` | `5` — responsive breakpoints built in.

---

## 12. Animation

| Token | Value |
|-------|-------|
| `--duration-fast` | 150ms |
| `--duration-default` | 300ms |
| `--duration-slow` | 500ms |

**Utilities:** `.hover-lift`, `animationClasses.transition`, `animationClasses.focusRing`

Animations should be subtle — no bouncy or playful easing.

---

## 13. Responsive Breakpoints

| Name | px |
|------|-----|
| `sm` | 640 |
| `md` | 768 |
| `lg` | 1024 |
| `xl` | 1280 |
| `2xl` | 1536 |

Typography uses `clamp()` — scales fluidly without page-specific rules.

---

## 14. Accessibility

- Minimum focus ring via `focus-visible:ring-2` on buttons and form controls
- Disabled opacity: `--opacity-disabled` (0.45)
- Touch targets: buttons min 44px height (`h-14` default)
- Use semantic HTML + `aria-label` on icon-only links
- Contrast: dark text on cream/white; white text on `brand-800`

---

## 15. File Structure

```
src/
├── app/globals.css          # CSS custom properties
├── lib/design-system/
│   ├── tokens/              # colors, typography, spacing, etc.
│   ├── classes/             # Tailwind class compositions
│   ├── index.ts             # Public API
│   └── DESIGN_SYSTEM.md     # This file
└── components/ui/
    ├── Button.tsx
    ├── buttons/index.ts
    ├── Card.tsx
    ├── Container.tsx
    ├── Grid.tsx
    ├── Section.tsx
    ├── forms/
    └── icons/Icon.tsx
```

---

## 16. Usage Rules

1. **Never** hardcode hex colors in components — use Tailwind token classes or CSS variables
2. **Always** use shared button/card/form components for new UI
3. **Prefer** `<Section>` + `<SectionHeader>` for page blocks
4. **Extend** tokens in `globals.css` first, then mirror in TypeScript tokens
5. **One change** to a token should propagate everywhere automatically

---

## 17. Prompt 02 — Homepage Redesign Checklist

When redesigning the homepage in the next phase:

- [ ] Replace any remaining hardcoded spacing with `layoutSpacing` tokens
- [ ] Use `PrimaryButton` / `SecondaryButton` exclusively
- [ ] Apply `Grid` component for card layouts
- [ ] Ensure hero uses `pageHeroGridClassName` or `ProductHeroVisual` tokens
- [ ] Map all typography to `.text-*` scale — no inline font sizes
- [ ] Use `--shadow-hero` for any product preview panels
- [ ] Validate responsive behavior at `md` and `lg` breakpoints only via system grid
- [ ] Do not introduce new colors outside the palette
