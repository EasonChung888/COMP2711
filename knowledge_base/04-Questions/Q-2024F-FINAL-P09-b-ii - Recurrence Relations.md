---
id: "Q-2024F-FINAL-P09-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 24
question_number: "9(b)(ii)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Unroll the triangular-number recurrence into 1+...+n and pair forward/reverse sums for the exact formula."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [24]
marks: 2
related_questions: ["[[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]","[[Q-2024F-FINAL-P09-b-iii - Mathematical Induction]]"]
---
# Q-2024F-FINAL-P09-b-ii

## Source

[[2024 Fall Final]]; printed item 9(b)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]. The imported recurrence is $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.

## Question

(ii) Calculate the closed form formula for $T(n)$

Shared printed context: ![[STEM-2024F-FINAL-P09-b - Shared Problem Prompt#Shared printed wording]]

## 中文解析

从底层逐次展开到初值，得到前 n 个正整数之和。把正序和倒序相加，每一对都是 n+1，从而得到精确闭式。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $T(n)=n(n+1)/2$。

**推导。** 导入 $T(1)=1,T(n)=T(n-1)+n$。反复代入：$T(n)=n+(n-1)+T(n-2)=\cdots=n+(n-1)+\cdots+1$。记此和为 S，再倒序写 $S=1+2+\cdots+n$。逐位置相加，每项都是 $n+1$，共有 n 项，所以 $2S=n(n+1)$，即 $S=n(n+1)/2$。故 $T(n)$ 的闭式是该表达式，$n=1$ 时给一，与初值一致。

## Common Mistakes

- 闭式不是仅给 $\Theta(n^2)$，题目要精确圆数。
- 整数和公式分子为 $n(n+1)$，不是 $n(n-1)$。

## Connections

- [[Subtopic - Recursion - 递归]]

- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]

Unroll the triangular-number recurrence into 1+...+n and pair forward/reverse sums for the exact formula.

- Prerequisite: [[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]: 本题导入此前提/结果以完成当前计算或证明：The imported recurrence is $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.
- Used by: [[Q-2024F-FINAL-P09-b-iii - Mathematical Induction]]: 此结果在后续小题中的具体用途：The candidate closed formula to prove is $T(n)=n(n+1)/2$.
