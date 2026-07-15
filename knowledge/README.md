# Palantir AI Video Knowledge Base

A source-specific KRAIL research project for understanding what Palantir is
building, deploying, and emphasizing across its YouTube channel.

## Initial corpus

- Channel: [Palantir](https://www.youtube.com/@palantirtech/videos)
- Channel ID: `UCwed6_f0WcDIioXvMQfcP2Q`
- Snapshot: 100 newest videos as of 2026-07-14
- Coverage window: 2025-08-25 through 2026-07-14
- Inventory: `sources/video_catalog.csv`
- Official source notes: `sources/videos/`
- Available captions: `sources/transcripts/`
- Ten worker reports: `artifacts/thread_runs/`

## Reader entry points

- `topics/palantir-ai-video-landscape.md` — cross-video synthesis
- `topics/video-index.md` — compact guide to all 100 videos
- `topics/operational-ai-watchlist.md` — curated external channels, blogs, research, and news sources
- `topics/ai-ecosystem-2026.md` — expanded ecosystem synthesis across models, agents, context, infrastructure, evaluation, robotics, and governance
- `wiki/` — cross-linked field wiki suitable for both the research site and GitHub Wiki
- `sources/ai_ecosystem_watchlist.csv` — 45 additional labs, research feeds, standards bodies, platforms, and independent sources
- `artifacts/final-report.md` — research conclusions and evidence limits
- `research_plan/workflows/youtube_channel_refresh.yaml` — repeatable refresh design
- `research_plan/workflows/operational_ai_watchlist_refresh.yaml` — external-source monitoring design
- `artifacts/terra_reviews/` — GPT-5.6 Terra architecture, evidence, and ecosystem reviews
- `site/` — public GitHub Pages research interface with 20-page wiki and self-contained knowledge snapshot

## Refresh

Run `scripts/refresh_youtube_channel.sh`, use the thread coordinator to rerun
any batch whose IDs or evidence changed, then run `scripts/verify_video_corpus.py`. Refresh the
KRAIL graph and vector indexes after verification. The workflow contains a daily
schedule hint but is not attached to the machine scheduler by default.
