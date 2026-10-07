---
id: "Q-2020-FINAL1-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "1(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Bipartite Graphs - 二分图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "The stated edge restriction is the defining condition of a bipartition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 2
related_questions: ["[[Q-2020-FINAL1-P01-a-ii - Predicate Logic]]"]
---
# Q-2020-FINAL1-P01-b

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Prerequisite context (editorial): [[Q-2020-FINAL1-P01-a-ii - Predicate Logic]]. Condition (a)(ii) says that every edge has one endpoint in $V_1$ and the other in $V_2$, where the source partition is disjoint and covers V. 这里引用的是每条边跨越两个分部的条件，不是要求所有可能的跨部边都存在。

## Question

If (a)(ii) is true, is $G$ necessarily a bipartite graph? Your answer should be either “Yes” or “No”. Justification is not necessary.

Shared context: [[STEM-2020-FINAL1-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=1|physical PDF page 1]].

Yes.

## Supplementary Explanation

**Answer.** Yes.

**Derivation/proof.** The source gives disjoint parts V1,V2 whose union is V. Condition (a)(ii) ensures every edge has one endpoint in each part. That is precisely a bipartition of G, so G is bipartite. Missing some cross edges would affect completeness but not bipartiteness.

The sets must satisfy $V_1\cup V_2=V$ and $V_1\cap V_2=\varnothing$ as well as contain no internal edges. These conditions make the displayed partition a valid bipartition, rather than merely two independent subsets omitting some vertices.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]

- Prerequisite: [[Q-2020-FINAL1-P01-a-ii - Predicate Logic]]
