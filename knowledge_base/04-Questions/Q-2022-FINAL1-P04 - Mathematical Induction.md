---
id: "Q-2022-FINAL1-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 3
question_number: "4"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Modular Congruence - 同余]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Multiply the inductive expression by five and isolate a remainder with factor twelve."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 8
---
# Q-2022-FINAL1-P04

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=3]]

## Question

Use induction to prove that, for any integer $n\ge1$, $5^n+2\cdot11^n$ is divisible by 3.

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-1.pdf#page=3|physical PDF page 3]].

> Base case: When $n=1$, we have $5^1+2\cdot11^1=27$, which is divisible by 3. So, the statement is true for $n=1$.
>
> Induction hypothesis: Now let $n>1$. Assume the statement is true for $n-1$, i.e. $5^{n-1}+2\cdot11^{n-1}$ is divisible by 3.
>
> Induction step: Consider the case of $n$:
>
> $$\begin{aligned}
> 5^n+2\cdot11^n&=5^{n-1}+4\cdot5^{n-1}+2\cdot11^{n-1}+20\cdot11^{n-1}\\
> &=5^{n-1}+2\cdot11^{n-1}+4(5^{n-1}+5\cdot11^{n-1})\\
> &=5^{n-1}+2\cdot11^{n-1}+4(5^{n-1}+2\cdot11^{n-1}+3\cdot11^{n-1})\\
> &=3y+4(3y+3\cdot11^{n-1})\\
> &=3(5y+4\cdot11^{n-1})
> \end{aligned}$$
> which is divisible by 3.

## Supplementary Explanation

**Answer.** $3\mid(5^n+2\cdot11^n)$ for all integers $n\ge1$.

**Derivation/proof.** Base n=1:5+2·11=27, divisible by 3. Assume 5^k+2·11^k=3t for some integer t. Then $5^{k+1}+2\cdot11^{k+1}=5(5^k+2\cdot11^k)+12\cdot11^k=15t+12\cdot11^k=3(5t+4\cdot11^k)$. The final parenthesis is an integer, proving the next instance. Ordinary induction completes the required divisibility proof.

The base is $27=3\cdot9$. The supplementary step is $5(5^k+2\cdot11^k)+12\cdot11^k=3(5t+4\cdot11^k)$ with an integer in parentheses, explicitly using the induction hypothesis.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Mathematical Induction - 数学归纳法]]
- [[Modular Congruence - 同余]]
- [[Induction Proof Method - 归纳证明法]]
- [[Modular Arithmetic Method - 模运算方法]]
