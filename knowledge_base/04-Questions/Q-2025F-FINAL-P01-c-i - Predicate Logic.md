---
id: "Q-2025F-FINAL-P01-c-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 3
question_number: "1(c)(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Translate a restriction on seniors as a universally quantified inclusive disjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2025F-FINAL-P01-c-i

## Source

[[2025 Fall Final]]; printed item 1(c)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4]]

## Question

![[STEM-2025F-FINAL-P01-c - Shared Problem Prompt#Shared printed wording]]

(i) Every senior in the class is majoring either in comp or mathematics.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4|physical PDF page 4]].

(c) (i) $\forall x\big(s(x)\to(c(x)\lor m(x))\big)$.

## Supplementary Explanation

**Answer.** $\forall x(s(x)\to(c(x)\lor m(x)))$.

**Derivation/proof.** Take any student $x$ in the domain. If $s(x)$ holds, the student must have at least one of the two majors, expressed by $c(x)\lor m(x)$. Therefore use $s(x)\to(c(x)\lor m(x))$ and universally quantify over all students. The statement does not prohibit a double major, and the official formula uses inclusive disjunction: a senior who satisfies both $c(x)$ and $m(x)$ still qualifies. Nonseniors are not constrained by this sentence.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate a restriction on seniors as a universally quantified inclusive disjunction.
