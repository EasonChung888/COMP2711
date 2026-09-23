---
id: "Q-2013-MID-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 6
solution_page: [7]
question_number: "4(d)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Eight of sixteen boys must be chosen and assigned bijectively to eight girls; the unchosen boys remain unpaired."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P04-d

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=7]].

## Question

(d) What is the answer for (a) if there are 16 boys and 8 girls. Note that in this case not all boys can have a dance partner.

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P04 - Shared Problem Prompt]].

## 中文解析

先决定哪八名男生有舞伴，再安排他们和八名女生的一一配对。这样不会把未配对的男生错误当成可安排对象。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** $\binom{16}{8}8!=16!/8!$.

**Derivation/proof.** Choose the eight boys who receive partners, then biject them with the eight girls. This is $\binom{16}{8}8!=16\cdot15\cdots9$.

### 中文解答

**推导。** 先从十六名男生中选出有舞伴的八人，有 $\binom{16}{8}$ 种；其余男生不参与配对。再把选出的八人与八名女生一一对应，有 $8!$ 种。两阶段唯一确定配对，因此总数 $\binom{16}{8}8!=16!/8!=16\cdot15\cdots9$。

## Common Mistakes

- 只写 $16P8$ 却没有说明它等于选择后配对。
- 把未获配对的八名男生再排列。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
