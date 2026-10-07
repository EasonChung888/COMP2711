---
id: "Q-2023F-MID-P09-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 19
question_number: "9(c)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Evaluate the quadratic transform on its two support points; the factors are dependent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
marks: 2
---
# Q-2023F-MID-P09-c

## Source

[[2023 Fall Midterm]]; printed item 9(c); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Source discrepancy: the printed sentence says values from ℕ, but it explicitly describes leftward negative moves and assigns probability 1/3 to −1. The PMF and all supplied calculations unambiguously use support {−1,1}; that explicit PMF is retained. Independence between different moves is not stated.

## Question

(c) If $Z=X(X-1)$, calculate $E(Z)$.

Shared printed context: ![[STEM-2023F-MID-P09 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19|physical PDF page 19]].

> (c) $E(Z)=E(X(X-1))=E(X^2-X)=E(X^2)-E(X)=\frac23$

## Supplementary Explanation

**Answer.** $E(Z)=2/3$.

**Derivation/proof.** When $X=1$, $Z=1(1-1)=0$; when $X=-1$, $Z=(-1)(-2)=2$. Hence $E(Z)=0(2/3)+2(1/3)=2/3$. Independently, $Z=X^2-X$ and linearity gives $E(Z)=E(X^2)-E(X)=1-1/3=2/3$. There is no independence between X and X−1: both are functions of the same outcome, so multiplying their expectations would be invalid.

Explicitly $E(Z)=1-1/3=2/3$; there is no independence between the two factors.

## Connections

- [[Subtopic - Random Variables - 随机变量]]

- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

The shared two-point PMF allows a direct independent recomputation of each moment; sibling moment answers are not prerequisites.
