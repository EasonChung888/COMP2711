---
id: "Q-2015-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 5
solution_page: [6]
question_number: "2(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Proof Strategy - 证明策略]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Proof Method - 证明方法]]","[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The proof needs both components of p and q, a De Morgan transformation, and a final modus-tollens step."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P02-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=6]]. The printed line 5 cites “Modus Ponens (3,4)”, but requires lines (2,4): line 2 is $p$, whereas line 3 is $q$. The conclusion and formula sequence remain official; the corrected cross-reference is stated explicitly.

## Question

(c) Premises:

1. $s\to r$
2. $p\land q$
3. $p\to\neg(q\land r)$

Conclusion: $\neg s$

Shared context: [[STEM-2015-MID-P02 - Shared Problem Prompt]].

## 中文解析

合取前提给出 $p$ 和 $q$。利用 $p$ 推出并非 $q,r$ 同真；因为 $q$ 已真，所以 $r$ 必假。最后由 $s\to r$ 否定后件，得到 $\neg s$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $\neg s$ follows.

**Derivation/proof.** 1. $p,q$ (simplification of the premise $p\land q$).
2. $\neg(q\land r)$ (modus ponens with $p\to\neg(q\land r)$ and $p$).
3. $\neg q\lor\neg r$ (De Morgan, 2).
4. $\neg r$ (disjunctive syllogism using $q$, 3).
5. $\neg s$ (modus tollens using $s\to r$, 4).

The printed solution's step 5 cites its line 3 ($q$) where line 2 ($p$) is needed; the derivation above uses the correct premise.

### 中文解答

**推导。** 由 $p\land q$ 分别作合取消去得 p、q。用 p 和第三前提作肯定前件，得 $\neg(q\land r)$；德摩根律化为 $\neg q\lor\neg r$。因为 q 已成立，析取三段论给 $\neg r$。最后与 $s\to r$ 用否定后件，得 $\neg s$。源页第五行误引第三行 q，实际必须引用第二行 p；这是行号引用错误，结论及上述公式均可逐步验证。

## Common Mistakes

- 把 $\neg(q\land r)$ 误变成 $\neg q\land\neg r$。
- 使用 $p\to\neg(q\land r)$ 时引用 $q$，而非其实际前件 $p$。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Logical Equivalence - 逻辑等价]]
- [[Proof Method - 证明方法]]
- [[Logic-Law Method - 逻辑律方法]]
