---
id: "Q-2020-FINAL1-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 3
question_number: "5(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Bounding log factorial above by all terms and below by its last half yields a tight n log n order."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 5
related_questions: ["[[Q-2020-FINAL1-P05-a-formula - Recurrence Relations]]","[[Q-2020-FINAL1-P05-a-proof - Mathematical Induction]]"]
---
# Q-2020-FINAL1-P05-b

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=4]]

Prerequisite context (editorial): [[Q-2020-FINAL1-P05-a-formula - Recurrence Relations]]; [[Q-2020-FINAL1-P05-a-proof - Mathematical Induction]]. Part (a) gives and proves $f_n(x)=(-1)^n n!x^{-(n+1)}$ on $x\ne0$. Evaluating the established formula at -1 gives $f_n(-1)=-n!$, so the quantity to bound is $a_n=\log(n!)$. 本题使用已证明的通项取值，然后分析阶乘对数的增长阶。

## Question

Let $a_n=\log(-f_n(-1))$. Which one of the following functions is the tight asymptotic bound (i.e., $\Theta$) of $a_n$? Justify your answer.

$n,\ n\log\log n,\ n\log n,\ n\log^2n,\ n^2$

Shared context: [[STEM-2020-FINAL1-P05 - Shared Problem Prompt]].

## 中文解析

先算清在负一处的函数值始终为负的阶乘，外面再取负号才可取对数。上界把每项对数都换成 log n，下界只保留后半段；两边都是 n log n 的常数倍，才得到紧界。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $n\log n$; $a_n=\Theta(n\log n)$.

**Derivation/proof.** The formula gives $f_n(-1)=(-1)^n n!(-1)^{-(n+1)}=-n!$, hence $a_n=\log(n!)$. For n≥4, all n factors of n! are at most n, so $a_n\le n\log n$. At least n/2 factors are at least n/2, giving $a_n\ge(n/2)\log(n/2)\ge(n/4)\log n$. These fixed positive upper and lower bounds prove the claimed Θ order without needing Stirling's formula.

### 中文解答

**推导。** 代入 $x=-1$，符号 $(-1)^n(-1)^{-(n+1)}=-1$，故 $f_n(-1)=-n!$，于是 $a_n=\log(n!)$。上界：所有 $n$ 个因子均至多 $n$，所以 $a_n\le n\log n$。下界：从 $\lceil n/2\rceil$ 到 $n$ 至少有 $n/2$ 个因子，每个至少 $n/2$，故对 $n\ge4$，

$$a_n\ge\frac n2\log\frac n2\ge\frac n4\log n.$$

两个固定常数 $1/4,1$ 在阈值四之后夹住比值，因此 $a_n=\Theta(n\log n)$，选项为 $n\log n$。这一上下界对奇偶 $n$ 都成立，不依赖未经说明的偶数假设，也不需要斯特林公式。

## Common Mistakes

- 漏负号导致对负数取对数。
- 只证明 O 上界却宣称 Θ。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Recurrence-Solving Method - 递推求解法]]

- Prerequisite: [[Q-2020-FINAL1-P05-a-formula - Recurrence Relations]]
- Prerequisite: [[Q-2020-FINAL1-P05-a-proof - Mathematical Induction]]
