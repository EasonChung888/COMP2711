---
id: "Q-2019-MID-P07-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Two uncountable real half-lines provide an uncountable remainder after deleting the positive half."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P07-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=9]]

## Question

(c) uncountable.

Shared context: [[STEM-2019-MID-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=9|physical PDF page 9]].

In each case, let us take $A$ to be the set of real numbers.
We can let $B$ be the set of positive real numbers. Then $A-B$ is the set of negative real numbers and $0$, which is certainly uncountable.

## Supplementary Explanation

**Answer.** $A=\mathbb R$, $B=(0,\infty)$; then $A-B=(-\infty,0]$.

**Derivation/proof.** The positive real interval $B$ is uncountable: for instance $(0,1)\subseteq B$ is uncountable. The whole real line $A$ is uncountable. The difference contains the negative interval $(-1,0)$, which is in bijection with $(0,1)$ by negation and hence uncountable. Thus the difference has the required cardinality.

The intervals $(0,1)\subseteq B$ and $(-1,0)\subseteq A-B$ independently establish the two required uncountability claims.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
