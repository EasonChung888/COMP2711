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

## 中文解析

本原子题取 (a) 中的 expectation。右移一厘米概率三分之二、左移一厘米概率三分之一，所以必须用带符号位移加权；若把左移距离也取正值，算出的就不是 X 的平均位移。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $E(X)=1/3$ 厘米。

**推导。**

1. 题目给出的单步 PMF 是 $P(X=1)=2/3$、$P(X=-1)=1/3$，总概率为一。Expectation 按每个可能位移乘其概率再求和；左移是负位移，不能把它也算成正一。
2. 代入得 $E(X)=1\cdot(2/3)+(-1)\cdot(1/3)=2/3-1/3=1/3$。结果位于最小值负一与最大值正一之间，并因右移概率较大而为正，与方向直觉一致。这个原子题只求单步平均位移，完全不需要假设不同步之间 independent，也不涉及停止时间的分布。

### English solution

**Answer.** $E(X)=1/3$.

**Derivation/proof.** The atomic target is $E(X)$. Using the displayed two-point PMF, $E(X)=1\cdot(2/3)+(-1)\cdot(1/3)=1/3$ cm. The probabilities sum to 1, and the result lies between the two possible displacements −1 and 1. This is the signed average displacement per move; it does not require any assumption about dependence between different moves.

## Common Mistakes

- 把位移绝对值当成 X 会得到一，而不是三分之一。 / The mean uses signed displacement.
- 三分之二与三分之一是概率权重，不能把两个取值直接平均。 / Use the unequal PMF weights.

## Connections

- [[Subtopic - Random Variables - 随机变量]]

- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

The shared two-point PMF allows a direct independent recomputation of each moment; sibling moment answers are not prerequisites.

- [[Q-2023F-MID-P09-b-expectation - Random Variables]]: Translation contrast: subtracting one shifts the mean by one. 平移使均值同量改变。
