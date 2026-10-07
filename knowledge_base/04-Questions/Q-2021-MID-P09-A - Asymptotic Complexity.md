---
id: "Q-2021-MID-P09-A"
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
difficulty: 2
difficulty_basis: "Repeated division by two scans every binary position including zeros."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 4
---
# Q-2021-MID-P09-A

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

For CountOneA’s running time, select all that apply from the list below, and briefly justify your answer.

Shared context: [[STEM-2021-MID-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=4|physical PDF page 4]].

> Algorithm A's running time is proportional to the number of bits in the binary representation of $n$, so it's $\Theta(\log n)$, which is also $O(\log n)$, $\Omega(\log n)$, and $\Omega(1)$.

## Supplementary Explanation

**Answer.** (1), (2), (3), and (5).

**Derivation/proof.** For integer n≥1, repeated floor division by two reaches zero after exactly floor(log2 n)+1 iterations, one per binary digit. Each loop iteration uses a constant number of the source's primitive operations. Thus T(n)=Θ(log n) as n grows, implying O(log n), Ω(log n), and Ω(1). It is unbounded, so O(1) and Θ(1) do not apply.

The number of iterations is $\lfloor\log_2n\rfloor+1$, and the bit length is unbounded.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
