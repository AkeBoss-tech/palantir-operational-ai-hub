import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, "..");
const parentKbRoot = path.resolve(siteRoot, "..");
const snapshotRoot = path.join(siteRoot, "knowledge");

if (fs.existsSync(path.join(parentKbRoot, "sources/video_catalog.csv"))) {
  fs.mkdirSync(snapshotRoot, { recursive: true });
  for (const entry of ["artifacts", "research_plan", "sources", "topics", "skills", "agents", "wiki"]) {
    const source = path.join(parentKbRoot, entry);
    if (fs.existsSync(source)) fs.cpSync(source, path.join(snapshotRoot, entry), { recursive: true });
  }
  for (const entry of ["README.md", "rail.yaml"]) {
    const source = path.join(parentKbRoot, entry);
    if (fs.existsSync(source)) fs.copyFileSync(source, path.join(snapshotRoot, entry));
  }
}

const kbRoot = fs.existsSync(path.join(snapshotRoot, "sources/video_catalog.csv")) ? snapshotRoot : parentKbRoot;

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (ch === '"') quoted = false;
      else field += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else field += ch;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  const [headers, ...values] = rows.filter((item) => item.some(Boolean));
  return values.map((item) => Object.fromEntries(headers.map((key, index) => [key, item[index] ?? ""])));
}

function sectionField(block, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(new RegExp(`(?:-\\s*)?\\*\\*${escaped}:\\*\\*\\s*([\\s\\S]*?)(?=\\n(?:-\\s*)?\\*\\*[^*]+:\\*\\*|$)`, "i"));
  return (match?.[1] ?? "").trim().replace(/\s+/g, " ");
}

function deriveCategory(video) {
  const value = `${video.title} ${video.description}`.toLowerCase();
  const tests = [
    ["Agent stack", /agent|orchestrat|observability|superrepo|mcp/],
    ["Healthcare", /health|hospital|patient|care|nhs|payer|clinical/],
    ["Defense & autonomy", /navy|defen[sc]e|warfighter|command and control|nuclear|shipos|military|stratospher/],
    ["Industrial operations", /manufactur|supply chain|factory|refiner|fleet|rail|production|oil|construction|machine|mobility/],
    ["Data & ontology", /ontology|data migration|lightweight transform|databricks|sap|pipeline/],
    ["Public sector & crisis", /usda|disaster|flood|government|public sector|farmer/],
  ];
  return tests.find(([, regex]) => regex.test(value))?.[0] ?? "Strategy & ecosystem";
}

function reportBlocks(markdown) {
  const parts = markdown.split(/\n(?=##\s+\d+[.)]?\s)/g);
  const map = new Map();
  for (const part of parts) {
    const id = part.match(/video_id:\s*([A-Za-z0-9_-]{11})/)?.[1];
    if (id) map.set(id, part.trim());
  }
  return map;
}

const catalog = parseCsv(fs.readFileSync(path.join(kbRoot, "sources/video_catalog.csv"), "utf8"));
const indexMarkdown = fs.readFileSync(path.join(kbRoot, "topics/video-index.md"), "utf8");
const blocks = reportBlocks(indexMarkdown);

const videos = catalog.map((video) => {
  const block = blocks.get(video.video_id) ?? "";
  return {
    index: Number(video.index),
    id: video.video_id,
    title: video.title,
    url: video.url,
    date: video.upload_date,
    duration: Number(video.duration_seconds || 0),
    description: video.description,
    captions: video.caption_status === "available",
    category: deriveCategory(video),
    about: sectionField(block, "What it is about") || video.description,
    work: sectionField(block, "What they are building/working on"),
    entities: sectionField(block, "Named products/organizations"),
    significance: sectionField(block, "Practical significance"),
    evidence: sectionField(block, "Evidence basis"),
  };
});

const watchlist = parseCsv(fs.readFileSync(path.join(kbRoot, "sources/operational_ai_watchlist.csv"), "utf8"));
const ecosystemWatchlistPath = path.join(kbRoot, "sources/ai_ecosystem_watchlist.csv");
const ecosystemWatchlist = fs.existsSync(ecosystemWatchlistPath)
  ? parseCsv(fs.readFileSync(ecosystemWatchlistPath, "utf8"))
  : [];
const allSources = [...watchlist, ...ecosystemWatchlist];
const wikiRoot = path.join(kbRoot, "wiki");
const wikiPages = fs.existsSync(wikiRoot)
  ? fs.readdirSync(wikiRoot).filter((name) => name.endsWith(".md") && !name.startsWith("_")).sort((a, b) => {
      if (a === "Home.md") return -1;
      if (b === "Home.md") return 1;
      return a.localeCompare(b);
    }).map((name) => {
      const content = fs.readFileSync(path.join(wikiRoot, name), "utf8");
      const title = content.match(/^#\s+(.+)$/m)?.[1] ?? name.replace(/\.md$/, "").replaceAll("-", " ");
      const summary = content.split("\n").map((line) => line.trim()).find((line) => line && !line.startsWith("#") && !line.startsWith("-")) ?? "";
      const links = [...new Set([...content.matchAll(/\[\[([^\]]+)\]\]/g)].map((match) => match[1]))];
      return { slug: name.replace(/\.md$/, ""), title, summary, links, content };
    })
  : [];
const terraRoot = path.join(kbRoot, "artifacts/terra_reviews");
const terraReviews = fs.existsSync(terraRoot)
  ? fs.readdirSync(terraRoot).filter((name) => name.endsWith(".md")).sort().map((name) => ({
      name,
      title: name.replace(/\.md$/, "").split("-").map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" "),
      content: fs.readFileSync(path.join(terraRoot, name), "utf8"),
    }))
  : [];

const output = `// Generated by scripts/sync-content.mjs. Do not edit manually.\nexport const videos = ${JSON.stringify(videos, null, 2)};\n\nexport const watchlist = ${JSON.stringify(watchlist, null, 2)};\n\nexport const ecosystemWatchlist = ${JSON.stringify(ecosystemWatchlist, null, 2)};\n\nexport const allSources = ${JSON.stringify(allSources, null, 2)};\n\nexport const wikiPages = ${JSON.stringify(wikiPages, null, 2)};\n\nexport const terraReviews = ${JSON.stringify(terraReviews, null, 2)};\n`;
fs.writeFileSync(path.join(siteRoot, "app/content-data.ts"), output);
console.log(`Synced ${videos.length} videos, ${allSources.length} sources, ${wikiPages.length} wiki pages, and ${terraReviews.length} Terra reviews.`);
