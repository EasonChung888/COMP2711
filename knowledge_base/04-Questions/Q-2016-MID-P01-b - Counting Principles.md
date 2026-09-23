---
id: "Q-2016-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 2
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Prohibiting every repeated character changes the seven choices to a falling factorial."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P01-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

## Question

(b) How many possible order id’s are there if no two characters are the same? (E.g., A034NXD is valid and A034NAD is invalid)

Shared context: [[STEM-2016-MID-P01 - Shared Problem Prompt]].

## 中文解析

首位有三十六种，之后每放一个字符都要排除已用字符。七个位次有顺序，故得到下降阶乘，不能只选一个无序七字符集合。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $36\cdot35\cdot34\cdot33\cdot32\cdot31\cdot30=7!\binom{36}{7}$.

**Derivation/proof.** After $i$ distinct characters have been used, the next position has $36-i$ options. Multiplying for $i=0,\ldots,6$ gives $36!/29!$, also equal to choosing seven characters and permuting them.

### 中文解答

**推导。** 第一位36种，第二位不能重用第一位，35种，依次到第七位剩30种。故总数 $36\cdot35\cdot34\cdot33\cdot32\cdot31\cdot30=36!/29!$。等价地先选七个不同字符再排列，得 $\binom{36}{7}7!$。这不是无序集合计数，例子中的两个A会违反不同字符限制。

## Common Mistakes

- 只写 $\binom{36}{7}$，忽略顺序。
- 只排除前一位，而没有排除全部已用字符。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
