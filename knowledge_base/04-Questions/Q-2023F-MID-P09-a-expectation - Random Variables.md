---
id: "Q-2023F-MID-P09-a-expectation"
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
difficulty_basis: "The mean weights the signed displacements +1 and −1 by their unequal probabilities."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
related_questions: ["[[Q-2023F-MID-P09-b-expectation - Random Variables]]"]
---
# Q-2023F-MID-P09-a-expectation

## Source

[[2023 Fall Midterm]]; printed item 9(a). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Source discrepancy: the printed sentence says values from ℕ, but it explicitly describes leftward negative moves and assigns probability 1/3 to −1. The PMF and all supplied calculations unambiguously use support {−1,1}; that explicit PMF is retained. Independence between different moves is not stated. The printed 2 marks for this part cover its expectation and variance jointly; no split marks are inferred. Atomic extraction: the original combined request is “calculate E(X) and V(X)”; this note isolates the expectation.

## Question

(a) Calculate $E(X)$.

Shared printed context: ![[STEM-2023F-MID-P09 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19|physical PDF page 19]].

> (a)
> $$\begin{aligned}E(X)&=1\cdot\frac23-1\cdot\frac13\\&=\frac13\\E(X^2)&=1\cdot\frac23+1\cdot\frac13\\&=1\\V(X)&=E(X^2)-E(X)^2=\frac89.\end{aligned}$$

## Supplementary Explanation

**Answer.** $E(X)=1/3$.

**Derivation/proof.** The atomic target is $E(X)$. Using the displayed two-point PMF, $E(X)=1\cdot(2/3)+(-1)\cdot(1/3)=1/3$ cm. The probabilities sum to 1, and the result lies between the two possible displacements −1 and 1. This is the signed average displacement per move; it does not require any assumption about dependence between different moves.

No independence assumption between different steps is needed. The positive mean agrees with the larger rightward probability.

## Connections

- [[Subtopic - Random Variables - 随机变量]]

- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

The shared two-point PMF allows a direct independent recomputation of each moment; sibling moment answers are not prerequisites.

- [[Q-2023F-MID-P09-b-expectation - Random Variables]]: Translation contrast: subtracting one shifts the mean by one. 平移使均值同量改变。
