---
id: "Q-2024S-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 6
question_number: "4(b)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Negate the exact quantified square-difference representation, reversing three quantifiers and eliminating implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
related_questions: ["[[Q-2024S-MID-P04-a - Predicate Logic]]"]
---
# Q-2024S-MID-P04-b

## Source

[[2024 Spring Midterm]]; printed item 4(b). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=6]]

Prerequisite context (editorial): [[Q-2024S-MID-P04-a - Predicate Logic]]. Use the selected representation $\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$ over the integers; this is the statement being negated.

## Question

(b) Express the negation of your statement in (a), such that the symbol $\neg$ does not appear in your statement. (As an example if you want to say $\neg(a=b)$ you must use $a\ne b$, and if you want to say $\neg(a\mid b)$ you must use $a\nmid b$)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=6|physical PDF page 6]].

> (b) possible solution 1: $\exists x\forall a\forall b(4x\ne a^2-b^2)$;
> possible solution 2: $\exists x(4\mid x\land\forall a\forall b(x\ne a^2-b^2))$

## Supplementary Explanation

**Answer.** $\exists x(4\mid x\land\forall a\forall b(x\ne a^2-b^2))$.

**Derivation/proof.** Start from $\neg\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$. Negating the universal quantifier gives an existential one. Using $\neg(A\to B)\equiv A\land\neg B$ then gives $\exists x(4\mid x\land\neg\exists a\exists b(x=a^2-b^2))$. Negating the two existential quantifiers produces two universal quantifiers; replace $\neg(x=a^2-b^2)$ with $x\ne a^2-b^2$. The resulting answer contains no negation symbol, as required.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Negate the exact quantified square-difference representation, reversing three quantifiers and eliminating implication.

- Prerequisite: [[Q-2024S-MID-P04-a - Predicate Logic]]: 本题导入此前提/结果以完成当前计算或证明：Use the selected representation $\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$ over the integers; this is the statement being negated.
