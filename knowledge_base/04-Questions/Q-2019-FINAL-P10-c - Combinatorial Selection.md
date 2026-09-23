---
id: "Q-2019-FINAL-P10-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 12
solution_page: [12]
question_number: "10(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Two nine-unit lower bounds consume eighteen units and leave only two to distribute."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P10-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=12]]

## Question

(c) How many solutions are there so that $x_1\ge9$ and $x_2\ge9$?

Shared context: [[STEM-2019-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

两个变量各预留九，总共用十八，剩两单位可分给三个非负变量。隔板法给六；也可把两单位集中在一项或分散到两项，分别三种，独立核对总数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $6$.

**Derivation/proof.** Write $y_1=x_1-9,y_2=x_2-9$. Then $y_1+y_2+x_3=20-18=2$ with all variables nonnegative. Its number of solutions is $\binom42=6$. Equivalently the possibilities distribute two units as one coordinate 2 (three choices) or two coordinates 1 (three choices).

### 中文解答

**推导。** 设 $y_1=x_1-9$、$y_2=x_2-9$，则三变量非负且满足 $y_1+y_2+x_3=20-18=2$。解数为 $\binom{2+3-1}{3-1}=\binom42=6$。也可核对：把两单位都给某一坐标有三种，把一单位分别给两个坐标也有三种，共六种。

## Common Mistakes

- 把两个下界只减一次九。
- 把剩余第三变量也要求至少九。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
