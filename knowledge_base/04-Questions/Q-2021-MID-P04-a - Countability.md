---
id: "Q-2021-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 2
question_number: "4(a)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Grouping finite subsets by their maximum yields finite blocks and covers the empty set separately."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 6
related_questions: ["[[Q-2021-MID-P04-b - Countability]]"]
---
# Q-2021-MID-P04-a

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

## Question

Show that $\{S\mid S\subseteq\mathbb N,|S|\text{ is finite}\}$ is countable.

Shared context: [[STEM-2021-MID-P04 - Shared Problem Prompt]].

## 中文解析

按最大元素把有限子集分成有限组，空集没有最大元素，必须先单列。每个非空有限子集终有一个最大值，所以在相应有限阶段一定出现；仅仅说“所有子集都是有限的”并不能证明整个族可数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** The family is countably infinite.

**Derivation/proof.** List the empty set first. For each natural k in increasing order, list every finite subset whose maximum is k. Each such block is finite because its elements come from the finite initial segment through k; if naturals begin at zero, the block has 2^k members. Every nonempty finite set has a finite maximum and appears in exactly one block, giving an enumeration. Singleton sets show the family is infinite.

### 中文解答

**推导。** 先列空集，因为它没有最大元素。对每个自然数 $k$ 按递增顺序，列出最大元素恰为 $k$ 的全部子集；每一组都有限，因为所有元素都在截至 $k$ 的有限初始段中。若自然数从零起，该组有 $2^k$ 个集合：必须选 $k$，其余 $k$ 个元素任意选。任何非空有限子集都有最大元素，故会在唯一一组出现，且此前只有有限项，因此得到枚举。所有单元素集 $\{k\}$ 又说明这个族无限，结论是可数无限。

## Common Mistakes

- 漏掉空集。
- 用无穷字典序导致某些有限集合永远不到。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Used by: [[Q-2021-MID-P04-b - Countability]]
