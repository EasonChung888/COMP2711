---
id: "Q-2020-FINAL2-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "5(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Every connected component needs one fewer edge than its vertex count, attained by trees."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
related_questions: ["[[Q-2020-FINAL2-P05-d - Probability Events]]"]
---
# Q-2020-FINAL2-P05-c

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

## Question

If $G$ has exactly $k$ connected components, what is the minimum possible value of $X$?

Shared context: [[STEM-2020-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=4|physical PDF page 4]].

Suppose that the $k$ connected components are $C_1,C_2,\ldots,C_k$. Since $C_i$ is a connected component with $v_i$ vertices, the minimum number of edges to connect them is $v_i-1$, which is a tree.
The minimum of $X$ is equal to all components reach minimal the same time.
$$\min(X)=\min_{C_i}\sum_{i=1}^k\min(C_i)=\min_{C_i}\sum_{i=1}^k(v_i-1)=n-k.$$

## Supplementary Explanation

**Answer.** $n-k$.

**Derivation/proof.** Let component i have v_i vertices. Connectivity requires at least v_i−1 edges: starting at one vertex, each additional vertex in a spanning traversal needs an edge to the reached set. Summing gives at least $\sum(v_i-1)=n-k$. Attain this with a tree on each component, including isolated vertices as one-vertex trees. Thus the lower bound is exact.

The component lower bound follows by growing a connected reached set: each newly reached vertex needs a connecting edge. Taking a tree in every component attains all bounds simultaneously.

The component sizes satisfy $\sum_i v_i=n$. A tree in component $i$ uses $v_i-1$ edges, so the total minimum is $\sum_i(v_i-1)=n-k$.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Graph Connectivity - 图连通性]]
- [[Counting Principles - 计数原理]]
- [[Graph Proof Method - 图论证明法]]
- [[Counting Method - 计数方法]]

- Used by: [[Q-2020-FINAL2-P05-d - Probability Events]]
