---
id: "Q-2018-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["modeling"]
difficulty: 3
difficulty_basis: "Each speaker type must be equivalent to the truth value of that speakers full statement."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P01-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=3]]

## Question

(a) Let $p$ be the proposition “Alice is a knight”, and $q$ be the proposition “Bob is a knight”. Write a single compound proposition constructed from $p$ and $q$ which contains all the information given or implied in the question. (Hint: Consider that Alice could be a knight or a knave, and Bob could be a knight or a knave.)

Shared context: [[STEM-2018-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=3|physical PDF page 3]].

$((p\land\neg q)\lor(\neg p\land q))\land((q\land(\neg q\land\neg p))\lor(\neg q\land(p\lor q)))$.
(XOR can be used to connect Alice's two cases and Bob's two cases. Some other answers are possible. Using implication is generally not correct.)

## Supplementary Explanation

**Answer.** $(p\leftrightarrow\neg q)\land(q\leftrightarrow(\neg p\land\neg q))$.

**Derivation/proof.** Alice's statement has truth value $\neg q$. Being a knight means that statement is true, and being a knave means it is false, giving $p\leftrightarrow\neg q$. Bob's whole statement is $\neg p\land\neg q$, giving $q\leftrightarrow(\neg p\land\neg q)$. Both conversations occurred, so conjoin the constraints. Expanding each biconditional produces the source's two-case expression.

Expanded explicitly, the first constraint is $(p\land\neg q)\lor(\neg p\land q)$ and the second is $(q\land\neg p\land\neg q)\lor(\neg q\land(p\lor q))$. Parenthesis balancing in the official display above is a typography repair; its two-case method is unchanged.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
