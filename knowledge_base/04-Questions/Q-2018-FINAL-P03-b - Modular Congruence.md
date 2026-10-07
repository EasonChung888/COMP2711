---
id: "Q-2018-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Recursion - 递归]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Recursive Structures - 递归结构]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Structural Induction Method - 结构归纳法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["calculation","proof"]
difficulty: 4
difficulty_basis: "The Euclidean remainder chain constructs 78 inside S and two containment proofs establish exact equality."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P03-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=5]]

## Question

(b) Let $A_m$ be the set of all multiples of some integer $m$. Find the integer $m$ such that $S=A_m$, and provide a complete proof of this equality, showing all steps.

Shared context: [[STEM-2018-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=5|physical PDF page 5]].

Part (a) shows that $4914s\in S$ and $3588t\in S$ for all $s,t$, so $\gcd(4914,3588)\in S$. Therefore
$$\begin{aligned}\gcd(4914,3588)&=\gcd(3588,1326)=\gcd(1326,936)=\gcd(936,390)\\&=\gcd(390,156)=\gcd(156,78)=78\in S.\end{aligned}$$
$A_{78}\subseteq S$: Using part (a) directly, since $78\in S$, then $78n\in S$ for any integer $n$.
$S\subseteq A_{78}$: $4914$ and $3588$ are multiples of $78$. Suppose $x$ and $y$ are multiples of $78$. Then clearly $x-y$ is a multiple of $78$. By structural induction, $S\subseteq A_{78}$.

## Supplementary Explanation

**Answer.** $m=78$ is the positive generator, and $S=78\mathbb Z$ (also $A_{-78}=A_{78}$).

**Derivation/proof.** Euclid gives $4914=3588+1326$, $3588=2\cdot1326+936$, $1326=936+390$, $936=2\cdot390+156$, $390=2\cdot156+78$, $156=2\cdot78$. Every remainder belongs to $S$: previous entries and their multiples belong by part (a), and differences are allowed. Thus $78\in S$, and part (a), together with $0\in S$, gives $78\mathbb Z\subseteq S$. Conversely $4914=63\cdot78$ and $3588=46\cdot78$. Differences of multiples of 78 remain multiples, so structural induction gives $S\subseteq78\mathbb Z$. Both inclusions prove equality.

The basis numbers satisfy $4914=63\cdot78$ and $3588=46\cdot78$. A generator $m=-78$ gives the same set as $m=78$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Modular Congruence - 同余]]
- [[Recursive Structures - 递归结构]]
- [[Mathematical Induction - 数学归纳法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Structural Induction Method - 结构归纳法]]
- [[Induction Proof Method - 归纳证明法]]
