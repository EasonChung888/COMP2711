---
id: "Q-2020-MID-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "4"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Existential instantiation and an arbitrary second variable combine existence with pairwise uniqueness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 10
---
# Q-2020-MID-P04

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

## Question

Recall that we can express unique existence as

(1) $\exists x(P(x)\land\forall y(P(y)\to x=y))$.

In many unique existence proofs, instead of proving (1), we prove the following:

(2) $\exists xP(x)$

(3) $\forall x\forall y(P(x)\land P(y)\to x=y)$.

Your task here is to prove (1) from (2) and (3) using the rules of inference for propositional and predicate logic.

## 中文解析

存在前提先选一个新的见证 c。唯一性前提对任意 y 实例化，在临时假设 P(y) 下得到 c=y，再撤销假设并对 y 全称推广。最后与 P(c) 合取并存在推广；新见证与任意变量的角色不可混淆。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** (2) and (3) entail (1).

**Derivation/proof.** 4. Introduce a fresh witness c with $P(c)$ from (2). 5. Let y be arbitrary and instantiate (3) to $(P(c)\land P(y))\to c=y$. 6. Temporarily assume $P(y)$. 7. Conjoin (4),(6), then apply modus ponens with (5) to obtain $c=y$. 8. Discharge (6): $P(y)\to c=y$. 9. Since y was arbitrary and absent from undischarged assumptions, universally generalize to $\forall y(P(y)\to c=y)$. 10. Conjoin with (4). 11. Existentially generalize c to x and discharge the fresh-witness choice, giving (1).

### 中文解答

**推导。** 从存在性和至多一个对象满足性质，推出唯一存在。以下编号承接题目的(1)–(3)。

4. 由(2)取新见证 $c$，得到 $P(c)$。
5. 对任意 $y$，由(3)全称实例化得 $(P(c)\land P(y))\to c=y$。
6. 暂时假设 $P(y)$。
7. 由(4)、(6)合取得 $P(c)\land P(y)$，再与(5)用肯定前件得 $c=y$。
8. 解除(6)的假设，得 $P(y)\to c=y$。
9. 因 $y$ 任意且不出现在未解除假设中，全称推广得 $\forall y(P(y)\to c=y)$。
10. 与(4)合取，得 $P(c)\land\forall y(P(y)\to c=y)$。
11. 对共同见证 $c$ 作存在推广，得 $\exists x(P(x)\land\forall y(P(y)\to x=y))$，正是(1)。

最终句没有自由出现的 $c$，所以可结束存在实例化子证明。不能只证明(3)就跳到(1)，因为空的满足集也符合至多唯一。

## Common Mistakes

- 把存在见证 c 当成任意对象做全称推广。
- 尚未证明 P(y) 就直接应用唯一性。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
