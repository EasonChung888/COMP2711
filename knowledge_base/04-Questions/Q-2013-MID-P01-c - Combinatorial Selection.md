---
id: "Q-2013-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The strict red-majority constraint reduces the five-egg selection to exactly the red counts three and four, then requires a disjoint case total."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P01-c

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=3]].

## Question

(c) What is the answer to (a) if the number of red eggs chosen must be more than the total number of green and purple eggs?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=3|PDF physical page 3]].

(c) Here are are possible choice plans that satisfy the requirement:

3 red, 2 green or purple

4 red, 1 green or purple

So, the answer is:
$$\binom43\binom82+\binom44\binom81.$$

## Supplementary Explanation

**Answer.** $\binom{4}{3}\binom{8}{2}+\binom{4}{4}\binom{8}{1}=120$.

**Derivation/proof.** If $r$ red eggs are selected then $r>5-r$, hence $r=3$ or $4$. The two disjoint cases are $(r,5-r)=(3,2)$ and $(4,1)$, producing the displayed sum.

The disjoint cases contribute $4\cdot28=112$ and $8$, giving $112+8=120$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
