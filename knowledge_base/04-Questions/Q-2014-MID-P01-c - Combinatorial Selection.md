---
id: "Q-2014-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Five feasible positive group-count triples satisfy the capacities four, three, and two, and their separate binomial products must be summed."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P01-c

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=3]].

## Question

(c) In how many ways can a voter choose 5 candidates such that at least 1 candidate from each group is chosen?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-midterm.pdf#page=3|PDF physical page 3]].

(c) In this case we need to partition into all the possible scenarios of choosing from $(A,B,C)$, which are $(1,2,2),(1,3,1),(2,1,2),(2,2,1),(3,1,1)$. This gives
$$\binom41\binom32\binom22+\binom41\binom33\binom21+\binom42\binom31\binom22+\binom42\binom32\binom21+\binom43\binom31\binom21$$
or
$$4\cdot3\cdot1+4\cdot1\cdot2+6\cdot3\cdot1+6\cdot3\cdot2+4\cdot3\cdot2=98$$

## Supplementary Explanation

**Answer.** $98$.

**Derivation/proof.** The positive triples $(A,B,C)$ summing to five within capacities $(4,3,2)$ are $(1,2,2),(1,3,1),(2,1,2),(2,2,1),(3,1,1)$. Summing the corresponding products of binomial coefficients gives $12+8+18+36+24=98$.

For a triple $(a,b,c)$, the count is $\binom4a\binom3b\binom2c$. The five cases are mutually exclusive and cover all choices.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
