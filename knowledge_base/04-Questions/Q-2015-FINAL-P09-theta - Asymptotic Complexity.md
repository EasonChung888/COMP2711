---
id: "Q-2015-FINAL-P09-theta"
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
marks: 2
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "The exact quadratic expression must be bounded above and below with constants independent of n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P09-theta

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=15]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=16]]

## Question

and simplify the closed-form expression using the big $\Theta$ notation.

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

**Answer.** $T(n)=\Theta(n^2)$.

**Derivation/proof.** From $T(n)=n^2+cn(n-1)$ and fixed $c\ge0$, for $n\ge1$ we have $n^2\le T(n)\le(1+c)n^2$. These positive constant bounds prove the tight quadratic order.

The leaf work alone gives $T(n)\ge n^2$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
