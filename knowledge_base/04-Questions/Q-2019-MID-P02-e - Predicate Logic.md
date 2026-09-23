---
id: "Q-2019-MID-P02-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(e)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "The larger-number witness depends on each candidate, so the quantifier order is universal then existential."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P02-e

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

## Question

(e) There is no largest real number.

Shared context: [[STEM-2019-MID-P02 - Shared Problem Prompt]].

## 中文解析

没有最大实数表示每次提出一个候选 x，都还能找到更大的 y。y 可以随 x 改变，所以全称在前、存在在后；如果交换量词，就错误要求存在一个固定 y 超过所有实数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\forall x\exists y(y>x)$.

**Derivation/proof.** For any candidate $x$ to be a largest real, there must be a real $y$ larger than it. Thus every $x$ has a suitable possibly different $y$, giving $\forall x\exists y(y>x)$. The witness $y=x+1$ checks the intended meaning. Reversing the quantifiers would require one number larger than all reals.

### 中文解答

**推导。** 任何候选最大值 $x$ 都会被某个更大的 $y$ 超过，故为 $\forall x\exists y(y>x)$。每给定实数 $x$，取 $y=x+1$ 就可核对这一量词顺序。等价否定形式是 $\neg\exists x\forall y(y\le x)$；不可交换为一个固定的 $y$ 大于所有 $x$。

## Common Mistakes

- 交换全称与存在量词。
- 使用大于等于而允许 y=x。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
