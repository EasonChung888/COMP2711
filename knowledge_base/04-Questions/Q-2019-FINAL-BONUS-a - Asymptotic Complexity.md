---
id: "Q-2019-FINAL-BONUS-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 17
solution_page: [17]
question_number: "Bonus Problem(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["classification"]
difficulty: 4
difficulty_basis: "The hidden linear-bound constant increases when the recurrence is applied, so the induction does not preserve a uniform bound."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-FINAL-BONUS-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=17]]

## Question

(a) Identify the mistake in the proof.

Shared context: [[STEM-2019-FINAL-BONUS - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=17|physical PDF page 17]].

The hidden constant in the induction conclusion $f_n=O(n)$ is different (larger) from the one in the induction hypothesis $f_{n-1}=O(n-1)$. Generally, one cannot use asymptotic notation in induction proofs, because the induction step is implicitly applied many times, so the constant coefficient will no longer be a constant.

## Supplementary Explanation

**Answer.** The induction silently changes the hidden big-$O$ constant instead of preserving one constant for all n.

**Derivation/proof.** An actual claim $f_n\le Cn$ needs one fixed C and a threshold. From the induction hypothesis $f_{n-1}\le C(n-1)$, the recurrence gives only $f_n\le2C(n-1)+n=(2C+1)n-2C$. This is generally not bounded by the same $Cn$, since their difference is $(C+1)n-2C$, positive for large n. Writing O again hides this growth of constants. A statement about the single value f(1) also cannot by itself establish an asymptotic bound.

A value at the single input $n=1$ is also not by itself a valid base case for an asymptotic statement.

The same constant must work throughout the proposed induction. The unstrengthened estimate would require $(C+1)n\le2C$ for arbitrarily large $n$, which fails for each fixed $C$; this explains why that particular induction bound cannot close.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]
