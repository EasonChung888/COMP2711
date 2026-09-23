---
id: "Q-2013-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Pairing eight labelled boys with eight labelled girls is a bijection count obtained by successively assigning distinct female partners."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P04-a

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=6]].

## Question

(a) In how many different ways can the boys be paired up with the girls?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P04 - Shared Problem Prompt]].

## 中文解析

可把一个配对视为从男生到女生的双射。逐个为编号男生选尚未配对的女生便得到 $8!$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $8!$.

**Derivation/proof.** Order the girls assigned to the eight labelled boys: $8$ choices for the first boy, then $7$, down to $1$, giving $8!$.

### 中文解答

**推导。** 把八名男生按编号依次配对。第一名可选八名女生，第二名可选尚未配对的七名，依次直到最后一名只有一个选择。每种选择序列唯一确定全体配对，故数量是 $8\cdot7\cdots1=8!$。

## Common Mistakes

- 把男男、女女配对也算进去。
- 把双射误算成 $8^8$。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
