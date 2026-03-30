1. **Add ThemeProvider**
   - Create a ThemeProvider using `next-themes` and wrap the application in `src/app/layout.tsx` to support light/dark mode toggling (default dark).

2. **Add ThemeToggle Component**
   - Create a `ThemeToggle` component and add it to the header `src/components/Header.tsx` to switch between dark and light modes.

3. **Page Transitions with Framer Motion**
   - Create a client-side wrapper component `PageTransition` that applies fade + slide up animation to children using `framer-motion`.
   - Wrap the main content area in `src/app/(dashboard)/layout.tsx` with this transition component, keying it by pathname to trigger animations on route change.

4. **UI Polish: Cards & Hover Animations**
   - Add hover classes (`transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`) to all cards in the dashboard pages (`overview`, `analytics`, `revenue`, `users`, `settings`).

5. **UI Polish: Sidebar Collapse Animation**
   - Enhance the width transition in `src/components/Sidebar.tsx` and the main layout adjusting padding to ensure a smooth 200ms transition without layout jumps.

6. **Add Loading Skeletons**
   - Add `loading.tsx` files with pulse animations (`animate-pulse`) for the main dashboard pages (`overview`, `analytics`, `revenue`, `users`, `settings`) to show while data/charts are loading.

7. **Responsive Refinement**
   - Review and test pages at 375px, 768px, and 1280px widths to fix any overflow issues, particularly with tables, charts, and flex/grid layouts. Ensure proper text wrapping and horizontal scrolling for tables.

8. **Pre-commit Steps & Build**
   - Complete pre-commit steps to ensure proper testing, verifications, reviews and reflections are done.
   - Run `npm run build` to verify the build succeeds without errors.
