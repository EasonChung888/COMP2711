---
id: "Q-2013-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Choosing five eggs from the twelve available eggs tests whether the unrestricted selection is recognized before colour constraints are introduced."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P01-a

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=3]].

## Question

(a) In how many different ways can the child choose 5 eggs?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=3|PDF physical page 3]].

(a) There are totally 12 eggs. The child chooses 5 of them. The number of different ways he can do that is:
$$\binom{12}{5}.$$

## Supplementary Explanation

**Answer.** $\binom{12}{5}=792$.

**Derivation/proof.** A selection is an unordered 5-subset of the twelve labelled eggs, so the binomial rule gives $\binom{12}{5}=792$.

$\binom{12}{5}=12\cdot11\cdot10\cdot9\cdot8/(5\cdot4\cdot3\cdot2\cdot1)=792$. Dividing by $5!$ removes the different orderings of the same selected set.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
