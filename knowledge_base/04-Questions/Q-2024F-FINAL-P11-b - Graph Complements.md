---
id: "Q-2024F-FINAL-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 27
question_number: "11(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Complements - 图的补图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Combine equal edge counts of isomorphic complements with per-vertex complementary degree sums n−1."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [27]
marks: 3
related_questions: ["[[Q-2024F-FINAL-P11-c - Graph Complements]]"]
---
# Q-2024F-FINAL-P11-b

## Source

[[2024 Fall Final]]; printed item 11(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

## Question

(b) Argue why $2S=n(n-1)$?
Hint: Two isomorphic graphs have same number of edges.

Shared printed context: ![[STEM-2024F-FINAL-P11 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27|physical PDF page 27]].

> (b) Note that $G$ and $H$ are isomorphism, the sum of the degree of the nodes in these two graphs added is equal to $2S$. At the same time, note that for every node $v$, $d_v^G+d_v^H=n-1$. So the sum of the degree of all nodes together in both graph is equal to $n(n-1)$.

## Supplementary Explanation

**Answer.** $2S=n(n-1)$.

**Derivation/proof.** Self-complementarity gives $G\cong H$, so the graphs have equal edge counts. The handshaking identity yields $\sum_v\deg_H(v)=2|E(H)|=2|E(G)|=S$. For fixed $v$, each of the other $n-1$ vertices is adjacent to it in exactly one graph, giving $\deg_G(v)+\deg_H(v)=n-1$. Summing over all $n$ vertices gives $S+S=2S$ on the left and $n(n-1)$ on the right.

## Connections

- [[Subtopic - Graphs - 图论基础]]

- [[Graph Complements - 图的补图]]
- [[Graph Proof Method - 图论证明法]]

Combine equal edge counts of isomorphic complements with per-vertex complementary degree sums n−1.

- Used by: [[Q-2024F-FINAL-P11-c - Graph Complements]]: 此结果在后续小题中的具体用途：Part (b) gives $2S=n(n-1)$ for the self-complementary graph.
