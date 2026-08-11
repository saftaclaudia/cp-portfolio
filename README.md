# Claudia Popescu - Portfolio

Personal portfolio website built with React, TypeScript and Tailwind CSS. Features dark/light mode, EN/DE language switching and a working contact form.
**Live site:** [claudiapopescu-portfolio.vercel.app](https://claudiapopescu-portfolio.vercel.app/)

## Features

- 🌓 Dark/Light mode (persisted across sessions)
- 🌐 English/German language switching
- 📱 Fully responsive, mobile-friendly navigation
- ✉️ Working contact form with real email delivery(EmailJS)
- ⚡️ Smooth scroll navigation between sections
- 🎨 Custom design with hover interactions and micro-animations

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - built tool
- **Tailwind CSS** - Styling
- **React Router** -client-side routing
- **react-i18next** - internationalization
- **EmailJS** - contact form email delivery
- **Lucide react** / **react-icons** - icons

## Getting Started

```bash
# Clone the repository
git clone https://github.com/saftaclaudia/cp-portfolio.git
cd cp-portfolio

# Install dependencies
npm install

# Add environment variables (see .env.example)
cp .env.example .env

# Run the dev server
npm run dev
```

## Project structure

```
src/
├── components/       # Reusable UI components (Header, Hero, Footer, etc.)
├── context/          # React Context providers (theme, language)
├── data/             # Static data (projects list)
├── i18n/             # Translations (en.json, de.json) and i18next config
├── pages/            # Route-level pages (Home, ContactPage)
├── types/            # Shared TypeScript types
├── App.tsx           # Root component, routing setup
└── main.tsx          # App entry point
```

## Contact

- Live site: [claudiapopescu-portfolio.vercel.app](https://claudiapopescu-portfolio.vercel.app/)
- GitHub: [@saftaclaudia](https://github.com/saftaclaudia)
- LinkedIn: [Claudia Popescu](https://www.linkedin.com/in/claudia-popescu-frontend-developer/)
