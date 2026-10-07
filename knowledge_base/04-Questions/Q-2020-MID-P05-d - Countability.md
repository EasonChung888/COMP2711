---
id: "Q-2020-MID-P05-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(d)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Functions - 函数]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Characteristic functions inject all natural-number subsets into the function space."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-MID-P05-b - Countability]]"]
---
# Q-2020-MID-P05-d

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Prerequisite context (editorial): [[Q-2020-MID-P05-b - Countability]]. The characteristic-function construction below uses the uncountability of $P(\mathbb N)$ proved in (b), not merely the infinitude of $\mathbb N$. 本题把每个自然数子集编码成函数，因此需要的是幂集不可数，而不只是底集合无限。

## Question

The set of all functions from $\mathbb N$ to $\mathbb N$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=3|physical PDF page 3]].

Uncountable.

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** Choose two distinct naturals a,b. For every subset S define $f_S(i)=a$ when $i\in S$, and b otherwise. Distinct subsets differ at some i and thus yield distinct functions. This injects the uncountable power set of the naturals into the function space, proving that the full function space is uncountable independently of whether zero is considered natural.

Any two distinct natural numbers suffice for the encoding, so no convention about whether zero is natural is needed.

Choose distinct naturals $a,b$ and define $f_S(i)=a$ for membership in $S$ and $f_S(i)=b$ otherwise. If $S\ne T$, a coordinate in their symmetric difference yields $f_S\ne f_T$. This injective embedding transfers uncountability to the function space.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Functions - 函数]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Prerequisite: [[Q-2020-MID-P05-b - Countability]]
