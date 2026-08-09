# MARCEL — DIRT ON TIRES

Static one-page profile site for Marcel, an Indonesian creator documenting
machines, places, and people that choose the long way through.

## GitHub Pages

The production files are generated in `dist/public`:

```bash
pnpm install
pnpm --filter @workspace/web run build
```

Publish the contents of `dist/public` with GitHub Pages. The build uses
portable relative asset paths and includes `404.html` so the site continues to
work when hosted from a repository URL such as:

```text
https://USERNAME.github.io/REPOSITORY/
```

The source entry point is `index.html`. Update the GitHub and Instagram links
in `src/App.tsx` with Marcel's real profiles before publishing.