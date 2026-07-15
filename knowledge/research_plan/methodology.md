# Methodology

## Corpus

The corpus is the first 100 entries returned by the official Palantir channel's
Videos feed on 2026-07-14, ordered newest first. Video ID is the stable primary key.

## Evidence tiers

1. Available English captions plus official metadata and description.
2. Official metadata and description when captions are unavailable.
3. Explicitly marked inference used only to explain likely significance.

Worker reports must never describe an official description as a transcript. Marketing
claims are reported as Palantir or customer claims, not independently verified outcomes.

## Review design

Ten task-scoped research threads each review exactly ten assigned videos. The
coordinator verifies 100 unique IDs with no gaps or duplicates before generating
the final synthesis. Cross-video conclusions require support from multiple entries.
