---
id: "Q-2015-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 14
solution_page: [14]
question_number: "8(a)"
year: 2015
term: "fall"
exam_type: "final"
marks: 4
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "An affine recurrence is solved by summing the geometric accumulation of the constant twelve."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P08-a

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=14]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=14]]

## Question

Give a closed-form solution to the recurrence. You only have to give the solution. You do not need to show how you derived it.

Shared context: [[STEM-2015-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

反复展开时，初值三被乘上 $7^n$，每一步增加的十二按不同次幂累积。等比求和后，两部分合并为 $5\cdot7^n-2$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=5\cdot7^n-2$.

**Derivation/proof.** Iteration yields $T(n)=3\cdot7^n+12\sum_{j=0}^{n-1}7^j=3\cdot7^n+12(7^n-1)/6=5\cdot7^n-2$. At $n=0$, the formula gives 3, matching the initial condition.

### 中文解答

**推导。** 展开 n 次，初值三的贡献为 $3\cdot7^n$，每步新增的十二累积为 $12\sum_{j=0}^{n-1}7^j$。等比和给 $T(n)=3\cdot7^n+12(7^n-1)/6=5\cdot7^n-2$。n=0 时直接代入得 $5-2=3$，与初值相合；n≥1 时迭代合法。考试只要求闭式，这里补上完整求解。

## Common Mistakes

- 只写齐次解 $3\cdot7^n$，漏掉每步加十二的累积。
- 把几何级数的项数误写成 $n+1$。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
