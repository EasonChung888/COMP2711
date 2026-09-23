---
id: "Q-2019-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "A necessary condition is the consequent, so wind requires cold rather than causing its converse."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P01-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

## Question

(c) To be windy it is necessary that it be cold.

Shared context: [[STEM-2019-MID-P01 - Shared Problem Prompt]].

## 中文解析

冷是刮风的必要条件，意思是若刮风就一定冷。必要条件放在蕴含的后面，而不是前面；它只排除“有风但不冷”，并没有保证每逢冷天气都会刮风。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $w\to c$.

**Derivation/proof.** Cold is necessary for wind, meaning wind cannot occur without cold. Thus every valuation with $w=T$ must have $c=T$, exactly the implication $w\to c$. The equivalent contrapositive is $\neg c\to\neg w$. Cold alone does not guarantee wind.

### 中文解答

**推导。** “冷”是“有风”的必要条件，意即每当有风就必须冷。因此以前者要求的情形 $w$ 作前件，以必要条件 $c$ 作后件，得到 $w\to c$。冷而无风并不违背此句，所以不能把方向写成 $c\to w$。

## Common Mistakes

- 把必要条件当成充分条件。
- 写成冷与有风等价。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
