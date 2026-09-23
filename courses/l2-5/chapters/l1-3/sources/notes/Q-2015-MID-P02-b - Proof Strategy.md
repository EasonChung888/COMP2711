---
id: "Q-2015-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 5
solution_page: [6]
question_number: "2(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Three inference moves connect not q to not p, then a conjunction, and finally its r component."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P02-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=6]]

## Question

(b) Premises:

1. $\neg q$
2. $p\to q$
3. $\neg p\to(r\land s)$

Conclusion: $r$

Shared context: [[STEM-2015-MID-P02 - Shared Problem Prompt]].

## 中文解析

由 $p\to q$ 和 $\neg q$ 得到 $\neg p$；这恰好是第三个前提的前件，可推出 $r\land s$。最后用合取消去取出所需的 $r$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $r$ follows.

**Derivation/proof.** 1. $\neg q$ and $p\to q$ (premises).
2. $\neg p$ (modus tollens, 1).
3. $\neg p\to(r\land s)$ (premise).
4. $r\land s$ (modus ponens, 2–3).
5. $r$ (simplification, 4).

### 中文解答

**推导。** 由前提 $p\to q$ 和 $\neg q$ 用否定后件得 $\neg p$。将它代入第三个前提 $\neg p\to(r\land s)$，用肯定前件得 $r\land s$。最后用合取消去得到 r。顺序是先得到第三前提所需的条件，再取出目标分量。

## Common Mistakes

- 错误地从 $\neg q$ 推出 $p$。
- 只写 $r\land s$ 而未给出最终的合取消去规则。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
