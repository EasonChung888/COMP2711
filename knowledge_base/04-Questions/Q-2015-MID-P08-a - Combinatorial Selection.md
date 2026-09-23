---
id: "Q-2015-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "8(a)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Six gloves in exactly three colors force both gloves from each selected color, leaving only a color-subset choice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P08-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

## Question

(a) the number of colors of these 6 gloves is 3?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P08 - Shared Problem Prompt]].

## 中文解析

每种颜色最多有两只手套。六只只来自三种颜色，就必须每色都拿完整的一对。因此只需选出三种颜色，没有额外左右手选择。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $\binom{12}{3}=220$.

**Derivation/proof.** If the three selected colors contribute $g_1,g_2,g_3\le2$ gloves each and sum to six, all $g_i=2$. Choose those three colors from twelve; their gloves are then fixed.

### 中文解答

**推导。** 设选中三色的手套数为 $g_1,g_2,g_3$。每色仅两只，所以每个不超过二，而 $g_1+g_2+g_3=6$，迫使三者都等于二。选定三色后左右手两只全拿，没有进一步选择。故总数 $\binom{12}{3}=220$。

## Common Mistakes

- 再乘 $2^3$，尽管每一色已取左右两只。
- 把取六只手套误解为取六对。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
