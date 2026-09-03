import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lessonNames = [
  "0001-propositions-and-symbols.html",
  "0002-connectives-and-truth-values.html",
  "0003-implications-and-biconditionals.html",
  "0004-truth-tables-and-classification.html",
  "0005-equivalence-laws.html",
  "0006-day-1-checkpoint.html",
  "0007-predicates-domains-and-quantifiers.html",
  "0008-restricted-domains-and-translation.html",
  "0009-scope-and-nested-quantifiers.html",
  "0010-quantifier-negation-and-order.html",
  "0011-propositional-inference.html",
  "0012-predicate-inference.html",
  "0013-proof-techniques.html",
  "0014-final-mini-mock.html"
];
const referenceNames = [
  "0001-logic-symbols-and-laws.html",
  "0002-inference-and-proof-templates.html"
];
const required = [
  "MISSION.md", "RESOURCES.md", "NOTES.md", "index.html",
  "assets/course.css", "assets/quiz.js",
  ...lessonNames.map((name) => `lessons/${name}`),
  ...referenceNames.map((name) => `reference/${name}`)
];
const errors = [];

for (const path of required) {
  if (!existsSync(resolve(root, path))) errors.push(`Missing required file: ${path}`);
}

const quizIds = new Set();
const ordinarySections = [
  "lesson-header", "goal", "intuition", "formal-definition", "worked-example",
  "common-mistakes", "practice", "takeaway", "source-card", "follow-up"
];

function attr(tag, name) {
  return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1] || "";
}

function quizzesIn(html) {
  return [...html.matchAll(/<(?:section|article)[^>]*\bdata-quiz\b[^>]*>/gi)].map((match) => {
    const tag = match[0];
    return {
      id: attr(tag, "data-quiz-id"),
      correct: attr(tag, "data-correct"),
      points: Number(attr(tag, "data-points") || 0),
      category: attr(tag, "data-category"),
      domain: attr(tag, "data-domain")
    };
  });
}

function manualScoresIn(html) {
  return [...html.matchAll(/<[^>]*\bdata-manual-score\b[^>]*>/gi)].map((match) => {
    const tag = match[0];
    return {
      id: attr(tag, "data-score-id"),
      points: Number(attr(tag, "data-points") || 0),
      category: attr(tag, "data-category"),
      domain: attr(tag, "data-domain")
    };
  });
}

function validateAnswerKeys(relativePath, html) {
  for (const match of html.matchAll(/<section[^>]*\bdata-quiz\b[^>]*>([\s\S]*?)<\/section>/gi)) {
    const openingTag = match[0].match(/^<section[^>]*>/i)?.[0] || "";
    const id = attr(openingTag, "data-quiz-id");
    const correct = attr(openingTag, "data-correct");
    const values = [...match[1].matchAll(/<input[^>]*\bvalue=["']([^"']+)["']/gi)].map((value) => value[1]);
    if (!values.includes(correct)) errors.push(`${relativePath}: answer key ${correct} is not an option in ${id}`);
  }
}

function validateLinks(relativePath, html) {
  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/gi)) {
    const link = match[1];
    if (/^(https?:|data:|mailto:|#)/i.test(link)) {
      if (/^https?:/i.test(link)) errors.push(`${relativePath}: external dependency is not allowed: ${link}`);
      continue;
    }
    const clean = decodeURIComponent(link.split("#")[0].split("?")[0]);
    if (clean && !existsSync(resolve(root, dirname(relativePath), clean))) {
      errors.push(`${relativePath}: broken local link: ${link}`);
    }
  }
}

for (const [index, name] of lessonNames.entries()) {
  const relativePath = `lessons/${name}`;
  const absolutePath = resolve(root, relativePath);
  if (!existsSync(absolutePath)) continue;
  const html = readFileSync(absolutePath, "utf8");

  if (!/lang=["']en["']/i.test(html)) errors.push(`${relativePath}: document language must be English`);
  if (!html.includes("../assets/course.css")) errors.push(`${relativePath}: shared stylesheet is missing`);
  if (!html.includes("../assets/quiz.js")) errors.push(`${relativePath}: shared quiz script is missing`);
  if (/TBD|TODO|lorem ipsum/i.test(html)) errors.push(`${relativePath}: placeholder text found`);

  const isAssessment = index === 5 || index === 13;
  const requiredSections = isAssessment
    ? ["lesson-header", "goal", "practice", "takeaway", "source-card", "follow-up"]
    : ordinarySections;
  for (const section of requiredSections) {
    if (!new RegExp(`class=["'][^"']*\\b${section}\\b`, "i").test(html)) {
      errors.push(`${relativePath}: missing .${section}`);
    }
  }

  const quizzes = quizzesIn(html);
  const manualScores = manualScoresIn(html);
  if (quizzes.length + manualScores.length < 2) errors.push(`${relativePath}: expected at least two scored checks`);
  if (!isAssessment && quizzes.length + manualScores.length !== 2) errors.push(`${relativePath}: ordinary lessons must have exactly two scored checks`);
  for (const quiz of quizzes) {
    if (!quiz.id || !quiz.correct || quiz.points <= 0) errors.push(`${relativePath}: quiz metadata is incomplete`);
    if (quizIds.has(quiz.id)) errors.push(`${relativePath}: duplicate quiz id ${quiz.id}`);
    quizIds.add(quiz.id);
  }
  for (const score of manualScores) {
    if (!score.id || score.points <= 0) errors.push(`${relativePath}: manual score metadata is incomplete`);
    const syntheticId = `score:${score.id}`;
    if (quizIds.has(syntheticId)) errors.push(`${relativePath}: duplicate manual score id ${score.id}`);
    quizIds.add(syntheticId);
  }
  validateAnswerKeys(relativePath, html);
  validateLinks(relativePath, html);
}

function validateAssessment(name, expectedTotal, expectedThreshold) {
  const relativePath = `lessons/${name}`;
  const absolutePath = resolve(root, relativePath);
  if (!existsSync(absolutePath)) return;
  const html = readFileSync(absolutePath, "utf8");
  const board = html.match(/<[^>]*\bdata-scoreboard\b[^>]*>/i)?.[0] || "";
  const declaredTotal = Number(attr(board, "data-total") || 0);
  const threshold = Number(attr(board, "data-threshold") || 0);
  const quizTotal = [
    ...quizzesIn(html).map((quiz) => quiz.points),
    ...manualScoresIn(html).map((score) => score.points)
  ].reduce((sum, points) => sum + points, 0);
  if (declaredTotal !== expectedTotal) errors.push(`${relativePath}: data-total must be ${expectedTotal}`);
  if (threshold !== expectedThreshold) errors.push(`${relativePath}: data-threshold must be ${expectedThreshold}`);
  if (quizTotal !== expectedTotal) errors.push(`${relativePath}: quiz points total ${quizTotal}, expected ${expectedTotal}`);
}

validateAssessment("0006-day-1-checkpoint.html", 10, 7);
validateAssessment("0014-final-mini-mock.html", 20, 14);

function validateBreakdown(name, field, expected) {
  const relativePath = `lessons/${name}`;
  const absolutePath = resolve(root, relativePath);
  if (!existsSync(absolutePath)) return;
  const html = readFileSync(absolutePath, "utf8");
  const items = [...quizzesIn(html), ...manualScoresIn(html)];
  const actual = {};
  items.forEach((item) => {
    const key = item[field];
    if (key) actual[key] = (actual[key] || 0) + item.points;
  });
  for (const [key, points] of Object.entries(expected)) {
    if (actual[key] !== points) errors.push(`${relativePath}: ${field} ${key} totals ${actual[key] || 0}, expected ${points}`);
  }
}

validateBreakdown("0006-day-1-checkpoint.html", "category", { translation: 2, truth: 2, equivalence: 4, counterexample: 2 });
validateBreakdown("0014-final-mini-mock.html", "domain", { propositional: 4, predicate: 5, inference: 6, proof: 5 });

for (const path of ["index.html", ...referenceNames.map((name) => `reference/${name}`)]) {
  const absolutePath = resolve(root, path);
  if (!existsSync(absolutePath)) continue;
  const html = readFileSync(absolutePath, "utf8");
  validateLinks(path, html);
  if (/TBD|TODO|lorem ipsum/i.test(html)) errors.push(`${path}: placeholder text found`);
}

if (errors.length) {
  console.error(`Course validation failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Course validation passed: ${lessonNames.length} lessons, ${referenceNames.length} reference sheets, ${quizIds.size} quizzes.`);
