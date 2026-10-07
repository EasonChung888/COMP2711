---
id: "Q-2014-FINAL-P09-theta"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 13
solution_page: [13]
question_number: "9"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "The Theta classification follows by comparing the two terms in the derived formula, including the lower-bound contribution."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P09-theta

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=13]].

## Question

Then simplify the closed-form expression using the big $\Theta$ notation.

Shared context: [[STEM-2014-FINAL-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=13|PDF physical page 13]].

Let $n=2^i$. Iterating the recurrence, we get
$$\begin{aligned}
T(n)&=T(2^i)\\&=5T(2^{i-1})+2^{2i}\\&=5[5T(2^{i-2})+2^{2(i-1)}]+2^{2i}\\&=5^2T(2^{i-2})+\frac54 2^{2i}+2^{2i}\\&=5^3T(2^{i-3})+(\frac54)^2 2^{2i}+\frac54 2^{2i}+2^{2i}\\&\quad\vdots\\&=5^iT(2^{i-i})+(\frac54)^{i-1}2^{2i}+\ldots+\frac54 2^{2i}+2^{2i}\\&=5^i+2^{2i}\frac{(\frac54)^i-1}{\frac54-1}\\&=5\cdot5^i-4\cdot4^i\\&=5\cdot n^{\log_2 5}-4n^{\log_2 4}\\&=\Theta(n^{\log_2 5}).
\end{aligned}$$

## Supplementary Explanation

**Answer.** $T(n)=\Theta(n^{\log_25})$.

**Derivation/proof.** Since $\log_25>2$, the term $5n^{\log_25}$ dominates $4n^2$ in the closed form, leaving the stated tight order. Indeed, $n^{\log_2 5}\le5n^{\log_2 5}-4n^2\le5n^{\log_2 5}$ for $n\ge1$.

Since $\log_2 5>2$, the upper estimate is $T(n)\le5n^{\log_2 5}$ and the lower estimate is $T(n)\ge n^{\log_2 5}$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
