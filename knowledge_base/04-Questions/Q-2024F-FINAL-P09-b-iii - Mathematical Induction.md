---
id: "Q-2024F-FINAL-P09-b-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 24
question_number: "9(b)(iii)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Verify the triangular closed form with n=1 base and substitute T(k)=k(k+1)/2 into the row-addition recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [24]
marks: 2
related_questions: ["[[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]","[[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]"]
---
# Q-2024F-FINAL-P09-b-iii

## Source

[[2024 Fall Final]]; printed item 9(b)(iii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]. Use $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.

Prerequisite context (editorial): [[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]. The candidate closed formula to prove is $T(n)=n(n+1)/2$.

## Question

(iii) Prove the closed formula for $T(n)$ using induction.

Shared printed context: ![[STEM-2024F-FINAL-P09-b - Shared Problem Prompt#Shared printed wording]]

## 中文解析

此小题要求验证上一小题的闭式而不是再次求和。用递推式把下一项写成已假设成立的一项加一行，然后进行因式分解。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 对所有正整数 n，$T(n)=n(n+1)/2$。

**推导。** 基础步 $n=1$：图中 $T(1)=1=1\cdot2/2$。归纳假设 $T(k)=k(k+1)/2$ 对某个 $k\ge1$ 成立。由前面导入的递推，$T(k+1)=T(k)+(k+1)=k(k+1)/2+2(k+1)/2=(k+1)(k+2)/2$，正是把闭式中的 n 替成 $k+1$。因此归纳步成立；结合基础步，公式对全部正整数 n 成立。

## Common Mistakes

- 归纳步要调用已建立的递推，不能直接把目标闭式当作下一项定义。
- 归纳证明包括基础步，不能只展示一次代数化简。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]

- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]

Verify the triangular closed form with n=1 base and substitute T(k)=k(k+1)/2 into the row-addition recurrence.

- Prerequisite: [[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]: 本题导入此前提/结果以完成当前计算或证明：Use $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.
- Prerequisite: [[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]: 本题导入此前提/结果以完成当前计算或证明：The candidate closed formula to prove is $T(n)=n(n+1)/2$.
