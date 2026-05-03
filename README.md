# FitElite - Premium Fitness Platform

A modern, high-converting fitness website for personal fitness brand and community. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

✨ **Premium Design**
- Ultra-modern dark theme with neon accents
- Smooth animations and transitions
- Glass-morphism effects
- Mobile-first responsive design

🏋️ **Fitness Features**
- Workout programs (Fat Loss, Muscle Building, Calisthenics, etc.)
- Exercise library with video demos
- Nutrition guides and meal plans
- Daily habits tracker with gamification
- Transformation showcase
- Community features

📊 **User Experience**
- Interactive stats counters
- Progress tracking
- Achievement system
- Leaderboards
- Social sharing

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **State Management**: Zustand

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/krishojha1313-sys/fitness-brand.git
cd fitness-brand

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
fitness-brand/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProgramsSection.tsx
│       ├── TransformationSection.tsx
│       ├── HabitsSection.tsx
│       ├── ExerciseLibrary.tsx
│       ├── NutritionSection.tsx
│       ├── BlogSection.tsx
│       ├── PricingSection.tsx
│       ├── FAQSection.tsx
│       └── FinalCTASection.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Color Palette

- **Primary**: Black (#0A0A0A), Charcoal (#121212)
- **Accents**: Electric Blue (#00D9FF), Neon Green (#00FF88), Deep Red (#FF1744)
- **Text**: White (#FFFFFF), Gray (#808080)

## Customization

Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

## Deployment

Easy deployment to Vercel:

```bash
npm i -g vercel
vercel
```

Or deploy to any Node.js hosting platform.

## License

MIT License - feel free to use this template for your projects.

## Support

For issues and feature requests, create an issue on GitHub.
