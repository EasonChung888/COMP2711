---
id: "Q-2021-MID-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "8(c)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Oscillating Asymptotic Bounds - 振荡函数渐近界]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The cosine envelope supplies a lower bound but its zeros prevent a reverse upper bound."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2021-MID-P08-c

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

$f(x)=0.5x,g(x)=x|\cos(x)|$.

Shared context: [[STEM-2021-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=4|physical PDF page 4]].

> (c) (iii), $f(x)=\Omega(g(x))$. $f(x)\ge0.5g(x)$.

## Supplementary Explanation

**Answer.** (iii) only: $f=\Omega(g)$.

**Derivation/proof.** For positive x, |cos x|≤1 gives g(x)≤x=2f(x), so f≥g/2 and Ω holds. At x=π/2+kπ, g(x)=0 but f(x)>0; these arbitrarily large x prevent f≤Cg for any fixed C. Thus O fails and so does Θ.

We have $g(x)\le x=2f(x)$, while $x=\pi/2+k\pi$ defeats the upper bound. Therefore select only (iii).

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Oscillating Asymptotic Bounds - 振荡函数渐近界]]
- [[Asymptotic Bound Method - 渐近界方法]]
