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

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=2|physical PDF page 2]].

> (b) Uncountable.

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** The full power set is uncountable by Cantor's diagonal argument. Its finite-subset subfamily is countable by enumeration using the maximum element. If its infinite-subset subfamily were also countable, the union of these two countable families would be countable, contradicting uncountability of the power set. Thus the infinite-subset family is uncountable.

Writing the two families as $F$ and $I$ gives $P(\mathbb N)=F\cup I$. If both families were countable, interleaving their enumerations would enumerate the power set. A family is not uncountable merely because each member is infinite.

If both families were countable, interleaving the enumerations would enumerate their union. Hence $I$ is uncountable.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Set Operations - 集合运算]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Set Identity Method - 集合恒等式方法]]

- Prerequisite: [[Q-2021-MID-P04-a - Countability]]

Variant/contrast: [[Q-2020-MID-P05-b - Countability]] — Power-set uncountability versus the subfamily remaining after removing finite subsets.
