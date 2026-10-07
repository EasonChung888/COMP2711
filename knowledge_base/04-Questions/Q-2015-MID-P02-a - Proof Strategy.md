---
id: "Q-2015-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 5
solution_page: [6]
question_number: "2(a)"
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
difficulty_basis: "Modus tollens first produces a disjunction, then the negated first disjunct isolates q."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P02-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=6]]

## Question

(a) Premises:

1. $\neg p$
2. $\neg r$
3. $\neg(p\lor q)\to r$

Conclusion: $q$

Shared context: [[STEM-2015-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=6|PDF physical page 6]].

(a)

| Step | Statement | Reason |
| --- | --- | --- |
| 1 | $\neg(p\lor q)\to r$ | Premise |
| 2 | $\neg r$ | Premise |
| 3 | $(p\lor q)$ | Modus tollens (1,2) |
| 4 | $\neg p$ | Premise |
| 5 | $q$ | Disjunctive syllogism (3,4) |

## Supplementary Explanation

**Answer.** $q$ follows.

**Derivation/proof.** 1. $\neg(p\lor q)\to r$ (premise).
2. $\neg r$ (premise).
3. $\neg\neg(p\lor q)$ (modus tollens, 1–2).
4. $p\lor q$ (double negation, 3).
5. $\neg p$ (premise).
6. $q$ (disjunctive syllogism, 4–5).

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
