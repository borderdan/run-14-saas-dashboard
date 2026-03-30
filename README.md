# SaaS Analytics Dashboard

A modern, high-performance SaaS Analytics Dashboard built with Next.js 14 App Router, TypeScript, Tailwind CSS, and shadcn/ui.

## Project Overview

This dashboard provides comprehensive analytics and insights for a SaaS platform. Key features include tracking revenue, monitoring user engagement, visualizing pricing tier distributions, and analyzing churn rates. The application is built with a focus on modern web standards, leveraging the App Router for server components, fast page transitions with Framer Motion, and robust charting using Recharts.

## Screenshots

*(Placeholder for dashboard screenshot)*
![Dashboard Overview](#)

*(Placeholder for revenue analytics)*
![Revenue Analytics](#)

*(Placeholder for users table)*
![Users Management](#)

## Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
*   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Charts**: [Recharts](https://recharts.org/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)
*   **Testing**: [Vitest](https://vitest.dev/), React Testing Library

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
*   [npm](https://www.npmjs.com/) (v9 or higher recommended)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/saas-analytics-dashboard.git
    cd saas-analytics-dashboard
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Currently, the project runs out of the box without required environment variables. However, a `.env.example` file is provided at the root of the project. If you plan to add integrations (like databases, auth providers, or API endpoints), copy this file and add your actual variables to `.env.local`:

```bash
cp .env.example .env.local
```

### Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application. The application supports hot-reloading for a seamless developer experience.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

After building, you can start the production server to test it locally:

```bash
npm run start
```

## Project Structure

```
src/
├── app/                  # Next.js App Router (pages, layouts, error handling)
│   ├── (auth)/           # Authentication routes
│   ├── (dashboard)/      # Dashboard routes (analytics, overview, etc.)
│   ├── globals.css       # Global stylesheet (Tailwind directives)
│   └── layout.tsx        # Root layout with theme provider
├── components/           # Reusable React components
│   ├── revenue/          # Revenue specific components
│   ├── settings/         # Settings specific components
│   ├── ui/               # shadcn/ui generic components
│   └── users/            # User management specific components
├── lib/                  # Utility functions and configurations
│   ├── data.ts           # Data fetching logic
│   ├── mockData.ts       # Mock data generation
│   └── utils.ts          # Generic helpers
├── middleware.ts         # Next.js Middleware
└── types/                # Global TypeScript definitions
```

## Available Scripts

In the project directory, you can run the following scripts:

*   `npm run dev`: Starts the Next.js development server.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Runs ESLint to check for code issues.
*   `npx vitest run`: Runs the test suite using Vitest.
*   `npx tsc --noEmit`: Type-checks the project without emitting compiled files.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Deploying to Vercel

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import your project into Vercel.
3.  Vercel will automatically detect that you are using Next.js and will configure the build settings appropriately:
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `.next`
    *   **Install Command**: `npm install`
4.  Add any necessary environment variables in the Vercel dashboard.
5.  Click **Deploy**.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, code style, testing rules, and the process for submitting pull requests to us.
