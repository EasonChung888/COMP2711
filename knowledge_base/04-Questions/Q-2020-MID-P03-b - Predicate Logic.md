---
id: "Q-2020-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(b)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Factoring xy minus x minus y converts the strict bounds above two into a positive remainder."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-b

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x\forall y((x>2\land y>2)\to(xy>x+y))$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=2|physical PDF page 2]].

True. When $y>2$, $y/(y-1)<2$. So, $x>y/(y-1)$. This implies $x(y-1)>y$, and thus $xy>x+y$.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** If either hypothesis fails the implication is true. Otherwise $x-1>1$ and $y-1>1$, so $(x-1)(y-1)>1$. Expanding gives $xy-x-y+1>1$, hence $xy>x+y$. The strict inequalities ensure a strict final result, including values arbitrarily close to 2.

Under the two hypotheses, $x-1>1,y-1>1$. Their product is greater than one, and expansion and subtraction then give $xy>x+y$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
