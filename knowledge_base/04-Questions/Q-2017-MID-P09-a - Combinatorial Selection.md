---
id: "Q-2017-MID-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "9(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "A fixed two-woman three-man composition is the product of two independent subset choices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P09-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=11]]

## Question

(a) How many committees are possible if the committee must have two women and three men?

Shared context: [[STEM-2017-MID-P09 - Shared Problem Prompt]].

## 中文解析

委员没有先后顺序，先从六位女性中选两位，再从九位男性中选三位。两项选择决定不同性别的成员，不会互相重叠或重复，因此直接相乘，不需要再排列五位委员。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $\binom62\binom93$.

**Derivation/proof.** Choose the two women from the six available in $\binom62$ ways and the three men from the nine in $\binom93$ ways. Each pair of choices gives a unique five-person committee, so multiply; no ordering of members is recorded.

### 中文解答

**推导。** 从六名女性中无序选两名有 $\binom62=15$ 种，从九名男性中无序选三名有 $\binom93=84$ 种。每对选择确定且唯一确定一个所需委员会，乘法原理给出 $\binom62\binom93=15\cdot84=1260$。委员没有职务或顺序，所以不再乘 $5!$。

## Common Mistakes

- 使用排列数而区分委员顺序。
- 把男女两类选择数相加。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
