---
id: "Q-2023S-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 12
question_number: "8(b)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Subtracting the linear exponents reveals the exponentially vanishing ratio."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 2
---
# Q-2023S-MID-P08-b

## Source

[[2023 Spring Midterm]]; printed item 8(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

## Question

(b) $A=2^{2n}$, $B=2^{3n}$;

Shared printed context: ![[STEM-2023S-MID-P08 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12|physical PDF page 12]].

> (b) $A=O(B)$

## Supplementary Explanation

**Answer.** $A=O(B)$ only.

**Derivation/proof.** The ratio is $A/B=2^{2n-3n}=2^{-n}$, which tends to zero. It is bounded above for all positive n, establishing $A=O(B)$. For any proposed constant $c>0$, sufficiently large n has $2^{-n}<c$, so $A\ge cB$ cannot hold eventually. Therefore neither the Omega nor the Theta relation is valid.

The absence of a positive eventual lower bound rules out $\Omega$ and hence $\Theta$.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Subtracting the linear exponents reveals the exponentially vanishing ratio.
