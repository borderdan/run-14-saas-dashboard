# Contributing Guidelines

Thank you for your interest in contributing to this project! We welcome contributions to help make this SaaS Analytics Dashboard better.

To ensure consistency and high quality across the codebase, please adhere to the following guidelines:

## Code Standards

*   **TypeScript Strict Mode**: The project uses TypeScript in strict mode. The use of `any` is strictly prohibited. Always type your variables, parameters, and return types explicitly.
*   **Component Size Limits**: React components should be kept small and focused. Restrict components to a maximum of 300 lines of code. If a component grows beyond this limit, refactor it into smaller, reusable sub-components.
*   **Named Exports**: Use named exports exclusively for all components, utilities, and constants. The only exceptions are Next.js routing files (such as `page.tsx`, `layout.tsx`, `error.tsx`, etc.), which require default exports.
*   **Styling**: Use Tailwind CSS for all styling. Do not use inline styles, CSS modules, or libraries like styled-components. Leverage the provided `shadcn/ui` components for consistent UI elements.
*   **Mock Data Generation**: When generating mock data for tests or UI placeholders, use deterministic, seeded pseudo-random data generators instead of `Math.random()`. This ensures reproducible builds and testing scenarios.

## Testing Rules

*   **Unit Tests**: Place unit tests in the `__tests__/` directory. Test files should follow the naming convention `[filename].test.ts` or `[filename].test.tsx`.
*   **Testing Frameworks**: Execute unit tests using `npx vitest run`. We use `@testing-library/react` alongside `vitest` and `jsdom` for component testing.
*   **Test Before PR**: Always test your code locally before opening a Pull Request. Run the following commands to verify your changes:
    *   `npm run build` to verify the production build succeeds.
    *   `npm run lint` to ensure there are no linting errors.
    *   `npx vitest run` to ensure all tests pass.
    *   `npx tsc --noEmit` to verify there are no TypeScript compilation errors.
*   **Do not open a PR with broken code or failing tests.**

## Dependency Constraints

*   Install required dependencies using `npm` (or `pnpm`/`yarn` as specified by the project lockfile) as needed for your task.
*   Avoid adding unnecessary dependencies that bloat the bundle size. Always evaluate if the functionality can be implemented natively or with existing libraries.

## Committing Rules

*   **Build Artifacts**: Never commit build artifacts or generated files. This includes directories like `dist/`, `build/`, `.next/`, `node_modules/`, and files like `*.log` or `verification*`. Ensure your `.gitignore` is up to date.

Thank you for contributing!
