---
id: "Q-2018-FINAL-P02-a-E2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Counting Method - 计数方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "A width-two board cannot fit a horizontal length-three tile and forces two vertical tiles."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-a-E2

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(a) Calculate $E_1,E_2$, and $E_3$. [Atomic request: $E_2$.]

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

宽度二仍放不下横向长度三的拼块，因此每一列都只能竖着放。两列的竖块位置完全确定；交换两块相同拼块的名字不会构成新的铺法。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $E_2=1$.

**Derivation/proof.** A horizontal piece requires three columns but this board has only two. Thus both columns must be filled vertically, one piece per column. Those two placements cover every cell and there is no choice about their positions, so only one tiling exists.

### 中文解答

**推导。** $3$ 行 $2$ 列仍不足以横放长三格的砖，因此每一列只能由一块竖砖覆盖。两列各自放竖砖的位置唯一，二者覆盖所有六格且不重叠，故只有这一种铺法，$E_2=1$。

## Common Mistakes

- 把两块的交换顺序计为不同铺法。
- 误认为面积六就能任意选两块方向。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Recursion - 递归]]
- [[Counting Principles - 计数原理]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Method - 计数方法]]
- [[Recurrence-Solving Method - 递推求解法]]
