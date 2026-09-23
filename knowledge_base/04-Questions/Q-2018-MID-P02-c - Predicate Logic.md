---
id: "Q-2018-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "A singleton interpretation can falsify the quantified implication by making P true and Q false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P02-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

## Question

(c) $(\forall xP(x))\to(\exists x(P(x)\to Q(x)))$

Shared context: [[STEM-2018-MID-P02 - Shared Problem Prompt]].

## 中文解析

选一个只有一个元素的论域即可。让 P 在这个元素上真，使全称前件为真；让 Q 假，使唯一的内层蕴含为假。由于没有其他见证，存在后件失败，整个式子为假。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** Not a tautology. On $D=\{a\}$, let $P(a)=T,Q(a)=F$.

**Derivation/proof.** The universal antecedent is true in this domain. Its only candidate for the existential consequent gives $P(a)\to Q(a)=T\to F=F$, so that consequent is false. Thus the full implication is false, proving failure of logical validity.

### 中文解答

**推导。** 用单元素论域 $D=\{a\}$ 并令 $P(a)=T,Q(a)=F$。于是 $\forall xP(x)$ 为真，但唯一见证 $a$ 的内层蕴含 $P(a)\to Q(a)=F$，故存在后件为假。全句取值 $T\to F=F$，所以不是恒真式。两个谓词的全部取值都已指定，不把单独“$Q$ 总为假”误认为完整反例。

## Common Mistakes

- 把 Q 全假当成完整反例而未说明 P。
- 让某个 P 为假却仍声称前件真。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
