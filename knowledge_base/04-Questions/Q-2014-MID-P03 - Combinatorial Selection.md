---
id: "Q-2014-MID-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3"
year: 2014
term: "fall"
exam_type: "midterm"
marks: 11
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The requested identity needs a counting proof that gives the two sides distinct interpretations of the same selection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P03

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=5]].

## Question

Give a combinatorial proof of the identity, for all $n\ge13$.
$$\binom n4\binom{n-4}6\binom{n-10}3=\binom n6\binom{n-6}3\binom{n-9}4.$$
Note: An algebraic proof of this identity will not be accepted as a solution.

## Official Answer

Source: [[knowledge_base/past_paper/2014-midterm.pdf#page=5|PDF physical page 5]].

Consider the problem of “how to color $n$ items so that 4 are red, 6 are green, 3 are blue and the remaining $n-13$ are yellow.

The left hand side of the inequality obviously counts this. Notice that the problem is the same if we change the order in which we ask the question.

Consider the problem of how to color $n$ items so that 6 are green, 3 are blue, 4 are red and the remaining $n-13$ are yellow. This is what the right hand side of the equation is counting, so the two sides are the same.

## Supplementary Explanation

**Answer.** Both sides count colourings with 4 red, 6 green, 3 blue, and $n-13$ yellow items.

**Derivation/proof.** On the left choose red then green then blue; on the right choose green then blue then red. Each procedure selects exactly the same labelled colour assignment, so the counts agree.

The two orders give $\binom n4\binom{n-4}6\binom{n-10}3$ and $\binom n6\binom{n-6}3\binom{n-9}4$. Every final colouring occurs exactly once in each process; $n\ge13$ ensures all selections are possible.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
