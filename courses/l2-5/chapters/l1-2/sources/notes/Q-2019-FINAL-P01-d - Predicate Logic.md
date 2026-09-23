---
id: "Q-2019-FINAL-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(d)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "A fixed initial witness x=0 works because the later z can cancel each arbitrary y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P01-d

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=3]]

## Question

(d) $\exists x\forall y\exists z(x+y+z=0)$

Shared context: [[STEM-2019-FINAL-P01 - Shared Problem Prompt]].

## 中文解析

先选定 x 为零，并不能以后随 y 改动。好在最后的 z 位于全称 y 后面，可以针对每个 y 取相反数，从而抵消得到零。证明要说明选择顺序符合量词次序。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** True.

**Derivation/proof.** Choose the fixed integer $x=0$ before y is given. For each integer y, choose $z=-y$. Then z is an integer and $x+y+z=0+y-y=0$. This respects the quantifier order: x is independent of y, whereas z may depend on y.

### 中文解答

**推导。** 断言为真。先选固定整数 $x=0$，它不依赖以后给定的 $y$。随后无论给什么整数 $y$，选 $z=-y$，就有 $x+y+z=0+y-y=0$。$z$ 可以依赖 $y$，$x$ 则已经预先固定，故构造满足全部量词的依赖限制。

## Common Mistakes

- 让最前面的 x 依赖尚未给定的 y。
- 把最后的存在 z 误作必须固定的常数。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
