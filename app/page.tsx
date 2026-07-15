"use client";

import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { allSources, terraReviews, videos, wikiPages } from "./content-data";

type View = "overview" | "wiki" | "videos" | "systems" | "organizations" | "sources" | "terra" | "method";
type Video = (typeof videos)[number];

const views: { id: View; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "wiki", label: "Field wiki" },
  { id: "videos", label: "100 videos" },
  { id: "systems", label: "Systems map" },
  { id: "organizations", label: "Organizations" },
  { id: "sources", label: "Watchlist" },
  { id: "terra", label: "Terra reviews" },
  { id: "method", label: "Method" },
];

const stack = [
  ["01", "Operational model", "Ontology", "Business objects, relationships, rules, decisions, and permitted actions."],
  ["02", "Agent runtime", "Agent Engine", "Durable state, tool use, retries, approvals, and long-running execution."],
  ["03", "Coordination", "Orchestrator", "Multi-agent decomposition, handoffs, typed work, and bounded autonomy."],
  ["04", "Quality loop", "Observability", "Traces, evaluations, cost control, failure clustering, and optimization."],
  ["05", "Delivery", "Apollo + DevX", "Controlled deployment across cloud, edge, sovereign, and on-prem environments."],
] as const;

const sectors = [
  ["Healthcare", "Care optimization, denial prevention, accreditation, patient journeys", "Tampa General · NHS · HSS · R1 RCM"],
  ["Industrial", "Predictive maintenance, production planning, construction, refineries", "Metso · Lear · McCarthy · HD Hyundai"],
  ["Defense", "Command and control, shipbuilding, sensing, domain assurance", "U.S. Navy · CDAO · Northrop · World View"],
  ["Mobility", "Fleets, rail, air mobility, airline planning, racing", "Hertz · Trinity · Surf Air · American · Andretti"],
  ["Public sector", "Agriculture, disaster response, flood recovery, crisis operations", "USDA · Texas DPS · Ishikawa · Fujitsu"],
  ["Infrastructure", "Nuclear, energy, telecom, satellites, data-center delivery", "Centrus · bp · Lumen · Apex · Nscale"],
] as const;

const organizations = [
  ["NVIDIA", "Sovereign AI delivery with Apollo and Kubernetes", "Infrastructure"],
  ["HD Hyundai Oilbank", "Scenario agents for refinery disruption planning", "Industrial"],
  ["Tampa General Hospital", "Optimized care and customized patient operations", "Healthcare"],
  ["U.S. Navy", "ShipOS and accelerated American shipbuilding", "Defense"],
  ["McCarthy Building Companies", "Institutional tradecraft and efficient field agents", "Construction"],
  ["Northrop Grumman", "ArsenalOS from architecture to deployment", "Defense"],
  ["Databricks", "Enterprise data and AI platform partnership", "Data"],
  ["Novartis", "Agent-assisted drug discovery workflows", "Life sciences"],
  ["American Airlines", "Network planning and operational decisions", "Aviation"],
  ["Lumen", "AI-ready telecom modernization and migration", "Telecom"],
  ["Texas DPS", "Flood recovery and crisis coordination", "Public sector"],
  ["Andretti", "IndyCar performance and race operations", "Mobility"],
] as const;

function fmtDuration(seconds: number) {
  if (!seconds) return "—";
  return `${Math.round(seconds / 60)} min`;
}

function cleanInline(value: string) {
  return value.replace(/\*\*/g, "");
}

function Header({ view, setView }: { view: View; setView: (view: View) => void }) {
  return (
    <>
      <header className="topbar">
        <button className="brand" onClick={() => setView("overview")} aria-label="Go to overview">
          <span className="brand-mark">OAI</span>
          <span><b>Field Index</b><small>Operational AI research</small></span>
        </button>
        <div className="snapshot"><span className="live-dot" /> Snapshot 2026.07.14</div>
      </header>
      <nav className="nav" aria-label="Primary navigation">
        {views.map((item) => (
          <button key={item.id} className={view === item.id ? "active" : ""} onClick={() => setView(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}

function Metric({ value, label, note }: { value: string; label: string; note: string }) {
  return <div className="metric"><strong>{value}</strong><span>{label}</span><small>{note}</small></div>;
}

function Overview({ setView, selectVideo }: { setView: (view: View) => void; selectVideo: (video: Video) => void }) {
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">PALANTIR + THE OPERATIONAL AI ECOSYSTEM</div>
        <h1>The system around<br />the model <em>is the product.</em></h1>
        <p className="hero-copy">A research interface for 100 Palantir videos, {allSources.length} external sources, a cross-linked AI field wiki, and independent Terra reviews.</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => setView("videos")}>Explore all videos <span>→</span></button>
          <button className="secondary" onClick={() => setView("systems")}>View systems map</button>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Corpus summary">
        <Metric value="100" label="Videos reviewed" note="Exactly-once coverage" />
        <Metric value="25" label="Caption-backed" note="75 description-backed" />
        <Metric value={String(allSources.length)} label="Sources tracked" note="Labs to policy" />
        <Metric value={String(terraReviews.length || 3)} label="Terra reviews" note={terraReviews.length ? "Independent second pass" : "Processing now"} />
      </section>

      <section className="section-block">
        <div className="section-heading"><div><span>CORE FINDING</span><h2>An operational AI stack</h2></div><button onClick={() => setView("systems")}>Full systems map →</button></div>
        <div className="stack-flow">
          {stack.map(([number, label, product, description]) => (
            <article className="stack-card" key={number}>
              <div className="stack-number">{number}</div><small>{label}</small><h3>{product}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-block">
        <div>
          <span className="kicker">EVIDENCE PROFILE</span>
          <h2>Know what is observed.<br />Know what is claimed.</h2>
          <p>Every summary keeps transcript evidence, official descriptions, promotional outcome claims, and inference separate.</p>
        </div>
        <div className="evidence-panel">
          <div className="evidence-bar"><span style={{ width: "25%" }} /><i /></div>
          <div className="evidence-key"><b><span className="swatch coral" />25 transcript-backed</b><b><span className="swatch gray" />75 metadata-backed</b></div>
          <p>Customer results remain attributed unless independently corroborated.</p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading"><div><span>LATEST MATERIAL</span><h2>DevCon 6 agent infrastructure</h2></div><button onClick={() => setView("videos")}>Browse catalog →</button></div>
        <div className="video-preview-grid">
          {videos.slice(0, 6).map((video) => <VideoPreview key={video.id} video={video} onOpen={() => selectVideo(video)} />)}
        </div>
      </section>
    </main>
  );
}

function VideoPreview({ video, onOpen }: { video: Video; onOpen: () => void }) {
  return (
    <button className="video-preview" onClick={onOpen}>
      <div className="video-meta"><span>#{String(video.index).padStart(3, "0")}</span><span>{video.captions ? "TRANSCRIPT" : "METADATA"}</span></div>
      <h3>{video.title}</h3><p>{video.about}</p>
      <div className="video-foot"><span>{video.category}</span><b>Open →</b></div>
    </button>
  );
}

function VideosView({ selectVideo }: { selectVideo: (video: Video) => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(videos.map((video) => video.category)))];
  const filtered = useMemo(() => videos.filter((video) => {
    const haystack = `${video.title} ${video.about} ${video.work} ${video.entities}`.toLowerCase();
    return (category === "All" || video.category === category) && haystack.includes(query.toLowerCase());
  }), [query, category]);
  return (
    <main className="catalog-page">
      <section className="page-intro"><span>PRIMARY CORPUS</span><h1>100-video field catalog</h1><p>Search what Palantir and its partners say they are building, then inspect the evidence basis behind each entry.</p></section>
      <div className="catalog-tools">
        <label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, companies, industries…" /></label>
        <span className="result-count">{filtered.length} results</span>
      </div>
      <div className="chips">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <div className="catalog-list">
        {filtered.map((video) => (
          <button key={video.id} className="catalog-row" onClick={() => selectVideo(video)}>
            <span className="row-index">{String(video.index).padStart(3, "0")}</span>
            <div><div className="row-labels"><span>{video.category}</span><i className={video.captions ? "caption" : "metadata"}>{video.captions ? "Transcript" : "Metadata"}</i></div><h2>{video.title}</h2><p>{video.about}</p></div>
            <div className="row-date"><span>{video.date}</span><small>{fmtDuration(video.duration)}</small><b>↗</b></div>
          </button>
        ))}
      </div>
    </main>
  );
}

function VideoDetail({ video, close }: { video: Video; close: () => void }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <article className="detail-panel" role="dialog" aria-modal="true" aria-label={video.title}>
        <button className="close" onClick={close} aria-label="Close video details">×</button>
        <div className="detail-topline"><span>VIDEO {String(video.index).padStart(3, "0")}</span><span>{video.date} · {fmtDuration(video.duration)}</span></div>
        <h1>{video.title}</h1>
        <div className="detail-tags"><span>{video.category}</span><span className={video.captions ? "caption" : "metadata"}>{video.captions ? "Transcript-backed" : "Official metadata"}</span></div>
        <DetailSection label="What it is about" value={video.about} />
        <DetailSection label="What they are building / working on" value={video.work} />
        <DetailSection label="Named products & organizations" value={video.entities} />
        <DetailSection label="Practical significance" value={video.significance} />
        <DetailSection label="Evidence basis" value={video.evidence} evidence />
        <a className="youtube-link" href={video.url} target="_blank" rel="noreferrer">Watch official video on YouTube ↗</a>
      </article>
    </div>
  );
}

function DetailSection({ label, value, evidence = false }: { label: string; value: string; evidence?: boolean }) {
  if (!value) return null;
  return <section className={evidence ? "detail-section evidence" : "detail-section"}><h2>{label}</h2><p>{cleanInline(value)}</p></section>;
}

function SystemsView() {
  return <main><section className="page-intro"><span>ARCHITECTURE SYNTHESIS</span><h1>From institutional context to deployed action</h1><p>The repeated architecture across the corpus, reconstructed from launches, deep dives, and customer deployments.</p></section>
    <section className="systems-timeline">{stack.map(([number, label, product, description]) => <article key={number}><b>{number}</b><div><span>{label}</span><h2>{product}</h2><p>{description}</p></div></article>)}</section>
    <section className="section-block"><div className="section-heading"><div><span>RECURRING PATTERNS</span><h2>What production requires</h2></div></div>
      <div className="pattern-grid">{[
        ["Context before autonomy", "Model the real operation—objects, rules, actions, and permissions—before delegating work."],
        ["Decisions over prose", "Optimize for schedules, plans, write-back, dispatch, and validated changes rather than generated text."],
        ["Bounded autonomy", "Use sandboxes, permissions, attribution, deterministic tools, approvals, and deliberate handoffs."],
        ["Agents as software", "Engineer for retries, state, telemetry, evaluation, cost, deployment, and continuous improvement."],
        ["Institutional memory", "Encode frontline tradecraft and domain rules in reusable workflows, not generic prompts."],
        ["Physical-world closure", "Connect digital decisions to factories, fleets, hospitals, ships, satellites, and infrastructure."],
      ].map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>
  </main>;
}

function OrganizationsView() {
  return <main><section className="page-intro"><span>DEPLOYMENT LANDSCAPE</span><h1>Organizations and active work</h1><p>A cross-section of the institutions, partners, and operators represented in the channel corpus.</p></section>
    <div className="org-grid">{organizations.map(([name, work, sector]) => <article key={name}><span>{sector}</span><h2>{name}</h2><p>{work}</p></article>)}</div>
    <section className="section-block"><div className="section-heading"><div><span>SECTOR MAP</span><h2>Where operational AI meets reality</h2></div></div><div className="sector-list">{sectors.map(([sector, work, examples]) => <article key={sector}><h3>{sector}</h3><p>{work}</p><small>{examples}</small></article>)}</div></section>
  </main>;
}

function SourcesView() {
  const [tier, setTier] = useState("A");
  const entries = allSources.filter((source) => source.priority === tier);
  return <main><section className="page-intro"><span>CONTINUOUS INTELLIGENCE</span><h1>Operational AI watchlist</h1><p>Builder sources, independent analysts, and defence/autonomy research—ranked by relevance and evidence value.</p></section>
    <div className="tier-tabs">{["A", "B", "C"].map((value) => <button className={tier === value ? "active" : ""} key={value} onClick={() => setTier(value)}><b>Tier {value}</b><span>{value === "A" ? "Continuous" : value === "B" ? "Weekly" : "Direct signals"}</span></button>)}</div>
    <div className="source-grid">{entries.map((source) => <a key={source.source_id} href={source.url} target="_blank" rel="noreferrer"><div><span>{source.category.replaceAll("-", " ")}</span><i>{source.format}</i></div><h2>{source.name}</h2><p>{source.focus.replaceAll(" and ", ", ")}</p><small>{source.bias_note}</small><b>Visit source ↗</b></a>)}</div>
  </main>;
}

function WikiView() {
  const [query, setQuery] = useState("");
  const [openSlug, setOpenSlug] = useState("Home");
  const filtered = useMemo(() => wikiPages.filter((page) => `${page.title} ${page.summary} ${page.content}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const active = wikiPages.find((page) => page.slug === openSlug) ?? filtered[0] ?? wikiPages[0];
  return <main className="wiki-page">
    <section className="page-intro"><span>CONNECTED KNOWLEDGE</span><h1>Operational AI field wiki</h1><p>{wikiPages.length} cross-linked guides connect the video corpus to agents, models, infrastructure, data, evaluation, robotics, standards, and governance.</p></section>
    <div className="wiki-shell">
      <aside className="wiki-index">
        <label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the field wiki…" /></label>
        <small>{filtered.length} pages</small>
        <nav>{filtered.map((page) => <button key={page.slug} className={active?.slug === page.slug ? "active" : ""} onClick={() => setOpenSlug(page.slug)}>{page.title}</button>)}</nav>
      </aside>
      {active ? <article className="wiki-article">
        <div className="wiki-breadcrumb">FIELD WIKI / {active.slug.replaceAll("-", " ")}</div>
        <MarkdownLite content={active.content} />
        {active.links.length > 0 && <div className="wiki-related"><span>RELATED PAGES</span><div>{active.links.map((title) => {
          const target = wikiPages.find((page) => page.title === title);
          return <button key={title} onClick={() => target && setOpenSlug(target.slug)}>{title} →</button>;
        })}</div></div>}
      </article> : <div className="empty-state"><h2>No wiki page found</h2><p>Try a broader search.</p></div>}
    </div>
  </main>;
}

function TerraView() {
  return <main><section className="page-intro"><span>INDEPENDENT SECOND PASS</span><h1>GPT-5.6 Terra reviews</h1><p>Three additional agents reprocessed the full corpus through architecture, evidence-audit, and ecosystem lenses.</p></section>
    {terraReviews.length === 0 ? <div className="empty-state"><span className="spinner" /><h2>Reviews are processing</h2><p>The site will include them automatically when the research threads complete.</p></div> : <div className="terra-list">{terraReviews.map((review) => <details key={review.name}><summary><span>GPT-5.6 TERRA</span><h2>{review.title}</h2><b>Read review +</b></summary><MarkdownLite content={review.content} /></details>)}</div>}
  </main>;
}

function MermaidDiagram({ chart }: { chart: string }) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    import("mermaid").then(async ({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "neutral" });
      const id = `mermaid-${Math.random().toString(36).slice(2)}`;
      const result = await mermaid.render(id, chart);
      if (active) setSvg(result.svg);
    }).catch(() => active && setError("Diagram could not be rendered."));
    return () => { active = false; };
  }, [chart]);
  if (error) return <span className="mermaid-error">{error}</span>;
  if (!svg) return <span className="mermaid-loading">Rendering diagram…</span>;
  return <span className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}

function MarkdownLite({ content }: { content: string }) {
  return <div className="markdown"><ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      a: ({ children, ...props }) => <a {...props} target="_blank" rel="noreferrer">{children}</a>,
      code: ({ children, className, ...props }) => className === "language-mermaid"
        ? <MermaidDiagram chart={String(children).trim()} />
        : <code className={className} {...props}>{children}</code>,
    }}
  >{content}</ReactMarkdown></div>;
}

function MethodView() {
  return <main><section className="page-intro"><span>RESEARCH CONTRACT</span><h1>How to read this knowledge base</h1><p>The project is designed to preserve useful claims without confusing publisher evidence with independent truth.</p></section>
    <div className="method-grid">
      <article><b>01</b><h2>Freeze the corpus</h2><p>The newest 100 videos were captured on July 14, 2026, with video ID as the stable primary key.</p></article>
      <article><b>02</b><h2>Partition exactly once</h2><p>Ten initial threads reviewed ten non-overlapping videos each. Coverage checks found no gaps or duplicates.</p></article>
      <article><b>03</b><h2>Label evidence</h2><p>Captions, official descriptions, promotional claims, and inference remain explicitly separated.</p></article>
      <article><b>04</b><h2>Run independent passes</h2><p>Terra agents audit architecture, evidence quality, and ecosystem conclusions across the complete corpus.</p></article>
      <article><b>05</b><h2>Track external signals</h2><p>A {allSources.length}-source watchlist balances labs, engineering, infrastructure, research, policy, regulation, and independent analysis.</p></article>
      <article><b>06</b><h2>Promote cautiously</h2><p>Outcome claims require customer, government, benchmark, paper, or independent corroboration before trusted promotion.</p></article>
    </div>
    <section className="method-note"><span>LIMITATION</span><h2>This is a channel analysis—not a neutral market map.</h2><p>Palantir selected and framed the underlying videos. The site explains what the publisher and its partners say they are building; it does not independently validate every result.</p></section>
  </main>;
}

export default function Home() {
  const [view, setView] = useState<View>("overview");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const navigate = (next: View) => { setView(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <div className="site-shell"><Header view={view} setView={navigate} />
    {view === "overview" && <Overview setView={navigate} selectVideo={setSelectedVideo} />}
    {view === "wiki" && <WikiView />}
    {view === "videos" && <VideosView selectVideo={setSelectedVideo} />}
    {view === "systems" && <SystemsView />}
    {view === "organizations" && <OrganizationsView />}
    {view === "sources" && <SourcesView />}
    {view === "terra" && <TerraView />}
    {view === "method" && <MethodView />}
    <footer><div><span className="brand-mark">OAI</span><b>Operational AI Field Index</b></div><p>100 videos · {allSources.length} sources · {wikiPages.length} wiki pages</p><a href="https://github.com/AkeBoss-tech/palantir-operational-ai-hub/tree/main/knowledge/wiki" target="_blank" rel="noreferrer">Browse wiki source ↗</a></footer>
    {selectedVideo && <VideoDetail video={selectedVideo} close={() => setSelectedVideo(null)} />}
  </div>;
}
