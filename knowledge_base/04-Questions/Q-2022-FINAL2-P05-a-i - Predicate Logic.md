---
id: "Q-2022-FINAL2-P05-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 3
question_number: "5(a)(i)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Bipartite Graphs - 二分图]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Forbidding every within-part edge is equivalent to the required cross-part endpoint condition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2022-FINAL2-P05-b - Bipartite Graphs]]","[[Q-2020-FINAL1-P01-a-ii - Predicate Logic]]"]
---
# Q-2022-FINAL2-P05-a-i

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

## Question

Every edge connects a vertex in $V_1$ and a vertex in $V_2$

Shared context: [[STEM-2022-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=3|physical PDF page 3]].

> (a) (i) $(\forall u\in V_1\forall v\in V_1(\neg E(u,v)))\land(\forall u\in V_2\forall v\in V_2(\neg E(u,v)))$ or
> $\forall u,v\in V(E(u,v)\to((u\in V_1\land v\in V_2)\lor(u\in V_2\land v\in V_1)))$

## Supplementary Explanation

**Answer.** $(\forall u\in V_1\forall v\in V_1\neg E(u,v))\land(\forall u\in V_2\forall v\in V_2\neg E(u,v))$.

**Derivation/proof.** Because V1,V2 partition all vertices, any pair either lies within one part or across the two. The formula excludes both within-part possibilities, leaving only cross-part pairs as potential edges. Conversely every cross-part-only graph satisfies both universal nonadjacency clauses. It places no requirement that any particular cross edge exist.

The formula does not require every cross-part pair to be adjacent.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Graphs - 图论基础]]
- [[Predicate Logic - 谓词逻辑]]
- [[Bipartite Graphs - 二分图]]
- [[Predicate Translation Method - 谓词翻译方法]]
- [[Graph Proof Method - 图论证明法]]

- Used by: [[Q-2022-FINAL2-P05-b - Bipartite Graphs]]

Variant/contrast: [[Q-2020-FINAL1-P01-a-ii - Predicate Logic]] — The same cross-partition edge restriction with alternate equivalent predicate formulations.
