---
id: "Q-2018-FINAL-P10-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 14
solution_page: [15]
question_number: "10(c)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Counting Method - 计数方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "One scalar multiplication occurs for each independent row-column-inner-index triple."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P10-c

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=15]]

## Question

c) Express the total number of multiplications that the algorithm does, expressed as a function of $n,m,p$.

Shared context: [[STEM-2018-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=15|physical PDF page 15]].

The first loop is executed $n$ times, therefore the second is executed $nm$ times, and the third $nmp$ times. At every iteration of the innermost loop a multiplication is executed, therefore the answer is $nmp$.

## Supplementary Explanation

**Answer.** $nmp$.

**Derivation/proof.** For each of $n$ rows and $m$ columns, the algorithm runs the inner loop $p$ times. Every inner iteration contains exactly one scalar multiplication $A[i,k]B[k,j]$. Hence the exact multiplication count is $n\cdot m\cdot p$. Initializing to zero and adding do not contribute to the requested multiplication count.

For each output entry, sum the terms $A[i,k]\cdot B[k,j]$ over the common inner dimension. The output row is indexed by $i$ and its column by $j$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Counting Principles - 计数原理]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Counting Method - 计数方法]]
