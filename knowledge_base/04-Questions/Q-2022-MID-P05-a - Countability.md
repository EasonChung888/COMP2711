---
id: "Q-2022-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "5(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Every real solution is a signed square root of a nonnegative integer."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2022-MID-P05-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

$\{x\in\mathbb R\mid x^2\in\mathbb Z\}$

Shared context: [[STEM-2022-MID-P05 - Shared Problem Prompt]].

## 中文解析

实数平方若是整数，只能是非负整数，因此原集合可按零、正负根号一、正负根号二等依次列出。包含无理数不代表不可数，关键是这些无理数由可数整数索引。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Countable.

**Derivation/proof.** A real square is nonnegative, so the set is exactly {0,±√1,±√2,±√3,…}. For each nonnegative integer there are at most two corresponding real roots. This explicitly enumerates the whole set, and the infinitely many positive square roots are distinct. The elements need not be rational for the set to be countable.

### 中文解答

**推导。** 实数平方非负，若 $x^2$ 是整数，就必为某个 $k\in\mathbb Z_{\ge0}$，而 $x=\pm\sqrt{k}$。因此整个集合可列成 $0,1,-1,\sqrt2,-\sqrt2,\sqrt3,-\sqrt3,\ldots$。每个非负整数至多对应两个实根，所以枚举没有漏掉元素；不同正整数的正平方根又互不相同，故集合无限。结论为可数无限，包含某些无理数并不使它不可数。

## Common Mistakes

- 把含无理数误判为不可数。
- 给负整数也取实数平方根。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
