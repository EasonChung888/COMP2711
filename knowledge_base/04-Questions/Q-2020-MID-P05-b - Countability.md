---
id: "Q-2020-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(b)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Cantor diagonalization constructs a subset missing from every proposed enumeration."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-MID-P05-c - Countability]]","[[Q-2020-MID-P05-d - Countability]]","[[Q-2021-MID-P04-b - Countability]]"]
---
# Q-2020-MID-P05-b

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

## Question

$P(\mathbb N)$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## 中文解析

幂集包含所有自然数子集。假设它们可列成序列，构造集合 D 在第 i 个位置与第 i 个集合故意不同，D 就不会等于列表中的任何一个；这给出无法枚举的严格证明。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Uncountable.

**Derivation/proof.** Suppose all subsets can be listed $S_0,S_1,\ldots$ using an enumeration of the naturals. Define $D=\{i:i\notin S_i\}$. For every i, membership of i in D differs from membership in $S_i$, so $D\ne S_i$. Yet D is a subset of the naturals, contradicting completeness of the list.

### 中文解答

**推导。** 判为不可数。反设所有自然数子集可按自然数下标列为 $S_i$，取对角集合 $D=\{i\in\mathbb N:i\notin S_i\}$。若名单完整，$D$ 应等于某个 $S_j$；但定义给 $j\in D\iff j\notin S_j$，与 $D=S_j$ 矛盾。因此无法枚举所有子集，幂集不可数。下标按所采用的自然数起点枚举即可，不需要固定从零开始。

## Common Mistakes

- 认为底集合可数就推出幂集可数。
- 只统计有限子集而漏掉无限子集。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Used by: [[Q-2020-MID-P05-c - Countability]]

- Used by: [[Q-2020-MID-P05-d - Countability]]

Variant/contrast: [[Q-2021-MID-P04-b - Countability]] — Power-set uncountability versus the subfamily remaining after removing finite subsets.
