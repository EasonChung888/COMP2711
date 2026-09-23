---
id: "Q-2017-FINAL-P11-a-T1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 15
solution_page: [15]
question_number: "11(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The two equal disks may move directly onto one another at the destination."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P11-a-T1

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=15]]

## Question

(a) Find $T(1)$ and $T(2)$. [Atomic request: $T(1)$.]

Shared context: [[STEM-2017-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

规模一表示一对同样大小的圆盘，不是一个盘。两盘都要离开起点，至少两步；允许相同大小相叠，所以直接逐个搬到终点恰好两步，达到下界。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $T(1)=2$.

**Derivation/proof.** There are only two disks, of the same size. Move the top disk from the source to the destination, then place the second disk on top of it. Both moves are legal because equal disks may stack. Each disk must move at least once, so two is also a lower bound.

### 中文解答

**推导。** $n=1$ 时只有两枚同大小圆盘。先把上方一枚从起点移到终点，再将另一枚放到它上面，共两步；题设允许同大小相叠。另一方面两枚都必须离开起点且一次只能移一枚，至少两步。因此 $T(1)=2$，构造与下界相合。

## Common Mistakes

- 把 T(1) 写成一。
- 误认为相同大小不能相叠。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
