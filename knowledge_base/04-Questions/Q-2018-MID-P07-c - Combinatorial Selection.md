---
id: "Q-2018-MID-P07-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "A strict female majority in five seats means exactly three, four, or five women."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P07-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

Source correction: PDF page9 lists w=5,4,3 correctly and totals6132, but then says “In all other cases, there will be more women than men in the committee.” The other cases have w≤2 and fewer women than men. Correct only that explanatory word; the official case split and formula are unchanged.

## Question

(c) How many ways are there to form the committee if there must be more women than men?

Shared context: [[STEM-2018-MID-P07 - Shared Problem Prompt]].

## 中文解析

五人委员会女性多于男性，女性人数只能是三、四或五。分别选好女性和补足人数的男性，再把三个互斥情况相加；全女性情况也符合“女性更多”，不能遗漏。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $\binom95+\binom94\binom{11}{1}+\binom93\binom{11}{2}=6132$.

**Derivation/proof.** Let $w$ be the number of women. Since there are five members, $w>5-w$ means $w=3,4,5$. The corresponding counts are $\binom93\binom{11}2=4620$, $\binom94\binom{11}1=1386$, and $\binom95=126$. Their sum is 6132.

### 中文解答

**推导。** 设女性人数 $w$，则男性有 $5-w$，要求 $w>5-w$ 等价于 $w\ge3$，所以只计 $w=3,4,5$。三个互斥类别分别有 $\binom93\binom{11}{2}=4620$、$\binom94\binom{11}{1}=1386$、$\binom95=126$。相加为 $4620+1386+126=6132$。其余 $w\le2$ 的情况女性更少，应排除；印本在这一解释句误写“more”，但列出的三类和最终总数正确。

## Common Mistakes

- 误把女性恰好三人当成全部情况。
- 强制至少一位男性而排除全女性。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
