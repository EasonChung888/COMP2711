---
id: "Q-2020-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(a)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Triples of natural numbers can be enumerated by bounded coordinate sums."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
---
# Q-2020-MID-P05-a

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

## Question

$\mathbb N^3$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## 中文解析

自然数三元组可按坐标和分组，每组有限，再逐组列出。任意三元组的坐标和都是有限的，因此一定在有限阶段出现；三个坐标都无限并不会让有限笛卡儿积变成不可数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Countable.

**Derivation/proof.** Group triples by their coordinate sum. Each fixed sum contains only finitely many natural-number triples, and every triple belongs to one such group. Listing these finite groups in increasing sum enumerates the entire product. It is infinite because fixing two coordinates leaves infinitely many choices for the third.

### 中文解答

**推导。** 判为可数。按坐标和 $a+b+c=s$ 把自然数三元组分类，每个固定的 $s$ 只有有限多个三元组。先按 $s$ 增加，再在每一有限组内按字典顺序列出，便使每个三元组在有限步骤后出现，得到完整枚举。固定后两个坐标，让第一个遍历自然数可知集合无限，因此是可数无限，而不是有限集。此论证不依赖自然数是否含零的约定。

## Common Mistakes

- 把无限乘无限直接当作不可数。
- 按普通字典序列完第一行而永不到后续行。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
