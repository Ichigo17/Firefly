# Firefly Energy Distributor Intelligence Platform - Design Guidelines

## Design Approach: Design System + Clean Tech Aesthetic

**Selected Framework:** Material Design + Custom Clean Energy Brand Identity
**Rationale:** Information-dense B2B platform requiring data visualization, analytics dashboards, and multi-user workflows. Material Design provides robust component patterns for complex interfaces while allowing customization for Firefly's innovative brand.

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary (Default):**
- Background Base: 220 15% 12%
- Background Elevated: 220 15% 16%
- Background Interactive: 220 15% 20%
- Primary Brand: 186 65% 45% (Clean tech teal - energy/innovation)
- Primary Hover: 186 65% 38%
- Text Primary: 220 10% 95%
- Text Secondary: 220 8% 70%
- Border Subtle: 220 12% 25%

**Accent Colors:**
- Success (Marine): 158 64% 52%
- Warning (Solar): 38 92% 50%
- Info (RV): 217 91% 60%
- Alert (Trucking): 25 95% 53%
- Neutral Data: 220 8% 50%

**Light Mode:**
- Background Base: 0 0% 100%
- Background Elevated: 220 15% 98%
- Primary Brand: 186 75% 35%
- Text Primary: 220 15% 15%

### B. Typography

**Font Families:**
- Primary (UI): Inter (Google Fonts) - weights 400, 500, 600, 700
- Data/Mono: JetBrains Mono (Google Fonts) - weight 500 for metrics

**Scale:**
- Display: text-4xl (36px) font-bold
- H1: text-3xl (30px) font-semibold
- H2: text-2xl (24px) font-semibold
- H3: text-xl (20px) font-medium
- Body: text-base (16px) font-normal
- Small: text-sm (14px) font-normal
- Micro: text-xs (12px) font-medium

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16
- Micro spacing: p-2, gap-2
- Standard spacing: p-4, gap-4, m-4
- Section spacing: p-6, py-8
- Large spacing: p-12, py-16
- Component margins: mb-4, mt-6

**Grid System:**
- Dashboard: 12-column grid with gap-6
- Sidebar: Fixed 280px (expanded) / 72px (collapsed)
- Content max-width: max-w-7xl
- Card grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### D. Component Library

**Navigation:**
- Top bar: 64px height, logo left, user/notifications right
- Sidebar: Collapsible with icon-only collapsed state
- Breadcrumbs: Text-sm with chevron separators
- Tabs: Underline style with active indicator

**Data Display:**
- Metric Cards: Elevated background, large number display (text-3xl), trend indicators with icons
- Tables: Striped rows, sticky headers, sortable columns, row hover states
- Charts: Chart.js integration with brand color scheme
- Status Badges: Rounded-full, px-3 py-1, uppercase text-xs

**Forms & Inputs:**
- Input fields: Outlined style, rounded-lg, focus ring in primary color
- Dropdowns: Custom select with Heroicons chevrons
- Date pickers: Calendar modal with range selection
- File uploads: Drag-drop zone with progress indicators

**CTAs & Actions:**
- Primary: Solid primary color, rounded-lg, px-6 py-3
- Secondary: Outline with primary border, transparent bg
- Tertiary: Ghost style, hover background only
- Icon buttons: rounded-full, p-2

**Modals & Overlays:**
- Modal: Centered, max-w-2xl, backdrop blur
- Drawer: Slide from right, full height
- Toast notifications: Top-right, auto-dismiss, stacked
- Loading states: Skeleton screens + pulse animation

### E. Dashboard-Specific Patterns

**KPI Overview Section:**
- 4-column metric grid on desktop (grid-cols-4)
- Large numbers with percentage changes
- Spark line micro-charts
- Color-coded status indicators

**Distributor Management Interface:**
- Kanban board for pipeline stages
- Drag-drop card interactions
- Quick action menus on cards
- Filter sidebar with multi-select

**Sales Analytics:**
- Interactive line/bar charts
- Date range selector (last 7/30/90 days, custom)
- Channel breakdown with donut charts
- Exportable data tables

**AI Insights Panel:**
- Dedicated right rail (320px) for AI recommendations
- Card-based suggestion layout
- Action buttons per insight
- Confidence scores with visual indicators

---

## Images & Visual Assets

**Icon System:** Heroicons (outline for navigation, solid for status indicators)

**Illustrations:** 
- Empty states: Abstract geometric illustrations in brand teal
- Onboarding: 3-step visual walkthrough
- No data states: Friendly prompts with suggested actions

**Data Visualizations:**
- Geographic heat maps for territory coverage
- Battery performance comparison charts
- Distributor pipeline funnel graphics

**Hero Image:** Not applicable for dashboard application. Login page may feature abstract circuit/energy flow background gradient

---

## Key UX Patterns

1. **Progressive Disclosure:** Default collapsed sidebar, expandable details panels
2. **Smart Defaults:** Pre-filled forms with AI suggestions, auto-save drafts
3. **Real-time Updates:** WebSocket-powered live data refresh, notification badges
4. **Responsive Tables:** Horizontal scroll on mobile, card view breakpoint at md
5. **Contextual Help:** Tooltip info icons, inline documentation links
6. **Batch Actions:** Multi-select with bulk operation bar
7. **Search Everything:** Global command palette (Cmd+K) with fuzzy search

---

## Animation Guidelines

**Minimal & Purposeful:**
- Page transitions: 200ms fade-in
- Dropdown/modal: 150ms slide + fade
- Chart loading: Staggered bar animation (300ms)
- Hover states: 100ms scale(1.02) on cards
- **Avoid:** Excessive parallax, autoplay carousels, decorative animations

---

## Accessibility & Polish

- Maintain WCAG AA contrast ratios (4.5:1 text, 3:1 UI)
- Keyboard navigation with visible focus indicators
- Screen reader labels on all interactive elements
- Consistent dark mode across inputs (no white form fields)
- Error states with icon + message + field outline