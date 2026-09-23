---
id: "Q-2025S-FINAL-P01-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(a)(i)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Apply Cantor diagonalization to a countably infinite set and its power set."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 1
---
# Q-2025S-FINAL-P01-a-i

## Source

[[2025 Spring Final]]; printed item 1(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

![[STEM-2025S-FINAL-P01-a - Shared Problem Prompt#Shared printed wording]]

(i) There exists a countably infinite set $X$ with $\mathcal P(X)$ uncountable.

## 中文解析

取自然数集即可；其子集无法被一列完整列出。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。** 取 $X=\mathbb N$，它可数无限。若 $\mathcal P(\mathbb N)$ 可以列为 $A_0,A_1,\ldots$，构造 $D=\{n:n\notin A_n\}$。对每个 $j$，$j\in D$ 当且仅当 $j\notin A_j$，所以 $D\ne A_j$。但 $D$ 本身仍是自然数子集，与列表完整性矛盾。因此这个 $X$ 的幂集不可数，存在命题为真。

## Common Mistakes

- 幂集的元素是子集，不是原来的自然数。
- 无限集合的幂集不能用有限公式的直觉直接判为同样可数。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Apply Cantor diagonalization to a countably infinite set and its power set.
