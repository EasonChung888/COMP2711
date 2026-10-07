---
id: "Q-2024S-FINAL-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 11
question_number: "9(a)"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Use integrality of the binomial coefficient and prime divisibility with a denominator coprime to p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11,12]
marks: 5
related_questions: ["[[Q-2024S-FINAL-P09-b - Mathematical Induction]]"]
---
# Q-2024S-FINAL-P09-a

## Source

[[2024 Spring Final]]; printed item 9(a); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11]] ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=12]]

## Question

(a) Let $p$ be a prime number and $k$ be an integer such that $1\le k\le p-1$. Prove that the binomial coefficient $\binom pk$ is divisible by $p$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11|physical PDF page 11]].

> Solution: (a) Consider the binomial coefficient: $\binom pk=\frac{p!}{k!(p-k)!}$.
> The numerator $p!$ can be written as $p\cdot(p-1)\cdots2\cdot1$, which is clearly divisible by $p$. The denominator is the product of two factorials, $k!$ and $(p-k)!$. Since $1\le k\le p-1$, both $k$ and $p-k$ are integers strictly less than $p$. Thus, the denominator $k!(p-k)!$ is the product of integers all of which are non-zero and strictly less than $p$. This means that neither $k!$ nor $(p-k)!$ is divisible by $p$.
> Since $\binom pk$ is an integer, and it is expressed as a fraction where the numerator is divisible by $p$ but the denominator is not, we can conclude that $\binom pk$ itself must be divisible by $p$.

## Supplementary Explanation

**Answer.** $p\mid\binom pk$ for $1\le k\le p-1$.

**Derivation/proof.** Let $C=\binom pk\in\mathbb Z$. Then $C\,k!(p-k)!=p!$, whose right side is divisible by $p$. Since $k,p-k<p$, every positive denominator factor lies between $1$ and $p-1$, so none is divisible by $p$. The prime product property gives $p\nmid k!(p-k)!$. Applying the same property to $C\,k!(p-k)!$ gives $p\mid C$. At $k=0,p$ the coefficient is one, showing why these endpoints must be excluded.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Binomial Coefficients - 二项式系数]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

Use integrality of the binomial coefficient and prime divisibility with a denominator coprime to p.

- Used by: [[Q-2024S-FINAL-P09-b - Mathematical Induction]]: 此结果在后续小题中的具体用途：For a prime $p$ and $1\le i\le p-1$, the imported part (a) states $p\mid\binom pi$. The printed hint expressly permits using it.
