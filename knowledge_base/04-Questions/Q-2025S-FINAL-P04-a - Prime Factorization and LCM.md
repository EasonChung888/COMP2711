---
id: "Q-2025S-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 5
question_number: "4(a)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Prime Factorization and LCM - 素因数分解与最小公倍数]]"]
methods: ["[[Prime Exponent Method - 素因数指数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Choose the maximum exponent of each prime in an LCM."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2025S-FINAL-P04-a

## Source

[[2025 Spring Final]]; printed item 4(a); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=5]]

## Question

![[STEM-2025S-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

(a) [1 pt] Assume $x=2^3\cdot5^6$ and $y=2^4\cdot5^3$. What is the least common multiple of $x$ and $y$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=5|physical PDF page 5]].

(a) Their LCM is $2^{\max(3,4)}\cdot5^{\max(6,3)}=2^4\cdot5^6$.

## Supplementary Explanation

**Answer.** $2^4\cdot5^6$.

**Derivation/proof.** Divisibility by both x and y requires the exponent of two to be at least $\max(3,4)=4$ and that of five at least $\max(6,3)=6$. Using these least permitted exponents gives $2^4\cdot5^6$. Its quotient by x is two and by y is $5^3$, verifying it is a common multiple. Every positive common multiple contains these prime powers, so none can be smaller.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Prime Factorization and LCM - 素因数分解与最小公倍数]]
- [[Prime Exponent Method - 素因数指数方法]]

Choose the maximum exponent of each prime in an LCM.
