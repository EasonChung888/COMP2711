---
id: "Q-2023S-MID-P01-a-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 3
question_number: "1(a)(1)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Propositional Translation Method - 命题翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Two separately negated weather alternatives form the antecedent, while both scheduled events belong in the consequent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2023S-MID-P01-a-proof - Proof Strategy]]"]
---
# Q-2023S-MID-P01-a-1

## Source

[[2023 Spring Midterm]]; printed item 1(a)(1). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4]]

## Question

First translate the following hypotheses into propositional logic statements:

1. If it does not rain or if it is not foggy, then the sailing race will be held and the lifesaving demonstration will go on.

Shared printed context: ![[STEM-2023S-MID-P01-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4|physical PDF page 4]].

> (a) We are given premises $(\neg r\lor\neg f)\to(s\land l)$, $s\to t$, and $\neg t$. We want to conclude $r$.

## Supplementary Explanation

**Answer.** $(\neg r\lor\neg f)\to(s\land l)$.

**Derivation/proof.** The antecedent is “it does not rain or it is not foggy”, so it is $\neg r\lor\neg f$. The consequent requires both the race and the demonstration, hence $s\land l$. Joining these with implication gives the stated formula. In particular, the hypothesis permits the implication to be vacuously true when both weather conditions are bad; it does not assert that either event actually occurs.

When both bad weather conditions hold, the antecedent is false, so the conditional does not assert that either activity actually occurs.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Propositional Translation Method - 命题翻译方法]]

Two separately negated weather alternatives form the antecedent, while both scheduled events belong in the consequent.

- Used by: [[Q-2023S-MID-P01-a-proof - Proof Strategy]]: The weather premise links the failed race-and-demonstration conjunction to rain by modus tollens. 天气蕴含式提供最后反推下雨的入口。
