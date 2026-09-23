---
id: "Q-2016-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 6
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The dual-role postgraduate must be placed in one mutually exclusive role case while avoiding selection of that person twice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P02-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=4]]

## Question

(b) Now, one postgraduate student has a special treatment. This postgraduate student could also be accepted to be a teaching assistant (i.e., this particular person has two roles, a postgraduate student and a teaching assistants). The tennis club can invite this guy as a role of either a teaching assistant or a postgraduate student (but not both), or does not invite this guy at all. How many possible groups of guests are there?

Shared context: [[STEM-2016-MID-P02 - Shared Problem Prompt]].

## 中文解析

不把特殊学生当助教的情况就是原计数，其中已包括以研究生身份被选或不被选。新增情况是把他固定当助教，此时只需另选九位助教，研究生池则少一人。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\binom{300}{4}\binom{10000}{40}\left[\binom{500}{10}\binom{600}{10}+\binom{500}{9}\binom{599}{10}\right]$.

**Derivation/proof.** Partition by whether the special person serves as an assistant. If not, the original count allows that person either as a postgraduate or absent. If yes, choose 9 ordinary assistants from 500 and 10 other postgraduates from 599. Faculty and undergraduate selections are unchanged. These cases are disjoint, and the distinguished role is determined by the other attendees' role counts.

### 中文解答

**推导。** 按特殊学生是否以助教身份入组选两类。若不是助教，仍是原来的 $\binom{500}{10}\binom{600}{10}$ 种助教/研究生选择，已包含该生以研究生身份或不被邀请。若是助教，就固定他，另从500名普通助教选9人，并从其余599名研究生选10人，计 $\binom{500}{9}\binom{599}{10}$。两类互斥，且选出其他人的身份数决定该生身份，不会重计同一宾客组。乘不变的教员和本科生项，得 $\binom{300}{4}\binom{10000}{40}[\binom{500}{10}\binom{600}{10}+\binom{500}{9}\binom{599}{10}]$。

## Common Mistakes

- 同时在助教池和研究生池选择此人，令一人占两个配额。
- 在原有计数之外再次加入“该学生作研究生”的情况，造成重复。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
