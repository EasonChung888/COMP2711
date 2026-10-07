---
id: "Q-2022-FINAL2-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 4
question_number: "6(c)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Probability Events - 概率事件]]","[[Graph Connectivity - 图连通性]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]","[[Graph Proof Method - 图论证明法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "A disconnected three-edge simple graph on four labeled vertices must consist of a triangle and an isolate."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 4
related_questions: ["[[Q-2020-FINAL2-P05-d - Probability Events]]"]
---
# Q-2022-FINAL2-P06-c

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=4]]

## Question

What is the probability that $G$ with $n=4$ vertices has 3 edges and is not connected.

Shared context: [[STEM-2022-FINAL2-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=4|physical PDF page 4]].

> (c) The simple graph $G$ with 4 vertices and 3 edges is not connected if and only if three edges form a triangle and the last vertex is disconnected, which happens with the probability $\binom43p^3(1-p)^3$.

## Supplementary Explanation

**Answer.** $4p^3(1-p)^3$.

**Derivation/proof.** A disconnected four-vertex simple graph with three edges cannot split2+2, since that allows at most two edges. Its nontrivial component must have three vertices, and all three possible edges must be present: a triangle. Choose the isolated vertex (or triangle vertices) in 4 ways. Each exact configuration has three present and three absent edges among K4's six possibilities, hence probability p³(1−p)³. These four configurations are disjoint, giving the result.

The structure is a triangle plus an isolated vertex among six potential edges. The four configurations are disjoint. This requires absence of all three edges to the fourth vertex, not merely the presence of a triangle.

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Probability Events - 概率事件]]
- [[Graph Connectivity - 图连通性]]
- [[Combinatorial Selection - 组合选择]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Graph Proof Method - 图论证明法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Variant/contrast: [[Q-2020-FINAL2-P05-d - Probability Events]] — Complementary connected and disconnected cases among the three-edge subsets on four vertices.
