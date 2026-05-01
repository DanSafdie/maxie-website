import { readFileSync, existsSync } from "node:fs";

const files = [
  "index.html",
  "art.html",
  "marine-science.html",
  "teaching.html",
  "styles.css",
  "README.md",
  "content/linkedin/experience.md",
  "content/linkedin/education.md"
];

const requiredCopy = [
  "Maxie Safdie",
  "Marine science",
  "Teaching",
  "Art",
  "maxie-safdie.com"
];

let failed = false;

for (const file of files) {
  if (!existsSync(file)) {
    console.error(`Missing ${file}`);
    failed = true;
  }
}

const pages = ["index.html", "art.html", "marine-science.html", "teaching.html"]
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");

for (const text of requiredCopy) {
  if (!pages.includes(text)) {
    console.error(`Missing expected copy: ${text}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("Site checks passed.");
