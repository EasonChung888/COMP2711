---
id: "Q-2018-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "The outer implication fails when p is false but the nested antecedent is true."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P02-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

## Question

(b) $((p\to q)\to r)\to p$

Shared context: [[STEM-2018-MID-P02 - Shared Problem Prompt]].

## 中文解析

从最外层开始思考：要让最后的蕴含为假，就令 p 假且前件真。p 假会自动使第一层蕴含为真，再令 r 真就满足目标；按括号逐层代入可以避免把蕴含错误结合。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** Not a tautology: $p=F,q=T,r=T$.

**Derivation/proof.** At this valuation, $p\to q=F\to T=T$, then $(p\to q)\to r=T\to T=T$. The outer implication is consequently $T\to F=F$. Both levels of parentheses are essential to this evaluation.

### 中文解答

**推导。** 取 $p=F,q=T,r=T$。从内层计算：$p\to q=F\to T=T$，再有 $(p\to q)\to r=T\to T=T$，故外层是 $T\to F=F$。一个赋值使全式为假便足够否定恒真性，因此不是恒真式。括号不能改成 $p\to(q\to r)$，否则变成另一命题。

## Common Mistakes

- 省略括号而改变蕴含顺序。
- 只给 p 假而未指定其他变量。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
