---
id: "Q-2018-FINAL-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 14
solution_page: [15]
question_number: "10(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "Square dimensions make all three independent loop ranges equal n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P10-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=15]]

## Question

b) What is the $O(\cdot)$ asymptotic complexity of the algorithm when given two matrices both of which are of size $n\times n$?

Shared context: [[STEM-2018-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=15|physical PDF page 15]].

$O(n^3)$.

## Supplementary Explanation

**Answer.** $O(n^3)$, tightly $\Theta(n^3)$.

**Derivation/proof.** There are $n$ choices of row, $n$ choices of column, and $n$ inner iterations per output entry. Thus the innermost constant-cost multiply-and-add executes $n^3$ times. The $n^2$ initializations and loop overhead are no larger in order, so the total is $\Theta(n^3)$.

The three nested loops enumerate the output row, output column, and summation index. They perform $n\cdot n\cdot n=n^3$ multiplications in the square case.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
