---
id: "Q-2022-MID-P01-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "1(a)(i)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "An outer disjunction with negated a is exactly an implication from a."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P01-a-i

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

NOT ($\neg$) and Implication ($\to$).

Shared context: [[STEM-2022-MID-P01-a - Shared Problem Prompt]].

## 中文解析

把内层蕴含暂时当作整体 X，外层“非 a 或 X”正是 a 推出 X。替换后所有连接词都是题目允许的否定和蕴含；展开箭头可再次检查没有改变真值。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $a\to(b\to\neg c)$.

**Derivation/proof.** The equivalence $\neg a\lor X\equiv a\to X$ applies with X=(b→¬c). The inner formula already uses only implication and negation, so no further transformation is needed. Expanding both arrows produces ¬a∨¬b∨¬c, which verifies equivalence to the original expression.

### 中文解答

**推导。** 把 $b\to\neg c$ 视作整体 $X$，原式是 $\neg a\lor X$。由蕴含等价律 $\neg a\lor X\equiv a\to X$，得到 $a\to(b\to\neg c)$。内层本来就只用否定和蕴含，所以已经满足连接词限制。反向展开两个箭头是 $\neg a\lor\neg b\lor\neg c$，与原式相同，检验等价无误。

## Common Mistakes

- 把外层前件写成非 a。
- 保留原来的析取符号而违反限制。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
