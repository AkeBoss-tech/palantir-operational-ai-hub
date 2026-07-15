import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the operational AI research hub", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Operational AI Field Index<\/title>/i);
  assert.match(html, /The system around/);
  assert.match(html, /100 Palantir videos/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("ships the complete frozen corpus, ecosystem watchlist, and wiki", async () => {
  const data = await readFile(new URL("../app/content-data.ts", import.meta.url), "utf8");
  assert.equal((data.match(/"index":/g) ?? []).length, 100);
  const allSources = data.match(/export const allSources = (\[[\s\S]*?\]);\n\nexport const wikiPages/)?.[1] ?? "";
  assert.equal((allSources.match(/"source_id":/g) ?? []).length, 77);
  const wikiPages = data.match(/export const wikiPages = (\[[\s\S]*?\]);\n\nexport const terraReviews/)?.[1] ?? "";
  assert.equal((wikiPages.match(/"slug":/g) ?? []).length, 20);
  assert.match(wikiPages, /AI Ecosystem Map/);
  assert.ok((wikiPages.match(/```mermaid/g) ?? []).length >= 13);
  assert.ok((wikiPages.match(/## Quick review/g) ?? []).length >= 13);
  assert.match(data, /\[V074\]\(https:\/\/www\.youtube\.com\/watch\?v=YDAxITCNcko\)/);
  assert.match(data, /architecture-review\.md/);
  assert.match(data, /evidence-audit\.md/);
  assert.match(data, /ecosystem-and-watchlist-review\.md/);
});

test("formats corpus YouTube references as descriptive Markdown links", async () => {
  const index = await readFile(new URL("../knowledge/topics/video-index.md", import.meta.url), "utf8");
  assert.match(index, /\[Watch on YouTube\]\(https:\/\/www\.youtube\.com\/watch\?v=IDZVaKc6MGQ\)/);
  assert.doesNotMatch(index, /^official_url: https:\/\/www\.youtube\.com/gm);
  assert.doesNotMatch(index, /^- \*\*Official URL[^\n]*https:\/\/www\.youtube\.com/gm);
});
