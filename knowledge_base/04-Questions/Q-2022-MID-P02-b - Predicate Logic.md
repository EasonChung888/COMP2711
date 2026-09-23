---
id: "Q-2022-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "2(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Choose a distinct person first, then universally include every website David visited."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2022-MID-P02-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

There is a person other than David who has visited all the websites David has visited.

Shared context: [[STEM-2022-MID-P02 - Shared Problem Prompt]].

## 中文解析

先选一个不同于 David 的人，再检查每个网站是否满足“David 访问则此人也访问”。这里是网站集合包含关系，不是完全相等；此人访问更多网站仍符合，所以不能使用双条件。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\exists x(x\ne\mathrm{David}\land\forall y(W(\mathrm{David},y)\to W(x,y)))$.

**Derivation/proof.** The person x must be different from David, so place that condition alongside the quantified website requirement. For every website y, if David visited it then x did too. The implication asserts inclusion of David's visited set in x's visited set and permits x to have visited additional websites. The person is chosen once before ranging over sites.

### 中文解答

**推导。** 先选一个人 $x$，明确要求 $x\ne\mathrm{David}$，然后对每个网站 $y$ 检查：如果 David 访问过，$x$ 也访问过。因此公式为 $\exists x(x\ne\mathrm{David}\land\forall y(W(\mathrm{David},y)\to W(x,y)))$。这个 $x$ 必须在遍历网站之前统一选定，不能每个网站换一人。箭头表达 David 的网站集合包含于 $x$ 的集合，允许 $x$ 访问额外网站，不应增强成双条件。

## Common Mistakes

- 遗漏人与 David 不同。
- 写成双条件而禁止额外访问网站。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
