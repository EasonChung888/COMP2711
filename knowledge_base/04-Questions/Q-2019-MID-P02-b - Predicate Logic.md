---
id: "Q-2019-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "A universal implication restricts evenness to integer members of the real domain."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P02-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=4]]

## Question

(b) Every integer is even.

Shared context: [[STEM-2019-MID-P02 - Shared Problem Prompt]].

## 中文解析

题目要求翻译而不是判断数学事实。即使“每个整数都是偶数”本身是假，也必须忠实用整数身份作为条件，偶数作为结果。因为论域是所有实数，不能直接对每个实数断言其为整数且偶数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\forall x(Q(x)\to P(x))$.

**Derivation/proof.** For every real $x$, only the case in which $Q(x)$ holds is constrained. In that case the sentence requires $P(x)$. Thus the correct translation is a universally quantified implication. Translating a false English statement does not license changing it into a true one.

### 中文解答

**推导。** 遍历实数时，只要求整数满足偶数性质，故对每个 $x$ 写条件蕴含 $Q(x)\to P(x)$，再用全称量词得到 $\forall x(Q(x)\to P(x))$。原自然语言在通常整数中虽为假，翻译仍须忠实表达它，不能为使句子为真而改换量词。

## Common Mistakes

- 为了让句子为真而改成存在量词。
- 写合取导致所有实数都必须是整数。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
