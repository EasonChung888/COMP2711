---
id: "Q-2017-FINAL-P11-a-T2"
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
difficulty: 2
difficulty_basis: "Moving the small pair aside and back surrounds two direct moves of the large pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P11-a-T2

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=15]]

## Question

(a) Find $T(1)$ and $T(2)$. [Atomic request: $T(2)$.]

Shared context: [[STEM-2017-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

规模二有两对圆盘。先花两步把小盘对搬到备用柱，再两步搬大盘对，最后两步搬回小盘对。小盘必须先避开大盘又最后覆盖大盘，因此这三段都不可省。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $T(2)=6$.

**Derivation/proof.** Move the two small disks to the spare pole in two moves, move the two large disks to the destination in two moves, and move the small pair onto them in two more moves. Before a large disk can move, both small disks must clear the source; afterward they must reach the destination. Thus at least two small-pair transfers plus two large-disk moves are necessary, totaling six.

### 中文解答

**推导。** 先用两步把小盘对移到辅助柱，再用两步把大盘对移到终点，最后用两步把小盘对移上去，得到 $T(2)\le2+2+2=6$。首次移动大盘前，小盘必须从起点清走且不能挡住大盘目标，故整对先到第三柱；末次把大盘放到终点后，小盘对还须搬到终点。这前后阶段各至少两步，再加两枚大盘各一步，所以至少六步，得到 $T(2)=6$。

## Common Mistakes

- 套普通汉诺塔两个盘的三步答案。
- 让大盘压在备用柱的小盘上。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
