---
id: "Q-2025F-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 4
question_number: "1(c)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Extract a conjunction, apply disjunctive syllogism and then modus tollens."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 5
---
# Q-2025F-MID-P01-c

## Source

[[2025 Fall Midterm]]; printed item 1(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=4]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=5]]

## Question

(c) [5 points] Let $p,q,r,t$ denote four propositions. You are given the following premises:
1. $p\to(r\to q)$
2. $\neg q$
3. $(q\lor p)\land t$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion “$\neg r\land t$” is true.

## 中文解析

先由第三条取得 $q\lor p$ 与 $t$，再用 $\neg q$ 连续排除两种可能。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\neg r\land t$。

**推导。** 1. $q\lor p$ 与 $t$，由 premise 3 用 simplification。
2. $p$，由 1 的析取与 premise 2 的 $\neg q$ 用 disjunctive syllogism。
3. $r\to q$，由 2 与 premise 1 用 modus ponens。
4. $\neg r$，由 3 与 $\neg q$ 用 modus tollens。
5. $\neg r\land t$，由 4 与 1 的 $t$ 用 conjunction。
每个结论均来自前提或已得公式，且最后顺序正是题目要求。原答案写相反的合取顺序，可由交换律调整。

## Common Mistakes

- 不能由 $p\to(r\to q)$ 直接断言 $r\to q$，须先得到 $p$。
- 否定后件推出否定前件是 modus tollens，不能错误地否定结论 $t$。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Extract a conjunction, apply disjunctive syllogism and then modus tollens.
