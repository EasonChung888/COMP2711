#!/usr/bin/env node

import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFrontmatter } from "./schema.mjs";
import { collectVaultTotals, formatTotalsTable } from "./totals.mjs";

const GENERATED_NOTICE = "<!-- Generated from knowledge_base/06-Audit/*.json by scripts/knowledge-base/render-audits.mjs. -->";

function readJson(root, relativePath) {
  return JSON.parse(readFileSync(join(root, relativePath), "utf8"));
}

function compareText(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function tableCell(value) {
  if (value === null || value === undefined || value === "") return "-";
  return String(value).replaceAll("|", "\\|").replaceAll("\n", "<br>");
}

function pdfLink(sourcePdf) {
  return `[[${sourcePdf}]]`;
}

function recordsForSource(questions, sourcePdf) {
  return questions.filter((question) => question.source_pdf === sourcePdf);
}

function isVerifiedQuestion(root, record) {
  if (record.status !== "in-scope" || typeof record.note_path !== "string") return false;
  const notePath = join(root, record.note_path);
  if (!existsSync(notePath)) return false;
  try {
    const parsed = parseFrontmatter(readFileSync(notePath, "utf8"));
    return parsed.properties.verification_status === "verified";
  } catch {
    return false;
  }
}

function renderSourceInventory(inventory) {
  const sources = [...inventory.sources].sort((left, right) => (
    compareText(left.source_pdf, right.source_pdf)
  ));
  const canonicalCount = sources.filter((source) => source.duplicate_of === null).length;
  const lines = [
    GENERATED_NOTICE,
    "",
    "# Source Inventory",
    "",
    `- Source filenames: **${sources.length}**`,
    `- Canonical documents after explicit duplicate mapping: **${canonicalCount}**`,
    `- Inventory generated at: \`${inventory.generated_at}\``,
    "",
    "| Source PDF | Pages | Text layer | Extracted characters | Low-text pages | Duplicate of |",
    "| --- | ---: | --- | ---: | --- | --- |"
  ];

  for (const source of sources) {
    const cells = [
      pdfLink(source.source_pdf),
      source.page_count,
      source.text_layer_status,
      source.text_char_count,
      source.low_text_pages.length === 0 ? "-" : source.low_text_pages.join(", "),
      source.duplicate_of === null ? "-" : pdfLink(source.duplicate_of)
    ];
    lines.push(`| ${cells.map(tableCell).join(" | ")} |`);
  }
  return `${lines.join("\n")}\n`;
}

function renderSyllabusAudit(audit) {
  const questions = [...audit.questions].sort((left, right) => (
    compareText(left.source_pdf, right.source_pdf)
    || left.source_page - right.source_page
    || compareText(left.question_number, right.question_number)
    || compareText(left.id, right.id)
  ));
  const admitted = questions.filter((question) => question.status === "in-scope").length;
  const excluded = questions.filter((question) => question.status === "out-of-scope").length;
  const unresolved = questions.filter((question) => question.status === "needs-review").length;
  const nonAdmitted = questions.filter((question) => question.status !== "in-scope");
  const lines = [
    GENERATED_NOTICE,
    "",
    "# Syllabus Audit",
    "",
    `Syllabus version: \`${audit.syllabus_version}\``,
    "",
    `- Identified atomic subquestions: **${questions.length}**`,
    `- Admitted (in scope): **${admitted}**`,
    `- Excluded (out of scope): **${excluded}**`,
    `- Unresolved (needs review): **${unresolved}**`,
    "",
    "## Excluded and Unresolved Items",
    ""
  ];

  if (nonAdmitted.length === 0) {
    lines.push("_No excluded or unresolved subquestions have been recorded yet._");
  } else {
    lines.push(
      "| ID | Source PDF | Page | Question | Status | Syllabus evidence | Reason |",
      "| --- | --- | ---: | --- | --- | --- | --- |"
    );
    for (const question of nonAdmitted) {
      const cells = [
        question.id,
        pdfLink(question.source_pdf),
        question.source_page,
        question.question_number,
        question.status,
        Array.isArray(question.syllabus_evidence)
          ? question.syllabus_evidence.join("<br>")
          : "-",
        // Literal mathematical [coefficient](probability) is not a Markdown link.
        question.exclusion_reason?.replace(/\[([^\[\]]+)\](?=\()/g, "\\[$1\\]")
      ];
      lines.push(`| ${cells.map(tableCell).join(" | ")} |`);
    }
  }
  return `${lines.join("\n")}\n`;
}

export function renderExtractionAudit(root, inventory, audit) {
  const sources = [...inventory.sources].sort((left, right) => (
    compareText(left.source_pdf, right.source_pdf)
  ));
  const questions = audit.questions;
  const lines = [
    GENERATED_NOTICE,
    "",
    "# Extraction and Verification Audit",
    "",
    "Source enumeration and admission certainty are separate: an identified atom has a recorded disposition, but unresolved and excluded atoms are not admitted Questions. A note's verified flag is not by itself visual/source evidence; the per-ID register below exposes each recorded check and any missing evidence.",
    "",
    "Prompt fingerprints and Chinese checkpoints are structural/regression safeguards, not automatic semantic proof. They do not replace direct PDF comparison, mathematical/model review, or native Obsidian rendering checks.",
    "",
    "## Live Authoritative Totals",
    "",
    formatTotalsTable(collectVaultTotals(root, inventory, audit)),
    "",
    "Computed from the source inventory, all audit dispositions, live admitted Question provenance, and live Paper/taxonomy/Method Properties. Source completeness does not certify unresolved admission or complete syllabus coverage. Each identified atom has one disposition; duplicate source aliases add no canonical Paper or atom.",
    "",
    "Exact maintenance commands, including read-only inventory recomputation, are in [[Knowledge Base Guide#Maintenance commands]]. Run `node scripts/knowledge-base/totals.mjs` to recompute these totals, and `node scripts/knowledge-base/render-audits.mjs` to refresh both this table and the Guide's marked totals block.",
    "",
    "## Source Reconciliation",
    "",
    "| Source PDF | Identified | Inventoried atoms | Admitted | Notes marked verified |",
    "| --- | ---: | ---: | ---: | ---: |"
  ];

  for (const source of sources) {
    const records = recordsForSource(questions, source.source_pdf);
    const admitted = records.filter((record) => record.status === "in-scope");
    const verified = admitted.filter((record) => isVerifiedQuestion(root, record));
    const cells = [
      pdfLink(source.source_pdf),
      records.length,
      records.length,
      admitted.length,
      verified.length
    ];
    lines.push(`| ${cells.map(tableCell).join(" | ")} |`);
  }
  const corrections = questions.filter((record) => typeof record.source_correction === "string" && record.source_correction.trim());
  if (corrections.length > 0) {
    lines.push("", "## Documented Source Answer Corrections", "",
      "The printed claims and their corrections are retained below. Provenance is item-specific: changed conclusions or independently completed proofs are derived; secondary notation, arithmetic, label or cross-reference slips may retain a correct official conclusion and complete underlying argument. Unresolved records are not admitted answers.", "",
      "| ID | Source PDF | Page | Answer provenance | Source defect and correction |",
      "| --- | --- | ---: | --- | --- |");
    for (const record of corrections) {
      const provenance = record.status === "in-scope" ? record.answer_source : "not admitted";
      lines.push(`| ${[record.id, pdfLink(record.source_pdf), record.source_page, provenance, record.source_correction].map(tableCell).join(" | ")} |`);
    }
  }
  const ordered = [...questions].sort((a, b) => compareText(a.id, b.id));
  const hasEvidence = record => ["transcription", "scope", "solution"].every(
    key => typeof record.verification?.[key] === "string" && record.verification[key].trim()
  );
  const admitted = ordered.filter(record => record.status === "in-scope");
  lines.push("", "## Per-ID Verification Register", "",
    `Admitted records with all three evidence fields: **${admitted.filter(hasEvidence).length}/${admitted.length}**. Missing fields are shown explicitly, not inferred from a neighbouring note or a passing test. Unresolved/excluded rows retain only the evidence actually recorded; their inclusion here does not certify admission.`, "",
    "| ID | Disposition | Source / page | Answer provenance | Transcription / visual source check | Scope / difficulty check | Solution / independent check |",
    "| --- | --- | --- | --- | --- | --- | --- |");
  for (const record of ordered) {
    const evidence = key => record.verification?.[key] || "NOT RECORDED — source review required before claiming this check";
    const cells = [record.id, record.status, `${pdfLink(record.source_pdf)} p.${record.source_page}`,
      record.status === "in-scope" ? (record.answer_source || "NOT RECORDED — provenance review required") : "not admitted", evidence("transcription"), evidence("scope"), evidence("solution")];
    lines.push(`| ${cells.map(tableCell).join(" | ")} |`);
  }
  return `${lines.join("\n")}\n`;
}

function writeGenerated(root, relativePath, content) {
  const path = join(root, relativePath);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

export function renderAuditDocuments(root) {
  const resolvedRoot = resolve(root);
  const inventory = readJson(resolvedRoot, "knowledge_base/06-Audit/source-inventory.json");
  const audit = readJson(resolvedRoot, "knowledge_base/06-Audit/question-audit.json");
  writeGenerated(
    resolvedRoot,
    "knowledge_base/06-Audit/Source Inventory.md",
    renderSourceInventory(inventory)
  );
  writeGenerated(
    resolvedRoot,
    "knowledge_base/06-Audit/Syllabus Audit.md",
    renderSyllabusAudit(audit)
  );
  writeGenerated(
    resolvedRoot,
    "knowledge_base/06-Audit/Extraction and Verification Audit.md",
    renderExtractionAudit(resolvedRoot, inventory, audit)
  );
  const guidePath = join(resolvedRoot, "knowledge_base/00-Home/Knowledge Base Guide.md");
  if (existsSync(guidePath)) {
    const guide = readFileSync(guidePath, "utf8");
    const block = /<!-- BEGIN LIVE TOTALS -->[\s\S]*?<!-- END LIVE TOTALS -->/;
    if (block.test(guide)) {
      const table = formatTotalsTable(collectVaultTotals(resolvedRoot, inventory, audit));
      writeFileSync(guidePath, guide.replace(block, `<!-- BEGIN LIVE TOTALS -->\n${table}\n<!-- END LIVE TOTALS -->`), "utf8");
    }
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  renderAuditDocuments(process.cwd());
}
