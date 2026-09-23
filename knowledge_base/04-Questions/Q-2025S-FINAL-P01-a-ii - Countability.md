---
id: "Q-2025S-FINAL-P01-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(a)(ii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Rule out a proposed countable power set using a diagonal subset for an arbitrary enumeration."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 1
---
# Q-2025S-FINAL-P01-a-ii

## Source

[[2025 Spring Final]]; printed item 1(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

![[STEM-2025S-FINAL-P01-a - Shared Problem Prompt#Shared printed wording]]

(ii) There exists a countably infinite set $X$ with $\mathcal P(X)$ also countably infinite.

## 中文解析

要否定“存在”，需说明任意可数无限 $X$ 都不可能有可数幂集。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** False。

**推导。** 任取可数无限 $X=\{x_0,x_1,\ldots\}$。反设其幂集也能列为 $B_0,B_1,\ldots$，令 $E=\{x_j:x_j\notin B_j\}$。$E\subseteq X$，但对每个索引 $j$，它在 $x_j$ 的成员资格上与 $B_j$ 相反，因此 $E$ 不在列表中。这一矛盾适用于每个这样的 $X$，故没有符合题意的集合，答案为假。

## Common Mistakes

- 仅举一个幂集不可数的例子不足以否定所有可能的存在见证。
- 列表允许包含有限子集和无限子集，仍会被对角子集遗漏。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Rule out a proposed countable power set using a diagonal subset for an arbitrary enumeration.
