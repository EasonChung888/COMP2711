---
id: "Q-2022-MID-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "9"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The radical covers 2n while the logarithm of 2 to n reduces to a linear function."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 6
---
# Q-2022-MID-P09

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

## Question

Arrange the following running times in order of increasing asymptotic complexity. Just give the answer; no explanation is needed.

$2^n,\sqrt{2n},n^2+20,\log(n^3),\log(2^n),n^{1/3}\log n$

Note that you must write function $f(n)$ before function $g(n)$ if $f(n)=O(g(n))$.

## 中文解析

先把 log(n³) 化成对数阶，把 log(2ⁿ) 化成线性阶；根号内是二乘 n，不是二的 n 次方。较接近的两项用比值 log n/n^(1/6) 趋零比较，确定三分之一次幂乘对数小于平方根。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\log(n^3),\ n^{1/3}\log n,\ \sqrt{2n},\ \log(2^n),\ n^2+20,\ 2^n$.

**Derivation/proof.** The orders simplify to log n, n^(1/3)log n, n^(1/2), n, n², and 2^n. For the only close comparison, n^(1/3)log n divided by √(2n) equals (log n)/(√2 n^(1/6)), which tends to zero. Other adjacent ratios also tend to zero: log versus positive power, square-root versus linear, linear versus quadratic, and polynomial versus exponential. The printed radical is √(2n), not √(2^n).

### 中文解答

**推导。** 逐个化简增长阶：$\log(n^3)=3\log n$；$\sqrt{2n}=\sqrt2\,n^{1/2}$；$\log(2^n)=n\log2$；$n^2+20$ 与 $n^2$ 同阶。唯一较接近的两项，用比值 $\frac{n^{1/3}\log n}{\sqrt{2n}}=\frac{\log n}{\sqrt2\,n^{1/6}}\to0$，所以幂乘对数在平方根之前。其余相邻比值依次是 $3/n^{1/3}$、常数倍 $n^{-1/2}$、常数倍 $1/n$、以及 $(n^2+20)/2^n$，全趋零。因此顺序为 $\log(n^3),\ n^{1/3}\log n,\ \sqrt{2n},\ \log(2^n),\ n^2+20,\ 2^n$。源图根号内明确是 $2n$ 而非 $2^n$。

## Common Mistakes

- 把根号内的 2n 看成 2ⁿ。
- 把 log(2ⁿ) 当成指数阶。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
