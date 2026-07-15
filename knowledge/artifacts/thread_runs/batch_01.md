# Batch 01 — DevCon 6 production-agent stack

## Batch themes

These ten DevCon 6 videos present Palantir's approach to moving AI agents from demos into production. The recurring architecture combines the Ontology with durable execution, typed agent state, human approvals, legible reasoning, telemetry, automated optimization, and deployability across sovereign or on-premises environments. The demonstrations apply that stack to healthcare, refinery scheduling, cybersecurity, manufacturing, and incident response. Trust is treated as an engineering property: agents must survive failures, avoid duplicate actions, expose attribution and reasoning, respect production boundaries, and improve against explicit evaluations.

Evidence note: captions/transcripts are unavailable for every item in this batch. All source-backed statements below come only from the supplied official Palantir metadata (title, date, URL, and description). Any interpretation beyond those statements is explicitly marked as inference.

## 1. Code in Prod: Apollo x NVIDIA for Sovereign AI | DevCon 6

video_id: IDZVaKc6MGQ
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=IDZVaKc6MGQ)
upload_date: 2026-07-14
official_title: Code in Prod: Apollo x NVIDIA for Sovereign AI | DevCon 6

**What it is about:** NVIDIA Public Sector Field Engineering Leader Tim Klawa and Palantir Forward Deployed Engineer Vasil Vasilev explain an architecture intended to deliver high AI capability without giving up deployment sovereignty.

**What they are building/working on:** They show Apollo shipping artifacts ranging from Helm charts to marketplace products into both AIP environments and customer-controlled, on-premises Kubernetes clusters.

**Named products/organizations:** Palantir; NVIDIA; Apollo; AIP; Kubernetes; Helm.

**Practical significance:** The described deployment model gives regulated or sovereignty-sensitive customers a route to operate the same application artifacts across managed and on-premises targets. **Inference:** This may reduce the gap between central software delivery and locally controlled infrastructure, but the description does not provide performance, security, or customer-outcome measurements.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; no claims are based on the spoken presentation.

## 2. Deep Dive: Design Patterns for Human-Agent Collaboration | DevCon 6

video_id: O7aeOmnbCuo
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=O7aeOmnbCuo)
upload_date: 2026-07-14
official_title: Deep Dive: Design Patterns for Human-Agent Collaboration | DevCon 6

**What it is about:** Palantir product designers Emily Su, Lide Li, and Philipp Shchekin discuss interface and interaction patterns meant to make collaboration between people and AI agents seamless, legible, and trustworthy.

**What they are building/working on:** They use the Ontology to design and encode patterns for presenting agent reasoning without overwhelming users and for attributing decisions so users can distinguish human and agent actions.

**Named products/organizations:** Palantir; Ontology; Emily Su; Lide Li; Philipp Shchekin.

**Practical significance:** Clear reasoning displays and decision attribution can help users review agent work and preserve accountability in mixed human-agent workflows. **Inference:** Encoding these patterns in the Ontology suggests that collaboration semantics are intended to be reusable across applications, although the description does not enumerate the patterns or report user-study results.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; specific design patterns beyond those named in the description cannot be verified here.

## 3. Deep Dive: Security Forge: Wielding Agents for Defensive Cyber | DevCon 6

video_id: hymyfucOgSo
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=hymyfucOgSo)
upload_date: 2026-07-14
official_title: Deep Dive: Security Forge: Wielding Agents for Defensive Cyber | DevCon 6

**What it is about:** Palantir Infrastructure Security Engineer Nicholas Wernink presents an AI-accelerated defensive-cyber approach aimed at finding vulnerabilities before adversaries can weaponize them.

**What they are building/working on:** Security Forge orchestrates multi-agent workflows for vulnerability detection, with the presentation describing the agentic approach and how defensive teams could apply it at scale.

**Named products/organizations:** Palantir; Security Forge; Nicholas Wernink.

**Practical significance:** The work targets the shrinking time defenders have to identify and remediate exploitable weaknesses as attackers accelerate vulnerability research. **Inference:** Multi-agent orchestration may parallelize parts of vulnerability discovery and analysis, but the description does not disclose coverage, false-positive rates, remediation workflow, or benchmark results.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; the internal agent roles and technical implementation are not established by the available evidence.

## 4. Code in Prod: Scenario Agents x HD Hyundai Oilbank for Blending Disruptions | DevCon 6

video_id: mZcpr3vX_XY
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=mZcpr3vX_XY)
upload_date: 2026-07-14
official_title: Code in Prod: Scenario Agents x HD Hyundai Oilbank for Blending Disruptions | DevCon 6

**What it is about:** Palantir Software Engineer Simon Kaufmann and Jinho Kim of HD Hyundai Oilbank present an agent-assisted response to refinery planning disruptions, using a shipping delay as the operating scenario.

**What they are building/working on:** They launch Scenarios, described as a protected Ontology sandbox in which agents can draft and stress-test plans without touching production data. A scenario agent rebuilds a vessel and blending schedule, validates constraints in real time, and prepares the result for a one-click merge into the live system.

**Named products/organizations:** Palantir; HD Hyundai Oilbank; Scenarios; Ontology; Simon Kaufmann; Jinho Kim.

**Practical significance:** The sandbox-and-merge pattern is designed to let an agent explore operational alternatives while isolating live production state and retaining a deliberate handoff into operations. **Inference:** This resembles a governed planning branch that could shorten disruption response, but the description provides no quantified time, margin, or production impact.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; only the described shipping-delay demonstration is supported.

## 5. Product Launch: DevX: SuperRepo & Agent Development | DevCon 6

video_id: elzenOIEdtI
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=elzenOIEdtI)
upload_date: 2026-07-14
official_title: Product Launch: DevX: SuperRepo & Agent Development | DevCon 6

**What it is about:** Palantir Group Lead Ramzi Karam launches a pro-code development and DevOps workflow intended to let developers evolve an Ontology-backed application and its agents together.

**What they are building/working on:** SuperRepo is a single repository in which Ontology functions, actions, front end, and agents are defined and deployed together. A local embedded Ontology supports immediate iteration. The demonstration adds a capability to an incident-triage agent across schema, logic, UI, and agent changes without an intervening CI run.

**Named products/organizations:** Palantir; DevX; SuperRepo; Ontology; CI; Ramzi Karam.

**Practical significance:** Co-locating schema, application, and agent changes can tighten the developer feedback loop and reduce coordination across separately versioned components. **Inference:** The local embedded Ontology appears intended to make cross-layer changes testable before CI, but the description does not specify promotion controls, testing guarantees, or repository-scale limits.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; detailed SuperRepo architecture and release mechanics are not available.

## 6. Code in Prod: AIP Evolve x Tampa General Hospital for Optimized Care | DevCon 6

video_id: WLleqr4GEAw
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=WLleqr4GEAw)
upload_date: 2026-07-14
official_title: Code in Prod: AIP Evolve x Tampa General Hospital for Optimized Care | DevCon 6

**What it is about:** Dr. David Zihr of Tampa General Hospital and Palantir Forward Deployed Engineer Colton Rusch show optimization of AI-generated utilization reviews in a hospital setting, focusing on cost and output quality.

**What they are building/working on:** AIP Evolve screens models across providers, rewrites prompts, and can replace generative-AI calls with deterministic code. In the described deployment it reduced the cost of AI-generated utilization reviews by nearly 70% and eliminated 84% of GPT calls, while Tampa General experts preferred the optimized output 90% of the time.

**Named products/organizations:** Palantir; Tampa General Hospital; AIP Evolve; GPT; Dr. David Zihr; Colton Rusch.

**Practical significance:** The example treats model selection, prompting, and deterministic substitution as one optimization space rather than assuming every task needs an LLM call. The official description reports simultaneous cost reduction and expert preference, making this a concrete production optimization case. **Inference:** The results are use-case-specific; the description does not provide sample size, evaluation design, clinical endpoints, or statistical uncertainty.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. The percentages are Palantir's description-level claims and cannot be independently assessed from the supplied material.

## 7. Product Launch: Agent Observability & Optimization | DevCon 6

video_id: GZHSCMz6Aio
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=GZHSCMz6Aio)
upload_date: 2026-07-14
official_title: Product Launch: Agent Observability & Optimization | DevCon 6

**What it is about:** Palantir Group Lead Christopher Jeganathan and Forward Deployed Engineer Colton Rusch present tools for explaining agent behavior and continuously improving AI-system cost, quality, and speed.

**What they are building/working on:** AIP Inspect and Agent Timeline transform raw agent telemetry into a readable narrative. The newly launched AIP Evolve uses teams of agents to test model changes, prompt rewrites, and architectural changes automatically against an organization's own evaluations. The described manufacturing demonstration reduces latency by up to 90%, including one case from 45 seconds to 8.8 seconds.

**Named products/organizations:** Palantir; AIP Inspect; Agent Timeline; AIP Evolve; Christopher Jeganathan; Colton Rusch.

**Practical significance:** This links diagnosis and optimization: teams can inspect what an agent did, then evaluate candidate system changes against explicit objectives. **Inference:** Closed-loop optimization could make agent operations more scalable, but the description does not state what changes require human approval, how regressions are prevented, or the scope of the latency benchmark.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable. Performance numbers are official description claims without supporting methodology in the available evidence.

## 8. Product Launch: Agent Engine | DevCon 6

video_id: mDGjptFvePY
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=mDGjptFvePY)
upload_date: 2026-07-14
official_title: Product Launch: Agent Engine | DevCon 6

**What it is about:** Palantir Group Lead Natasha Armbrust launches Agent Engine and Agent SDK as programming foundations for agents modeled internally as distributed state machines and designed for multiple human and software participants.

**What they are building/working on:** The framework exposes three primitives: context items for strongly typed session data, events for responding to state changes, and effects for interacting with external systems. A patient-discharge agent pauses for nurse approval, reassesses when a new lab result arrives, and displays its reasoning to participants.

**Named products/organizations:** Palantir; Agent Engine; Agent SDK; Natasha Armbrust.

**Practical significance:** Event-driven state and explicit effects address long-running workflows in which new data and human decisions can arrive asynchronously. **Inference:** The distributed-state-machine framing may improve recoverability and auditability, but those guarantees belong more directly to the separately described Orchestrator; the available description does not define Agent Engine's consistency or persistence semantics.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; implementation details beyond the three named primitives are not established by the available evidence.

## 9. Product Launch: Agent Infrastructure Layer: Orchestrator | DevCon 6

video_id: ZTw66mjYATo
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=ZTw66mjYATo)
upload_date: 2026-07-14
official_title: Product Launch: Agent Infrastructure Layer: Orchestrator | DevCon 6

**What it is about:** Palantir Group Lead John Mathews launches Orchestrator as infrastructure for trustworthy, long-running agent execution, emphasizing resilience and exact resumption rather than raw model intelligence.

**What they are building/working on:** Orchestrator is described as a durable execution layer that allows agents to crash, recover, wait, and resume from the same point. A patient-discharge agent is torn down mid-task and rehydrated days later with no lost state, no duplicate side effects, and no compute used while it waits for physician approval.

**Named products/organizations:** Palantir; Orchestrator; John Mathews.

**Practical significance:** Durable state, idempotent side-effect handling, and compute-free waiting are core requirements for agent workflows spanning failures and delayed human approvals. **Inference:** The design appears aimed at workflow-engine semantics for agentic systems, but the description does not disclose storage architecture, delivery guarantees, retry policy, or failure-domain testing.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; architectural guarantees are repeated only as stated in the official description.

## 10. Ankit Shankar Opening Remarks | DevCon 6

video_id: 6_6OvDIET_w
official_url: [Watch on YouTube](https://www.youtube.com/watch?v=6_6OvDIET_w)
upload_date: 2026-07-14
official_title: Ankit Shankar Opening Remarks | DevCon 6

**What it is about:** Palantir Software Engineer Ankit Shankar frames the DevCon 6 agent releases around the claim that production usefulness is constrained by trust: teams need to understand agent work before increasing autonomy.

**What they are building/working on:** He unveils an Ontology-based Agent Stack comprising Orchestrator for durable execution; Agent Engine and Agent SDK for agent construction; Agent Manager for actionable telemetry and observability; and AIP Evolve for continuous end-to-end optimization. A simple agent is tested against race conditions, human approvals, and mid-task crashes.

**Named products/organizations:** Palantir; Agent Stack; Ontology; Orchestrator; Agent Engine; Agent SDK; Agent Manager; AIP Evolve; Ankit Shankar.

**Practical significance:** The stack maps distinct production concerns—construction, execution, observation, optimization, and governance—to complementary products, presenting reliability and oversight as prerequisites for autonomy. **Inference:** This is the architectural thesis tying the other batch videos together; the description does not establish how the products integrate at API level or whether all components are generally available.

**Evidence basis:** Official Palantir title, metadata, and description only. Captions/transcript unavailable; the stress-test cases and product roles are limited to what the official description states.
