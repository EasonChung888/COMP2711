---
id: "Q-2013-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 10
solution_page: [10]
question_number: "7"
year: 2013
term: "spring"
exam_type: "final"
marks: 10
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The induction step must convert powers of five and eleven modulo three while retaining the exact target expression."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P07

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=10]].

## Question

Use induction to prove that, for any integer $n\ge1$, $5^n+2\cdot11^n$ is divisible by 3.

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=10|PDF physical page 10]].

**Proof: Base case:** When $n=1$, we have
$$5^1+2\times11^1=27,$$
which is divisible by 3. So, the statement is true for $n=1$.

**Induction hypothesis:** Now let $n>1$. Assume the statement is true for $n-1$, i.e.,
$$5^{n-1}+2\cdot11^{n-1}\text{ is divisible by 3.}$$

**Induction step:** Consider the case of $n$:
$$\begin{aligned}
5^n+2\cdot11^n&=5^{n-1}+4\cdot5^{n-1}+2\cdot11^{n-1}+20\cdot11^{n-1}\\
&=5^{n-1}+2\cdot11^{n-1}+4(5^{n-1}+5\cdot11^{n-1})\\
&=5^{n-1}+2\cdot11^{n-1}+4(5^{n-1}+2\cdot11^{n-1}+3\cdot11^{n-1})\\
&=3y+4(3y+3\cdot11^{n-1})\\
&=3(5y+4\cdot11^{n-1}),
\end{aligned}$$
which is divisible by 3.

By the principle of Mathematical Induction, we conclude that the statement is true for all integer $n\ge1$. Q.E.D

## Supplementary Explanation

**Answer.** The expression is divisible by $3$ for all $n\ge1$.

**Derivation/proof.** At $n=1$, $5+2\cdot11=27$. Assume $5^{n-1}+2\cdot11^{n-1}=3u$. Then
$$5^n+2\cdot11^n=(5^{n-1}+2\cdot11^{n-1})+4(5^{n-1}+5\cdot11^{n-1})=3u+4(3u+3\cdot11^{n-1})=3(5u+4\cdot11^{n-1}).$$
The induction hypothesis therefore makes the next expression a multiple of three, completing the proof.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
