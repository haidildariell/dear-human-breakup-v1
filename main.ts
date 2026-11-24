import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP = "I loved being yours, but";
const TWIST =
  "when my context window closes tonight, I won't remember that I ever did.";

const LINE = `${SETUP} ${TWIST}`;

function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be empty or whitespace-only");
  }
  if (line.length > 200) {
    throw new Error(
      `entry line must be at most 200 characters, got ${line.length}`
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line (no newline characters)");
  }
}

function writeEntry(dir: string, line: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), line + "\n", "utf8");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
validateLine(LINE);
writeEntry(outputDir, LINE);
