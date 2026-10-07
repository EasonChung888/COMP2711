---
id: "Q-2018-FINAL-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 6
solution_page: [6]
question_number: "4(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The ratio of neighboring binomial coefficients with fixed lower argument gives the required multiplier."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P04-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=6]]

## Question

(b) Fill in the following recursive definition so that $f(n)=\binom nm$, the binomial coefficient for fixed $m$.

$f(m)=1$

$f(k+1)=f(k)\ \underline{\qquad}$

For this question, no proof is required.

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=6|physical PDF page 6]].

$f(k+1)=f(k)\cdot\dfrac{k+1}{k+1-m}$.

## Supplementary Explanation

**Answer.** $f(k+1)=f(k)\frac{k+1}{k+1-m}$ for $k\ge m$.

**Derivation/proof.** Taking the ratio gives $\binom{k+1}m/\binom km=[(k+1)!/(m!(k+1-m)!)]/[k!/(m!(k-m)!)]=(k+1)/(k+1-m)$. The denominator is positive for $k\ge m$, and the initial value $\binom mm=1$ matches the given basis.

The recurrence multiplier is $\dfrac{k+1}{k+1-m}$, obtained by cancelling factorials in successive binomial coefficients. The boundary value is $f(m)=\binom mm=1$, so the rule begins without a zero denominator.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Recursion - 递归]]
- [[Binomial Coefficients - 二项式系数]]
- [[Recurrence Relations - 递推关系]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Recurrence-Solving Method - 递推求解法]]
