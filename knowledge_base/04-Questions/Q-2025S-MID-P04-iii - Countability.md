---
id: "Q-2025S-MID-P04-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 6
question_number: "4(iii)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Inject all real constants into the unrestricted real-polynomial collection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2025S-MID-P04-iii

## Source

[[2025 Spring Midterm]]; printed item 4(iii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

## Question

![[STEM-2025S-MID-P04 - Shared Problem Prompt#Shared printed wording]]

(iii) The set of all polynomials with real coefficients.

## 中文解析

实系数多项式包含每个实常数，单是这个子集已经不可数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Uncountable。

**推导。** 每个实数 $t$ 都对应常数多项式 $f_t(x)=t$。若 $t\ne s$，两常数多项式不同，所以这是从 $\mathbb R$ 到该多项式集合的单射。若多项式集合可数，其常数子集也可数，便会令 $\mathbb R$ 可数，与实数不可数矛盾。因此不论还允许多高的次数，整个集合都不可数。

## Common Mistakes

- 证明不可数只需找到不可数子集，不必枚举所有次数的系数。
- 变量符号 x 不是一种额外的自由系数，不能把它与实参数混同。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Inject all real constants into the unrestricted real-polynomial collection.
