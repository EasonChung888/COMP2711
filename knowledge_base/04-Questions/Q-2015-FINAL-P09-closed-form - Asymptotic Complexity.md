---
id: "Q-2015-FINAL-P09-closed-form"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 15
solution_page: [16]
question_number: "9"
year: 2015
term: "fall"
exam_type: "final"
marks: 5
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recursion-Tree Method - 递归树方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Expansion has a level-cost ratio of two and a leaf term of n squared, both of which must survive simplification."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P09-closed-form

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=15]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=16]]

## Question

find a closed-form expression for it,

Shared context: [[STEM-2015-FINAL-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=16|PDF physical page 16]].

According to the above expression of $A\cdot B$,
$$T(n)=4T(\frac n2)+cn$$
Iterating the recurrence, we get:
$$\begin{aligned}
T(n)&=T(2^j)\\&=4T(2^{j-1})+2^jc\\&=4(4T(2^{j-2})+2^{j-1}c)+2^jc\\&=4^2T(2^{j-2})+2\cdot2^jc+2^jc\\&=4^2(4T(2^{j-3})+2^{j-2}c)+2\cdot2^jc+2^jc\\&=4^3T(2^{j-3})+2^2\cdot2^jc+2\cdot2^jc+2^jc\\&\quad\vdots\\&=4^jT(1)+2^{j-1}\cdot2^jc+\ldots+2\cdot2^jc+2^jc\\&=4^j+2^jc(2^j-1)\\&=(1+c)n^2-cn\\&=\Theta(n^2)
\end{aligned}$$

## Supplementary Explanation

**Answer.** $T(n)=(1+c)n^2-cn$.

**Derivation/proof.** For $j=\log_2n$, iteration gives $T(n)=4^jT(1)+cn\sum_{i=0}^{j-1}2^i=n^2+cn(n-1)=(1+c)n^2-cn$. Substitution into $4T(n/2)+cn$ reproduces the expression, and at $n=1$ it equals 1.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Recursion-Tree Method - 递归树方法]]
- [[Recurrence-Solving Method - 递推求解法]]
