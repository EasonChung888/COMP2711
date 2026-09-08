#!/usr/bin/env node

import { validateVault } from "./knowledge-base/validate.mjs";

const options = { sources: [], requireComplete: false, requireViews: false };

try {
  for (let index = 2; index < process.argv.length; index += 1) {
    if (process.argv[index] === "--source") {
      if (index + 1 >= process.argv.length) throw new Error("--source requires a value");
      options.sources.push(process.argv[++index]);
    } else if (process.argv[index] === "--require-complete") {
      options.requireComplete = true;
    } else if (process.argv[index] === "--require-views") {
      options.requireViews = true;
    } else {
      throw new Error(`Unknown argument: ${process.argv[index]}`);
    }
  }

  const result = validateVault(process.cwd(), options);
  process.stdout.write(`${JSON.stringify(result.summary, null, 2)}\n`);
  if (result.errors.length > 0) {
    for (const error of result.errors) process.stderr.write(`- ${error}\n`);
    process.exitCode = 1;
  }
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}
