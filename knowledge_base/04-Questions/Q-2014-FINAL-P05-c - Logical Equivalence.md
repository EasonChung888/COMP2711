---
id: "Q-2014-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 9
solution_page: [9]
question_number: "5(c)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The universal/existential equivalence claim needs a proof that follows the witness and scope of implication rather than symbol rearrangement."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P05-c

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=9]].

## Question

(c) $\exists x\in U\ p(x)\Rightarrow\forall y\in V\ q(y)$ and $\forall x\in U\forall y\in V(p(x)\Rightarrow q(y))$

Shared context: [[STEM-2014-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

当左边的存在前件为假时，所有 $p(x)$ 都假；当它为真时，为使蕴含成立必须所有 $q(y)$ 都真。这正是右边对每一对 $(x,y)$ 的要求。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** Yes.

**Derivation/proof.** The left formula is $\neg\exists x,p(x)\lor\forall y,q(y)=\forall x\neg p(x)\lor\forall yq(y)$. Distributing universal quantifiers over this two-variable disjunction gives $\forall x\forall y(\neg p(x)\lor q(y))$, the right formula.

### 中文解答

**推导。** 先证左推右。若没有 x 满足 p，则每个蕴含的前件均假，右式真；若有这样的 x，左式迫使所有 y 满足 q，于是右式也真。反向，假设右式成立；若存在 u 满足 p，对任意 y 用右式和 $p(u)$ 得 $q(y)$，故全称后件成立；若不存在 u，左式前件假而自动真。两方向均成立，所以等价；空域时上述真假条件也一致。

## Common Mistakes

- 把 $\neg\exists x$ 写成 $\exists x\neg$。
- 错误把全称量词换成存在量词。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
