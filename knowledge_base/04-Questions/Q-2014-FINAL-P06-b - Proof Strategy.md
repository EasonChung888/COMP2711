---
id: "Q-2014-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 10
solution_page: [10]
question_number: "6(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The even-product proof needs a complete parity split or contrapositive argument, including the case where both factors are odd."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=10]].

## Question

(b) If $m$ and $n$ are integers such that $mn$ is even, then $m$ is even or $n$ is even.

Shared context: [[STEM-2014-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

结论含‘或’时常用逆否：两个数都不是偶数即都为奇数，乘积仍为奇数，正好反驳原条件。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** The statement follows by contraposition.

**Derivation/proof.** Assume $m,n$ are both odd: $m=2k+1$, $n=2h+1$. Then $mn=4kh+2k+2h+1=2(2kh+k+h)+1$, odd. Thus if $mn$ is even, they cannot both be odd, so at least one is even.

### 中文解答

**推导。** 证明逆否命题：若 m、n 都不是偶数，则两者均为奇数。写 $m=2k+1,n=2h+1$，其中 k、h 为整数。相乘得 $mn=4kh+2k+2h+1=2(2kh+k+h)+1$，仍为奇数。所以 mn 若为偶数，两因子不可能同时奇数，即至少一个为偶数。

## Common Mistakes

- 从 $mn$ 偶直接说两个因子都偶。
- 反证中把奇数乘积展开成偶数。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
