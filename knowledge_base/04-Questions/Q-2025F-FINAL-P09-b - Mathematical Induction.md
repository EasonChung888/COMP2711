---
id: "Q-2025F-FINAL-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 14
question_number: "9(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Induct on powers of four and use four to the logarithm of three to transform the lower-order term."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [15,16]
verification_status: "verified"
marks: 5
related_questions: ["[[Q-2025F-FINAL-P09-a - Asymptotic Complexity]]"]
---
# Q-2025F-FINAL-P09-b

## Source

[[2025 Fall Final]]; printed item 9(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=14]]

Published official answer with secondary source correction: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=15]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=16]]

Source correction: Page 16 has a stray double minus in the last displayed numerator16n²−−3n^c. The preceding exact expression is256m²−9m^c, and9m^c=3n^c, so the numerator must be16n²−3n^c. The announced induction theorem and page15 closed form already have that single minus, and the complete same-proof substitution is correct. This local transcription typo retains official provenance; it is not a different induction conclusion.

Prerequisite context (editorial): [[Q-2025F-FINAL-P09-a - Asymptotic Complexity]]. $T(n)=3T(n/4)+n^2$, $T(1)=1$, and the candidate $T(n)=(16n^2-3n^{\log_4 3})/13$ for n=4^k.

## Question

(b) [5 points] Prove your result in part (a) using induction.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=15|physical PDF page 15]], [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=16|physical PDF page 16]].

(b) Let $c=\log_4 3$. We prove that for all $n=4^k$ ($k\ge0$),
$$T(n)=\frac{16n^2-3n^c}{13}.$$
**Base case:** $n=4^0=1$
$$T(1)=1,\qquad\frac{16\cdot1^2-3\cdot1^c}{13}=\frac{16-3}{13}=\frac{13}{13}=1.$$
Holds.

**Inductive hypothesis:** Assume that for some $m=4^\ell$ ($\ell\ge0$),
$$T(m)=\frac{16m^2-3m^c}{13}.$$
**Inductive step:** Consider $n=4^{\ell+1}=4m$. By the recurrence,
$$T(n)=3T\left(\frac n4\right)+n^2=3T(m)+n^2.$$
Substitute the inductive hypothesis and $n=4m$ (so $n^2=16m^2$):
$$\begin{aligned}
T(n)&=3\cdot\frac{16m^2-3m^c}{13}+16m^2\\
&=\frac{48m^2-9m^c}{13}+16m^2\\
&=\frac{48m^2-9m^c+208m^2}{13}\\
&=\frac{256m^2-9m^c}{13}.
\end{aligned}$$
Now note that $n^c=(4m)^c=4^cm^c=(4^{\log_4 3})m^c=3m^c$, so $9m^c=3\cdot3m^c=3n^c$. Also $256m^2=16\cdot16m^2=16n^2$. Therefore
$$T(n)=\frac{16n^2--3n^c}{13},$$
which is exactly the formula for $n$. By the principle of mathematical induction, the closed-form holds for all $n=4^k$, $k\ge0$.

## Supplementary Explanation

**Answer.** For every $n=4^k$ with $k\ge0$, $T(n)=(16n^2-3n^{\log_4 3})/13$.

**Derivation/proof.** Use the recurrence $T(n)=3T(n/4)+n^2$, the initial value $T(1)=1$, and the candidate from part (a). Put $c=\log_4 3$. At $n=1$, $(16-3)/13=1=T(1)$. Assume $T(m)=(16m^2-3m^c)/13$ for $m=4^k$. For $n=4m$, substitution gives
$$T(4m)=3(16m^2-3m^c)/13+16m^2=(256m^2-9m^c)/13.$$
Since $16n^2=256m^2$ and $n^c=(4m)^c=4^cm^c=3m^c$, this equals $(16n^2-3n^c)/13$. The induction is complete. Keeping a single minus sign is essential; interpreting the source's double minus literally would already fail the base value.

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Topic - Algorithms - 算法]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Algorithms - 算法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Induction Proof Method - 归纳证明法]]

Induct on powers of four and use four to the logarithm of three to transform the lower-order term.

- Prerequisite / related: [[Q-2025F-FINAL-P09-a - Asymptotic Complexity]]: 对前项展开得到的闭式在四的幂定义域上进行归纳核验。 $T(n)=3T(n/4)+n^2$, $T(1)=1$, and the candidate $T(n)=(16n^2-3n^{\log_4 3})/13$ for n=4^k.
