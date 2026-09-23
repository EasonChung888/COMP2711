---
id: "Q-2015-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "8(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Exactly four colors among six gloves requires the multiplicity pattern two, two, one, one and distinct choices for the two roles."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P08-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

## Question

(b) the number of colors of these 6 gloves is 4?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P08 - Shared Problem Prompt]].

## 中文解析

四种颜色各至少一只，要凑成六只，恰好两种颜色取两只，另两种各一只。先选完整配对的两色，再从剩余十色选单只颜色，最后为每个单只选左或右。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $\binom{12}{2}\binom{10}{2}2^2=11880$.

**Derivation/proof.** Let $d$ be the number of doubled colors and $s$ singleton colors. Then $d+s=4$ and $2d+s=6$, so $d=s=2$. Choose doubled colors in $\binom{12}{2}$ ways, singleton colors from the rest in $\binom{10}{2}$ ways, then each singleton glove in two ways. This decomposition is unique.

### 中文解答

**推导。** 设双只颜色有 d 种，单只颜色有 s 种。颜色数给 $d+s=4$，手套数给 $2d+s=6$，相减得 $d=2,s=2$。从十二色选双只两色，再从剩余十色选单只两色；每种单只颜色可选左或右。乘积 $\binom{12}{2}\binom{10}{2}2^2=11880$，每个选择唯一对应这两类颜色，不重计。

## Common Mistakes

- 从全部十二色选单只颜色，允许与已选完整配对颜色重合。
- 对两类颜色再乘排列因子，使无序颜色集合重复计数。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
