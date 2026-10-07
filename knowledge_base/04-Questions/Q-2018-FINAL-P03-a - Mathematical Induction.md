---
id: "Q-2018-FINAL-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recursive Structures - 递归结构]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Structural Induction Method - 结构归纳法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Closure under differences first gives zero and negatives, then induction builds positive and negative multiples."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P03-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=5]]

Source verification: The printed induction step mixes a and n, writing $-(a+1)n$; the required expressions are $-a(k+1)$ and $a(k+1)$.

Source correction: PDF page5 switches k/n in the induction step and prints −an−a=−(a+1)n and an−(−a)=(a+1)n. The correct equalities are −an−a=−a(n+1) and an−(−a)=a(n+1), or the consistent k versions. The official closure-under-integer-multiples conclusion and difference-closure induction are unchanged.

## Question

(a) Let $P(n)$ be the statement “for any integer $a$, if $a\in S$ then $an\in S$ and $-an\in S$.” Prove $P(n)$ is true for all positive integers $n$ by induction.

Shared context: [[STEM-2018-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=5|physical PDF page 5]].

$P(0)$ is true because if $a\in S$, applying the recursive step, $a-a=0\in S$. $P(1)$ is true since $a\in S$ and $0-a=-a\in S$. Suppose $P(1)$ and $P(k)$ are true. Then $P(k+1)$ is true because, applying the recursive step, $-an-a=-(a+1)n\in S$ and $an-(-a)=(a+1)n\in S$.

## Supplementary Explanation

**Answer.** Every positive and negative integer multiple of an element of $S$ lies in $S$.

**Derivation/proof.** For any $a\in S$, closure gives $0=a-a\in S$ and $-a=0-a\in S$, proving $P(1)$. Assume $ak,-ak\in S$. Then $a(k+1)=ak-(-a)\in S$ and $-a(k+1)=(-ak)-a\in S$. These are exactly the two assertions for $k+1$, so induction proves $P(n)$. Zero multiples were separately obtained at the start.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recursive Structures - 递归结构]]
- [[Induction Proof Method - 归纳证明法]]
- [[Structural Induction Method - 结构归纳法]]
