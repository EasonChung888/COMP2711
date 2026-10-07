---
id: "Q-2025S-FINAL-P05-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(a)(iii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Compare a polynomial-logarithmic expression with an exponential in the square root."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2025S-FINAL-P05-a-iii

## Source

[[2025 Spring Final]]; printed item 5(a)(iii); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

## Question

![[STEM-2025S-FINAL-P05-a - Shared Problem Prompt#Shared printed wording]]

(iii) $A=n^3+n^2(\log n)^4,\quad B=2^{\sqrt n}$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6|physical PDF page 6]].

(a) iii) $O$

## Supplementary Explanation

**Answer.** Only $O$.

**Derivation/proof.** Since $(\log n)^4=o(n)$, $A=\Theta(n^3)$. Put $t=\sqrt n$, so $n=t^2$ and $n^3=t^6$. Then $A/B=\Theta(t^6/2^t)\to0$, because an exponential outgrows every fixed polynomial. Thus $A=O(B)$, but A has no positive constant lower bound in terms of B, excluding $\Omega$ and therefore $\Theta$.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare a polynomial-logarithmic expression with an exponential in the square root.
