---
id: "Q-2018-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Functions - 函数]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "A surjection onto a singleton can collapse an injective first map."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P04-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

## Question

(b) For functions on finite sets $f:S\to T,g:T\to U$, if $f$ is injective, and $g$ is surjective, is it true that $g\circ f$ must be injective? Prove it.

## 中文解析

后面的满射可以把多个中间值压成同一个结果，所以前面单射不保证复合单射。选择两个元素的恒等映射，再接到单元素集合的常值映射，便能同时满足两个前提并使结论失败。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** No. Let $S=T=\{a,b\},U=\{0\}$, $f$ be the identity and $g$ be constant zero.

**Derivation/proof.** The identity sends distinct inputs to distinct elements, so $f$ is injective. The image of $g$ is all of the singleton $U$, so $g$ is surjective. Yet $g(f(a))=0=g(f(b))$ with $a\ne b$, hence the composite is not injective. Every required premise is satisfied by this counterexample.

### 中文解答

**推导。** 不一定。取 $S=T=\{a,b\}$、$U=\{0\}$，定义 $f(a)=a,f(b)=b$，以及 $g(a)=g(b)=0$。$f$ 为恒等映射所以单射，$g$ 的像为整个 $U$ 所以满射；但 $g(f(a))=0=g(f(b))$ 且 $a\ne b$，复合映射非单射。反例满足全部有限集合及单满射前提，故足以否定断言。

## Common Mistakes

- 把 g 的满射当成单射。
- 反例没有检验两函数的定义域和值域相接。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Functions - 函数]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
