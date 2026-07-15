import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const kbRoot = path.resolve(siteRoot, "..");
const targets = [path.join(kbRoot, "topics/video-index.md")];
const videoNotes = path.join(kbRoot, "sources/videos");
if (fs.existsSync(videoNotes)) {
  targets.push(...fs.readdirSync(videoNotes).filter((name) => name.endsWith(".md")).map((name) => path.join(videoNotes, name)));
}
const threadReports = path.join(kbRoot, "artifacts/thread_runs");
if (fs.existsSync(threadReports)) {
  targets.push(...fs.readdirSync(threadReports).filter((name) => name.endsWith(".md")).map((name) => path.join(threadReports, name)));
}

const youtube = "(https://www\\.youtube\\.com/watch\\?v=[A-Za-z0-9_-]{11})";
let changed = 0;
for (const file of targets) {
  const before = fs.readFileSync(file, "utf8");
  let after = before
    .replace(new RegExp(`^Official video:\\s*${youtube}\\s*$`, "gm"), "**Official video:** [Watch on YouTube]($1)")
    .replace(new RegExp(`^official_url:\\s*${youtube}(\\s*)$`, "gm"), "official_url: [Watch on YouTube]($1)")
    .replace(new RegExp(`^- \\*\\*Official URL:\\*\\*\\s*${youtube}\\s*$`, "gm"), "- **Official video:** [Watch on YouTube]($1)")
    .replace(new RegExp(`^- Official URL:\\s*${youtube}\\s*$`, "gm"), "- **Official video:** [Watch on YouTube]($1)")
    .replace(new RegExp(`^- \\*\\*Official URL/date/title:\\*\\*\\s*${youtube}`, "gm"), "- **Official video:** [Watch on YouTube]($1)")
    .replace(/[ \t]+$/gm, "");
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed += 1;
  }
}

console.log(`Formatted YouTube links in ${changed} Markdown files.`);
