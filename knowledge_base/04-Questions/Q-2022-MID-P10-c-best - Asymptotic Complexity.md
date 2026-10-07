---
id: "Q-2022-MID-P10-c-best"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "The first quartile probe can equal the target and terminate immediately."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-c-best

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the best-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-c - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=5|physical PDF page 5]].

> (c) The best-case running time is $\Theta(1)$. Since each iteration reduces $j-i$ by $1/4$, the worst-case running time is $\Theta(\log_{3/4}\frac1n)=\Theta(\log n)$.

## Supplementary Explanation

**Answer.** $\Theta(1)$.

**Derivation/proof.** The first probe is m=floor(3/4+n/4) with i=1,j=n. Choose x=a_m. The equality branch returns at that first iteration, after only constant initialization and arithmetic. The position being a quartile rather than the median does not prevent an immediate successful match, so the best case is constant.

The first probe is $m=\lfloor3/4+n/4\rfloor$; choose $x=a_m$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
