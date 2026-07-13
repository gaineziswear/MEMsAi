# MEMsAI Frontend

Next.js 16 App Router application for the MEMsAI platform.

## Local development

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Deployment

The repository root includes `vercel.json` so Vercel can deploy the app from the `frontend/` workspace while keeping the monorepo layout intact.

Recommended Vercel settings:

- Framework preset: Next.js
- Install command: `npm run vercel:install`
- Build command: `npm run vercel:build`
- Output directory: `frontend/.next`

The install script is defined in both the repository root and `frontend/package.json` so it works whether Vercel executes commands from the monorepo root or from the frontend project root. It deliberately removes `.next`, package-manager cache, and framework cache directories before `npm ci` so the next Vercel deployment starts from a clean dependency and build cache state.

## Validation

Run these checks before deployment:

```bash
npm run lint
npm run build
npm run vercel:install
npm run vercel:build
```
