---
id: "Q-2017-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The universal antecedent must be true while every existential implication is false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P01-c

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Source verification: The printed explanation mentions only Q always false; the explicit countermodel also sets P always true.

Source correction (official conclusion retained): PDF page 3 says “It is false if Q(x) is always false.” This is insufficient alone: choose a nonempty domain with every P true as well as every Q false. The official non-tautology conclusion is correct; the exam explicitly requires no counterexample for non-tautologies.

## Question

(c) $(\forall xP(x))\to(\exists x(P(x)\to Q(x)))$

Shared context: [[STEM-2017-MID-P01 - Shared Problem Prompt]].

## 中文解析

外层蕴含为假需要前件真、后件假。因此不仅要让所有 Q 都假，也要让所有 P 都真，否则某个 P 为假反而会让内层蕴含成立。单元素模型已经能够完整验证反例。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** It is not a tautology.

**Derivation/proof.** Use the one-element domain $D=\{a\}$ with $P(a)=T$ and $Q(a)=F$. Then $\forall xP(x)$ is true, but $P(a)\to Q(a)$ is false, so the existential consequent is false and the outer implication is false. Merely setting every $Q$ false is insufficient unless every $P$ is also true.

### 中文解答

**推导。** 结论为非恒真式。取单元素论域 $D=\{a\}$，令 $P(a)=T,Q(a)=F$。于是 $\forall xP(x)=T$，但唯一可能的见证满足 $P(a)\to Q(a)=F$，所以存在量词的后件为假，外层为 $T\to F=F$。印本仅说所有 $Q$ 为假还不充分：若某个 $P$ 为假，内层蕴含反而为真；这里同时指定所有 $P$ 为真，补足这一检查。

## Common Mistakes

- 只指定 Q 全假而不指定 P。
- 把存在量词当成全称量词。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
