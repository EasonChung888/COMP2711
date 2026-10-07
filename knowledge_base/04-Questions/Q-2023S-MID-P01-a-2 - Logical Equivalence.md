---
id: "Q-2023S-MID-P01-a-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 3
question_number: "1(a)(2)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Propositional Translation Method - 命题翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "The race is the sufficient condition and the trophy award is its consequent; no converse is asserted."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2023S-MID-P01-a-proof - Proof Strategy]]"]
---
# Q-2023S-MID-P01-a-2

## Source

[[2023 Spring Midterm]]; printed item 1(a)(2). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4]]

## Question

First translate the following hypotheses into propositional logic statements:

2. If the sailing race is held, then the trophy will be awarded.

Shared printed context: ![[STEM-2023S-MID-P01-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4|physical PDF page 4]].

> (a) We are given premises $(\neg r\lor\neg f)\to(s\land l)$, $s\to t$, and $\neg t$. We want to conclude $r$.

## Supplementary Explanation

**Answer.** $s\to t$.

**Derivation/proof.** By the definitions in the shared context, “the sailing race is held” is $s$ and “the trophy will be awarded” is $t$. The English construction “If A, then B” translates to $A\to B$, so the formula is $s\to t$. Its only falsifying case is a held race together with no trophy award. A trophy without the race is not prohibited by this hypothesis.

The only falsifying case is a race with no trophy; a trophy without a race is allowed. Thus the statement cannot be strengthened to $s\leftrightarrow t$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Propositional Translation Method - 命题翻译方法]]

The race is the sufficient condition and the trophy award is its consequent; no converse is asserted.

- Used by: [[Q-2023S-MID-P01-a-proof - Proof Strategy]]: The premise that a race implies prize-giving, combined with no prize-giving, rules out the race. 比赛必有颁奖与没有颁奖合用，先推出没有比赛。
