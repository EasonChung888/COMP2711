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

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=4|physical PDF page 4]].

$a_n=\log n!=\sum_{i=1}^n\log i$. On the one hand, $a_n<\sum_{i=1}^n\log n=n\log n$, so $a_n=O(n\log n)$. On the other hand, $a_n>\sum_{i=n/2+1}^n\log(n/2)=\frac n2\log\frac n2$, so $a_n=\Omega(n\log n)$. Therefore we conclude $a_n=\Theta(n\log n)$, and the tightest asymptotic upper bound is $n\log n$.

## Supplementary Explanation

**Answer.** $n\log n$; $a_n=\Theta(n\log n)$.

**Derivation/proof.** The formula gives $f_n(-1)=(-1)^n n!(-1)^{-(n+1)}=-n!$, hence $a_n=\log(n!)$. For n≥4, all n factors of n! are at most n, so $a_n\le n\log n$. At least n/2 factors are at least n/2, giving $a_n\ge(n/2)\log(n/2)\ge(n/4)\log n$. These fixed positive upper and lower bounds prove the claimed Θ order without needing Stirling's formula.

The constants $1/4$ and $1$ with threshold $4$ work for odd as well as even $n$ and need no Stirling formula.

Substitution first gives $f_n(-1)=-n!$, so $\log(-f_n(-1))=\log(n!)$ is defined. The lower and upper constants can be chosen as $1/4,1$ respectively for $n\ge4$, proving the two-sided asymptotic estimate.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Recurrence-Solving Method - 递推求解法]]

- Prerequisite: [[Q-2020-FINAL1-P05-a-formula - Recurrence Relations]]
- Prerequisite: [[Q-2020-FINAL1-P05-a-proof - Mathematical Induction]]
