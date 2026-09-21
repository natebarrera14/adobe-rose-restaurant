# Deployment handoff

## Recommended host: Vercel

This is a static Vite build, so Vercel provides the simplest preview-to-production workflow with no server configuration.

### Prerequisites and local build

- Node.js 20 or newer and npm.
- Install: `npm install`
- Production build: `npm run build`
- Output directory: `dist`
- Local production preview: `npm run preview`

### Vercel

1. Push this project folder to a Git repository.
2. In Vercel, choose **Add New → Project**, import the repository, and set the project root to this folder if it lives in a larger repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy to the generated preview URL and complete the smoke tests below.
5. Add `adoberoserestaurant.com` and `www.adoberoserestaurant.com` under **Settings → Domains**. Confirm Vercel's project-specific DNS recommendations before changing live DNS.
6. Promote the approved preview to production, then set the preferred domain and redirect its alternate.

Current general-purpose Vercel values, verified against [Vercel's domain setup documentation](https://vercel.com/docs/domains/set-up-custom-domain) on September 8, 2026:

| Type | Host/Name | Value/Target | Purpose |
|---|---|---|---|
| A | `@` | `76.76.21.21` | Routes the apex domain to Vercel |
| CNAME | `www` | `cname.vercel-dns-0.com` | Routes the `www` hostname to Vercel |

Vercel may show project-specific values; those dashboard values take precedence. Remove conflicting `A`, `AAAA`, or `CNAME` records before switching. DNS propagation and SSL issuance can take time.

### Netlify alternative

1. Push the project to a Git repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Set the base directory to this folder if needed, build command to `npm run build`, and publish directory to `dist`.
4. Deploy to a draft URL, run the smoke tests, then add the custom domain in **Domain management**.
5. Use the DNS targets Netlify displays for that exact site; do not reuse the Vercel records above.

## Form provider configuration

The event inquiry form is intentionally not live. The business owner must create a Formspree form and replace `REPLACE_WITH_FORM_ID` in `index.html` with the real Formspree ID. No recipient address, access key, or successful delivery has been fabricated. After configuration, send one clearly labeled test inquiry with the recipient's permission.

## Launch decisions

- Confirm the current operating hours with Adobe Rose. The source site publishes conflicting schedules; the current build displays the schedule repeated on most pages and prominently tells visitors to call ahead.
- Confirm that the restaurant owns or has permission to reuse the source-site photography included under `public/images/` before publishing the redesign.

## Smoke test

- Load the home page on a 375px phone and a 1280px desktop.
- Open and close mobile navigation; activate each internal section link.
- Verify the phone, email, directions, menu, newsletter, and Facebook links.
- Confirm all images and web fonts load without console errors.
- Submit invalid form data and confirm native validation appears.
- After adding the real Formspree ID, submit a labeled test and confirm delivery.
- Confirm both custom hostnames resolve, redirect as intended, and show a valid HTTPS certificate.
