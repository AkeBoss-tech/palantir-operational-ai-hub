# Verification Summary

Verified on 2026-07-14:

- Source inventory contains exactly 100 unique YouTube video IDs.
- Ten research-thread reports each contain ten assigned IDs.
- Across reports: 100 IDs, 100 unique, exact match to the source inventory.
- English captions were preserved for all 25 videos where YouTube exposed them.
- `youtube_channel_refresh` passes KRAIL workflow validation with five steps.
- KRAIL graph build passes: 4 graph documents, 19 nodes, 22 edges.
- KRAIL vector build passes: 191 documents, 499 chunks.
- KRAIL search returns the video index, source catalog, worker evidence, and synthesis.
- `krail --local doctor` passes with no warnings.

External-source expansion verified on 2026-07-14:

- 32 curated sources: 17 Tier A, 10 Tier B, and 5 Tier C entries.
- 13 verified RSS/Atom feed endpoints for automated collection.
- Ten YouTube channels were checked against their current upload feeds.
- `operational_ai_watchlist_refresh` passes KRAIL workflow validation with five steps.
- Source entries include focus, provenance type, priority, and bias/corroboration notes.

Terra reprocessing and website verification on 2026-07-15:

- Three `gpt-5.6-terra` threads independently reviewed architecture, evidence quality,
  and ecosystem/watchlist coverage.
- Architecture review confirms 100/100 video IDs and all 25 available transcripts reviewed.
- Evidence audit samples every batch and adds a 100-video evidence ledger plus stricter
  labels for effectiveness, safety, security, clinical, and causal-outcome claims.
- Ecosystem review accounts for all 100 videos across eight mutually exhaustive primary themes.
- The GitHub Pages build contains all 100 videos, 32 sources, three Terra reviews, and a
  self-contained snapshot of KRAIL notes, transcripts, reports, workflows, and verification data.
- Both the Sites build and the static GitHub Pages build pass compilation and type checking.
