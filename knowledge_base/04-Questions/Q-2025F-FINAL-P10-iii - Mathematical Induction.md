---
id: "Q-2025F-FINAL-P10-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 17
question_number: "10(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Check the zero-day basis and substitute the exponential closed form into the next-day recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [18]
marks: 4
related_questions: ["[[Q-2025F-FINAL-P10-i - Recurrence Relations]]","[[Q-2025F-FINAL-P10-ii - Recurrence Relations]]"]
---
# Q-2025F-FINAL-P10-iii

## Source

[[2025 Fall Final]]; printed item 10(iii); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=18]]

Prerequisite context (editorial): [[Q-2025F-FINAL-P10-i - Recurrence Relations]]. $a_0=10$ and $a_{n+1}=2a_n-2$.

Prerequisite context (editorial): [[Q-2025F-FINAL-P10-ii - Recurrence Relations]]. The candidate from (ii) is $a_n=8\cdot2^n+2$.

## Question

![[STEM-2025F-FINAL-P10 - Shared Problem Prompt#Shared printed wording]]

(iii) [4 points] Prove that your closed-form formula is correct using mathematical induction.

## 中文解析

把候选式代入一天的更新，并证明结果仍有同样的指数形式。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $a_n=8\cdot2^n+2$ 对全部 $n\ge0$ 成立。

**推导。** 导入 $a_0=10,a_{n+1}=2a_n-2$ 与候选 $a_n=8\cdot2^n+2$。基础步 $n=0$：$8\cdot2^0+2=10=a_0$。归纳假设对某 $k\ge0$ 有 $a_k=8\cdot2^k+2$。由递推，$a_{k+1}=2a_k-2=2(8\cdot2^k+2)-2=16\cdot2^k+2=8\cdot2^{k+1}+2$，恰为下一项候选式。因此由 mathematical induction，公式对所有非负整数天数都成立。

## Common Mistakes

- 证明中只能把归纳假设用于第 k 天，不能直接假设第 k+1 天公式。
- 基础步应包含第零天，不能只从第一天验证而遗漏给定初值。

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]

Check the zero-day basis and substitute the exponential closed form into the next-day recurrence.

- Prerequisite / related: [[Q-2025F-FINAL-P10-i - Recurrence Relations]]: 证明步骤使用按题意构建的每日递推。 $a_0=10$ and $a_{n+1}=2a_n-2$.
- Prerequisite / related: [[Q-2025F-FINAL-P10-ii - Recurrence Relations]]: 对展开所得指数闭式作归纳验证。 The candidate from (ii) is $a_n=8\cdot2^n+2$.
