---
id: "Q-2015-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 5
solution_page: [6]
question_number: "2(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Three inference moves connect not q to not p, then a conjunction, and finally its r component."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P02-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=6]]

## Question

(b) Premises:

1. $\neg q$
2. $p\to q$
3. $\neg p\to(r\land s)$

Conclusion: $r$

Shared context: [[STEM-2015-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=6|PDF physical page 6]].

(b)

| Step | Statement | Reason |
| --- | --- | --- |
| 1 | $p\to q$ | Premise |
| 2 | $\neg q$ | Premise |
| 3 | $\neg p$ | Modus tollens (1,2) |
| 4 | $\neg p\to(r\land s)$ | Premise |
| 5 | $(r\land s)$ | Modus Ponens (3,4) |
| 6 | $r$ | Simplification (5) |

## Supplementary Explanation

**Answer.** $r$ follows.

**Derivation/proof.** 1. $\neg q$ and $p\to q$ (premises).
2. $\neg p$ (modus tollens, 1).
3. $\neg p\to(r\land s)$ (premise).
4. $r\land s$ (modus ponens, 2–3).
5. $r$ (simplification, 4).

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
