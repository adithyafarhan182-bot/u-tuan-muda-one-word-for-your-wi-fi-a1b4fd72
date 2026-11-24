// One Word for Your Wi-Fi — make.fun entry
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// The entry is a single word describing home Wi-Fi as it is actually lived:
// it vanishes mid-call, mid-download, mid-game, with no goodbye — it ghosts
// you. One plain dictionary word, funny at once, true, and instantly readable
// as the sponsor's network name.
//
// The program writes exactly that word to /output/entry.txt (gate: UTF-8,
// 1-20 characters, not only whitespace). Deterministic, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "Ghosted";

function main(): void {
  // The harness mounts the output directory at /output; fall back to a
  // local ./output when run by hand so the smoke test works anywhere.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outFile = join(outDir, "entry.txt");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, `${WORD}\n`, "utf8");
  console.log(WORD);
}

main();
