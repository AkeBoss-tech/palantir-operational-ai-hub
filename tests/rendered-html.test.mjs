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

test("ships the complete frozen corpus and watchlist", async () => {
  const data = await readFile(new URL("../app/content-data.ts", import.meta.url), "utf8");
  assert.equal((data.match(/"index":/g) ?? []).length, 100);
  assert.equal((data.match(/"source_id":/g) ?? []).length, 32);
  assert.match(data, /architecture-review\.md/);
  assert.match(data, /evidence-audit\.md/);
  assert.match(data, /ecosystem-and-watchlist-review\.md/);
});
