---
id: "Q-2022-MID-P03-3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "3(3)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Both the antecedent and consequent are negated according to the supplied vocabulary equivalences."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2022-MID-P03-proof - Predicate Logic]]"]
---
# Q-2022-MID-P03-3

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

“Birds that do not live on honey are dull in color.”

Shared context: [[STEM-2022-MID-P03 - Shared Problem Prompt]].

## 中文解析

题目明确把颜色暗淡定义成不丰富，所以前后件都是否定谓词。不是食蜜者推出颜色不丰富；后续证明可以用逆否得到颜色丰富者食蜜，但不能使用未经支持的逆命题。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall x(\neg R(x)\to\neg S(x))$.

**Derivation/proof.** The restrictive clause selects birds not living on honey, ¬R. The source explicitly equates dull color with not richly colored, ¬S. Universally imply the latter from the former. Its contrapositive S→R is equivalent, but the converse ¬S→¬R is not entailed.

### 中文解答

**推导。** 不食蜜对应 $\neg R(x)$；题目明确说明颜色暗淡就是不丰富，故后件是 $\neg S(x)$。对所有鸟量化得到 $\forall x(\neg R(x)\to\neg S(x))$。其等价逆否形式是 $\forall x(S(x)\to R(x))$，后续可由颜色丰富推出食蜜，但不能把箭头简单反转成“暗淡就不食蜜”。

## Common Mistakes

- 把 dull 写成 S。
- 从颜色暗淡反推不食蜜。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2022-MID-P03-proof - Predicate Logic]]
