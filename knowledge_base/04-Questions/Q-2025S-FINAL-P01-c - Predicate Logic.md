---
id: "Q-2025S-FINAL-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(c)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Translate disjointness using universal membership exclusion on the specified natural domain."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
related_questions: ["[[Q-2025S-FINAL-P01-d - Predicate Logic]]"]
---
# Q-2025S-FINAL-P01-c

## Source

[[2025 Spring Final]]; printed item 1(c); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

(c) [2 pts] Assume $A$ and $B$ are two sets with elements in $\mathbb N$. Express the following predicate using only $\forall$, $\exists$, $\land$, $\lor$, $\to$, $\leftrightarrow$, $\neg$, $\in$, $\notin$, parentheses, variables and constants. Take the natural numbers $\mathbb N$ as the domain. You are not allowed to use any other predicates.

Set $A$ and set $B$ are disjoint

## 中文解析

互不相交指没有共同元素，不需要新增 intersection 谓词。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\forall x(x\notin A\lor x\notin B)$。

**推导。** 一个数同时属于两集合的条件是 $x\in A\land x\in B$。要求这种数不存在，得到 $\neg\exists x(x\in A\land x\in B)$。用 quantifier negation 与 De Morgan，等价于 $\forall x(\neg(x\in A)\lor\neg(x\in B))$，即 $\forall x(x\notin A\lor x\notin B)$。自然数域覆盖了两集合全部元素，所以此条件既必要也充分，且只用题目允许的符号。

## Common Mistakes

- 写成对每个元素都同时不属于两集合会错误地强迫两集合为空。
- 本题禁止新增谓词，不能直接写 Disjoint(A,B) 代替翻译。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate disjointness using universal membership exclusion on the specified natural domain.

- Follow-on / contrast: [[Q-2025S-FINAL-P01-d - Predicate Logic]]: 本题将上一项的互不相交公式逐层否定。
