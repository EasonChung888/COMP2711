---
id: "Q-2025S-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 2
question_number: "1(c)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Chain addition, implication equivalence, biconditional elimination and disjunctive syllogism."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2025S-MID-P01-c

## Source

[[2025 Spring Midterm]]; printed item 1(c); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

## Question

(c) Let $p,q,r,s$ denote four propositions. You are given the following set of premises:

1. $\neg s\leftrightarrow(q\to r)$
2. $\neg q$
3. $(q\to s)\to(p\lor s)$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion $\neg s\land p$ is true.

## 中文解析

由 $\neg q$ 可令两个以 $q$ 为前件的蕴含为真，再分别取得 $\neg s$ 和 $p\lor s$。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\neg s\land p$。

**推导。** 1. $\neg q$，前提 2。
2. $\neg q\lor r$，由 1 用 附加律，故 $q\to r$。
3. $(q\to r)\to\neg s$，由 前提 1 的 双条件消去律。
4. $\neg s$，由 2、3 用 肯定前件式。
5. $\neg q\lor s$，由 1 用 附加律，故 $q\to s$。
6. $p\lor s$，由 5 与 前提 3 用 肯定前件式。
7. $p$，由 6、4 用 析取三段论。
8. $\neg s\land p$，由 4、7 用 合取规则。原答案最后写 $p\land\neg s$；用交换律即为所要求顺序。

## Common Mistakes

- 不能由双条件的一侧为真直接取得两侧以外的命题，应明确取出所用方向。
- 析取三段论消去的是已知为假的 $s$，不能误消去 $p$。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Chain addition, implication equivalence, biconditional elimination and disjunctive syllogism.
