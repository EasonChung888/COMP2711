---
id: "Q-2020-MID-P05-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(e)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Functions - 函数]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Two-point-domain functions are determined by exactly two natural values."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2025F-MID-P03-c-ii - Countability]]"]
---
# Q-2020-MID-P05-e

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

## Question

The set of all functions from $\{0,1\}$ to $\mathbb N$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## 中文解析

函数的定义域只有零和一，所以整个函数由两个函数值确定，等同于自然数有序对。有限个可数选择的笛卡儿积仍可数；上一题的无限多个输入点才导致本质不同。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Countable.

**Derivation/proof.** Each function corresponds bijectively to the ordered pair $(f(0),f(1))\in\mathbb N^2$. Pairs can be enumerated by increasing coordinate sum, with finitely many pairs at each sum. Thus this function space is countable; unlike an infinite-domain function, it contains only two independent output choices per object.

### 中文解答

**推导。** 判为可数。定义域只有 $0,1$ 两个点，每个函数由两个值完全确定，所以 $f\mapsto(f(0),f(1))$ 是函数集到 $\mathbb N^2$ 的双射。可按 $f(0)+f(1)$ 的和逐级枚举，每一级只有有限对，所有有序对都会列到。因此函数集可数无限。这是一个可用的对角枚举方法，不是说证明可数性必须使用某一种固定方法。

## Common Mistakes

- 把有限定义域误读成自然数定义域。
- 因值域无限便判断不可数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Functions - 函数]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Contrast / 对比: [[Q-2025F-MID-P03-c-ii - Countability]] — Both ask for the cardinality of functions into $\mathbb N$, but the domain changes from two points to all of $\mathbb N$: a pair of outputs is enumerable, whereas infinitely many independent outputs permit diagonalization. 两题的值域同为自然数；定义域由两个点变成全体自然数后，有限有序对的枚举不再适用，可用对角构造证明不可数。
