---
id: "Q-2023S-MID-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 12
question_number: "8(c)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The printed 5 is a logarithm base, so change of base gives a positive constant ratio."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 2
---
# Q-2023S-MID-P08-c

## Source

[[2023 Spring Midterm]]; printed item 8(c); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

## Question

(c) $A=\log n$, $B=\log_5 n$;

Shared printed context: ![[STEM-2023S-MID-P08 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12|physical PDF page 12]].

> (c) $A=O(B)$, $A=\Theta(B)$, and $\Omega(B)$

## Supplementary Explanation

**Answer.** $A=O(B)$, $A=\Omega(B)$, and $A=\Theta(B)$.

**Derivation/proof.** Let the unsubscripted logarithm have a fixed base $b>1$. By change of base, $\log_5 n=(\log_b n)/(\log_b5)$. Consequently $A/B=\log_b5$, a positive constant independent of n. This gives both a positive lower bound and a finite upper bound on the ratio; hence $A=\Theta(B)$ and both $A=O(B)$ and $A=\Omega(B)$ also hold.

Explicitly $B=\frac{\log_bn}{\log_b5}$. The ratio is a finite positive constant, so all applicable relations must be listed, including the full expression $A=\Omega(B)$.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

The printed 5 is a logarithm base, so change of base gives a positive constant ratio.
