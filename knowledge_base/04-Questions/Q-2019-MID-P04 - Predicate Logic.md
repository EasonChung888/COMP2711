---
id: "Q-2019-MID-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "One existential witness must be reused in both universal premises before conjunction and generalization."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 8
---
# Q-2019-MID-P04

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=6]]

Source verification: The printed last line uses R(w) instead of R(x). The conclusion and preceding witness proof require the same bound variable x.

Source correction: PDF page6 answer step10 prints ∃x(Q(x)∧R(w)), although the requested conclusion and the common witness in steps2–9 require R(x). Replace only R(w) by R(x) in that final existential generalization. The official validity conclusion and preceding nine inferences remain correct.

## Question

Consider the following argument:

Premise 1: $\exists xP(x)$.

Premise 2: $\forall x(P(x)\to Q(x))$.

Premise 3: $\forall x(P(x)\to R(x))$.

Conclusion: $\exists x(Q(x)\land R(x))$.

Show that the argument is valid. Number your steps and refer to those numbers in the reason you give for each step, but it is not necessary to give the name of the inference rule.

## 中文解析

存在前提先提供一个见证 c。两条全称前提都在同一个 c 上实例化，才能得到同一对象同时满足 Q 和 R。最后合取并存在推广；不能从两个不同对象分别成立推出同一对象同时成立。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** The argument is valid.

**Derivation/proof.** Use one fresh witness throughout the numbered inference.

1. $\exists xP(x)$ (premise).
2. Let $c$ be a fresh witness with $P(c)$ (1).
3. $\forall x(P(x)\to Q(x))$ (premise).
4. $P(c)\to Q(c)$ (3, instantiate at $c$).
5. $\forall x(P(x)\to R(x))$ (premise).
6. $P(c)\to R(c)$ (5, instantiate at $c$).
7. $Q(c)$ (2,4).
8. $R(c)$ (2,6).
9. $Q(c)\land R(c)$ (7,8).
10. $\exists x(Q(x)\land R(x))$ (9, existential generalization; discharge the fresh witness).

### 中文解答

**推导。** 使用同一个新见证 $c$，避免把两个不同对象的性质错误合并。

1. $\exists xP(x)$，前提 1。
2. $P(c)$，由(1)存在实例化，$c$ 是新取的见证。
3. $\forall x(P(x)\to Q(x))$，前提 2。
4. $P(c)\to Q(c)$，由(3)全称实例化。
5. $\forall x(P(x)\to R(x))$，前提 3。
6. $P(c)\to R(c)$，由(5)全称实例化。
7. $Q(c)$，由(2)、(4)肯定前件。
8. $R(c)$，由(2)、(6)肯定前件。
9. $Q(c)\land R(c)$，由(7)、(8)合取。
10. $\exists x(Q(x)\land R(x))$，由(9)存在推广。

最后一行两个谓词的自变量须一同量化成 $x$；印本误写的 $R(w)$ 没有来自任何前提。

## Common Mistakes

- 对 Q 与 R 使用不同存在见证。
- 照抄源解最后的 R(w)，留下未量化的自由变量。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
