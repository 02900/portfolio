# Portfolio

Source for [02900.github.io](https://02900.github.io/).

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4, exported as a static site.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build   # static export to ./out
```

## Deploy

The built `out/` directory is published to the
[02900.github.io](https://github.com/02900/02900.github.io) repository, which GitHub Pages
serves from the root of `main`.

```bash
pnpm build
# copy ./out into the 02900.github.io checkout, commit and push
```

Content lives in a single file: [`lib/data.ts`](lib/data.ts).
