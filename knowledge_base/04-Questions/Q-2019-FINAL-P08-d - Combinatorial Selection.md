---
id: "Q-2019-FINAL-P08-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 10
solution_page: [10]
question_number: "8(d)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Choosing two unordered positions determines a on the left and b on the right, with no adjacency requirement."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-FINAL-P08-d

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=10]]

## Question

(d) the letters a and b, where a is somewhere to the left of b in the string, with all the letters distinct?

Shared context: [[STEM-2019-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

不要求相邻，因此从六个位置中选两个位置，较左自动放 a、较右放 b，不需再乘二。剩余四个位置用其他二十四个字母无重复填入，形成唯一字符串。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $\binom62P(24,4)=3825360$.

**Derivation/proof.** Choose the two positions occupied by a and b in $\binom62=15$ ways. Their roles are determined: put a in the earlier position and b in the later. Fill the four remaining positions by an ordered selection of distinct letters from the other 24, giving $P(24,4)=255024$. The product is 3825360.

### 中文解答

**推导。** 先从六个位置任选两个给 $a,b$，有 $\binom62=15$ 种。较左位置必须放 $a$，较右位置放 $b$，因此不再为它们的顺序乘 $2!$。其余四个有标签位置用剩余二十四字母的有序不重复选择填入，给 $P(24,4)=255024$。总数 $\binom62P(24,4)=15\cdot255024=3825360$；此处两字母可以不相邻。

## Common Mistakes

- 仍只考虑五个相邻位置对。
- 选定两个位置后额外乘二，违反 a 在左条件。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
