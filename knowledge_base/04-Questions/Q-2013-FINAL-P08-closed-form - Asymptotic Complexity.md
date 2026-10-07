---
id: "Q-2013-FINAL-P08-closed-form"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 11
solution_page: [11]
question_number: "8"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Recursion-Tree Method - 递归树方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Solving the divide-by-two recurrence requires summing the level costs with ratio three quarters and converting the depth back to n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P08-closed-form

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=11]].

## Question

Iterate the recurrence or use a recursion tree to find a closed-form expression for $T(n)$.

Shared context: [[STEM-2013-FINAL-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=11|PDF physical page 11]].

Iterating the recurrence, we get:
$$\begin{aligned}
T(n)&=T(2^j)\\
&=3T(2^{j-1})+2^{2j}\\
&=3(3T(2^{j-2})+2^{2(j-1)})+2^{2j}\\
&=3^2T(2^{j-2})+\frac34 2^{2j}+2^{2j}\\
&=3^2(3T(2^{j-3})+2^{2(j-2)})+\frac34 2^{2j}+2^{2j}\\
&=3^3T(2^{j-3})+(\frac34)^2 2^{2j}+\frac34 2^{2j}+2^{2j}\\
&\quad\vdots\\
&=3^jT(1)+(\frac34)^{j-1}2^{2j}+\cdots+\frac34 2^{2j}+2^{2j}\\
&=3^j+2^{2j}\frac{1-(3/4)^j}{1-3/4}\\
&=3^j+4\cdot2^{2j}-4\cdot3^j=4\cdot2^{2j}-3\cdot3^j\\
&=4n^2-3n^{\log_2 3}\\
&=\Theta(n^2).
\end{aligned}$$

## Supplementary Explanation

**Answer.** $T(n)=4n^2-3n^{\log_2 3}$.

**Derivation/proof.** Write $n=2^j$. Expansion gives $T(2^j)=3^j+2^{2j}\sum_{i=0}^{j-1}(3/4)^i=3^j+4\cdot2^{2j}-4\cdot3^j=4n^2-3n^{\log_2 3}$.

At level $i$, the $3^i$ subproblems each cost $(n/2^i)^2$, giving $n^2(3/4)^i$. At $j=0$, the sum is empty and the formula gives $T(1)=1$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recursion-Tree Method - 递归树方法]]
