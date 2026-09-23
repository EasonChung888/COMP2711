---
id: "Q-2014-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 10
solution_page: [10]
question_number: "6(a)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Assuming a lowest-terms rational expression for the square root of three forces both numerator and denominator to be divisible by three."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=10]].

## Question

(a) $\sqrt3$ is an irrational number.

Shared context: [[STEM-2014-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

采用最简分数反证法。素数整除平方推出整除底数，最后得到分子分母同被 3 整除，与最简性矛盾。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $\sqrt3$ is irrational.

**Derivation/proof.** Assume $\sqrt3=m/n$ in lowest terms. Then $m^2=3n^2$, so the prime 3 divides $m^2$ and hence $m$; write $m=3k$. Substitution gives $n^2=3k^2$, so 3 also divides $n$, contradicting coprimality.

### 中文解答

**推导。** 反设 $\sqrt3=m/n$ 是最简分数，$n\ne0$，且 $\gcd(m,n)=1$。平方得 $m^2=3n^2$，因三是素数，$3\mid m^2$ 推出 $3\mid m$，写 $m=3k$。代回得 $9k^2=3n^2$，即 $n^2=3k^2$，同理 $3\mid n$。于是分子分母共有因子三，违反最简性，故根号三无理。

## Common Mistakes

- 从 $m^2=3n^2$ 直接断言 $m=n$。
- 没有要求分数为最简形式。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
