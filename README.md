# Henok Mekuria

**Full-Stack Software Engineer · AI/ML focused** — 5+ years building production systems and shipping LLM-powered apps.

I build agentic AI systems (tool calling, RAG, streaming), evaluation frameworks for LLM agents, and the production backends + native clients that ship them. Currently working across Claude, OpenAI, and Azure OpenAI on real-world workloads.

---

### Tech Stack

**AI / ML**
![Anthropic](https://img.shields.io/badge/Anthropic_Claude-191919?style=flat&logo=anthropic&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white)
![Azure OpenAI](https://img.shields.io/badge/Azure_OpenAI-0078D4?style=flat&logo=microsoftazure&logoColor=white)
![XGBoost](https://img.shields.io/badge/XGBoost-FF6600?style=flat&logo=python&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white)
![pgvector](https://img.shields.io/badge/pgvector-4169E1?style=flat&logo=postgresql&logoColor=white)
![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-000000?style=flat&logo=vercel&logoColor=white)

**Languages & Frameworks**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Swift](https://img.shields.io/badge/Swift-FA7343?style=flat&logo=swift&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

**Data & Infra**
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Fly.io](https://img.shields.io/badge/Fly.io-7B3FE4?style=flat&logo=fly.io&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

---

### 🚀 Featured Projects

> 🔒 = private repository. Happy to walk through the code or architecture on request.

#### [Foundry Agent Playground →](https://github.com/lol0chx/agent-playground)
> Streaming Claude agent with tool calling + pgvector RAG, built around the Vercel AI SDK.

`Next.js 14` `TypeScript` `Vercel AI SDK` `Claude Sonnet 4.5` `pgvector` `Neon Postgres`

A full-stack agent playground demonstrating the core primitives of modern AI agent platforms — streaming, tool calling, and RAG — implemented from scratch. Three Zod-validated tools (`search_docs`, `calculate`, `get_current_time`) wired into a multi-step `streamText` loop, document upload + chunking + embeddings via `text-embedding-3-small`, semantic search over pgvector, image attachments as Claude multimodal parts, and a Next.js edge runtime for sub-100 ms TTFB. Tool calls render as live expandable cards with similarity scores and execution time. `calculate` runs on a hand-written recursive-descent parser rather than mathjs — the edge runtime strips the dynamic `Function` generation mathjs depends on.

---

#### AgentEval 🔒
> LLM agent benchmarking framework with a live web dashboard and CI/CD regression detection.

`Python` `FastAPI` `Anthropic` `OpenAI` `Azure OpenAI` `pytest` `GitHub Actions`

Evaluates two production-style agents (SE Job Tracker + EagleEye vision) across **185 test cases** — 70 real Microsoft job pages, 108 synthetic specs, 7 vision scenarios — and three LLM providers, with parallel runs, SSE progress streaming, regression diffing (PASS→FAIL, latency/cost thresholds), and GitHub Actions CI/CD that posts diffs on every PR. The browser dashboard runs multiple concurrent evals, each with a live progress bar, pass rate, and expandable terminal log. Universal tool-fixture registry makes evals deterministic and tool-agnostic.

---

#### CloudScout 🔒
> Production sports analytics across four leagues — iOS + web + FastAPI, leakage-free XGBoost models, Monte-Carlo simulations, and a self-grading picks board.

`SwiftUI` `FastAPI` `XGBoost` `scikit-learn` `Monte Carlo` `Postgres` `Supabase` `Claude API` `Fly.io`

Native iOS app and Streamlit web on a FastAPI backend deployed to Fly.io with Supabase Postgres, covering **soccer (2026 World Cup + Premier League), NBA, MLB, and NFL** — each with its own scraper, feature builder, and model family.

| League | Models | Notes |
|---|---|---|
| Soccer | Dixon-Coles + Elo, 1X2 / totals / BTTS, player props | Player-driven squad strength; 20k-run bracket sim |
| NBA | winner + total + margin, pts / ast / reb props | 72.2% winner accuracy, 15.5 MAE on totals |
| MLB | winner + total + margin, pitcher K / ER / H / BB / IP | 3.33 MAE on total runs |
| NFL | winner + total + margin, five prop classifiers | 5+ seasons, QB availability as a gating feature |

**Methodology** — every prediction uses only games strictly before the target (`games.date < g.date`, `.shift(1)` on all rolling features), evaluated on a chronological 80/20 holdout, then refit on the full set. Shared feature modules between train and serve prevent train/serve drift.

**Simulation** — a 20,000-run Monte-Carlo walks the 48-team World Cup bracket for advancement and trophy odds. The group stage is vectorised across all sims in numpy; knockout probabilities are cached per ordered team pair so each Dixon-Coles matrix is built once, not once per sim.

**Picks** — pulls live odds from The Odds API, drops games already underway (the API silently swaps live games to in-game totals, which would poison the edge math), joins with the refreshed XGB total, and tiers confidence against each model's MAE. Every pick is snapshotted, then graded against the final box score into rolling all-time / 30d / 7d summaries by league and tier.

**Serving** — the laptop owns raw data and heavy ML, pushing ~1,800 gzipped payloads to Supabase; Fly's 512 MB box only serves and scrapes twice daily, so hot endpoints read precomputed JSON in milliseconds. Also ships a Claude Opus 4.6 AI Scout chat with auto-injected league context.

---

#### RollorPick 🔒
> iOS dice-climbing game in SwiftUI with a SceneKit 3D board, Game Center leaderboard, and full localization.

`Swift` `SwiftUI` `SceneKit` `GameKit` `iOS`

Climb a **49-tile 3D tower** where every block sits at its own height along a switchback path, racing a par of 8 moves. The roll-or-pick mechanic gives you **three picks per game** to choose an exact dice value instead of rolling. Trap tiles fire a full-screen banner and vortex animation, then rewind you to square one while the lit tiles unwind one-by-one from the top down. Two maps — Colored Towers (a 49-step rainbow gradient) and Lava Caves, held behind a COMING SOON tease. Game Center leaderboard on fewest moves, a live clock that starts on your first roll and excludes paused time, a stats screen over full game history, and every string routed through `Localizable.strings`. An epoch counter orphans in-flight move animations so quitting mid-move can't corrupt the next game.

---

#### [EasyShop →](https://github.com/lol0chx/capstone_3_easyshop)
> Full-stack Java/Spring Boot e-commerce platform.

`Java` `Spring Boot` `MySQL` `JWT` `REST API`

JWT-secured auth with role-based access (admin vs customer), product catalog with category/price/color filtering, shopping cart, wishlist, order management, and an admin dashboard for full CRUD on inventory.

---

### Connect

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=vercel&logoColor=white)](https://henokmekuria.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henokmekuria/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:henoksmekuria@gmail.com)
