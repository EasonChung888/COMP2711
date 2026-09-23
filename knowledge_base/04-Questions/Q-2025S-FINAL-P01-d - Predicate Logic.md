---
id: "Q-2025S-FINAL-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(d)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Negate universal disjointness and push both negations onto atomic membership predicates."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
related_questions: ["[[Q-2025S-FINAL-P01-c - Predicate Logic]]"]
---
# Q-2025S-FINAL-P01-d

## Source

[[2025 Spring Final]]; printed item 1(d); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P01-c - Predicate Logic]]. Part (c) is $\forall x(x\notin A\lor x\notin B)$, for A,B⊆N.

## Question

(d) [2 pts] Express the negation of the statement in (c) so that all negation symbols, if any, must immediately precede predicates.

## 中文解析

否定互不相交就是至少有一个共同元素；量词从全称翻成存在。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\exists x(x\in A\land x\in B)$。

**推导。** 导入 (c) 的命题 $\forall x(x\notin A\lor x\notin B)$。其否定先变为 $\exists x\neg(x\notin A\lor x\notin B)$，再由 De Morgan 化为 $\exists x(\neg(x\notin A)\land\neg(x\notin B))$。消去双重否定即 $\exists x(x\in A\land x\in B)$。公式完全没有复合式前的否定，并明确由同一个见证 $x$ 属于两集合，满足要求。

## Common Mistakes

- 两个独立存在见证分别属于两集合只说明两集合非空，并不保证相交。
- 否定“或”应变成“且”，不能保留析取。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Negate universal disjointness and push both negations onto atomic membership predicates.

- Prerequisite / related: [[Q-2025S-FINAL-P01-c - Predicate Logic]]: 本题将上一项的互不相交公式逐层否定。 Part (c) is $\forall x(x\notin A\lor x\notin B)$, for A,B⊆N.
