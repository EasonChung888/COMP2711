---
id: "Q-2023S-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 5
question_number: "2(c)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof","classification"]
difficulty: 2
difficulty_basis: "Negating the existential changes it to a universal and De Morgan converts the strict positive condition into a nonpositive alternative."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 3
---
# Q-2023S-MID-P02-c

## Source

[[2023 Spring Midterm]]; printed item 2(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

## Question

(c) $\neg(\exists x(x>0\land P(x)))$ and $\forall x(x\le0\lor\neg P(x))$

Shared printed context: ![[STEM-2023S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5|physical PDF page 5]].

> (c) Equivalent. $\neg(\exists x(x>0\land p(x)))\equiv\forall x(\neg(x>0)\lor\neg p(x))\equiv\forall x(x\le0\lor\neg p(x))$. (By De Morgan’s Law)

## Supplementary Explanation

**Answer.** Equivalent.

**Derivation/proof.** Apply quantifier negation and De Morgan in order:
$$\neg\exists x(x>0\land P(x))\equiv\forall x\neg(x>0\land P(x))\equiv\forall x(\neg(x>0)\lor\neg P(x))\equiv\forall x(x\le0\lor\neg P(x)).$$
These are equivalences for every real $x$ and every interpretation of $P$. The predicate $Q$ mentioned in the general instructions is not used by either formula, so its interpretation is immaterial.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]

Negating the existential changes it to a universal and De Morgan converts the strict positive condition into a nonpositive alternative.
