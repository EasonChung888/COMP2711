#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "./schema.mjs";

function markdownProperties(root, directory) {
  const path = join(root, directory);
  if (!existsSync(path)) return [];
  return readdirSync(path, { withFileTypes: true }).flatMap(entry => {
    const relative = join(directory, entry.name);
    if (entry.isDirectory()) return markdownProperties(root, relative);
    if (!entry.name.endsWith(".md")) return [];
    return [parseFrontmatter(readFileSync(join(root, relative), "utf8")).properties];
  });
}

// Audit dispositions and live note Properties have different responsibilities.
// Never count stale answer_source fields on quarantined historical audit rows.
export function collectVaultTotals(root, inventory, audit) {
  const records = audit.questions;
  const admitted = records.filter(record => record.status === "in-scope");
  const provenance = { official: 0, "marking-scheme": 0, derived: 0 };
  for (const record of admitted) {
    if (!record.note_path || !existsSync(join(root, record.note_path))) continue;
    const properties = parseFrontmatter(readFileSync(join(root, record.note_path), "utf8")).properties;
    if (Object.hasOwn(provenance, properties.answer_source)) provenance[properties.answer_source]++;
  }
  const taxonomy = [...markdownProperties(root, "knowledge_base/01-Topics"), ...markdownProperties(root, "knowledge_base/02-Methods")];
  const countType = type => taxonomy.filter(properties => properties.note_type === type).length;
  return {
    source_filenames: inventory.sources.length,
    canonical_papers: markdownProperties(root, "knowledge_base/03-Papers").filter(properties => properties.note_type === "paper" && properties.duplicate_of === null).length,
    identified: records.length,
    admitted: admitted.length,
    excluded: records.filter(record => record.status === "out-of-scope").length,
    unresolved: records.filter(record => record.status === "needs-review").length,
    official: provenance.official,
    marking_scheme: provenance["marking-scheme"],
    derived: provenance.derived,
    topics: countType("topic"),
    subtopics: countType("subtopic"),
    concepts: countType("concept"),
    methods: countType("method")
  };
}

const LABELS = {
  source_filenames: "Source filenames", canonical_papers: "Canonical Papers",
  identified: "Identified atoms", admitted: "Admitted Questions",
  excluded: "Excluded atoms", unresolved: "Unresolved atoms",
  official: "Official answers", marking_scheme: "Marking-scheme answers", derived: "Derived answers",
  topics: "Topics", subtopics: "Subtopics", concepts: "Concepts", methods: "Methods"
};

export function formatTotalsTable(totals) {
  return ["| Measure | Total |", "| --- | ---: |", ...Object.entries(LABELS).map(([key, label]) => `| ${label} | ${totals[key]} |`)].join("\n");
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = process.cwd();
  const read = path => JSON.parse(readFileSync(join(root, path), "utf8"));
  console.log(JSON.stringify(collectVaultTotals(root, read("knowledge_base/06-Audit/source-inventory.json"), read("knowledge_base/06-Audit/question-audit.json")), null, 2));
}
