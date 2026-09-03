# COMP2711 Logic Two-Day Micro-Course Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fourteen-lesson, English, explanation-first Logic course that a beginner can complete in two days and use to reach 14/20 on a representative mini-mock.

**Architecture:** Static, offline HTML lessons share one CSS system and one dependency-free JavaScript quiz controller. Source traceability lives in markdown metadata and in visible source cards on every lesson; automated validation checks structure, links, quiz metadata, and assessment totals.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js core APIs for validation, Playwright CLI for real-browser QA.

## Global Constraints

- Use English for all lesson and assessment content.
- Keep each ordinary lesson to one skill and roughly 12-18 minutes.
- Use only local assets and local PDF links; no CDN or network dependency.
- Preserve and do not commit `lecture/`, `past_paper/`, `.DS_Store`, or temporary PDF renders.
- Record learning only after the learner supplies answer evidence.
- Keep multiple-choice options equal in word count and similar in character length where practical.
- The Day 1 checkpoint totals 10 points with a 7-point threshold; the final totals 20 points with a 14-point threshold.

---

### Task 1: Teaching workspace and source index

**Files:**
- Create: `MISSION.md`
- Create: `RESOURCES.md`
- Create: `NOTES.md`
- Create: `index.html`

**Interfaces:**
- Produces: a stable course entry page and authoritative source/mission metadata consumed by every lesson.

- [ ] Write the mission with the two-day, beginner, English, and 14/20 outcomes.
- [ ] Index L01-L03 and verified past-paper problems by skill, file, page, problem, and marks.
- [ ] Record explanation-first and sequential-interaction preferences in `NOTES.md`.
- [ ] Build the course index with Day 1/Day 2 timing, fourteen lesson links, two reference links, and the rule that free responses are submitted in chat.
- [ ] Validate that every indexed local source path exists.
- [ ] Commit only the four new workspace files.

### Task 2: Shared visual and quiz system

**Files:**
- Create: `assets/course.css`
- Create: `assets/quiz.js`
- Create: `scripts/validate-course.mjs`

**Interfaces:**
- Consumes: lesson markup using `data-quiz`, `data-quiz-id`, `data-correct`, `data-points`, `data-check-answer`, `data-reset-answer`, `data-feedback`, and optional `data-scoreboard` attributes.
- Produces: accessible feedback, local attempt persistence under `comp2711-logic:<quiz-id>`, reset behavior, points aggregation, and copy-to-chat support for free responses.

- [ ] Write a validator that fails when required files, lesson sections, local links, unique quiz IDs, or assessment point totals are wrong.
- [ ] Run the validator and confirm it fails because the course assets and lessons do not exist yet.
- [ ] Implement the warm-paper visual system, responsive layout, focus states, truth tables, derivation rows, callouts, source cards, progress strips, and A4 print rules.
- [ ] Implement dependency-free quiz initialization, selection checking, tailored feedback, persistence, reset, score aggregation, threshold messages, and copy-response buttons.
- [ ] Add reduced-motion and print behavior so interactive controls never obscure printable content.
- [ ] Run syntax checks with `node --check assets/quiz.js` and `node --check scripts/validate-course.mjs`.
- [ ] Commit the shared system and validator.

### Task 3: Reference sheets

**Files:**
- Create: `reference/0001-logic-symbols-and-laws.html`
- Create: `reference/0002-inference-and-proof-templates.html`

**Interfaces:**
- Consumes: `assets/course.css`, `assets/quiz.js`, and exact lecture terminology.
- Produces: stable anchors used by lesson navigation and review links.

- [ ] Build the symbols sheet with proposition/predicate distinctions, operator meanings, precedence, complete truth tables, tautology/contradiction/contingency, and every equivalence from L01 pages 31-33.
- [ ] Build the inference sheet with Modus Ponens, Modus Tollens, Hypothetical Syllogism, Disjunctive Syllogism, Addition, Simplification, Conjunction, Resolution, four predicate rules, and four proof templates.
- [ ] Add exact lecture page links and concise common-error notes.
- [ ] Print-check both sheets at A4 and verify no clipped tables.
- [ ] Commit the reference sheets.

### Task 4: Day 1 lessons

**Files:**
- Create: `lessons/0001-propositions-and-symbols.html`
- Create: `lessons/0002-connectives-and-truth-values.html`
- Create: `lessons/0003-implications-and-biconditionals.html`
- Create: `lessons/0004-truth-tables-and-classification.html`
- Create: `lessons/0005-equivalence-laws.html`
- Create: `lessons/0006-day-1-checkpoint.html`

**Interfaces:**
- Consumes: shared lesson markup, logic-law reference anchors, L01, and verified propositional past-paper questions.
- Produces: sequential navigation from Lesson 1 through the 10-point Day 1 checkpoint.

- [ ] Author each lesson with goal, intuition, formal definition, two annotated examples, common mistakes, two short checks, takeaway, source card, and follow-up reminder.
- [ ] Include NAND only as a collapsed stretch block in Lesson 5.
- [ ] Build the unseen checkpoint with 2 points translation, 2 points truth/classification, 4 points equivalence, and 2 points counterexample; show remediation below 7/10.
- [ ] Place revisits at least two unrelated checks after the original misconception.
- [ ] Run the validator and manually verify every Day 1 answer and point value.
- [ ] Commit the Day 1 lessons.

### Task 5: Day 2 predicate lessons

**Files:**
- Create: `lessons/0007-predicates-domains-and-quantifiers.html`
- Create: `lessons/0008-restricted-domains-and-translation.html`
- Create: `lessons/0009-scope-and-nested-quantifiers.html`
- Create: `lessons/0010-quantifier-negation-and-order.html`

**Interfaces:**
- Consumes: shared lesson markup, logic-law reference anchors, L02, and verified predicate-logic questions.
- Produces: foundational predicate skills required by Lessons 12 and 14.

- [ ] Explain predicates, domains, universal and existential quantification from zero, including finite-domain intuition.
- [ ] Teach restricted universal domains with implication and restricted existential domains with conjunction.
- [ ] Teach English translation, scope, bound/free variables, and why quantifier order changes meaning.
- [ ] Teach De Morgan laws for quantifiers, nested negation, valid distribution, and counterexamples to invalid distribution.
- [ ] Include null quantification and unique existence only as collapsed stretch blocks.
- [ ] Run the validator and manually verify every symbolic translation.
- [ ] Commit the predicate lessons.

### Task 6: Inference, proof, and final assessment

**Files:**
- Create: `lessons/0011-propositional-inference.html`
- Create: `lessons/0012-predicate-inference.html`
- Create: `lessons/0013-proof-techniques.html`
- Create: `lessons/0014-final-mini-mock.html`

**Interfaces:**
- Consumes: both reference sheets, L03, prior lesson skills, and unseen past-paper variants.
- Produces: formal derivation practice, proof-method selection, and the 20-point completion assessment.

- [ ] Teach all eight propositional rules through goal-first, numbered derivations and one invalid-argument counterexample.
- [ ] Teach the four predicate rules, freshness/arbitrariness constraints, and a mixed quantified derivation.
- [ ] Teach method selection and complete examples for direct proof, contraposition, contradiction, and biconditional proof.
- [ ] Build an unseen final with exactly 4 propositional, 5 predicate, 6 inference, and 5 proof points; show success at 14/20.
- [ ] Add a weakest-domain remediation panel with two isomorphic retest prompts for each domain.
- [ ] Run the validator and manually solve the final assessment from scratch.
- [ ] Commit the inference, proof, and final lessons.

### Task 7: Integrated browser and print QA

**Files:**
- Modify only files with defects found during QA.
- Create temporary artifacts only under `output/playwright/`.

**Interfaces:**
- Consumes: complete static course.
- Produces: verified offline course ready for the learner.

- [ ] Run `node scripts/validate-course.mjs` and require a zero exit code.
- [ ] Serve the workspace locally and open `index.html` with Playwright CLI.
- [ ] Snapshot Lesson 1, one predicate lesson, both assessments, and both reference sheets.
- [ ] Exercise correct, incorrect, reset, persistence-after-reload, score threshold, details, navigation, and copy-response flows.
- [ ] Capture desktop and narrow-screen screenshots and inspect typography, overflow, focus, and mathematical symbols.
- [ ] Generate print previews for both reference sheets and inspect A4 pagination and clipping.
- [ ] Fix any defects, rerun all validation, and commit the QA fixes.
- [ ] Open `lessons/0001-propositions-and-symbols.html` for the learner.
