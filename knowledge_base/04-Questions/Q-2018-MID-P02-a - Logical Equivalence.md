---
id: "Q-2018-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Factoring the q disjuncts leaves q or not q regardless of the independent r term."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P02-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

## Question

(a) $(p\land q)\lor(q\land\neg p)\lor\neg q\lor(r\land T)$

Shared context: [[STEM-2018-MID-P02 - Shared Problem Prompt]].

## 中文解析

前两项都带 q，提取后得到 p 或非 p，恒为真。因此这两项合并成 q，再与非 q 析取已经恒真。最后的 r 与前面的 p 无关，也不改变这一结论。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** It is a tautology.

**Derivation/proof.** The first two terms simplify to $q\land(p\lor\neg p)=q$. The expression therefore becomes $q\lor\neg q\lor r=T\lor r=T$. This checks every valuation without a truth table; the exam itself requires only the classification.

### 中文解答

**推导。** 判定为恒真式。为核实，前两项由分配律等于 $q\land(p\lor\neg p)=q$，末项 $r\land T=r$。原式化为 $q\lor\neg q\lor r=T\lor r=T$，对全部赋值为真。题目对恒真项无需证明，这里给出化简作为完整学习解答。

## Common Mistakes

- 把 r 错抄成 p。
- 把恒真与某个赋值为真混淆。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
