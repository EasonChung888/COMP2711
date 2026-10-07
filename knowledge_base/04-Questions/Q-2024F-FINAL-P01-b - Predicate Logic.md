---
id: "Q-2024F-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 4
question_number: "1(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Translate Bertrand-form wording with an integer-domain implication and strict inequalities for the prime witness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
related_questions: ["[[Q-2024F-FINAL-P01-c - Predicate Logic]]"]
---
# Q-2024F-FINAL-P01-b

## Source

[[2024 Fall Final]]; printed item 1(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4]]

## Question

(b) Assume the domain to be all integers, $Prime(x)$ is a predicates that means $x$ is prime. Express the following statement in terms of quantifiers, variable(s), predicates, and the inequality symbols $<$ or $>$.
For every integer $n$ bigger than 1, there is a prime strictly between $n$ and $2n$.
(Strictly between $n$ and $2n$ means it can not be equal to $n$ an it can not be equal to $2n$)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4|physical PDF page 4]].

> (b) $\forall n((n>1)\to\exists p(Prime(p)\land(n<p<2n)))$

## Supplementary Explanation

**Answer.** $\forall n((n>1)\to\exists p(Prime(p)\land n<p\land p<2n))$.

**Derivation/proof.** Use $\forall n$ over the integer domain. Since the requirement applies only when $n>1$, put that condition in the implication antecedent. The consequent $\exists p$ allows the prime to depend on $n$. Require $Prime(p)$, $n<p$ and $p<2n$ simultaneously, excluding both endpoints. For $n\le1$ the implication makes no additional demand. This translates the supplied sentence without needing to prove its number-theoretic truth.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate Bertrand-form wording with an integer-domain implication and strict inequalities for the prime witness.

- Used by: [[Q-2024F-FINAL-P01-c - Predicate Logic]]: 此结果在后续小题中的具体用途：Negate $\forall n((n>1)\to\exists p(Prime(p)\land n<p\land p<2n))$ over all integers.
