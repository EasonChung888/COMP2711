---
id: "Q-2022-FINAL2-P05-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 3
question_number: "5(a)(ii)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Bipartite Graphs - 二分图]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Every pair across the partition must satisfy adjacency, with no internal-edge prohibition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2022-FINAL2-P05-c - Bipartite Graphs]]"]
---
# Q-2022-FINAL2-P05-a-ii

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

## Question

For every vertex in $V_1$, there are edges that connect it with all vertices in $V_2$

Shared context: [[STEM-2022-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=3|physical PDF page 3]].

> (ii) $\forall u\in V_1\forall v\in V_2(E(u,v))$.

## Supplementary Explanation

**Answer.** $\forall u\in V_1\forall v\in V_2 E(u,v)$.

**Derivation/proof.** For each u in the first part, assert E(u,v) for every v in the second. This is exactly two restricted universal quantifiers. Undirectedness supplies the reverse orientation automatically. Since neither quantifier ranges over two vertices in the same part, the formula says nothing about internal edges.

Internal edges have not been forbidden.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Graphs - 图论基础]]
- [[Predicate Logic - 谓词逻辑]]
- [[Bipartite Graphs - 二分图]]
- [[Predicate Translation Method - 谓词翻译方法]]
- [[Graph Proof Method - 图论证明法]]

- Used by: [[Q-2022-FINAL2-P05-c - Bipartite Graphs]]
