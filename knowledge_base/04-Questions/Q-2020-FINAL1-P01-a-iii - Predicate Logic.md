---
id: "Q-2020-FINAL1-P01-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "1(a)(iii)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Bipartite Graphs - 二分图]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Two restricted universal quantifiers assert every cross-part edge exists."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2020-FINAL1-P01-c - Bipartite Graphs]]"]
---
# Q-2020-FINAL1-P01-a-iii

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

## Question

“For every vertex in $V_1$, there are edges that connect it with all vertices in $V_2$”.

Shared context: [[STEM-2020-FINAL1-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=1|physical PDF page 1]].

$\forall u\in V_1\forall v\in V_2(E(u,v))$.

## Supplementary Explanation

**Answer.** $\forall u\in V_1\forall v\in V_2 E(u,v)$.

**Derivation/proof.** The phrase “every vertex” in the first part supplies the first universal quantifier; “all vertices” in the other part supplies the second. For each resulting pair assert adjacency. This places no restriction on edges whose two endpoints are both in V1 or both in V2.

The formula $\forall u\in V_1\forall v\in V_2E(u,v)$ requires all cross-part edges. By itself it does not prohibit edges within a part; that is a separate restriction in the preceding property.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Graphs - 图论基础]]
- [[Predicate Logic - 谓词逻辑]]
- [[Bipartite Graphs - 二分图]]
- [[Predicate Translation Method - 谓词翻译方法]]
- [[Graph Proof Method - 图论证明法]]

- Used by: [[Q-2020-FINAL1-P01-c - Bipartite Graphs]]
