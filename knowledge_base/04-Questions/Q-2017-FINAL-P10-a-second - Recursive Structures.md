---
id: "Q-2017-FINAL-P10-a-second"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 14
solution_page: [14]
question_number: "10(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recursive Structures - 递归结构]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Nine constructor outputs collapse to five distinct pairs at second-coordinate level two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P10-a-second

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=14]]

## Question

(a) List the elements of S produced by the first two applications of the recursive definition. [Atomic request: second application.]

Shared context: [[STEM-2017-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

第二轮要对上一轮三个新元素分别生成，再取并集。中间的一二和二二等会从不同路径得到，但集合不重复计元素；因此不是九个新元素，而是第二坐标为二的五个不同点。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** The new elements are $(0,2),(1,2),(2,2),(3,2),(4,2)$.

**Derivation/proof.** From $(0,1)$ obtain first coordinates $0,1,2$ at level two; from $(1,1)$ obtain $1,2,3$; from $(2,1)$ obtain $2,3,4$. Their union gives $0,1,2,3,4$, each paired with 2. The accumulated set is these five pairs together with $(0,0),(0,1),(1,1),(2,1)$. Reapplying the rules to $(0,0)$ adds no further elements.

### 中文解答

**推导。** 对第一轮的 $(0,1)$ 应用规则得到 $(0,2),(1,2),(2,2)$；从 $(1,1)$ 得 $(1,2),(2,2),(3,2)$；从 $(2,1)$ 得 $(2,2),(3,2),(4,2)$。集合去重后新元素是 $(0,2),(1,2),(2,2),(3,2),(4,2)$。连同原有四个元素，累计集合为 $\{(0,0),(0,1),(1,1),(2,1),(0,2),(1,2),(2,2),(3,2),(4,2)\}$，共九个。再对基础元素应用只重获第一轮元素。

## Common Mistakes

- 把重复生成的点当成不同集合元素。
- 只沿着一个上一轮元素继续生成。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recursive Structures - 递归结构]]
- [[Recursive Construction Method - 递归构造法]]
