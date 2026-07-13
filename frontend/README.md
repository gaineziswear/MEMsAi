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
- Install command: `cd frontend && npm ci`
- Build command: `cd frontend && npm run build`
- Output directory: `frontend/.next`

## Validation

Run these checks before deployment:

```bash
npm run lint
npm run build
```
