---
id: "Q-2024F-FINAL-P09-b-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 24
question_number: "9(b)(i)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]"]
question_types: ["modeling"]
difficulty: 2
difficulty_basis: "Add a bottom row of n circles to the size n−1 triangle and record the pictured T(1)=1 base."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [24]
marks: 1
related_questions: ["[[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]","[[Q-2024F-FINAL-P09-b-iii - Mathematical Induction]]"]
---
# Q-2024F-FINAL-P09-b-i

## Source

[[2024 Fall Final]]; printed item 9(b)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

## Question

(i) Provide a recurrence relation for $T(n)$.

Shared printed context: ![[STEM-2024F-FINAL-P09-b - Shared Problem Prompt#Shared printed wording]]

## 中文解析

相邻三角形只增加最底下一行，该行的圆个数等于新的边长。递推必须配初值，否则同一差分规律可产生很多不同的数列。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $T(1)=1,\quad T(n)=T(n-1)+n\ (n\ge2)$。

**推导。** 图中边长一的三角形只有一个圆，所以 $T(1)=1$。对边长 $n\ge2$，最底层恰有 n 个圆；去掉该层，剩下的是边长 $n-1$ 的同形三角形，包含 $T(n-1)$ 个圆。两部分不重叠且覆盖全部圆，所以 $T(n)=T(n-1)+n$。代入检查得到 $1,3,6,10,15$，与图示五项完全一致。

## Common Mistakes

- 递推增量是新底层的 n 个圆，不能误写固定增加二或三。
- 需要初值一，单给递推式不能唯一确定图中数列。

## Connections

- [[Subtopic - Recursion - 递归]]

- [[Recurrence Relations - 递推关系]]
- [[Recursive Construction Method - 递归构造法]]

Add a bottom row of n circles to the size n−1 triangle and record the pictured T(1)=1 base.

- Used by: [[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]: 此结果在后续小题中的具体用途：The imported recurrence is $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.
- Used by: [[Q-2024F-FINAL-P09-b-iii - Mathematical Induction]]: 此结果在后续小题中的具体用途：Use $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.
