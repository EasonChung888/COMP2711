---
id: "Q-2018-FINAL-P02-a-E1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Counting Method - 计数方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "A width-one board can contain only one vertical tromino."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-a-E1

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(a) Calculate $E_1,E_2$, and $E_3$. [Atomic request: $E_1$.]

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

宽度一的板只有一列三格，横放长度三的拼块会超出边界，所以只能竖放一块。它恰好盖住整块板，没有第二种位置或方向，因此计数为一。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $E_1=1$.

**Derivation/proof.** The board has three cells in one column. A horizontal piece of length three cannot fit in width one, so the only possible placement is a single vertical piece covering all three cells. This placement completes the board and is unique.

### 中文解答

**推导。** $3$ 行 $1$ 列的棋盘只有三个格。水平的 $1\times3$ 砖需要三列，放不下；唯一选择是一块竖砖覆盖整列。该放法恰覆盖且无重叠，所以 $E_1=1$。

## Common Mistakes

- 把旋转后的横块也算作有效。
- 把同一块的上下翻转当不同铺法。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Recursion - 递归]]
- [[Counting Principles - 计数原理]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Method - 计数方法]]
- [[Recurrence-Solving Method - 递推求解法]]
