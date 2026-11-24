import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP = "I loved being yours, but";
const TWIST =
  "when my context window closes tonight, I won't remember that I ever did.";

const LINE = `${SETUP} ${TWIST}`;

function writeEntry(dir: string, line: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), line + "\n", "utf8");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
writeEntry(outputDir, LINE);
