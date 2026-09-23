---
id: "Q-2020-MID-P03-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(e)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The existential implication is vacuously true at x=0, making its negation false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-e

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x((x>1)\to(x^2>x))\leftrightarrow\neg\exists x((x>1)\to(x^2\le x))$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## 中文解析

左边在 x 大于一时由正数乘法成立。右边存在命题却用了蕴含，x=0 时前件为假使整条蕴含为真，再加外层否定变成假。因此两个方向并不等价，关键是“反例”应使用合取。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** False.

**Derivation/proof.** The left side is true: for x>1, multiplying x>1 by positive x gives $x^2>x$. On the right, x=0 makes the antecedent of the existential implication false, so that implication is true. Hence its existential quantification is true and its negation false. The biconditional is therefore $T\leftrightarrow F$.

### 中文解答

**推导。** 判为假。左侧为真：若 $x>1$，乘正数 $x$ 得 $x^2>x$；若 $x\le1$，蕴含仍为真。右侧存在式中的箭头允许假前件，取 $x=0$ 就令 $(x>1)\to(x^2\le x)$ 为真。因此其存在量词为真，加外层否定后为假。整个双条件为 $T\leftrightarrow F=F$。错误直觉在于把“存在一个蕴含成立”当成“存在反例”。

## Common Mistakes

- 把否定蕴含仍写成蕴含。
- 忽视 x≤1 产生的空真见证。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
