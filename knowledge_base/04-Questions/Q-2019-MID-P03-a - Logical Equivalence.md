---
id: "Q-2019-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "Denying the antecedent fails when p is false but q remains true."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P03-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=5]]

## Question

(a) $((p\to q)\land\neg p)\to\neg q$

Shared context: [[STEM-2019-MID-P03 - Shared Problem Prompt]].

## 中文解析

前件 p 不成立，并不代表 q 也不能成立。让 p 假而 q 真时，已给蕴含仍然真，但最终要求的非 q 为假，所以整个式子失败。这正是“否定前件”推理错误。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** No; take $p=F,q=T$.

**Derivation/proof.** With $p=F,q=T$, the implication $p\to q$ is true and $\neg p$ is true, so the outer antecedent is true. But $\neg q=F$, making the full proposition $T\to F=F$. This is the invalid pattern of denying the antecedent.

### 中文解答

**推导。** 取 $p=F,q=T$。此时 $p\to q=T$、$\neg p=T$，所以外层前件为 $T\land T=T$；但后件 $\neg q=F$，整个蕴含为 $T\to F=F$。已找到一个使全式假的赋值，因此不是恒真式。这也是否定前件不能推出否定后件的具体反例。

## Common Mistakes

- 把否定前件当成逆否推理。
- 只给前件假的赋值而未检查外层后件。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
