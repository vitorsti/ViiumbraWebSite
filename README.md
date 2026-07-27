# ViiUmbra Works — Studio Website

Static marketing site for **ViiUmbra Works**, an independent game development studio. Built for Google Play / Google developer listing (company website + privacy policy URL).

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home — brand hero |
| `/about.html` | About the studio |
| `/contact.html` | Contact (placeholder email) |
| `/privacy.html` | Privacy Policy (for Play Console) |

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Output lands in `dist/`.

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) that builds and publishes `dist/` to GitHub Pages on push.

1. Push the repo to GitHub
2. **Settings → Pages → Build and deployment → Source:** GitHub Actions
3. After the workflow succeeds, the site is at:
   - `https://<user>.github.io/<repo>/`
   - Privacy: `https://<user>.github.io/<repo>/privacy.html`

You can also host `dist/` on Cloudflare Pages or Netlify. Vite uses `base: './'` so project-path Pages URLs work.

## Placeholder checklist

Search the repo for `TODO: replace` and `PLACEHOLDER`, then update:

- [ ] Public contact email (`contact@viiumbra.works`)
- [ ] Canonical / domain URLs in HTML comments
- [ ] Legal entity name and mailing address on Privacy Policy
- [ ] Privacy sections to match real game SDKs / data practices
- [ ] Logo asset (site currently uses a text wordmark)
- [ ] Favicon if you replace `public/favicon.svg`

## Stack

Vite + vanilla HTML / CSS / JS (multi-page).
