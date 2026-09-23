---
id: "Q-2024S-MID-P01"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 3
question_number: "1"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Order eight explicit logarithmic, polynomial, exponential and factorial functions using growth comparisons."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 5
---
# Q-2024S-MID-P01

## Source

[[2024 Spring Midterm]]; printed item 1; 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=3]]

## Question

Arrange the following functions in order of increasing asymptotic complexity. Note that you must write function $f(n)$ before function $g(n)$ if $f(n)=O(g(n))$. No explanation is needed.
$$n,\ n\log n,\ 3^n,\ n!,\ n^2,\ 2^n,\ n^{3/2},\ \log n$$

## 中文解析

比较增长阶时常数底对对数只影响常数，但指数函数的底数影响增长。先处理多项式内部顺序，再把指数和阶乘接在后面。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\log n,n,n\log n,n^{3/2},n^2,2^n,3^n,n!$。

**推导。** 因为 $\log n=o(n)$ 且 $\log n=o(n^{1/2})$，所以 $\log n<n<n\log n<n^{3/2}<n^2$ 表示最终的增长顺序。固定次多项式满足 $n^2=o(2^n)$；又 $2^n/3^n=(2/3)^n\to0$。最后 $n!$ 中后半部分至少各为 $n/2$，故 $n!\ge(n/2)^{n/2}$，而此下界与 $3^n$ 的比为 $(\sqrt{n/2}/3)^n\to\infty$。因此阶乘位于最后，八个函数均出现一次。

## Common Mistakes

- 不要把 $3^n$ 看成 $3n$，指数和线性增长完全不同。
- $n\log n$ 小于 $n^{3/2}$；多出的对数不等于多出一整次幂。

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Order eight explicit logarithmic, polynomial, exponential and factorial functions using growth comparisons.
