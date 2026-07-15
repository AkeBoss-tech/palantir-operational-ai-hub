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
