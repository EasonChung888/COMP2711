---
id: "Q-2024S-FINAL-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 11
question_number: "9(b)"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Binomial Coefficients - 二项式系数]]","[[Modular Congruence - 同余]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Induct on a rather than p and isolate the two binomial endpoint terms while invoking 9(a) only internally."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11,12]
marks: 10
related_questions: ["[[Q-2024S-FINAL-P09-a - Binomial Coefficients]]"]
---
# Q-2024S-FINAL-P09-b

## Source

[[2024 Spring Final]]; printed item 9(b); 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11]] ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=12]]

Prerequisite context (editorial): [[Q-2024S-FINAL-P09-a - Binomial Coefficients]]. For a prime $p$ and $1\le i\le p-1$, the imported part (a) states $p\mid\binom pi$. The printed hint expressly permits using it.

## Question

(b) Let $p$ be a prime number. Use mathematical induction to prove that for any positive integer $a$, the number $a^p-a$ is divisible by $p$. In other words, you need to prove Fermat’s Little Theorem using induction on the integer $a$.
Note: If you give the number-theoretic proof of Fermat’s Little Theorem presented in class, you will receive 0 marks.
Hint: In your proof of part (b), you may find the claim given in part (a) useful. Note that in part (b), you are permitted to use this claim from part (a), even if you were unable to prove it.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11|physical PDF page 11]], [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=12|physical PDF page 12]].

> (b) The base case is when $a=1$, in which case we have $a^p-a=1^p-1=0$, which is divisible by $p$, and hence the base case holds. Now supposing that the claim holds for an arbitrary $a$, i.e., $p\mid a^p-a$, we wish to show that it holds for $a+1$, i.e., $p\mid(a+1)^p-(a+1)$. Expanding $(a+1)^p-(a+1)$ using the binomial formula, we get
> $$\begin{aligned}(a+1)^p-(a+1)&=\left(\sum_{i=0}^p\binom pi\cdot a^i\cdot1^{p-i}\right)-(a+1)\\&=\left(\sum_{i=0}^p\binom pi\cdot a^i\right)-(a+1)\\&=\left(\sum_{i=1}^{p-1}\binom pi\cdot a^i\right)+\binom p0\cdot a^0+\binom pp\cdot a^p-(a+1)\\&=\left(\sum_{i=1}^{p-1}\binom pi\cdot a^i\right)+1+a^p-(a+1)\\&=\left(\sum_{i=1}^{p-1}\underbrace{\binom pi}_{\text{divisible by }p\text{ from part (a)}}\cdot a^i\right)+\underbrace{a^p-a}_{\text{divisible by }p\text{ by IH}}.\end{aligned}$$
> Thus, $(a+1)^p-(a+1)$ is equal to the sum of terms each of which is divisible by $p$, and therefore we have $p\mid(a+1)^p-(a+1)$, which completes our inductive proof.

## Supplementary Explanation

**Answer.** $p\mid a^p-a$ for every positive integer $a$.

**Derivation/proof.** Fix the prime $p$. Base case: $a=1$ gives $1^p-1=0$, divisible by $p$. The inductive hypothesis is $p\mid a^p-a$. By the binomial theorem, $(a+1)^p-(a+1)=(a^p-a)+\sum_{i=1}^{p-1}\binom pi a^i$: the constant one cancels the subtracted one, and $a^p-a$ forms the first term. Part (a) makes every internal coefficient, $1\le i\le p-1$, divisible by $p$, so the entire sum is divisible by $p$. The first term is divisible by $p$ by the inductive hypothesis. Thus $p\mid(a+1)^p-(a+1)$, completing induction without assuming Fermat's theorem.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Mathematical Induction - 数学归纳法]]
- [[Binomial Coefficients - 二项式系数]]
- [[Modular Congruence - 同余]]
- [[Induction Proof Method - 归纳证明法]]

Induct on a rather than p and isolate the two binomial endpoint terms while invoking 9(a) only internally.

- Prerequisite: [[Q-2024S-FINAL-P09-a - Binomial Coefficients]]: 本题导入此前提/结果以完成当前计算或证明：For a prime $p$ and $1\le i\le p-1$, the imported part (a) states $p\mid\binom pi$. The printed hint expressly permits using it.
