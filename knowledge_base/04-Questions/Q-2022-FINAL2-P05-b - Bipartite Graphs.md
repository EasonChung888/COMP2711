---
id: "Q-2022-FINAL2-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 3
question_number: "5(b)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Bipartite Graphs - 二分图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof","classification"]
difficulty: 1
difficulty_basis: "The already supplied partition with only cross edges directly certifies bipartiteness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
related_questions: ["[[Q-2022-FINAL2-P05-a-i - Predicate Logic]]"]
---
# Q-2022-FINAL2-P05-b

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Prerequisite context (editorial): [[Q-2022-FINAL2-P05-a-i - Predicate Logic]]. Condition (a)(i) requires every edge to join $V_1$ to $V_2$, with the two sets forming the given partition of all vertices. 这里使用的是禁止同部边的跨部条件，不是要求二分图必须为完全图。

## Question

If (a)(i) is true, is $G$ necessarily a bipartite graph? Please give a brief justification.

Shared context: [[STEM-2022-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=3|physical PDF page 3]].

> (b) Yes. Based on the definition of bipartite graph, the graph $G$ is bipartite because it can be partitioned into two disjoint subsets $V_1$ and $V_2$ and every edge connects a vertex in $V_1$ and a vertex in $V_2$.

## Supplementary Explanation

**Answer.** Yes.

**Derivation/proof.** A bipartite graph is one whose vertices can be partitioned into two disjoint parts so every edge joins the parts. V1,V2 already give the disjoint covering partition, and (a)(i) gives exactly the edge restriction. Therefore they witness a bipartition of G. Completeness of cross edges is not part of this definition.

The assumptions $V_1\cup V_2=V$ and $V_1\cap V_2=\varnothing$ make these sets a witness to a bipartition when every edge crosses.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]

- Prerequisite: [[Q-2022-FINAL2-P05-a-i - Predicate Logic]]
