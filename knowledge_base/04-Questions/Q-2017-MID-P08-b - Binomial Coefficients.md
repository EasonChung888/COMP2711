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

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=10|physical PDF page 10]].

$16$.

## Supplementary Explanation

**Answer.** $16$.

**Derivation/proof.** The terms are $\binom{15}{k}(5a)^{15-k}(8b)^k$ for $k=0,1,\ldots,15$. Every coefficient is nonzero and each exponent pair $(15-k,k)$ is different, so no terms combine. The inclusive range has sixteen integers.

In the binomial expansion the term indexed by $k$ is $\binom{15}{k}5^{15-k}8^ka^{15-k}b^k$. Matching the requested exponent of $b$ fixes $k$ and therefore its coefficient uniquely.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]
