---
id: "Q-2019-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "The clause after if supplies the sufficient antecedent not cold."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P01-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

## Question

(b) It is rainy if it is not cold.

Shared context: [[STEM-2019-MID-P01 - Shared Problem Prompt]].

## 中文解析

英文 A if B 的条件是 if 后面的 B，方向应从 B 指向 A。这里不冷是条件，下雨是结果，因此是非 c 推出 r；原句没有说下雨必定不冷，不能颠倒箭头。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $\neg c\to r$.

**Derivation/proof.** A sentence “A if B” means “if B, then A.” Taking A as rainy and B as not cold places $\neg c$ in the antecedent and $r$ in the consequent. It makes no claim about rain when it is cold.

### 中文解答

**推导。** “A if B” 由 B 推出 A。这里条件 B 为“不冷” $\neg c$，结果 A 为“下雨” $r$，所以命题为 $\neg c\to r$。它只排除不冷且不下雨的组合，并不声称下雨必须不冷。

## Common Mistakes

- 写成 r 推出非 c。
- 加上没有给出的逆方向。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
