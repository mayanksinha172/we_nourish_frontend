# WeNourish — Frontend

A modern, animated React website for WeNourish — personalised nutrition consulting and healthy Indian recipes by Arjita.

## Tech stack

- **React 19** + **Vite 8**
- **React Router v6** — client-side routing
- **Framer Motion** — scroll-triggered animations, spring transitions, AnimatePresence
- **CSS Modules** — scoped per-component styles with global design tokens

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, how-it-works, testimonials, press, recipes teaser, shop, FAQ, community signup |
| `/nutrition-plans` | 1-on-1 consulting — process steps, plan comparison cards |
| `/recipes` | Searchable + filterable recipe library |
| `/about` | Arjita's story, stats, mission, values |
| `/blog` | Blog card grid |

## Features

- Scroll-triggered FadeUp animations on every section
- Direction-aware testimonial carousel with AnimatePresence
- Sticky filter bar + live search on the Recipes page
- Exit-intent / 15-second email popup with 30-day cookie
- Floating WhatsApp FAB with spring pop-in
- Mobile sticky "Book Free Call" CTA bar
- Responsive hamburger nav with spring-animated drawer
- All copy and data centralised in `src/data/content.js`

## Brand

- **Aubergine Plum** `#381848` · **Nourish Green** `#287830` · **Warm Paper** `#FBFAF7` · **Soft Gold** `#C9A24B`
- Font: **Manrope** (400–800) + **Fraunces** Italic for editorial accents

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Placeholders

The following integrations are stubbed and ready to wire up:

| Feature | Location | Notes |
|---|---|---|
| Calendly booking | `src/data/content.js → CALENDLY` | Replace with your Calendly URL |
| Razorpay payments | `src/sections/Shop.jsx` | Add Razorpay script + handler |
| Email capture endpoint | `src/components/EmailPopup.jsx`, `src/sections/CommunitySignup.jsx` | POST to your ESP or serverless function |
| WhatsApp numbers | `src/data/content.js → WA_NUTRITION / WA_COLLAB` | Update phone numbers in the wa.me links |
