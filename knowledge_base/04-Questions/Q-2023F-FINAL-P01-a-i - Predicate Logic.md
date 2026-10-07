---
id: "Q-2023F-FINAL-P01-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 3
question_number: "1(a)(i)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A composite divisor can divide a product without dividing either factor, refuting the universal quantified claim."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 1
related_questions: ["[[Q-2023F-FINAL-P01-a-ii - Predicate Logic]]"]
---
# Q-2023F-FINAL-P01-a-i

## Source

[[2023 Fall Final]]; printed item 1(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

## Question

(i) $\forall x\forall a\forall b:\ x\mid ab\to(x\mid a\lor x\mid b)$

Shared printed context: ![[STEM-2023F-FINAL-P01 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3|physical PDF page 3]].

> (a) (i) False

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** Take $x=6$, $a=2$, and $b=3$. Then $ab=6$, so $6\mid ab$ is true. But $6\nmid2$ and $6\nmid3$, making the disjunction false. Thus the implication is false for this one integer triple, which falsifies the universally quantified expression. The counterexample also shows precisely why a primality assumption would matter.

Take $x=6,a=2,b=3$. The implication is $T\to F$, since $6\mid6$ but $6\nmid2$ and $6\nmid3$. The divisor is not restricted to primes.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

A composite divisor can divide a product without dividing either factor, refuting the universal quantified claim.

- [[Q-2023F-FINAL-P01-a-ii - Predicate Logic]]: Contrast: adding the prime hypothesis turns the false general divisibility claim into Euclid’s lemma. 增加素数前提后结论成立。
