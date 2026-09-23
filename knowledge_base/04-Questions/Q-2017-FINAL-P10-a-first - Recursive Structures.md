---
id: "Q-2017-FINAL-P10-a-first"
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
difficulty: 1
difficulty_basis: "Applying the three constructors once to the single basis pair produces three new pairs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P10-a-first

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=14]]

## Question

(a) List the elements of S produced by the first two applications of the recursive definition. [Atomic request: first application.]

Shared context: [[STEM-2017-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

第一次应用只需把基例的两个零代入三条生成规则。第二坐标都会增加到一，第一坐标分别增加零、一、二。题目说产生的元素与累计集合不同，累计集合还应保留原来的零零。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** New elements: $(0,1),(1,1),(2,1)$; the accumulated set also contains $(0,0)$.

**Derivation/proof.** Substitute $a=b=0$ into the three rules. They give $(0,0+1)$, $(0+1,0+1)$, and $(0+2,0+1)$, namely the three displayed pairs. None equals the basis pair because the second coordinate has increased to one.

### 中文解答

**推导。** 从唯一基础元素 $(0,0)$ 出发，三条规则分别给 $(0,0+1)$、$(0+1,0+1)$、$(0+2,0+1)$，即新元素 $(0,1),(1,1),(2,1)$。递归生成不会删除基础元素，故第一次后的累计集合为 $\{(0,0),(0,1),(1,1),(2,1)\}$。区分“新产生”与“累计”便与印本列出的集合一致。

## Common Mistakes

- 把基例删除而当作不再属于集合。
- 只使用其中一条生成规则。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recursive Structures - 递归结构]]
- [[Recursive Construction Method - 递归构造法]]
