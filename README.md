# immowap-web

Public marketing and SEO website for immowap.

## Architecture

- `www.immowap.de` / `immowap.de`: public website, content, SEO, contact, pricing and CTAs
- `app.immowap.de`: authenticated dashboard app, login, registration, projects and analyses
- `api.immowap.de`: FastAPI backend for auth, projects, analyses, data and ML services

This repository must not contain dashboard auth/session logic, analysis workflows, or direct API valuation calls. Public CTAs link users to `immowap-app`.

## Environment

Create a local `.env.local` from `.env.example` when needed:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Production should set:

```env
NEXT_PUBLIC_APP_URL=https://app.immowap.de
```

## Local Development

Run the marketing site and dashboard app separately:

```bash
npm ci
npm run dev
```

Start `immowap-app` on `http://localhost:3000` so dashboard, login, registration and analysis CTAs resolve correctly.
