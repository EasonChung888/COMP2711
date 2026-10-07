---
id: "Q-2023S-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 12
question_number: "8(a)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Dividing by n cubed exposes two decaying powers despite the coefficient 100."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 2
---
# Q-2023S-MID-P08-a

## Source

[[2023 Spring Midterm]]; printed item 8(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

## Question

(a) $A=n^{2.9}+100n^2$, $B=n^3$;

Shared printed context: ![[STEM-2023S-MID-P08 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12|physical PDF page 12]].

> (a) $A=O(B)$

## Supplementary Explanation

**Answer.** $A=O(B)$ only.

**Derivation/proof.** For positive $n$, $A/B=n^{-0.1}+100n^{-1}\to0$. Thus the ratio is eventually bounded above, proving $A=O(B)$. Since it becomes smaller than every positive constant, no eventual positive lower bound exists, so $A\ne\Omega(B)$ and hence $A\ne\Theta(B)$. The large coefficient 100 affects a finite range but not the limiting order.

The ratio becomes smaller than any such $c>0$, so there is no $\Theta$ relation.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Dividing by n cubed exposes two decaying powers despite the coefficient 100.
