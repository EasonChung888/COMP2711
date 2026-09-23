---
id: "Q-2017-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "One valuation makes both the implication and the two remaining disjuncts false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P01-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

## Question

(b) $(p\to q)\lor r\lor q$

Shared context: [[STEM-2017-MID-P01 - Shared Problem Prompt]].

## 中文解析

要让整个析取式为假，必须让每个分项同时为假。令 q 与 r 都假，再令 p 真，就能使蕴含也为假。找到一次反例便足以否定恒真性，不需要所有情况都为假。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** It is not a tautology.

**Derivation/proof.** Take $p=T,q=F,r=F$. The implication $p\to q$ is false, so the whole expression is $F\lor F\lor F=F$. This additional check verifies the classification even though a counterexample is not required in the exam.

### 中文解答

**推导。** 题目只要求判定，结论为非恒真式。为独立核实，取 $p=T,q=F,r=F$，则 $p\to q=F$，整个析取式为 $F\lor F\lor F=F$。恒真式必须对每个赋值都真，这一个赋值已否定恒真性。

## Common Mistakes

- 把蕴含当作双条件。
- 只找到使公式为真的赋值。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
