---
id: "Q-2022-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "2(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "A single website witness must satisfy both named visitors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P02-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

There is a website that both Alice and Bob have visited.

Shared context: [[STEM-2022-MID-P02 - Shared Problem Prompt]].

## 中文解析

存在的是一个共同网站，所以两个 W 要共用同一个网站变量 y。Alice 和 Bob 是固定人物，分别放在谓词第一参数；若用两个不同存在变量，就只能说明各自访问过某站，未必相同。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\exists y(W(\mathrm{Alice},y)\land W(\mathrm{Bob},y))$.

**Derivation/proof.** The existential variable y ranges over websites. The two W predicates share that same y, requiring one common site visited by Alice and Bob. Alice and Bob are named people rather than quantified websites. Conjunction expresses both visits; separate website witnesses would not require their visited sets to overlap.

### 中文解答

**推导。** 存在量词选择的是共同网站 $y$，因此把两次访问用同一个 $y$ 连接：$\exists y(W(\mathrm{Alice},y)\land W(\mathrm{Bob},y))$。第一参数分别是两名给定人物，第二参数才遍历网站。合取要求两人都访问这个见证；若分别选不同网站，则无法保证两人的访问集合有交集。

## Common Mistakes

- 给 Alice 和 Bob 分配不同网站见证。
- 把网站放在 W 的第一个参数。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
