---
id: "Q-2017-MID-P02-4"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(4)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "The named child assertion is conjoined with existence of an unkind neighbor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P02-4

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

## Question

4. Mencius, a child, has unkind neighbours.

Shared context: [[STEM-2017-MID-P02 - Shared Problem Prompt]].

## 中文解析

孟子是儿童本身是一项肯定事实，要与后面的存在陈述合取。邻居的身份与不善良必须由同一个见证满足，因此放在同一个存在量词里。原句并未说所有邻居都不善良。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $C(\mathrm{Mencius})\land\exists x(N(x,\mathrm{Mencius})\land\neg K(x))$.

**Derivation/proof.** The apposition “a child” asserts $C(\mathrm{Mencius})$. “Has unkind neighbours” supplies an existential witness who is both a neighbor and unkind. The source uses the usual existential reading, not a universal claim that all of Mencius's neighbors are unkind.

### 中文解答

**推导。** 同位语“a child”直接断言 $C(\mathrm{Mencius})$。按印本采用的存在读法，另有某个人 $x$ 同时为孟子的邻居且不善良，写成 $\exists x(N(x,\mathrm{Mencius})\land\neg K(x))$。两项事实用合取连接，答案为 $C(\mathrm{Mencius})\land\exists x(N(x,\mathrm{Mencius})\land\neg K(x))$；邻居与不善良必须由同一个 $x$ 见证，不是两个无关的人。

## Common Mistakes

- 用蕴含而让邻居不存在时也满足存在陈述。
- 忘记孟子是儿童这一事实。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
