---
id: "Q-2022-MID-P01-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "1(a)(iii)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "De Morgan turns the three negated disjuncts into a negated three-way conjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P01-a-iii

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

NOT ($\neg$) and AND ($\land$).

Shared context: [[STEM-2022-MID-P01-a - Shared Problem Prompt]].

## 中文解析

把蕴含消掉后得到三个否定的析取，再反用德摩根律合并成整个合取的否定。外层否定必须覆盖 a、b、c 三者，不能只否定其中一个，否则真值会改变。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\neg(a\land b\land c)$.

**Derivation/proof.** First remove the implication to obtain ¬a∨¬b∨¬c. De Morgan's law in reverse gives ¬(a∧b∧c). This uses only the permitted NOT and AND operators, and its sole false valuation is a=b=c=true. Negating the entire conjunction is essential; moving the negation inside changes the formula.

### 中文解答

**推导。** 先把原式中的蕴含改为析取，得到 $\neg a\lor\neg b\lor\neg c$。再反向使用德摩根律，合并成 $\neg(a\land b\land c)$，因此最终只有否定与合取。否定必须覆盖整个三项合取；原式和结果都仅在三变量全真时为假，不能把否定移到某一个变量而保留其余两项。

## Common Mistakes

- 写成三个否定的合取。
- 外层否定括号范围不足。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
