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

const GENERATED_NOTICE = "<!-- Generated from 06-Audit/*.json by scripts/knowledge-base/render-audits.mjs. -->";

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
        question.exclusion_reason
      ];
      lines.push(`| ${cells.map(tableCell).join(" | ")} |`);
    }
  }
  return `${lines.join("\n")}\n`;
}

function renderExtractionAudit(root, inventory, audit) {
  const sources = [...inventory.sources].sort((left, right) => (
    compareText(left.source_pdf, right.source_pdf)
  ));
  const questions = audit.questions;
  const lines = [
    GENERATED_NOTICE,
    "",
    "# Extraction and Verification Audit",
    "",
    "An identified audit record counts as transcribed. A solution counts as verified only when its admitted Question note exists and has `verification_status: verified`.",
    "",
    "| Source PDF | Identified | Transcribed | Admitted | Verified solutions |",
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
  return `${lines.join("\n")}\n`;
}

function writeGenerated(root, relativePath, content) {
  const path = join(root, relativePath);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

export function renderAuditDocuments(root) {
  const resolvedRoot = resolve(root);
  const inventory = readJson(resolvedRoot, "06-Audit/source-inventory.json");
  const audit = readJson(resolvedRoot, "06-Audit/question-audit.json");
  writeGenerated(
    resolvedRoot,
    "06-Audit/Source Inventory.md",
    renderSourceInventory(inventory)
  );
  writeGenerated(
    resolvedRoot,
    "06-Audit/Syllabus Audit.md",
    renderSyllabusAudit(audit)
  );
  writeGenerated(
    resolvedRoot,
    "06-Audit/Extraction and Verification Audit.md",
    renderExtractionAudit(resolvedRoot, inventory, audit)
  );
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  renderAuditDocuments(process.cwd());
}
