# ViiUmbra Works — Website Spec

## 1. Purpose

Public studio website for **ViiUmbra Works**, an independent game development company.

Goals:

1. Satisfy Google Play / Google developer **website URL** requirements.
2. Provide a durable **Privacy Policy** URL for Play Console.
3. Present a minimal branded presence (Home, About, Contact, Privacy).

Live site: https://vitorsti.github.io/ViiumbraWebSite/  
Repository: https://github.com/vitorsti/ViiumbraWebSite

---

## 2. Scope

### In scope

| Page | Path | Role |
|------|------|------|
| Home | `index.html` | Brand-first hero, primary CTA |
| About | `about.html` | Studio who/what |
| Contact | `contact.html` | Public contact (mailto) |
| Privacy | `privacy.html` | Indie-studio privacy policy skeleton |

### Out of scope (unless requested later)

- Games portfolio / store links
- CMS, blog, auth
- Analytics SDKs
- Contact form backend
- Custom domain / DNS (optional later)

---

## 3. Tech stack

- **Build:** Vite (multi-page)
- **UI:** Vanilla HTML + CSS + JS
- **Shared CSS:** `src/styles.css`
- **Shared JS:** `src/main.js` (nav toggle, reveal-on-scroll, hero parallax, year stamp)
- **Static assets:** `public/` (e.g. `favicon.svg`)
- **Config:** `vite.config.js` with `base: './'` and HTML rollup inputs for all pages
- **CI/CD:** `.github/workflows/deploy-pages.yml` builds and deploys `dist/` to GitHub Pages on push to `main`

---

## 4. Information architecture

```
Home
 ├── About
 ├── Contact
 └── Privacy
```

Navigation and footer appear on every page with matching structure and `aria-current="page"` on the active link.

---

## 5. Design system

### Brand

- Name: **ViiUmbra Works**
- Wordmark: text-based until a logo asset is supplied
- Mood: umbra / shadow / dusk — atmospheric, not flashy

### Color tokens (CSS variables)

| Token | Role | Value |
|-------|------|-------|
| `--ink` | Page background | `#0c0e12` |
| `--snow` | Primary text / brand | `#eef1f6` |
| `--mist` | Secondary text | `#8b95a8` |
| `--teal` | Accent | `#3d8b8a` |
| `--teal-bright` | Accent hover / emphasis | `#5aadaa` |

Avoid purple-on-white, cream/terracotta “AI default,” and broadsheet newspaper layouts.

### Typography

- Display: **Syne**
- Body: **Source Sans 3**
- Loaded via Google Fonts

### Motion

- Fade-up `.reveal` on intersection
- Soft hero plane parallax on scroll
- Ambient light-shift on `.atmosphere`
- Disabled / reduced when `prefers-reduced-motion: reduce`

### Layout rules

- First viewport (Home): brand + one headline + one short supporting sentence + one CTA group + atmospheric background
- No cards in the hero
- One job per section
- Mobile: hamburger nav; desktop: inline nav with underline hover

---

## 6. Content placeholders

Replace before treating the site as final for legal/store use:

| Item | Current placeholder | Marker |
|------|---------------------|--------|
| Contact email | `contact@viiumbra.works` | `TODO: replace` |
| Canonical / custom domain | Relative / GitHub Pages URL | HTML comments |
| Legal entity / address | Comments on Privacy | `PLACEHOLDER` / `TODO: replace` |
| Per-game data practices | Generic privacy skeleton | Privacy §2 note |
| Logo | Text wordmark | — |

---

## 7. Privacy policy requirements

`privacy.html` must remain:

- Publicly reachable without login
- Linked from site chrome (nav/footer)
- Suitable as Play Console **Privacy policy URL**

Current last-updated date in page copy: **July 26, 2026** (update when policy text changes).

---

## 8. Build & deploy

### Local

```bash
npm install
npm run dev      # development
npm run build    # output → dist/
npm run preview  # preview production build
```

### Production URLs (GitHub Pages)

| Use | URL |
|-----|-----|
| Developer website | https://vitorsti.github.io/ViiumbraWebSite/ |
| Privacy policy | https://vitorsti.github.io/ViiumbraWebSite/privacy.html |

### Path rule

All in-site links and script/icon references must stay **relative** (e.g. `./privacy.html`) so the site works under the `/ViiumbraWebSite/` project path.

---

## 9. Success criteria

- [x] Four pages share consistent branding and nav
- [x] `npm run build` succeeds
- [x] Privacy is a standalone URL
- [x] Deployed via GitHub Pages Actions
- [ ] Placeholders replaced with real studio contact/legal details
- [ ] Privacy text matched to actual shipped game SDKs / data collection

---

## 10. Change policy

When changing pages, brand tokens, routes, or deploy URLs, update this spec and keep `.cursorrules` aligned.
