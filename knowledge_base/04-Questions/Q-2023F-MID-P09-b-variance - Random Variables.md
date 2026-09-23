---
id: "Q-2023F-MID-P09-b-variance"
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
difficulty_basis: "Variance is invariant under translation even though the mean changes from one third to minus two thirds."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
related_questions: ["[[Q-2023F-MID-P09-a-variance - Random Variables]]"]
---
# Q-2023F-MID-P09-b-variance

## Source

[[2023 Fall Midterm]]; printed item 9(b). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Source discrepancy: the printed sentence says values from ℕ, but it explicitly describes leftward negative moves and assigns probability 1/3 to −1. The PMF and all supplied calculations unambiguously use support {−1,1}; that explicit PMF is retained. Independence between different moves is not stated. The printed 2 marks for this part cover its expectation and variance jointly; no split marks are inferred. Atomic extraction: the original combined request is “calculate E(Y) and V(Y)”; this note isolates the variance.

## Question

(b) If $Y=X-1$, calculate $V(Y)$.

Shared printed context: ![[STEM-2023F-MID-P09 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

本原子题取 Y 的 variance。减去常数会把每个值和均值一起平移，因此各值与均值的偏差并没有改变。也可用零与负二的新分布直接算二阶矩，交叉核对这个性质。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $V(Y)=8/9$。

**推导。**

1. $Y$ 以概率 $2/3$ 取零，以概率 $1/3$ 取负二。因此 $E(Y)=0\cdot2/3-2\cdot1/3=-2/3$，而 $E(Y^2)=0^2\cdot2/3+(-2)^2\cdot1/3=4/3$。
2. 代入 $V(Y)=E(Y^2)-E(Y)^2$，得到 $4/3-4/9=8/9$。结果并不是把 $V(X)$ 减一；variance 不服从那样的平移公式。
3. 原因可直接从偏差看出：$(X-1)-E(X-1)=X-E(X)$。每个取值与均值同时减一，中心化偏差不变，平方的期望也不变。这个解释与新分布的独立计算相互核对，不依赖另一题已算出的均值。

### English solution

**Answer.** $V(Y)=8/9$.

**Derivation/proof.** The atomic target is $V(Y)$. Its values are 0 and −2 with probabilities 2/3 and 1/3, so $E(Y)=-2/3$ and $E(Y^2)=4/3$. Therefore $V(Y)=4/3-(-2/3)^2=12/9-4/9=8/9$. In general $(X-1)-E(X-1)=X-E(X)$, proving directly why subtracting a constant cannot change variance.

## Common Mistakes

- V(X−1) 不等于 V(X)−1，方差不随平移改变。 / A constant shift does not subtract from variance.
- Y² 在负二处取四，因此 E(Y²)=4/3，不能沿用 X² 的二阶矩。 / Recompute the shifted second moment correctly.

## Connections

- [[Subtopic - Random Variables - 随机变量]]

- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

The shared two-point PMF allows a direct independent recomputation of each moment; sibling moment answers are not prerequisites.

- [[Q-2023F-MID-P09-a-variance - Random Variables]]: Translation contrast: subtracting a constant leaves centered deviations, hence variance, unchanged. 平移不改变方差。
