---
id: "Q-2019-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Neither cold nor dry negates each proposition and conjoins the two negations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P01-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

## Question

(a) It is neither cold nor dry.

Shared context: [[STEM-2019-MID-P01 - Shared Problem Prompt]].

## 中文解析

既不冷也不干燥表示两个条件都不成立，所以分别否定后用合取连接。只否定“冷且干燥”会允许其中一种成立，表达较弱，并不是原句的意思。可以用德摩根律核对等价写法。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $\neg c\land\neg d$.

**Derivation/proof.** “Neither A nor B” requires both A and B to be false. Here that is not cold and not dry, so the two negative requirements are joined with $\land$. By De Morgan's law, $\neg(c\lor d)$ is equivalent, whereas $\neg(c\land d)$ would also allow exactly one to be true.

### 中文解答

**推导。** “neither cold nor dry” 同时否认 cold 与 dry，故两个子句分别为 $\neg c$、$\neg d$，以“且”连接为 $\neg c\land\neg d$。德摩根律也给 $\neg(c\lor d)$；只写 $\neg(c\land d)$ 会容许其中一种天气，不能表达两者皆无。

## Common Mistakes

- 写成非 c 或非 d。
- 只否定整个合取而改变含义。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
