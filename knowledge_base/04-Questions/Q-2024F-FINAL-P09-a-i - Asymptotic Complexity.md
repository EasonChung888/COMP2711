---
id: "Q-2024F-FINAL-P09-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(i)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(i) with A=\\log n, B=2n; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-i

## Source

[[2024 Fall Final]]; printed item 9(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Page 24 printed answer for this label: “(i) O, Ω and Θ”. The answer line has only four entries for five printed items. This note preserves the literal label-specific source claim and independently derives the result without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(i) $A=\log n\qquad B=2n$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]].

> Answer: (a) (i) $O,\Omega$ and $\Theta$

## Supplementary Explanation

**Answer.** $O$ only.

**Derivation/proof.** $A/B=\log n/(2n)\to0$, because a logarithm of any fixed base greater than one grows slower than a linear function. Thus a fixed upper bound eventually gives $A=O(B)$. The ratio has no positive eventual lower bound, so $A\ne\Omega(B)$ and is not $\Theta(B)$. The printed $B=2n$ is linear, not exponential.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(i) with A=\log n, B=2n; list every valid asymptotic relation.
