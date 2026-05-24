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

### Featured Projects

**[Foundry Agent Playground](https://github.com/lol0chx/agent-playground)** · *Next.js · Vercel AI SDK · Claude Sonnet 4.5 · pgvector · RAG*
A full-stack agent-building playground demonstrating the core primitives of modern AI agent platforms (Foundry, Vercel AI SDK, OpenAI Assistants) — streaming chat, tool calling, and RAG — implemented from scratch. Three Zod-validated tools (`search_docs`, `calculate`, `get_current_time`) wired into a multi-step `streamText` loop, document upload + chunking + embeddings via `text-embedding-3-small`, semantic search over pgvector in Neon Postgres, and a Next.js edge runtime for sub-100 ms TTFB streaming. Tool calls render as live expandable cards with similarity scores and execution time.

**[AgentEval](https://github.com/lol0chx/AGENT-EVAL)** · *Python · FastAPI · Claude API · OpenAI · Azure OpenAI*
LLM agent benchmarking framework with a live web dashboard. Evaluates two production-style agents (SE Job Tracker + EagleEye vision) across 185 test cases and three LLM providers, with parallel runs, SSE progress streaming, regression detection (PASS→FAIL diffing, latency/cost thresholds), and GitHub Actions CI/CD that posts regression diffs on every PR. Universal tool-fixture registry makes the eval deterministic and tool-agnostic.

**[CloudScout](https://github.com/lol0chx/cloud-scout)** · *SwiftUI · FastAPI · XGBoost · Postgres · Claude API*
Production sports analytics platform for NBA & MLB. Native iOS app (8 tabs) and Streamlit web on a FastAPI backend deployed to Fly.io with Supabase Postgres. Ships **five XGBoost models in production** trained leakage-free on point-in-time data with chronological 80/20 holdouts — NBA team winner (72.2% accuracy) + total points (15.5 MAE), NBA player projections for points/assists/rebounds (beats baseline formula ~8%), MLB team winner + total runs (3.33 MAE), and MLB pitcher projections for Ks/ER/hits/walks/IP. XGB models run side-by-side with heuristic formulas (NBA 6-factor / MLB 8-pillar blended with Pythagorean expectation) and degrade gracefully when a model is missing. Also includes an AI Scout chat powered by Claude Opus 4.6 with auto-injected league context, and an in-process twice-daily scheduler with precomputed analytics for millisecond reads.

**[Transcribe](https://github.com/lol0chx/ReCall)** · *SwiftUI · iOS · Claude API · OpenAI Whisper*
Native iOS app for voice memos with AI transcription, instant summaries, and per-recording chat. Bring-your-own-key for either OpenAI (Whisper + GPT-4o) or Claude (Apple on-device Speech + Claude). Multi-turn chat with full transcript context, persisted per recording. Everything stays on device except the model call.

**[RollorPick](https://github.com/lol0chx/RollorPick)** · *Swift · SwiftUI · SceneKit · Game Center*
Polished iOS dice game with a 3D SceneKit tower board. Roll-or-pick mechanic with limited picks (risk vs control), trap tiles, par-based scoring, Game Center leaderboard, stats history, haptics, and save/restore of in-progress games.

**[EasyShop](https://github.com/lol0chx/capstone_3_easyshop)** · *Java · Spring Boot · MySQL · JWT*
Full-stack e-commerce platform with JWT-secured auth, role-based access (admin vs customer), product catalog with category/price/color filtering, shopping cart, wishlist, order management, and an admin dashboard for full CRUD on inventory.

---

### Connect

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=vercel&logoColor=white)](https://henokmekuria.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henokmekuria/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:henoksmekuria@gmail.com)
