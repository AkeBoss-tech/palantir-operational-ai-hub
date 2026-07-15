# Thread Coordinator Skill

Use this skill for large, partitionable source reviews that need multiple research
threads and one integrated result.

## Contract

1. Freeze a source inventory before dispatch and assign each item to exactly one batch.
2. Use ten batches of ten for the 100-video channel review.
3. Require every worker to report: what the video is about, what is being built or
   operated, named products/organizations, practical significance, and evidence limits.
4. Preserve the official URL, upload date, and video ID for provenance.
5. Workers write only their assigned `artifacts/thread_runs/batch_NN.md` file.
6. The coordinator checks for 100 unique IDs, no gaps, and no duplicates before synthesis.
7. Separate source-backed statements from inference. A title or official description is
   evidence, but not a transcript; never pretend otherwise.
8. Synthesize recurring systems, use cases, partners, design patterns, and strategic
   direction into stable topic notes only after the coverage check passes.

## Worker Output

Each batch file starts with a short batch-level theme summary. Then each assigned video
gets a compact section with metadata, a precise summary, the work/product demonstrated,
named entities, and an `Evidence basis` line.
