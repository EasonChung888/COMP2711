---
id: "Q-2024F-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 10
question_number: "5(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use the same-parity endpoints to uniquely determine the middle of a three-element arithmetic progression."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 6
---
# Q-2024F-MID-P05-b

## Source

[[2024 Fall Midterm]]; printed item 5(b); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10]]

## Question

(b) In how many ways we can pick 3 different numbers from $\{1,2,3,\ldots,2n\}$ such that they form arithmetic sequence? Explain your solution. (Arithmetic sequence is a sequence of numbers such that the difference from any succeeding term to its preceding term remains constant throughout the sequence, For example 1, 4, 7 is an arithmetic sequence but 1, 5, 10 is not)
Hint: Consider your sorted sequence to be $a,b,c$. What can you say about the oddity of $a$ and $c$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10|physical PDF page 10]].

> (b) As $b=\frac{a+c}2$, it means $a+c$ must be even. So they are either both odd or both even. $b$ can be uniquely calculated when we have both $a$ and $c$. Picking two different odd numbers can be done in $\binom n2$ ways and picking 2 different even numbers also can be done in $\binom n2$ ways. So the total possible ways are $\binom n2+\binom n2=2\binom n2$.

## Supplementary Explanation

**Answer.** $2\binom n2=n(n-1)$.

**Derivation/proof.** Write $a<b<c$. The condition $b-a=c-b$ is equivalent to $b=(a+c)/2$, so the endpoints have the same parity. There are $n$ odd and $n$ even numbers. Choose two odd endpoints in $\binom n2$ ways or two even endpoints in $\binom n2$ ways. Each pair determines a unique integer midpoint $b$, strictly between them and still in $1,\ldots,2n$. Conversely, each valid three-element subset determines a unique endpoint pair. Thus the count is $2\binom n2$, without a permutation factor.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Use the same-parity endpoints to uniquely determine the middle of a three-element arithmetic progression.
