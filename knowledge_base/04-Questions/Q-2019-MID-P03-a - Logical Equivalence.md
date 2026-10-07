---
id: "Q-2019-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "Denying the antecedent fails when p is false but q remains true."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P03-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=5]]

## Question

(a) $((p\to q)\land\neg p)\to\neg q$

Shared context: [[STEM-2019-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=5|physical PDF page 5]].

No. Set $p=F$ and $q=T$. We have $((F\to T)\land T)\to F\equiv T\to F\equiv F$.

## Supplementary Explanation

**Answer.** No; take $p=F,q=T$.

**Derivation/proof.** With $p=F,q=T$, the implication $p\to q$ is true and $\neg p$ is true, so the outer antecedent is true. But $\neg q=F$, making the full proposition $T\to F=F$. This is the invalid pattern of denying the antecedent.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
