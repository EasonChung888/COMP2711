---
id: "Q-2021-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "8(b)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Oscillating Asymptotic Bounds - 振荡函数渐近界]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The comparison function stays above one half while sine remains bounded and repeatedly zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2021-MID-P08-b

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

$f(x)=2\sin(x),g(x)=|\cos(x)|+0.5$.

Shared context: [[STEM-2021-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=4|physical PDF page 4]].

> (b) (ii), $f(x)=O(g(x))$. We have $f(x)\le4g(x)$.

## Supplementary Explanation

**Answer.** (ii) only: $f=O(g)$.

**Derivation/proof.** For all real x, |f(x)|≤2 and g(x)≥1/2, so |f(x)|≤4g(x), proving O under magnitude-based bounds. At x=kπ, f(x)=0 while g(x)=3/2. These arbitrarily large zeros forbid a positive lower bound, hence Ω and Θ fail. The published selected option is also consistent with signed bounds.

The bound is $|f(x)|\le4g(x)$; at the zeros of $f$, $g(x)=1.5$. Therefore select only (ii).

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Oscillating Asymptotic Bounds - 振荡函数渐近界]]
- [[Asymptotic Bound Method - 渐近界方法]]
