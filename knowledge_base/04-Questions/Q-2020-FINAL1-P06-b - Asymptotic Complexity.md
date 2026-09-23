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

## 中文解析

每次把一个一次多项式乘进累计乘积，累计次数逐步增大，所以第 k 次的工作量与 k 成正比。把这些线性代价相加得到平方阶；不能仅看到递归调用 n 次就误判线性时间。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $O(n^2)$, in fact $\Theta(n^2)$.

**Derivation/proof.** A product of k−1 degree-one polynomials has degree k−1. Multiplying it by the kth degree-one polynomial with Algorithm 1 uses Θ(k) coefficient operations. Algorithm 2 does this sequentially for k=2,…,n, so $T(n)=T(n-1)+\Theta(n)$ with T(1)=Θ(1). Expanding sums the arithmetic sequence, yielding Θ(n²). The recursion has only one child at each step, not a balanced multiplication tree.

### 中文解答

**推导。** 递归只有一个规模 $n-1$ 的子问题，先乘好前 $n-1$ 个一次多项式，其积的次数为 $n-1$。再乘第 $n$ 个一次多项式，用算法一精确执行 $n\cdot2=2n$ 次系数乘加，其余读写也是 $\Theta(n)$。故时间满足 $T(n)=T(n-1)+\Theta(n)$，$T(1)=\Theta(1)$。逐级累加 $2+3+\cdots+n=n(n+1)/2-1$，得 $T(n)=\Theta(n^2)$，所以最佳大 O 为 $O(n^2)$。它不是每层分成两半的平衡乘法树；印本 $C_n=C_{n-1}+n-1$ 表达的是同阶递增成本，不应当作这段含端点循环的精确操作次数。

## Common Mistakes

- 假设每次乘法代价固定。
- 把源码的顺序递归改成平衡分治再分析。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Recurrence-Solving Method - 递推求解法]]

- Prerequisite: [[Q-2020-FINAL1-P06-a - Asymptotic Complexity]]
