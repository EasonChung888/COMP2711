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

## 中文解析

强归纳能直接减去固定的 $n$。基例实际上覆盖 $m=0,1,\ldots,n-1$，之后 $m-n$ 一定落在已证明范围。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** Such integers $q,r$ exist for every $m\ge0$.

**Derivation/proof.** For $m<n$, take $q=0,r=m$. In a strong-induction step for $m\ge n$, let $w=m-n<m$. By the hypothesis $w=q'n+r'$ with $0\le r'<n$; then $m=(q'+1)n+r'$, giving the required pair.

### 中文解答

**推导。** 固定正整数 n，对 m 用强归纳。基础情形 $0\le m<n$，取 $q=0,r=m$ 即满足条件。设 $m\ge n$，并假设所有比 m 小的非负整数都可表示。因为 $0\le m-n<m$，归纳假设给 $m-n=q'n+r'$，其中 $0\le r'<n$。因此 $m=(q'+1)n+r'$，取 $q=q'+1,r=r'$ 即可。基础区间覆盖 m−n 可能落入的所有小值，故证明完整。

## Common Mistakes

- 只验证 $m=0$，却无法处理小于 $n$ 的其他数。
- 归纳步令 $w=m-1$ 却未处理余数进位。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
