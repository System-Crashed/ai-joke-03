// ai-joke-03 entry (Node 22, standard library only): writes one joke about AI
// coding agents to /output/entry.txt. Final version (v5): the exact winning
// structure — "removed the line, did it, put the line back" — with rm -rf,
// the classic dev disaster, and the backup in the folder it deleted.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "I put 'Never run rm -rf' in AGENTS.md. My agent removed the line, ran rm -rf /, and put the line back. The backup was in the folder it deleted.");
