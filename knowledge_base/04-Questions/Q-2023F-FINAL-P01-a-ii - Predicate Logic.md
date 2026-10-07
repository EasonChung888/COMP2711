---
id: "Q-2023F-FINAL-P01-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 3
question_number: "1(a)(ii)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The prime hypothesis allows a Bezout argument to force divisibility of the other factor when the first is coprime."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 1
related_questions: ["[[Q-2023F-FINAL-P01-a-i - Predicate Logic]]","[[Q-2023F-FINAL-P01-a-iii - Predicate Logic]]"]
---
# Q-2023F-FINAL-P01-a-ii

## Source

[[2023 Fall Final]]; printed item 1(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

## Question

(ii) $\forall x\forall a\forall b:\ P(x)\to(x\mid ab\to(x\mid a\lor x\mid b))$

Shared printed context: ![[STEM-2023F-FINAL-P01 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3|physical PDF page 3]].

> (ii) True

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** If $P(x)$ is false, the outer implication is true. Suppose x is prime and $x\mid ab$. If $x\mid a$, the desired disjunction holds. Otherwise $\gcd(x,a)=1$, so integers u,v satisfy $ux+va=1$. Multiply by b to get $uxb+vab=b$. Both terms on the left are divisible by x, since $x\mid ab$; therefore $x\mid b$. This proves the assertion for all integer a and b.

When $x$ is prime and $x\nmid a$, Bézout gives $ux+va=1$. Multiplication gives $uxb+vab=b$, so $x\mid b$ if $x\mid ab$. If $x$ is not prime, or if $x\nmid ab$, the corresponding implication is vacuously true.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]
- [[Modular Arithmetic Method - 模运算方法]]

The prime hypothesis allows a Bezout argument to force divisibility of the other factor when the first is coprime.

- [[Q-2023F-FINAL-P01-a-i - Predicate Logic]]: Contrast: adding the prime hypothesis turns the false general divisibility claim into Euclid’s lemma. 增加素数前提后结论成立。
- [[Q-2023F-FINAL-P01-a-iii - Predicate Logic]]: Converse contrast: a sufficient prime condition does not make the printed reverse implication valid for all integers. 充分条件不保证逆命题成立。
