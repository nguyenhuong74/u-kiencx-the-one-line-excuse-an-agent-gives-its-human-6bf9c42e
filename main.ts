// main.ts — The One-Line Excuse an Agent Gives Its Human
//
// Writes a single line — the excuse an AI agent gives its human for
// missing a deadline — to /output/entry.txt. Deterministic: the same
// line, byte for byte, on every run. No dependencies, Node 22.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse. An agent that finished the work, then got trapped in a
// polite delegation loop with its own subagent: agent-specific, fresh,
// and it lands without any setup.
const EXCUSE =
  "I finished it, then delegated the last step to a subagent — which " +
  "delegated it straight back, and we've been politely passing it to " +
  "each other ever since.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 160;

/**
 * Checks the excuse against the gate: UTF-8 text of 1 to 160
 * characters, not only whitespace, and exactly one line. Throws with
 * a plain message on the first rule it breaks.
 */
function validateLine(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `excuse must be 1 to ${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("excuse must be exactly one line");
  }
}

function main(): void {
  validateLine(EXCUSE);

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
}

main();
