---
id: "Q-2017-MID-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Indistinguishable candies reduce the distribution to four nonnegative counts summing to fifty."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P10-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

## Question

(b) How many ways can you put the candies in the boxes, assuming that the candies are identical?

Shared context: [[STEM-2017-MID-P10 - Shared Problem Prompt]].

## 中文解析

糖果相同以后，只需知道每个盒子有多少颗，不再区分某一颗糖的去向。四个非负整数之和为五十，可用五十颗星和三个隔板表示；相邻隔板允许空盒，因此不需预先分糖。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $\binom{53}{3}$.

**Derivation/proof.** Let $x_A,x_B,x_C,x_D$ be nonnegative box counts, with sum $50$. Represent a distribution by fifty stars and three separators; the numbers of stars before and between separators specify the labeled boxes. Choosing the three separator positions among 53 gives $\binom{53}{3}$.

### 中文解答

**推导。** 设四盒数量为非负整数 $x_A,x_B,x_C,x_D$，则 $x_A+x_B+x_C+x_D=50$。用五十颗星和三个隔板依次编码 $A,B,C,D$ 数量，隔板相邻或位于端点代表空盒。每个解与一种星板串一一对应，在 $53$ 个位置选三个隔板，得到 $\binom{53}{3}$。

## Common Mistakes

- 把隔板数写成四。
- 禁止相邻隔板而错误排除空盒。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
