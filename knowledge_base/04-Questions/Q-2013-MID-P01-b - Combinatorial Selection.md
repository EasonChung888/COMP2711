---
id: "Q-2013-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Subtracting the three missing-colour cases is valid because selecting five eggs cannot omit two colours when each colour has only four eggs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P01-b

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=3]].

## Question

(b) What is the answer to (a) if the child must choose at least one egg from each color?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P01 - Shared Problem Prompt]].

## 中文解析

“每种颜色至少一个”最方便用补集：遗漏某一种颜色。由于一次要选五个，而每种颜色只有四个，遗漏两种颜色根本无法发生。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $\binom{12}{5}-3\binom{8}{5}=624$.

**Derivation/proof.** Start with all $\binom{12}{5}$ selections. A bad selection omits red, green, or purple; after one colour is omitted only eight eggs remain. Choosing five eggs cannot omit two colours, so the three bad classes are disjoint and the subtraction is valid.

### 中文解答

**推导。** 总数为 $\binom{12}{5}=792$。若缺少指定一种颜色，只能从其余八个蛋选五个，有 $\binom85=56$ 种。三种缺色事件不可能重叠，因为缺两种色时只剩四个蛋，选不出五个。因此所求为 $792-3\cdot56=624$，无须再加交集。

## Common Mistakes

- 直接减去三类后又加回交集；这里交集为空。
- 把 $\binom{8}{5}$ 当成排列。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
