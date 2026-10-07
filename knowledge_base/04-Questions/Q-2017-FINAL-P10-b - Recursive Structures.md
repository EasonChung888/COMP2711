---
id: "Q-2017-FINAL-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 14
solution_page: [14]
question_number: "10(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Recursive Structures - 递归结构]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Structural Induction Method - 结构归纳法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "A single invariant survives all three allowed increments to the first coordinate."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2017-FINAL-P10-b

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=14]]

## Question

(b) Use structural induction to prove that $a\le2b$ whenever $(a,b)\in S$.

Shared context: [[STEM-2017-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=14|physical PDF page 14]].

Inductive Hypothesis: $P(a,b):a\le2b$ whenever $(a,b)\in S$.
Basis Step: $P(0,0):0\le0$.
Recursive Step:
$a\le2b$ (inductive hypothesis).
$a\le2b\le2b+2\le2(b+1)$.
$P(a,b+1)$ is true.
$a\le2b$ (inductive hypothesis).
$a+1\le a+2\le2b+2\le2(b+1)$.
$P(a+1,b+1)$ is true.
$a\le2b$ (inductive hypothesis).
$a+2\le2b+2\le2(b+1)$.
$P(a+2,b+1)$ is true.

## Supplementary Explanation

**Answer.** Every generated pair satisfies $a\le2b$.

**Derivation/proof.** The basis pair satisfies $0\le2\cdot0$. Suppose $(a,b)$ satisfies $a\le2b$. Every constructor produces $(a+j,b+1)$ for $j\in\{0,1,2\}$. Then $a+j\le2b+2=2(b+1)$. Thus every constructor preserves the invariant. Since $S$ contains only pairs finitely generated from the basis, structural induction proves the claim.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Recursive Structures - 递归结构]]
- [[Mathematical Induction - 数学归纳法]]
- [[Structural Induction Method - 结构归纳法]]
- [[Induction Proof Method - 归纳证明法]]
