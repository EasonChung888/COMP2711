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

## 中文解析

每层子问题数量乘三而平方成本除十六，展开后是一条公比三除十六的有限级数。

## Detailed Solution

Provenance: published official answer, independently checked; the secondary source slip is retained above.

### 中文解答

**答案。** $T(n)=\dfrac{16n^2-3n^{\log_4 3}}{13}$。

**推导。** 逐层代入得到 $T(n)=3^jT(n/4^j)+n^2\sum_{i=0}^{j-1}(3/16)^i$。取 $n=4^k$ 并令 $j=k$，便到达 $T(1)=1$，因此 $T(n)=3^k+n^2\frac{1-(3/16)^k}{1-3/16}$。由于 $16^k=n^2$，有 $n^2(3/16)^k=3^k$，化简得 $T(n)=3^k+\frac{16}{13}(n^2-3^k)=\frac{16n^2-3\cdot3^k}{13}$。再用 $3^k=n^{\log_4 3}$ 即得闭式。$n=4$ 时计算为十九，与 $3T(1)+16=19$ 一致。实际 $\log_4 3\approx0.79248$，并非答案页写的 1.584；但两者小于二的判断及所印闭式是正确的。

## Common Mistakes

- 层代价的公比是三除十六，不能只按子问题数量用公比三。
- log₄3 约为零点七九二，原答案约一点五八四是换底数值错误。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence-Solving Method - 递推求解法]]

Unroll a factor-four recurrence and sum the finite geometric series with ratio three-sixteenths.

- Follow-on / contrast: [[Q-2025F-FINAL-P09-b - Mathematical Induction]]: 对前项展开得到的闭式在四的幂定义域上进行归纳核验。

- Contrast / 对比: [[Q-2014-FINAL-P08 - Asymptotic Complexity]] — Both unroll a linear recurrence and factor out a dominant term to bound or sum a convergent geometric contribution. The 2014 recurrence decreases the argument by one and has an $a^n$ scale with weighted terms; the 2025 recurrence divides the argument by four and sums level costs with ratio $3/16$ to an exact closed form. 两题都先展开再提出主尺度；2014 每次减一，处理以 $a^n$ 为尺度的加权等比和以证紧确界，2025 每次除四，按层累加公比 $3/16$ 的代价以求精确闭式。
