---
id: "Q-2023F-MID-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 7
question_number: "3(c)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Countably many finite integer coefficient lists describe the polynomials, each of which contributes finitely many roots."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 3
---
# Q-2023F-MID-P03-c

## Source

[[2023 Fall Midterm]]; printed item 3(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

This is the printed 3(c) bonus item, worth 3 marks. The proof uses the at-most-countable union theorem directly; it does not depend on the ambiguous infinite wording quarantined in 3(b)(i).

## Question

An algebraic number is a number that is a root of a non-zero polynomial in one variable with integer coefficients. As an example, $(1+\sqrt5)/2$ is an algebraic number, because it is a root of the polynomial $x^2-x-1$. Or, the complex number $i+1$ is an algebraic number as it is a root of $x^4+4$. Briefly argue why we have countably many algebraic numbers.

Hint: Try to think about how many polynomials exist and how many roots each one has. You may use the result of any of (b) as well.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7|physical PDF page 7]].

> (c) You can express the set of algebraic numbers as a countable union of finite sets.

## Supplementary Explanation

**Answer.** The algebraic numbers form a countably infinite set.

**Derivation/proof.** For every degree d, a polynomial is specified by a tuple $(a_0,\ldots,a_d)\in\mathbb Z^{d+1}$ with $a_d\ne0$, and finite integer tuples form a countable set. Taking the union over nonnegative d leaves countably many nonzero polynomials. Each degree-d polynomial has at most d distinct complex roots. Thus the algebraic numbers are a countable union of finite root sets, hence at most countable. Every integer k is a root of $x-k$, so the set is infinite and therefore countably infinite.

The nonzero condition is essential: the zero polynomial would make every complex number a root.

A degree-$d$ nonzero polynomial has at most $d$ distinct roots.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Countably many finite integer coefficient lists describe the polynomials, each of which contributes finitely many roots.
