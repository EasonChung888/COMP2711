---
id: "Q-2025F-FINAL-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 14
question_number: "9(a)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Unroll a factor-four recurrence and sum the finite geometric series with ratio three-sixteenths."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [14,15]
verification_status: "verified"
marks: 5
related_questions: ["[[Q-2025F-FINAL-P09-b - Mathematical Induction]]","[[Q-2014-FINAL-P08 - Asymptotic Complexity]]"]
---
# Q-2025F-FINAL-P09-a

## Source

[[2025 Fall Final]]; printed item 9(a); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=14]]

Published official answer with secondary source correction: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=15]]

Source correction: Page 15 prints log₄3≈1.584; the correct approximation is0.79248. Its exact closed form (16n²−3n^(log₄3))/13 and final Θ(n²) are correct, since the exponent is less than2. This secondary decimal approximation slip does not replace the official result.

## Question

(a) [5 points] Solve the following recurrence relation using the expansion method:
$$T(n)=3T\left(\frac n4\right)+n^2\qquad T(1)=1$$
You may assume $n$ is of form $4^k$ for some positive integer $k$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=14|physical PDF page 14]], [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=15|physical PDF page 15]].

(a) We solve the recurrence
$$T(n)=3T\left(\frac n4\right)+n^2,\qquad T(1)=1,$$
where $n=4^k$ for some positive integer $k$.

Using the iteration (unrolling) method:
$$\begin{aligned}
T(n)&=3T\left(\frac n4\right)+n^2\\
&=3\left[3T\left(\frac n{16}\right)+\left(\frac n4\right)^2\right]+n^2=3^2T\left(\frac n{16}\right)+\frac{3\cdot n^2}{16}+n^2\\
&=3^3T\left(\frac n{64}\right)+\frac{3^2\cdot n^2}{16^2}+\frac{3\cdot n^2}{16}+n^2.
\end{aligned}$$
After $k$ iterations (until the argument becomes 1, because $n/4^k=4^k/4^k=1$),
$$T(n)=3^kT(1)+n^2\sum_{i=0}^{k-1}3^i\cdot\left(\frac1{16}\right)^i.$$
Since $T(1)=1$ and $n=4^k$, we have $3^k=(4^{\log_4 3})^k=n^{\log_4 3}$. The sum is a geometric series with ratio $r=3/16$:
$$\sum_{i=0}^{k-1}3^i\cdot\frac1{16^i}=\sum_{i=0}^{k-1}\left(\frac3{16}\right)^i=\frac{1-(3/16)^k}{1-3/16}=\frac{1-(3/16)^k}{13/16}=\frac{16}{13}\left(1-\left(\frac3{16}\right)^k\right).$$
Thus
$$T(n)=3^k+n^2\cdot\frac{16}{13}\left(1-\left(\frac3{16}\right)^k\right).$$
Substituting $3^k=n^{\log_4 3}$ and $(3/16)^k=3^k/16^k=3^k/n^2=n^{\log_4 3-2}$ (or directly $(3/16)^k=3^k/n^2$),
$$T(n)=n^{\log_4 3}+\frac{16}{13}n^2\left(1-\frac{n^{\log_4 3}}{n^2}\right)=n^{\log_4 3}+\frac{16}{13}n^2-\frac{16}{13}n^{\log_4 3}.$$
Combining the terms with the same exponent,
$$T(n)=\left(1-\frac{16}{13}\right)n^{\log_4 3}+\frac{16}{13}n^2=-\frac3{13}n^{\log_4 3}+\frac{16}{13}n^2=\frac{16n^2-3n^{\log_4 3}}{13}.$$
Because $\log_4 3\approx1.584<2$, the dominant term is $\frac{16}{13}n^2$, so $T(n)=\Theta(n^2)$. The exact closed form is
$$\boxed{T(n)=\frac{16n^2-3n^{\log_4 3}}{13}}.$$

## Supplementary Explanation

**Answer.** $T(n)=\dfrac{16n^2-3n^{\log_4 3}}{13}$.

**Derivation/proof.** Successive substitutions give
$$T(n)=3^jT(n/4^j)+n^2\sum_{i=0}^{j-1}(3/16)^i.$$
Write $n=4^k$ and take $j=k$ to reach $T(1)=1$. Then
$$T(n)=3^k+n^2\frac{1-(3/16)^k}{1-3/16}.$$
Since $16^k=n^2$, we have $n^2(3/16)^k=3^k$. Consequently
$$T(n)=3^k+\frac{16}{13}(n^2-3^k)=\frac{16n^2-3\cdot3^k}{13}.$$
Use $3^k=n^{\log_4 3}$ to obtain the claimed formula. At $n=4$ it gives 19, agreeing with $3T(1)+16=19$. The actual value $\log_4 3\approx0.79248$ is below two, so the quadratic term dominates.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence-Solving Method - 递推求解法]]

Unroll a factor-four recurrence and sum the finite geometric series with ratio three-sixteenths.

- Follow-on / contrast: [[Q-2025F-FINAL-P09-b - Mathematical Induction]]: 对前项展开得到的闭式在四的幂定义域上进行归纳核验。

- Contrast / 对比: [[Q-2014-FINAL-P08 - Asymptotic Complexity]] — Both unroll a linear recurrence and factor out a dominant term to bound or sum a convergent geometric contribution. The 2014 recurrence decreases the argument by one and has an $a^n$ scale with weighted terms; the 2025 recurrence divides the argument by four and sums level costs with ratio $3/16$ to an exact closed form. 两题都先展开再提出主尺度；2014 每次减一，处理以 $a^n$ 为尺度的加权等比和以证紧确界，2025 每次除四，按层累加公比 $3/16$ 的代价以求精确闭式。
