---
id: "Q-2020-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 1
question_number: "1(d)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Submission and absence form a joint sufficient condition for cheating."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
---
# Q-2020-MID-P01-d

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

## Question

Any student who submitted a file for the midterm dry run but were absent from the Zoom meeting of midterm dry run is considered as cheating.

Shared context: [[STEM-2020-MID-P01 - Shared Problem Prompt]].

## 中文解析

提交文件与缺席一起构成充分条件。先把 F 与非 Z 合取，再推出作弊 C，并对所有学生量化。题目只规定这类行为被视为作弊，没有说所有作弊都必须具有这种行为模式。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\forall x((F(x)\land\neg Z(x))\to C(x))$.

**Derivation/proof.** The restrictive clause describes a student who submitted a file and did not attend. Combine these as $F(x)\land\neg Z(x)$. The predicate asserted of every such student is cheating, so C is the consequent. Nothing in the wording asserts the converse that every cheater has this particular pattern.

### 中文解答

**推导。** 限定学生的条件是“交文件而缺席”，即 $F(x)\land\neg Z(x)$；对这些学生断言作弊 $C(x)$。所以答案 $\forall x((F(x)\land\neg Z(x))\to C(x))$。题目没有说其他作弊者都必满足这个缺席交文件模式，因此不应把蕴含增强为双条件。

## Common Mistakes

- 遗漏缺席的否定。
- 加上原句没有的逆蕴含。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
