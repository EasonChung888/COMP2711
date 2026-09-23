---
id: "Q-2019-FINAL-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 12
solution_page: [12]
question_number: "10(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Shifting x1 down by nine leaves eleven units for three nonnegative variables."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P10-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=12]]

## Question

(b) How many solutions are there so that $x_1\ge9$?

Shared context: [[STEM-2019-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

先给第一变量预留九，再把剩余量用新非负变量表示。总量从二十变成十一，但变量仍有三个，所以隔板仍是两个。平移具有唯一逆变换，计数不会增加或漏掉解。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $78$.

**Derivation/proof.** Set $y_1=x_1-9\ge0$. The equation becomes $y_1+x_2+x_3=11$, a bijective change of variables with inverse $x_1=y_1+9$. Stars and bars gives $\binom{13}{2}=13\cdot12/2=78$.

### 中文解答

**推导。** 用双射变量代换 $y_1=x_1-9\ge0$。原方程变为 $y_1+x_2+x_3=11$，且反向通过 $x_1=y_1+9$ 恢复唯一原解。星与隔板计数为 $\binom{11+3-1}{3-1}=\binom{13}{2}=78$。只减去第一变量的下界，另外两变量仍可为零。

## Common Mistakes

- 把大于等于九当成严格大于九而预留十。
- 平移后仍使用总量二十。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
