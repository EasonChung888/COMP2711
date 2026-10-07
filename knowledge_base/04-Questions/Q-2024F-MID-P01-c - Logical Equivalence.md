---
id: "Q-2024F-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 3
question_number: "1(c)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Combine q→r with p→(q and not-r), then derive not-p, not-s, and not-t with corrected citations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [4]
verification_status: "verified"
marks: 6
---
# Q-2024F-MID-P01-c

## Source

[[2024 Fall Midterm]]; printed item 1(c); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3]]

Page 4 prints step 8 “¬p from 7,2”. Step 7 needs the antecedent proved in step 6, so the correct justification is from 7,6. Every formula and the final conclusion are correct; only this line reference is corrected, so the conclusion remains official.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=4]].

## Question

(c) Let $p,q,r,s,t$ denote five propositions. You are given the following set of premises:
1. $s\lor\neg t$
2. $p\to(q\land\neg r)$
3. $s\to p$
4. $q\to r$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion $(\neg p\land\neg t)$ is true.
Hint: Start by combining premises 4 and 2.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=4|physical PDF page 4]].

> (c)
> 1. $s\lor\neg t$
> 2. $p\to(q\land\neg r)$
> 3. $s\to p$
> 4. $q\to r$
> 5. $\neg q\lor r$ from 4
> 6. $\neg(q\land\neg r)$ from 5
> 7. $\neg(q\land\neg r)\to\neg p$ from 2
> 8. $\neg p$ from 7,2
> 9. $\neg p\to\neg s$ from 3
> 10. $\neg s$ from 9,8
> 11. $\neg t$ from 10,1
> 12. $\neg p\land\neg t$ from 11,8

## Supplementary Explanation

**Answer.** $\neg p\land\neg t$.

**Derivation/proof.** 5. Eliminate implication in 4 to obtain $\neg q\lor r$. 6. De Morgan gives $\neg(q\land\neg r)$. 7. Contrapose 2 to obtain $\neg(q\land\neg r)\to\neg p$. 8. From 6 and 7, modus ponens yields $\neg p$. 9. Contrapose 3 to obtain $\neg p\to\neg s$. 10. From 8 and 9 obtain $\neg s$. 11. From 1 and 10, disjunctive syllogism yields $\neg t$. 12. Conjoin 8 and 11 to obtain $\neg p\land\neg t$. Every corrected reference supplies a previously established antecedent.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Logical Equivalence - 逻辑等价]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]

Combine q→r with p→(q and not-r), then derive not-p, not-s, and not-t with corrected citations.
