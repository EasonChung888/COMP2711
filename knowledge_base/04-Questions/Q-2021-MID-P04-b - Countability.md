---
id: "Q-2021-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 2
question_number: "4(b)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Set Operations - 集合运算]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]","[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Removing the countable finite-subset family from the uncountable power set leaves an uncountable family."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
related_questions: ["[[Q-2021-MID-P04-a - Countability]]","[[Q-2020-MID-P05-b - Countability]]"]
---
# Q-2021-MID-P04-b

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=2]]

Prerequisite context (editorial): [[Q-2021-MID-P04-a - Countability]]. Part (a) proves the family of finite subsets of $\mathbb N$ countable. This lets the proof below remove only a countable family from the uncountable full power set. 这里减去的是“有限子集构成的可数族”，不是说每个无限子集本身都不可数。

## Question

Is $\{S\mid S\subseteq\mathbb N,|S|\text{ is infinite}\}$ countable or uncountable? Justification is not necessary.

Shared context: [[STEM-2021-MID-P04 - Shared Problem Prompt]].

## 中文解析

所有自然数子集分成有限与无限两类。有限子集族可数，但完整幂集不可数；假设无限子集族也可数，两类合并仍可数，便矛盾。这里判断的是“集合的集合”的基数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Uncountable.

**Derivation/proof.** The full power set is uncountable by Cantor's diagonal argument. Its finite-subset subfamily is countable by enumeration using the maximum element. If its infinite-subset subfamily were also countable, the union of these two countable families would be countable, contradicting uncountability of the power set. Thus the infinite-subset family is uncountable.

### 中文解答

**推导。** 设有限子集族为 $F$，无限子集族为 $I$，则 $P(\mathbb N)=F\cup I$。由(a)，$F$ 可数；完整幂集由康托尔对角线论证不可数。若 $I$ 也可数，交替枚举两个可数族便会使 $F\cup I$ 可数，矛盾。所以 $I$ 不可数。题目虽然不要求说明，这个论证给出了判断的依据，而不是把“每个成员无限”误当成整个族不可数的理由。

## Common Mistakes

- 把每个无限子集自身可数混同于子集族可数。
- 认为从不可数集合中删掉可数个元素会变可数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Set Operations - 集合运算]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Set Identity Method - 集合恒等式方法]]

- Prerequisite: [[Q-2021-MID-P04-a - Countability]]

Variant/contrast: [[Q-2020-MID-P05-b - Countability]] — Power-set uncountability versus the subfamily remaining after removing finite subsets.
