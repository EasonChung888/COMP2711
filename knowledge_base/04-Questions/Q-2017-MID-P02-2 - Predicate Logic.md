---
id: "Q-2017-MID-P02-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(2)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Two universal quantifiers express that every neighbor of every unkind person is unkind."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P02-2

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

## Question

2. People who are unkind can only have unkind neighbours.

Shared context: [[STEM-2017-MID-P02 - Shared Problem Prompt]].

## 中文解析

“只能有不善良的邻居”限制每一个现有邻居，并没有保证这个人一定有邻居。先选不善良的人，再对其所有邻居作判断，因此需要两个全称量词；没有邻居时条件自然成立。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\forall x\forall y((\neg K(x)\land N(x,y))\to\neg K(y))$.

**Derivation/proof.** Fix any people $x,y$. Only when $x$ is unkind and $y$ is a neighbor of $x$ does the sentence constrain $y$, requiring $\neg K(y)$. Universal quantification covers all such pairs. Equivalently, $\forall x(\neg K(x)\to\forall y(N(x,y)\to\neg K(y)))$.

### 中文解答

**推导。** 任取人 $x$ 及 $y$，当 $x$ 不善良且两人为邻居时，$y$ 必须不善良，即 $(\neg K(x)\land N(x,y))\to\neg K(y)$。对每一对人都要求这一条件，得到 $\forall x\forall y((\neg K(x)\land N(x,y))\to\neg K(y))$，亦即印本的 $\forall x(\neg K(x)\to\forall y(N(x,y)\to\neg K(y)))$。“only”限制已有邻居的性质，不保证邻居存在；无人相邻时上述式子仍真。

## Common Mistakes

- 改成存在一个不善良邻居。
- 把“只能”理解为邻居必须存在。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
