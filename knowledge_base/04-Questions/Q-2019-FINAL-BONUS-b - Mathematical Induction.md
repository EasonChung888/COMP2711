---
id: "Q-2019-FINAL-BONUS-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 17
solution_page: [17]
question_number: "Bonus Problem(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Asymptotic Bound Method - 渐近界方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Strengthening the exponential bound with a negative linear correction absorbs the added n term in the recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 7
---
# Q-2019-FINAL-BONUS-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=17]]

## Question

(b) Prove that $f(n)=O(2^n)$ by induction.

Shared context: [[STEM-2019-FINAL-BONUS - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=17|physical PDF page 17]].

We will show that $f(n)\le2\cdot2^n-n-2$.
Base case: When $n=1$, $f(n)=1\le2\cdot2^1-1-2$.
Induction step: Assuming $f_{n-1}\le2\cdot2^{n-1}-(n-1)-2$, we will prove $f_n\le2\cdot2^n-n-2$:
$$\begin{aligned}f_n&=2f_{n-1}+n\\&\le2(2\cdot2^{n-1}-(n-1)-2)+n\quad\text{(induction hypothesis)}\\&=2\cdot2^n-n-2.\end{aligned}$$
Comment: It is impossible to prove $f_n\le c\cdot2^n$ by induction, no matter how you choose the constant $c$. Interestingly, and somehow counter-intuitively, it is possible to prove the stronger claim $f(n)\le c\cdot2^n-n-2$. Fundamentally, this is because a stronger claim will also make the induction hypothesis stronger, which sometimes makes the induction step easier to go through. This technique is known as “strengthening the induction hypothesis”.

## Supplementary Explanation

**Answer.** $f_n=2^{n+1}-n-2\le2\cdot2^n$, so $f_n=O(2^n)$.

**Derivation/proof.** Prove the stronger exact identity by induction. At n=1, $2^2-1-2=1=f_1$. Assume $f_{n-1}=2^n-(n-1)-2$. Then $f_n=2[2^n-(n-1)-2]+n=2^{n+1}-n-2$. Thus the identity holds for all $n\ge1$, and immediately gives the fixed bound $f_n\le2\cdot2^n$. Equivalently, the source's strengthened inequality $f_n\le2\cdot2^n-n-2$ propagates by the same algebra. Directly iterating the recurrence verifies its first values $1,4,11,26$, matching the formula.

The first four values $1,4,11,26$ satisfy both the recurrence and formula. Positivity together with $f_n\le2\cdot2^n$ gives fixed constant $C=2$ and threshold $n_0=1$.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Recurrence-Solving Method - 递推求解法]]
