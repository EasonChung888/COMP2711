---
id: "Q-2025F-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 3
question_number: "1(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Follow two modus-ponens steps and finish with disjunctive syllogism."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2025F-FINAL-P01-b

## Source

[[2025 Fall Final]]; printed item 1(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4]]

## Question

(b) [3 points] Let $p,q,r,s,t$ denote five propositions. You are given the following premises:
1. $p\land q$
2. $p\to(r\land q)$
3. $r\to(s\lor t)$
4. $\neg s$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion “$t$” is true.

## 中文解析

从第一前提提取 p，沿两条蕴含到 s 或 t，再由非 s 排除一支。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $t$。

**推导。** 1. 由 premise 1 的 $p\land q$ 用 simplification 得 $p$。
2. 与 premise 2 用 modus ponens 得 $r\land q$。
3. 由 2 用 simplification 得 $r$。
4. 与 premise 3 用 modus ponens 得 $s\lor t$。
5. 用 premise 4 的 $\neg s$ 与 4 作 disjunctive syllogism，得到 $t$。
每一步均只依赖给定前提或较早步骤，故前提全真时结论必真。

## Common Mistakes

- 析取 s 或 t 不能单独推出 t，必须结合非 s。
- 第一条前提中的 q 在这条证明链中不必单独使用，不能为用尽字母而增加无效推论。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Follow two modus-ponens steps and finish with disjunctive syllogism.
