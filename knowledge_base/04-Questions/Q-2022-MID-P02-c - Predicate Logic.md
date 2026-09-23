---
id: "Q-2022-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "2(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Two distinct person witnesses share a universal biconditional over website membership."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P02-c

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

There are two distinct people who have visited exactly the same sites.

Shared context: [[STEM-2022-MID-P02 - Shared Problem Prompt]].

## 中文解析

恰好相同的网站集合要求双向包含，所以对每个网站使用双条件；同时必须声明两个人不同，否则同一个人与自己比较会让条件变得过弱。两人都没访问过网站也可以满足集合相同。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\exists x\exists x'(x\ne x'\land\forall y(W(x,y)\leftrightarrow W(x',y)))$.

**Derivation/proof.** Quantify two people x,x′ and explicitly require inequality. For each website y, the biconditional says either both visited y or neither did, which makes their visited-site sets identical. A one-way implication would express only subset containment. This formula also correctly allows both visited sets to be empty, since the statement does not require a visit.

### 中文解答

**推导。** 用 $x,x'$ 表示两个人，先要求 $x\ne x'$。再对每个网站 $y$，要求两人的访问真值相同，即 $W(x,y)\leftrightarrow W(x',y)$。于是答案 $\exists x\exists x'(x\ne x'\land\forall y(W(x,y)\leftrightarrow W(x',y)))$。双条件同时表达两个方向的包含，所以访问集合恰相同。若两人都没访问任何网站，内部双条件仍处处成立，也符合原句，没有额外加入至少一次访问的条件。

## Common Mistakes

- 只写单向蕴含。
- 漏掉不同人条件而允许同一人充当两位。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
