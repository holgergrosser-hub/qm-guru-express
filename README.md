# QM-Guru Express – Landing Page

Vite + React Landingpage mit Tailwind, React Router und Anfrage-Formular.

## Setup

Install:

```bash
npm install
```

Env anlegen:

- Kopiere `.env.example` nach `.env.local` und trage Werte ein.

Wichtige Variablen:

- `VITE_FORM_ENDPOINT` – Google Apps Script Endpoint (optional)
- `VITE_PHONE` – Telefonnummer
- `VITE_EMAIL` – E-Mail

## Dev

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Netlify / SPA Routing

- SPA-Redirects sind enthalten: `public/_redirects` und `netlify.toml`.
