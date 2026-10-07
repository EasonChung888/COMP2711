---
id: "Q-2023F-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 5
question_number: "2(b)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "All a and b are quantified outside the biconditional, while each target integer c may require its own two integer coefficients."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5,6]
marks: 4
---
# Q-2023F-MID-P02-b

## Source

[[2023 Fall Midterm]]; printed item 2(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=5]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=6]]

## Question

Let the domain consist of all integers. $CoPrime(a,b)$ is a predicate which means $a$ and $b$ are co-prime (you do not need to know the meaning of 'co-prime' in order to answer this question). Express the following statement using quantifiers:

Two numbers $a$ and $b$ are co-prime if and only if any integer can be expressed as a linear combination of $a$ and $b$.

(A linear combination is an expression constructed from a set of terms by multiplying each term with a constant and summing the results (e.g., a linear combination of $x$ and $y$ is any expression of the form $ax+by$, where $a$ and $b$ are constants).)

Note: you are only allowed to use quantifiers, addition, multiplication, equality, and the $CoPrime$ predicate.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=5|physical PDF page 5]].

> (b) $\forall a\forall b(CoPrime(a,b)\Longleftrightarrow\forall c\exists x\exists y(c=ax+by))$

## Supplementary Explanation

**Answer.** $\forall a\forall b\bigl(CoPrime(a,b)\leftrightarrow\forall c\exists x\exists y(c=ax+by)\bigr)$.

**Derivation/proof.** The outer $\forall a\forall b$ covers every pair of integers named in the sentence. “If and only if” becomes the biconditional. “Any integer” introduces $\forall c$; “can be expressed” then introduces integer coefficients $\exists x\exists y$. The equation $c=ax+by$ uses only the allowed arithmetic operations and equality. The order permits the coefficients to depend on a, b, and the target c, exactly as required.

The coefficients may depend on $a,b,c$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

All a and b are quantified outside the biconditional, while each target integer c may require its own two integer coefficients.
