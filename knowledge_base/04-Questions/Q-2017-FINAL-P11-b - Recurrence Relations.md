---
id: "Q-2017-FINAL-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 15
solution_page: [15]
question_number: "11(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Two transfers of the four smaller disks enclose two largest-disk moves."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2017-FINAL-P11-b

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=15]]

## Question

(b) Find $T(3)$.

Shared context: [[STEM-2017-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

第三对大盘要移动之前，上面的两对小盘必须整体移开。两对盘的转移需要六步，移开和最后搬回各一次，中间大盘两步，因此一共十四步。不要把 n 误当作总盘数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $T(3)=14$.

**Derivation/proof.** The top two size-pairs form a smaller instance taking $T(2)=6$ moves. Move that subtower to the spare pole, move the largest equal pair to the destination in two moves, then transfer the subtower onto it in another six. This gives $6+2+6=14$, and each of these phases is necessary because no larger disk can rest on a smaller disk.

### 中文解答

**推导。** 把最上方两种大小的四枚盘当作子塔，已有 $T(2)=6$。先将子塔移到辅助柱，移两枚最大盘到终点，再移子塔到终点，步数 $6+2+6=14$。任何完成过程在首次移动最大盘前，较小盘都必须集中于不挡住起点和目标的第三柱；末次移动最大盘后，较小盘仍须整体转移到终点。这两个阶段各至少 $T(2)=6$，最大盘至少两步，故 $T(3)=14$。

## Common Mistakes

- 把三对当作三个普通盘。
- 只计算一次小塔转移。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
