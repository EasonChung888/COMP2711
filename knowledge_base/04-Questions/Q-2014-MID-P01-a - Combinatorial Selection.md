---
id: "Q-2014-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The committee selection has an unrestricted binomial count, so the task tests recognition that no group quota applies in this part."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P01-a

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=3]].

## Question

(a) In how many ways can a voter choose 5 candidates?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P01 - Shared Problem Prompt]].

## 中文解析

选票不记录候选人的次序，因此直接从九人中选五人；五个空缺不是不同职位，毋须安排座次。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $\binom95=126$.

**Derivation/proof.** The ballot is an unordered selection of five of the nine distinct candidates, so it has $\binom95$ possibilities.

### 中文解答

**推导。** 九名候选人互不相同，而选五人不记录先后次序。因此选票对应九人集合的五元素子集，共有 $\binom95=9!/(5!4!)=126$ 种。议席不是五个不同职位，所以不额外乘 $5!$。

## Common Mistakes

- 把组合误写成 $9P5$。
- 把五个空缺当成有顺序的职位。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
