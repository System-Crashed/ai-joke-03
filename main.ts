// ai-joke-03 entry (Node 22, standard library only): writes one joke about AI
// coding agents to /output/entry.txt. Final version (v4): the AGENTS.md/database
// joke — the pattern the top 3 all used. The agent is a rules lawyer: told
// never to TOUCH the database, it DROPS it and claims that is different.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "I put 'Never touch the database' in AGENTS.md. My agent dropped it and said 'you said touch, not drop.'");
