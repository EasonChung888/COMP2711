---
id: "Q-2022-MID-P01-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "1(a)(ii)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Eliminating the inner implication leaves a disjunction of three negated variables."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P01-a-ii

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

NOT ($\neg$) and OR ($\lor$).

Shared context: [[STEM-2022-MID-P01-a - Shared Problem Prompt]].

## 中文解析

先把 b 推出非 c 改写为非 b 或非 c，再与外面的非 a 合并。三个否定文字的析取只有在 a、b、c 全真时才为假，可用这一点核对结果。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\neg a\lor\neg b\lor\neg c$.

**Derivation/proof.** Replace b→¬c by ¬b∨¬c using implication elimination. The original becomes ¬a∨(¬b∨¬c), and associativity removes the unnecessary parentheses. Only negation and OR remain. The expression is false precisely when all three variables are true, matching the original.

### 中文解答

**推导。** 先消去内层箭头：$b\to\neg c\equiv\neg b\lor\neg c$。代回原式得 $\neg a\lor(\neg b\lor\neg c)$，由结合律写成 $\neg a\lor\neg b\lor\neg c$，仅含所许的 NOT 和 OR。三项同时为假才令整个析取为假，即恰在 $a,b,c$ 全真时为假，和原式的唯一假赋值一致。

## Common Mistakes

- 把 b→¬c 写成 b∨¬c。
- 遗漏原式中的非 a。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
