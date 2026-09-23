---
id: "Q-2025S-MID-P04-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 6
question_number: "4(ii)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Encode each degree-at-most-five polynomial by six integer coefficients and prove infinitude."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2025S-MID-P04-ii

## Source

[[2025 Spring Midterm]]; printed item 4(ii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

## Question

![[STEM-2025S-MID-P04 - Shared Problem Prompt#Shared printed wording]]

(ii) The set of all polynomials with integer coefficients and the degree is at most 5.

## 中文解析

次数至多五对应六个整数系数，有限维可数积仍可数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Countably infinite。

**推导。** 把每个次数至多五的多项式唯一写为 $a_0+a_1x+\cdots+a_5x^5$，不足次数的系数补零。这样它对应 $\mathbb Z^6$ 中的六元组；六个整数可以按绝对值之和分层枚举，每层有限，故集合可数。常数多项式 $f(x)=j$ 随整数 $j$ 变化已给出无限子集，因此是可数无限。

## Common Mistakes

- 次数至多五不是只有六个多项式，而是每个多项式只有六个系数位置。
- 高次缺项须补零，才能用同样长度的元组给出统一编码。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Encode each degree-at-most-five polynomial by six integer coefficients and prove infinitude.
