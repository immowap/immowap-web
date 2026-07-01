import fs from "fs";
import path from "path";

const root = path.resolve(".");
const imagesDir = path.join(root, "public/images");
const srcDir = path.join(root, "src");

function walkImages(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkImages(full, acc);
    else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      acc.push(full.replace(/\\/g, "/").split("/public")[1]);
    }
  }
  return acc;
}

function walkSrc(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkSrc(full, acc);
    else if (/\.(tsx?|jsx?|mjs)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

const files = walkImages(imagesDir);
const code = walkSrc(srcDir)
  .map((f) => fs.readFileSync(f, "utf8"))
  .join("\n");

const used = new Map();
for (const file of files) {
  const needle = file.replace(/^\//, "");
  const count = code.split(needle).length - 1;
  if (count > 0) used.set(file, count);
}

console.log("=== DUPLICATES (>1 reference) ===");
[...used.entries()]
  .filter(([, c]) => c > 1)
  .sort((a, b) => b[1] - a[1])
  .forEach(([p, c]) => console.log(`${c}\t${p}`));

console.log("\n=== UNUSED FILES ===");
const unused = files.filter((f) => !used.has(f));
console.log(`Total files: ${files.length}, used: ${used.size}, unused: ${unused.length}`);
unused.forEach((f) => console.log(f));
