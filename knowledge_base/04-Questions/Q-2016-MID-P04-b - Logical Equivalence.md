---
id: "Q-2016-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "4(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 6
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Nested implication elimination followed by distribution must reproduce the precise right-hand conjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P04-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=7]]

## Question

(b) Are the following two statements logically equivalent? If yes, prove that these two statements are logically equivalent. Otherwise, give a counter example to show the statements are not logically equivalent.

(i) $(p\Rightarrow q)\Rightarrow r$

(ii) $(p\lor r)\land(q\Rightarrow r)$

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=7|PDF physical page 7]].

(b) Yes. They are logically equivalent.
$$\begin{gathered}
(p\Rightarrow q)\Rightarrow r\\
(\neg p\lor q)\Rightarrow r\\
\neg(\neg p\lor q)\lor r\\
(p\land\neg q)\lor r\\
(p\lor r)\land(\neg q\lor r)\\
(p\lor r)\land(q\Rightarrow r)
\end{gathered}$$

## Supplementary Explanation

**Answer.** Yes, they are equivalent.

**Derivation/proof.** $(p\to q)\to r\equiv\neg(\neg p\lor q)\lor r\equiv(p\land\neg q)\lor r\equiv(p\lor r)\land(\neg q\lor r)\equiv(p\lor r)\land(q\to r)$. The steps use implication elimination twice, De Morgan and double negation, distribution, and implication introduction.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
