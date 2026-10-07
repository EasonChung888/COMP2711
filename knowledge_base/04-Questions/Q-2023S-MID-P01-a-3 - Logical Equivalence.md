---
id: "Q-2023S-MID-P01-a-3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 3
question_number: "1(a)(3)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Propositional Translation Method - 命题翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "This hypothesis denies the trophy proposition outright rather than linking it conditionally to weather or the race."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2023S-MID-P01-a-proof - Proof Strategy]]"]
---
# Q-2023S-MID-P01-a-3

## Source

[[2023 Spring Midterm]]; printed item 1(a)(3). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4]]

## Question

First translate the following hypotheses into propositional logic statements:

3. The trophy was not awarded.

Shared printed context: ![[STEM-2023S-MID-P01-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4|physical PDF page 4]].

> (a) We are given premises $(\neg r\lor\neg f)\to(s\land l)$, $s\to t$, and $\neg t$. We want to conclude $r$.

## Supplementary Explanation

**Answer.** $\neg t$.

**Derivation/proof.** The shared definition assigns $t$ to the trophy being awarded. The third hypothesis explicitly says this event did not occur, so its translation is $\neg t$. This premise fixes the value of $t$ to false and does not itself fix $r$, $f$, $s$, or $l$. Combined with $s\to t$ it can later support modus tollens, but that later inference is not part of this translation.

This makes the truth value of $t$ false. Combining it with another premise is a separate inference step, not part of the translation.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Propositional Translation Method - 命题翻译方法]]

This hypothesis denies the trophy proposition outright rather than linking it conditionally to weather or the race.

- Used by: [[Q-2023S-MID-P01-a-proof - Proof Strategy]]: The no-prize-giving premise starts the inference chain and rules out the race by modus tollens. 没有颁奖是证明的事实起点，不能换成所求的下雨结论。
