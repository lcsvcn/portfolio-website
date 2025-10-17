# Copilot Instructions for this Repo

Purpose: Help AI coding agents work effectively in this React + Bun portfolio project. Keep guidance concise, concrete, and codebase-specific.

## Big picture
- Stack: React 19 (CRA), Bun 1.2+, Biome for lint/format, GitHub Pages deploy, PostHog analytics.
- App entry: `src/index.js` wraps `<App />` with `PostHogProvider`. Service worker stays unregistered.
- App shell: `src/App.js` renders `<Main />` and dev-only `<PostHogDebugger />`.
- Composition: `src/containers/Main.js` composes sections (Greeting, Skills, StackProgress, WorkExperience, Projects, Talks, StartupProject, Profile, Footer, Top) and wraps them in `ThemeProvider` from `src/contexts/ThemeContext.js`.
- Content model: Most copy, links, and lists live in `src/portfolio.js` and are consumed by components/containers.

## Conventions and patterns
- Theming: `ThemeProvider` sets `data-theme="light|dark"` on `<html>` and persists to `localStorage("theme")`. Use `useTheme()` for toggling; don’t roll your own theme state.
- Sections: Each section is a container under `src/containers/*` with a matching CSS file. Keep section IDs stable (greeting, skills, experience, projects, contact) to match header anchors in `src/components/header/Header.js`.
  - Note: The header also links to an "opensource" anchor. If you add/restore an Open Source section, ensure the section root uses id="opensource" to satisfy the nav.
- Components vs containers: Presentational components under `src/components/**` (e.g., `Button`, `DarkModeToggle`) are reused by containers under `src/containers/**`.
- Data-driven UI: Pull text/images/links from `src/portfolio.js`. Add fields there and thread via props/imports instead of hardcoding in components.
- Animations: Use `react-awesome-reveal` (`<Fade />`) as in `containers/greeting/Greeting.js` for entrance effects.
- Icons: `softwareSkills` use Font Awesome class names from `portfolio.js`.
- Analytics: Use hooks from `src/hooks/usePostHog.js`:
  - `usePostHogTracker()` to capture events (e.g., button clicks).
  - `usePostHogPageView(pageName)` for section/page views.
  - `usePostHogIdentify()` to associate a user.
  Only active when `PostHogProvider` is present; extra debug logs when `NODE_ENV=development`. A small debugger UI lives in `src/components/posthog/PostHogDebugger.js` and is shown only in development.

## Build, run, test
- Use Bun scripts defined in `package.json`:
  - `bun start` → CRA dev server at http://localhost:3000/portfolio-website
  - `bun run build` → production build to `build/`
  - `bun run lint` / `bun run lint:fix` → Biome lint
  - `bun run format` / `bun run format:fix` → Biome format
  - `bun test` → CRA tests
  - `bun run deploy` → deploy `build/` to `gh-pages` via `gh-pages`
- Node is used by CRA build; Bun is the package manager/runtime. `packageManager` is pinned to `bun@1.2.13`.

## Project-specific gotchas
- Public path: `package.json.homepage` is `https://lcsvcn.github.io/`; CRA serves app under `/portfolio-website` locally. Use relative asset paths or `process.env.PUBLIC_URL` if adding static links.
- Env vars: CRA requires `REACT_APP_*`. For PostHog, set `REACT_APP_POSTHOG_KEY` and `REACT_APP_POSTHOG_HOST`. See `POSTHOG_QUICK_START.md`.
- Images: Many components import images via `require()` from `src/assets/images`. Keep WebP/SVG under that folder and import consistently.
- Accessibility linting: Biome config relaxes some a11y rules (like click-without-keyboard). Keep existing patterns unless explicitly improving a11y.
- Service worker: Stays unregistered (`serviceWorker.unregister()`); don’t enable PWA unless explicitly requested.
- Dockerfile is legacy (Node 10) and not used with current Bun setup; avoid relying on it.

## How to add features
- New section:
  1) Create `src/containers/<Name>/<Name>.js|css`.
  2) Import and insert into `src/containers/Main.js` in the desired order.
  3) Add matching navigation anchor in `src/components/header/Header.js` and ensure the section root has the ID.
  4) Put configurable data in `src/portfolio.js`.
- Track interactions: In your component, `const track = usePostHogTracker();` then `track('event_name', { context })`.
- Theme-aware UI: Read `const { theme } = useTheme()` and style via `[data-theme="dark"]` selectors or existing CSS variables.

## Code style
- Prefer functional React components with hooks. Legacy class usage is limited to `Main`.
- Keep imports path-local within `src/` and avoid absolute imports.
- Format with Biome (double quotes, width 120). Run `bun run format:fix` before commits; Husky may enforce.

## Key files to know
- `src/index.js` – App bootstrap + PostHog provider
- `src/App.js` – App shell + dev debugger
- `src/containers/Main.js` – Sections composition + ThemeProvider
- `src/contexts/ThemeContext.js` – Theme state & API
- `src/hooks/usePostHog.js` – Analytics hooks
- `src/portfolio.js` – Site content configuration
- `package.json` – Scripts and toolchain
- `biome.json` – Lint/format rules
- `POSTHOG_QUICK_START.md` – Analytics quick setup

If anything here seems off or incomplete (e.g., section IDs, deployment flow), tell me what you’re trying to do and I’ll refine these instructions.