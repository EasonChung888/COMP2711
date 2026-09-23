---
id: "Q-2017-FINAL-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 12
solution_page: [12]
question_number: "8"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Four consecutive base postages allow a strong-induction step adding one four-cent stamp."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2017-FINAL-P08

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=12]]

## Question

Let $P(n)$ be the statement that a postage of $n$ cents can be formed using just 4-cent and 7-cent stamps. Prove by induction that $P(n)$ is true for $n\ge18$.

## 中文解析

步进增加四分时需要连续四个基例，覆盖所有模四余数。先明确写出十八到二十一分的组合，再对更大的目标减四，保证减后仍处于已证明的范围，最后添回一枚四分邮票。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** Every integer postage of at least 18 cents is possible.

**Derivation/proof.** Base cases: $18=7+7+4$, $19=7+4+4+4$, $20=5\cdot4$, and $21=3\cdot7$. Suppose all postages from 18 through $k$ are possible, where $k\ge21$. Then $k+1-4=k-3\ge18$, so the induction hypothesis supplies postage $k-3$. Adding one 4-cent stamp makes $k+1$. Strong induction proves the result.

### 中文解答

**推导。** 用强归纳并列出完整基础：$18=7+7+4$，$19=7+4+4+4$，$20=5\cdot4$，$21=3\cdot7$。设 $k\ge21$ 且从 $18$ 到 $k$ 都能组成；因 $k-3\ge18$，假设保证 $k-3$ 分的邮资可组成。再添一枚 $4$ 分邮票就组成 $k+1$ 分。基础覆盖四个连续余数，归纳步合法，所以所有整数 $n\ge18$ 均可组成。

## Common Mistakes

- 只验证十八分就用增加四分覆盖所有整数。
- 归纳步骤调用未达到十八的数值。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
