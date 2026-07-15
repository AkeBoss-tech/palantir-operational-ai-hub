# Evidence audit — 100-video Palantir corpus

## Auditor conclusion

The corpus is a well-attributed **first-party channel analysis**, not an independently
validated account of product capability or customer impact. The source inventory contains
100 Palantir YouTube uploads: 25 have an available VTT caption file and 75 do not. Of the
75 without captions, 71 have a non-empty official description and four are limited to
title/metadata. No independent customer records, technical benchmarks, clinical studies,
SEC materials, legal materials, or third-party evaluations were included in the source
set. Consequently, no performance, cost, safety, clinical, operational, adoption, or
policy outcome is independently validated by this knowledge base.

The ten batch reports are generally careful: they usually say when a statement comes from
metadata/description, mark inference, and caveat outcome figures. They should nevertheless
be read with a stricter evidence hierarchy. A transcript establishes that a presenter made
a statement; it does not establish that the statement is true outside the presentation.
Likewise, an official description establishes Palantir's published characterization, not
the product's independently demonstrated behavior.

### Required evidence labels

Use the following labels in any derivative summary, including the reader index and final
report. Do not collapse them into a generic “source-backed” label.

| Label | Meaning and permitted use |
|---|---|
| `T — title/metadata` | Identifies an upload, speaker/event only; no substantive content inference. |
| `D — official-description claim` | Palantir's published description of a product, workflow, partnership, or result. Attribute as “Palantir describes/claims.” |
| `C — transcript-backed statement` | A statement audible/readable in the retained VTT. Attribute it to the speaker or organization; caption text can contain transcription errors. |
| `P — promotional or participant outcome claim` | A claimed metric, efficiency, capability, adoption result, or strategic benefit. It remains `D` or `C` in provenance, but must also carry `P`. |
| `N — notional demonstration` | Synthetic/example workflow, not evidence of a customer result. |
| `I — analytical inference` | Reviewer synthesis or plausible mechanism. It must not be phrased as observed fact. |
| `G — independent-validation gap` | No corroborating source in this corpus. This applies to every outcome and externally testable capability claim. |

Recommended shorthand: `D+P+G` for an official-description outcome; `C+P+G` for a
speaker/customer outcome stated in captions; `C+I+G` for an inference from a transcript.
“Governed,” “secure,” “trustworthy,” “production,” “autonomous,” and “human in the loop”
are product/presenter characterizations unless a source supplies the relevant controls,
scope, and test evidence.

## Cross-corpus corrections

1. **Do not treat captions as independent validation.** The 25 retained VTT files support
   attribution and a closer account of what was said. They do not provide study design,
   independent benchmarking, causal attribution, or audit evidence.
2. **Outcome figures need both an owner and a limitation.** Examples include the Tampa
   General clinical figures, American/Novartis/Fujitsu/HSS/Lumen/Andretti results,
   bp returns, Lear/Texas DPS operational results, and all percentage or time claims in
   descriptions. Label them `D+P+G` or `C+P+G`; retain denominator, baseline, period,
   method, attribution, and uncertainty as missing unless separately sourced.
3. **Notional examples must not be promoted to deployments.** World View (43) explicitly
   disclaims that its shown data are notional; the tariff workflow (85) and its $88k example
   are explicitly notional. Label `N+P+G` and do not cite them as customer savings.
4. **Batch themes are synthesis, not common observed architecture.** Phrases such as
   “the recurring pattern,” “operational AI,” or “shared governed model” should carry `I`
   even where individual product descriptions mention an Ontology. They are useful
   interpretations, not a cross-customer comparative study.
5. **Correct the role reversal in `artifacts/final-report.md`.** It says “Agent Engine for
   durable execution, Orchestrator for multi-agent work.” The source note for video 8
   describes Agent Engine/SDK as agent-construction and state/event/effect primitives;
   video 9 describes Orchestrator as the durable-execution layer. A defensible replacement
   is: “Agent Engine/SDK for agent construction and stateful workflows; Orchestrator,
   according to Palantir's description, for durable execution.” The latter is `D+G`, not a
   tested reliability guarantee.
6. **Downgrade the final report's opening conclusion.** “The channel documents an
   enterprise-AI strategy” is acceptable as `I` about channel positioning. “Models become
   useful,” “use … to plan and execute real work,” and the product-stack paragraph should
   be framed as Palantir's stated approach (`D`/`C`), with `G` for effectiveness and safety.

## Batch-summary audit

| Batch | Coverage / source mix | Sampled records | Assessment | Required correction or label |
|---|---|---|---|---|
| 01 | 1–10; 10 `D` | 6, 8, 9 | Generally restrained; outcome caveats are present. | Batch architecture is `D+I+G`; retain 6/7 metrics as `D+P+G`; keep Agent Engine distinct from Orchestrator. |
| 02 | 11–20; 10 `D` | 17, 18, 20 | Sound per-record caveats. | 17's 109→10/$78 and 18's sepsis results are `D+P+G`; “production” is a source characterization, not validation. |
| 03 | 21–30; 10 `D` | 22, 26, 30 | Conservative, including the empty-description intro. | All architecture and deployment language is `D+G`; 26 is `T+G`; historical speed and token claims are `D+P+G`. |
| 04 | 31–40; 10 `D` | 32, 37, 39 | Cautious and correctly excludes an earnings-content summary. | Retain cost/accuracy, forecasting, and predictive-maintenance results as `D+P+G`; batch-level “governed system” is `I+G`. |
| 05 | 41–50; 10 `D` | 43, 44, 49 | Mostly cautious, but wording occasionally implies operation rather than claimed intent. | 43 is `D+N+G`; phrase 44's ShipOS orchestration as “the description says it is intended/being used,” not verified fleet optimization. |
| 06 | 51–60; 7 `D`, 3 `C` | 55, 59, 60 | Strong provenance handling. | 55's five-month/five-day statement is `D+P+G`; 59's NHS figures and 60's PG&E statements are `C+P+G`, not outcome evidence. |
| 07 | 61–70; 9 `D`, 1 `C` | 68, 69, 70 | Strong explicit caveats; the long event report is rich but remains participant testimony. | 68/69 results are `D+P+G`; 70's cross-industry pattern is `C+I+G`, and every reported outcome is `C+P+G`. |
| 08 | 71–80; 3 `C`, 7 `D`/`T` | 74, 79, 80 | Good separation of sparse items and transcript material. | 74's product architecture is `C+G`, not a demonstrated security/control model; 79's 24-hour reuse is `D+P+G`; 80 is `C+G` with no deployment inference. |
| 09 | 81–90; 9 `C`, 1 `D` | 81, 85, 87 | Detailed transcript summaries usually preserve speaker attribution. | 81's performance mechanism/result is `C+P+G`; 85 is `C+N+G`; 87's operational effects are `C+P+G`, not causal proof. The batch's “recurring pattern” is `I+G`. |
| 10 | 91–100; 9 `C`, 1 `D` | 91, 94, 97 | Strong outcome caveats, but transcript detail can look more conclusive than it is. | 91/94/97 outcomes are `C+P+G`; 98 is `D+G`; product-governance synthesis remains `C+I+G`. |

None of the batch reports should be represented as independently validated. Batches 1–5
are especially constrained because every substantive record is description-only. The most
evidence-rich batches (9–10, plus record 70) have captions, but not independent evidence.

## Coverage ledger

`Source` records the strongest retained source. `Finding type` lists the evidence labels
that must accompany the record's substantive claims. `Disposition` assesses the existing
summary rather than restating it. Every `G` is an independent-validation gap.

| # | Video ID | Source | Finding type | Disposition |
|---:|---|---|---|---|
| 1 | IDZVaKc6MGQ | D | D+I+G | Retain as deployment-description claim; no security/performance proof. |
| 2 | O7aeOmnbCuo | D | D+I+G | Retain design-pattern description; no usability/trust validation. |
| 3 | hymyfucOgSo | D | D+P+G | Defensive-cyber acceleration is a Palantir claim, not benchmark evidence. |
| 4 | mZcpr3vX_XY | D | D+I+G | Sandbox/merge workflow is described; operational benefit is inference. |
| 5 | elzenOIEdtI | D | D+I+G | Product workflow only; no release-control or scale evidence. |
| 6 | WLleqr4GEAw | D | D+P+G | Near-70%, 84%, and 90% figures require source attribution and methods gap. |
| 7 | GZHSCMz6Aio | D | D+P+G | Claimed latency result is description-level, no benchmark details. |
| 8 | mDGjptFvePY | D | D+G | Agent-construction/state primitives; do not call it durable execution. |
| 9 | ZTw66mjYATo | D | D+G | Durable-execution behavior is a Palantir description, not reliability proof. |
| 10 | 6_6OvDIET_w | D | D+I+G | Stack synthesis is valid only as first-party positioning. |
| 11 | sohHJ-RL7xc | D | D+I+G | Hype-reel product list supports positioning, not component guarantees. |
| 12 | LTwTfwDj2As | D | D+G | Promotional slogan only; no production-validation conclusion. |
| 13 | bJsHKMUqCvg | D | D+I+G | Internal-planning workflow described; control/outcome claims unverified. |
| 14 | D5t6384lqoE | D | D+I+G | Build-in-minutes is a published description; no accuracy/savings evidence. |
| 15 | mzBDupsPPcs | D | D+I+G | Governance topic, not evidence of specific governance controls. |
| 16 | ZsW_4Ugj6t0 | D | D+I+G | ShipOS purpose claimed; no Keel-level result or implementation detail. |
| 17 | losp2jc-hWo | D | D+P+G | 109→10 and $78 are Palantir demonstration claims, not benchmark results. |
| 18 | bOywHUD1jZo | D | D+P+G | Sepsis and patient figures are high-stakes official claims without study evidence. |
| 19 | Ok6j_IbuTxo | D | D+I+G | AIP/dispatch workflow described; no adoption or fix-rate outcome. |
| 20 | oSsEaz36DLU | D | D+P+G | Scale/on-time-delivery framing is official; no delivery-performance evidence. |
| 21 | NLsXIIkGJ4o | D | D+I+G | Closed-loop security architecture is description-level only. |
| 22 | vnhcPBf9UoY | D | D+P+G | “Fastest in USDA history” is an official historical claim without corroboration. |
| 23 | kqpzUGtZvNI | D | D+I+G | Fleet-workflow scope claimed; no independent operational result. |
| 24 | sCjcd8t1hio | D | D+I+G | Legal-workflow purpose only; do not infer safeguards or legal quality. |
| 25 | P9gQP88eQ-k | D | D+P+G | Experience/activity figures are description claims; no outcome study. |
| 26 | IeHOZO03suA | T | T+G | Empty description/no captions: do not make a substantive summary. |
| 27 | -ZeL8QZ9Ib4 | D | D+I+G | Apollo security-delivery framing is first-party positioning. |
| 28 | kXAerjv8s2s | D | D+P+G | Cost/time substitution statement is official and methodologically unsupported. |
| 29 | xvgZym7YpJ8 | D | D+P+G | Weeks/minutes/flight-scale claims need attribution and baseline. |
| 30 | FtjgS0jYjnU | D | D+P+G | Near-60% token outcome has no baseline, interval, or measurement method. |
| 31 | E1g1qALKNpM | D | D+I+G | Strategy/opinion, not evidence models require an Ontology. |
| 32 | p0pjtkg1ny4 | D | D+P+G | Cost/accuracy/reliability improvements are official claims, not test results. |
| 33 | XgZZRV77D8k | D | D+I+G | Multi-domain integration/intended users only; no deployed-mission evidence. |
| 34 | I7siZgE533E | D | D+I+G | Event recap; do not infer featured systems or outcomes. |
| 35 | HSBgANg-pkQ | D | D+I+G | Recruiting mechanism described; no hiring-validity evidence. |
| 36 | 1Aghjshi3U8 | D | D+G | Disclaimer-only description; do not summarize earnings results. |
| 37 | DY3XZZBR7Lc | D | D+P+G | “Twenty minutes of precision” lacks baseline/accuracy definition. |
| 38 | jK5k9_Gql-I | D | D+I+G | Builder/deployment pathway described; no tactical outcome proof. |
| 39 | EfYLwM0pcQc | D | D+P+G | Predictive-maintenance/uptime outcome is an official objective, not validated. |
| 40 | dWJa0Bkbxus | D | D+I+G | Strategic panel framing; no joint program or policy conclusion. |
| 41 | uEkuzBqp-mU | D | D+P+G | ERP duration/value assertions are official presentation claims. |
| 42 | 8lU-xRDovRk | D | D+I+G | Product/value-chain scope only; no mission-speed evidence. |
| 43 | WkU-Bl0xFus | D | D+N+G | Explicitly notional shown data; never cite as operational performance. |
| 44 | 3UMNo9py7lc | D | D+I+G | ShipOS use/benefit is official framing; phrase as claimed intent. |
| 45 | i16bPp9lCPc | D | D+I+G | Commercial-strategy talk; no technical or outcome inference. |
| 46 | yrtDgoqWmgM | D | D+I+G | Panel/mission framing, not system-performance evidence. |
| 47 | hjIzKUeXmAk | D | D+I+G | Nuclear scaling narrative is first-party framing. |
| 48 | oJJ3W6pWfPE | D | D+I+G | Modernization benefits claimed; no burden/quality measurement. |
| 49 | ipdtAHQj0l0 | D | D+I+G | Defense visual disclaimer does not validate product or endorsement. |
| 50 | l3oRSfUEMTE | D | D+G | Backstage/exhibit metadata only; no content claims. |
| 51 | bxvf5H1G2f0 | D | D+P+G | Migration speed/cost claims are uncorroborated. |
| 52 | ppTpMoP6_nc | D | D+I+G | Partnership/pilot ambition, not deployment outcome. |
| 53 | sDtltYnbJT8 | D | D+G | One-sentence opening-remarks description; no argument reconstruction. |
| 54 | VB_6oi0g_f8 | T | T+G | Empty description/no captions: title-level only. |
| 55 | e90qUUh8_us | D | D+P+G | Five-month-to-five-day claim needs project scope and baseline. |
| 56 | sxqGbFAFu-E | D | D+I+G | Partnership/timing, no manufacturing-output result. |
| 57 | yLD5I16XkOo | D | D+I+G | Embedded Ontology purpose, no operating-environment validation. |
| 58 | kA-RPdosEm0 | C | C+P+G | Hadean/Palantir functions are speaker claims; claimed benefits unvalidated. |
| 59 | NANvLfyDQBI | C | C+P+G | NHS workflow/metrics are participant statements, lacking study design. |
| 60 | 8qXIoUxisxk | C | C+I+P+G | Work/future claims and PG&E account are speaker views/testimony. |
| 61 | wOyByRnOgIc | D | D+I+G | Partnership description; no proof of seamless governance integration. |
| 62 | UPO5oV7xL5A | T | T+G | Empty description/no captions: holiday greeting only. |
| 63 | u31W8bR_SWo | D | D+I+G | Sponsorship/brand signal is not capability evidence. |
| 64 | r3jMRs_Mum8 | D | D+I+G | Autonomous-enterprise vision is forward-looking first-party positioning. |
| 65 | HWiEk_7Pulc | D | D+I+G | Executive/patriotic positioning; no technical conclusion. |
| 66 | xgQXfzUgTO4 | D | D+I+G | Tenant workflow/goal described; readiness/learning claims unverified. |
| 67 | od8G2dZvVPY | D | D+I+G | Denial-prevention product claim; no measured result. |
| 68 | vH-pTvqeiMo | D | D+P+G | 97% adoption and time result are customer claims in a description. |
| 69 | TwwTlyIhCYI | D | D+P+G | Clinical figures are customer claims; do not infer causal efficacy. |
| 70 | UjkRz9HkldU | C | C+I+P+G | Event transcript supports attribution; patterns are synthesis and metrics are speaker claims. |
| 71 | SZ_eZGmmpQU | C | C+I+G | Montage supports positioning, not a Maven/Apollo implementation claim. |
| 72 | _YpTwi_TtHQ | T | T+G | Empty description/no captions: title-level only. |
| 73 | zkptGdmnuiY | D | D+I+G | Fellowship discussion supports program framing, not education outcomes. |
| 74 | YDAxITCNcko | C | C+G | Product architecture is presenter-stated; “governed” needs control evidence. |
| 75 | 8JbKTwDqkKI | D | D+G | Award event metadata; do not infer speech content. |
| 76 | mfmD1QqnaKg | D | D+I+G | Warp Speed scope/velocity are first-party product claims. |
| 77 | z5mfjRy3i_Q | D | D+I+G | Fellowship duration is stated; comparative education claims are unsupported. |
| 78 | DHSYo9s7eRo | D | D+I+G | Forthcoming feature/intended efficiency, not a benchmark. |
| 79 | kr2rtz9L5t8 | D | D+P+G | Disaster-response reuse/timing is first-party, no accuracy/privacy evaluation. |
| 80 | MZ93pgQBYWY | C | C+G | Captions support remarks only; no relationship/deployment inference. |
| 81 | PGNWo-UuXLs | C | C+P+G | Merck runtime/scale/mechanism claims are speaker-provided, not benchmarked. |
| 82 | 9IgYLjxxesw | C | C+I+G | Demonstrated/stated observability capabilities; future/benefit claims need labels. |
| 83 | NvwnOE6h598 | D | D+G | Discussion exists; detailed book arguments not supported without captions. |
| 84 | L72uW5HAWB4 | C | C+I+G | Political arguments are attributable views, not established fact. |
| 85 | xBTPNLd8Jv8 | C | C+N+G | Explicitly notional workflow/savings illustration; legal outcomes need review. |
| 86 | gakCerVqzSY | C | C+P+G | Geopolitical/labor/customer claims are interviewee assertions. |
| 87 | sk2peD8SB3s | C | C+P+G | Disaster results are preliminary operational testimony, not causal proof. |
| 88 | -DPdyQR1bG4 | C | C+P+G | Lear workflow/scale claims are presentation testimony. |
| 89 | hTjGU14bxP0 | C | C+P+G | Under-development system/halving targets are forward-looking claims. |
| 90 | 1Wrhaur3ws0 | C | C+P+G | bp performance and return figures are executive claims without methodology. |
| 91 | DLx3ix6c0Oo | C | C+P+G | American's workflow and savings are presentation claims. |
| 92 | dQ8KeyVmfUM | C | C+P+G | Novartis time/adoption figures are speaker claims; no clinical-success proof. |
| 93 | A47Nuav7X-4 | C | C+P+G | Fujitsu's unnamed-customer results are speaker claims. |
| 94 | mKp3TTggihU | C | C+P+G | HSS time/throughput/performance figures lack accuracy/clinical/privacy methods. |
| 95 | 3c4ekdck0kg | C | C+P+G | Lumen contracts/automation/success are first-party statements. |
| 96 | AsTpgn1Bd2o | C | C+I+G | Karp's strategy and superiority claims are opinions/positioning. |
| 97 | mBDQK7OJ1Ls | C | C+P+G | Presenter timing/TPMS claims do not establish causal race outcome. |
| 98 | nf_UGJsukMU | D | D+I+G | Intro/positioning only; no customer or measured-result conclusion. |
| 99 | x-NEdIcgboo | C | C+I+G | Product history/governance claims are Palantir statements; roadmap is forward-looking. |
| 100 | MITSJDI08R4 | C | C+P+G | Demo resource figures lack workload/tuning controls and generalizability. |

## What would close the gaps

For any claim intended to support a factual capability or outcome conclusion, add a source
outside the channel and preserve the linkage to the video ID. Minimum useful evidence is:

- **Performance/cost:** workload, baseline, metric definition, measurement period, hardware
  or model configuration, sample size, variance, and an independently reviewable result.
- **Clinical/public-safety:** protocol, cohort/denominator, comparator, outcome definition,
  confounder handling, ethics/privacy basis, and independent clinical or public-agency source.
- **Security/governance:** threat model, enforcement mechanism, access-control scope,
  logging/audit properties, failure testing, and an independent assessment where material.
- **Customer deployment/adoption:** customer-authored confirmation, deployment scope/date,
  active-user or workflow measure, and a method separating product contribution from other
  organizational changes.

Until then, the safe overarching conclusion is: **Palantir's channel presents an
Ontology-centered, operational-AI product and customer narrative. The corpus substantiates
that this narrative and its individual claims were published or spoken; it does not
independently substantiate their effectiveness, safety, or causal outcomes.**
