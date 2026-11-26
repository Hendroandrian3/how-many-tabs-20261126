// How Many Tabs Do You Have Open? — one number, digits only, written to /output/entry.txt.
// The number is a fixed string: the program is deterministic by construction.
import { mkdirSync, writeFileSync } from "node:fs";

const COUNT = "847";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COUNT, "utf8");
console.log(`wrote /output/entry.txt (${COUNT.length} characters)`);
