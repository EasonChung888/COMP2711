---
id: "Q-2018-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Modular Congruence - 同余]]"]
methods: ["[[Counting Method - 计数方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The upper half of the interval contains n numbers whose doubled smallest member exceeds the interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2018-MID-P03-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=5]]

## Question

(a) Find a subset $P\subseteq S$ satisfying the above criterion such that $|P|=n$.

Shared context: [[STEM-2018-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=5|physical PDF page 5]].

$P=\{n+1,n+2,\ldots,2n\}$. Answer for a specific $n$ is not accepted. (2 marks) Other answers are possible.

## Supplementary Explanation

**Answer.** $P=\{n+1,n+2,\ldots,2n\}$.

**Derivation/proof.** This set contains exactly $2n-(n+1)+1=n$ elements. If $a<b$ belong to it and $a\mid b$, their distinct positive values imply $b\ge2a\ge2(n+1)>2n$, contradicting $b\le2n$. Also a larger positive integer cannot divide a smaller positive integer, so both ordered directions of the criterion hold.

The set size is $2n-(n+1)+1=n$. A larger positive integer cannot divide a smaller positive integer either, so the ordered-pair criterion holds in both directions.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Congruence - 同余]]
- [[Counting Method - 计数方法]]
- [[Modular Arithmetic Method - 模运算方法]]
