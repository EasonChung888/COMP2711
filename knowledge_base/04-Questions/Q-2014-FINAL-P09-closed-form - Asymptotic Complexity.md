---
id: "Q-2014-FINAL-P09-closed-form"
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
methods: ["[[Recursion-Tree Method - 递归树方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "The recurrence expansion requires summing a geometric progression whose branching factor and subproblem size produce different exponents."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P09-closed-form

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=13]].

## Question

Iterate the recurrence or use a recursion tree to find a closed-form expression for $T(n)$.

Shared context: [[STEM-2014-FINAL-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=13|PDF physical page 13]].

Let $n=2^i$. Iterating the recurrence, we get
$$\begin{aligned}
T(n)&=T(2^i)\\&=5T(2^{i-1})+2^{2i}\\&=5[5T(2^{i-2})+2^{2(i-1)}]+2^{2i}\\&=5^2T(2^{i-2})+\frac54 2^{2i}+2^{2i}\\&=5^3T(2^{i-3})+(\frac54)^2 2^{2i}+\frac54 2^{2i}+2^{2i}\\&\quad\vdots\\&=5^iT(2^{i-i})+(\frac54)^{i-1}2^{2i}+\ldots+\frac54 2^{2i}+2^{2i}\\&=5^i+2^{2i}\frac{(\frac54)^i-1}{\frac54-1}\\&=5\cdot5^i-4\cdot4^i\\&=5\cdot n^{\log_2 5}-4n^{\log_2 4}\\&=\Theta(n^{\log_2 5}).
\end{aligned}$$

## Supplementary Explanation

**Answer.** $T(n)=5n^{\log_25}-4n^2$.

**Derivation/proof.** Put $n=2^i$. Expansion gives $T(2^i)=5^i+4^i\sum_{j=0}^{i-1}(5/4)^j=5^i+4^i[(5/4)^i-1]/(1/4)=5\cdot5^i-4\cdot4^i$.

At level $j$, the work is $5^j(n/2^j)^2=n^2(5/4)^j$. There are $i$ internal levels. Substituting $5^i=n^{\log_2 5}$ gives $5n^{\log_2 5}-4n^2$, also equal to one at $n=1$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recursion-Tree Method - 递归树方法]]
