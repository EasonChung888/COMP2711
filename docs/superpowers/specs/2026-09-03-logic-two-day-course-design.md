# COMP2711 Logic Two-Day Micro-Course Design

## Purpose

Build an English-language, explanation-first Logic course for a complete beginner. The course must stay close to COMP2711 lectures L01-L03, use verified past-paper questions or faithful variants, fit into two days at two to three hours per day, and prepare the learner to score at least 14/20 on a representative final mini-mock.

## Course shape

The course contains fourteen short, sequential HTML lessons rather than long lecture notes. Day 1 covers propositional logic in six lessons; Day 2 covers predicate logic, inference, proof methods, and the final assessment in eight lessons. Each lesson targets one concrete skill and takes roughly 12-18 minutes, except the two checkpoints.

Day 1:

1. Propositions and symbols
2. Connectives and truth values
3. Implications, biconditionals, and necessary/sufficient conditions
4. Truth tables, tautologies, contradictions, contingencies, and counterexamples
5. Propositional equivalence laws and transformations
6. Ten-point Day 1 checkpoint

Day 2:

7. Predicates, domains, and quantifiers
8. Restricted domains and English-to-logic translation
9. Scope, bound/free variables, and nested quantifiers
10. Quantifier negation, order, and invalid distribution
11. Propositional inference chains
12. Predicate inference chains
13. Direct, contrapositive, contradiction, and biconditional proofs
14. Thirty-minute, twenty-point final mini-mock and review

Null quantification, unique existence, and NAND variants appear only as collapsible stretch sections so they do not displace the high-yield core.

## Lesson contract

Every lesson uses the same sequence: concrete goal, plain-English intuition, formal lecture definition, one or two fully worked examples, common mistakes, two short checks, and a one-line takeaway. Every worked solution explains what changed, which rule was used, why the rule applies, and the likely beginner error.

Multiple-choice checks give immediate browser feedback. Options are kept equal in word count and, where practical, similar in character length. Translation, equivalence, inference, and proof responses are submitted to the teacher in chat for line-by-line feedback. Hints and worked answers remain collapsed until requested.

A lesson score below 70% triggers two or three targeted questions about the first misconception. A missed idea returns after two or three unrelated items. Learning records are written only after the learner demonstrates understanding; viewing a lesson is not evidence of mastery.

## Sources and traceability

The canonical knowledge sources are:

- `lecture/L01-Logic-Propositional-Logic.pdf`
- `lecture/L02-Logic-Predicate-Logic.pdf`
- `lecture/L03-Logic-Inference.pdf`

Past-paper material is indexed by skill, with file, page, problem, and original mark value. Priority examples come from the verified 2015, 2016, 2019, 2020, 2022, and 2023-2025 papers. Original exam questions keep their wording; otherwise the course labels a question as an adapted or same-difficulty practice item.

Every lesson links to its exact lecture page range and to the relevant local reference sheet. No external network dependency is required.

## Workspace artifacts

- `MISSION.md`, `RESOURCES.md`, and `NOTES.md` hold the learning mission, source index, and teaching preferences.
- `assets/course.css` provides the shared visual and print system.
- `assets/quiz.js` provides reusable accessible quiz, hint, reset, scoring, and progress behavior.
- `reference/0001-logic-symbols-and-laws.html` is the symbols, truth-table, precedence, and equivalence-law sheet.
- `reference/0002-inference-and-proof-templates.html` is the inference-rule and proof-template sheet.
- `lessons/0001-*.html` through `lessons/0014-*.html` are the course units.
- `learning-records/` is created only after the learner supplies evidence of learning.

The visual system is quiet and print-friendly: warm paper background, dark ink, one restrained blue accent, strong typography, generous whitespace, and compact cards for rules and examples. It must remain legible on narrow screens and A4 printouts.

## Assessment

The Day 1 checkpoint is worth ten points and covers translation, truth/classification, equivalence, and counterexamples. A score of 7/10 unlocks Day 2; a lower score routes the learner to targeted remediation.

The final unseen mini-mock is worth twenty points:

- 4 points: propositional logic
- 5 points: predicate translation and negation
- 6 points: inference
- 5 points: proof technique

A score of 14/20 meets the mission. A lower score triggers a 10-15 minute explanation of the weakest skill and two isomorphic retest questions.

## Acceptance criteria

- All fourteen lessons are short, English, sequential, and source-linked.
- All definitions, equivalences, inference rules, and proof structures match L01-L03.
- The two reference sheets include the full lecture tables: major equivalence laws, eight propositional inference rules, four predicate inference rules, and four proof templates.
- Quizzes hide answers before submission and support correct/incorrect feedback, hints, reset, and persistent local attempt state.
- The Day 1 and final score totals and thresholds are correct.
- All lesson and reference pages work offline, on narrow screens, and when printed to A4.
- Existing lecture and past-paper PDFs are never modified or committed.

## Confirmed constraints

- The learner begins with no Logic background.
- Teaching content is entirely in English; coordination may remain in Chinese.
- The learner wants more explanation than practice inside each lesson.
- Delivery is sequential and interactive rather than a single long handout.
- No browser-based visual companion is used during design discussions.
