---
id: "Q-2018-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "The outer implication fails when p is false but the nested antecedent is true."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P02-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

## Question

(b) $((p\to q)\to r)\to p$

Shared context: [[STEM-2018-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=4|physical PDF page 4]].

Not a tautology. It is false when $p$ is false, $q$ is true and $r$ is True:
$$\begin{aligned}((p\to q)\to r)\to p&\equiv((F\to T)\to T)\to F\\&\equiv(T\to T)\to F\\&\equiv T\to F\\&\equiv F.\end{aligned}$$

## Supplementary Explanation

**Answer.** Not a tautology: $p=F,q=T,r=T$.

**Derivation/proof.** At this valuation, $p\to q=F\to T=T$, then $(p\to q)\to r=T\to T=T$. The outer implication is consequently $T\to F=F$. Both levels of parentheses are essential to this evaluation.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
