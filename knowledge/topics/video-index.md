---
title: Palantir YouTube — 100-Video Index
type: source-index
topics:
  - palantir-ai
  - enterprise-agents
  - operational-ai
entities:
  - Palantir
  - AIP
  - Ontology
snapshot_date: 2026-07-14
video_count: 100
---

# Palantir YouTube — 100-Video Index

This index compiles ten independently reviewed batches covering the 100 newest videos on the Palantir YouTube channel at the snapshot date. Evidence limitations are recorded inside each batch and video entry.

---

# Batch 01 — DevCon 6 production-agent stack

## Batch themes

These ten DevCon 6 videos present Palantir's approach to moving AI agents from demos into production. The recurring architecture combines the Ontology with durable execution, typed agent state, human approvals, legible reasoning, telemetry, automated optimization, and deployability across sovereign or on-premises environments. The demonstrations apply that stack to healthcare, refinery scheduling, cybersecurity, manufacturing, and incident response. Trust is treated as an engineering property: agents must survive failures, avoid duplicate actions, expose attribution and reasoning, respect production boundaries, and improve against explicit evaluations.

Evidence note: captions/transcripts are unavailable for every item in this batch. All source-backed statements below come only from the supplied official Palantir metadata (title, date, URL, and description). Any interpretation beyond those statements is explicitly marked as inference.

## 1. Code in Prod: Apollo x NVIDIA for Sovereign AI | DevCon 6

video_id: IDZVaKc6MGQ
official_url: https://www.youtube.com/watch?v=IDZVaKc6MGQ
upload_date: 2026-07-14
official_title: Code in Prod: Apollo x NVIDIA for Sovereign AI | DevCon 6

**What it is about:** NVIDIA Public Sector Field Engineering Leader Tim Klawa and Palantir Forward Deployed Engineer Vasil Vasilev explain an architecture intended to deliver high AI capability without giving up deployment sovereignty.

**What they are building/working on:** They show Apollo shipping artifacts ranging from Helm charts to marketplace products into both AIP environments and customer-controlled, on-premises Kubernetes clusters.

**Named products/organizations:** Palantir; NVIDIA; Apollo; AIP; Kubernetes; Helm.

**Practical significance:** The described deployment model gives regulated or sovereignty-sensitive customers a route to operate the same application artifacts across managed and on-premises targets. **Inference:** This may reduce the gap between central software delivery and locally controlled infrastructure, but the description does not provide performance, security, or customer-outcome measurements.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; no claims are based on the spoken presentation.

## 2. Deep Dive: Design Patterns for Human-Agent Collaboration | DevCon 6

video_id: O7aeOmnbCuo
official_url: https://www.youtube.com/watch?v=O7aeOmnbCuo
upload_date: 2026-07-14
official_title: Deep Dive: Design Patterns for Human-Agent Collaboration | DevCon 6

**What it is about:** Palantir product designers Emily Su, Lide Li, and Philipp Shchekin discuss interface and interaction patterns meant to make collaboration between people and AI agents seamless, legible, and trustworthy.

**What they are building/working on:** They use the Ontology to design and encode patterns for presenting agent reasoning without overwhelming users and for attributing decisions so users can distinguish human and agent actions.

**Named products/organizations:** Palantir; Ontology; Emily Su; Lide Li; Philipp Shchekin.

**Practical significance:** Clear reasoning displays and decision attribution can help users review agent work and preserve accountability in mixed human-agent workflows. **Inference:** Encoding these patterns in the Ontology suggests that collaboration semantics are intended to be reusable across applications, although the description does not enumerate the patterns or report user-study results.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; specific design patterns beyond those named in the description cannot be verified here.

## 3. Deep Dive: Security Forge: Wielding Agents for Defensive Cyber | DevCon 6

video_id: hymyfucOgSo
official_url: https://www.youtube.com/watch?v=hymyfucOgSo
upload_date: 2026-07-14
official_title: Deep Dive: Security Forge: Wielding Agents for Defensive Cyber | DevCon 6

**What it is about:** Palantir Infrastructure Security Engineer Nicholas Wernink presents an AI-accelerated defensive-cyber approach aimed at finding vulnerabilities before adversaries can weaponize them.

**What they are building/working on:** Security Forge orchestrates multi-agent workflows for vulnerability detection, with the presentation describing the agentic approach and how defensive teams could apply it at scale.

**Named products/organizations:** Palantir; Security Forge; Nicholas Wernink.

**Practical significance:** The work targets the shrinking time defenders have to identify and remediate exploitable weaknesses as attackers accelerate vulnerability research. **Inference:** Multi-agent orchestration may parallelize parts of vulnerability discovery and analysis, but the description does not disclose coverage, false-positive rates, remediation workflow, or benchmark results.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; the internal agent roles and technical implementation are not established by the available evidence.

## 4. Code in Prod: Scenario Agents x HD Hyundai Oilbank for Blending Disruptions | DevCon 6

video_id: mZcpr3vX_XY
official_url: https://www.youtube.com/watch?v=mZcpr3vX_XY
upload_date: 2026-07-14
official_title: Code in Prod: Scenario Agents x HD Hyundai Oilbank for Blending Disruptions | DevCon 6

**What it is about:** Palantir Software Engineer Simon Kaufmann and Jinho Kim of HD Hyundai Oilbank present an agent-assisted response to refinery planning disruptions, using a shipping delay as the operating scenario.

**What they are building/working on:** They launch Scenarios, described as a protected Ontology sandbox in which agents can draft and stress-test plans without touching production data. A scenario agent rebuilds a vessel and blending schedule, validates constraints in real time, and prepares the result for a one-click merge into the live system.

**Named products/organizations:** Palantir; HD Hyundai Oilbank; Scenarios; Ontology; Simon Kaufmann; Jinho Kim.

**Practical significance:** The sandbox-and-merge pattern is designed to let an agent explore operational alternatives while isolating live production state and retaining a deliberate handoff into operations. **Inference:** This resembles a governed planning branch that could shorten disruption response, but the description provides no quantified time, margin, or production impact.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; only the described shipping-delay demonstration is supported.

## 5. Product Launch: DevX: SuperRepo & Agent Development | DevCon 6

video_id: elzenOIEdtI
official_url: https://www.youtube.com/watch?v=elzenOIEdtI
upload_date: 2026-07-14
official_title: Product Launch: DevX: SuperRepo & Agent Development | DevCon 6

**What it is about:** Palantir Group Lead Ramzi Karam launches a pro-code development and DevOps workflow intended to let developers evolve an Ontology-backed application and its agents together.

**What they are building/working on:** SuperRepo is a single repository in which Ontology functions, actions, front end, and agents are defined and deployed together. A local embedded Ontology supports immediate iteration. The demonstration adds a capability to an incident-triage agent across schema, logic, UI, and agent changes without an intervening CI run.

**Named products/organizations:** Palantir; DevX; SuperRepo; Ontology; CI; Ramzi Karam.

**Practical significance:** Co-locating schema, application, and agent changes can tighten the developer feedback loop and reduce coordination across separately versioned components. **Inference:** The local embedded Ontology appears intended to make cross-layer changes testable before CI, but the description does not specify promotion controls, testing guarantees, or repository-scale limits.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; detailed SuperRepo architecture and release mechanics are not available.

## 6. Code in Prod: AIP Evolve x Tampa General Hospital for Optimized Care | DevCon 6

video_id: WLleqr4GEAw
official_url: https://www.youtube.com/watch?v=WLleqr4GEAw
upload_date: 2026-07-14
official_title: Code in Prod: AIP Evolve x Tampa General Hospital for Optimized Care | DevCon 6

**What it is about:** Dr. David Zihr of Tampa General Hospital and Palantir Forward Deployed Engineer Colton Rusch show optimization of AI-generated utilization reviews in a hospital setting, focusing on cost and output quality.

**What they are building/working on:** AIP Evolve screens models across providers, rewrites prompts, and can replace generative-AI calls with deterministic code. In the described deployment it reduced the cost of AI-generated utilization reviews by nearly 70% and eliminated 84% of GPT calls, while Tampa General experts preferred the optimized output 90% of the time.

**Named products/organizations:** Palantir; Tampa General Hospital; AIP Evolve; GPT; Dr. David Zihr; Colton Rusch.

**Practical significance:** The example treats model selection, prompting, and deterministic substitution as one optimization space rather than assuming every task needs an LLM call. The official description reports simultaneous cost reduction and expert preference, making this a concrete production optimization case. **Inference:** The results are use-case-specific; the description does not provide sample size, evaluation design, clinical endpoints, or statistical uncertainty.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. The percentages are Palantir's description-level claims and cannot be independently assessed from the supplied material.

## 7. Product Launch: Agent Observability & Optimization | DevCon 6

video_id: GZHSCMz6Aio
official_url: https://www.youtube.com/watch?v=GZHSCMz6Aio
upload_date: 2026-07-14
official_title: Product Launch: Agent Observability & Optimization | DevCon 6

**What it is about:** Palantir Group Lead Christopher Jeganathan and Forward Deployed Engineer Colton Rusch present tools for explaining agent behavior and continuously improving AI-system cost, quality, and speed.

**What they are building/working on:** AIP Inspect and Agent Timeline transform raw agent telemetry into a readable narrative. The newly launched AIP Evolve uses teams of agents to test model changes, prompt rewrites, and architectural changes automatically against an organization's own evaluations. The described manufacturing demonstration reduces latency by up to 90%, including one case from 45 seconds to 8.8 seconds.

**Named products/organizations:** Palantir; AIP Inspect; Agent Timeline; AIP Evolve; Christopher Jeganathan; Colton Rusch.

**Practical significance:** This links diagnosis and optimization: teams can inspect what an agent did, then evaluate candidate system changes against explicit objectives. **Inference:** Closed-loop optimization could make agent operations more scalable, but the description does not state what changes require human approval, how regressions are prevented, or the scope of the latency benchmark.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. Performance numbers are official description claims without supporting methodology in the available evidence.

## 8. Product Launch: Agent Engine | DevCon 6

video_id: mDGjptFvePY
official_url: https://www.youtube.com/watch?v=mDGjptFvePY
upload_date: 2026-07-14
official_title: Product Launch: Agent Engine | DevCon 6

**What it is about:** Palantir Group Lead Natasha Armbrust launches Agent Engine and Agent SDK as programming foundations for agents modeled internally as distributed state machines and designed for multiple human and software participants.

**What they are building/working on:** The framework exposes three primitives: context items for strongly typed session data, events for responding to state changes, and effects for interacting with external systems. A patient-discharge agent pauses for nurse approval, reassesses when a new lab result arrives, and displays its reasoning to participants.

**Named products/organizations:** Palantir; Agent Engine; Agent SDK; Natasha Armbrust.

**Practical significance:** Event-driven state and explicit effects address long-running workflows in which new data and human decisions can arrive asynchronously. **Inference:** The distributed-state-machine framing may improve recoverability and auditability, but those guarantees belong more directly to the separately described Orchestrator; the available description does not define Agent Engine's consistency or persistence semantics.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; implementation details beyond the three named primitives are not established by the available evidence.

## 9. Product Launch: Agent Infrastructure Layer: Orchestrator | DevCon 6

video_id: ZTw66mjYATo
official_url: https://www.youtube.com/watch?v=ZTw66mjYATo
upload_date: 2026-07-14
official_title: Product Launch: Agent Infrastructure Layer: Orchestrator | DevCon 6

**What it is about:** Palantir Group Lead John Mathews launches Orchestrator as infrastructure for trustworthy, long-running agent execution, emphasizing resilience and exact resumption rather than raw model intelligence.

**What they are building/working on:** Orchestrator is described as a durable execution layer that allows agents to crash, recover, wait, and resume from the same point. A patient-discharge agent is torn down mid-task and rehydrated days later with no lost state, no duplicate side effects, and no compute used while it waits for physician approval.

**Named products/organizations:** Palantir; Orchestrator; John Mathews.

**Practical significance:** Durable state, idempotent side-effect handling, and compute-free waiting are core requirements for agent workflows spanning failures and delayed human approvals. **Inference:** The design appears aimed at workflow-engine semantics for agentic systems, but the description does not disclose storage architecture, delivery guarantees, retry policy, or failure-domain testing.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; architectural guarantees are repeated only as stated in the official description.

## 10. Ankit Shankar Opening Remarks | DevCon 6

video_id: 6_6OvDIET_w
official_url: https://www.youtube.com/watch?v=6_6OvDIET_w
upload_date: 2026-07-14
official_title: Ankit Shankar Opening Remarks | DevCon 6

**What it is about:** Palantir Software Engineer Ankit Shankar frames the DevCon 6 agent releases around the claim that production usefulness is constrained by trust: teams need to understand agent work before increasing autonomy.

**What they are building/working on:** He unveils an Ontology-based Agent Stack comprising Orchestrator for durable execution; Agent Engine and Agent SDK for agent construction; Agent Manager for actionable telemetry and observability; and AIP Evolve for continuous end-to-end optimization. A simple agent is tested against race conditions, human approvals, and mid-task crashes.

**Named products/organizations:** Palantir; Agent Stack; Ontology; Orchestrator; Agent Engine; Agent SDK; Agent Manager; AIP Evolve; Ankit Shankar.

**Practical significance:** The stack maps distinct production concerns—construction, execution, observation, optimization, and governance—to complementary products, presenting reliability and oversight as prerequisites for autonomy. **Inference:** This is the architectural thesis tying the other batch videos together; the description does not establish how the products integrate at API level or whether all components are generally available.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; the stress-test cases and product roles are limited to what the official description states.

---

# Batch 02 — Videos 11–20

## Batch themes

This batch centers on putting AI into operational systems rather than treating it as a standalone chatbot. The recurring architecture is Palantir's Ontology as a governed representation of the business, with AIP or specialized products layered on top for agents, planning, invoice review, customer service, field dispatch, supply-chain coordination, cybersecurity, shipbuilding, and healthcare operations. A second theme is production discipline: governance, secure tool access, durable agent infrastructure, and reduction of noisy machine output into decisions a human team can act on. Two videos provide very little source detail; their interpretations are therefore deliberately narrow.

## 11. Agents That Do Real Work | Hype Reel | DevCon 6

video_id: sohHJ-RL7xc

- Official URL: https://www.youtube.com/watch?v=sohHJ-RL7xc
- Upload date: 2026-07-14
- Official title: Agents That Do Real Work | Hype Reel | DevCon 6
- What it is about: A DevCon 6 overview of Palantir's production-agent infrastructure. It contrasts the ease of creating a basic agent with the harder enterprise requirements of trustworthiness, durability, long-running execution, optimization, contextual awareness, and autonomy.
- What they are building/working on: An integrated Agent Stack comprising Orchestrator, Agent Engine, Agent SDK, Agent Builder, Agent Manager, AIP Evolve, and SuperRepo, with the Ontology serving as the shared operational foundation.
- Named products/organizations: Palantir; DevCon 6; Agent Stack; Orchestrator; Agent Engine; Agent SDK; Agent Builder; Agent Manager; AIP Evolve; SuperRepo; Ontology.
- Practical significance: The stack is positioned as infrastructure for agents that can perform real, persistent enterprise work with business context instead of remaining isolated demos.
- Inference: The breadth of named components suggests Palantir is productizing the full agent lifecycle—building, running, coordinating, governing, and improving agents—but component-level responsibilities are not established by this source.
- Evidence basis: Official YouTube metadata and description only. Captions/transcript were unavailable; no claims here are based on viewing or a transcript.

## 12. On Repeat | 01

video_id: LTwTfwDj2As

- Official URL: https://www.youtube.com/watch?v=LTwTfwDj2As
- Upload date: 2026-07-09
- Official title: On Repeat | 01
- What it is about: A 35-second promotional video framed by the sole descriptive statement, “Forged in the field. Proven in production.” The available source does not identify a specific customer, workflow, or technical subject.
- What they are building/working on: Not specified in the official metadata or description.
- Named products/organizations: Palantir. No product or partner is named in the available text.
- Practical significance: The official framing emphasizes field deployment and production validation as Palantir's differentiator, but the source does not provide a concrete result to assess.
- Inference: “On Repeat | 01” may be the first installment of a recurring short-form campaign, but neither that interpretation nor the campaign's scope is confirmed by the available evidence.
- Evidence basis: Official YouTube metadata and one-line description only. Captions/transcript were unavailable; the video's visual or spoken content was not available as evidence.

## 13. Ontology MCP | Ontology-Powered Tools for Internal Planning

video_id: bJsHKMUqCvg

- Official URL: https://www.youtube.com/watch?v=bJsHKMUqCvg
- Upload date: 2026-07-07
- Official title: Ontology MCP | Ontology-Powered Tools for Internal Planning
- What it is about: An interview in which Chad Wahlquist and Palantir Technical Program Manager Mike Barone explain how Palantir uses Ontology MCP for its own internal planning. Retrospectives, objectives and key results, and resourcing are connected in one Ontology backend that agents can access securely.
- What they are building/working on: An agent-accessible internal planning system that unifies retrospective learning, OKR tracking, and resource allocation through ontology-powered tools.
- Named products/organizations: Palantir; Ontology MCP; Ontology; Chad Wahlquist; Mike Barone.
- Practical significance: Unifying planning concepts in a governed backend can give agents consistent organizational context while limiting them to securely exposed tools, reducing fragmentation between planning artifacts.
- Inference: The design could let lessons from past work influence goals and staffing decisions, but the specific automated actions, access controls, and measured outcomes are not described in the available text.
- Evidence basis: Official YouTube metadata and description only. Captions/transcript were unavailable; detailed interview content beyond the description is not represented.

## 14. Transforming Rail with AI FDE | Palantir and Trinity Industries

video_id: D5t6384lqoE

- Official URL: https://www.youtube.com/watch?v=D5t6384lqoE
- Upload date: 2026-06-25
- Official title: Transforming Rail with AI FDE | Palantir and Trinity Industries
- What it is about: Trinity Industries CEO and President Jean Savage works with Palantir Software Engineer Ankit Shankar to demonstrate building an intelligent repair-invoice auditing workflow for a railcar leasing business with 140,000 railcars, $8 billion in assets, and thousands of invoices to audit each month.
- What they are building/working on: A production-oriented auditing application built with Palantir AI FDE, spanning source-data ingestion, ontology design, and an application that can review repair invoices. The description says the end-to-end build unfolds in minutes.
- Named products/organizations: Palantir; Palantir AI FDE; Foundry; Ontology; Trinity Industries; Jean Savage; Ankit Shankar.
- Practical significance: The workflow targets a high-volume control task tied directly to fleet-maintenance spending, potentially helping reviewers identify invoice issues more consistently and focus attention where it is needed.
- Inference: Likely benefits include faster audit throughput and better cost control, but the source provides no measured accuracy, savings, human-review design, or production deployment result.
- Evidence basis: Official YouTube metadata and description only. Captions/transcript were unavailable; the build steps and performance cannot be independently detailed from the provided evidence.

## 15. Ontology Governance | Building a Robust Ontology

video_id: mzBDupsPPcs

- Official URL: https://www.youtube.com/watch?v=mzBDupsPPcs
- Upload date: 2026-06-23
- Official title: Ontology Governance | Building a Robust Ontology
- What it is about: An interview between Chad Wahlquist and Palantir Forward Deployed Engineer Jonas Lang about four core design principles for a well-governed ontology and the modeling anti-patterns that undermine otherwise well-intentioned implementations.
- What they are building/working on: Guidance and governance practices for designing robust Palantir Ontologies, including a focus on avoiding structural modeling mistakes. The official description does not enumerate the four principles or anti-patterns.
- Named products/organizations: Palantir; Foundry; Ontology; Chad Wahlquist; Jonas Lang.
- Practical significance: Ontology quality affects whether operational applications and agents can rely on stable, intelligible business objects and relationships. Governance is therefore presented as foundational engineering work, not administrative cleanup.
- Inference: The topic likely addresses maintainability, ownership, consistency, and evolution of shared models, but those specific principles should not be attributed to the interview without transcript evidence.
- Evidence basis: Official YouTube metadata and description only, plus an official description link to Palantir's Ontology best-practices documentation. Captions/transcript were unavailable; the linked documentation was not used as a substitute for the video's content.

## 16. ShipOS Supplier Spotlight | How a Navy Submarine Supplier Uses ShipOS to Improve Their Operations

video_id: ZsW_4Ugj6t0

- Official URL: https://www.youtube.com/watch?v=ZsW_4Ugj6t0
- Upload date: 2026-06-22
- Official title: ShipOS Supplier Spotlight | How a Navy Submarine Supplier Uses ShipOS to Improve Their Operations
- What it is about: A supplier spotlight on Keel, identified as a critical participant in the U.S. submarine industrial base, showing how it uses ShipOS to change its operations.
- What they are building/working on: ShipOS, a U.S. Navy program deploying Palantir Foundry across submarine-industrial-base suppliers to accelerate production, improve operational efficiency, and help deliver ships faster. The available description does not identify Keel's specific workflows or quantified results.
- Named products/organizations: Keel; U.S. Navy; Palantir; ShipOS; Foundry; U.S. submarine industrial base.
- Practical significance: A shared operational platform across suppliers is intended to address production speed and efficiency in a strategically important, multi-organization manufacturing network.
- Inference: ShipOS may improve coordination and production visibility across the supplier base, but the description does not establish which data is shared, what decisions are supported, or how Keel's performance changed.
- Evidence basis: Official YouTube metadata and description only. Captions/transcript were unavailable; no supplier-level implementation details beyond the description are claimed.

## 17. Chad & George | Defending the Enterprise with Security Forge

video_id: losp2jc-hWo

- Official URL: https://www.youtube.com/watch?v=losp2jc-hWo
- Upload date: 2026-06-15
- Official title: Chad & George | Defending the Enterprise with Security Forge
- What it is about: A demonstration of Security Forge, Palantir's cybersecurity offering for source-code vulnerability detection, using autonomous analysis to turn a large set of scanner-style flags into a smaller set of findings intended to be actionable.
- What they are building/working on: A machine-speed code-security workflow that scanned a codebase, reduced 109 flags to 10 actionable findings, and reportedly cost $78, while explaining to security teams what needs fixing and why.
- Named products/organizations: Palantir; Security Forge; Chad; George.
- Practical significance: The demonstration targets a common application-security bottleneck: triaging noisy alerts into a prioritized remediation queue that developers and security teams can use.
- Inference: The 109-to-10 reduction suggests an emphasis on contextual validation and deduplication, but the available description does not disclose the codebase, benchmark method, severity mix, false-negative rate, or whether fixes were generated.
- Evidence basis: Official YouTube metadata and description only. Captions/transcript were unavailable; the numerical demonstration claims are Palantir's own description and were not independently validated.

## 18. Palantir's Ted Mabrey on AI, Healthcare, and the Future of Innovation | ARK Big Ideas Summit

video_id: bOywHUD1jZo

- Official URL: https://www.youtube.com/watch?v=bOywHUD1jZo
- Upload date: 2026-06-08
- Official title: Palantir's Ted Mabrey on AI, Healthcare, and the Future of Innovation | ARK Big Ideas Summit
- What it is about: An ARK Big Ideas Summit discussion featuring Tampa General Hospital CEO John Couris and Palantir Head of Global Commercial Ted Mabrey on transforming a complex U.S. health system and positioning the Tampa Bay region as a model for broader innovation. Cathie Wood and Brian Cornell also participate.
- What they are building/working on: A long-running Palantir–Tampa General Hospital operational transformation partnership, described as more than six years old, applying AI and related operational capabilities in healthcare. The description highlights sepsis outcomes but does not identify the exact product, model, or clinical workflow responsible.
- Named products/organizations: Palantir; Tampa General Hospital (TGH); ARK Invest; Target; ARK Big Ideas Summit; Ted Mabrey; John Couris; Cathie Wood; Brian Cornell.
- Practical significance: TGH reports that sepsis mortality fell from 10% to 5.3% and that nearly 900 patients went home who otherwise would not have. These are high-impact clinical claims and illustrate the partnership's outcome-oriented framing.
- Inference: The talk likely connects healthcare operations with regional innovation and AI adoption, but causality between Palantir technology and the reported clinical outcomes cannot be established from the description alone.
- Evidence basis: Official YouTube metadata and description only. Captions/transcript were unavailable; outcome figures are attributed to the official description and are not independently verified here.

## 19. Empowering Frontline Support with AIP | Parts Town at AIPCon 10

video_id: Ok6j_IbuTxo

- Official URL: https://www.youtube.com/watch?v=Ok6j_IbuTxo
- Upload date: 2026-06-05
- Official title: Empowering Frontline Support with AIP | Parts Town at AIPCon 10
- What it is about: An AIPCon 10 presentation on Parts Town's use of Palantir AIP across customer support and field service in specialty distribution. The core idea is to make decades of institutional knowledge available to support personnel and then reuse the same Ontology for service operations in the field.
- What they are building/working on: PartsIQ, an AIP-enabled support capability for staff, plus ontology-powered intelligent dispatch, work-order routing, and optimization of first-visit fix rates across 1,800 technicians.
- Named products/organizations: Parts Town; Palantir; AIP; PartsIQ; Ontology; AIPCon 10.
- Practical significance: The approach connects knowledge assistance at the support desk with downstream dispatch and technician execution, creating one operational context across the customer-service lifecycle.
- Inference: Reusing one Ontology could reduce handoff loss and make recommendations more consistent between support and field teams, but the source gives no adoption, response-time, or first-visit-fix improvement metrics.
- Evidence basis: Official YouTube metadata and description only. Captions/transcript were unavailable; exact product behavior and results beyond the description are not claimed.

## 20. Agentic Supply Chain for Data Center Delivery | Nscale at AIPCon 10

video_id: oSsEaz36DLU

- Official URL: https://www.youtube.com/watch?v=oSsEaz36DLU
- Upload date: 2026-06-05
- Official title: Agentic Supply Chain for Data Center Delivery | Nscale at AIPCon 10
- What it is about: An AIPCon 10 presentation on Nscale using Palantir AIP to operate the supply chain behind large-scale AI infrastructure. It addresses tens of millions of components across multiple data-center construction projects, rapid changes in hardware, and long-lead procurement.
- What they are building/working on: Ontology-backed agentic workflows for coordinating data-center delivery and scaling the on-time deployment of gigawatts of GPU compute.
- Named products/organizations: Nscale; Palantir; AIP; Ontology; AIPCon 10.
- Practical significance: Data-center programs must synchronize huge component inventories, construction schedules, hardware transitions, and procurement constraints; agentic workflows are being applied to keep these dependencies aligned as delivery volume grows.
- Inference: Likely use cases include exception detection, schedule-risk analysis, procurement prioritization, and cross-project coordination, but the official description does not specify individual agents, autonomy boundaries, or measured delivery improvements.
- Evidence basis: Official YouTube metadata and description only. Captions/transcript were unavailable; scale and delivery claims are those of the official description and were not independently validated.

---

# Batch 03 — AIPCon 10 operational AI systems

## Batch themes

These ten AIPCon 10 videos center on organizations turning governed operational data into domain-specific control towers, workflows, and agents. The recurring pattern is Palantir's Ontology as a shared operational model, AIP for agent-assisted decisions, and Apollo for controlled software delivery. The showcased work spans cybersecurity, agriculture, vehicle fleets, legal services, construction, workforce scheduling, and air mobility. Most examples emphasize connecting fragmented systems and institutional knowledge so that people can make and execute cross-functional decisions faster. Evidence is limited to official YouTube metadata and descriptions for all ten videos; captions/transcripts were unavailable, so the notes do not attribute unverified spoken claims.

## 21. Security Forge + Apollo: Complete Domain Assurance at Scale | Accenture at AIPCon 10

video_id: NLsXIIkGJ4o  
official_url: https://www.youtube.com/watch?v=NLsXIIkGJ4o  
upload_date: 2026-06-05  
official_title: Security Forge + Apollo: Complete Domain Assurance at Scale | Accenture at AIPCon 10

**What it is about:** Accenture CISO Kris Burkhardt presents Security Forge and Apollo as a closed-loop, agentic cybersecurity system designed to defend large software estates at machine speed. The described loop hunts for vulnerabilities across codebases, sends findings to human engineers for adjudication, automates remediation, and deploys patches across a fleet.

**What they are building/working on:** Accenture and Palantir are building specialized vulnerability-hunting agent pipelines, human review gates, remediation agent swarms, and Apollo-based patch deployment into one end-to-end security operation.

**Named products/organizations:** Accenture; Palantir; Security Forge; Apollo; AIPCon 10; Kris Burkhardt.

**Practical significance:** The system is intended to compress the time from vulnerability discovery to governed fleet-wide remediation while retaining human adjudication. The claim that this can help defenders outpace sophisticated attacks is source-backed as the stated purpose, not independently validated here.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable. No details beyond the described architecture and workflow are treated as verified.

## 22. Delivering AI to Every Farmer in America | USDA at AIPCon 10

video_id: vnhcPBf9UoY  
official_url: https://www.youtube.com/watch?v=vnhcPBf9UoY  
upload_date: 2026-06-05  
official_title: Delivering AI to Every Farmer in America | USDA at AIPCon 10

**What it is about:** USDA CIO Sam Berry describes consolidating hundreds of fragmented legacy systems into a governed Ontology through the “One Farmer, One File” initiative. The Landmark platform is presented as supporting AI-assisted acreage reporting and assistance delivery through the Farmer Bridge Assistance Program.

**What they are building/working on:** USDA and Palantir are working on a unified farmer-centered data and workflow layer, called Landmark, that connects records and enables AI-assisted agricultural administration and capital deployment.

**Named products/organizations:** U.S. Department of Agriculture (USDA); Palantir; Landmark; Ontology; One Farmer, One File; Farmer Bridge Assistance Program; AIPCon 10; Sam Berry.

**Practical significance:** A shared, governed farmer record could reduce fragmentation across USDA services and make reporting and assistance workflows faster. The description calls the assistance deployment the fastest in USDA history; this note records that official claim but does not independently verify it.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable; implementation detail, measured outcomes, and the historical speed claim were not independently checked.

## 23. Orchestrating Fleet-Wide Operational Excellence | Hertz at AIPCon 10

video_id: kqpzUGtZvNI  
official_url: https://www.youtube.com/watch?v=kqpzUGtZvNI  
upload_date: 2026-06-05  
official_title: Orchestrating Fleet-Wide Operational Excellence | Hertz at AIPCon 10

**What it is about:** Hertz presents Daytona, a Palantir AIP-powered control tower for real-time operations across a fleet of approximately half a million vehicles. Collaborating agents are described as traversing an Ontology at individual-VIN granularity to handle safety-event triage, maintenance planning, vehicle transportation, and customer assignment.

**What they are building/working on:** Hertz is building a cross-functional fleet orchestration layer that connects roughly four million monthly operational touchpoints and optimizes decisions across the whole fleet rather than within isolated departments.

**Named products/organizations:** Hertz; Palantir; Palantir AIP; Daytona; Ontology; AIPCon 10.

**Practical significance:** Connecting vehicle-level state to safety, maintenance, logistics, and allocation decisions could reduce handoff delays and local optimization conflicts. This is an inference from the described architecture; no measured operational result is available in the provided evidence.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable. Fleet size, touchpoint volume, and workflow coverage are official-description claims.

## 24. Pioneering AI for Private Equity Fundraising | Kirkland & Ellis at AIPCon 10

video_id: sCjcd8t1hio  
official_url: https://www.youtube.com/watch?v=sCjcd8t1hio  
upload_date: 2026-06-05  
official_title: Pioneering AI for Private Equity Fundraising | Kirkland & Ellis at AIPCon 10

**What it is about:** Kirkland & Ellis introduces the Fund Formation Engine, described as a new Palantir-based operating model for private-equity fundraising legal work. It centralizes decades of institutional knowledge from more than 1,000 lawyers and places that knowledge into the fundraising lifecycle.

**What they are building/working on:** The firm is working on an integrated legal workflow covering document drafting, investor-comment management, side-letter generation, and long-term obligation tracking, with institutional knowledge available at judgment points.

**Named products/organizations:** Kirkland & Ellis; Palantir; Fund Formation Engine; AIPCon 10.

**Practical significance:** The system aims to make specialist knowledge reusable across fund-formation matters, improving consistency and efficiency while keeping legal judgment grounded in the firm's prior work. “Better outcomes” and “maximal efficiency” are promotional aims in the official description, not independently demonstrated results.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable; no additional claims about model behavior, safeguards, or achieved performance are made.

## 25. Deploying 160 Years of Tradecraft to Every Project | McCarthy Building Companies at AIPCon 10

video_id: P9gQP88eQ-k  
official_url: https://www.youtube.com/watch?v=P9gQP88eQ-k  
upload_date: 2026-06-05  
official_title: Deploying 160 Years of Tradecraft to Every Project | McCarthy Building Companies at AIPCon 10

**What it is about:** McCarthy Building Companies presents Pulse, a construction operations-intelligence mission control built with Palantir AIP on the McCarthy Ontology. It is positioned as encoding more than 160 years of construction experience for use in active projects.

**What they are building/working on:** McCarthy is building AI-agent-assisted workflows that help superintendents surface risks across 5,000 concurrent activities, run schedule and procurement scenarios, and manage stakeholder communications from one operational environment.

**Named products/organizations:** McCarthy Building Companies; Palantir; Palantir AIP; Pulse; McCarthy Ontology; AIPCon 10.

**Practical significance:** The system is intended to focus superintendent attention on the job-site issues that most need human intervention while connecting schedule, procurement, risk, and communication. The activity count and experience history are source claims; no independent outcome data is supplied.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable.

## 26. Asymmetric Advantage | Intro at AIPCon 10

video_id: IeHOZO03suA  
official_url: https://www.youtube.com/watch?v=IeHOZO03suA  
upload_date: 2026-06-05  
official_title: Asymmetric Advantage | Intro at AIPCon 10

**What it is about:** This is a 66-second AIPCon 10 introduction titled “Asymmetric Advantage.” The available metadata does not establish its specific argument, examples, or narration.

**What they are building/working on:** No particular product, implementation, or customer project is identified by the available source metadata.

**Named products/organizations:** Palantir (publishing channel); AIPCon 10. “Asymmetric Advantage” is the segment title, not treated here as a confirmed product name.

**Practical significance:** Inference only: as an event intro, it likely frames the conference around obtaining disproportionate operational advantage from AI, but the source material available for this review is insufficient to summarize the framing with confidence.

**Evidence basis:** Official title, duration, upload date, and channel metadata only. The official description is empty and captions/transcript are unavailable; therefore no substantive content claims are made.

## 27. Securing Software Distribution in the Age of AI | Apollo In the Field at AIPCon 10

video_id: -ZeL8QZ9Ib4  
official_url: https://www.youtube.com/watch?v=-ZeL8QZ9Ib4  
upload_date: 2026-06-05  
official_title: Securing Software Distribution in the Age of AI | Apollo In the Field at AIPCon 10

**What it is about:** Palantir explains Apollo as the deployment infrastructure behind Foundry and AIP installations. The security case is that rising AI-assisted code production and vulnerability discovery make reliable rollback, remediation, and redeployment across varied computing environments essential.

**What they are building/working on:** Palantir is operating and developing Apollo as a substrate-independent software-distribution and deployment control plane for Foundry and AIP, with fleet-wide rollback and remediation capabilities.

**Named products/organizations:** Palantir; Apollo; Foundry; AIP; AIPCon 10.

**Practical significance:** Apollo is presented as the delivery layer that turns fixes into controlled deployments across heterogeneous infrastructure, linking software operations directly to security response. The description's broader characterization of AI coding and adversary scale is framing, not independently assessed evidence.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable; exact supported substrates and technical controls are not specified in the supplied evidence.

## 28. From Paper Schedules to AI Workforce Orchestration | Mixology In the Field at AIPCon 10

video_id: kXAerjv8s2s  
official_url: https://www.youtube.com/watch?v=kXAerjv8s2s  
upload_date: 2026-06-05  
official_title: From Paper Schedules to AI Workforce Orchestration | Mixology In the Field at AIPCon 10

**What it is about:** Mixology's CEO recounts a shift from addressing workforce scheduling to encoding 16 years of business knowledge in Palantir's Ontology. The effort expanded into dozens of applications and agents after the CEO undertook analyst training in response to what the description calls a “burn-the-boats” moment.

**What they are building/working on:** Mixology is working on an Ontology-based operational system for workforce orchestration and broader business processes, supported by multiple applications and agents rather than a standalone scheduling tool.

**Named products/organizations:** Mixology; Palantir; Ontology; AIPCon 10. The description does not name the individual applications or agents.

**Practical significance:** The example suggests that formalizing tribal knowledge can let a small team rapidly build reusable operational workflows. The claim that an afternoon's work replaced solutions once costing hundreds of thousands or millions of dollars is an official-description claim and lacks enough detail here for independent validation.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable; the triggering event, applications, and cost comparison are not further documented in the supplied material.

## 29. Building the Operating System for Modern Air Mobility | Surf Air In the Field at AIPCon 10

video_id: xvgZym7YpJ8  
official_url: https://www.youtube.com/watch?v=xvgZym7YpJ8  
upload_date: 2026-06-05  
official_title: Building the Operating System for Modern Air Mobility | Surf Air In the Field at AIPCon 10

**What it is about:** Surf Air presents Surf OS, a connected operating system for air mobility built on Palantir Foundry and AIP. The described capabilities include fuel optimization, a real-time control tower for operations, maintenance, and flight leadership, and an AIP-powered pricing engine spanning thousands of flights.

**What they are building/working on:** Surf Air is building an integrated operational platform that connects flight economics and day-to-day execution. The official description says fuel optimization was deployed in weeks, workflows that took teams days now take minutes, and connected aircraft are the next area of work.

**Named products/organizations:** Surf Air; Palantir; Surf OS; Foundry; AIP; AIPCon 10.

**Practical significance:** Connecting pricing, fuel, maintenance, and flight operations can create a shared real-time picture and shorten planning cycles. The time savings, deployment speed, and flight scale are official claims rather than independently verified measurements.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable; “connected aircraft” is recorded as a stated next step without inferring its technical design.

## 30. Decreasing Token Usage by Nearly 60% | McCarthy Building Companies In the Field at AIPCon 10

video_id: FtjgS0jYjnU  
official_url: https://www.youtube.com/watch?v=FtjgS0jYjnU  
upload_date: 2026-06-05  
official_title: Decreasing Token Usage by Nearly 60% | McCarthy Building Companies In the Field at AIPCon 10

**What it is about:** McCarthy Building Companies describes using Palantir's Ontology as a connective layer across the construction project lifecycle and more than 200 applications. The organization says it is reducing token usage by nearly 60% through Evolve while increasing cohesion across its application estate.

**What they are building/working on:** McCarthy is working on an Ontology-centered digital architecture, Evolve-based token-efficiency improvements, and an organizational model intended to accelerate delivery while preserving governance for a roughly 5,000-person company.

**Named products/organizations:** McCarthy Building Companies; Palantir; Ontology; Evolve; AIPCon 10.

**Practical significance:** The approach treats shared operational semantics and governance as a way to prevent AI applications from becoming disconnected while reducing model-compute consumption. The near-60% token reduction, 200-plus application count, and employee scale are official-description claims and are not independently verified here.

**Evidence basis:** Official title, upload date, channel metadata, and official description only. Captions/transcript unavailable; the baseline, measurement period, and mechanism for the token reduction are not provided.

---

# Batch 04 — Operational AI, industrial systems, and deployment at the edge

## Batch themes

These ten videos describe Palantir's effort to turn AI models into operational systems through the Ontology, production-agent optimization, integrated sensor and robotics networks, and domain-specific applications. The work spans multi-domain intelligence, tactical logistics, demand forecasting, predictive maintenance, recruiting, and industrial strategy. A repeated theme is connecting fragmented data and physical operations so that decisions can be made faster and then acted on through a governed system. Several videos also position Forward Deployed Engineers and American industrial capacity as central to delivering real-world outcomes rather than model capability alone.

Evidence note: captions/transcripts are unavailable for every item in this batch. All source-backed statements below come only from the supplied official Palantir metadata (title, date, URL, and description). Any interpretation beyond those statements is explicitly marked as inference.

## 31. CEO Alex Karp Opening Remarks | AIPCon 10

video_id: E1g1qALKNpM  
official_url: https://www.youtube.com/watch?v=E1g1qALKNpM  
upload_date: 2026-06-05  
official_title: CEO Alex Karp Opening Remarks | AIPCon 10

**What it is about:** Palantir CEO Alex Karp discusses the philosophical differences between Palantir and large-language-model companies. The official framing argues that LLMs alone are insufficient for solving business problems and need the Ontology to become operationally useful.

**What they are building/working on:** Palantir is positioning the Ontology as the layer that connects language models to the structure and context of a real organization so models can support problem-solving rather than operate as isolated general-purpose tools. The source does not describe a specific customer implementation or product demonstration.

**Named products/organizations:** Palantir; Ontology; large language models; AIPCon 10; Alex Karp.

**Practical significance:** The stated distinction is that enterprise AI value comes from grounding models in an organization's operational reality, not merely from access to increasingly capable models. **Inference:** This frames the Ontology as Palantir's strategic differentiation from model vendors, but the available metadata does not establish the detailed argument, implementation mechanics, or measured outcomes.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and description only. Captions/transcript unavailable; the specific philosophical contrasts and examples used in the remarks cannot be verified from the supplied evidence.

## 32. Chad & Colton | Making Agents More Efficient and Cost Effective

video_id: p0pjtkg1ny4  
official_url: https://www.youtube.com/watch?v=p0pjtkg1ny4  
upload_date: 2026-05-29  
official_title: Chad & Colton | Making Agents More Efficient and Cost Effective

**What it is about:** Chad and Colton present AIP Evolve, a new Palantir product intended to make agents more efficient and cost-effective. The demonstration focuses on systematically changing an agent's models and prompts, validating the resulting output, and finding structured Ontology data that can replace unnecessary model calls.

**What they are building/working on:** They use AIP Evolve to autonomously swap models, tune prompts, validate outputs, and identify structured data in the Ontology. The official description says this process eliminated two LLM calls while reducing compute cost and improving production accuracy and reliability.

**Named products/organizations:** Palantir; AIP Evolve; Ontology; large language models; Chad; Colton.

**Practical significance:** The work targets a central production-agent tradeoff: improving quality and reliability without allowing inference cost or workflow complexity to grow unchecked. Replacing model calls with available structured data can make an agent less dependent on probabilistic generation. The improvements are official claims; no benchmarks, baselines, or validation metrics are supplied here.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and description only. Captions/transcript unavailable. The two-call reduction and improvements in cost, accuracy, and reliability are reported as official-description claims, not independently verified results.

## 33. Palantir, Ondas & World View | Multi-Domain Intelligence in the Stratosphere

video_id: XgZZRV77D8k  
official_url: https://www.youtube.com/watch?v=XgZZRV77D8k  
upload_date: 2026-05-26  
official_title: Palantir, Ondas & World View | Multi-Domain Intelligence in the Stratosphere

**What it is about:** Ondas CEO Eric Brock, World View CEO Ryan Hartman, and Palantir Forward Deployed Engineer Matt Shepherd discuss connecting stratospheric balloons, drones, ground robotics, and agentic AI into a multi-domain intelligence system for defense and commercial users.

**What they are building/working on:** The organizations are integrating high-altitude platforms, airborne systems, ground robots, and AI-driven analysis or coordination to deliver what the description calls “speed to decision.” The available source establishes the connected domains and intended users but does not identify the software architecture, sensor payloads, autonomy boundaries, or a specific deployed mission.

**Named products/organizations:** Palantir; Ondas; World View; agentic AI; stratospheric balloons; drones; ground robotics; Eric Brock; Ryan Hartman; Matt Shepherd.

**Practical significance:** Combining observations and actions across stratospheric, aerial, and ground assets could give operators a more coherent picture and shorten the path from sensing to decision. **Inference:** The presentation likely concerns orchestration and data fusion across heterogeneous platforms, but those technical functions are not explicitly described in the supplied metadata.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and description only. Captions/transcript unavailable; “speed to decision” and applicability to warfighters and commercial customers are official-positioning claims without supplied performance evidence.

## 34. Highlights | AIPCon 9

video_id: I7siZgE533E  
official_url: https://www.youtube.com/watch?v=I7siZgE533E  
upload_date: 2026-05-07  
official_title: Highlights | AIPCon 9

**What it is about:** A short highlights video for AIPCon 9. Its only descriptive text is the line, “Any sufficiently advanced technology is indistinguishable from magic,” so the specific speakers, demonstrations, customers, and systems shown are not identified by the available evidence.

**What they are building/working on:** Not specified in the official metadata beyond the association with AIPCon 9. No particular product, workflow, or project can be reliably attributed to this video from the supplied source.

**Named products/organizations:** Palantir; AIPCon 9. No partner organization or product is named in the available text.

**Practical significance:** The video functions as an event-level promotional recap. **Inference:** Its framing suggests an emphasis on impressive or seemingly transformative technology demonstrations, but the source does not provide enough detail to assess operational significance.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and one-line description only. Captions/transcript unavailable; no claims about the visual montage or event presentations are made.

## 35. Recruiting Hackathon | The Palantir Coffee Cup

video_id: HSBgANg-pkQ  
official_url: https://www.youtube.com/watch?v=HSBgANg-pkQ  
upload_date: 2026-05-07  
official_title: Recruiting Hackathon | The Palantir Coffee Cup

**What it is about:** Palantir Forward Deployed Engineers introduce the Coffee Cup, an AIP-powered recruiting hackathon in which candidates compete to operate the best coffee shop. The event is presented as a way to identify and hire people whose approach matches the FDE focus on achieving outcomes.

**What they are building/working on:** Palantir has built a competitive, simulated operating environment around running a coffee shop with AIP. Candidates use the environment to solve an outcome-oriented operational problem, and Palantir uses their performance as part of recruiting.

**Named products/organizations:** Palantir; AIP; Coffee Cup; Forward Deployed Engineers (FDEs).

**Practical significance:** The hackathon turns recruiting into a practical evaluation of how candidates work with Palantir technology under an operational objective. **Inference:** This may reveal systems thinking, iteration, prioritization, and comfort with ambiguous real-world problems more directly than conventional interviews, but the judging criteria and hiring outcomes are not supplied.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and description only. Captions/transcript unavailable; the competition mechanics, technical tasks, evaluation rubric, and hiring results are not established by the available evidence.

## 36. Palantir Technologies | Q1 2026 Earnings Webcast

video_id: 1Aghjshi3U8  
official_url: https://www.youtube.com/watch?v=1Aghjshi3U8  
upload_date: 2026-05-05  
official_title: Palantir Technologies | Q1 2026 Earnings Webcast

**What it is about:** Palantir's webcast concerning its first-quarter 2026 earnings. The supplied description contains legal and investor-relations disclaimers but does not summarize the financial results, management commentary, product developments, or customer activity discussed.

**What they are building/working on:** No specific product or active workstream is identified in the supplied title or description. Although an earnings webcast may discuss company performance and strategy, those contents cannot be reconstructed from the available metadata.

**Named products/organizations:** Palantir Technologies; Palantir Investor Relations; U.S. Securities and Exchange Commission (SEC, referenced through SEC filings).

**Practical significance:** The webcast is an official investor communication whose stated information reflects Palantir's views as of May 4, 2026 and should be considered alongside its press release and SEC filings. The available evidence does not support a summary of the quarter's results or implications.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and disclaimer-only description. Captions/transcript unavailable, and the referenced investor-relations materials were not substituted for the video's content.

## 37. Palantir & Fedrigoni | When Scattered Data Finally Talks to Each Other

video_id: DY3XZZBR7Lc  
official_url: https://www.youtube.com/watch?v=DY3XZZBR7Lc  
upload_date: 2026-04-23  
official_title: Palantir & Fedrigoni | When Scattered Data Finally Talks to Each Other

**What it is about:** Fedrigoni uses Palantir to connect fragmented data from multiple systems into a unified intelligence layer. The highlighted business problem is demand forecasting and cross-team coordination in serving major brands without delay.

**What they are building/working on:** Palantir and Fedrigoni have connected previously scattered operational data and transformed the demand-forecasting workflow. The official description says forecasts can be produced with precision in twenty minutes, enabling teams to coordinate around the same information.

**Named products/organizations:** Palantir; Fedrigoni. No specific Palantir product is named in the supplied metadata.

**Practical significance:** A shared view of demand can reduce the delays and contradictions created when functions plan from separate systems. The “twenty minutes of precision” result and the ability to serve customers without delay are official claims; the source does not define the prior baseline, forecast horizon, accuracy measure, or causal evidence.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and description only. Captions/transcript unavailable. The data unification and twenty-minute forecasting statements are preserved as official claims and are not independently validated.

## 38. Palantir for Builders | Deploying into Maven Smart System ft. Gallatin AI

video_id: jK5k9_Gql-I  
official_url: https://www.youtube.com/watch?v=jK5k9_Gql-I  
upload_date: 2026-04-16  
official_title: Palantir for Builders | Deploying into Maven Smart System ft. Gallatin AI

**What it is about:** Daniel Buchmueller shows Chad Wahlquist how Gallatin AI's Navigator application, built on Palantir Foundry and deployed through Maven Smart System, is intended to transform tactical resupply at the edge.

**What they are building/working on:** Gallatin AI is building Navigator on Foundry and delivering it to operational users through Maven Smart System. The source identifies tactical resupply as the application domain and says Palantir enabled Gallatin AI to serve customers faster, but it does not describe Navigator's features, models, decision logic, or field results.

**Named products/organizations:** Palantir; Gallatin AI; Navigator; Palantir Foundry; Maven Smart System; Daniel Buchmueller; Chad Wahlquist.

**Practical significance:** The example shows an external builder using Palantir's platform and a defense deployment pathway to deliver an edge-logistics product. **Inference:** This may shorten the route from application development to use in tactical environments, but the extent of acceleration and the operational improvement to resupply are not quantified.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and description only. Captions/transcript unavailable; the statement that Palantir accelerated customer delivery is an attributed official-description claim.

## 39. Palantir & Metso | Predicting Machine Failures Before They Happen

video_id: EfYLwM0pcQc  
official_url: https://www.youtube.com/watch?v=EfYLwM0pcQc  
upload_date: 2026-03-26  
official_title: Palantir & Metso | Predicting Machine Failures Before They Happen

**What it is about:** Metso and Palantir present a shift in equipment support from reacting after machinery fails to predicting failures in advance. The objective is to protect customer uptime and ensure that needed replacement parts are available.

**What they are building/working on:** The partnership is developing or operating a predictive-maintenance capability that anticipates equipment failures and connects those predictions to parts readiness. The supplied metadata does not identify the machinery involved, source data, model architecture, prediction horizon, or workflow used to act on alerts.

**Named products/organizations:** Palantir; Metso. No specific Palantir product is named in the supplied metadata.

**Practical significance:** Earlier warning can allow maintenance and inventory teams to intervene before an unplanned stoppage and stage the appropriate parts. This is the intended operational value; the available source provides no accuracy, downtime, inventory, or financial metrics with which to evaluate achieved performance.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and description only. Captions/transcript unavailable; predictive support, uptime, and parts-availability outcomes are official-description claims rather than independently verified findings.

## 40. How American Industry Wins the AI Era | AIPCon 9 Discussion

video_id: dWJa0Bkbxus  
official_url: https://www.youtube.com/watch?v=dWJa0Bkbxus  
upload_date: 2026-03-24  
official_title: How American Industry Wins the AI Era | AIPCon 9 Discussion

**What it is about:** Palantir CTO Shyam Sankar and Head of Defense Mike Gallagher join Department of War Chief Digital and AI Officer Cameron Stanley, Centrus Energy CEO Amir Vexler, and World View President and CEO Ryan Hartman for a discussion about how American workers, technology, and industrial strength can shape the AI era. The described themes include decision dominance and the attitude and aptitude of the American workforce.

**What they are building/working on:** This is a strategic panel rather than a single product demonstration. The participants are discussing how defense leadership, energy and stratospheric-technology companies, industrial workers, and AI providers can combine technological and manufacturing capacity to secure future advantage. No specific joint program or technical build is identified in the available source.

**Named products/organizations:** Palantir; U.S. Department of War (DoW, as named in the official description); Centrus Energy; World View; AIPCon 9; Shyam Sankar; Mike Gallagher; Cameron Stanley; Amir Vexler; Ryan Hartman.

**Practical significance:** The panel frames AI competitiveness as an industrial and workforce challenge, not solely a model-development race, and links faster, better decisions to national and economic strength. **Inference:** The participant mix suggests an emphasis on coordination between government, software, energy, advanced platforms, and frontline workers, but the supplied description does not establish particular policy recommendations or commitments.

**Evidence basis:** Official Palantir title, upload date, channel metadata, and description only. Captions/transcript unavailable; no panelist statements beyond the official thematic summary are attributed here.

---

# Batch 05 — AIPCon 9 operational AI across institutions and industry

## Batch themes

These ten AIPCon 9 videos focus on putting AI into operating systems for consequential institutions rather than treating it as a stand-alone assistant. Repeated themes include preserving institutional knowledge in reusable agents, connecting design and supply chains to production and field operations, coordinating multi-domain missions, modernizing legacy workflows with write-back and optimization, and joining software intelligence to physical assets. The settings span consulting, aerospace and defense, stratospheric sensing, shipbuilding, nuclear fuel, healthcare accreditation, and hospital operations.

Evidence note: captions/transcripts are unavailable for every item in this batch. All source-backed statements below come only from the supplied official Palantir metadata (title, date, URL, and description). Any interpretation beyond those statements is explicitly marked as inference. Several descriptions characterize demonstrations or partner claims but provide no quantitative validation; one World View demonstration explicitly uses notional data.

## 1. Activating the AI Hivemind | Accenture at AIPCon 9

video_id: uEkuzBqp-mU
official_url: https://www.youtube.com/watch?v=uEkuzBqp-mU
upload_date: 2026-03-19
official_title: Activating the AI Hivemind | Accenture at AIPCon 9

**What it is about:** Accenture Advanced AI Delivery Lead Tracy Venable describes how Accenture and Palantir are working together to turn accumulated enterprise-consulting expertise into operational AI agents.

**What they are building/working on:** The partnership is operationalizing knowledge from thousands of deployments so that each engagement can build on prior institutional learning. The stated use case is ERP migration, with a claimed compression of delivery from months to weeks and an aim of producing business value from the first day.

**Named products/organizations:** Accenture; Palantir; ERP systems; Tracy Venable.

**Practical significance:** Reusable agent knowledge could make consulting delivery less dependent on rediscovering lessons engagement by engagement. **Inference:** “AI hivemind” appears to describe a shared institutional-learning model rather than a formally identified product; the metadata does not explain agent architecture, knowledge controls, or how the time-compression claim was measured.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. The ERP timeline and day-one-value statements are official presentation claims, not independently validated results.

## 2. ArsenalOS: Architecture from Design to Deployment | Northrop Grumman at AIPCon 9

video_id: 8lU-xRDovRk
official_url: https://www.youtube.com/watch?v=8lU-xRDovRk
upload_date: 2026-03-16
official_title: ArsenalOS: Architecture from Design to Deployment | Northrop Grumman at AIPCon 9

**What it is about:** Northrop Grumman executive Rebecca Torzone presents ArsenalOS as a Palantir-powered operating system connecting the defense-production value chain from architecture and design through delivery to the warfighter.

**What they are building/working on:** ArsenalOS links design, supply-chain, manufacturing, and deployment activities with the stated objective of moving capabilities through that chain at mission speed.

**Named products/organizations:** ArsenalOS; Northrop Grumman; Palantir; Rebecca Torzone; warfighter.

**Practical significance:** A connected operating layer could give program teams a common operational picture across stages that are often managed in separate systems. **Inference:** The description implies end-to-end data and workflow coordination, but it does not establish the underlying architecture, specific integrations, deployment maturity, or measured cycle-time gains.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; “Palantir-powered,” scope across the value chain, and mission-speed objective are official claims.

## 3. Scaling Stratospheric Intelligence with AI | World View at AIPCon 9

video_id: WkU-Bl0xFus
official_url: https://www.youtube.com/watch?v=WkU-Bl0xFus
upload_date: 2026-03-14
official_title: Scaling Stratospheric Intelligence with AI | World View at AIPCon 9

**What it is about:** World View CEO Ryan Hartman explains how AI and Palantir technology are intended to shift stratospheric-balloon operations from managing individual missions to managing fleets.

**What they are building/working on:** The work combines autonomous mission planning with multi-domain intelligence coordination so operators can oversee multiple balloon missions as a fleet.

**Named products/organizations:** World View; Palantir; AI; stratospheric balloons; Ryan Hartman.

**Practical significance:** Fleet-level planning could increase the scale and coordination of persistent stratospheric sensing without requiring mission management to grow one-for-one with each platform. **Inference:** The likely value is higher operator leverage and broader intelligence coverage, but neither autonomy boundaries nor operational performance is documented in the metadata.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. The official description explicitly says all shown data is notional and actual results and experiences may vary.

## 4. Accelerating American Shipbuilding with ShipOS | U.S. Navy at AIPCon 9

video_id: 3UMNo9py7lc
official_url: https://www.youtube.com/watch?v=3UMNo9py7lc
upload_date: 2026-03-13
official_title: Accelerating American Shipbuilding with ShipOS | U.S. Navy at AIPCon 9

**What it is about:** Vice Admiral Seiko Okano demonstrates ShipOS as an AI-enabled system intended to improve the American maritime industrial base and accelerate naval ship production.

**What they are building/working on:** ShipOS is being used to orchestrate complex supply chains and optimize shipyard operations across submarine and surface-vessel production, with an emphasis on helping workers and suppliers build the fleet faster.

**Named products/organizations:** ShipOS; U.S. Navy; American maritime industrial base; Vice Admiral Seiko Okano; shipyards; suppliers.

**Practical significance:** Coordinating supplier constraints with yard operations could expose bottlenecks earlier and improve production decisions across a distributed industrial base. **Inference:** The description frames ShipOS as a cross-enterprise production-control layer, but it supplies no implementation scope, optimization method, adoption level, or quantified schedule improvement.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; transformation and acceleration language represents official presentation claims.

## 5. How to Win Maximally | Ted Mabrey at AIPCon 9

video_id: i16bPp9lCPc
official_url: https://www.youtube.com/watch?v=i16bPp9lCPc
upload_date: 2026-03-13
official_title: How to Win Maximally | Ted Mabrey at AIPCon 9

**What it is about:** Palantir Global Head of Commercial Ted Mabrey discusses a reported step change in how Palantir works with partners to scale and operationalize its products.

**What they are building/working on:** Palantir is evolving its partner engagement model to increase the scale and operational adoption of its products. The talk is framed around what changed, why the company believes it matters, and how the new model supports its goal to “win maximally.”

**Named products/organizations:** Palantir; Palantir partners; Ted Mabrey.

**Practical significance:** A changed partner model may expand delivery capacity and make repeatable deployments possible beyond direct Palantir-led engagements. **Inference:** The metadata does not identify the new model's mechanics, partner incentives, governance, products, or outcome metrics, so the precise strategic change cannot be reconstructed from available evidence.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; this item supports only a high-level commercial-strategy summary.

## 6. Multi-Domain AI: The Future of Command and Control | CDAO at AIPCon 9

video_id: yrtDgoqWmgM
official_url: https://www.youtube.com/watch?v=yrtDgoqWmgM
upload_date: 2026-03-13
official_title: Multi-Domain AI: The Future of Command and Control | CDAO at AIPCon 9

**What it is about:** Cameron Stanley, identified in the official description as Chief Digital and Artificial Intelligence Officer of the Department of War, discusses enterprise adoption of data, analytics, and AI to create decision advantage in command-and-control settings.

**What they are building/working on:** The organization is working to move cutting-edge technology from laboratory environments into warfighter use quickly, while driving adoption of data, analytics, and AI across the enterprise.

**Named products/organizations:** CDAO; Department of War (as named in the supplied official metadata); Cameron Stanley; warfighter; AI; command and control.

**Practical significance:** Enterprise-wide adoption and rapid operational transition are intended to turn technical capability into timely decisions across domains. **Inference:** The title suggests multi-domain command-and-control integration, but the metadata does not identify a particular system, Palantir product, domain architecture, fielded workflow, or performance result.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. Organizational title and department naming are preserved exactly in substance from the supplied official description and are not independently verified here.

## 7. Building America's Nuclear Future | Centrus Energy at AIPCon 9

video_id: hjIzKUeXmAk
official_url: https://www.youtube.com/watch?v=hjIzKUeXmAk
upload_date: 2026-03-13
official_title: Building America's Nuclear Future | Centrus Energy at AIPCon 9

**What it is about:** Patrick Brown describes how Centrus Energy is using Palantir to support expansion of domestic uranium production for a renewed U.S. nuclear-energy sector.

**What they are building/working on:** Centrus is orchestrating agents across quality, procurement, and manufacturing, aiming to provide real-time visibility and predictive action as production scales.

**Named products/organizations:** Centrus Energy; Palantir; Patrick Brown; U.S. nuclear-energy sector; uranium production.

**Practical significance:** Coordinating quality, buying, and manufacturing decisions in one operational system could help manage the dependencies and compliance-sensitive work involved in scaling a critical fuel supply chain. **Inference:** “Predictive action” likely means anticipating and responding to operational constraints, but the description does not identify models, human approvals, regulatory controls, production stage, or measured output gains.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; nuclear-renaissance and scaling claims reflect the official presentation framing.

## 8. Replatforming Healthcare Accreditation | Joint Commission at AIPCon 9

video_id: oJJ3W6pWfPE
official_url: https://www.youtube.com/watch?v=oJJ3W6pWfPE
upload_date: 2026-03-13
official_title: Replatforming Healthcare Accreditation | Joint Commission at AIPCon 9

**What it is about:** William Walders explains how Joint Commission partnered with Palantir to modernize business systems accumulated over 75 years into an intelligent operating system for healthcare accreditation.

**What they are building/working on:** The new operating system includes bidirectional write-back, solver optimization, and agentic workflows, with the stated goals of reducing provider burden while preserving patient-safety and quality standards.

**Named products/organizations:** Joint Commission; Palantir; William Walders; healthcare providers; intelligent operating system; solver optimization; agentic workflows.

**Practical significance:** Combining workflow automation, optimization, and write-back could replace fragmented manual handoffs and allow accreditation decisions to flow back into systems of record. **Inference:** The work appears to replatform both data and operational processes, but the metadata does not identify source systems, solver objectives, agent permissions, rollout stage, or measured burden reduction.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. “Ossified” legacy systems, burden reduction, and maintained standards are official presentation characterizations rather than independently validated outcomes.

## 9. Software Meets Hardware: Empowering the Warfighter | GE Aerospace at AIPCon 9

video_id: ipdtAHQj0l0
official_url: https://www.youtube.com/watch?v=ipdtAHQj0l0
upload_date: 2026-03-13
official_title: Software Meets Hardware: Empowering the Warfighter | GE Aerospace at AIPCon 9

**What it is about:** Jess Salzbrun, CIO of GE Aerospace's Defense & Systems division, discusses combining software with aerospace hardware to address U.S. Air Force engine-readiness challenges.

**What they are building/working on:** GE Aerospace is applying software capabilities around its engine-manufacturing and support work so the engines used by future warfighters remain mission-ready.

**Named products/organizations:** GE Aerospace; GE Aerospace Defense & Systems; U.S. Air Force; U.S. Department of Defense/Department of War visual information (as noted in the supplied metadata); Jess Salzbrun; aircraft engines; warfighter.

**Practical significance:** Integrating operational software with engine data and support processes could improve readiness decisions for complex physical assets. **Inference:** Likely use cases include maintenance, parts, or fleet-status coordination, but none is stated in the supplied description; no named Palantir product, technical architecture, deployment status, or readiness metric is available.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. The metadata states that the appearance of U.S. defense visual information does not imply or constitute endorsement.

## 10. Backstage Pass | AIPCon 9

video_id: l3oRSfUEMTE
official_url: https://www.youtube.com/watch?v=l3oRSfUEMTE
upload_date: 2026-03-13
official_title: Backstage Pass | AIPCon 9

**What it is about:** Palantir Forward Deployed Architect Chad Wahlquist tours AIPCon 9's immersive demonstrations and provides a cross-section of systems and partner work shown at the conference.

**What they are building/working on:** The tour showcases ShipOS and Maven Smart System, plus work involving Teton Ridge, Armada, TeleTracking, Carilion Clinic, and Tampa General Hospital. The official description does not specify what each partner demonstration does.

**Named products/organizations:** Palantir; AIPCon 9; ShipOS; Maven Smart System; Teton Ridge; Armada; TeleTracking; Carilion Clinic; Tampa General Hospital; Chad Wahlquist.

**Practical significance:** The backstage format links Palantir's defense and industrial operating systems with partner applications in healthcare and other sectors, illustrating the breadth of its deployment portfolio. **Inference:** It may function as a guided exhibition overview rather than a single technical deep dive; partner-specific workflows cannot be determined from the metadata alone.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; only the named exhibits and organizations, not the content of each immersive experience, are supported.

---

# Batch 06 — operational AI, governed data, and frontline leverage

These ten videos cluster around moving AI into consequential operations rather than leaving it as a standalone assistant. The examples span SAP and mortgage-process automation, rapid data migration, satellite production, edge and defence deployment, NHS care operations, and a broader argument for augmenting frontline expertise. A repeated design pattern is to connect models or agents to a governed operational representation of the business (often called an Ontology), introduce automation incrementally, and preserve human judgment. Evidence depth varies: videos 51–57 are summarized only from official Palantir metadata (and video 54 only from its title), while videos 58–60 have caption transcripts.

## 51. Rewriting the Migration Path | SAP at AIPCon 9

video_id: bxvf5H1G2f0

- **Official URL/date/title:** https://www.youtube.com/watch?v=bxvf5H1G2f0 — 2026-03-13 — “Rewriting the Migration Path | SAP at AIPCon 9”
- **What it is about:** An SAP representative, Sebastian, describes using Palantir AI agents to change how organizations migrate SAP estates to the cloud. The official description says the approach compresses work that took months into weeks, lowers costs, and aims to produce business value from the start.
- **What they are building/working on:** Purpose-built agents that perform migration assessment, transformation, mapping, and validation in parallel rather than as a long sequential program.
- **Named products/organizations:** SAP; Palantir; Palantir AI agents; AIPCon 9.
- **Practical significance:** If the stated results generalize, parallel agents could reduce migration elapsed time and cost while making validation part of the workflow. The metadata does not disclose architecture, baseline measurements, customer scope, or how human review is applied.
- **Evidence basis:** Official title and Palantir description only; captions/transcript unavailable. Time and cost improvements are official claims, not independently verified findings. The parallel-versus-sequential contrast is a reasonable inference from the described agent roles.

## 52. End-to-End Intelligence: Transforming Mortgage with AI | Moder at AIPCon 9

video_id: ppTpMoP6_nc

- **Official URL/date/title:** https://www.youtube.com/watch?v=ppTpMoP6_nc — 2026-03-13 — “End-to-End Intelligence: Transforming Mortgage with AI | Moder at AIPCon 9”
- **What it is about:** Moder’s Michael Middleman presents a strategic partnership with Palantir and a first customer pilot with Freedom Mortgage, framed as bringing end-to-end intelligence and AI automation to mortgage operations.
- **What they are building/working on:** A mortgage-operations automation capability intended to connect processes across the lifecycle, improve transparency, and serve as a foundation for wider industry transformation. The available metadata does not identify the specific workflows, models, controls, or pilot results.
- **Named products/organizations:** Moder; Palantir; Freedom Mortgage; AIPCon 9.
- **Practical significance:** Mortgage processing contains many handoffs and information-intensive decisions, so an end-to-end operational layer could reduce fragmentation and improve process visibility. That expected mechanism is inference; the official description claims transparency and empowerment of homeownership but supplies no quantitative evidence.
- **Evidence basis:** Official title and Palantir description only; captions/transcript unavailable. Partnership, pilot-customer, and stated ambitions are source-backed; implementation detail and likely workflow benefits are explicitly inferred.

## 53. Palantir CEO Alex Karp Opening Remarks | AIPCon 9

video_id: sDtltYnbJT8

- **Official URL/date/title:** https://www.youtube.com/watch?v=sDtltYnbJT8 — 2026-03-13 — “Palantir CEO Alex Karp Opening Remarks | AIPCon 9”
- **What it is about:** Alex Karp’s opening remarks address Palantir’s values, its role on the global stage, and the relationship between its battlefield work and commercial deployments.
- **What they are building/working on:** At the level supported by the metadata, this is a strategic framing rather than a discrete product demo: Palantir positions its defence and commercial work as connected parts of the same institutional mission.
- **Named products/organizations:** Palantir; Alex Karp; AIPCon 9. No specific product is named in the official description.
- **Practical significance:** The talk supplies strategic context for interpreting the channel: Palantir presents operational software in national-security and commercial environments as related rather than separate portfolios. Any more specific account of the values or claimed transfer of battlefield techniques would require the missing transcript.
- **Evidence basis:** Official title and one-sentence Palantir description only; captions/transcript unavailable. No detailed claims about Karp’s arguments are made beyond that metadata.

## 54. Magical on the Front Lines | Intro at AIPCon 9

video_id: VB_6oi0g_f8

- **Official URL/date/title:** https://www.youtube.com/watch?v=VB_6oi0g_f8 — 2026-03-13 — “Magical on the Front Lines | Intro at AIPCon 9”
- **What it is about:** The only supplied evidence identifies this as a short AIPCon 9 introduction themed around something being “magical on the front lines.” There is not enough metadata to state which frontline setting, customer, or capability it depicts.
- **What they are building/working on:** Not established by the available source. The title suggests an event-opening montage or framing segment about frontline impact, but that is inference rather than a source-backed product description.
- **Named products/organizations:** AIPCon 9; Palantir is the publishing channel. No product or customer is named in the title.
- **Practical significance:** This entry may communicate the conference’s frontline-operations theme, but it cannot responsibly support a technical or use-case conclusion without captions or a description.
- **Evidence basis:** Official title, date, duration, URL, and channel metadata only; description is blank and captions/transcript are unavailable. Interpretive claims are deliberately limited.

## 55. Chad & Craig | Data Migrations with AI FDE

video_id: e90qUUh8_us

- **Official URL/date/title:** https://www.youtube.com/watch?v=e90qUUh8_us — 2026-03-11 — “Chad & Craig | Data Migrations with AI FDE”
- **What it is about:** Craig Roberts shows Chad Wahlquist how Palantir AIP is used to accelerate data migrations and help organizations move from legacy systems to new operating outcomes. The official description claims a reduction from five months to five days.
- **What they are building/working on:** An AI FDE-assisted migration workflow on Palantir AIP that goes beyond copying data and is intended to enable replacement operations and outcomes on the target system.
- **Named products/organizations:** Palantir; Palantir AIP; AI FDE; Chad Wahlquist; Craig Roberts.
- **Practical significance:** A roughly 30-fold elapsed-time reduction would materially change the economics and risk window of legacy modernization. However, the metadata does not define “AI FDE,” the migration scope, success criteria, data volume, or validation process, so the result should be treated as a showcased claim rather than a benchmark.
- **Evidence basis:** Official title and Palantir description only; captions/transcript unavailable. The five-month-to-five-day figure and move beyond legacy systems are official claims; the calculated magnitude and caveats are analysis.

## 56. Palantir and Apex | Satellite Manufacturing

video_id: sxqGbFAFu-E

- **Official URL/date/title:** https://www.youtube.com/watch?v=sxqGbFAFu-E — 2026-03-02 — “Palantir and Apex | Satellite Manufacturing”
- **What it is about:** A partnership story about Apex and Palantir applying software to satellite manufacturing, framed as shortening launch timelines and strengthening Western competitiveness in space.
- **What they are building/working on:** An operational capability around satellite production and launch readiness. The official description claims timelines are being cut “from years to days,” but it does not specify whether that refers to manufacturing, order-to-launch, scheduling, or another portion of the lifecycle.
- **Named products/organizations:** Apex; Palantir. No specific Palantir or Apex product is named in the supplied metadata.
- **Practical significance:** Faster production-to-launch cycles could make satellite capacity more responsive to commercial or national-security demand. The mechanism, comparison baseline, and attribution to software versus Apex’s manufacturing model are not available here.
- **Evidence basis:** Official title and Palantir description only; captions/transcript unavailable. Partnership and timing language are official claims; operational interpretation is cautious inference.

## 57. Chad & Konrad | Embedded Ontology

video_id: yLD5I16XkOo

- **Official URL/date/title:** https://www.youtube.com/watch?v=yLD5I16XkOo — 2026-02-10 — “Chad & Konrad | Embedded Ontology”
- **What it is about:** Konrad Eilers shows Chad Wahlquist an “Embedded Ontology” intended to connect AI to operations at the edge, including harsh or disconnected environments where continuous cloud connectivity cannot be assumed.
- **What they are building/working on:** A deployable operational model—described as the Embedded Ontology—that brings relevant data, objects, logic, and AI-enabled workflows closer to edge users and systems. The precise technical packaging and synchronization behavior are not described in the metadata.
- **Named products/organizations:** Palantir; Embedded Ontology; Chad Wahlquist; Konrad Eilers.
- **Practical significance:** Local operational context can let AI support decisions when bandwidth, latency, resilience, or security constraints make cloud-only designs unsuitable. That edge-computing rationale is inference consistent with “harsh and disconnected environments,” not a transcript-backed architecture statement.
- **Evidence basis:** Official title and Palantir description only; captions/transcript unavailable. The purpose and operating environment are official claims; the description of likely ontology contents and edge constraints is analytical inference.

## 58. Palantir and Hadean | UK Stories

video_id: kA-RPdosEm0

- **Official URL/date/title:** https://www.youtube.com/watch?v=kA-RPdosEm0 — 2026-02-09 — “Palantir and Hadean | UK Stories”
- **What it is about:** The video explains how Hadean uses Palantir as a deployment and data foundation for defence simulation, training, mission planning, and command-and-control software in classified UK Ministry of Defence environments. It emphasizes the obstacles faced by defence startups: procurement timelines, security standards, classified and heterogeneous data, and integration with operational infrastructure.
- **What they are building/working on:** Hadean provides out-of-the-box simulation and orchestration tools that generate live and virtual combat scenarios for rehearsal, training, and planning. Its **Domini AI** product is described as a next-generation command-and-control system combining AI and simulation, unifying diverse data for situational awareness and forward simulation of courses of action. Palantir Foundry underpins Hadean products so they can share military concepts with live systems, integrate intelligence, logistics, sensor, and historical data across classifications, connect to the MOD data fabric, and deploy faster. The partners also plan to expand Hadean’s existing MOD relationships and product use.
- **Named products/organizations:** Hadean (caption spellings vary); Domini AI; Palantir; Palantir Foundry; UK Ministry of Defence (MOD); British armed forces; Western militaries.
- **Practical significance:** The partnership separates domain-product innovation from classified data plumbing and compliance infrastructure. Hadean says building that connective layer itself would take years; Palantir says its UK defence agreement is intended to help British defence-tech companies reach operational use faster and sell into the US market. These are participant claims, but the transcript clearly identifies the architecture and intended route to scale.
- **Evidence basis:** Official description plus full English caption transcript. Product functions, data types, MOD integration, and partnership aims are directly stated by Palantir/Hadean speakers. Claims about faster deployment, national-security benefit, and commercial expansion are first-party claims; no independent outcome metrics are provided.

## 59. Palantir and the NHS | UK Stories

video_id: NANvLfyDQBI

- **Official URL/date/title:** https://www.youtube.com/watch?v=NANvLfyDQBI — 2026-01-30 — “Palantir and the NHS | UK Stories”
- **What it is about:** NHS England and Palantir personnel describe the NHS Federated Data Platform (FDP), which connects fragmented asset, workforce, and patient systems into operational workflows while letting each NHS organization control its own instance and data. The immediate focus is care logistics: scheduling theatres, managing inpatient flow and discharge, transferring patients between trusts with available capacity, and tracking cancer waiting lists.
- **What they are building/working on:** Segregated, locally owned FDP instances share a consistent **Canonical Data Model (CDM)**. Data can remain at the sovereign organization and be queried when needed; Palantir Foundry supplies purpose-based access controls so use is restricted to an already permitted purpose. NHS and Palantir teams co-design workflow products with clinicians. The transcript says the first Theatre Scheduling product went from concept to testing in about three weeks; other named capabilities include an Inpatient product and Cancer Waiting List tool.
- **Named products/organizations:** NHS; NHS England; NHS Federated Data Platform (FDP); Palantir; Palantir Foundry; Canonical Data Model (CDM); Theatre Scheduling product; Inpatient product; Cancer Waiting List tool; NHS trusts; Ming Tang; Ayub Bhayat; Rebecca Llewellyn; Jasmine Brown; Ethan Dodd; Sam Rhodes.
- **Practical significance:** Speakers report a task dropping from more than four minutes to 30 seconds; transferred patients being seen about 40 days sooner on average (some two to three months); more than 120 additional procedures per month at a typical trust using the Inpatient product; and more than 80,000 additional procedures since FDP rollout using existing capacity. Staff also report one-system visibility replacing paper, spreadsheets, email trails, and seven or eight logins. These examples show a federated operational-data design aimed at increasing throughput without centralizing all source data.
- **Evidence basis:** Official description plus full English caption transcript. Architecture, workflow examples, quotations, and metrics are directly stated by NHS/Palantir participants. They are first-party program claims and the transcript does not provide study design, denominator, comparison period, or independent validation.

## 60. The Future of AI and Work

video_id: 8qXIoUxisxk

- **Official URL/date/title:** https://www.youtube.com/watch?v=8qXIoUxisxk — 2026-01-29 — “The Future of AI and Work”
- **What it is about:** Palantir Chief Architect Akshay Krishnaswamy and Senior Counselor Jordan Hirsch argue that enterprise AI should augment human operators and capture frontline expertise rather than treat workers as expendable. Their central claim is that most domain intelligence remains in people and working processes, not in generic models, and that AI can expand human capacity when embedded in those processes.
- **What they are building/working on:** The design described connects AI agents to the same decision plane as workers: relevant data, permitted actions, reasoning logic, and feedback from outcomes. Palantir calls this shared operational model the **Ontology**. Deployment begins with bounded assistance—such as triaging inbound supply-chain issues—then turns up automation incrementally as the system learns from human choices. This addresses two stated bottlenecks: bringing the right context to an operator and increasing the number of cases the operator can handle. The broader **Working Intelligence** project showcases customer deployments built around this philosophy.
- **Named products/organizations:** Palantir; Palantir AIP; Palantir Foundry; Ontology; Working Intelligence; PG&E; Public Safety Power Shutoff (PSPS) events; Akshay Krishnaswamy; Jordan Hirsch. The discussion also references clinical operations, network planning, wildfire response, military operations, nurse scheduling, shipbuilding, logistics, and electric-grid control.
- **Practical significance:** The talk offers an implementation model distinct from an ephemeral chatbot: encode operational context and allowable actions, run AI alongside experts, learn previously tacit choices, and expand autonomy selectively. The PG&E example says AIP and Foundry help grid operators incorporate more information into de-energization proposals and that wildfire and precursor events have significantly declined, while acknowledging Palantir is only one part of the process. The speakers expect some task displacement but argue that reduced administrative drudgery can raise the skill ceiling and lower barriers for smaller industrial entrants.
- **Evidence basis:** Official description plus full English caption transcript. The architecture, bottleneck framework, incremental-automation method, and PG&E example are directly discussed. Predictions about net job creation, “creative destruction,” and the future value of expertise are Krishnaswamy/Hirsch’s views, not established outcomes; the PG&E passage gives no quantified causal evaluation.

---

# Batch 07 — Operational AI moves from demos into enterprise operating systems

## Batch themes

This batch centers on Palantir's claim that AI creates value when it is attached to an Ontology, operational workflows, and accountable human decisions rather than used as a detached chatbot. The substantive examples span healthcare delivery and reimbursement, medical real estate, construction, building technology, and a Databricks data-platform partnership. Across them, organizations are consolidating fragmented data and software into operating systems that can detect events, recommend or execute actions, learn from outcomes, and reserve judgment-heavy steps for people. Two short corporate videos are exceptions: a holiday message and an Army–Navy sponsorship announcement. Evidence depth varies sharply: video 70 has a full caption transcript, while videos 61–69 have only official titles/descriptions in the frozen inventory.

## 61. Palantir x Databricks | Partnership Overview

- `video_id: wOyByRnOgIc`
- **Official URL:** https://www.youtube.com/watch?v=wOyByRnOgIc
- **Upload date:** 2026-01-09
- **Official title:** Palantir x Databricks | Partnership Overview
- **What it is about:** Chad Wahlquist and Benjamin Abood explain an integration between the Palantir and Databricks stacks intended to connect data management and analytics with operational AI. The official framing is an end-to-end path from the Databricks Data Intelligence Platform and Unity Catalog into Palantir Foundry and AIP.
- **What they are building/working on:** A joint platform architecture in which governed Databricks data can feed Palantir's operational models and AI workflows. The source asserts that the systems integrate “seamlessly,” but provides no caption-level technical detail about connectors, data movement, governance boundaries, or deployment patterns. It is reasonable to infer that the partnership targets customers that want to retain Databricks as a data/analytics layer while using Foundry and AIP as an operational decision layer; that interpretation is inference, not an explicit implementation specification.
- **Named products/organizations:** Palantir; Databricks; Data Intelligence Platform; Unity Catalog; Foundry; AIP; Chad Wahlquist; Benjamin Abood.
- **Practical significance:** The partnership addresses a common enterprise problem: operationalizing data and AI without replacing an established lakehouse and governance investment. Its practical value would depend on how reliably identity, lineage, permissions, and actions carry across both platforms, which the available evidence does not establish.
- **Evidence basis:** Official title, URL, upload date, and channel description only; captions are unavailable. Partnership and product claims are official claims. Architecture implications beyond the description are marked as inference.

## 62. Holiday Greetings from Palantir CEO Alex Karp

- `video_id: UPO5oV7xL5A`
- **Official URL:** https://www.youtube.com/watch?v=UPO5oV7xL5A
- **Upload date:** 2025-12-18
- **Official title:** Holiday Greetings from Palantir CEO Alex Karp
- **What it is about:** A short seasonal message from Palantir CEO Alex Karp. No official description or transcript is available in the inventory, so the specific topics, claims, and wording cannot be responsibly summarized.
- **What they are building/working on:** No product, program, or technical work is identified by the available evidence. The video appears to be corporate communication rather than a product demonstration, based solely on the title.
- **Named products/organizations:** Palantir; Alex Karp.
- **Practical significance:** This item is relevant to the knowledge base as executive/corporate messaging, not as substantive evidence of an AI system or customer deployment.
- **Evidence basis:** Official title, URL, and upload date only; the description is empty and captions are unavailable. Any characterization beyond “holiday greeting” would be unsupported.

## 63. Army Navy Game 2025

- `video_id: u31W8bR_SWo`
- **Official URL:** https://www.youtube.com/watch?v=u31W8bR_SWo
- **Upload date:** 2025-12-17
- **Official title:** Army Navy Game 2025
- **What it is about:** A 34-second corporate sponsorship message thanking Baltimore and announcing that Palantir extended its support of “America's Game” for four additional years.
- **What they are building/working on:** Palantir is continuing a sponsorship/brand partnership around the Army–Navy Game. The available source does not identify an AI product, defense deployment, or technical program connected with the sponsorship.
- **Named products/organizations:** Palantir; Army–Navy Game (“America's Game”); Baltimore.
- **Practical significance:** The item signals Palantir's long-term public alignment with U.S. military institutions and patriotic brand positioning, but it should not be used as evidence of product capability.
- **Evidence basis:** Official title, URL, upload date, and channel description only; captions are unavailable. The four-year extension is an official claim. The brand-positioning interpretation is inference.

## 64. AIP 2026: The Self-Healing Autonomous Enterprise | Paragon 2025

- `video_id: r3jMRs_Mum8`
- **Official URL:** https://www.youtube.com/watch?v=r3jMRs_Mum8
- **Upload date:** 2025-12-15
- **Official title:** AIP 2026: The Self-Healing Autonomous Enterprise | Paragon 2025
- **What it is about:** Palantir Head of AI Go-To-Market Jack Dobson presents Palantir's AIP direction for 2026: human–AI teaming, enterprise autonomy, and operational process optimization. The description positions Ontology as the mechanism for monitoring an enterprise across disparate data sources, siloed teams, and distinct processes.
- **What they are building/working on:** An AIP-based model of “agentic operations” in which an organization's Ontology represents the business, monitors activity at enterprise scale, and supports autonomous or semi-autonomous process correction. “Self-healing autonomous enterprise” is the official product vision; without captions, the exact controls, failure-detection methods, action boundaries, and maturity of the demonstrated capabilities cannot be established.
- **Named products/organizations:** Palantir; AIP; Ontology; Paragon 2025; Jack Dobson.
- **Practical significance:** The vision shifts AI from answering questions to continuously observing and improving operations. If implemented with strong permissions and human escalation, it could reduce cross-functional coordination delays; the source does not provide enough detail to evaluate safety, reliability, or realized outcomes.
- **Evidence basis:** Official title, URL, upload date, and channel description only; captions are unavailable. Product direction and quoted Ontology claims are official claims. The implications for controls and coordination are analytical inference.

## 65. Alex Karp Opening Remarks | Paragon 2025

- `video_id: HWiEk_7Pulc`
- **Official URL:** https://www.youtube.com/watch?v=HWiEk_7Pulc
- **Upload date:** 2025-12-05
- **Official title:** Alex Karp Opening Remarks | Paragon 2025
- **What it is about:** Alex Karp opens Paragon 2025 with remarks on the “original patriotism” that the official description says continues to shape Palantir's philosophy.
- **What they are building/working on:** No discrete product build is documented in this video's available metadata. The item presents the ideological/cultural frame for Palantir's work: mission orientation and patriotism. It should be categorized as executive positioning rather than a technical demo.
- **Named products/organizations:** Palantir; Alex Karp; Paragon 2025.
- **Practical significance:** The remarks help explain Palantir's stated organizational identity and its emphasis on work for U.S. government and mission-critical institutions, but they do not substantiate technical performance.
- **Evidence basis:** Official title, URL, upload date, and channel description only; captions are unavailable. The description supports the patriotism theme; any link to particular contracts or capabilities would be inference and is not asserted here.

## 66. Actionable Intelligence from Every Tenant Interaction | Healthpeak at Paragon 2025

- `video_id: xgQXfzUgTO4`
- **Official URL:** https://www.youtube.com/watch?v=xgQXfzUgTO4
- **Upload date:** 2025-12-05
- **Official title:** Actionable Intelligence from Every Tenant Interaction | Healthpeak at Paragon 2025
- **What it is about:** Healthpeak Chief Investment Officer Adam G. Mabry describes turning routine tenant interactions into operational intelligence for a healthcare real-estate portfolio. The goal is to let property managers spend less time on office administration and more time with tenants.
- **What they are building/working on:** AIP- and Ontology-driven workflows that interpret tenant information and trigger follow-up work for leasing opportunities, maintenance issues, and capital-allocation decisions. The official description says the platform will learn from every interaction. The available source does not establish the learning method or whether each workflow is already in production.
- **Named products/organizations:** Healthpeak; Palantir; AIP; Ontology; Paragon 2025; Adam G. Mabry.
- **Practical significance:** A single tenant signal can potentially be reused across commercial, facilities, and investment decisions, reducing dropped handoffs and making portfolio decisions more responsive. This is a concrete pattern for AI grounded in a shared operational model rather than an isolated CRM note.
- **Evidence basis:** Official title, URL, upload date, and channel description only; captions for this standalone upload are unavailable. Workflow and goal statements are official claims; readiness and learning-mechanism details remain unverified.

## 67. Preventing Payer Denials in Healthcare | R1 RCM at Paragon 2025

- `video_id: od8G2dZvVPY`
- **Official URL:** https://www.youtube.com/watch?v=od8G2dZvVPY
- **Upload date:** 2025-12-05
- **Official title:** Preventing Payer Denials in Healthcare | R1 RCM at Paragon 2025
- **What it is about:** R1 RCM executives Steve Albert and Jon Katzur demonstrate an AI-assisted medical revenue-cycle workflow aimed at progressing from handling payer denials after they occur to preventing avoidable denials before claim submission.
- **What they are building/working on:** “Phare OS,” an operating system for medical billing teams. The described agent gathers the relevant data and documentation for denial work while specialists retain high-value judgment. The prevention capability suggests that outcomes from previous cases inform checks or interventions upstream, but that mechanism is not detailed in the standalone video's available metadata.
- **Named products/organizations:** R1 RCM; Phare OS (rendered “Phare OS” in the official description); R37; Palantir/Paragon 2025; Steve Albert; Jon Katzur.
- **Practical significance:** Preventing denials can reduce administrative labor and shorten reimbursement cycles, while the human-in-the-loop design focuses experts on clinical or policy judgment instead of evidence gathering. No standalone outcome metrics are available in this video's description.
- **Evidence basis:** Official title, URL, upload date, and channel description only; captions are unavailable. The product name, demo purpose, and human-empowerment framing are official claims. The feedback-loop interpretation is inference.

## 68. Why Every Other Software Must Justify Its Existence | Thomas Cavanagh at Paragon 2025

- `video_id: vH-pTvqeiMo`
- **Official URL:** https://www.youtube.com/watch?v=vH-pTvqeiMo
- **Upload date:** 2025-12-05
- **Official title:** Why Every Other Software Must Justify Its Existence | Thomas Cavanagh at Paragon 2025
- **What it is about:** Thomas Cavanagh's AI lead, Joe Patrois, presents Foundry as the construction company's operating system and says 97% of employees use it daily. The talk argues that bespoke, connected Foundry workflows can replace fragmented scheduling and field-reporting software.
- **What they are building/working on:** Total Operations Management, positioned as a replacement for other scheduling tools, plus Site 360 Daily Reporting for rapidly assigning labor hours and equipment to cost codes. The organization is consolidating operational planning and field data capture around Foundry rather than maintaining multiple disconnected applications.
- **Named products/organizations:** Thomas Cavanagh; Palantir; Foundry; Total Operations Management; Site 360 Daily Reporting; Paragon 2025; Joe Patrois.
- **Practical significance:** A shared operating layer can keep schedules, labor, equipment, and cost data synchronized while reducing duplicate entry. The strongest claims—97% daily adoption and work reduced from hours to seconds—are customer claims in Palantir's official description and are not independently verified here.
- **Evidence basis:** Official title, URL, upload date, and channel description only; captions for this upload are unavailable. Adoption and time-savings figures are explicitly treated as official/customer claims.

## 69. Customized Care When You Need it Most | Tampa General Hospital at Paragon 2025

- `video_id: TwwTlyIhCYI`
- **Official URL:** https://www.youtube.com/watch?v=TwwTlyIhCYI
- **Upload date:** 2025-12-05
- **Official title:** Customized Care When You Need it Most | Tampa General Hospital at Paragon 2025
- **What it is about:** Tampa General Hospital's Senior Vice President and Chief Transformation Officer, Dr. Peter Chang, demonstrates Modern Hospital OS, a Foundry-built system intended to customize care and coordinate patient journeys.
- **What they are building/working on:** An operational hospital platform that joins patient information with care-pathway decisions. The featured result is a Palantir algorithm that identifies sepsis earlier and places patients on a treatment pathway. Tampa General claims a 68% reduction in 48-hour mortality and 700 additional patients leaving the hospital over two years.
- **Named products/organizations:** Tampa General Hospital; Palantir; Foundry; Modern Hospital OS; Paragon 2025; Dr. Peter Chang.
- **Practical significance:** Earlier detection plus coordinated action can affect both survival and hospital capacity. The example also shows that the operational value is not merely a predictive score: it depends on connecting detection to a treatment workflow. The clinical outcome figures are consequential but remain organization-reported claims in the available source.
- **Evidence basis:** Official title, URL, upload date, and channel description only; captions for this standalone upload are unavailable. Product and outcome statements are official/customer claims, not independently validated findings.

## 70. Paragon 2025

- `video_id: UjkRz9HkldU`
- **Official URL:** https://www.youtube.com/watch?v=UjkRz9HkldU
- **Upload date:** 2025-12-05
- **Official title:** Paragon 2025
- **What it is about:** The full Paragon 2025 program combines Alex Karp's opening account of Palantir's mission and product philosophy with detailed customer demonstrations from Healthpeak, Tampa General Hospital, Johnson Controls, R1, and Cavanagh Construction, followed by Sasha Spivak's remarks on trust. The common thesis is that Ontology, Foundry, AIP, and forward-deployed engineering turn organization-specific data into systems that monitor operations, coordinate work, and support human–AI teams.
- **What they are building/working on:** The transcript documents several systems: (1) Healthpeak automates submeter accounting from images, bills, rates, and historical comparisons, then extends the same Ontology into a mobile tenant-interaction app that can trigger leasing, HVAC, and capital-allocation workflows; (2) Tampa General's Modern Hospital OS surfaces event feeds, detects sepsis, recommends ICU downgrade and Hospital at Home eligibility, and is being extended toward personalized inpatient and cancer-care coordination; (3) Johnson Controls maps roughly 200 data sources into an enterprise operating system whose agents generate and route sales leads, preserve experienced sellers' rules, optimize channels, and support procurement RFQs; (4) R1's revenue operating system—pronounced “Fair OS” in the transcript—uses triage and specialist agents to resolve missing-information denials, draft human-reviewed appeals, monitor payer changes, back-test prevention logic, and generate production-oriented Python; and (5) Cavanagh Construction's Total Operations Management, Cavanagh Connect, Site 360, and AIP Analyst connect schedules, timecards, field reporting, fleet records, and plain-language analysis in Foundry. Cavanagh also announces work with Palantir to commercialize its construction solutions.
- **Named products/organizations:** Palantir; Foundry; AIP; Ontology; AIP Analyst; FDE/FDSE; Maven; Gaia; Healthpeak; Tampa General Hospital; Modern Hospital OS; Hospital at Home; Johnson Controls; R1; Fair OS/Phare OS; Cavanagh Construction; Total Operations Management (TOM); Cavanagh Connect; Site 360; OSDK; Alex Karp; Adam Mabry; Dr. Peter Chang; Gabriel Dornbach; Steve Albert; Jon Katzur; Joe Patra/Patrois; Sasha Spivak.
- **Practical significance:** The full event provides the batch's clearest evidence that Palantir's “operational AI” pattern is shared across industries: establish a governed digital representation of real entities and processes; let agents observe and act through it; capture outcomes back into the model; and interrupt autonomy when human judgment is required. Reported customer outcomes include Healthpeak's expectation of portfolio growth without incremental operating cost, Tampa General's claimed 68% reduction in 48-hour sepsis mortality and 700 additional patients discharged over two years, Johnson Controls' claimed fivefold improvement in lead-to-opportunity conversion over 18 months, R1's back-test estimate of about 75% less denial work and roughly twice-fast payment, and Cavanagh's reduction of a field workflow from hours to about ten minutes. These figures are speaker claims, not independent evaluations.
- **Evidence basis:** Full official English caption transcript at `sources/transcripts/070-UjkRz9HkldU.vtt`, plus official title, URL, date, and description. The transcript directly supports the systems, workflow stages, maturity statements (including Tampa General being about halfway through one build), and reported metrics above. Claims remain attributable to Palantir or customer speakers; the cross-industry pattern is synthesis/inference from those demonstrations.

---

# Batch 08 — crisis operations, operational ontology, manufacturing, and talent

These ten videos span four related themes: Palantir's positioning around software for crises and national resilience; the Ontology as a decision-and-action layer for enterprise AI; concrete operational products for manufacturing, data pipelines, and disaster response; and workforce/brand stories around the Meritocracy Fellowship and Alex Karp. The strongest technical evidence is the captioned Ontology overview. The Ishikawa and Warp Speed entries have detailed official descriptions but no captions; four other entries have only sparse metadata. Accordingly, this batch distinguishes demonstrated architecture from first-party product claims and title-level inference.

## 71. Crisis Has No Calendar | Paragon 2025

video_id: SZ_eZGmmpQU

- **Official URL/date/title:** https://www.youtube.com/watch?v=SZ_eZGmmpQU — 2025-12-05 — “Crisis Has No Calendar | Paragon 2025”
- **What it is about:** A short montage links wildfires, tariffs and supply-chain inflation, military strikes, flooding, attacks on Ukrainian energy infrastructure, Chinese military display, and a US government shutdown. It closes with a strategic claim that the world is software-defined and that US leadership in software matters.
- **What they are building/working on:** This is positioning rather than a product walkthrough. The montage briefly names Maven amid claims of demand in and outside the United States and Apollo amid the sequence of geopolitical and operational crises, implying that Palantir presents its deployed software as infrastructure for persistent, unpredictable conditions. The transcript does not show how either product is used.
- **Named products/organizations:** Maven; Apollo; Palantir; Paragon 2025; United States; Los Angeles; Russia; China; Ukraine (referenced indirectly as “that country” in the caption context); Donald Trump.
- **Practical significance:** The piece frames crisis readiness as a continuous operating requirement rather than a calendar-based project. It is useful evidence of Palantir's strategic narrative, but it does not establish product performance, causal impact, or a specific implementation.
- **Evidence basis:** Official title/channel metadata plus full English caption transcript; no official description. The crisis examples, Maven demand statement, Apollo mention, and final software-leadership claim are transcript-backed statements in a montage. The interpretation that Maven and Apollo are being positioned as crisis infrastructure is inference from the edit, not an explicit architectural explanation.

## 72. Unfair Advantage | Highlights from AIPCon 8

video_id: _YpTwi_TtHQ

- **Official URL/date/title:** https://www.youtube.com/watch?v=_YpTwi_TtHQ — 2025-12-02 — “Unfair Advantage | Highlights from AIPCon 8”
- **What it is about:** The available source identifies this as an AIPCon 8 highlights reel organized around the phrase “Unfair Advantage.” No official description or captions identify the speakers, customers, examples, or claims included.
- **What they are building/working on:** Not established by the available evidence. The title suggests a recap that positions showcased Palantir-enabled work as a competitive advantage, but it does not support attributing any particular product or project to the video.
- **Named products/organizations:** AIPCon 8; Palantir as the publishing channel. No specific product, customer, or speaker is named in the available metadata.
- **Practical significance:** This entry documents the event's competitive-advantage framing, but it cannot responsibly support technical, customer, or outcome conclusions without a transcript or description.
- **Evidence basis:** Official title, URL, upload date, duration, and channel metadata only; official description is blank and captions/transcript are unavailable. All interpretation beyond “AIPCon 8 highlights” is explicitly title-level inference.

## 73. Senior Counselor Jordan Hirsch and Meritocracy Fellow Aryan Mehra Discuss the Meritocracy Fellowship

video_id: zkptGdmnuiY

- **Official URL/date/title:** https://www.youtube.com/watch?v=zkptGdmnuiY — 2025-11-21 — “Senior Counselor Jordan Hirsch and Meritocracy Fellow Aryan Mehra Discuss the Meritocracy Fellowship”
- **What it is about:** Jordan Hirsch and Aryan Mehra appear on Fox News to discuss higher education and Palantir's Meritocracy Fellowship. The official description foregrounds Palantir's view that meritocracy is important to American success.
- **What they are building/working on:** A fellowship positioned as an alternative route into consequential technology work. The available metadata links to the application page but does not specify curriculum, selection criteria, duration, projects, compensation, or Mehra's experience.
- **Named products/organizations:** Palantir; Meritocracy Fellowship; Fox News; Jordan Hirsch; Aryan Mehra.
- **Practical significance:** The program is part of Palantir's talent-development and recruiting strategy and challenges conventional higher-education pathways. The metadata alone does not establish educational outcomes or comparative effectiveness.
- **Evidence basis:** Official title and Palantir description only; captions/transcript unavailable. The participants, Fox News appearance, higher-education topic, and meritocracy position are source-backed. Characterizing the fellowship as a talent pipeline and alternative pathway is reasonable inference from the fellowship and application context.

## 74. Palantir Ontology Overview

video_id: YDAxITCNcko

- **Official URL/date/title:** https://www.youtube.com/watch?v=YDAxITCNcko — 2025-11-17 — “Palantir Ontology Overview”
- **What it is about:** Forward Deployed Architect Chad Wahlquist explains the Ontology at the center of Palantir AIP and Foundry. He defines it as the business's “nouns and verbs”: a semantic operational model of entities and relationships that joins current data, decision logic, and actions into a digital representation of how the business actually operates.
- **What they are building/working on:** A decision-centric system that connects enterprise data through more than 300 stated out-of-the-box connectors or MMDP virtualization; incorporates rules, spreadsheets, ML models, forecasts, and third-party optimizers; and writes actions back to systems such as SAP, plant-floor equipment, and financial applications. Workflows, analytics, automations, AIP Logic, and generative-AI models sit on this layer. The Ontology gives an LLM business context, permits calls to deterministic models, and orchestrates actions. Product and Ontology SDKs expose the model to mobile apps, custom React apps, integrations, and agentic workflows.
- **Named products/organizations:** Palantir; Palantir Ontology; Palantir AIP; Palantir Foundry; AIP Logic; Ontology SDK; product SDK; MMDP (caption spelling); SAP; Snowflake; Databricks; BigQuery; Excel; Chad Wahlquist.
- **Practical significance:** The architecture is intended to move AI from isolated chat or dashboards into governed operational decisions: models can reason over business context, invoke deterministic logic, and execute permitted write-backs while humans remain in the workflow. It also offers a common business interface across legacy, cloud, on-premises, edge, and web systems, with the stated goal of increasing automation and reducing time to value.
- **Evidence basis:** Official description plus full English caption transcript. Definitions, system components, connector count, integrations, write-back example, AI/LLM behavior, SDK uses, and automation goal are directly stated by Palantir's presenter. They are first-party architectural and product claims; no independent performance results, security-control details, or customer outcome metrics are supplied. “Governed” is an analytical characterization of permitted operational actions, not a detailed control claim made in this clip.

## 75. Palantir CEO Alex Karp receives the Herman Kahn Award | Hudson Institute

video_id: 8JbKTwDqkKI

- **Official URL/date/title:** https://www.youtube.com/watch?v=8JbKTwDqkKI — 2025-11-12 — “Palantir CEO Alex Karp receives the Herman Kahn Award | Hudson Institute”
- **What it is about:** An award event in which Palantir CEO Alex Karp receives the Hudson Institute's Herman Kahn Award, introduced by Palantir CTO Shyam Sankar.
- **What they are building/working on:** No discrete product or project is identified in the supplied metadata. This is an institutional recognition and leadership speech rather than a documented technical demonstration.
- **Named products/organizations:** Palantir; Hudson Institute; Herman Kahn Award; Alex Karp; Shyam Sankar. No Palantir product is named.
- **Practical significance:** The event indicates recognition of Karp by a US policy think tank and provides strategic or institutional context around Palantir's leadership. The available evidence is insufficient to summarize the speech's arguments or infer what technical work was discussed.
- **Evidence basis:** Official title and one-sentence Palantir description only; captions/transcript unavailable. Recipient, award, institution, and introducer are source-backed; no claims are made about the content of the 24-minute speech.

## 76. Palantir Warp Speed Deep Dive

video_id: mfmD1QqnaKg

- **Official URL/date/title:** https://www.youtube.com/watch?v=mfmD1QqnaKg — 2025-11-12 — “Palantir Warp Speed Deep Dive”
- **What it is about:** Meredith Bertasi walks Chad Wahlquist through Palantir Warp Speed as an operating system for industrial production. The official chapter list follows work across quality engineering, design engineering, supply planning, manufacturing engineering, and production technicians.
- **What they are building/working on:** A cross-functional manufacturing platform that connects engineering, bill-of-materials management, material requirements/resource planning, product lifecycle management, manufacturing execution, supply-chain operations, and program management. Palantir claims the product increases velocity and adaptability across these functions; the metadata does not reveal the data model, screens, integrations, or quantitative results shown in the deep dive.
- **Named products/organizations:** Palantir; Palantir Warp Speed; Meredith Bertasi; Chad Wahlquist. Functional systems named include BOM management, MRP, PLM, and MES, but no external customer or partner is identified.
- **Practical significance:** A shared operational layer across design, planning, execution, and quality could reduce handoff delays and help production teams respond to engineering or supply changes. That mechanism is inference consistent with the cross-functional scope; no benchmark or customer outcome is available in the supplied evidence.
- **Evidence basis:** Official title, description, and official chapter list only; captions/transcript unavailable. Product scope, presenters, and the “velocity and adaptability” language are first-party claims. The likely effect on handoffs and responsiveness is analysis, not a reported result.

## 77. Meet the Fellows | Meritocracy Fellowship 1.0

video_id: z5mfjRy3i_Q

- **Official URL/date/title:** https://www.youtube.com/watch?v=z5mfjRy3i_Q — 2025-11-10 — “Meet the Fellows | Meritocracy Fellowship 1.0”
- **What it is about:** A short participant-focused piece about the first Meritocracy Fellowship cohort. Palantir says the fellows spent 14 weeks learning and building inside the company and presents the program as an alternative to waiting through a conventional four-year college timeline.
- **What they are building/working on:** A work-based education and recruiting program that places early-career participants near Palantir's technology work. The official description says fellows built things “on the front lines of American technology” but does not name projects, products, mentors, or deliverables.
- **Named products/organizations:** Palantir; Meritocracy Fellowship 1.0; Meritocracy Fellows. No individual fellow or technical product is named in the supplied metadata.
- **Practical significance:** The fellowship tests an apprenticeship-style pathway for identifying and developing technical talent outside conventional degree sequencing. Claims about debt, indoctrination, readiness, and the value of the experience are Palantir's advocacy, not comparative education evidence.
- **Evidence basis:** Official title and Palantir description only; captions/transcript unavailable. The 14-week duration and learning/building characterization are first-party statements. “Apprenticeship-style” and recruiting-pathway language are inference from the described structure.

## 78. Chad & Xander | Lightweight Transforms in Pipeline Builder

video_id: DHSYo9s7eRo

- **Official URL/date/title:** https://www.youtube.com/watch?v=DHSYo9s7eRo — 2025-10-28 — “Chad & Xander | Lightweight Transforms in Pipeline Builder”
- **What it is about:** Palantir developer Xander Bailey shows Chad Wahlquist an upcoming Pipeline Builder capability called lightweight transforms, framed as a one-click way to speed up data pipelines.
- **What they are building/working on:** Lightweight transforms that select or enable a compute engine suited to a transform's workload, with the stated aim of making data transformations substantially faster and cheaper. The description says the feature “will soon” power this behavior, indicating preview or pre-release status at publication.
- **Named products/organizations:** Palantir; Pipeline Builder; lightweight transforms; Xander Bailey; Chad Wahlquist.
- **Practical significance:** Matching compute to the transformation rather than applying one engine to every job could reduce pipeline latency and cost while preserving a simple builder experience. This technical mechanism is only described at a high level; there are no benchmarks, engine names, workload limits, or release guarantees in the available source.
- **Evidence basis:** Official title and Palantir description only; captions/transcript unavailable. One-click activation, intended cost/speed benefits, right-engine framing, and forthcoming status are first-party product claims. The resource-efficiency explanation is inference from those claims.

## 79. Palantir for Ishikawa Prefecture | Transforming Disaster Response

video_id: kr2rtz9L5t8

- **Official URL/date/title:** https://www.youtube.com/watch?v=kr2rtz9L5t8 — 2025-10-20 — “Palantir for Ishikawa Prefecture | Transforming Disaster Response”
- **What it is about:** A disaster-response case study following the January 2024 Noto Peninsula earthquake. Palantir says more than 62,000 evacuees were dispersed across prefectures, making it difficult for responders to locate people and coordinate support.
- **What they are building/working on:** Palantir engineers built “Victim 360,” which the official description says unified 15 fragmented data sources representing 120,000 regional citizens so evacuees could be found and supported. The same system was reportedly redeployed within 24 hours when flooding struck months later.
- **Named products/organizations:** Palantir; Ishikawa Prefecture; Victim 360; Noto Peninsula. No underlying Palantir platform product or government partner is named in the supplied description.
- **Practical significance:** A reusable person-centered operational view can help emergency teams reconcile fragmented records, locate displaced residents, and adapt an established data workflow to a second disaster quickly. The case suggests value from reusable crisis infrastructure, but the description provides no matching-accuracy measures, privacy/access-control detail, response-time comparison, or independent assessment.
- **Evidence basis:** Official title and detailed Palantir description only; captions/transcript unavailable. The event, population figures, source count, citizen coverage, system name, purpose, and 24-hour redeployment are first-party claims. The operational mechanism and caveats are analytical synthesis.

## 80. South Korea Pop-up

video_id: MZ93pgQBYWY

- **Official URL/date/title:** https://www.youtube.com/watch?v=MZ93pgQBYWY — 2025-10-14 — “South Korea Pop-up”
- **What it is about:** A brief event montage showing Alex Karp greeting attendees or fans in South Korea, speaking with a person who says they are in the Korean military, handing out merchandise, and expressing appreciation for the reception and for Korean culture.
- **What they are building/working on:** No product, technical project, customer deployment, or partnership is described. The clip functions as community, brand, or event-presence content rather than evidence of engineering work.
- **Named products/organizations:** South Korea; Korean military; Alex Karp (identification inferred from the recognizable speaker and surrounding channel context, not named in the captions); Palantir as the publishing channel. No product is named.
- **Practical significance:** The video documents Palantir leadership's public engagement in South Korea but supplies no substantive evidence about regional operations or technology deployments.
- **Evidence basis:** Official title/channel metadata plus full English caption transcript; official description is blank. The interactions and remarks are transcript-backed. The speaker identification and branding interpretation are contextual inference; captions do not name him, and no commercial or government relationship should be inferred from the military-attendee exchange.

---

# Batch 09 — videos 81–90

## Batch themes

This batch shows Palantir working on two layers at once. At the platform layer, it is making enterprise data work cheaper and faster through interchangeable compute engines, while adding trace-level observability for multi-step AIP workflows. At the application layer, customers are using Foundry, AIP, and the Ontology as operational decision systems: tariff compliance, automotive production scheduling, flood-response coordination, nuclear construction, and oil-and-gas optimization. Two talks add the strategic thesis behind those projects: technology companies should work on consequential public problems, and AI should augment frontline workers while rebuilding Western industrial and defense capacity. The recurring design pattern is to integrate fragmented data and documents into an ontology, run models or optimization against that context, keep humans in consequential decision loops, and write approved actions back to operational systems.

## 81. Chad & Nicolas | Lightweight Transforms at Merck KGaA, Darmstadt, Germany

- `video_id: PGNWo-UuXLs`
- **Official URL:** https://www.youtube.com/watch?v=PGNWo-UuXLs
- **Upload date:** 2025-10-09
- **Official title:** Chad & Nicolas | Lightweight Transforms at Merck KGaA, Darmstadt, Germany
- **What it is about:** Nicolas Renkamp, who leads core data platforms at Merck KGaA, explains how Foundry's rearchitected Lightweight Transforms let teams replace Spark for suitable workloads with newer single-node engines. He attributes the improvement to an S3-compatible interface, fast local NVMe storage, streaming execution, vectorized operations, and avoiding distributed-compute overhead for workloads that do not need it. Merck reports roughly 100,000 builds per day and says it is seeing about 10x performance improvement across the workloads it has targeted, with examples including a six-to-seven-hour job reduced to roughly 10–26 minutes and a complex daily PySpark job reduced from one-to-three hours to about 30–40 minutes.
- **What they are building/working on:** Merck built a reusable library around SQLFrame to transpile compatible PySpark code to DuckDB SQL and connect Foundry inputs and outputs. It is deploying this first to expensive, long-running jobs and standardized high-volume SAP cleaning transforms, while Palantir and Merck work toward first-class DuckDB integration and removal of remaining infrastructure bottlenecks. The longer-term architecture uses Iceberg and Foundry's multimodal data plane to choose the right compute engine and storage system for each job across a heterogeneous estate.
- **Named products/organizations:** Merck KGaA, Darmstadt, Germany; Palantir Foundry; Lightweight Transforms; DuckDB; SQLFrame; Apache Spark/PySpark; Polars; DataFusion; Apache Iceberg; S3; SAP; BigQuery; Snowflake; AWS Glue Catalog.
- **Practical significance:** The claimed result is unusual because runtime and resource use fall together, creating both infrastructure savings and much shorter data-to-decision cycles. Standard APIs also reduce proprietary integration work and let a large enterprise reuse existing PySpark logic while incrementally modernizing rather than replatforming everything.
- **Evidence basis:** Official title, description, and full captions. Performance figures, production scale, and future plans are claims made by the speakers in the video; they were not independently benchmarked for this note. The explanation of why single-node engines are faster is the speakers' technical interpretation, not an independent causal test.

## 82. Chad & Bennett | Observability with Palantir AIP

- `video_id: 9IgYLjxxesw`
- **Official URL:** https://www.youtube.com/watch?v=9IgYLjxxesw
- **Upload date:** 2025-09-26
- **Official title:** Chad & Bennett | Observability with Palantir AIP
- **What it is about:** Palantir developer Bennett Norman demonstrates observability for complex AIP systems in which automations and agents invoke actions, functions, Ontology operations, and language models. Builders can search executables, inspect run histories, drill into individual invocations, view distributed traces and logs, see request arguments/results/errors, follow model calls and token use, and diagnose failures such as permission errors. Examples include inventory relocation, support-ticket prioritization, and a car-maintenance recommendation workflow spanning multiple functions and actions.
- **What they are building/working on:** Palantir is building a cross-product AIP telemetry layer with automatic instrumentation plus custom OpenTelemetry spans/logs in TypeScript v2 functions. It is adding real-time debugger views in AIP Logic, in-platform metrics and alerting for actions/functions/Automate workflows, a central telemetry store, one-click navigation from errors to traces, and an OpenTelemetry-compliant streaming export for third-party monitoring. It is also using telemetry as Ontology data so teams can build monitoring applications and closed-loop improvements on top of the behavior of their other applications.
- **Named products/organizations:** Palantir AIP; Foundry; Ontology; AIP Logic; TypeScript v2; Automate; Workflow Builder; OpenTelemetry; npm; API Gateway; Gallatin AI; ODK; Workshop; Machinery.
- **Practical significance:** Agentic business processes become difficult to trust or scale when their stochastic, nested calls are opaque. Instance-level traces create an auditable record of who or what invoked each step, where time and model spend went, and why a workflow failed, while standards-based export avoids trapping operations teams in a single monitoring interface.
- **Evidence basis:** Official title, description, and full captions. Product capabilities and roadmap items are demonstrated or stated by Palantir employees; future availability beyond the shown experience should be treated as an official forward-looking claim. The closed-loop benefits are partly demonstrated through Gallatin AI and partly an inference from the telemetry architecture.

## 83. Nicholas Zamiska of Palantir Discusses The Technological Republic in Prague (Sept. 2025)

- `video_id: NvwnOE6h598`
- **Official URL:** https://www.youtube.com/watch?v=NvwnOE6h598
- **Upload date:** 2025-09-23
- **Official title:** Nicholas Zamiska of Palantir Discusses The Technological Republic in Prague (Sept. 2025)
- **What it is about:** Nicholas Zamiska discusses *The Technological Republic* with Adam Ruzicka at Institute H21's International Symposium in Prague. Based on the official metadata, the session concerns the book's argument about technology, national purpose, and the relationship between Silicon Valley and democratic states. The metadata does not provide enough detail to attribute particular arguments, examples, or conclusions to this specific conversation.
- **What they are building/working on:** The source establishes a public discussion and dissemination effort around *The Technological Republic*. It does not establish that a software product, deployment, or new technical system is being built in this video.
- **Named products/organizations:** Nicholas Zamiska; Adam Ruzicka; Palantir; Institute H21; *The Technological Republic*.
- **Practical significance:** The event places Palantir's technology-and-state thesis in a European policy forum, but any more specific interpretation would require audio, captions, or a transcript.
- **Evidence basis:** Official title and description only; captions/transcript were unavailable in the frozen source inventory. No detailed content claims have been inferred from the neighboring video or from general knowledge of the book.

## 84. Palantir’s Nicholas Zamiska Discusses The Technological Republic

- `video_id: L72uW5HAWB4`
- **Official URL:** https://www.youtube.com/watch?v=L72uW5HAWB4
- **Upload date:** 2025-09-18
- **Official title:** Palantir’s Nicholas Zamiska Discusses The Technological Republic
- **What it is about:** In a conversation with Allianz chief economist Ludovic Subran at DLD Future Hub, Nicholas Zamiska presents the book's core argument: Silicon Valley should direct more talent and capital toward consequential national and public problems rather than mainly consumer applications. He cites defense, intelligence, counterterrorism, medical research, industrial production, education, and public health; argues that defense technology has contributed to geopolitical stability; and calls for shorter government iteration cycles. He also argues that societies should assess technological risk relative to the public outcome being pursued and tolerate some human imperfection in leaders who are building valuable institutions.
- **What they are building/working on:** This is a strategic and institutional agenda rather than a product demonstration: redirect technology talent toward public-purpose work, bring private-sector iteration speed into government, increase European defense investment and risk tolerance, and preserve Western advantages in dual-use technology while maintaining deterrence. The book and related talks are the concrete vehicles for advancing that agenda.
- **Named products/organizations:** Nicholas Zamiska; Ludovic Subran; Palantir; Allianz; DLD Future Hub; *The Technological Republic*; NATO; F-35 Joint Strike Fighter; U.S. Navy; General Dynamics; Silicon Valley.
- **Practical significance:** The talk explains the political philosophy behind many operational videos in this channel: Palantir frames industrial, medical, and defense software as civic infrastructure, not merely enterprise efficiency tooling. It also surfaces the trade-off the speakers want policymakers to make—manage real risks without allowing slow procurement or excessive risk aversion to block strategically important technology.
- **Evidence basis:** Official title, description, and full captions. The strategic arguments are Zamiska's views as expressed in the talk. Claims about defense spending, program costs, and historical causality were not independently verified for this note.

## 85. Chad & Chris | Tariff Savings and Compliance through Palantir AIP

- `video_id: xBTPNLd8Jv8`
- **Official URL:** https://www.youtube.com/watch?v=xBTPNLd8Jv8
- **Upload date:** 2025-09-17
- **Official title:** Chad & Chris | Tariff Savings and Compliance through Palantir AIP
- **What it is about:** Christopher Dimoff demonstrates a notional medical-manufacturer workflow that joins engineering bills of materials and drawings, ERP transactions/forecasts, supplier data, broker records, countries of origin, and HTS classifications in the Ontology. AIP prioritizes parts with likely tariff exposure, assesses whether assemblies actually contain steel or aluminum, flags expired USMCA certificates, and presents supporting evidence to a trade-compliance specialist. A worked example narrows a tariff calculation from an entire $36.60 component to $2 of steel/aluminum content, producing a stated annual reduction of about $88,000.
- **What they are building/working on:** The workflow creates an impact-ranked action queue, uses Gemini 2 Flash for image/drawing extraction and GPT-4o for downstream reasoning, retains a human for filing decisions, generates supplier requests for missing content/weight/origin data, parses responses, and assembles an auditable evidence package. Approved values are committed to the Ontology and can be written back to ERP or PLM systems. Palantir is also reusing the same BOM foundation for obsolescence management, material harmonization, sourcing/RFQ analysis, cost-of-goods analysis, inventory, and production scheduling.
- **Named products/organizations:** Palantir AIP; Foundry; Ontology; Onyx (notional company); ERP; PLM; SAP; HTS codes; Section 232; USMCA; Gemini 2 Flash; GPT-4o.
- **Practical significance:** The system turns a manual, spreadsheet-heavy review that speakers say can take a day per part into a prioritized, repeatable process across thousands of components. The value is compliance plus avoidance/recovery of overpayments, faster adaptation to changing rules, supplier follow-up, transparent customer cost allocation, and reuse of the same manufacturing graph for adjacent use cases.
- **Evidence basis:** Official title, description, and full captions. The company and savings example shown are explicitly notional, while comments about similar customer work and typical implementation in days to roughly a week and a half are Palantir employee claims. Legal classification and tariff results require qualified human review; the video itself keeps a human in the loop.

## 86. From 9/11 to AI: Mike Gallagher on How American Workers Will Win the 21st Century

- `video_id: gakCerVqzSY`
- **Official URL:** https://www.youtube.com/watch?v=gakCerVqzSY
- **Upload date:** 2025-09-12
- **Official title:** From 9/11 to AI: Mike Gallagher on How American Workers Will Win the 21st Century
- **What it is about:** On Palantir's Working Intelligence podcast, Jordan Hirsch interviews Mike Gallagher about how 9/11 led him into the Marine Corps, lessons from counterinsurgency in Iraq, the rise of China while the United States focused on the Middle East, and the need to rebuild the U.S. industrial and defense base. Gallagher's central AI claim is augmentation rather than replacement: AI should act as an “Iron Man suit” that removes administrative drudgery, gives workers situational awareness, and makes skilled industrial work more productive, meaningful, and attractive.
- **What they are building/working on:** The concrete work discussed is AI-enabled reindustrialization, especially shipbuilding. Gallagher cites Palantir-supported efforts at Anduril to improve supply-chain responsiveness for unmanned surface vessels, at Saronic to unify shipyard procurement/design/manufacturing into a digital operating system, and at HD Hyundai to scale a high-tempo model among U.S. allies. The broader program is to pair software engineers with experienced shipbuilders and other frontline experts, reduce dependence on China in critical supply chains, and recruit workers into technology-enabled trades.
- **Named products/organizations:** Mike Gallagher; Jordan Hirsch; Palantir; Working Intelligence / AI Optimism Project; U.S. Marine Corps; U.S. Congress; Chinese Communist Party; Anduril; Saronic; HD Hyundai; U.S. Navy; World Trade Organization; Georgetown University; Princeton University.
- **Practical significance:** The interview connects enterprise AI deployments to deterrence and industrial policy. It argues that worker shortages—rather than surplus labor—make augmentation essential, and that removing low-value paperwork can expand productive capacity without discarding domain expertise. Shipyards and technologically advanced dairy operations serve as examples of traditional sectors becoming more capable and appealing through automation.
- **Evidence basis:** Official title, detailed official description, and full captions. Biography, geopolitical assessments, labor-shortage figures, customer performance figures (including the stated 200-fold responsiveness increase), and the causal claims about AI are statements by the speakers and were not independently verified. Company names have been normalized where auto-captions were phonetically garbled.

## 87. Supporting Flood Recovery in Texas | Texas Department of Public Safety at AIPCon 8

- `video_id: sk2peD8SB3s`
- **Official URL:** https://www.youtube.com/watch?v=sk2peD8SB3s
- **Upload date:** 2025-09-08
- **Official title:** Supporting Flood Recovery in Texas | Texas Department of Public Safety at AIPCon 8
- **What it is about:** Texas DPS Captain John Miller describes the July 4 Kerr County flood and the challenge of coordinating victim searches across roughly 127 river miles, multiple jurisdictions, thousands of responders, and fragmented/inaccurate early reports. Existing tracking systems were useful but not federated and could not combine outside feeds. Palantir engineers deployed a Foundry instance in under 48 hours to create a shared intelligence and operating picture for leadership, field units, investigators, and partner agencies.
- **What they are building/working on:** The response team integrated witness/911 reporting, property and access information, unit reports, USGS stream data, historical and live environmental variables, and maritime/ground/aerial sensors. It built indicators and warnings, time-series/ARMA analyses for follow-on rain, spatial-temporal search prioritization, target intelligence management, and data-cleaning workflows. Later phases combined synthetic-aperture radar, high-density lidar and imagery, magnetometry, thermal scans, ground-penetrating radar, methane sensing, and other ground sensors to guide recovery work.
- **Named products/organizations:** Texas Department of Public Safety; Texas Ranger Division Special Operations Group; Palantir Foundry; AIPCon 8; U.S. Geological Survey; Camp Mystic; Kerr County; Guadalupe River; DPS TAC server (as captioned); SAROPS/SAROP software (as captioned).
- **Practical significance:** A single operating picture reduced duplicated searches and circular reporting, supported allocation of maritime and ground teams to higher-probability locations, and enabled more consistent information for victims' families. Miller states that 117 of 119 victims had been found at the time of the talk while two searches continued; that outcome is presented as operational testimony, not as proof that the software alone caused the recovery rate.
- **Evidence basis:** Official title, description, and full captions. Casualty counts, hydrological figures, deployment timing, and operational results are preliminary figures stated by Captain Miller; he explicitly says experts were still modeling the flood. Sensor/product spellings are uncertain where captions are ambiguous.

## 88. AIP for Just-in-Time Production | Lear at AIPCon 8

- `video_id: -DPdyQR1bG4`
- **Official URL:** https://www.youtube.com/watch?v=-DPdyQR1bG4
- **Upload date:** 2025-09-08
- **Official title:** AIP for Just-in-Time Production | Lear at AIPCon 8
- **What it is about:** Lear VP Jennifer Johnson explains how the automotive supplier expanded from an initial Foundry manufacturing-support use case into MES integration, monitoring, supply chain, and dynamic decision-making for just-in-time seat assembly. A Lear plant may have only four hours from a fixed automaker order to seat delivery, with around 350 unique component part numbers and lines shipping about 60 jobs an hour. The demonstrated JIT control tower combines real-time customer demand, inbound material, production throughput, finished-goods capacity, and delivery status.
- **What they are building/working on:** Lear is building an AIP-powered dynamic scheduling and exceptions workflow for its Flint, Michigan plant, with an ambition to scale across more than 175 JIT plants. When an automaker requests a “hot job,” a scheduling agent evaluates the BOM and labor content, simulates feasible schedule slots and inventory effects, and proposes alternatives. Operations staff approve or escalate the proposal, after which the selected job is written back to Lear's MES.
- **Named products/organizations:** Lear Corporation; Palantir Foundry; Palantir AIP; JIT Control Tower; manufacturing execution system (MES); Flint, Michigan; global automakers; Tier 2 suppliers.
- **Practical significance:** This is a human-plus-AI decision layer for a time-critical factory rather than autonomous scheduling. It concentrates planners on exceptions, replaces hours of spreadsheet reconciliation and calls, and combines model proposals with plant, supply-chain, and engineering judgment. The company views that pattern as a scalable digital assistant for thousands of daily decisions across its global network.
- **Evidence basis:** Official title, description, and full captions. Lear's employee/plant counts, cycle times, and operational claims come from Johnson's presentation. The captions inconsistently render “MES,” but the workflow's write-back to Lear's manufacturing execution system is clear from context.

## 89. Protecting America’s Security with AIP for Nuclear Construction | The Nuclear Company at AIPCon 8

- `video_id: hTjGU14bxP0`
- **Official URL:** https://www.youtube.com/watch?v=hTjGU14bxP0
- **Upload date:** 2025-09-08
- **Official title:** Protecting America’s Security with AIP for Nuclear Construction | The Nuclear Company at AIPCon 8
- **What it is about:** The Nuclear Company co-founder and CEO Jonathan Webb argues that the main U.S. nuclear bottleneck is project delivery, not reactor design. He contrasts growing Chinese capacity with the United States' slow, paper-heavy construction model and links new nuclear generation to AI, advanced manufacturing, and electrification demand. He cites the last two U.S. reactors as costing $36 billion versus a $14 billion budget and involving roughly 10,000 site workers.
- **What they are building/working on:** The Nuclear Company and Palantir are building a digital “mission control” for fleets of nuclear construction projects. A remote expert team would monitor budget, productivity, quality, and schedule through a shared data layer with LLMs, AI, and predictive analytics. Site teams would receive live guidance on supply-chain delays and corrective actions; drones and lidar would identify weld deviations rapidly; and regulators would receive real-time traceability into decisions and changes. Webb states targets to halve budget and delivery time and reduce peak labor from 10,000 to 5,000 while improving safety.
- **Named products/organizations:** The Nuclear Company; Jonathan Webb; Palantir; Palantir AIP; AIPCon 8; U.S. nuclear industry; U.S. nuclear regulator; lidar; large language models.
- **Practical significance:** The proposed system treats the frontline construction worker as the primary user and aims to catch schedule/quality problems in hours instead of weeks, prevent expensive rework, coordinate scarce expertise across simultaneous sites, and create an auditable record for regulators. If achieved, that would address the repeatability and execution problem behind scaling nuclear power for data-center and industrial demand.
- **Evidence basis:** Official title, description, and full captions. Cost, schedule, staffing, safety, and national-capacity figures—as well as the halving targets—are claims by Webb, not independently verified outcomes. The mission-control system is described as under development, and the potential state project award was explicitly not final at the time of the talk.

## 90. Driving Operational Value | bp at AIPCon 8

- `video_id: 1Wrhaur3ws0`
- **Official URL:** https://www.youtube.com/watch?v=1Wrhaur3ws0
- **Upload date:** 2025-09-08
- **Official title:** Driving Operational Value | bp at AIPCon 8
- **What it is about:** bp technology leaders Emeka Emembolu and Sunjay Pandey describe a decade-long Palantir partnership and bp's effort to become a fully integrated, forecastable energy company. Its Foundry Ontology connects wells, offshore platforms, engineering knowledge, refineries, retail, and trading. The Thunder Horse example covers a Gulf production/drilling platform with more than 60,000 equipment items, 40,000 real-time sensors, 4,000 synthetic sensors, and 1.4 million digital-twin simulations in the prior year.
- **What they are building/working on:** bp is expanding its Sherlock suite and Ontology, combining live sensor streams, physics-based models, structured/unstructured data, operating practices, and engineering expertise. Two AIP use cases are highlighted: routing optimization that moves from weeks of setup/evaluation to hours while showing near-optimal alternatives, and AI agents that encode engineering practices to surface maintenance/equipment insights across 1.4 million equipment items. bp says it is scaling the pattern from Thunder Horse to dozens of assets and then into refining, retail, and trading.
- **Named products/organizations:** bp; Palantir Foundry; Palantir AIP; Ontology; Sherlock suite; Thunder Horse; digital twins; Gulf of America (speaker's wording); Kazakhstan; bp trading, upstream, refining, and retail organizations.
- **Practical significance:** Engineers can analyze an asset in one connected environment, compare optimization choices with schedule and risk constraints, detect production deviations, support preventive maintenance, and transfer lessons across equipment classes and assets without compromising safety. bp reports a 75% reduction in time to operational maintenance insights and “triple-figure” year-on-year returns from Palantir investments, although the exact return metric is not defined in the talk.
- **Evidence basis:** Official title, description, and full captions. Scale, performance, and return figures are bp executives' claims. Names have been normalized against the official description where auto-captions were phonetically inaccurate; “Gulf of America” is retained because that is the phrase used in the presentation.

---

# Batch 10 — AIPCon 8 operational AI and platform foundations

## Batch themes

These videos emphasize operational AI: connect fragmented data through an Ontology, embed models or agents in real workflows, preserve human judgment and governance, and turn recommendations into controlled action. Applications cover airline planning, drug R&D, supply chains, patient care, telecom, and motorsport; platform discussions cover privacy-by-design and lower-cost multimodal compute. Karp's keynote and the “Freak Show” intro state Palantir's thesis that LLMs become differentiated only when combined with an organization's data, operating knowledge, ontology, and forward-deployed engineering.

Evidence note: nine items have supplied transcripts. Video 98 has metadata only. Quantified outcomes are first-party speaker or official-description claims and are not independently verified; interpretations are labeled as inference.

## 91. Transforming Network Planning for Aviation | American Airlines at AIPCon 8

video_id: DLx3ix6c0Oo
official_url: https://www.youtube.com/watch?v=DLx3ix6c0Oo  
upload_date: 2025-09-08  
official_title: Transforming Network Planning for Aviation | American Airlines at AIPCon 8

**What it is about:** American Airlines executives Anne Moroni and Amit Shinde explain how the airline is replacing manual, sequential, siloed schedule planning with an integrated system balancing demand and profitability against fleet, crew-rest, pilot-hour, gate, airspace, maintenance, turnaround, and reliability constraints across roughly 6,500 daily flights.

**What they are building/working on:** The Foundry-based **Vector** solution has a Crew Advisor that scans the network for inefficient patterns, recommends changes, and runs continuous constraint checks. A demo retimes a San Francisco flight to fix crew rest, detects a new conflict, evaluates alternative aircraft/line flows, and stress-tests the result with network simulation. American plans to expand it from network planning into an integrated platform for operational teams.

**Named products/organizations:** American Airlines; Palantir; Foundry; Vector; Crew Advisor; Anne Moroni; Amit Shinde.

**Practical significance:** It surfaces enterprise tradeoffs early rather than letting one team create a downstream crew, maintenance, gate, or reliability problem. American claims its first year unlocked tens of millions of dollars while supporting safer, more reliable, profitable schedules.

**Evidence basis:** Supplied transcript plus official metadata. Workflow, scale, and savings are official presentation claims, not independently validated.

## 92. Weeks to Hours: Accelerating Drug Discovery with AIP | Novartis at AIPCon 8

video_id: dQ8KeyVmfUM
official_url: https://www.youtube.com/watch?v=dQ8KeyVmfUM  
upload_date: 2025-09-08  
official_title: Weeks to Hours: Accelerating Drug Discovery with AIP | Novartis at AIPCon 8

**What it is about:** Novartis Head of Data42 Birgit Schoeberl presents a governed data-and-agent framework intended to improve drug-development success. She describes an industry baseline of roughly 12 years and $3 billion per medicine, with about one approval per 10,000 discovery-stage molecules.

**What they are building/working on:** **Data42** integrates proprietary compound, preclinical, clinical, biomarker, document, and real-world data in an Ontology. Schoeberl says it spans tens of billions of rows, 3,000+ trials, about one million trial patients, and real-world data representing 700+ million patient lives. **Chat RWE** supports natural-language cohort feasibility; **Closing the Loop** generates translational-modeling scenarios, recommends decisions, captures rationale, and creates a traceable electronic lab-notebook entry.

**Named products/organizations:** Novartis; Palantir; Data42; AIP; Ontology; Chat RWE; Closing the Loop; Jupyter; Birgit Schoeberl.

**Practical significance:** Novartis claims Closing the Loop cut anticipated-human-dose prediction per compound by about 98%, from one week to two hours, and is used by almost all small-molecule projects. Inference: the accumulating rationale may improve consistency and prediction quality, but the video does not establish higher approval rates or patient outcomes.

**Evidence basis:** Supplied transcript plus official metadata. Data scale, adoption, and time reduction are Novartis speaker claims.

## 93. Solving Societal Issues with Agentic Decision Making | Fujitsu at AIPCon 8

video_id: A47Nuav7X-4
official_url: https://www.youtube.com/watch?v=A47Nuav7X-4  
upload_date: 2025-09-08  
official_title: Solving Societal Issues with Agentic Decision Making | Fujitsu at AIPCon 8

**What it is about:** Fujitsu executive Yoshinami Takahashi describes using Palantir and Fujitsu Uvance for mission-critical resilience, centered on a large Japanese manufacturer's fragmented supply chain and risks including labor shortages, earthquakes, supplier failure, and geopolitical disruption.

**What they are building/working on:** A dynamic supply-chain OS on Foundry, a shared Ontology, and Fujitsu **Kozuchi** connects 30+ applications and manages nearly two million parts. Procurement, inventory, and sales agents propose responses; orchestration and evaluator agents select and validate them; humans decide when needed. A disaster-response agent simulates damage, inventory impact, and weak points. The future vision is cross-company and cross-industry agent coordination.

**Named products/organizations:** Fujitsu; Fujitsu Uvance; Fujitsu Kozuchi; Palantir; Foundry; AIP; Ontology; Yoshinami Takahashi.

**Practical significance:** Takahashi claims the customer integrated its environment in two weeks, built 300 SKU forecasts in two months, halved labor needs, saves $10M+ annually, and shortened earthquake-impact response from four-to-seven days to one day. Cross-industry agents are a future vision, not a demonstrated deployment.

**Evidence basis:** Supplied transcript plus official metadata. The customer is unnamed; all implementation and outcome figures are Fujitsu speaker claims.

## 94. Unifying the Care Journey for Every Patient | HSS at AIPCon 8

video_id: mKp3TTggihU
official_url: https://www.youtube.com/watch?v=mKp3TTggihU  
upload_date: 2025-09-08  
official_title: Unifying the Care Journey for Every Patient | HSS at AIPCon 8

**What it is about:** HSS Chief Digital and Technology Officer Dr. Ashish Barad argues that healthcare digitization has left clinicians spending too much time on charts, paperwork, coordination, and insurance. HSS aims to return that time to patient care.

**What they are building/working on:** HSS first automated insurance appeals. It is now building a living **Patient Card**, a shared summary of allergies, medications, plans, orders, results, risks, and next steps. In the demo, AIP detects that a knee-replacement patient is not ready, assembles payer criteria, submits prior authorization, alerts the team, later recommends same-day discharge, and uses conversational AI to coordinate scheduling while clinicians remain in the loop.

**Named products/organizations:** Hospital for Special Surgery (HSS); Palantir; AIP; Ontology; Patient Card; Dr. Ashish Barad.

**Practical significance:** HSS claims its five-week appeals build cut manual work from 45 to five minutes, raised throughput from about 100 to 1,000 appeals/month, and outperformed the prior human-only process. The Patient Card prototype was built in four weeks to orchestrate the journey from discovery through recovery.

**Evidence basis:** Supplied transcript plus official metadata. Timings, throughput, and performance are HSS claims; no accuracy method, clinical outcome study, or privacy evaluation is supplied.

## 95. Unleashing Digital Potential with Next-Generation Telecom | Lumen at AIPCon 8

video_id: 3c4ekdck0kg
official_url: https://www.youtube.com/watch?v=3c4ekdck0kg  
upload_date: 2025-09-08  
official_title: Unleashing Digital Potential with Next-Generation Telecom | Lumen at AIPCon 8

**What it is about:** Lumen CTPO Dave Ward explains the connectivity layer of enterprise AI: data distributed across premises, data centers, hyperscalers, and SaaS must move fast enough for AI. Lumen must modernize a century-old regulated telecom estate without interrupting 911 or critical services.

**What they are building/working on:** Lumen is expanding fiber and data-center links toward 400 Gb, 800 Gb, and 1.6 Tb while digitizing paper/ticket workflows. AIP and the Ontology unify inherited inventory and customer systems, mapping customers to circuits, equipment, buildings, products, costs, and revenue risk; they sequence legacy retirement, automate dispatch/testing, and plan migrations from copper, T1, private-line, and legacy VPN products to an AI-ready fabric.

**Named products/organizations:** Lumen; Palantir; AIP; Ontology; CenturyLink; Level 3; Qwest; Savvis; TW Telecom; WilTel; hyperscalers; Dave Ward.

**Practical significance:** This links physical-network changes to customer and financial decisions so obsolete assets can be removed safely. Ward cites $8.5B in new AI-region interconnection contracts. Inference: the unified model should reduce migration risk, but no quantified savings or migration results are given.

**Evidence basis:** Supplied transcript plus official metadata. Network, contract, automation, and success claims are first-party Lumen statements.

## 96. Palantir CEO Alex Karp Opening Remarks | AIPCon 8

video_id: AsTpgn1Bd2o
official_url: https://www.youtube.com/watch?v=AsTpgn1Bd2o  
upload_date: 2025-09-08  
official_title: Palantir CEO Alex Karp Opening Remarks | AIPCon 8

**What it is about:** Alex Karp argues that the useful unit is not a general LLM alone but an LLM processed through an organization's specific data, operating logic, knowledge, and competitive advantage. He says AI should extend human ingenuity and worker capability rather than chiefly be sold as near-term worker replacement.

**What they are building/working on:** Karp describes Foundry and the Ontology, coupled with forward-deployed engineers who extend the platform and teach customer teams similar methods. The objective is to remove disconnected, duplicative software, model the business as it operates, orchestrate external models inside that governed abstraction, and convert AI into growth, efficiency, safety, and workforce improvements.

**Named products/organizations:** Palantir; Foundry; Ontology; forward-deployed engineers (FDEs); large language models; Silicon Valley; United States government; Alex Karp.

**Practical significance:** This is strategy and positioning, not a product demo. It explains why Palantir treats ontology construction and embedded engineering as its differentiator over commodity models and generic chatbots.

**Evidence basis:** Supplied transcript plus official metadata. Claims about AI, competitiveness, corporate culture, worker outcomes, and Palantir's superiority are Karp's opinions, not demonstrated facts in this video.

## 97. Reinventing IndyCar Race Performance | Andretti at AIPCon 8

video_id: mBDQK7OJ1Ls
official_url: https://www.youtube.com/watch?v=mBDQK7OJ1Ls  
upload_date: 2025-09-07  
official_title: Reinventing IndyCar Race Performance | Andretti at AIPCon 8

**What it is about:** Palantir's Jack Dobson, Andretti simulation engineer Zach Porter, and IndyCar driver Kyle Kirkwood introduce a partnership aimed at the severe time pressure between track sessions. Timing, telemetry, setup, GPS, video, weather, driver comments, and engineering data sit in separate systems despite needing to inform one rapid decision loop.

**What they are building/working on:** **Race OS** is a Foundry/AIP environment on Andretti's Ontology of tracks, sectors, sessions, drivers, setups, outings, lap times, comments, telemetry, and actions. It retrieves historically similar setups with performance context, makes post-session tire analysis available within minutes, records changes as reusable knowledge, and ingests 2,000+ telemetry channels. One app predicts tire-pressure-sensor battery replacement; another flags and investigates transient sensor anomalies. Work continues toward the 2026 season.

**Named products/organizations:** Andretti Global; Palantir; Foundry; AIP; Ontology; Race OS; IndyCar; Jack Dobson; Zach Porter; Kyle Kirkwood.

**Practical significance:** Porter says initial data connections took about five days and some apps were built in 24 hours. He reports no repeat TPMS failure on Kirkwood's car after the monitoring app began guiding replacement, and says tire reports formerly delivered 30–50 minutes later now arrive in two to three minutes.

**Evidence basis:** Supplied transcript plus official metadata. Build speed, data volume, timing, and TPMS outcome are presenter claims. Inference: faster access may improve decisions, but race results cannot be causally attributed to Race OS here.

## 98. Freak Show | Intro at AIPCon 8

video_id: nf_UGJsukMU
official_url: https://www.youtube.com/watch?v=nf_UGJsukMU  
upload_date: 2025-09-05  
official_title: Freak Show | Intro at AIPCon 8

**What it is about:** A 72-second AIPCon 8 promotional intro contrasting Palantir customers' claimed operational AI results with organizations still debating or theorizing about AI.

**What they are building/working on:** The official description identifies the Ontology and forward-deployed engineers as the mechanism for turning commodity LLMs into enterprise-specific capability, targeting growth, expanded margins, and differentiation.

**Named products/organizations:** Palantir; AIPCon 8; Ontology; forward-deployed engineers (FDEs); large language models.

**Practical significance:** It serves as event positioning: Palantir claims its advantage is the organizational context and embedded engineering needed to operationalize AI. Inference: the provocative framing reinforces Karp's differentiation thesis, but documents no customer implementation or measured result.

**Evidence basis:** Official title, date, URL, and description only. Captions/transcript unavailable; no additional visual or spoken content is treated as evidence.

## 99. Overcoming Zero-Sum Thinking on Privacy, Civil Liberties, and Mission-Critical AI Systems

video_id: x-NEdIcgboo
official_url: https://www.youtube.com/watch?v=x-NEdIcgboo  
upload_date: 2025-08-26  
official_title: Overcoming Zero-Sum Thinking on Privacy, Civil Liberties, and Mission-Critical AI Systems

**What it is about:** Palantir Privacy & Civil Liberties Engineering director Courtney Bowman and Chief Architect Akshay Krishnaswamy trace privacy, security, and governance from early Gotham through Foundry, COVID operations, defense, and AIP. Their core claim is that mission effectiveness and rights protection need not be zero-sum when controls are platform primitives rather than bolt-ons.

**What they are building/working on:** The history covers granular/classification-based access, investigation scopes, selective revelation, retention/deletion, immutable audit, lineage, Sensitive Data Scanner, Checkpoints, and Ontology. Examples include criminal-intelligence retention, license-plate-reader controls, GDPR rights, COVID common operating pictures and MLOps, and Maven/no-strike-list defense workflows. AIP extends these foundations to agent permissions, approvals, observability, evaluation, decision lineage, and **AI Use Case Manager** governance. Future work includes ontology-driven governance, reusable oversight patterns, governance agents, Ontology SDK, Palantir MCP, and Autopilot.

**Named products/organizations:** Palantir; PCL; Gotham; Metropolis; Foundry; Apollo; AIP; Ontology; AI Use Case Manager; Sensitive Data Scanner; Checkpoints; Cipher; Maven; Ontology SDK; Palantir MCP; Autopilot; GDPR; NIST; European Commission; BP; Airbus; Operation Warp Speed; HHS Protect; Courtney Bowman; Akshay Krishnaswamy.

**Practical significance:** Privacy and governance are framed as enabling architecture: institutions can perform powerful cross-functional analysis while restricting purpose, exposure, retention, model behavior, and agent action. The roadmap aims to increase autonomy without losing institutional control or auditability.

**Evidence basis:** Supplied transcript plus official metadata. Product history and examples are first-party Palantir recollections; claims about policy influence and effectiveness are not independently verified. Some developer and governance capabilities are described as forthcoming.

## 100. Chad & Matt | Lightweight Data Transforms with Palantir AIP

video_id: MITSJDI08R4
official_url: https://www.youtube.com/watch?v=MITSJDI08R4  
upload_date: 2025-08-25  
official_title: Chad & Matt | Lightweight Data Transforms with Palantir AIP

**What it is about:** Palantir architect Chad Wahlquist and FDE Matthew Bayer explain **Lightweight Transforms**, a Foundry option for small/medium data processing that avoids distributed Spark overhead. The broader aim is a multimodal data plane where teams choose the right engine per step and make more enterprise data computable for AI.

**What they are building/working on:** The demo migrates an incremental fraud pipeline over nearly one billion rows from PySpark to Polars using Claude 3.7 Sonnet in Continue/VS Code. A transform-specific MCP server lets the agent discover transforms, inspect data, and edit files inside a governed branch. Foundry branches code and data and compares actual output before review/merge. The Python API supports engines including Polars, pandas, DuckDB, and DataFusion, plus documents, images, OCR, external storage, virtual tables, and compute pushdown to Databricks or Snowflake.

**Named products/organizations:** Palantir; AIP; Foundry; Lightweight Transforms; Pipeline Builder; Spark; PySpark; Polars; pandas; DuckDB; DataFusion; Databricks; Snowflake; S3; VS Code; Continue; Claude 3.7 Sonnet; MCP; Chad Wahlquist; Matthew Bayer.

**Practical significance:** Both shown runs take about two minutes, but Spark uses 16 executors with 16 GB memory each, while Polars uses about 29 GB memory and eight CPUs—presented as roughly 10× less memory and 4× less CPU. Streaming extends single-node processing beyond memory size. Branching, permissions, lineage, review, and output diffs aim to make AI-assisted migrations safer than direct production edits.

**Evidence basis:** Supplied transcript plus official metadata. Resource figures are from the presenters' demo, not an independent benchmark; workload and tuning details are incomplete. Broad cost and workload-coverage claims may not generalize.

