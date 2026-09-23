---
id: "Q-2025F-FINAL-P10-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 17
question_number: "10(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Unroll an affine recurrence and combine the accumulated losses as a finite geometric series."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 4
related_questions: ["[[Q-2025F-FINAL-P10-i - Recurrence Relations]]","[[Q-2025F-FINAL-P10-iii - Mathematical Induction]]"]
---
# Q-2025F-FINAL-P10-ii

## Source

[[2025 Fall Final]]; printed item 10(ii); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

Prerequisite context (editorial): [[Q-2025F-FINAL-P10-i - Recurrence Relations]]. $a_0=10$ and $a_n=2a_{n-1}-2$ for n≥1.

## Question

![[STEM-2025F-FINAL-P10 - Shared Problem Prompt#Shared printed wording]]

(ii) [4 points] Find the closed-form formula for $a_n$ using the expansion method.

## 中文解析

每次损失的两条在较早步骤会被之后倍增，形成二的幂次损失和。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $a_n=8\cdot2^n+2$。

**推导。** 导入 $a_n=2a_{n-1}-2,a_0=10$。展开两层为 $a_n=2^2a_{n-2}-2(2+1)$，三层为 $2^3a_{n-3}-2(2^2+2+1)$。继续至第零天，得到 $a_n=2^na_0-2\sum_{j=0}^{n-1}2^j$。有限几何级数为 $\sum_{j=0}^{n-1}2^j=2^n-1$，故 $a_n=10\cdot2^n-2(2^n-1)=8\cdot2^n+2$。$n=0$ 取空和为零，仍给十；$n=1$ 给十八，与第一天变化一致。

## Common Mistakes

- 累计损失不能直接写成两倍天数，因为早期损失影响后续倍增。
- 最后常数项为正二，展开负号时不能漏掉减负一带来的正号。

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]

Unroll an affine recurrence and combine the accumulated losses as a finite geometric series.

- Prerequisite / related: [[Q-2025F-FINAL-P10-i - Recurrence Relations]]: 展开每日更新得到显式表达。 $a_0=10$ and $a_n=2a_{n-1}-2$ for n≥1.
- Follow-on / contrast: [[Q-2025F-FINAL-P10-iii - Mathematical Induction]]: 对展开所得指数闭式作归纳验证。
