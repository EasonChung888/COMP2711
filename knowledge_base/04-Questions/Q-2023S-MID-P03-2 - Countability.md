---
id: "Q-2023S-MID-P03-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(2)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Cantor's diagonal set differs from every proposed enumerated subset at its own index."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-2

## Source

[[2023 Spring Midterm]]; printed item 3(2). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

2. $P(\mathbb N)$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

假如幂集能按 A₁、A₂ 等列出，就按第 n 个集合是否含 n 来反向定义新集合。这个 diagonal 集合在第 n 项位置必定与 Aₙ 不同，因此任何声称完整的枚举都漏掉它。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $P(\mathbb N)$ 是 uncountable。

**推导。**

1. 假设所有自然数子集能列为 $A_1,A_2,\ldots$；如自然数包括零，可先重新编号。定义 diagonal 集合 $D=\{n:n\notin A_n\}$。这个规则为每个自然数确定是否取入，所以 $D$ 本身是合法的自然数子集。
2. 对任意列表编号 $k$，有 $k\in D$ 当且仅当 $k\notin A_k$。因此 $D$ 与 $A_k$ 至少在元素 $k$ 的归属上相反，必不相等。$D$ 不在任何一项中，与“完整列出全部子集”矛盾，故不存在可数枚举，幂集不可数。

### English solution

**Answer.** Uncountable.

**Derivation/proof.** Suppose all subsets were listed as $A_1,A_2,\ldots$ (reindex naturals starting at 1 if necessary). Define $D=\{n:n\notin A_n\}$. For every index $k$, membership of $k$ in $D$ is opposite to its membership in $A_k$, so $D\ne A_k$. Yet $D$ is a subset of $\mathbb N$ and must occur in a complete list. This contradiction proves uncountability.

## Common Mistakes

- 把幂集只理解为有限子集会漏掉无限子集。 / The power set includes every infinite subset.
- diagonal 集合是否包含 n 必须与第 n 个集合相反。 / Reverse membership at the matching index.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Cantor's diagonal set differs from every proposed enumerated subset at its own index.
