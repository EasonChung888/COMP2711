---
id: "Q-2025S-FINAL-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 12
question_number: "9"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Reorder a weighted minimum sum into tails and apply the hockey-stick identity twice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 7
---
# Q-2025S-FINAL-P09

## Source

[[2025 Spring Final]]; printed item 9; 7 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=12]]

## Question

Consider all 1000-element subsets of the set $\{1,2,3,\ldots,2022\}$. From each such subset, choose the least element. Find the sum of all these least elements.
Hint: You can use the Hockey Stick Identity introduced in class without proving it:
$$\binom{n+1}{r+1}=\sum_{j=r}^n\binom jr$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=12|physical PDF page 12]].

- Number of subsets with 1 as the least element: $C(2021,999)$
- Number of subsets with 2 as the least element: $C(2020,999)$
- ...
- Number of subsets with 1023 as the least element: $C(999,999)$

Sum of all least elements equals:
$$C(2021,999)+2\cdot C(2020,999)+\ldots+1023\cdot C(999,999).$$
We can group the sum into columns, where each column can be computed using the Hockey Stick Identity:
$$\begin{array}{lllll}
C(2021,999)+&&&&\\
C(2020,999)+&C(2020,999)+&&&\\
C(2019,999)+&C(2019,999)+&C(2019,999)+&&\\
\ldots&&&&\\
C(999,999)+&C(999,999)+&C(999,999)+&C(999,999)+&\ldots
\end{array}$$
- 1st column sums to $C(2022,1000)$
- 2nd column sums to $C(2021,1000)$
- ...
- 1023rd column sums to $C(1000,1000)$

We can again apply the Hockey Stick identity to the sum of all columns. This gives us $C(2023,1001)$.

## Supplementary Explanation

**Answer.** $\binom{2023}{1001}$.

**Derivation/proof.** If the minimum is m, select the other 999 elements from $m+1,\ldots,2022$, in $\binom{2022-m}{999}$ ways. The possible minimum satisfies $1\le m\le1023$. The required weighted sum is $\sum_{m=1}^{1023}m\binom{2022-m}{999}$. Substituting $m=\sum_{t=1}^m1$ and interchanging finite sums gives $\sum_{t=1}^{1023}\sum_{m=t}^{1023}\binom{2022-m}{999}$. The inner hockey-stick sum is $\binom{2023-t}{1000}$. Summing the outer terms, whose upper indices run from 1000 to 2022, applies the identity again and yields $\binom{2023}{1001}$. Every subset contributes once in each of its first m layers, retaining its full weight.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]

Reorder a weighted minimum sum into tails and apply the hockey-stick identity twice.
