---
id: "Q-2023F-MID-P09-b-expectation"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 19
question_number: "9(b)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Shifting each displacement down by one changes its expectation by exactly minus one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
related_questions: ["[[Q-2023F-MID-P09-a-expectation - Random Variables]]"]
---
# Q-2023F-MID-P09-b-expectation

## Source

[[2023 Fall Midterm]]; printed item 9(b). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Source discrepancy: the printed sentence says values from ℕ, but it explicitly describes leftward negative moves and assigns probability 1/3 to −1. The PMF and all supplied calculations unambiguously use support {−1,1}; that explicit PMF is retained. Independence between different moves is not stated. The printed 2 marks for this part cover its expectation and variance jointly; no split marks are inferred. Atomic extraction: the original combined request is “calculate E(Y) and V(Y)”; this note isolates the expectation.

## Question

(b) If $Y=X-1$, calculate $E(Y)$.

Shared printed context: ![[STEM-2023F-MID-P09 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19|physical PDF page 19]].

> (b)
> $$E(Y)=E(X-1)=E(X)-1=-\frac23$$
> $$V(Y)=V(X-1)=V(X)=\frac89$$

## Supplementary Explanation

**Answer.** $E(Y)=-2/3$.

**Derivation/proof.** The atomic target is $E(Y)$. If $X=1$, then $Y=0$ with probability 2/3; if $X=-1$, then $Y=-2$ with probability 1/3. Hence $E(Y)=0(2/3)+(-2)(1/3)=-2/3$. Equivalently, recomputing $E(X)=1/3$ from the PMF gives $E(X-1)=E(X)-1=-2/3$. Both computations use only the one-step distribution.

The mean lies in the support interval $[-2,0]$; a negative mean is not a negative probability.

## Connections

- [[Subtopic - Random Variables - 随机变量]]

- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

The shared two-point PMF allows a direct independent recomputation of each moment; sibling moment answers are not prerequisites.

- [[Q-2023F-MID-P09-a-expectation - Random Variables]]: Translation contrast: subtracting one shifts the mean by one. 平移使均值同量改变。
