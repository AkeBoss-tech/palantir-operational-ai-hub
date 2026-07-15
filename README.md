# Operational AI Field Index

A public research interface for the 100 newest Palantir YouTube videos captured on
2026-07-14, a curated 32-source operational AI watchlist, and three independent
GPT-5.6 Terra reviews.

## What is included

- Searchable summaries for 100 videos with explicit evidence labels
- Architecture map of the Ontology, Agent Engine, Orchestrator, observability, and delivery layers
- Organization and industry maps
- Tiered external-source watchlist
- Terra architecture, evidence-audit, and ecosystem reviews
- Self-contained KRAIL snapshot under `knowledge/`, including source notes, transcripts,
  thread reports, workflows, and verification records

## Development

```bash
npm install
npm run dev
npm test
npm run build:pages
```

`scripts/sync-content.mjs` refreshes the embedded site data and the `knowledge/`
snapshot when the parent KRAIL project is available. In a standalone checkout, it
builds from the committed snapshot.

## Publishing

GitHub Pages deploys from `.github/workflows/pages.yml`. The repository is configured
for the `/palantir-operational-ai-hub` project path.
