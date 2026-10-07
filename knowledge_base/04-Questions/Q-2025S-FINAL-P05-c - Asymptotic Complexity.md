---
id: "Q-2025S-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(c)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["algorithm-analysis"]
difficulty: 4
difficulty_basis: "Unroll a square-root recurrence to a logarithmic-logarithmic depth and retain the leaf coefficient."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [7]
verification_status: "verified"
marks: 5
---
# Q-2025S-FINAL-P05-c

## Source

[[2025 Spring Final]]; printed item 5(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Official answer and the secondary intermediate correction: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=7]]

Source correction: Page 7 replaces the finite exponent sum by its infinite limit and writes $T(n)=n+n\log\log n$. The exact leaf coefficient is n/2, not n; n=4 gives 6 rather than 8. The printed requested O(n log log n) conclusion remains correct, since n is a valid upper bound for n/2. This secondary equality slip is disclosed while retaining official provenance and the complete finite-sum derivation.

## Question

(c) [5 pts] Derive the tightest possible asymptotic upper bound for the following recurrence $T(n)$, assuming $n$ is a power of a power of 2. Do not use the master theorem. Show all your steps to receive full credit.
$$T(2)=1,\qquad T(n)=\sqrt nT(\sqrt n)+n\quad\text{for }n>2.$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=7|physical PDF page 7]].

(c) By expansion:
$$\begin{aligned}
T(n)&=n^{1/2}T(n^{1/2})+n\\
&=n^{1/2}(n^{1/4}T(n^{1/4})+n^{1/2})+n\\
&=n^{1/2+1/4}T(n^{1/2^2})+2n\\
&=n^{1/2+1/4+\cdots+1/2^k}T(n^{1/2^k})+kn\\
&=n^{1/2+1/4+\cdots+1/2^k}(1)+kn\quad[\text{Set }n^{1/2^k}=2,\text{ we have }k=\log\log n]\\
&=n^{\frac{1/2}{1-1/2}}+kn\\
&=n+n\log\log n\\
&=O(n\cdot\log\log n).
\end{aligned}$$
Solution: $O(n\cdot\log\log n)$

## Supplementary Explanation

**Answer.** $T(n)=n/2+n\log_2\log_2n$, so the tight upper bound is $O(n\log\log n)$.

**Derivation/proof.** After j expansions,
$$T(n)=n^{1/2+1/4+\cdots+1/2^j}T(n^{1/2^j})+jn.$$
Each new additive contribution is $n^{1-1/2^j}n^{1/2^j}=n$. Write $n=2^{2^k}$; then $n^{1/2^k}=2$ and $k=\log_2\log_2n$. The finite exponent sum is $1-1/2^k$, so the leaf coefficient is $n^{1-1/2^k}=n/2$. Using $T(2)=1$ gives $T(n)=n/2+kn$, which is $\Theta(n\log\log n)$ as k grows. At $n=4$, the recurrence gives $T(4)=2\cdot1+4=6$, agreeing with the corrected exact formula; the printed expression would give eight.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence-Solving Method - 递推求解法]]

Unroll a square-root recurrence to a logarithmic-logarithmic depth and retain the leaf coefficient.
