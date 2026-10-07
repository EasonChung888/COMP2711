---
id: "Q-2021-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 2
question_number: "4(a)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Grouping finite subsets by their maximum yields finite blocks and covers the empty set separately."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 6
related_questions: ["[[Q-2021-MID-P04-b - Countability]]"]
---
# Q-2021-MID-P04-a

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

## Question

Show that $\{S\mid S\subseteq\mathbb N,|S|\text{ is finite}\}$ is countable.

Shared context: [[STEM-2021-MID-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=2|physical PDF page 2]].

> (a) Here is one enumeration method for $\{S\mid S\subseteq\mathbb N,|S|\text{ is finite}\}$. We first enumerate $\varnothing$. Then for $k=0,1,\ldots$, we enumerate all $S\subseteq\mathbb N$ such that $\max S=k$. For each $k$, there are finitely many such $S$, and we can enumerate them in any order.

## Supplementary Explanation

**Answer.** The family is countably infinite.

**Derivation/proof.** List the empty set first. For each natural k in increasing order, list every finite subset whose maximum is k. Each such block is finite because its elements come from the finite initial segment through k; if naturals begin at zero, the block has 2^k members. Every nonempty finite set has a finite maximum and appears in exactly one block, giving an enumeration. Singleton sets show the family is infinite.

Each group occurs after finitely many earlier entries. For naturals starting at zero, $k$ must be included and each of the other $k$ elements may be chosen freely, giving $2^k$ sets in the group.

To enumerate the family, list the empty set first. Then every nonempty finite subset has a maximum, so the enumeration covers it. The family is countably infinite.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Used by: [[Q-2021-MID-P04-b - Countability]]
