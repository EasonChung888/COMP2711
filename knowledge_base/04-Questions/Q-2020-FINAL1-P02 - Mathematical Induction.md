---
id: "Q-2020-FINAL1-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 1
question_number: "2"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Modular Congruence - 同余]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "The next leading digit is selected using the two possible residues of the existing divisible suffix."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1,2]
marks: 8
---
# Q-2020-FINAL1-P02

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=1]] ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=2]]

## Question

Prove that for any $n\in\mathbb N$, there exists an $n$-digit number $A_n$ such that all its digits are either 1 or 2, and $2^n\mid A_n$. [Hint: Use induction.]

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=1|physical PDF page 1]]; [[knowledge_base/past_paper/2020-final-part-1.pdf#page=2|physical PDF page 2]].

We use induction on $n$.
Base case: $n=1$. We can set $A_1=2$, $2^1\mid A_1$.
Induction hypothesis: Assume it is correct for $n=k$, which means that there exists $A_k$ such that $2^k\mid A_k$.
Now consider $n=k+1$: As $2^k\mid A_k$, there are two possibilities for the remainder of $A_k$ dividing $2^{k+1}$. $A_k=2^k\cdot l$, where $l$ is even, which means $A_k\equiv0\pmod{2^{k+1}}$, or $A_k=2^k\cdot(1+l')$, where $l'$ is even, which means $A_k\equiv2^k\pmod{2^{k+1}}$.
1. $A_k\equiv0\pmod{2^{k+1}}$. In this scenario we add the digit $2$ to the left side of $A_k$. So $A_{k+1}=\overline{2A_k}$. We show that $2^{k+1}\mid A_{k+1}$.
$A_{k+1}=2\cdot10^k+A_k=2\cdot2^k\cdot5^k+A_k=2^{k+1}\cdot5^k+A_k$. And we know that $2^{k+1}\cdot5^k\equiv0\pmod{2^{k+1}}$ and $A_k\equiv0\pmod{2^{k+1}}$. So $A_{k+1}\equiv0\pmod{2^{k+1}}$.
2. $A_k\equiv2^k\pmod{2^{k+1}}$. In this scenario we add the digit $1$ to the left side of $A_k$. So $A_{k+1}=\overline{1A_k}$. We show that $2^{k+1}\mid A_{k+1}$.
$A_{k+1}=1\cdot10^k+A_k=2^k\cdot5^k+A_k$. And we know that $A_k\equiv2^k\pmod{2^{k+1}}$. So $A_{k+1}\equiv2^k+2^k\cdot5^k\equiv2^k\cdot(1+5^k)\pmod{2^{k+1}}$.
$1+5^k$ is an even number so $A_{k+1}\equiv0\pmod{2^{k+1}}$.

## Supplementary Explanation

**Answer.** Such a number exists for every positive digit length n.

**Derivation/proof.** Base n=1: take A1=2. Suppose Ak has k digits in {1,2} and $A_k=2^k t$. Choose a leading digit d∈{1,2} with d+t even: d=2 when t is even and d=1 when t is odd. Set $A_{k+1}=d10^k+A_k=2^k(d5^k+t)$. Because $5^k$ is odd, the parenthesis is even by the choice of d. Hence $2^{k+1}\mid A_{k+1}$. Adding a nonzero leading digit creates exactly k+1 digits without changing the allowed suffix digits, completing induction.

The source notation $\overline{2A_k}$ and $\overline{1A_k}$ denotes digit concatenation, not multiplication.

The initial value is $A_1=2$. If $A_k=2^kt$ with integer $t$, the recurrence supplies one more factor of two in the next term; this establishes the divisibility induction.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Mathematical Induction - 数学归纳法]]
- [[Modular Congruence - 同余]]
- [[Induction Proof Method - 归纳证明法]]
- [[Modular Arithmetic Method - 模运算方法]]
