---
id: "Q-2015-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 3
solution_page: [4]
question_number: "1(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The universal pointwise disjunction must be distinguished from claims allowing different existential witnesses."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P01-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=4]]

## Question

(c) Let $U$ be a domain (a.k.a. a universe), and $P(x)$ and $Q(x)$ be two predicates. Which of the following statements is/are equivalent to $\forall x\in U(P(x)\lor Q(x))$?

1. $\exists x\in U(\neg P(x)\land\neg Q(x))$
2. $\forall y\in U(\neg P(y)\to Q(y))$
3. $\neg(\forall x\in U(\neg P(x))\lor\forall x\in U(\neg Q(x)))$
4. $\neg(\exists x\in U(\neg P(x))\land\exists x\in U(\neg Q(x)))$
5. None of above.

Shared context: [[STEM-2015-MID-P01 - Shared Problem Prompt]].

## 中文解析

第二项在每个对象上把 $\neg P\to Q$ 化为 $P\lor Q$，所以完全等价。其他选项改变了量词作用域：存在的两个见证未必是同一个对象，不能直接合并。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** 2.

**Derivation/proof.** For each $y$, $\neg P(y)\to Q(y)\equiv P(y)\lor Q(y)$, proving option 2. Option 1 is the target's negation. Option 3 is $(\exists xP(x))\land(\exists xQ(x))$; with $U=\{a,b\}$ and both predicates true only at $a$, it is true but the target fails at $b$. Option 4 equals $(\forall xP(x))\lor(\forall xQ(x))$; let $P$ hold only at $a$ and $Q$ only at $b$. Then the target is true but option 4 false.

### 中文解答

**推导。** 选项二逐点利用 $\neg P(y)\to Q(y)\equiv P(y)\lor Q(y)$，全称量词下仍等价。一恰为目标否定，取单元素域且 P 真即区分。三化成 $\exists xP(x)\land\exists xQ(x)$；取 $U=\{a,b\}$，P、Q 都只在 a 真，三真但目标在 b 失败。四化成 $\forall xP(x)\lor\forall xQ(x)$；让 P 只在 a 真、Q 只在 b 真，目标真而四假。因此唯一正确项是二。

## Common Mistakes

- 将“每个人至少满足一个谓词”误写成“某个谓词被所有人满足”。
- 把两个存在量词的见证强行视为同一人。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
