---
id: "Q-2017-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The exponent of b ranges from zero through fifteen and each nonzero term has a distinct exponent pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P08-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=10]]

## Question

(b) Find the number of terms in the expansion of $(5a+8b)^{15}$.

## 中文解析

展开式中 b 的次数可以从零到十五，每一个次数对应唯一的 a 次数。两个端点都要包含，所以共有十六项；这里问的是不同单项式数目，不是展开之前选择因式的次数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $16$.

**Derivation/proof.** The terms are $\binom{15}{k}(5a)^{15-k}(8b)^k$ for $k=0,1,\ldots,15$. Every coefficient is nonzero and each exponent pair $(15-k,k)$ is different, so no terms combine. The inclusive range has sixteen integers.

### 中文解答

**推导。** 二项展开的第 $k$ 类项为 $\binom{15}{k}5^{15-k}8^ka^{15-k}b^k$，其中 $k=0,1,\ldots,15$。各系数非零且不同 $k$ 的指数对 $(15-k,k)$ 不同，故不会互相抵消或合并。整数 $0$ 至 $15$ 连同两端共有 $16$ 个，所以有 $16$ 项。

## Common Mistakes

- 忘记纯 a 或纯 b 端点。
- 把二的十五次方当成合并后的项数。

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]
