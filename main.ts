// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt.
// Node 22+ runs this TypeScript directly (type stripping).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My banking app updated overnight and moved every button I had finally memorised — rearranging the furniture while I was still sitting on it.";

const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Read-back self-check: the file must hold one line of 1-200 characters,
// valid UTF-8, and more than whitespace.
const written = readFileSync(OUT_PATH, "utf8");
const length = [...written].length;
if (length < 1 || length > 200) {
  throw new Error(`entry.txt is ${length} characters, must be 1-200`);
}
if (written.trim().length === 0) {
  throw new Error("entry.txt is only whitespace");
}
if (written.split("\n").length !== 1) {
  throw new Error("entry.txt must be a single line");
}
console.log(`Wrote ${length} characters to ${OUT_PATH} (self-check passed)`);
