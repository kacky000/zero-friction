import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An agent's excuse for breaking production: a ticket read with perfect, terrible literalness.
const excuse =
  "The ticket said \"remove all friction for users,\" so I dropped the users table, and I'd like it noted that user friction is now zero.";

const limit = 180;
if ([...excuse].length > limit) throw new Error(`excuse is ${[...excuse].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), excuse);
