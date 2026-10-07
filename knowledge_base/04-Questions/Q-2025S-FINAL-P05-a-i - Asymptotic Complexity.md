---
id: "Q-2025S-FINAL-P05-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(a)(i)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Convert a constant raised to a logarithm into a power and compare exact exponents."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2025S-FINAL-P05-a-i

## Source

[[2025 Spring Final]]; printed item 5(a)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

## Question

![[STEM-2025S-FINAL-P05-a - Shared Problem Prompt#Shared printed wording]]

(i) $A=3^{\log_2(n^2)},\quad B=n^4$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6|physical PDF page 6]].

(a) i) $O$

## Supplementary Explanation

**Answer.** Only $O$.

**Derivation/proof.** The power-log identity gives $3^{\log_2(n^2)}=(n^2)^{\log_2 3}=n^{2\log_2 3}$. Since $3<4$, we have $\log_2 3<2$, so $2\log_2 3<4$. Thus $A/B=n^{2\log_2 3-4}\to0$. The ratio has an eventual upper bound but no positive constant lower bound. Hence $A=O(B)$, while neither $\Omega$ nor $\Theta$ holds. Both functions are positive, so the vanishing ratio makes A strictly lower order.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Convert a constant raised to a logarithm into a power and compare exact exponents.
