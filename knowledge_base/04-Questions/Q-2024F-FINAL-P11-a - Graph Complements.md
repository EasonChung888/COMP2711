---
id: "Q-2024F-FINAL-P11-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 27
question_number: "11(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Complements - 图的补图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Apply the handshaking identity to the degree sum S of the supplied undirected graph."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [27]
marks: 1
related_questions: ["[[Q-2024F-FINAL-P11-c - Graph Complements]]"]
---
# Q-2024F-FINAL-P11-a

## Source

[[2024 Fall Final]]; printed item 11(a); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

## Question

(a) Is $S$ even or odd? No argument is needed.

Shared printed context: ![[STEM-2024F-FINAL-P11 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27|physical PDF page 27]].

> Answer: (a) Even

## Supplementary Explanation

**Answer.** Even.

**Derivation/proof.** Let $E(G)$ be the edge set. Each ordinary undirected edge contributes one to each of its two distinct endpoints, hence two to the degree sum. The complement definition uses adjacency between distinct vertices, so loops do not enter. The handshaking identity is $S=\sum_{v\in V(G)}\deg_G(v)=2|E(G)|$. Since the number of edges is an integer, $S$ is even, including the edgeless case $S=0$.

## Connections

- [[Subtopic - Graphs - 图论基础]]

- [[Graph Complements - 图的补图]]
- [[Graph Proof Method - 图论证明法]]

Apply the handshaking identity to the degree sum S of the supplied undirected graph.

- Used by: [[Q-2024F-FINAL-P11-c - Graph Complements]]: 此结果在后续小题中的具体用途：Part (a) gives that $S=\sum_v\deg_G(v)$ is even.
