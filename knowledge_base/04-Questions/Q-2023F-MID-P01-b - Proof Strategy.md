---
id: "Q-2023F-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 3
question_number: "1(b)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Disjunctive syllogism forces p, enabling two chained implications before taking their contrapositive."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 4
---
# Q-2023F-MID-P01-b

## Source

[[2023 Fall Midterm]]; printed item 1(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

## Question

Let $p,q,r,s,t$ denote five propositions. You are given the following set of premises:

1. $p\to(q\to r)$
2. $p\lor s$
3. $t\to q$
4. $\neg s$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion $\neg r\to\neg t$ is true.

## 中文解析

从 p 或 s 与非 s 可以先确定 p；这时第一条前提才给出 q 到 r 的蕴含。把 t 到 q 接到前面得到 t 到 r，取 contrapositive 后正好是题目要求的方向。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 四条前提推出 $\neg r\to\neg t$。

**推导。**

1. 按题目次序把前提记作① $p\to(q\to r)$，② $p\lor s$，③ $t\to q$，④ $\neg s$。由②④使用 disjunctive syllogism 得⑤ $p$；再由①⑤使用 modus ponens 得⑥ $q\to r$。
2. 将③的后件 $q$ 接到⑥的前件，使用 hypothetical syllogism 得⑦ $t\to r$。对⑦取 contrapositive，得到⑧ $\neg r\to\neg t$，正是结论。这里没有假设 $q,r,t$ 实际为真，也没有把 $r\to t$ 这个未经证明的逆命题混入推导。

### English solution

**Answer.** $\neg r\to\neg t$.

**Derivation/proof.** 1. $p\to(q\to r)$ (premise).
2. $p\lor s$ (premise).
3. $t\to q$ (premise).
4. $\neg s$ (premise).
5. $p$ (2,4; disjunctive syllogism).
6. $q\to r$ (1,5; modus ponens).
7. $t\to r$ (3,6; hypothetical syllogism).
8. $\neg r\to\neg t$ (7; contraposition).

The inference uses only the four premises; no truth value for q, r, or t is assumed.

## Common Mistakes

- 未先推出 p 就从第一条直接取 q→r 不合法。 / Discharge the outer antecedent first.
- 把 t→r 的逆命题当成逆否命题会得出错误方向。 / Negate and reverse both sides for contraposition.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Proof Strategy - 证明策略]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]

Disjunctive syllogism forces p, enabling two chained implications before taking their contrapositive.
