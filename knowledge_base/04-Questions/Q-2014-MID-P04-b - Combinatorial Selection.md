---
id: "Q-2014-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(b)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The twelve-letter word has four l letters and three each of a and o, requiring three repeated-letter factorial divisors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P04-b

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=6]].

## Question

(b) How many anagrams does the word “lollapalooza” have?

Explain your answers.

Shared context: [[STEM-2014-MID-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-midterm.pdf#page=6|PDF physical page 6]].

(b) This is the same as the number of ways to label 12 positions according to the following rules: Label 3 positions with 'a', 4 positions with 'l', 3 positions with 'o', 1 position with 'p', and 1 position with 'z'. So the answer is:
$$\frac{12!}{3!4!1!3!1!}=?$$

## Supplementary Explanation

**Answer.** $12!/(4!3!3!)=554400$.

**Derivation/proof.** The twelve letters have multiplicities $l:4$, $a:3$, $o:3$, $p:1$, $z:1$. Divide $12!$ by factorials of repeated-letter multiplicities.

Temporarily labelling repeated letters gives $12!$ permutations. Removing the labels identifies $4!3!3!$ permutations for each word, giving $12!/(4!3!3!)=554400$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
