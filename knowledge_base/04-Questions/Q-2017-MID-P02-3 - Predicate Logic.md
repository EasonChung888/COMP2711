---
id: "Q-2017-MID-P02-3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(3)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Negating both learned and kind gives a one-direction universal implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P02-3

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=4]]

## Question

3. People who are not learned are unkind.

Shared context: [[STEM-2017-MID-P02 - Shared Problem Prompt]].

## 中文解析

先把两个英文否定分别翻译：没有学问对应非 L，不善良对应非 K。原句只从没有学问推出不善良；其逆否命题等价，但不能擅自要求有学问的人必然善良。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\forall x(\neg L(x)\to\neg K(x))$.

**Derivation/proof.** The antecedent is “not learned,” namely $\neg L(x)$; the consequent is “unkind,” namely $\neg K(x)$. The statement applies to every person. Its contrapositive $\forall x(K(x)\to L(x))$ is equivalent, but the converse need not hold.

### 中文解答

**推导。** “没有学问”是 $\neg L(x)$，“不善良”是 $\neg K(x)$。把前者作为条件、后者作为结果并量化所有人，得 $\forall x(\neg L(x)\to\neg K(x))$。逐人取逆否得到等价的 $\forall x(K(x)\to L(x))$，可核实否定与方向；并不能反向断言有学问就善良。

## Common Mistakes

- 丢掉 learned 前的否定。
- 写成双条件而增加逆方向。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
