---
id: "Q-2017-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Selecting seven 3x factors and five negative y factors determines both the sign and power of three."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P08-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=10]]

## Question

(a) Find the coefficient of $x^7y^5$ in the expansion of $(3x-y)^{12}$.

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=10|physical PDF page 10]].

$-\binom{12}{7}3^7$.

## Supplementary Explanation

**Answer.** $-\binom{12}{7}3^7$.

**Derivation/proof.** To obtain $x^7y^5$, choose $3x$ from seven of the twelve factors and $-y$ from the other five. There are $\binom{12}{7}$ choices of the seven positions. Their scalar contribution is $3^7(-1)^5=-3^7$, giving the stated coefficient.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]
