---
id: "Q-2020-FINAL1-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 5
question_number: "6(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "The double coefficient loop dominates the linear initialization and output loops."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 2
related_questions: ["[[Q-2020-FINAL1-P06-b - Asymptotic Complexity]]"]
---
# Q-2020-FINAL1-P06-a

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=5]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=5]]

## Question

Algorithm 1 computes the multiplication of two polynomials with degree $m$ and $n$ respectively. What is its time complexity? Write your answer in the best big-$O$ notation with respect to $m$ and $n$.

Shared context: [[STEM-2020-FINAL1-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=5|physical PDF page 5]].

The time complexity of algorithm 1 is $O(mn)$.

## Supplementary Explanation

**Answer.** $O(mn)$ as both degrees grow; more uniformly $\Theta((m+1)(n+1))$ also covers degree zero.

**Derivation/proof.** The coefficient reads cost Θ(m+n+2), and zeroing/output construction cost Θ(m+n+1). The nested loop performs exactly (m+1)(n+1) coefficient multiply-adds. This product dominates the linear terms, giving Θ((m+1)(n+1)) in the source's unit-cost coefficient-operation model. For m,n≥1 this is Θ(mn), whose tight big-O answer is O(mn).

For $m,n\ge1$, the exact product count $(m+1)(n+1)$ is between $mn$ and $4mn$. Thus the stated $\Theta(mn)$ simplification applies to positive degrees; allowing degree zero requires the unsimplified expression.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

- Used by: [[Q-2020-FINAL1-P06-b - Asymptotic Complexity]]
