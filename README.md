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

#### [Foundry Agent Playground →](https://github.com/lol0chx/agent-playground)
> Streaming Claude agent with tool calling + pgvector RAG, built around the Vercel AI SDK.

`Next.js 14` `TypeScript` `Vercel AI SDK` `Claude Sonnet 4.5` `pgvector` `Neon Postgres`

A full-stack agent playground demonstrating the core primitives of modern AI agent platforms — streaming, tool calling, and RAG — implemented from scratch. Three Zod-validated tools (`search_docs`, `calculate`, `get_current_time`) wired into a multi-step `streamText` loop, document upload + chunking + embeddings via `text-embedding-3-small`, semantic search over pgvector, and a Next.js edge runtime for sub-100 ms TTFB. Tool calls render as live expandable cards with similarity scores and execution time.

---

#### [AgentEval →](https://github.com/lol0chx/AGENT-EVAL)
> LLM agent benchmarking framework with a live web dashboard and CI/CD regression detection.

`Python` `FastAPI` `Anthropic` `OpenAI` `Azure OpenAI` `pytest` `GitHub Actions`

Evaluates two production-style agents (SE Job Tracker + EagleEye vision) across **185 test cases** and three LLM providers, with parallel runs, SSE progress streaming, regression diffing (PASS→FAIL, latency/cost thresholds), and GitHub Actions CI/CD that posts diffs on every PR. Universal tool-fixture registry makes evals deterministic and tool-agnostic.

---

#### [CloudScout →](https://github.com/lol0chx/cloud-scout)
> Production sports analytics — iOS + web + FastAPI, with a suite of XGBoost models trained leakage-free on point-in-time data.

`SwiftUI` `FastAPI` `XGBoost` `scikit-learn` `Postgres` `Supabase` `Claude API` `Fly.io`

Native iOS app (8 tabs) and Streamlit web on a FastAPI backend deployed to Fly.io with Supabase Postgres. **XGBoost models across four production prediction categories**:

| Category | Models | Training set |
|---|---|---|
| NBA team | winner classifier + total points regressor | 1,155 games |
| NBA player | pts / ast / reb regressors | 31,644 player-games |
| MLB team | winner classifier + total runs regressor | 2,600 games |
| MLB pitcher | K / ER / H / BB / IP regressors | 3,468 starts |

**Methodology** — every prediction uses only games strictly before the target (`games.date < g.date`, `.shift(1)` on all rolling features), evaluated on a chronological 80/20 holdout. Consistent hyperparams across every trainer (n_estimators=400, max_depth=4, lr=0.05) with early stopping on an inner 80/20 validation split. Shared feature modules between train and serve prevent train/serve drift.

**Serving** — heuristic formula (NBA 6-factor / MLB 8-pillar Pythagorean blend) runs first, then XGBoost selectively overrides stat-by-stat where it backtests better. Missing models silently fall back to the formula. MLB batters intentionally use the formula — per-game batter outcomes were near-random for XGB. Also ships a Claude Opus 4.6 AI Scout chat with auto-injected league context, plus an in-process twice-daily scheduler with precomputed analytics for millisecond reads.

---

#### [PickORoll →](https://github.com/lol0chx/PickORoll)
> C++ SFML race-board game with single-player par mode and local 2-player pass-and-play.

`C++` `SFML` `Visual Studio` `Windows`

7×7 rainbow-gradient race board (boxes 0–48) with a roll-or-pick mechanic — **5 picks per game** to choose an exact dice value instead of rolling. Nine trap tiles with visual connection lines, animated pawn movement with smoothstep easing, procedurally generated sound effects (no audio assets), embedded 5×7 bitmap font (no external assets), pause menu, and a game-over screen with stats. Single-player rates you against par 8 with messages like "PERFECT!" / "SO CLOSE!". Best score persisted between sessions; prebuilt Windows .exe shipped via Releases.

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
