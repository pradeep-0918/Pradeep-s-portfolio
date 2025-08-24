Hosting the web app on GitHub Pages

This repository contains a web app in `_/apps/web` built with Vite and `react-router`.

Quick steps to enable automatic deployments:

1. Push your repository to GitHub and ensure the default branch is `main`.
2. The repository already has a GitHub Actions workflow at `.github/workflows/deploy-web.yml` which builds `_/apps/web` and deploys the `dist` to the `gh-pages` branch when you push to `main`.

How it works:
- The workflow runs `npm ci` and `npm run build` under `_/apps/web`.
- The built files are pushed to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

Enabling GitHub Pages:
- After the workflow has pushed to `gh-pages`, go to your repository on GitHub → Settings → Pages.
- Set the source to `gh-pages` branch and save.
- The site will be available at `https://<your-username>.github.io/<repo-name>/`.

Notes & troubleshooting:
- If your site uses client-side routing, ensure `404.html` is handled. Vite's build output works with SPA routing when served from the root.
- If your repo is hosted under an organization or custom domain, configure accordingly.

Local test:
- To test locally, run:

```
cd _/apps/web
npm install
npm run build
npx serve dist
```

Replace `npx serve dist` with any static server of your choice.
