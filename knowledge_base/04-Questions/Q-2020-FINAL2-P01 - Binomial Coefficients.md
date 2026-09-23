---
id: "Q-2020-FINAL2-P01"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 1
question_number: "1"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Splitting the square weight into an ordered pair count and a single marked choice reduces both sums by binomial identities."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1,2]
marks: 8
---
# Q-2020-FINAL2-P01

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=1]] ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=2]]

Source correction: PDF page1 expands the second sum as Σ_(i=1)^n n!/((i−2)!(n−i)!), introducing undefined(−1)! at i=1; the next expression also uses(n−2)! and so cannot cover n=1. First discard the zero i=1 term and start at i=2 for n≥2, then check n=1 separately. The official split i²=i(i−1)+i and final identity on page2 remain correct.

## Question

Prove that $\binom n1+2^2\binom n2+\ldots+n^2\binom nn=n(n+1)\cdot2^{n-2}$, where $n$ is a positive integer. [Hint: $i^2=i(i-1)+i$.]

## 中文解析

把 i 平方拆成 i(i-1) 与 i，两部分分别对应两个有序标记和一个标记。化简二项系数后用二项式定理求和；第二部分的下标必须从二开始，n=1 单独检查，避免出现负阶乘。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** The identity holds for every positive n.

**Derivation/proof.** For n≥2, use $i\binom ni=n\binom{n-1}{i-1}$ and $i(i-1)\binom ni=n(n-1)\binom{n-2}{i-2}$, starting the second sum at i=2. The binomial theorem gives $\sum_{i=1}^n i\binom ni=n2^{n-1}$ and $\sum_{i=2}^n i(i-1)\binom ni=n(n-1)2^{n-2}$. Add them using the hint to obtain $n[2+(n-1)]2^{n-2}=n(n+1)2^{n-2}$. At n=1 both sides equal 1, checked separately so no negative factorial occurs.

### 中文解答

**推导。** 先处理 $n=1$，两边都是 $1$。以下设 $n\ge2$，用提示 $i^2=i(i-1)+i$ 拆项。第一个和利用 $i\binom ni=n\binom{n-1}{i-1}$，由二项式定理得

$$\sum_{i=1}^n i\binom ni=n\sum_{j=0}^{n-1}\binom{n-1}j=n2^{n-1}.$$

另一个和的 $i=1$ 项为零，先去掉，才可约阶乘：$i(i-1)\binom ni=n(n-1)\binom{n-2}{i-2}$ 对 $i\ge2$ 成立。因此

$$\sum_{i=2}^n i(i-1)\binom ni=n(n-1)\sum_{j=0}^{n-2}\binom{n-2}j=n(n-1)2^{n-2}.$$

两和相加为 $n2^{n-1}+n(n-1)2^{n-2}=n(n+1)2^{n-2}$，最终答案无求和号。把第二和仍从一开始却出现 $(i-2)!$ 会产生未定义的 $(-1)!$，不能照抄印本该下界。

## Common Mistakes

- 让含 (i-2)! 的式子从 i=1 开始。
- 漏掉单标记项 n·2^(n-1)。

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
