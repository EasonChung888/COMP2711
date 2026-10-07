---
id: "Q-2015-FINAL-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 14
question_number: "8(b)"
year: 2015
term: "fall"
exam_type: "final"
marks: 6
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The induction starts at zero and the successor step must include n equals one as well as larger indices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P08-b

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=14]]

Printed incomplete proof: ![[knowledge_base/past_paper/2015-final.pdf#page=14]]. PDF page14 establishes n=0 but prints “Now consider n>1” in the inductive step. This omits the 0→1 transition. The corrected proof uses every n≥1 and independently verifies T(1)=33. The complete solution is an independently derived proof completion.

## Question

(b) Prove the correctness of your solution by induction.

Shared context: [[STEM-2015-FINAL-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=14|PDF physical page 14]].

(b) We need to prove:
$$T(n)=5\cdot7^n-2\qquad(1)$$
**Base case:** When $n=0$, $T(0)=3=5\cdot7^0-2$. Equation (1) is true.

**Inductive step:** Now consider $n>1$. Assume Equation (1) is true for the case of $n-1$, i.e.,
$$T(n-1)=5\cdot7^{n-1}-2.$$
For the case of $n$, we have
$$\begin{aligned}T(n)&=7T(n-1)+12\\&=7(5\cdot7^{n-1}-2)+12&&\text{(induction hypothesis)}\\&=5\cdot7^n-2.\end{aligned}$$
By the weak principle of mathematical induction, we conclude that Equation (1) is true for all $n\ge0$.

## Supplementary Explanation

**Answer.** $T(n)=5\cdot7^n-2$ for every integer $n\ge0$.

**Derivation/proof.** Base: $T(0)=3=5\cdot7^0-2$. Let $n\ge1$ and assume $T(n-1)=5\cdot7^{n-1}-2$. Then $T(n)=7(5\cdot7^{n-1}-2)+12=5\cdot7^n-2$. Induction proves the formula. The printed proof says $n>1$ in the step; using $n\ge1$ includes the otherwise omitted transition from 0 to 1.

The constant terms combine as $-14+12=-2$.

Expanding the inductive substitution gives $5\cdot7^n-14+12=5\cdot7^n-2$.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]
