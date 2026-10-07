---
id: "Q-2014-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Counting the word's anagrams requires dividing by factorials for repeated letters rather than treating all positions as distinct."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P04-a

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=6]].

## Question

(a) How many anagrams does the word “java” have?

Explain your answers.

Shared context: [[STEM-2014-MID-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-midterm.pdf#page=6|PDF physical page 6]].

(a) This is the same as the number of ways to label 4 positions according to the following rules: Label 2 positions with 'a', 1 positions with 'j', and 1 position with 'v'. So, the answer is:
$$\frac{4!}{2!1!1!}=12.$$

## Supplementary Explanation

**Answer.** $4!/2!=12$.

**Derivation/proof.** There are four positions with two indistinguishable a's. Divide the $4!$ permutations of labelled letters by the $2!$ swaps that do not change the word.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
