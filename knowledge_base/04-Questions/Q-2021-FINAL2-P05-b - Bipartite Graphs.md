---
id: "Q-2021-FINAL2-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 3
question_number: "5(b)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Bipartite Graphs - 二分图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The multiplicities of degrees three and seven are reversed from those of K3,7."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2021-FINAL2-P05-b

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

## Question

A complete bipartite undirected graph with 10 vertices, whose degrees are $3,3,3,7,7,7,7,7,7,7$.

Shared context: [[STEM-2021-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-2.pdf#page=4|physical PDF page 4]].

> (b) None. In a complete bipartite graph, we can partition the vertices into two sets $V_1,V_2$ so that there is an edge from every vertex in $V_1$ to every vertex in $V_2$. So, the degree of every vertex in $V_1$ should be $|V_2|$ and the degree of every vertex in $V_2$ should be $|V_1|$. When the two possible degrees are 3 and 7, we need 7 vertices with degree 3 and 3 vertices with degree 7 to make a complete bipartite graph. The given degrees are not in this case.

## Supplementary Explanation

**Answer.** No such graph exists.

**Derivation/proof.** In a complete bipartite graph K_(a,b), each of the a vertices has degree b and each of the b vertices degree a. The only displayed degrees are 3 and 7, so the part sizes would have to be 3 and 7. Then there must be three degree-7 vertices and seven degree-3 vertices. The supplied sequence has the opposite multiplicities, so it cannot be the required graph.

The required sequence has three degree-seven vertices and seven degree-three vertices, but the printed sequence has three degree-three vertices and seven degree-seven vertices: the multiplicities are reversed.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]
