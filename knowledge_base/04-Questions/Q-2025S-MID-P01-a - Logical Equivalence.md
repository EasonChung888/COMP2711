---
id: "Q-2025S-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 2
question_number: "1(a)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Apply implication elimination, De Morgan and complement laws to a nested negation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2025S-MID-P01-a

## Source

[[2025 Spring Midterm]]; printed item 1(a); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=2]]

## Question

(a) Prove that the following expression is a tautology without using the truth table
$$\neg(\neg p\to(q\land\neg r))\lor\neg(\neg p\land r)$$

## 中文解析

先消去蕴含，再把两个否定展开；共同的 $p$ 与 $\neg p$ 会产生恒真支路。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $T$（tautology）。

**推导。** 先用蕴含等价式把内层的“若非 p 则 q 且非 r”改成析取，再用德摩根律分别展开外层否定。由蕴含律，原式等于 $\neg(p\lor(q\land\neg r))\lor(p\lor\neg r)$。德摩根律给出 $(\neg p\land(\neg q\lor r))\lor p\lor\neg r$。利用 $p\lor(\neg p\land X)\equiv p\lor X$，化为 $p\lor\neg q\lor r\lor\neg r$。由于 $r\lor\neg r=T$，整个析取式恒真。每一步是 命题逻辑律 的等价变形，没有使用 真值表。

## Common Mistakes

- 外层否定作用于整个蕴含式，不能只否定其前件。
- 最后出现一对互补命题已足以使析取恒真，无须证明其他命题为真。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Apply implication elimination, De Morgan and complement laws to a nested negation.
