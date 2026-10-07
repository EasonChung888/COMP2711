---
id: "Q-2013-MID-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3"
year: 2013
term: "spring"
exam_type: "midterm"
marks: 10
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "A combinatorial proof must partition the same two-person selection by whether both, one, or neither selected person lies in the first group."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P03

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=5]].

## Question

Let $n$ be a positive integer. Give a combinatorial proof of the following equation:
$$\binom{2n}{2}=2\binom n2+n^2.$$
Note: An algebraic proof will not be accepted as a correct solution.

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=5|PDF physical page 5]].

- Left side: select two items from $2n$ item.
- Right side: split $2n$ items into left half and right half each contain $n$ items. We have $\binom n2$ ways to select two items both are in the left half, $\binom n2$ ways to select two items both are in the right half, and $n^2$ ways to select two items such that one in left half and the other in right half. That's all possible cases, so the number of ways to select two items from $2n$ items is $2\binom n2+n^2$.

Both left and right hand side are counting the number of ways to select two items from $2n$ items, so they are the same.

## Supplementary Explanation

**Answer.** Both sides count 2-element selections from two labelled groups of $n$ objects.

**Derivation/proof.** Partition $2n$ objects into left and right groups of size $n$. A pair lies wholly left ($\binom n2$ choices), wholly right ($\binom n2$ choices), or has one object in each group ($n^2$ choices). These cases are exhaustive and disjoint, proving the identity.

Direct counting gives $\binom{2n}{2}$, so $\binom{2n}{2}=2\binom n2+n^2$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
