---
id: "Q-2023S-MID-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 5
question_number: "2(d)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","counterexample"]
difficulty: 3
difficulty_basis: "The right formula requires one non-P witness and universal Q, whereas the left requires non-P for every element."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 3
---
# Q-2023S-MID-P02-d

## Source

[[2023 Spring Midterm]]; printed item 2(d); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

## Question

(d) $\forall x(\neg P(x)\land Q(x))$ and $\neg\forall x\exists y(P(x)\lor\neg Q(y))$

Shared printed context: ![[STEM-2023S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5|physical PDF page 5]].

> (d) Not equivalent. Counterexample: $P(x):x>0$, $Q(x):x^2\ge0$. L.H.S is false but R.H.S is true.

## Supplementary Explanation

**Answer.** Not equivalent. Take domain $\mathbb R$, $P(x):x>0$, and $Q(x):x^2\ge0$.

**Derivation/proof.** On this domain $Q$ is true for every element, whereas $P(1)$ is true and $P(0)$ is false. The left formula is false at $x=1$. For the right formula, at $x=0$ the inner expression $P(0)\lor\neg Q(y)$ is false for every $y$; thus $\forall x\exists y(P(x)\lor\neg Q(y))$ is false and its negation is true. The two formulas therefore disagree under the same interpretation.

Here $P(1)$ is true and $P(0)$ is false. The left and right formulas are false and true, respectively, under one common interpretation.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]

The right formula requires one non-P witness and universal Q, whereas the left requires non-P for every element.
