---
id: "Q-2018-FINAL-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 16
solution_page: [16]
question_number: "11(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "A forbidden-edge path decomposes uniquely into six prefixes to C, the edge, and three suffixes from D."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P11-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=16]]

## Question

b) The line from C to D (the dashed line in the figure below) is missing, so paths cannot pass between C and D?

Shared context: [[STEM-2018-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=16|physical PDF page 16]].

Having removed this edge, it is no longer possible to reach $D$ from $C$, since down movements are not possible. Therefore, we need to subtract from the total number of paths, those that go through both $C$ and $D$. There are $C(4,2)=6$ paths from $A$ to $C$, $1$ path from $C$ to $D$, and $C(3,2)$ from $D$ to $B$, which means there are $6\times1\times3$ paths from $A$ to $B$ that pass through $C$ and $D$. So there are $56-18=38$ from $A$ to $B$ that don't pass between use the edge between $C$ and $D$.

## Supplementary Explanation

**Answer.** $56-6\cdot1\cdot3=38$.

**Derivation/proof.** Count paths using the missing edge and subtract. Reaching $C$ requires two right and two up steps, giving $\binom42=6$ prefixes. The step $C\to D$ is forced. From $D$ to $B$, two right and one up step give $\binom32=3$ suffixes. Every forbidden path has this unique decomposition and cannot use the edge twice, so there are 18 forbidden paths. Subtracting from 56 gives 38; a grid dynamic-programming count independently agrees.

A monotone path cannot traverse the forbidden edge twice, so the prefix-edge-suffix count has no duplicate paths.

Every path through the forbidden point splits uniquely into a prefix reaching it and a suffix leaving it. Subtracting those eighteen paths from all fifty-six gives $56-18=38$ valid paths.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
