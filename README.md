# aetheris-nitor

Frontend de [EPI-Aetheris](https://github.com/aetheris-team/EPI-Aetheris),
el sistema descriptivo de vigilancia epidemiológica para El Salvador. Es el
sitio que se publica en https://epi-aetheris.dev.

## Stack

Astro 7 + TypeScript, Tailwind CSS 4, ECharts para los gráficos y mapas
departamentales en SVG propio (sin Leaflet ni teselas externas). Sin React ni
Vue.

## Desarrollo

```bash
corepack enable          # pnpm sale de packageManager (pnpm 9); no usar npm
pnpm install
pnpm dev                 # http://localhost:4321
```

El sitio llama a la API en `PUBLIC_API_URL` o, si no está definida, en
`http://localhost:8000`. La API y la base se levantan desde el monorepo
EPI-Aetheris con `docker compose up`.

Comprobaciones (las mismas que corre `.github/workflows/ci.yml` en cada PR):

```bash
pnpm lint && pnpm format:check && pnpm check && pnpm test:unit
pnpm test:e2e            # Playwright; necesita la API levantada
```

## Relación con el monorepo

Este repo es la fuente del frontend. El workflow
`sincronizar-monorepo.yml` copia `src/`, `tests/`, `public/` y la
configuración del paquete a `web/` de EPI-Aetheris en cada push a `main` y
abre allí un PR. Lo que se edite solo en `web/` del monorepo se pierde en la
siguiente sincronización.

`docs/biblioteca/` alimenta las páginas de `/biblioteca`. El monorepo tiene su
propia copia, que no se sincroniza: un cambio de contenido va en las dos.

Las decisiones de arquitectura (`docs/adr/`) y el contexto técnico para
agentes (`AGENTS.md`) viven en el monorepo.
