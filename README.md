# CBNCC — Our Domains Section

A polished, animated **"Our Domains"** section built for the CBNCC (Code Busters & Coding Club) homepage. Built with React, Framer Motion, and Tailwind CSS.

---

## What's Inside

This repo contains a ready-to-drop-in `OurDomains` section with:

- 8 animated domain cards (Web Dev, App Dev, AI/ML, Competitive Programming, UI/UX, Cybersecurity, Cloud, Open Source)
- Smooth hover effects — card lift, icon inversion, gradient overlay
- Scroll-triggered entrance animations via Framer Motion
- Floating background blobs with infinite motion
- Subtle dot-grid background texture
- Fully responsive: stacks to 1 col → 2 col → 4 col grid

---

## Prerequisites

- Node.js `v20.19+` or `v22.12+` (required by Vite 8 and ESLint 10)
- npm

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-org/CBNCC_Website.git
cd CBNCC_Website

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the page loads with a header, the Our Domains section, and a footer.

---

## Project Structure

```
src/
├── components/
│   └── OurDomains.jsx      # The main section component
├── data/
│   └── domains.js          # Domain cards data (title, description, icon, tag, accent)
├── App.jsx                 # Wires up header + OurDomains + footer
└── index.css               # Tailwind base + custom scrollbar
tailwind.config.js          # Brand colors, fonts, shadow tokens
```

---

## How to Integrate Into Your Homepage

If you already have a homepage and just want the `OurDomains` section:

**Step 1 — Copy the files you need:**

```
src/components/OurDomains.jsx
src/data/domains.js
```

**Step 2 — Make sure your project has these dependencies:**

```bash
npm install framer-motion react-icons
```

**Step 3 — Add these fonts to your `index.html`:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Step 4 — Add Tailwind custom tokens to your `tailwind.config.js`** (skip if already present):

```js
theme: {
  extend: {
    fontFamily: {
      sora: ['Sora', 'sans-serif'],
      space: ['Space Grotesk', 'sans-serif'],
    },
    colors: {
      brand: {
        bg: '#ECEBEC',
        dark: '#111111',
        muted: '#555555',
        silver: '#8E8E93',
      }
    },
    boxShadow: {
      'premium': '0 8px 30px rgba(0, 0, 0, 0.03)',
      'premium-hover': '0 20px 40px rgba(0, 0, 0, 0.06)',
    }
  }
}
```

**Step 5 — Drop the component into your page:**

```jsx
import OurDomains from './components/OurDomains';

export default function HomePage() {
  return (
    <main>
      {/* your other sections */}
      <OurDomains />
    </main>
  );
}
```

---

## Customising the Domain Cards

All card content lives in `src/data/domains.js`. Each entry looks like this:

```js
{
  id: 'web-dev',                        // unique key
  title: 'Web Development',             // card heading
  description: 'Your description here', // 1–2 line blurb
  icon: FiGlobe,                        // any react-icons/fi icon
  accentColor: 'from-[#111]/30 to-[#555]/10', // Tailwind gradient classes for hover tint
  tag: 'Web & Interaction'              // small label badge
}
```

To add a new domain, import an icon from `react-icons/fi` and append a new object to the array. The grid expands automatically.

To remove a domain, just delete its entry from the array.

---

## Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts local dev server at `localhost:5173` |
| `npm run build` | Builds production output to `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint across the codebase |

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| Framer Motion | 12 | Animations |
| Tailwind CSS | 3.4 | Styling |
| react-icons | 5.6 | Domain card icons |
| Space Grotesk | — | Body / label font |
| Sora | — | Heading font |