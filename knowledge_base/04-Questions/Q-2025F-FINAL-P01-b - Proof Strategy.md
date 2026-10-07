---
id: "Q-2025F-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 3
question_number: "1(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Follow two modus-ponens steps and finish with disjunctive syllogism."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2025F-FINAL-P01-b

## Source

[[2025 Fall Final]]; printed item 1(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4]]

## Question

(b) [3 points] Let $p,q,r,s,t$ denote five propositions. You are given the following premises:
1. $p\land q$
2. $p\to(r\land q)$
3. $r\to(s\lor t)$
4. $\neg s$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion “$t$” is true.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4|physical PDF page 4]].

(b)

1. $p\land q$ (given)
2. $p$ (1, simplification)
3. $p\to(r\land q)$ (given)
4. $r\land q$ (2, 3, modus ponens)
5. $r$ (4, simplification)
6. $r\to(s\lor t)$ (given)
7. $s\lor t$ (5, 6, modus ponens)
8. $\neg s$ (given)
9. $t$ (7, 8, disjunctive syllogism)

Thus, the premises logically imply $t$.

## Supplementary Explanation

**Answer.** $t$.

**Derivation/proof.**

1. Simplification of premise 1, $p\land q$, gives $p$.
2. Modus ponens with premise 2 gives $r\land q$.
3. Simplification of step 2 gives $r$.
4. Modus ponens with premise 3 gives $s\lor t$.
5. Premise 4 is $\neg s$. Combining it with step 4 by disjunctive syllogism gives $t$.

Every step uses only a given premise or an earlier result. Thus, when all premises are true, the conclusion must be true.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Follow two modus-ponens steps and finish with disjunctive syllogism.
