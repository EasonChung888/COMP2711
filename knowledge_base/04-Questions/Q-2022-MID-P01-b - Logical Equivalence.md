---
id: "Q-2022-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "1(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Both disjunctions become implications and their conjunction requires one more negated implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2022-MID-P01-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

Given the statement $(a\lor b)\land(\neg b\lor c)$, express its equivalent statement using only NOT ($\neg$) and Implication ($\to$).

## 中文解析

先各自改写两个析取，但这样仍剩一个合取，需要再用 X且Y=非(X推出非Y) 消去。嵌套否定较多，分两层处理并回展开检查，比直接猜长公式可靠。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\neg((\neg a\to b)\to\neg(b\to c))$.

**Derivation/proof.** Set X=(¬a→b), equivalent to a∨b, and Y=(b→c), equivalent to ¬b∨c. Their conjunction satisfies X∧Y≡¬(¬X∨¬Y)≡¬(X→¬Y). Substitute the two subexpressions to obtain the answer. Expanding its outer negated implication recovers X∧Y and then the original two clauses.

### 中文解答

**推导。** 先分别改写两子句：$a\lor b\equiv\neg a\to b$，$\neg b\lor c\equiv b\to c$。记这两个新子句为 $X,Y$，还要消去它们之间的 AND。用 $X\land Y\equiv\neg(\neg X\lor\neg Y)\equiv\neg(X\to\neg Y)$，代回得 $\neg((\neg a\to b)\to\neg(b\to c))$。这个式子只有 NOT 与蕴含；展开外层否定蕴含恢复 $X\land Y$，再展开两子句就恢复原题。

## Common Mistakes

- 只改写两个析取却保留合取。
- 遗漏 Y 前的内层否定。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
