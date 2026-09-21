# Adobe Rose Restaurant — work in progress

**Status: currently being built. This is an in-progress portfolio snapshot, not a completed or launched website.**

A restaurant website build using HTML, Tailwind CSS, JavaScript, and Vite. The current files include a restaurant homepage, dinner and catering menu pages, restaurant photography, and navigation to dining, events, and contact information.

## Included in this build

- Homepage with restaurant, food, catering, and live-music content.
- Dinner and catering menu pages with local menu images.
- Mobile navigation, menu-category controls, and a newsletter dialog.
- Event inquiry form markup with an explicit unconfigured-provider message.
- A content manifest, design notes, and deployment instructions.

## Run locally

Use Node.js 20+ and npm from the repository root:

Large media files use Git LFS. Install Git LFS, clone this repository, then run the following from the repository root to retrieve the original assets before building:

```bash
git lfs install
git lfs pull
npm ci
npm run dev
```

To compile and preview the current build:

```bash
npm run build
npm run preview
```

## Still in progress

The event inquiry form still contains `REPLACE_WITH_FORM_ID`; it does not have a configured Formspree delivery destination. Current business hours need confirmation because the source material contains conflicting schedules. Content review, responsive and interaction checks, form delivery, and deployment remain launch work.

Uploading this repository does not deploy the site or change the restaurant's domain. No completed client engagement, business results, or conversion improvement is claimed here.

## Source and assets

The build uses restaurant content and media collected from the [existing Adobe Rose site](https://adoberoserestaurant.com). Photography, logos, and menu assets retain their respective ownership; this repository does not grant rights to reuse them. Asset permission checks remain part of the existing launch checklist.

## Documentation

- [Content manifest](content-manifest.md)
- [Design notes](DESIGN.md)
- [Deployment checklist](DEPLOYMENT.md)

These are development records. Any historical checks in them are not a statement that the site is finished. See [portfolio verification](PORTFOLIO-STATUS.md) for this upload's checks.
