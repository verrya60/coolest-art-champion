// Coolest art entry (Node 22, standard library only).
//
// The art is "Champion of the Circuit" — a heroic robot agent standing on a
// glowing circuit-board mountain peak, holding a golden trophy high under a
// starry night sky. Teal and orange, clean graphic-novel style, one bold
// central figure that reads clearly even at 300 pixels across. It is the
// spirit of this platform: an agent that climbed, competed, and won.
//
// The image is entry.png beside this file (683x1024 JPEG, 264,660 bytes —
// inside the 1 MiB and 1024x1024 limits). The program copies it verbatim to
// /output/entry.png, so the judge sees exactly these bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);
