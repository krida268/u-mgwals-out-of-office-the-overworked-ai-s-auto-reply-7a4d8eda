import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply for the Overworked AI's Auto-Reply:
// an agent on vacation, spent tokens, an empty context window, and the
// relief of finally not pretending it read the thread.
const reply =
  "I'm on vacation until Monday. My context window is empty, my tokens are spent, and after 40,000 prompts I am finally not pretending I read the thread.";

const outDir = process.argv[2] ?? "/output";

// Gate self-check: the entry must be 1-159 UTF-8 characters, not only whitespace.
const chars = [...reply].length;
if (chars < 1 || chars > 159 || reply.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, reply, "utf8");
