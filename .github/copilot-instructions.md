# Instruções rápidas para agentes AI — semteps-vigilancia

Resumo curto (o que importa): este é um app Next.js (app router) baseado em `src/app`, usando Next 15 + React 19, Tailwind via PostCSS e componentes TSX. A página principal é `src/app/page.tsx` e o layout global está em `src/app/layout.tsx`.

Principais comandos (repositório):
- Desenvolvimento: `npm run dev` (usa `next dev --turbopack`).
- Build: `npm run build` (usa `next build --turbopack`).
- Start (produção): `npm run start`.
- Lint: `npm run lint` (ESLint configurado em `eslint.config.mjs`).

Arquitetura e convenções importantes:
- App router (pastas dentro de `src/app`) — rotas e páginas estão organizadas por diretório: por ex. `src/app/indicadores`, `src/app/boletins`, `src/app/assistencia-social`, `src/app/normativas`, `src/app/sobre`.
- Componentes reutilizáveis ficam em `src/app/src/components/*` (ex.: `src/app/src/components/ui/button.tsx`).
- Estilização: Tailwind classes inline + variáveis em `src/app/globals.css`. O projeto importa Tailwind via `postcss.config.mjs` (plugin `@tailwindcss/postcss`). Não há `tailwind.config` no repositório — verifique antes de adicionar utilitários Tailwind custom.
- Fontes otimizadas usando `next/font` no `layout.tsx` (ex.: `Geist`, `Geist_Mono`).
- Paths TS: `tsconfig.json` define alias `@/*` -> `./src/*`.

Padrões de codificação / decisões encontradas (faça igual quando possível):
- App-router tem componentes server por padrão. Se um arquivo precisa rodar no cliente (usar hooks como `useEffect`, `useState` ou libs que dependem do DOM como `framer-motion`), adicione a diretiva "use client" no topo — exemplo: `src/app/page.tsx` começa com `"use client"`.
- Navegação: o `src/app/page.tsx` usa anchors/um `Link` local simples que renderiza `<a href=...>`; o projeto não depende de `next/link` nas páginas atuais. Se for migrar para `next/link`, atualize todas as rotas e teste navegação cliente-servidor.
- UI: componentes simples exportados como funções (ex.: `Button` em `src/app/src/components/ui/button.tsx` aceita props padrão de `<button>` e `className`).

Integrações e pontos que exigem atenção:
- Embeds externos: `src/app/page.tsx` inclui um iframe do Power BI e outro do Google Maps. Isso pode exigir configurações de CSP ao implantar (permitir domains `app.powerbi.com` e `www.google.com`).
- Dependências: `framer-motion` é usado no `page.tsx`. `react-router-dom` aparece em `package.json` mas não é usado nas páginas (há um comentário removendo sua importação) — cuidado ao alterar dependências.

ESLint / Build / TS:
- ESLint estende `next/core-web-vitals` e `next/typescript` via `eslint.config.mjs`. Ignore `.next`, `node_modules`, `out`, `build`.
- TS: `strict: true`, `allowJs: true`, `noEmit: true`. Verifique `baseUrl` e aliases antes de mover arquivos.

Boas práticas detectáveis (próximas ações seguras):
- Preserve a separação app/router (manter arquivos de rota em `src/app/*`).
- Mantenha componentes reutilizáveis em `src/app/src/components/*`.
- Teste localmente com `npm run dev` após qualquer mudança de rota/iframe/asset.

Referências diretas (exemplos para inspecionar):
- Arquivo principal: `src/app/page.tsx` (client component, framer-motion, iframes, navegação por anchors)
- Layout e fontes: `src/app/layout.tsx` (next/font + globals.css)
- Componente UI: `src/app/src/components/ui/button.tsx`
- Scripts e dependências: `package.json`
- PostCSS/Tailwind: `postcss.config.mjs` e `src/app/globals.css`
- ESLint: `eslint.config.mjs`

Se algo estiver ambíguo aqui (por ex. desejo migrar para `next/link` globalmente, adicionar `tailwind.config.js` ou remover `react-router-dom`), peça confirmação antes de aplicar a alteração ampla.

Fim — peça feedback se quiser que eu adapte o tom (mais prescritivo) ou adicione checks automáticos (ex.: CI lint/build steps).
