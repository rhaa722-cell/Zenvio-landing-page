# Zenvio Landing Page

A responsive SaaS landing page built with React, Vite and Tailwind CSS.

## Live Demo
(Vercel link yahan lagana)

## Tech Stack
- React (Vite)
- Tailwind CSS

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Pricing.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Design Choices
- **Component-based:** each section is a separate reusable component.
- **Responsive:** mobile-first layout using Tailwind breakpoints (`sm`, `md`, `lg`). Cards stack on mobile and form 2 to 3 columns on larger screens. The navbar links hide on small screens.
- **Design system:** indigo as the main colour, gray for text, consistent spacing and a clear heading hierarchy.

## Run Locally
```
npm install
npm run dev
```