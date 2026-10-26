# Joshua Koppelman — personal website

Seven pages about restaurants, consumer brands, business, and life beyond a resume. Built from Joshua's own brief and supplied images, with clearly labeled spaces for missing photos and personal copy.

## Make a change

1. Create a branch from `main`.
2. Edit copy in `content/site.json`, layouts in `src/app.js`, or design in `src/styles.css`.
3. Add photos to `public/assets/`. Fill a placeholder through `photoSources` in `content/site.json`, for example `"kitchen": "assets/kitchen.jpg"`.
4. Run `npm run check` and `npm run build`.
5. Include the regenerated `docs/` output and open a pull request. Review and merge to `main` to update the connected Vercel website and GitHub Pages (once enabled) at their existing addresses.

Vercel uses `npm run build` and publishes `dist/`. There are no package dependencies, environment variables, or database. Branch deployments are previews; `main` is production. A public Sites mirror provides an alternative address for visitors whose network cannot reach Vercel. Edits made in this conversation can be republished to the same mirror after merging.

## Preview locally

```sh
npm run build
npm start
```

Open http://localhost:3000. Python 3 serves the static files. Node.js builds the site; no package installation is required.

## Project layout

| File | Purpose |
| --- | --- |
| `content/site.json` | Default copy and placeholder photo sources |
| `src/app.js` | Page templates and optional local draft editor |
| `src/styles.css` | Design and mobile layouts |
| `public/assets/` | Real photos, RBI logo, and favicon |
| `prerender.cjs` | Renders all seven pages into static HTML |
| `vercel.json` | Build and publishing settings |

Every page includes its full content in HTML. JavaScript enhances editing but is not required to read the site or follow navigation. Optional web fonts load without blocking the page.

## Content still to add

- Restaurant, kitchen, professional, food, and travel photos.
- Hyperion title, dates, responsibilities, and a specific lesson.
- PROVE IT visuals, individual contribution, and reflection.
- Personal restaurant recommendations and travel stories.
- A current resume PDF. The older supplied resume is not published and no phone number is displayed.

## Optional browser draft preview

Add `?edit=1` to an address to show **Customize draft**. These edits stay in that browser and do not publish. Export the JSON and send it back to incorporate your changes through a pull request. Resume uploads are session-only previews and must be sent separately for final publication.

## Publishing notes

The repository contains website source and approved website assets only. Private original uploads and authentication material are excluded. Generated `dist/`, local hosting identity, and provider credentials are ignored by Git. Draft pages have `noindex, nofollow` metadata until Joshua is ready for search indexing.

## GitHub Pages: one-time setup

Open repository Settings → Pages. Under Build and deployment choose **Deploy from a branch**, select **main** and **/docs**, and save. The generated `docs/` directory is committed alongside source changes. GitHub then publishes updates after each merge to `main`. The expected address is https://jpk143-a11y.github.io/joshua-koppelman-website/; it is not live until GitHub Pages is enabled and its first deployment completes.
