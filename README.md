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

## Deploy

Upload or connect the `dist/` folder to any static host, for example:

- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/) (set Vite `base` if using a project path)

After deploy, use:

- **Developer website:** `https://your-domain/`
- **Privacy policy URL:** `https://your-domain/privacy.html`

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
