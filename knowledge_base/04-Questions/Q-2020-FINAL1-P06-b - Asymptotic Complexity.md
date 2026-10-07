---
id: "Q-2020-FINAL1-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 5
question_number: "6(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Sequential multiplication grows the intermediate degree by one and sums linear costs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 4
related_questions: ["[[Q-2020-FINAL1-P06-a - Asymptotic Complexity]]"]
---
# Q-2020-FINAL1-P06-b

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=5]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=5]]

Prerequisite context (editorial): [[Q-2020-FINAL1-P06-a - Asymptotic Complexity]]. Algorithm 1's degree-m by degree-n multiplication costs $\Theta((m+1)(n+1))$ coefficient operations, or $\Theta(mn)$ when both degrees are positive. Here each recursive multiplication pairs a degree-(k-1) product with a degree-one polynomial. 本题把上一问的双多项式乘法代价代入逐个相乘的递归，而不是假设每次乘法为常数时间。

## Question

Let $\{p_n(x)\}$ be a sequence of polynomials, all having degree 1. What is the time complexity of computing $p_1(x)p_2(x)\cdots p_n(x)$ using Algorithm 2? Write your answer in the best big-$O$ notation with respect to $n$. Justify your answer.

Shared context: [[STEM-2020-FINAL1-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=5|physical PDF page 5]].

Let $C_n$ be the time complexity of computing $p_1(x)p_2(x)\cdots p_n(x)$ using Algorithm 2, then $C_1=0$ and $C_n=C_{n-1}+n-1$. Therefore $C_n=\sum_{i=1}^n(i-1)=O(n^2)$.

## Supplementary Explanation

**Answer.** $O(n^2)$, in fact $\Theta(n^2)$.

**Derivation/proof.** A product of k−1 degree-one polynomials has degree k−1. Multiplying it by the kth degree-one polynomial with Algorithm 1 uses Θ(k) coefficient operations. Algorithm 2 does this sequentially for k=2,…,n, so $T(n)=T(n-1)+\Theta(n)$ with T(1)=Θ(1). Expanding sums the arithmetic sequence, yielding Θ(n²). The recursion has only one child at each step, not a balanced multiplication tree.

The last level performs exactly $2n$ coefficient multiplications, and the total for levels two through $n$ is twice the arithmetic sum $2+3+\cdots+n=n(n+1)/2-1$. This quadratic count yields $T(n)=\Theta(n^2)$; the displayed recurrence is an asymptotic simplification rather than the exact loop count.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Recurrence-Solving Method - 递推求解法]]

- Prerequisite: [[Q-2020-FINAL1-P06-a - Asymptotic Complexity]]
