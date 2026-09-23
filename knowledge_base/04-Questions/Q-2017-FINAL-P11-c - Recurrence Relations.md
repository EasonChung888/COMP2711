---
id: "Q-2017-FINAL-P11-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 15
solution_page: [15]
question_number: "11(c)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["modeling"]
difficulty: 3
difficulty_basis: "The largest equal pair forces two transfers of the n minus one smaller size-pairs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2017-FINAL-P11-c

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=15]]

## Question

(c) Find a recurrence relation expressing $T(n)$ in terms of $T(n-1)$, for all integers $n\ge2$.

Shared context: [[STEM-2017-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

递推按最大的那一对盘分阶段：移开小塔、搬两只大盘、把小塔搬到大盘上。前后两次都是规模减一的同类问题，中间固定两步；同时说明这些阶段必需，才能确认不是只给了一个上界。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=2T(n-1)+2$, with $T(1)=2$.

**Derivation/proof.** To expose the largest pair, first transfer all $2(n-1)$ smaller disks to the spare pole in $T(n-1)$ moves. Transfer the two largest disks directly in two moves, then transfer the smaller tower onto them in $T(n-1)$ moves. Conversely, before the first largest disk moves all smaller disks must have cleared its source, and after the last largest disk reaches the destination the smaller tower must be transferred onto it. These disjoint phases need at least those two subtower transfers and two largest-disk moves, so the count is exact.

### 中文解答

**推导。** 上方 $2(n-1)$ 枚组成合法小子塔。将它移到辅助柱需 $T(n-1)$，两枚最大盘逐一移到终点需 $2$，最后把子塔移到终点再需 $T(n-1)$，给上界 $2T(n-1)+2$。下界方面，首次移动最大盘前，源柱与目标柱都不能有小盘，所以全部小盘须集中到第三柱；末次移动最大盘到终点时同理，小盘在另一柱。因而首次之前和末次之后各含一次完整子塔转移，至少各 $T(n-1)$，中间两枚最大盘至少各动一次。这两个阶段不重叠，故 $T(n)=2T(n-1)+2$，基础 $T(1)=2$。

## Common Mistakes

- 把常数项误写成一。
- 给出递推关系却省略初值。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
