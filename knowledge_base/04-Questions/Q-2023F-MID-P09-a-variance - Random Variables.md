---
id: "Q-2023F-MID-P09-a-variance"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 19
question_number: "9(a)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The support has constant square one, allowing variance from the second moment minus the squared mean."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
related_questions: ["[[Q-2023F-MID-P09-b-variance - Random Variables]]"]
---
# Q-2023F-MID-P09-a-variance

## Source

[[2023 Fall Midterm]]; printed item 9(a). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Source discrepancy: the printed sentence says values from ℕ, but it explicitly describes leftward negative moves and assigns probability 1/3 to −1. The PMF and all supplied calculations unambiguously use support {−1,1}; that explicit PMF is retained. Independence between different moves is not stated. The printed 2 marks for this part cover its expectation and variance jointly; no split marks are inferred. Atomic extraction: the original combined request is “calculate E(X) and V(X)”; this note isolates the variance.

## Question

(a) Calculate $V(X)$.

Shared printed context: ![[STEM-2023F-MID-P09 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19|physical PDF page 19]].

> (a)
> $$\begin{aligned}E(X)&=1\cdot\frac23-1\cdot\frac13\\&=\frac13\\E(X^2)&=1\cdot\frac23+1\cdot\frac13\\&=1\\V(X)&=E(X^2)-E(X)^2=\frac89.\end{aligned}$$

## Supplementary Explanation

**Answer.** $V(X)=8/9$.

**Derivation/proof.** The atomic target is $V(X)$. Directly, $E(X)=2/3-1/3=1/3$ and $E(X^2)=1^2(2/3)+(-1)^2(1/3)=1$. Thus $V(X)=E(X^2)-E(X)^2=1-1/9=8/9$ square cm. As a separate check, the centered-square calculation is $(1-1/3)^2(2/3)+(-1-1/3)^2(1/3)=8/27+16/27=8/9$.

The independent centered-square check is $\frac8{27}+\frac{16}{27}=\frac89$.

## Connections

- [[Subtopic - Random Variables - 随机变量]]

- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

The shared two-point PMF allows a direct independent recomputation of each moment; sibling moment answers are not prerequisites.

- [[Q-2023F-MID-P09-b-variance - Random Variables]]: Translation contrast: subtracting a constant leaves centered deviations, hence variance, unchanged. 平移不改变方差。
