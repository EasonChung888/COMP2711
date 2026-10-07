---
id: "Q-2015-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 3
solution_page: [4]
question_number: "1(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Eliminating the nested implication separates the two tautologies from expressions falsified by p true and q false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P01-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=4]]

## Question

(b) Let $p$ and $q$ be two propositions. Which of the following propositions is/are tautology/tautologies?

1. $p\to(p\to q)$
2. $\neg p\to(p\to q)$
3. $q\to(p\to q)$
4. $\neg q\to(p\to q)$
5. None of above.

Shared context: [[STEM-2015-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=4|PDF physical page 4]].

(b) 2, 3

## Supplementary Explanation

**Answer.** 2, 3.

**Derivation/proof.** The four formulas simplify respectively to $\neg p\lor q$, $p\lor\neg p\lor q$, $\neg q\lor\neg p\lor q$, and $q\lor\neg p\lor q$. The middle two contain a complementary pair and are true for all assignments. The first and fourth both reduce to $\neg p\lor q$, false at $p=T,q=F$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
