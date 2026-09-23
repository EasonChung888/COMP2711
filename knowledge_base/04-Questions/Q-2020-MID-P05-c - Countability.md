---
id: "Q-2020-MID-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(c)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The iterated power set contains an injective singleton copy of an already uncountable power set."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-MID-P05-b - Countability]]"]
---
# Q-2020-MID-P05-c

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Prerequisite context (editorial): [[Q-2020-MID-P05-b - Countability]]. Part (b) establishes that $P(\mathbb N)$ is uncountable by diagonalization. That is the domain of the singleton injection used here. 本题使用第一层幂集不可数这一结果，再将其单射进第二层幂集。

## Question

$P(P(\mathbb N))$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## 中文解析

把每个自然数子集 S 变成只含 S 的单元素集合，就把第一层幂集单射进第二层。第一层已经不可数，所以第二层不可能变回可数；注意单元素集合的元素本身也是集合。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Uncountable.

**Derivation/proof.** The map $S\mapsto\{S\}$ injects $P(\mathbb N)$ into its power set. Cantor's diagonal argument shows $P(\mathbb N)$ is uncountable. If $P(P(\mathbb N))$ were countable, every subset, including that singleton image, would be countable; its bijection with $P(\mathbb N)$ would give a contradiction.

### 中文解答

**推导。** 判为不可数。已知 $P(\mathbb N)$ 不可数；把每个子集 $S\subseteq\mathbb N$ 送到单元素集合 $\{S\}$，得到从 $P(\mathbb N)$ 到 $P(P(\mathbb N))$ 的单射，因为 $\{S\}=\{T\}$ 必推出 $S=T$。若后者可数，其子集即这个单射像也可数，再由像与 $P(\mathbb N)$ 的双射会推出前者可数，矛盾。所以二重幂集仍不可数。

## Common Mistakes

- 把外层集合只有一个元素的情况误当成整个幂集。
- 认为做两次幂集会抵消。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Prerequisite: [[Q-2020-MID-P05-b - Countability]]
