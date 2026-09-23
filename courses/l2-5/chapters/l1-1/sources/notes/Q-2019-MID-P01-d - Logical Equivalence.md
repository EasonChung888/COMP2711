---
id: "Q-2019-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(d)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Only if places the joint windy-and-cold requirement in the consequent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P01-d

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

## Question

(d) It is rainy only if it is windy and cold.

Shared context: [[STEM-2019-MID-P01 - Shared Problem Prompt]].

## 中文解析

only if 后面给必要条件，这个条件又要求风和冷同时成立。因此下雨时要同时满足 w 与 c，把二者放在同一个合取后件内；不能改成只需有风或冷其中一种。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $r\to(w\land c)$.

**Derivation/proof.** “A only if B” makes B necessary for A. Here B itself consists of two simultaneous requirements, windy and cold. Therefore rain implies both $w$ and $c$, expressed as a conjunction inside the consequent. The claim says nothing requiring rain whenever those two conditions hold.

### 中文解答

**推导。** “rainy only if ...” 把 only if 后的整句作为必要条件。“windy and cold”为 $w\land c$，因此答案为 $r\to(w\land c)$。等价写法是 $(r\to w)\land(r\to c)$：下雨时两项都要真，非下雨时本句不对二者施加要求。

## Common Mistakes

- 把 and 写成 or。
- 把 only if 的蕴含方向写反。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
