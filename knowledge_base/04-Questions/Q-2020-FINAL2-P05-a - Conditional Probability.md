---
id: "Q-2020-FINAL2-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "5(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Conditioning on the remaining graph leaves the incident edge trials independent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2020-FINAL2-P05-a

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

## Question

Suppose we remove a vertex $u$ and all edges incident to $u$, and get a subgraph $G'$. Given $G'$ is connected, what is the probability that $G$ is also connected?

Shared context: [[STEM-2020-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=4|physical PDF page 4]].

$G$ is also connected if and only if $u$ connects with at least one vertex in $G'$. Since we know $u$ links to any other vertex with probability $p$, the probability that it has no edge with other vertices is, $(1-p)^{n-1}$. So the probability that $G$ is connected is $1-(1-p)^{n-1}$.

## Supplementary Explanation

**Answer.** $1-(1-p)^{n-1}$ whenever the conditioning event has positive probability.

**Derivation/proof.** With G′ connected, G is connected exactly when u has at least one neighbor among the n−1 remaining vertices. The event about G′ depends only on edges not incident to u, so conditioning does not change the independent incident edge probabilities. All n−1 incident edges are absent with probability (1−p)^(n−1). Taking its complement yields the answer.

As usual, the conditioning event must have positive probability; the formula does not define conditioning on a zero-probability event.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Graphs - 图论基础]]
- [[Conditional Probability - 条件概率]]
- [[Graph Connectivity - 图连通性]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Graph Proof Method - 图论证明法]]
