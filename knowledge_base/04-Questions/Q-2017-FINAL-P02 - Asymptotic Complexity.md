---
id: "Q-2017-FINAL-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Logarithmic, polynomial, and exponential comparisons distinguish n times 2^n from 3^n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2017-FINAL-P02

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=4]]

## Question

Arrange the following functions in a list so that each is big-$O$ of the next one in the list: $n^3+88n^2+3,\log n^4,3^n,n^2\log n,n\cdot2^n,10000$.

## 中文解析

先把多项式看最高次项，把对数中的四次方移到系数位置。最后两个指数项不能只看前面的 n：三与二的底数差异最终压过任何一次多项式因子，因此 n 乘二的 n 次方仍增长较慢。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $10000,\log n^4,n^2\log n,n^3+88n^2+3,n2^n,3^n$.

**Derivation/proof.** Here $\log n^4=4\log n$ and the cubic polynomial is $\Theta(n^3)$. Constants precede logarithms, and $\log n/n\to0$ shows $n^2\log n=o(n^3)$. Every fixed-degree polynomial is dominated by $2^n$. Finally $(n2^n)/3^n=n(2/3)^n\to0$, proving the last comparison.

### 中文解答

**推导。** 先化为主导阶：$\log n^4=4\log n$，$n^3+88n^2+3=\Theta(n^3)$。常数小于对数阶；$\log n/n\to0$ 给出 $n^2\log n=o(n^3)$；多项式又小于指数 $2^n$。末两项之比 $(n2^n)/3^n=n(2/3)^n\to0$。因此次序为 $10000,\log n^4,n^2\log n,n^3+88n^2+3,n2^n,3^n$，相邻小 $o$ 关系均蕴含所要求的大 $O$。

## Common Mistakes

- 把 log n 的四次方与 log(n 的四次方)混淆。
- 认为乘 n 就必定超过更大底数的指数。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
