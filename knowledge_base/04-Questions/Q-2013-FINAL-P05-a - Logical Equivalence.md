---
id: "Q-2013-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 8
solution_page: [8]
question_number: "5(a)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "Equivalence is established by eliminating implication and applying De Morgan's law, so every rewrite must preserve truth value."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=8]].

## Question

(a) $(p\land q)\Rightarrow r$ and $\neg p\lor\neg q\lor r$

Shared context: [[STEM-2013-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=8|PDF physical page 8]].

(a) Equivalent.
$$\begin{aligned}
(p\land q)\Rightarrow r&\equiv\neg(p\land q)\lor r&& (s\Rightarrow t\equiv\neg s\lor t)\\
&\equiv\neg p\lor\neg q\lor r&&\text{(by DeMorgan's law)}
\end{aligned}$$

## Supplementary Explanation

**Answer.** Yes.

**Derivation/proof.** $(p\land q)\Rightarrow r\equiv\neg(p\land q)\lor r\equiv\neg p\lor\neg q\lor r$ by implication elimination and De Morgan's law.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
