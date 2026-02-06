# Portfolio Website - Visual Layout Guide

This document shows the visual structure and layout of your portfolio at a glance.

## Desktop Layout (1200px+)

```
┌─────────────────────────────────────────────────────┐
│ Navigation Bar (Sticky)                             │
│ Portfolio    |  Home  Showreels  Projects  Contact │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                    HERO SECTION                     │
│                                                      │
│           Your Name Here                            │
│   Portfolio of Evidence – MSc Technical Art         │
│                                                      │
│     [Short intro paragraph explaining the           │
│      portfolio and what assessors will find]        │
│                                                      │
│         [3D Showreel Button] [Game Showreel Btn]   │
└─────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────┐
│   SHOWREELS SECTION  │                      │
│                      │                      │
│  3D Showreel        │  Game Creation       │
│  ┌────────────────┐  │  ┌────────────────┐ │
│  │                │  │  │                │ │
│  │ YouTube Video  │  │  │ YouTube Video  │ │
│  │ (16:9)         │  │  │ (16:9)         │ │
│  │                │  │  │                │ │
│  └────────────────┘  │  └────────────────┘ │
│  Description text    │  Description text    │
│                      │                      │
└──────────────────────┴──────────────────────┘

┌─────────────────────────────────────────────────────┐
│            PROJECTS SECTION (5 cards)               │
│                                                      │
│  ┌──────────┬──────────┬──────────┐                │
│  │ Project  │ Project  │ Project  │                │
│  │    1     │    2     │    3     │                │
│  └──────────┴──────────┴──────────┘                │
│                                                      │
│  ┌──────────┬──────────┐                           │
│  │ Project  │ Project  │                           │
│  │    4     │    5     │                           │
│  └──────────┴──────────┘                           │
│                                                      │
│  Each card:                                         │
│  ┌─────────────────────────┐                       │
│  │  [Image Gallery]        │                       │
│  │  ● ● ● (dots to switch) │                       │
│  ├─────────────────────────┤                       │
│  │ Project Title           │                       │
│  │ Brief description       │                       │
│  │ [Tag] [Tag] [Tag]       │                       │
│  │ [Demo Link] [GitHub]    │                       │
│  └─────────────────────────┘                       │
│                                                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│         INDUSTRY EXPERIENCE SECTION                 │
│                                                      │
│ Myrkur Games – Echoes of the End                   │
│ Role: UI Developer (Unreal Engine)                 │
│                                                      │
│  ┌────────────────┐  │ Description text about      │
│  │ [Image 1]      │  │ the role, responsibilities, │
│  ├────────────────┤  │ and technical skills.       │
│  │ [Image 2]      │  │                             │
│  └────────────────┘  │ NDA disclaimer visible      │
│                      │                             │
│───────────────────────────────────────────────────┼
│                                                      │
│ RÍSÍ – CS:GO Broadcast Production                  │
│ Role: Broadcast Manager                            │
│                                                      │
│  ┌──────┬──────┬──────┐  │ Description of          │
│  │[Img1]│[Img2]│[Img3]│  │ broadcast role,         │
│  └──────┴──────┴──────┘  │ technical setup,        │
│                           │ and achievements        │
│                           │                         │
│                           │ [View Stream Examples]  │
│                                                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│          CONTACT SECTION                            │
│                                                      │
│  ┌──────────────────┐  ┌──────────────────┐       │
│  │  CONTACT INFO    │  │  DOWNLOAD CV     │       │
│  │                  │  │                  │       │
│  │ Email: [link]    │  │ [PDF Download]   │       │
│  │ Location: Iceland│  │ Optimized for    │       │
│  │ LinkedIn: [link] │  │ print & digital  │       │
│  │ GitHub: [link]   │  │                  │       │
│  └──────────────────┘  └──────────────────┘       │
│                                                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ Footer: © 2026 Your Name                            │
└─────────────────────────────────────────────────────┘
```

---

## Mobile Layout (320px - 768px)

```
┌─────────────────────────┐
│ Portfolio      ☰ Menu  │ (Hamburger icon on mobile)
└─────────────────────────┘

┌─────────────────────────┐
│    HERO SECTION         │
│  (Full width, stacked)  │
│                         │
│   Your Name Here        │
│   Portfolio of...       │
│   [Intro paragraph]     │
│                         │
│   [3D Showreel Button]  │
│   [Game Showreel Button]│
│                         │
└─────────────────────────┘

┌─────────────────────────┐
│  SHOWREELS (1 column)   │
│                         │
│  3D Showreel            │
│  ┌─────────────────┐    │
│  │ YouTube Video   │    │
│  │ (responsive)    │    │
│  └─────────────────┘    │
│  Description text       │
│                         │
│  Game Creation Showreel │
│  ┌─────────────────┐    │
│  │ YouTube Video   │    │
│  └─────────────────┘    │
│  Description text       │
│                         │
└─────────────────────────┘

┌─────────────────────────┐
│ PROJECTS (1 card/row)   │
│                         │
│  ┌───────────────────┐  │
│  │ Project 1         │  │
│  │ [Image]           │  │
│  │ Title             │  │
│  │ Description       │  │
│  │ [Tags]            │  │
│  │ [Links]           │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ Project 2         │  │
│  │ [Image]           │  │
│  │ [etc...]          │  │
│  └───────────────────┘  │
│                         │
│  (and so on...)         │
│                         │
└─────────────────────────┘

┌─────────────────────────┐
│  EXPERIENCE             │
│  (stacked vertically)   │
│                         │
│  Myrkur Games Title     │
│  ┌───────────────────┐  │
│  │ [Image 1]         │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ [Image 2]         │  │
│  └───────────────────┘  │
│  Description text...    │
│                         │
│  ─────────────────────  │
│  (divider)              │
│                         │
│  RÍSÍ Title             │
│  ┌───────────────────┐  │
│  │ [Image 1]         │  │
│  ├───────┬───────────┤  │
│  │ [Img] │ [Image 2] │  │
│  └───────┴───────────┘  │
│  Description text...    │
│  [View Stream Examples] │
│                         │
└─────────────────────────┘

┌─────────────────────────┐
│  CONTACT (stacked)      │
│                         │
│  Contact Info           │
│  Email: [link]          │
│  Location: Iceland      │
│  LinkedIn: [link]       │
│  GitHub: [link]         │
│                         │
│  Download CV            │
│  [PDF Download Button]  │
│                         │
└─────────────────────────┘

┌─────────────────────────┐
│ Footer                  │
└─────────────────────────┘
```

---

## Color Scheme

```
┌─────────────────────────────────────────────┐
│ Background (Very Dark)        #1a1f2e       │
│ ███████████████████████████████████████     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Primary (Dark Blue-Gray)      #2c3e50       │
│ ████████████████████████████████████████    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Secondary (Medium Blue-Gray)  #34495e       │
│ ████████████████████████████████████████    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Accent (Bright Blue) – Interactive Elements │
│ #3498db                                     │
│ ███████████████████████████████████████    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Text (Light Gray)             #ecf0f1       │
│ Light, readable text on dark backgrounds    │
└─────────────────────────────────────────────┘
```

---

## Interactive Elements

### Buttons

**Primary Button (Blue)**
```
┌──────────────────┐
│ 3D Showreel      │ ← Click to scroll to showreels
└──────────────────┘
On hover: Darker blue, slight lift effect
```

**Secondary Button (Outline)**
```
┌──────────────────┐
│ Game Creation... │ ← Outline style
└──────────────────┘
On hover: Filled with blue background
```

**Link Button (Tags)**
```
[Unreal Engine] [C++] [VFX] ← Tag style buttons
On hover: Change color
```

**Project Links**
```
[View Demo] [GitHub] ← Smaller outline buttons
On hover: Fill with blue, white text
```

---

## Image Gallery Navigation

**Example Project Card:**
```
┌─────────────────────────┐
│   [Main Image Display]  │
│                         │
│                         │
│        ● ● ● ●          │ ← Dots to navigate
│      (Click any dot)    │
├─────────────────────────┤
│ Project Title           │
│ Description             │
│ [Buttons]               │
└─────────────────────────┘
```

**Gallery behavior:**
- First image shows by default
- Click any dot to change image
- Gallery dots are semi-transparent
- Active dot is bright blue
- Clicking image opens full-size modal

---

## Modal (Full-Size Image)

```
Dark overlay covers entire screen (90% opacity)

      ┌──────────────────────────┐
      │  ✕ (Close button, top)   │
      │                          │
      │   [Full-Size Image]      │
      │   Max width: 1000px      │
      │   Max height: 90vh       │
      │                          │
      │  (Click outside to close)│
      │  (ESC key to close)      │
      └──────────────────────────┘

Centered vertically on screen
Responsive on mobile (90% width)
Smooth fade-in animation
```

---

## Navigation Behavior

### Desktop
```
Portfolio  |  Home  Showreels  Projects  Experience  Contact

All links visible in top navbar
Sticky navigation (stays at top when scrolling)
```

### Mobile
```
Portfolio      ☰

When hamburger clicked:
┌─────────────────┐
│ Home            │
│ Showreels       │
│ Projects        │
│ Experience      │
│ Contact         │
└─────────────────┘

Menu closes when link is clicked
```

---

## Typography Hierarchy

```
HERO SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Your Name Here              ← h1 (3.5rem, bold)
Portfolio of Evidence...    ← h2 (1.75rem, accent color)

Intro paragraph            ← p (1.1rem, normal weight)
Brief introduction text explaining your portfolio
and what assessors will find inside.


SECTION TITLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Showreels                  ← h2 (2.5rem)
____________ (underline with accent color)


PROJECT TITLE              ← h3 (1.5rem)
Brief project description text explaining the
technical approach and outcomes.

[Tags] [Tags]              ← Small labels
[Button] [Button]          ← Interactive elements
```

---

## Spacing & Padding

```
Hero Section:        6rem padding top/bottom (desktop)
Standard Section:    4rem padding top/bottom
Card padding:        1.5rem - 2rem
Gap between items:   2rem - 3rem
```

---

## Breakpoints

```
Responsive breakpoints in CSS:

┌──────────────────────────────────────┐
│ Desktop (1024px+)                    │
│ ├─ Max width 1200px container       │
│ ├─ 2-3 column grids                 │
│ └─ Side-by-side layouts             │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Tablet (768px - 1024px)              │
│ ├─ Adjusted font sizes              │
│ ├─ 1-2 column grids                 │
│ └─ Larger tap targets               │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Mobile (320px - 768px)               │
│ ├─ Single column layout              │
│ ├─ Hamburger menu                   │
│ ├─ Smaller fonts                    │
│ └─ Full-width cards                 │
└──────────────────────────────────────┘
```

---

## Hover & Interactive States

```
Button States:
┌────────────┐
│ Default    │ Light gray, clickable
└────────────┘
     ↓ (hover)
┌────────────┐
│ Hover      │ Darker color, lifts slightly (transform: -2px)
└────────────┘
     ↓ (click)
┌────────────┐
│ Active     │ Slightly lighter feedback
└────────────┘

Link States:
→ Default:   Blue text (#3498db)
→ Hover:     Underlined, slightly lighter
→ Active:    (for nav items) Highlighted
```

---

## Animation Effects

- **Button hover:** Smooth color transition (0.3s) + 2px lift
- **Card hover:** Smooth shadow transition + subtle scale up
- **Modal:** Fade in animation (0.3s)
- **Navigation toggle:** Smooth max-height transition
- **Scroll:** Smooth behavior (native CSS)

All transitions use:
```css
transition: all 0.3s ease;
```

---

## Accessibility Features

```
┌────────────────────────────────────┐
│ Keyboard Navigation                │
│ ├─ Tab: Move to next element      │
│ ├─ Shift+Tab: Move to prev element│
│ ├─ Enter: Activate button/link    │
│ ├─ Escape: Close modal            │
│ └─ Space: Activate button         │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Color Contrast                     │
│ ├─ WCAG AA compliant               │
│ ├─ Light text on dark background  │
│ └─ Sufficient ratio for readability│
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Semantic HTML                      │
│ ├─ Proper heading hierarchy (h1-h6)│
│ ├─ Semantic nav/section/article   │
│ ├─ Alt text on images             │
│ └─ Descriptive link text          │
└────────────────────────────────────┘
```

---

This visual guide shows the complete layout structure of your portfolio. Use it to verify your edits display correctly!
