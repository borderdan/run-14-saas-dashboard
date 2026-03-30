# AGENTS.md

## Project: SaaS Analytics Dashboard
**Stack**: Next.js 14 App Router + TypeScript + Tailwind CSS 3 + shadcn/ui + recharts + vitest

## Dependency Constraints
- You MUST install required dependencies using npm/pnpm as needed for your task
- This is a fresh Next.js project — bootstrap the project scaffold if it does not exist
- Run `npm run build` at the end of your task to verify it compiles cleanly

## Build Verification
- Run `npm run build` after completing your changes
- Fix any TypeScript or compilation errors before submitting your PR

## Code Standards
- TypeScript strict mode — no `any` types
- React components must not exceed 300 lines — split into sub-components
- Use named exports only (export function X, not export default)
- Tailwind CSS for all styling — no inline styles, no CSS modules, no styled-components
- All component files go in src/components/
- All utility files go in src/lib/ or src/types/

## Design System
- Dark theme default: zinc-900 bg, zinc-800 cards, white text, zinc-400 secondary
- Primary: blue-500, Success: green-500, Danger: red-500, Warning: amber-500
- Glass morphism cards: backdrop-blur-lg, bg-white/5, border border-white/10
- Card style: rounded-2xl, shadow-lg, p-6
- Font: Inter
- Mobile responsive: stack on small screens, grid on desktop

## Project Structure
```
src/
  app/
    (auth)/login/   — login page
    (dashboard)/    — protected dashboard routes
  components/       — shared React components
  lib/              — utilities and data layer
  types/            — TypeScript interfaces
```

## Parallel Execution Awareness
- You are one of multiple agents working on this repo simultaneously
- Use named exports to prevent naming conflicts
- Your task defines clear file boundaries — do not modify files owned by other tasks
