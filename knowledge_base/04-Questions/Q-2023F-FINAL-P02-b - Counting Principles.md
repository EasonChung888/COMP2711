---
id: "Q-2023F-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 4
question_number: "2(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "A carry from doubling any even digit makes the next doubled digit odd, forcing every original digit into 0,2,4."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4,5]
marks: 3
---
# Q-2023F-FINAL-P02-b

## Source

[[2023 Fall Final]]; printed item 2(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=4]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=5]]

## Question

How many 4-digit positive integers $a$ exists such that both $a$ and $2\times a$ have only even digits? For example, 2004 is a valid number, but $a=4282$ is not because $2a=2\cdot4282=8564$ which contains the odd digit “5”. (Notice that the leftmost digit in a 4-digit number cannot be 0)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=4|physical PDF page 4]], [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=5|physical PDF page 5]].

> (b) Notice that when we have a carryover thing it changes the oddity of the next digit. So for example if we have a valid number $a$ like $a=2822$. When we multiply it by $2$ we get the invalid number $5644$ and that is because we got a carryover when multiplying $8$ by $2$. So in order to have a valid number $a$ such that $2a$ is also valid, they should not produce any carryover value. Which means they can be either $0,2,4$. So the number $abcd$ can have $2\times3\times3\times3=54$ possible options.

## Supplementary Explanation

**Answer.** $2\cdot3^3=54$.

**Derivation/proof.** Each digit of a is in $\{0,2,4,6,8\}$. If any digit is 6 or 8, doubling generates a carry of 1. At the next position, twice an even digit plus this carry is odd; if the carry exits the leading position, it becomes the odd leading digit 1. Hence no carry is allowed, so all four digits must lie in $\{0,2,4\}$. Conversely, these digits generate no carries and double to even digits. The leading digit has two choices, 2 or 4; each remaining digit has three, giving 54.

A carry of one makes the next doubled digit odd; if it exits the leading position it creates the odd leading digit $1$. Hence every digit belongs to $\{0,2,4\}$, with only $2,4$ allowed first, giving $2\cdot3\cdot3\cdot3=54$. Conversely, these choices never generate a carry and both numbers have only even digits.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]

- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]

A carry from doubling any even digit makes the next doubled digit odd, forcing every original digit into 0,2,4.
