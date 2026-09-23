---
id: "Q-2024S-FINAL-P01-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 1
question_number: "1"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Prove the n=8 base case and inductive inequality 2k^2>(k+1)^2 under k≥8 for the selected threshold."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2024S-FINAL-P01-N - Mathematical Induction]]"]
---
# Q-2024S-FINAL-P01-proof

## Source

[[2024 Spring Final]]; printed item 1. No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1]]

Atomic extraction of the proof request from the combined Problem 1; no separate atomic marks are assigned.

Prerequisite context (editorial): [[Q-2024S-FINAL-P01-N - Mathematical Induction]]. The selected threshold is $N=7$; therefore the statement to prove is $2^n>3n^2$ for all integers $n\ge8$.

## Question

Prove that your result is correct using mathematical induction.

## 中文解析

证明对象是选定阈值之后的全部整数。归纳步不仅要把二的幂乘二，还要比较乘二后的平方项与下一整数的平方大小。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2^n>3n^2$ 对所有整数 $n\ge8$ 成立。

**推导。** 导入前一原子题的选择 $N=7$。基础步：$n=8$ 时 $2^8=256>192=3\cdot8^2$。归纳假设：对某个 $k\ge8$，$2^k>3k^2$。于是 $2^{k+1}=2\cdot2^k>6k^2$。因为 $k\ge8$，$2k^2-(k+1)^2=(k-1)^2-2\ge49-2>0$，所以 $6k^2>3(k+1)^2$。串联严格不等式得到下一项成立。由 mathematical induction，该结论对所有 $n\ge8$，即所有 $n>N$ 成立。

## Common Mistakes

- 归纳假设只可使用第 k 项，不能直接假定第 k+1 项成立。
- 必须证明平方项的比较，不能仅写指数增长更快代替归纳步。

## Connections

- [[Subtopic - Induction - 数学归纳法]]

- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]

Prove the n=8 base case and inductive inequality 2k^2>(k+1)^2 under k≥8 for the selected threshold.

- Prerequisite: [[Q-2024S-FINAL-P01-N - Mathematical Induction]]: 本题导入此前提/结果以完成当前计算或证明：The selected threshold is $N=7$; therefore the statement to prove is $2^n>3n^2$ for all integers $n\ge8$.
