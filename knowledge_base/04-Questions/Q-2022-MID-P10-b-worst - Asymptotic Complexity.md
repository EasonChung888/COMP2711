---
id: "Q-2022-MID-P10-b-worst"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "Absence or a last-position-only match forces all n comparisons."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-b-worst

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the worst-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-b - Shared Problem Prompt]].

## 中文解析

目标不存在或只在最后一位时，算法必须检查全部 n 项。这给出线性下界，而循环最多 n 次又给上线性上界，所以最坏时间恰是 Θ(n)。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\Theta(n)$.

**Derivation/proof.** If x is absent, every one of the n comparisons fails before the not-found return. If x appears only at an, the procedure likewise performs n tests. These exhibit Ω(n) work, while the loop has at most n iterations each of constant cost, giving O(n). Together they establish Θ(n).

### 中文解答

**推导。** 取目标不在列表中，全部 $n$ 次比较都失败，最后才返回 not found；或目标只出现在 $a_n$，同样做满 $n$ 次比较。这给最坏情况 $\Omega(n)$。循环最多检查 $n$ 个位置，每次常数工作，故又有 $O(n)$，合起来最坏时间 $\Theta(n)$。最后一项是否命中只改变返回值，不改变这个数量级。

## Common Mistakes

- 只考虑目标在列表内的情况。
- 因最好是常数而把最坏也写常数。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
