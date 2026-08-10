# Hi, I'm Pilmee

Software Engineer building small, sharp TypeScript tools for people who like clean APIs, reusable UI, developer ergonomics, and things that do exactly what they promise.

I usually orbit around four ideas:

- **Developer tooling** that removes ceremony.
- **Typed API clients** that make external services feel native.
- **React libraries** with maintainable primitives.
- **Monitoring and package intelligence** for everyday engineering work.

<p>
  <a href="https://github.com/ElJijuna">
    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-ElJijuna-181717?style=flat-square&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/pilmee/">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-pilmee-0A66C2?style=flat-square&logo=linkedin&logoColor=white" />
  </a>
  <a href="mailto:pilmee@gmail.com">
    <img alt="Email" src="https://img.shields.io/badge/Email-pilmee@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" />
  </a>
  <a href="https://x.com/pilmee">
    <img alt="X" src="https://img.shields.io/badge/X-@pilmee-000000?style=flat-square&logo=x&logoColor=white" />
  </a>
</p>

**89 public repositories · 86 npm packages · TypeScript-first**

---

## Current Focus

| Track | What I am building | Repositories |
|---|---|---|
| **Runtime insight** | Browser monitoring, metrics UIs, package visibility, audit reports | [`monitor-api`](https://github.com/ElJijuna/monitor-api), [`monitor-ui`](https://github.com/ElJijuna/monitor-ui), [`MyNpmLens`](https://github.com/ElJijuna/MyNpmLens), [`web-audit-action`](https://github.com/ElJijuna/web-audit-action) |
| **API clients** | Zero-dependency typed clients for enterprise APIs and package registries | [`BitbucketDataCenterApiClient`](https://github.com/ElJijuna/BitbucketDataCenterApiClient), [`argocd-api-client`](https://github.com/ElJijuna/argocd-api-client), [`JiraDataCenterApiClient`](https://github.com/ElJijuna/JiraDataCenterApiClient), [`maven-api-client`](https://github.com/ElJijuna/maven-api-client), [`pypi-api-client`](https://github.com/ElJijuna/pypi-api-client) |
| **React + UI** | GNOME-inspired interfaces, data hooks, calendars, and microfrontends | [`gnome-ui`](https://github.com/ElJijuna/gnome-ui), [`api-hooks`](https://github.com/ElJijuna/api-hooks), [`calendar-react`](https://github.com/ElJijuna/calendar-react), [`open-comp`](https://github.com/ElJijuna/open-comp), [`floaty-widget`](https://github.com/ElJijuna/floaty-widget) |
| **Developer infrastructure** | Language metadata, terminal UI, repository intelligence, Vite plugins, and shared configs | [`code-languages`](https://github.com/ElJijuna/code-languages), [`blessed-components`](https://github.com/ElJijuna/blessed-components), [`baphy`](https://github.com/ElJijuna/baphy), [`vite-magic-tree-shaking`](https://github.com/ElJijuna/vite-magic-tree-shaking), [`super-configs`](https://github.com/ElJijuna/super-configs) |

---

## Featured Workbench

### Interface Systems

| Project | Description | Live / Docs |
|---|---|---|
| [`gnome-ui`](https://github.com/ElJijuna/gnome-ui) | React monorepo bringing GNOME Human Interface Guidelines to the web: core, icons, layout, hooks, charts, platform, and React components. | [gnome-ui.org](http://gnome-ui.org/) |
| [`api-hooks`](https://github.com/ElJijuna/api-hooks) | Typed React hooks for popular APIs, built on TanStack Query with consistent async state management. | [docs](https://eljijuna.github.io/api-hooks/) |
| [`calendar-react`](https://github.com/ElJijuna/calendar-react) | Accessible calendar components for React 19 with Temporal-based date handling. | [npm](https://www.npmjs.com/package/temporal-calendar-react) |
| [`open-comp`](https://github.com/ElJijuna/open-comp) | Microfrontend orchestrator — loads remote Module Federation components and renders them safely in a React app. | - |
| [`open-comp-microfrontends`](https://github.com/ElJijuna/open-comp-microfrontends) | Monorepo of `@open-comp/*` microfrontend widgets consumable via the `open-comp` orchestrator or as npm packages. | - |
| [`floaty-widget`](https://github.com/ElJijuna/floaty-widget) | Floating component with drag, collapse, expand, and pin behavior. | [docs](https://eljijuna.github.io/floaty-widget/) |

### Monitoring, Signals, and Package Intelligence

| Project | Description | Live / Docs |
|---|---|---|
| [`monitor-api`](https://github.com/ElJijuna/monitor-api) | Signal-based web app monitoring library for FPS, JS heap, long tasks, CLS, network requests, React renders, and custom events. | [docs](https://eljijuna.github.io/monitor-api/) |
| [`monitor-ui`](https://github.com/ElJijuna/monitor-ui) | Three-level React monitoring interface: compact live metrics, detailed inspector, and full dashboard. | [docs](https://eljijuna.github.io/monitor-ui/) |
| [`SSignal`](https://github.com/ElJijuna/SSignal) | Lightweight zero-dependency reactive signal built on the native `EventTarget` API. | - |
| [`MyNpmLens`](https://github.com/ElJijuna/MyNpmLens) | PWA for bookmarking npm packages and inspecting versions, dependencies, and metadata. | [app](https://eljijuna.github.io/MyNpmLens/) |
| [`MonitoringTool`](https://github.com/ElJijuna/MonitoringTool) | Lightweight solution for tracking metrics, performance, resource usage, alerts, logs, and visualizations. | - |
| [`MonitoringTool-DB`](https://github.com/ElJijuna/MonitoringTool-DB) | Database layer for MonitoringTool. | - |

### Typed API Clients

| Client | Description | Docs |
|---|---|---|
| [`github-api-client`](https://github.com/ElJijuna/github-api-client) | Typed GitHub API client for repos, branches, commits, collaborators, files, and token-based auth. | [docs](https://eljijuna.github.io/github-api-client/) |
| [`npmjs-api-client`](https://github.com/ElJijuna/npmjs-api-client) | Chainable npm Registry API client for metadata, versions, search, and download stats. | [docs](https://eljijuna.github.io/npmjs-api-client/) |
| [`BitbucketDataCenterApiClient`](https://github.com/ElJijuna/BitbucketDataCenterApiClient) | Zero-runtime-dependency TypeScript client for Bitbucket Data Center REST APIs. | [docs](https://eljijuna.github.io/BitbucketDataCenterApiClient/) |
| [`cwe-api-client`](https://github.com/ElJijuna/cwe-api-client) | TypeScript client for MITRE CWE lookup, categories, views, and hierarchy navigation. | [docs](https://eljijuna.github.io/cwe-api-client/) |
| [`bundlephobia-api-client`](https://github.com/ElJijuna/bundlephobia-api-client) | Fully typed Bundlephobia client for bundle size, version history, and similar packages. | [docs](https://eljijuna.github.io/bundlephobia-api-client/) |
| [`CheckmarxApiClient`](https://github.com/ElJijuna/CheckmarxApiClient) | API wrapper for Checkmarx. | - |
| [`BlackDuckApiClient`](https://github.com/ElJijuna/BlackDuckApiClient) | TypeScript client for Black Duck APIs. | - |
| [`JiraDataCenterApiClient`](https://github.com/ElJijuna/JiraDataCenterApiClient) | TypeScript client for Jira Data Center APIs. | - |
| [`osv-api-client`](https://github.com/ElJijuna/osv-api-client) | Client for OSV vulnerability data. | - |
| [`dockerhub-api-client`](https://github.com/ElJijuna/dockerhub-api-client) | Client workbench for Docker Hub APIs. | - |
| [`pypi-api-client`](https://github.com/ElJijuna/pypi-api-client) | Client workbench for PyPI APIs. | - |
| [`SnykApiClient`](https://github.com/ElJijuna/SnykApiClient) | Client workbench for Snyk APIs. | - |
| [`nuget-api-client`](https://github.com/ElJijuna/nuget-api-client) | TypeScript client for the NuGet REST API. | - |
| [`argocd-api-client`](https://github.com/ElJijuna/argocd-api-client) | TypeScript client for the Argo CD REST API. | - |
| [`ConfluenceDataCenterApiClient`](https://github.com/ElJijuna/ConfluenceDataCenterApiClient) | TypeScript client for Confluence Data Center REST APIs. | - |
| [`maven-api-client`](https://github.com/ElJijuna/maven-api-client) | TypeScript client for Maven Central search and artifact metadata. | [docs](https://eljijuna.github.io/maven-api-client/) |
| [`crates-api-client`](https://github.com/ElJijuna/crates-api-client) | TypeScript client for crates.io metadata, versions, and search. | [docs](https://eljijuna.github.io/crates-api-client/) |
| [`php-packagist-api-client`](https://github.com/ElJijuna/php-packagist-api-client) | TypeScript client for Packagist search, metadata, stats, and security advisories. | [docs](https://eljijuna.github.io/php-packagist-api-client/) |

### Build, Docs, and Automation

| Project | Description | Link |
|---|---|---|
| [`infinity-fetch`](https://github.com/ElJijuna/infinity-fetch) | Lightweight utility for flexible, reusable HTTP requests. | [docs](https://eljijuna.github.io/infinity-fetch/) |
| [`express-memorize`](https://github.com/ElJijuna/express-memorize) | Express middleware for response caching with configurable strategies and expiration. | [docs](https://eljijuna.github.io/express-memorize/) |
| [`vite-magic-tree-shaking`](https://github.com/ElJijuna/vite-magic-tree-shaking) | Auto-generates tree-shakeable library entries for Vite. | [docs](https://eljijuna.github.io/vite-magic-tree-shaking/) |
| [`vite-legacy-interop`](https://github.com/ElJijuna/vite-legacy-interop) | Vite plugin for legacy module interop. | [repo](https://github.com/ElJijuna/vite-legacy-interop) |
| [`vite-legacy-pass-through`](https://github.com/ElJijuna/vite-legacy-pass-through) | Vite plugin for passing legacy assets through without transformation. | [repo](https://github.com/ElJijuna/vite-legacy-pass-through) |
| [`gh-batch`](https://github.com/ElJijuna/gh-batch) | Batch operations for GitHub repositories using the GitHub CLI. | [npm](https://www.npmjs.com/package/gh-batch) |
| [`super-configs`](https://github.com/ElJijuna/super-configs) | Shared configurations for linters, formatters, tests, and project conventions. | - |
| [`code-languages`](https://github.com/ElJijuna/code-languages) | Typed, zero-dependency programming-language metadata and detection helpers. | [docs](https://eljijuna.github.io/code-languages/) |
| [`blessed-components`](https://github.com/ElJijuna/blessed-components) | Composable, typed terminal UI components for Blessed. | [docs](https://eljijuna.github.io/blessed-components/) |
| [`baphy`](https://github.com/ElJijuna/baphy) | Repository intelligence packages for DORA metrics, monorepos, Dockerfiles, README metadata, and CODEOWNERS. | - |
| [`typedoc-gnome-template`](https://github.com/ElJijuna/typedoc-gnome-template) | TypeDoc template with GNOME visual identity. | - |
| [`typedoc-action`](https://github.com/ElJijuna/typedoc-action) | GitHub Action for generating TypeDoc documentation. | - |

---

## npm Packages

I currently maintain **86 public npm packages**. This is a selected catalogue of the active and representative releases returned by `maintainer:pilmee`; monthly downloads cover 2026-07-10 through 2026-08-08.

### GNOME UI

| Package | Version | Monthly | Description |
|---|---:|---:|---|
| [`@gnome-ui/react`](https://www.npmjs.com/package/@gnome-ui/react) | `1.59.0` | 2,064 | React component library following GNOME Human Interface Guidelines. |
| [`@gnome-ui/web-components`](https://www.npmjs.com/package/@gnome-ui/web-components) | `1.9.1` | 1,357 | Framework-agnostic components built with native Custom Elements. |
| [`@gnome-ui/layout`](https://www.npmjs.com/package/@gnome-ui/layout) | `1.32.1` | 857 | Full-page layout shell components following GNOME HIG. |
| [`@gnome-ui/icons`](https://www.npmjs.com/package/@gnome-ui/icons) | `1.43.0` | 762 | Framework-agnostic icon definitions for gnome-ui. |
| [`@gnome-ui/charts`](https://www.npmjs.com/package/@gnome-ui/charts) | `1.36.0` | 611 | Adwaita-styled chart components for `@gnome-ui/react`. |
| [`@gnome-ui/core`](https://www.npmjs.com/package/@gnome-ui/core) | `1.42.4` | 543 | Framework-agnostic design tokens for the GNOME UI design system. |
| [`@gnome-ui/hooks`](https://www.npmjs.com/package/@gnome-ui/hooks) | `1.29.0` | 464 | React hooks that expose `@gnome-ui/platform` as idiomatic state. |
| [`@gnome-ui/platform`](https://www.npmjs.com/package/@gnome-ui/platform) | `1.29.0` | 456 | TypeScript API layer for communicating with the GNOME host process. |
| [`@gnome-ui/cli`](https://www.npmjs.com/package/@gnome-ui/cli) | `1.0.2` | 30 | CLI utilities for keeping GNOME UI packages up to date. |

### React Hooks and UI

| Package | Version | Monthly | Description |
|---|---:|---:|---|
| [`@api-hooks/bp`](https://www.npmjs.com/package/@api-hooks/bp) | `2.7.0` | 371 | React hooks for Bundlephobia, built on TanStack Query. |
| [`temporal-calendar-react`](https://www.npmjs.com/package/temporal-calendar-react) | `0.2.0` | 285 | Accessible calendar components for React 19. |
| [`@api-hooks/gh`](https://www.npmjs.com/package/@api-hooks/gh) | `2.6.0` | 260 | React hooks for the GitHub API. |
| [`@api-hooks/npm`](https://www.npmjs.com/package/@api-hooks/npm) | `2.6.0` | 197 | React hooks for the npm registry API. |
| [`@api-hooks/osv`](https://www.npmjs.com/package/@api-hooks/osv) | `1.5.1` | 133 | React hooks for the OSV API. |
| [`floaty-widget`](https://www.npmjs.com/package/floaty-widget) | `1.4.0` | 58 | Floating component with drag, collapse, expand, and pin behavior. |
| [`monitor-ui`](https://www.npmjs.com/package/monitor-ui) | `2.1.0` | 43 | Three-level React monitoring UI. |
| [`@open-comp/gh`](https://www.npmjs.com/package/@open-comp/gh) | `0.1.0` | 27 | GitHub-scoped microfrontend widgets for the open-comp ecosystem. |

### API Clients

| Package | Version | Monthly | Description |
|---|---:|---:|---|
| [`bitbucket-datacenter-api-client`](https://www.npmjs.com/package/bitbucket-datacenter-api-client) | `1.20.0` | 1,048 | TypeScript client for Bitbucket Data Center REST APIs. |
| [`argocd-api-client`](https://www.npmjs.com/package/argocd-api-client) | `1.7.0` | 476 | TypeScript client for the Argo CD REST API. |
| [`jira-datacenter-api-client`](https://www.npmjs.com/package/jira-datacenter-api-client) | `1.3.0` | 462 | TypeScript client for Jira Data Center REST APIs. |
| [`confluence-datacenter-api-client`](https://www.npmjs.com/package/confluence-datacenter-api-client) | `1.0.0` | 303 | TypeScript client for Confluence Data Center REST APIs. |
| [`gh-api-client`](https://www.npmjs.com/package/gh-api-client) | `1.16.3` | 248 | Typed GitHub API client for repositories, commits, branches, and files. |
| [`npmjs-api-client`](https://www.npmjs.com/package/npmjs-api-client) | `1.9.0` | 178 | TypeScript client for the npm Registry REST API. |
| [`bundlephobia-api-client`](https://www.npmjs.com/package/bundlephobia-api-client) | `1.1.0` | 84 | TypeScript client for the Bundlephobia public API. |
| [`osv-api-client`](https://www.npmjs.com/package/osv-api-client) | `1.0.0` | 65 | TypeScript client for the OSV REST API. |
| [`pkggo-api-client`](https://www.npmjs.com/package/pkggo-api-client) | `1.1.0` | 51 | TypeScript client for Go module metadata. |
| [`dockerhub-api-client`](https://www.npmjs.com/package/dockerhub-api-client) | `1.0.0` | 50 | TypeScript client for the Docker Hub REST API. |
| [`crates-api-client`](https://www.npmjs.com/package/crates-api-client) | `1.0.0` | 49 | TypeScript client for crates.io. |
| [`swiftpm-api-client`](https://www.npmjs.com/package/swiftpm-api-client) | `1.0.0` | 49 | TypeScript client for the Swift Package Registry and Index. |
| [`hex-api-client`](https://www.npmjs.com/package/hex-api-client) | `1.0.0` | 48 | TypeScript client for Hex.pm. |
| [`php-packagist-api-client`](https://www.npmjs.com/package/php-packagist-api-client) | `1.0.0` | 48 | TypeScript client for Packagist. |
| [`pub-api-client`](https://www.npmjs.com/package/pub-api-client) | `1.0.0` | 46 | TypeScript client for pub.dev. |
| [`nuget-api-client`](https://www.npmjs.com/package/nuget-api-client) | `1.0.0` | 45 | TypeScript client for NuGet. |
| [`pypi-api-client`](https://www.npmjs.com/package/pypi-api-client) | `1.0.0` | 45 | TypeScript client for PyPI. |
| [`maven-api-client`](https://www.npmjs.com/package/maven-api-client) | `1.0.0` | 44 | TypeScript client for Maven Central. |
| [`cwe-api-client`](https://www.npmjs.com/package/cwe-api-client) | `1.1.0` | 16 | TypeScript client for the MITRE CWE REST API. |

### Monitoring, Data, and Developer Tools

| Package | Version | Monthly | Description |
|---|---:|---:|---|
| [`code-languages`](https://www.npmjs.com/package/code-languages) | `1.43.16` | 4,233 | Structured programming-language metadata and detection helpers. |
| [`lowercase-object-keys`](https://www.npmjs.com/package/lowercase-object-keys) | `1.1.1` | 1,822 | Transform object keys to lowercase. |
| [`super-configs`](https://www.npmjs.com/package/super-configs) | `1.20.0` | 1,608 | Shared linting, formatting, testing, docs, and build configs. |
| [`pilmee-mysql`](https://www.npmjs.com/package/pilmee-mysql) | `1.0.2` | 869 | MySQL helper library. |
| [`blessed-components`](https://www.npmjs.com/package/blessed-components) | `1.17.0` | 654 | Composable, typed terminal UI components for Blessed. |
| [`express-memorize`](https://www.npmjs.com/package/express-memorize) | `2.10.0` | 455 | Zero-dependency, in-memory cache middleware for Express. |
| [`monitor-api`](https://www.npmjs.com/package/monitor-api) | `1.3.0` | 306 | Signal-based browser performance monitoring library. |
| [`vite-magic-tree-shaking`](https://www.npmjs.com/package/vite-magic-tree-shaking) | `1.1.0` | 251 | Generate tree-shakeable Vite library entries and exports. |
| [`vite-legacy-pass-through`](https://www.npmjs.com/package/vite-legacy-pass-through) | `1.3.0` | 193 | Keep selected legacy dependencies external in Vite/Rolldown. |
| [`vite-legacy-interop`](https://www.npmjs.com/package/vite-legacy-interop) | `1.1.0` | 178 | Wrap legacy CommonJS subpaths in ESM-compatible modules. |
| [`ssignal`](https://www.npmjs.com/package/ssignal) | `1.7.0` | 69 | Zero-dependency reactive signal built on `EventTarget`. |
| [`@baphy/dora`](https://www.npmjs.com/package/@baphy/dora) | `1.2.0` | 41 | DORA metrics calculator. |
| [`infinity-fetch`](https://www.npmjs.com/package/infinity-fetch) | `1.4.0` | 35 | Recursive fetch utility for paginated APIs. |
| [`very-simple-icons`](https://www.npmjs.com/package/very-simple-icons) | `1.0.0` | 28 | Map npm package names to Simple Icons assets. |
| [`query-client`](https://www.npmjs.com/package/query-client) | `1.4.0` | 26 | Query client with caching, retries, and subscriptions. |

---

## Toolbox

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=flat-square&logo=bun&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## Project Map

| Category | Repositories |
|---|---|
| **Design systems and UI** | [`gnome-ui`](https://github.com/ElJijuna/gnome-ui), [`calendar-react`](https://github.com/ElJijuna/calendar-react), [`api-hooks`](https://github.com/ElJijuna/api-hooks), [`open-comp`](https://github.com/ElJijuna/open-comp), [`floaty-widget`](https://github.com/ElJijuna/floaty-widget) |
| **Developer infrastructure** | [`code-languages`](https://github.com/ElJijuna/code-languages), [`blessed-components`](https://github.com/ElJijuna/blessed-components), [`baphy`](https://github.com/ElJijuna/baphy), [`express-memorize`](https://github.com/ElJijuna/express-memorize), [`infinity-fetch`](https://github.com/ElJijuna/infinity-fetch) |
| **API clients** | [`github-api-client`](https://github.com/ElJijuna/github-api-client), [`npmjs-api-client`](https://github.com/ElJijuna/npmjs-api-client), [`BitbucketDataCenterApiClient`](https://github.com/ElJijuna/BitbucketDataCenterApiClient), [`JiraDataCenterApiClient`](https://github.com/ElJijuna/JiraDataCenterApiClient), [`ConfluenceDataCenterApiClient`](https://github.com/ElJijuna/ConfluenceDataCenterApiClient), [`argocd-api-client`](https://github.com/ElJijuna/argocd-api-client), [`maven-api-client`](https://github.com/ElJijuna/maven-api-client), [`pypi-api-client`](https://github.com/ElJijuna/pypi-api-client), [`crates-api-client`](https://github.com/ElJijuna/crates-api-client), [`php-packagist-api-client`](https://github.com/ElJijuna/php-packagist-api-client) |
| **Monitoring and audits** | [`monitor-api`](https://github.com/ElJijuna/monitor-api), [`monitor-ui`](https://github.com/ElJijuna/monitor-ui), [`MonitoringTool`](https://github.com/ElJijuna/MonitoringTool), [`web-audit-action`](https://github.com/ElJijuna/web-audit-action), [`audit-report-html`](https://github.com/ElJijuna/audit-report-html) |
| **Build tooling** | [`vite-magic-tree-shaking`](https://github.com/ElJijuna/vite-magic-tree-shaking), [`vite-legacy-interop`](https://github.com/ElJijuna/vite-legacy-interop), [`vite-legacy-pass-through`](https://github.com/ElJijuna/vite-legacy-pass-through), [`typescript-library-multiple-workspace-template`](https://github.com/ElJijuna/typescript-library-multiple-workspace-template) |
| **Configuration and docs** | [`super-configs`](https://github.com/ElJijuna/super-configs), [`typedoc-gnome-template`](https://github.com/ElJijuna/typedoc-gnome-template), [`typedoc-action`](https://github.com/ElJijuna/typedoc-action), [`Developer-Portal`](https://github.com/ElJijuna/Developer-Portal) |
| **Apps and experiments** | [`MyNpmLens`](https://github.com/ElJijuna/MyNpmLens), [`lazy-npm-lens`](https://github.com/ElJijuna/lazy-npm-lens), [`bichito`](https://github.com/ElJijuna/bichito), [`Bash-Scripts`](https://github.com/ElJijuna/Bash-Scripts) |

---

## GitHub Stats

<p align="left">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=ElJijuna&show_icons=true&theme=default&hide_border=true&count_private=true" />
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ElJijuna&layout=compact&theme=default&hide_border=true&langs_count=8" />
</p>

---

## Outside the Editor

Guitar and trumpet player. Tennis. Painting. Usually somewhere between a reusable abstraction and a melody that refuses to leave.

---

<sub>Updated from public GitHub and npm metadata on 2026-08-09.</sub>
