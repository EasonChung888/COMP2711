---
id: "Q-2014-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The group restriction is handled by choosing feasible group-count splits, not by multiplying one global combination blindly."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P01-b

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=3]].

## Question

(b) In how many ways can a voter choose 5 candidates such that at least 3 candidates from Group A are chosen?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-midterm.pdf#page=3|PDF physical page 3]].

(b) We partition this into two cases: choosing either 3 or 4, from group A and, respectively, 2 or 1 candidates from the combination of groups B and C. This is
$$\binom43\binom52+\binom44\binom51=4\cdot10+1\cdot5=45.$$

## Supplementary Explanation

**Answer.** $\binom43\binom52+\binom44\binom51=45$.

**Derivation/proof.** The possible Group-A counts are three or four. Select the A candidates and fill the remaining places from the five candidates not in A; the cases are disjoint.

The cases contribute $40$ and $5$, giving $40+5=45$.

The three-A case alone contributes $\binom43\binom52=40$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
