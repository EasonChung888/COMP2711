---
id: "Q-2016-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "6(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Universal restriction to even integers is equivalent to guarding the predicate by an implication over all integers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P06-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

## Question

(a) (i) $\forall x\in E(p(x))$

(ii) $\forall x\in Z(q(x)\Rightarrow p(x))$

Shared context: [[STEM-2016-MID-P06 - Shared Problem Prompt]].

## 中文解析

在偶数上，蕴含前件为真，所以要求 $p(x)$ 成立；在奇数上前件为假，蕴含自动成立，不加任何限制。因此两句恰好对所有偶数提出同一要求。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** Equivalent.

**Derivation/proof.** If (i) holds, every even integer satisfies $p$, and every odd integer satisfies $q\to p$ vacuously, proving (ii). Conversely, apply (ii) to an arbitrary even integer: $q$ is true, so modus ponens yields $p$, proving (i).

### 中文解答

**推导。** 先假设(i)。任取整数x，若x偶，则在E中，故p(x)真，蕴含真；若x奇，则q(x)假，蕴含也真，于是(ii)成立。反向假设(ii)，任取偶数x，q(x)为真，用肯定前件得p(x)，所以所有E中元素满足p，(i)成立。两方向完成，故等价。

## Common Mistakes

- 认为奇数会使第二句失败，忽略假前件蕴含为真。
- 将限定全称域的蕴含换成合取。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
