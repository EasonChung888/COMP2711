---
id: "Q-2025S-FINAL-P12-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(c)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Count each ordered length-two path uniquely by its middle vertex and two distinct ordered neighbors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 5
---
# Q-2025S-FINAL-P12-c

## Source

[[2025 Spring Final]]; printed item 12(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=17]]

## Question

(c) [5 pts] Consider a simple undirected graph $G$ with $n$ labeled vertices, where vertex $i$ has degree $d_i$. Derive an expression for the total number of ordered paths of length 2 in $G$, in terms of the degrees $d_1,d_2,\ldots,d_n$. For this question, you may use the summation sign $\Sigma$ to express your answer. Note that the origin and destination of the path must be different.
As an example, the ordered paths of length 2 in the graph below are:
$\{(adb),(bda),(adc),(cda),(bdc),(cdb)\}$.

![[knowledge_base/06-Audit/figures/2025S-FINAL-P12-c-star.png]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=17|physical PDF page 17]].

(c) Note that each path consists of 3 nodes. By assuming each node $i$ to be the middle node, the number of possible ordered paths is equal to the number of ways to choose an ordered pair of distinct neighbors of $i$. Since $i$ has $d_i$ neighbors, the number of ordered pairs of distinct neighbors is $d_i(d_i-1)$. So the answer to the question is:
$$\sum_{i=1}^n d_i(d_i-1)$$
Also accept:
$$2\sum_{i=1}^n\binom{d_i}{2}$$

## Supplementary Explanation

**Answer.** $\sum_{i=1}^n d_i(d_i-1)$.

**Derivation/proof.** Fix middle vertex i. There are $d_i$ choices for the starting neighbor and $d_i-1$ choices for a different ending neighbor, giving $d_i(d_i-1)$ ordered paths through i. Every length-two path has exactly one middle vertex, so summing over i does not duplicate any ordered path. In the example, the center has degree three and every other vertex degree one. The count is $3\cdot2=6$, matching the six listed ordered triples.

## Connections

- [[Topic - Graphs - 图论]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Graph Connectivity - 图连通性]]
- [[Counting Principles - 计数原理]]
- [[Graph Proof Method - 图论证明法]]
- [[Counting Method - 计数方法]]

Count each ordered length-two path uniquely by its middle vertex and two distinct ordered neighbors.
