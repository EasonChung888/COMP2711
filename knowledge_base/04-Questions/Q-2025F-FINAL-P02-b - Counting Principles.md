---
id: "Q-2025F-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Pair all subsets with their disjoint complements and apply the pigeonhole principle."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 5
---
# Q-2025F-FINAL-P02-b

## Source

[[2025 Fall Final]]; printed item 2(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

## Question

(b) [5 points] Consider $A=\{1,2,3,4,5\}$. Imagine picking 17 different subsets from $A$ at random. Prove that at least two of them are disjoint.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5|physical PDF page 5]].

(b) The power set of $A$ has $2^5=32$ subsets. For each subset $S\subseteq A$, its complement $S^c$ is disjoint with $S$ (i.e., $S\cap S^c=\varnothing$).

Also the complement of any subset is unique (i.e., there is a bijection between any subset and its complement).

Thus, these 32 subsets can be paired into 16 groups of (subsets and their complement). Based on pigeonhole principle, if we choose 17 subsets, two of them will be from the same pair which means they are disjoint.

## Supplementary Explanation

**Answer.** Among the 17 distinct subsets, at least two are disjoint.

**Derivation/proof.** The power set of $A$ has $2^5=32$ subsets. Pair each $S\subseteq A$ with its unique complement $A\setminus S$. They are disjoint and cannot be equal: otherwise element 1 would belong and not belong to the same set. Taking the complement twice returns $S$, so these subsets partition into exactly 16 disjoint pairs. Selecting 17 distinct subsets forces both members of some pair to be selected, by the pigeonhole principle. They are complements and hence disjoint. The random selection distribution has no effect on this deterministic conclusion.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Pair all subsets with their disjoint complements and apply the pigeonhole principle.
