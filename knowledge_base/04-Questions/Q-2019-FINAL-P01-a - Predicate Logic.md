---
id: "Q-2019-FINAL-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "For every proposed x, the dependent choice y=2x defeats the strict inequality."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P01-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=3]]

## Question

(a) $\exists x\forall y(2x-y>1)$

Shared context: [[STEM-2019-FINAL-P01 - Shared Problem Prompt]].

## 中文解析

要否定存在 x 对所有 y 成立，必须对每一个候选 x 都能构造失败的 y。取 y 为两倍 x 就令左边恒等于零，无法大于一，因此没有任何见证 x 可以成功。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** False.

**Derivation/proof.** For any integer $x$ proposed as the existential witness, choose the integer $y=2x$. Then $2x-y=0$, which is not greater than 1. Thus no x works for all y. This proves the negation $\forall x\exists y(2x-y\le1)$, rather than merely testing one candidate x.

### 中文解答

**推导。** 断言为假。任取候选整数 $x$，都能在它之后选整数 $y=2x$，使 $2x-y=0\le1$。所以没有任何 $x$ 能对所有 $y$ 满足严格大于 $1$ 的条件。我们实际证明了完整否定 $\forall x\exists y(2x-y\le1)$，而非只否定一个候选见证。

## Common Mistakes

- 只试 x=0 而未排除其他候选。
- 要求反例 y 不得依赖 x。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
