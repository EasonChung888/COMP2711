---
id: "Q-2017-FINAL-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Logarithmic, polynomial, and exponential comparisons distinguish n times 2^n from 3^n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2017-FINAL-P02

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=4]]

## Question

Arrange the following functions in a list so that each is big-$O$ of the next one in the list: $n^3+88n^2+3,\log n^4,3^n,n^2\log n,n\cdot2^n,10000$.

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=4|physical PDF page 4]].

$10000,\log n^4,n^2\log n,n^3+88n^2+3,n\cdot2^n,3^n$.

## Supplementary Explanation

**Answer.** $10000,\log n^4,n^2\log n,n^3+88n^2+3,n2^n,3^n$.

**Derivation/proof.** Here $\log n^4=4\log n$ and the cubic polynomial is $\Theta(n^3)$. Constants precede logarithms, and $\log n/n\to0$ shows $n^2\log n=o(n^3)$. Every fixed-degree polynomial is dominated by $2^n$. Finally $(n2^n)/3^n=n(2/3)^n\to0$, proving the last comparison.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
