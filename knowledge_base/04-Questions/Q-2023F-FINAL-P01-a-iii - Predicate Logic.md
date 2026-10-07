---
id: "Q-2023F-FINAL-P01-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 3
question_number: "1(a)(iii)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The unit divisor one satisfies the product-divisibility implication but is not prime, refuting the converse."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 1
related_questions: ["[[Q-2023F-FINAL-P01-a-ii - Predicate Logic]]"]
---
# Q-2023F-FINAL-P01-a-iii

## Source

[[2023 Fall Final]]; printed item 1(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

## Question

(iii) $\forall x\forall a\forall b:\ (x\mid ab\to(x\mid a\lor x\mid b))\to P(x)$

Shared printed context: ![[STEM-2023F-FINAL-P01 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3|physical PDF page 3]].

> (iii) False

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** Let $x=1$, and for concreteness take $a=b=1$. Both $1\mid ab$ and $1\mid a\lor1\mid b$ are true, so their implication is true. But $P(1)$ is false because 1 is not prime. The outer implication is therefore $T\to F=F$, falsifying the universal formula. This respects the actual printed placement of the a,b quantifiers outside the whole implication.

For $x=1,a=b=1$, the divisibility implication is true but $P(1)=F$. The outer implication therefore has value $T\to F=F$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

The unit divisor one satisfies the product-divisibility implication but is not prime, refuting the converse.

- [[Q-2023F-FINAL-P01-a-ii - Predicate Logic]]: Converse contrast: a sufficient prime condition does not make the printed reverse implication valid for all integers. 充分条件不保证逆命题成立。
