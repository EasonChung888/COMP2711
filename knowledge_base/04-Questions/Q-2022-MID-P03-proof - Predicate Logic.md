---
id: "Q-2022-MID-P03-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "3"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Rich color forces honey feeding, which excludes largeness, with an arbitrary bird supporting universal generalization."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2022-MID-P03-1 - Predicate Logic]]","[[Q-2022-MID-P03-2 - Predicate Logic]]","[[Q-2022-MID-P03-3 - Predicate Logic]]","[[Q-2022-MID-P03-4 - Predicate Logic]]"]
---
# Q-2022-MID-P03-proof

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Prerequisite context (editorial): [[Q-2022-MID-P03-1 - Predicate Logic]]; [[Q-2022-MID-P03-2 - Predicate Logic]]; [[Q-2022-MID-P03-3 - Predicate Logic]]; [[Q-2022-MID-P03-4 - Predicate Logic]]. The three translated premises are $\forall x(P(x)\to S(x))$, $\forall x(Q(x)\to\neg R(x))$, and $\forall x(\neg R(x)\to\neg S(x))$. The fourth translation, $\forall x(P(x)\to\neg Q(x))$, is the conclusion to prove. 本题需要按原题次序区分三条前提与结论，不能将第四条也作为已知前提。

## Question

Let the first three statements be premises and the fourth be the conclusion. Show a step-by-step proof using inference rules.

Shared context: [[STEM-2022-MID-P03 - Shared Problem Prompt]].

## 中文解析

对任意鸟 a 临时假设它是蜂鸟，再依次推出颜色丰富、食蜜、不大。中间两次用逆否而非逆命题。最后撤销蜂鸟假设得到蕴含，并因 a 任意而做全称推广，每步注明依赖编号。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall x(P(x)\to\neg Q(x))$ follows.

**Derivation/proof.** 1. ∀x(P(x)→S(x)) (premise). 2. ∀x(Q(x)→¬R(x)) (premise 2 by equivalence). 3. ∀x(¬R(x)→¬S(x)) (premise). 4. Take arbitrary bird a and assume P(a). 5. S(a) (1,4). 6. R(a) (3 instantiated at a, then contrapositive and 5). 7. ¬Q(a) (2 instantiated, contrapositive with 6). 8. P(a)→¬Q(a) (4–7, discharge assumption). 9. ∀x(P(x)→¬Q(x)) (8, universal generalization). The arbitrary bird a has no extra assumptions after step8.

### 中文解答

**推导。** 保留题目要求的依赖编号，逐步证明：

1. $\forall x(P(x)\to S(x))$，前提(1)。
2. $\forall x(Q(x)\to\neg R(x))$，前提(2)的等价式。
3. $\forall x(\neg R(x)\to\neg S(x))$，前提(3)。
4. 任取鸟 $a$，暂时假设 $P(a)$。
5. $S(a)$，由(1)在 $a$ 实例化，再与(4)肯定前件。
6. $R(a)$，由(3)实例化的逆否式 $S(a)\to R(a)$ 与(5)。
7. $\neg Q(a)$，由(2)实例化的逆否式 $R(a)\to\neg Q(a)$ 与(6)。
8. $P(a)\to\neg Q(a)$，解除(4)的假设，由(4)–(7)条件证明。
9. $\forall x(P(x)\to\neg Q(x))$，由(8)全称推广。

第(8)步后没有针对任意对象 $a$ 的额外未解除假设，所以最后推广合法。两次用的是等价逆否，不是未经支持的逆命题。

## Common Mistakes

- 把 ¬R→¬S 的逆命题当成 R→S。
- 没有撤销个体假设就直接全称推广。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]

- Prerequisite: [[Q-2022-MID-P03-1 - Predicate Logic]]
- Prerequisite: [[Q-2022-MID-P03-2 - Predicate Logic]]
- Prerequisite: [[Q-2022-MID-P03-3 - Predicate Logic]]
- Prerequisite: [[Q-2022-MID-P03-4 - Predicate Logic]]
