---
id: "Q-2025F-MID-P02-c-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 7
question_number: "2(c)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Instantiate the existential witness, apply the universal premise to it, then generalize the conclusion."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [8]
verification_status: "verified"
related_questions: ["[[Q-2025F-MID-P02-c-premise1 - Predicate Logic]]","[[Q-2025F-MID-P02-c-premise2 - Predicate Logic]]"]
---
# Q-2025F-MID-P02-c-proof

## Source

[[2025 Fall Midterm]]; printed item 2(c); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]]

Published official answer with scope clarification: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8]]

Source correction: Page 8 omits grouping parentheses in the existential premise and conclusion. The printed proof selects the same fresh x₀ for E and ¬S, applies C(x₀)→S(x₀), derives ¬C(x₀), and generalizes E(x₀)∧¬C(x₀). Thus it establishes the intended ∃x(E(x)∧¬C(x)) conclusion; explicit whole-conjunction parentheses clarify a secondary notation slip rather than replace the official proof.

Prerequisite context (editorial): [[Q-2025F-MID-P02-c-premise1 - Predicate Logic]]. Premise 1 is $\forall x(C(x)\to S(x))$.

Prerequisite context (editorial): [[Q-2025F-MID-P02-c-premise2 - Predicate Logic]]. Premise 2 is $\exists x(E(x)\land\neg S(x))$.

## Question

![[STEM-2025F-MID-P02-c - Shared Problem Prompt#Shared printed wording]]

then write a formal proof for the following statement:

Some excuses are not clear explanations.

## 中文解析

选出第二前提的同一个见证，并把第一前提实例化到该对象，便可否定它的清楚解释性质。

## Detailed Solution

Provenance: published official answer, independently checked; the source grouping clarification is retained above.

### 中文解答

**答案。** $\exists x(E(x)\land\neg C(x))$。

**推导。** 导入两前提 $\forall x(C(x)\to S(x))$ 与 $\exists x(E(x)\land\neg S(x))$。由 existential instantiation 取新见证 $a$，有 $E(a)\land\neg S(a)$，simplification 得 $E(a)$ 和 $\neg S(a)$。把全称前提实例化到 $a$ 得 $C(a)\to S(a)$；与 $\neg S(a)$ 用 modus tollens 得 $\neg C(a)$。再 conjunction 得 $E(a)\land\neg C(a)$，用 existential generalization 得 $\exists x(E(x)\land\neg C(x))$。由于 $a$ 是新见证且最后已被存在推广消去，没有错误地断言所有借口都不清楚。

## Common Mistakes

- 新见证只代表某个存在对象，不能把结论提升为全称命题。
- 最后推广必须同时绑定两个性质的变量，不能只绑定 $E(x)$。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Instantiate the existential witness, apply the universal premise to it, then generalize the conclusion.

- Prerequisite / related: [[Q-2025F-MID-P02-c-premise1 - Predicate Logic]]: 把全称满意条件应用到存在见证。 Premise 1 is $\forall x(C(x)\to S(x))$.
- Prerequisite / related: [[Q-2025F-MID-P02-c-premise2 - Predicate Logic]]: 从不满意借口的存在式选取同一个见证。 Premise 2 is $\exists x(E(x)\land\neg S(x))$.
