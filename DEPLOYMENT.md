# Live hosting and future edits

Public website (independent of Vercel): https://joshua-koppelman.cloudygoat514.chatgpt.site/

Vercel production: https://joshua-koppelman-website.vercel.app/

Source: https://github.com/jpk143-a11y/joshua-koppelman-website

## Editing workflow

Create a branch, edit `content/site.json`, `src/`, or `public/assets/`, run `npm run check` and `npm run build`, and open a pull request. Merging `main` automatically deploys to the connected Vercel project. Its production address stays the same. Browser-only draft edits do not publish.

The public Sites mirror uses a separate native publishing workflow. When making changes in ChatGPT, merge the GitHub pull request, then build and republish the same Sites project to keep its public address current. A GitHub merge alone does not update the mirror. Preserve `access_mode: public`.

## Existing resources to reuse

- GitHub repository: `jpk143-a11y/joshua-koppelman-website`; production branch: `main`.
- Vercel project: `prj_iu64BUxAB82sjPR9sIFYe22bcBjt`; team: `team_RBuk4xiyhDuLbFfmJjIpwSaG` (`joshisasquid`).
- Sites project: `appgprj_6adfd6511d24819196e960e32a283979`.
- Current managed mirror checkout: `/workspace/sites/joshua-koppelman-public`.

These identifiers are not credentials. Get a fresh short-lived source credential from Sites when needed; never store tokens in the repository. If the local mirror checkout is missing, recover its current source with the Sites skill using the same project ID. Never create a duplicate project for a routine edit.

## GitHub Pages alternative

GitHub Pages is prepared in committed `docs/` output. Enable it once at https://github.com/jpk143-a11y/joshua-koppelman-website/settings/pages with source **Deploy from a branch**, branch **main**, directory **/docs**. The expected address after activation is https://jpk143-a11y.github.io/joshua-koppelman-website/. Do not report it as live until verified. Future source changes must run `npm run build` and include refreshed `docs/` in their PR. No token or account password belongs in this repository.
