---
id: "Q-2024S-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 7
question_number: "5"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Derive not-t and not-s from premises, obtain not-r by modus tollens, then recover p through De Morgan."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 5
---
# Q-2024S-MID-P05

## Source

[[2024 Spring Midterm]]; printed item 5; 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=7]]

Printed wording says “five propositions” but lists six symbols p,q,r,s,t,u; retained exactly.

## Question

Let $p,q,r,s,t,u$ denote five propositions. You are given the following set of premises:
1. $(\neg p\lor q)\to r$
2. $r\to(s\lor t)$
3. $\neg s\land\neg u$
4. $\neg u\to\neg t$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion $p$ is true. You do not need to write the names of the rules you are using; instead, you can just number each statement and write down from which statement(s) a new statement is derived.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=7|physical PDF page 7]].

> Answer.
> 5. from 1 $\neg(\neg p\lor q)\lor r$
> 6. from 5 $(p\land\neg q)\lor r$
> 7. from 2 $\neg r\lor s\lor t$
> 8. from 3 $\neg s$
> 9. from 3 $\neg u$
> 10. from 7 and 8 $\neg r\lor t$
> 11. from 4 and 9 $\neg t$
> 12. from 10 and 11 $\neg r$
> 13. from 6 and 12 $p\land\neg q$
> 14. from 13 $p$

## Supplementary Explanation

**Answer.** The premises imply $p$.

**Derivation/proof.** 5. From 3, conjunction elimination gives $\neg s$. 6. From 3 likewise obtain $\neg u$. 7. From 4 and 6, modus ponens gives $\neg t$. 8. From 5 and 7 obtain $\neg s\land\neg t$, equivalently $\neg(s\lor t)$. 9. From 2 and 8, modus tollens gives $\neg r$. 10. From 1 and 9, modus tollens gives $\neg(\neg p\lor q)$. 11. De Morgan's law and double negation give $p\land\neg q$. 12. Conjunction elimination gives $p$. Every step follows from a premise or an earlier step.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Logical Equivalence - 逻辑等价]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]

Derive not-t and not-s from premises, obtain not-r by modus tollens, then recover p through De Morgan.
