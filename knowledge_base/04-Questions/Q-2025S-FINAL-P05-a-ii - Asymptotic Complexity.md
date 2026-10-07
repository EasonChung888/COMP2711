---
id: "Q-2025S-FINAL-P05-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(a)(ii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Bound a logarithmic factorial above and below to establish all three asymptotic relations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2025S-FINAL-P05-a-ii

## Source

[[2025 Spring Final]]; printed item 5(a)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

## Question

![[STEM-2025S-FINAL-P05-a - Shared Problem Prompt#Shared printed wording]]

(ii) $A=n\log n,\quad B=\log((n!)^2)$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6|physical PDF page 6]].

(a) ii) $O,\Omega,\Theta$

## Supplementary Explanation

**Answer.** $O,\Omega,\Theta$ all hold.

**Derivation/proof.** Expanding the product gives $B=\log((n!)^2)=2\sum_{j=1}^n\log j\le2n\log n=2A$. At least $\lfloor n/2\rfloor$ factors are at least $n/2$, so $B\ge2\lfloor n/2\rfloor\log(n/2)$. For $n\ge4$, $\lfloor n/2\rfloor\ge n/3$ and $\log(n/2)\ge(\log n)/2$, giving $B\ge(n/3)\log n$. Hence $A/3\le B\le2A$. These two-sided positive constant bounds establish all three relations.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Bound a logarithmic factorial above and below to establish all three asymptotic relations.
