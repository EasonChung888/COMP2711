---
id: "Q-2024F-FINAL-P09-a-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(iv)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(iv) with A=n^2\\log n, B=n\\log^6 n; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-iv

## Source

[[2024 Fall Final]]; printed item 9(a)(iv); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Page 24 printed answer for this label: “(iv) A = O(B)”. The answer line has only four entries for five printed items. This note preserves the literal label-specific source claim and independently derives the result without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(iv) $A=n^2\log n\qquad B=n\log^6 n$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]].

> (iv) $A=O(B)$

## Supplementary Explanation

**Answer.** $\Omega$ only.

**Derivation/proof.** Cancelling $n\log n$ gives $A/B=n/(\log n)^5$. A fixed logarithmic power grows more slowly than every positive power of $n$, so this ratio tends to infinity. Hence $A$ eventually exceeds a positive constant multiple of $B$ and $A=\Omega(B)$. No constant multiple of $B$ can upper-bound $A$, so neither $O(B)$ nor $\Theta(B)$ holds.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(iv) with A=n^2\log n, B=n\log^6 n; list every valid asymptotic relation.
