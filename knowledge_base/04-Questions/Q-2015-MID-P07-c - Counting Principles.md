---
id: "Q-2015-MID-P07-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "7(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The sharp pigeonhole threshold needs both a maximum distribution below the target and the extra coupon that forces it."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P07-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

## Question

(c) Suppose you have an unlimited number of cash coupons, instead of $kn$ cash coupons. Each member may receive 0 or more cash coupons, and you distribute the cash coupons randomly. For each rank $r$, let $t_r$ be the total number of coupons members at the rank receive altogether. What is the minimum number of cash coupons you will need to distribute so that there is at least one rank $r$ for which $t_r\ge2k$?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=12|PDF physical page 12]].

(c) $(2k-1)n+1$. This is the same as finding the minimum number $x$ of pigeons such that at least one of the $n$ pigeonholes contain at least $2k$ objects. By the pigeonhole principle, find the minimum $x$ such that $\lceil x/n\rceil=2k$. It is easy to see that this equality holds for $x\in\{(2k-1)n+1,\ldots,2kn\}$. Thus, the minimum value of $x=(2k-1)n+1$.

## Supplementary Explanation

**Answer.** $n(2k-1)+1$.

**Derivation/proof.** A distribution with every $t_r\le2k-1$ contains at most $n(2k-1)$ coupons. Therefore $n(2k-1)+1$ forces some $t_r\ge2k$. Sharpness follows by giving exactly $2k-1$ coupons to each rank, which avoids the event using one fewer coupon.

The sharpness construction is admissible because a single member of each rank may receive all $2k-1$ coupons; members are allowed any nonnegative number.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
