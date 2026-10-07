---
id: "Q-2015-MID-P03-statement-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 7
solution_page: [8]
question_number: "3(a)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 2
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Both properties belong in the same universal implication antecedent, with success as the consequent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P03-statement-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=8]]

## Question

(a) A rich and famous person is a successful person.

Shared context: [[STEM-2015-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=8|PDF physical page 8]].

(a) $\forall x\in U((rich(x)\land famous(x))\to successful(x))$.

## Supplementary Explanation

**Answer.** $\forall x\in U((rich(x)\land famous(x))\to successful(x))$.

**Derivation/proof.** Choose an arbitrary person $x$. The claim applies when both $rich(x)$ and $famous(x)$ hold, and then requires $successful(x)$. Put these conditions into an implication and universally quantify $x$.

People who do not satisfy both conditions are not constrained by this assertion of success.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
