# David Moriarty — Portfolio

Personal portfolio site built with Astro, focused on clarity, performance, and maintainability.

This site showcases selected projects, outlines my approach to full-stack development, and serves as a lightweight, static-first web presence.

---

## Tech Stack

- **Astro** (static site generation)
- **TypeScript**
- **Tailwind CSS**
- **Bun** (runtime + package manager)

---

## Project Structure

```text
 ./
├──  astro.config.mjs
├──  bun.lock
├──  package.json
├──  public/
│   └── 󰕙 favicon.svg
├── 󰂺 README.md
├── 󰣞 src/
│   ├──  assets/
│   │   ├──  icons/
│   │   ├──  images/
│   │   └──  screenshots/
│   ├──  components/
│   │   ├──  Container.astro
│   │   ├──  Footer.astro
│   │   ├──  Heading.astro
│   │   ├──  Navbar.astro
│   │   ├──  ProjectCard.astro
│   │   └──  Section.astro
│   ├──  content/
│   │   └──  projects/
│   ├──  data/
│   │   └──  projects.ts
│   ├──  layouts/
│   │   └──  Layout.astro
│   ├──  pages/
│   │   ├──  index.astro
│   │   └──  projects/
│   ├──  styles/
│   │   └──  global.css
│   └──  utils/
│       ├──  cn.ts
│       └──  title.ts
└──  tsconfig.json
```

---

## Development

All commands are run from the project root

| Command            | Description                                      |
| :----------------- | :----------------------------------------------- |
| `bun install`      | Install dependencies                             |
| `bun run dev`      | Start local dev server (localhost:4321)          |
| `bun run build`    | Build the production site to `dist/`             |
| `bun run preview`  | Preview the production build locally             |

---

## Notes on Architecture

- Layout, Section, and Container components are **content-agnostic**
- Typography is handled via reusable helpers (e.g. Heading)
- Pages control semantic structure (h1-h6, content flow)
- Dynamic project pages are statically generated using *getStaticPaths*
- Styling favors composable utilities (cn, Tailwind) over abstractions
- Utilizes Bun for runtime and package management
- Utilizes Astro for static site generation

---

## License

MIT
