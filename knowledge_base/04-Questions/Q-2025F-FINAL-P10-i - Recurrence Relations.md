---
id: "Q-2025F-FINAL-P10-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 17
question_number: "10(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["modeling"]
difficulty: 2
difficulty_basis: "Translate the ordered daily doubling-and-loss process into a recurrence with its initial value."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 2
related_questions: ["[[Q-2025F-FINAL-P10-ii - Recurrence Relations]]","[[Q-2025F-FINAL-P10-iii - Mathematical Induction]]"]
---
# Q-2025F-FINAL-P10-i

## Source

[[2025 Fall Final]]; printed item 10(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

## Question

![[STEM-2025F-FINAL-P10 - Shared Problem Prompt#Shared printed wording]]

(i) [2 points] Write the recurrence relation for $a_n$.

## 中文解析

每天先翻倍，再掉两条，次序直接决定递推式的括号位置。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $a_0=10,\quad a_n=2a_{n-1}-2\ (n\ge1)$。

**推导。** 第 $n-1$ 天结束后有 $a_{n-1}$ 条腿。第 $n$ 天先每条分裂成两条，因此瞬间变为 $2a_{n-1}$ 条；接着恰好掉两条，所以该天结束时 $a_n=2a_{n-1}-2$。这一更新从第一天开始适用，故 $n\ge1$，初值按题设为 $a_0=10$。核验第一天得到 $a_1=20-2=18$，符合“先倍增后损失”。

## Common Mistakes

- 若写成 $2(a_{n-1}-2)$ 就把掉腿安排在倍增前，改变了事件顺序。
- 初始十条属于第零天，不应写成第一天有十条。

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]

Translate the ordered daily doubling-and-loss process into a recurrence with its initial value.

- Follow-on / contrast: [[Q-2025F-FINAL-P10-ii - Recurrence Relations]]: 展开每日更新得到显式表达。
- Follow-on / contrast: [[Q-2025F-FINAL-P10-iii - Mathematical Induction]]: 证明步骤使用按题意构建的每日递推。
