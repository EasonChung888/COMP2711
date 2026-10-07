---
id: "Q-2024F-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 5
question_number: "2(c)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["counterexample"]
difficulty: 3
difficulty_basis: "Distinguish an existentially quantified implication from an implication whose antecedent is existential."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 5
---
# Q-2024F-MID-P02-c

## Source

[[2024 Fall Midterm]]; printed item 2(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=6]]

## Question

(c) Either prove that the two statements below are logically equivalent or give a counterexample to show that they are not logically equivalent.
$$\exists y[P(y)\to\forall xQ(x)]$$
$$\exists yP(y)\to\forall xQ(x)$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=6|physical PDF page 6]].

> (c) These two statements are obviously not equivalent. Consider this scenario, Imagine having $\{a,b\}$ in our domain. Assume $P(a)=T,P(b)=F,Q(a)=T,Q(b)=F$. The top statement is True. Because $P(b)=F$ which makes the top statement True. However the bottom statement becomes False.

## Supplementary Explanation

**Answer.** Not equivalent.

**Derivation/proof.** Use domain $\{a,b\}$ with $P(a)=T,P(b)=F,Q(a)=T,Q(b)=F$. Since $Q(b)=F$, $\forall xQ(x)=F$. For the first expression choose $y=b$, giving $P(b)\to\forall xQ(x)=F\to F=T$, so its existential claim is true. In the second, $P(a)=T$ makes $\exists yP(y)=T$, and the implication is $T\to F=F$. One interpretation gives different truth values, proving non-equivalence.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Distinguish an existentially quantified implication from an implication whose antecedent is existential.
