---
id: "Q-2020-MID-P03-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(e)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The existential implication is vacuously true at x=0, making its negation false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-e

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x((x>1)\to(x^2>x))\leftrightarrow\neg\exists x((x>1)\to(x^2\le x))$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=2|physical PDF page 2]].

False.
$$\begin{aligned}\neg\exists x((x>1)\to(x^2\le x))&\equiv\forall x\neg((x>1)\to(x^2\le x))\\&\equiv\forall x\neg(\neg(x>1)\lor(x^2\le x))\\&\equiv\forall x((x>1)\land(x^2>x)),\end{aligned}$$
which is false when $x\le1$. However, $\forall x((x>1)\to(x^2>x))$ is true.

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** The left side is true: for x>1, multiplying x>1 by positive x gives $x^2>x$. On the right, x=0 makes the antecedent of the existential implication false, so that implication is true. Hence its existential quantification is true and its negation false. The biconditional is therefore $T\leftrightarrow F$.

The left side is true, while the negated existential on the right is false because its existential has the witness zero. Therefore $T\leftrightarrow F=F$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
