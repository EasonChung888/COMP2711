---
id: "Q-2021-MID-P09-B"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 4
question_number: "9"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Clearing one set bit gives an oscillating count ranging from one to the bit length."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 4
---
# Q-2021-MID-P09-B

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

For CountOneB’s running time, select all that apply from the list below, and briefly justify your answer.

Shared context: [[STEM-2021-MID-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=4|physical PDF page 4]].

> Algorithm B's running time is proportional to the number of 1's in the binary representation of $n$, which fluctuates between 1 and $\log n$, depending on the actual value of $n$. So it's $O(\log n)$ and $\Omega(1)$.

## Supplementary Explanation

**Answer.** (1) and (5).

**Derivation/proof.** The update n AND (n−1) clears exactly the lowest set bit, so iterations equal popcount(n). For positive n this lies between 1 and floor(log2 n)+1, proving Ω(1) and O(log n). At n=2^k there is only one iteration, ruling out Ω(log n). At n=2^k−1 there are k iterations, ruling out O(1). Consequently neither listed Θ bound applies to the per-value running-time function.

Write the binary representation as a higher-bit prefix, the lowest one, and trailing zeros. Subtracting one changes that one to zero and the trailing zeros to ones. AND with the original therefore clears exactly that one and preserves every higher one. This justifies the popcount iteration count.

The count is $\operatorname{popcount}(n)$. The values $n=2^k-1$ show unbounded running time, so select only (1) and (5).

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
