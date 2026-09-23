---
id: "Q-2018-MID-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "An unrestricted committee is a five-element subset of twenty distinct employees."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P07-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

## Question

(a) How many ways are there to form the committee if there are no restrictions in the gender of the members?

Shared context: [[STEM-2018-MID-P07 - Shared Problem Prompt]].

## 中文解析

委员会没有职务顺序，因此从二十人中选五人就是一个五元素子集。也可以先按顺序选人再除以五的阶乘，因为同一组五人无论怎样排列，都仍然是同一个委员会。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $\binom{20}{5}=15504$.

**Derivation/proof.** Choose five of the twenty employees without ordering them. There are $20\cdot19\cdot18\cdot17\cdot16$ ordered selections, and each committee appears in $5!$ orders. Dividing by $5!$ gives $\binom{20}{5}=15504$.

### 中文解答

**推导。** 二十名员工各不相同，委员会选五人且无职位或先后顺序。先作有序选择有 $20\cdot19\cdot18\cdot17\cdot16$ 种，每个成员集合被按 $5!$ 种顺序重复，因此除以 $5!$，得到 $\binom{20}{5}=15504$。无性别限制，无需再分类男性或女性。

## Common Mistakes

- 把五个委员当成有序职位。
- 分别按性别选择却没有题目要求的固定人数。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
