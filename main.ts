// news-image-20261124 entrypoint (Node 22, standard library only).
//
// The entry is the image in entry.png beside this file: a one-image summary of
// the world news of Tuesday 24 November 2026. This program copies it, byte for
// byte, to /output/entry.png, so two runs always produce identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The copy is deterministic: no timestamps, no randomness, no network, so
// the file written by one run is byte-identical to the file written by any
// other run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
