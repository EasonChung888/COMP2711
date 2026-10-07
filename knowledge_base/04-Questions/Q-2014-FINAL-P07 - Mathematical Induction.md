---
id: "Q-2014-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 11
solution_page: [11]
question_number: "7"
year: 2014
term: "fall"
exam_type: "final"
marks: 8
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The induction proof must use the fixed divisor n while keeping the quotient and remainder bounds valid at the successor step."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P07

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=11]].

## Question

Let $n$ be a positive integer. Use induction to prove that, for any non-negative integer $m$, there exist integers $q$ and $r$ such that
$$m=qn+r,\qquad0\le r<n.$$

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=11|PDF physical page 11]].

- **Proof by weak induction:**

**Base Case:** If $m<n$, we set $q=0$ and $r=m$. Then (1) is true.

**Induction Hypothesis:** Assume (1) is true for the case of $m-1$. That is, there exist $q'$ and $r'$ such that
$$m-1=q'n+r',\quad0\le r'<n.$$
**Inductive Step:** Now consider the case of $m$. There are two cases:

(a) $r'<n-1$. In the case, we set $q=q'$ and $r=r'+1$. Then (1) is true.

(b) $r'=n-1$. In the case, we set $q=q'+1$ and $r=0$. Then (1) is true.

By the principle of Mathematical Induction, we conclude that (1) is true for all non-negative integers $m$.

- **Proof by strong induction:**

**Base Case:** If $m<n$, we set $q=0$ and $r=m$. Then (1) is true.

**Induction Hypothesis:** Assume (1) is true for any non-negative integer $w$ such that $n\le w<m$.

**Inductive Step:** Now consider the case of $n\le m$. Let $w=m-n$. By the induction hypothesis, there exist $q'$ and $r'$ such that
$$w=q'n+r',\quad0\le r'<n.$$
Hence,
$$m=w+n=(q'+1)n+r'.$$
So, if we set $q=q'+1$ and $r=r'$, then (1) is true.

By the principle of Mathematical Induction, we conclude that (1) is true for all non-negative integers $m$.

## Supplementary Explanation

**Answer.** Such integers $q,r$ exist for every $m\ge0$.

**Derivation/proof.** For $m<n$, take $q=0,r=m$. In a strong-induction step for $m\ge n$, let $w=m-n<m$. By the hypothesis $w=q'n+r'$ with $0\le r'<n$; then $m=(q'+1)n+r'$, giving the required pair.

The complete strong-induction hypothesis covers all $0\le w<m$. Since $n>0$, $0\le m-n<m$. The base interval therefore covers the possible small values of $m-n$.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
