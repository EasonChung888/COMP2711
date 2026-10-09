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

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=3|physical PDF page 3]].

$w\to c$.

## Supplementary Explanation

**Answer.** $w\to c$.

**Derivation/proof.** Cold is necessary for wind, meaning wind cannot occur without cold. Thus every valuation with $w=T$ must have $c=T$, exactly the implication $w\to c$. The equivalent contrapositive is $\neg c\to\neg w$. Cold alone does not guarantee wind.

The implication permits cold without wind: $w$ false and $c$ true still satisfies $w\to c$. It forbids wind without cold, so reversing the implication would change the statement.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
