---
id: "Q-2015-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 5
solution_page: [6]
question_number: "2(a)"
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
difficulty_basis: "Modus tollens first produces a disjunction, then the negated first disjunct isolates q."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P02-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=6]]

## Question

(a) Premises:

1. $\neg p$
2. $\neg r$
3. $\neg(p\lor q)\to r$

Conclusion: $q$

Shared context: [[STEM-2015-MID-P02 - Shared Problem Prompt]].

## 中文解析

先利用 $r$ 不成立对第三个前提作否定后件，得到 $p\lor q$。再用已知的 $\neg p$ 排除第一种可能，由析取三段论得到 $q$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $q$ follows.

**Derivation/proof.** 1. $\neg(p\lor q)\to r$ (premise).
2. $\neg r$ (premise).
3. $\neg\neg(p\lor q)$ (modus tollens, 1–2).
4. $p\lor q$ (double negation, 3).
5. $\neg p$ (premise).
6. $q$ (disjunctive syllogism, 4–5).

### 中文解答

**推导。** 从前提 $\neg(p\lor q)\to r$ 与 $\neg r$ 用否定后件，得 $\neg\neg(p\lor q)$。双重否定律给 $p\lor q$。再和前提 $\neg p$ 用析取三段论，排除 p，得到 q。三步各自使用合法推理规则，故结论由全部给定前提推出。

## Common Mistakes

- 否定后件后漏掉双重否定。
- 从 $p\lor q$ 单独直接断言 $q$。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
