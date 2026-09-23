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

## 中文解析

这是对同一个 X 的非线性变换，不能把两个因子的 expectation 随意相乘。将 X 的正负一分别代入可知 Z 只取零和二，直接加权得到所求均值，也能用二阶矩减一阶矩检验。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $E(Z)=2/3$。

**推导。**

1. 将 $X$ 的两个可能值代入 $Z=X(X-1)$：若 $X=1$，则 $Z=0$，概率 $2/3$；若 $X=-1$，则 $Z=(-1)(-2)=2$，概率 $1/3$。所以直接加权得 $E(Z)=0\cdot2/3+2\cdot1/3=2/3$。
2. 展开变换还有 $Z=X^2-X$。由 PMF 得 $E(X^2)=1$、$E(X)=1/3$，linearity 再给出 $E(Z)=1-1/3=2/3$。不能用 $E(X)E(X-1)$ 替代乘积的期望，因为两个因子是同一次结果的函数，并没有 independence；展开后的加减才允许直接运用线性性质。

### English solution

**Answer.** $E(Z)=2/3$.

**Derivation/proof.** When $X=1$, $Z=1(1-1)=0$; when $X=-1$, $Z=(-1)(-2)=2$. Hence $E(Z)=0(2/3)+2(1/3)=2/3$. Independently, $Z=X^2-X$ and linearity gives $E(Z)=E(X^2)-E(X)=1-1/3=2/3$. There is no independence between X and X−1: both are functions of the same outcome, so multiplying their expectations would be invalid.

## Common Mistakes

- E(X(X−1)) 不能写成 E(X)E(X−1)，二者完全相关。 / Do not multiply expectations of dependent factors.
- X=−1 时两个因子都为负，乘积是正二。 / Evaluate the product sign correctly.

## Connections

- [[Subtopic - Random Variables - 随机变量]]

- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

The shared two-point PMF allows a direct independent recomputation of each moment; sibling moment answers are not prerequisites.
