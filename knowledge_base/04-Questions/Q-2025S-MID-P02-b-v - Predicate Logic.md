---
id: "Q-2025S-MID-P02-b-v"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 4
question_number: "2(b)(v)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Translate prime-field inverses with explicit nonzero representative bounds."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
---
# Q-2025S-MID-P02-b-v

## Source

[[2025 Spring Midterm]]; printed item 2(b)(v); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=4]]

Printed answer pages contain the defect below; correction/completion is independently derived: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=4]]

Source defect: Page 4 prints $\forall p(prime(p)\to\forall x(x<p\to\exists y(y<p\land xy\equiv1\pmod p)))$, omitting non-zero. At p=2,x=0 it demands an impossible inverse. Add the required 0<x bound from the printed English statement.

## Question

![[STEM-2025S-MID-P02-b - Shared Problem Prompt#Shared printed wording]]

(v) For any prime number $p$, every non-zero element in $\mathbb Z_p$ has a multiplicative inverse.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=4|physical PDF page 4]].

(v) $\forall p(prime(p)\to\forall x(x<p\to\exists y(y<p\land xy\equiv1\pmod p)))$

## Supplementary Explanation

**Answer.** $\forall p(prime(p)\to\forall x((0<x\land x<p)\to\exists y(y<p\land xy\equiv1\pmod p)))$.

**Derivation/proof.** The outer implication restricts the modulus to primes. A nonzero representative must satisfy $0<x\land x<p$ because the natural-number domain already guarantees nonnegativity. Its inverse is expressed by $\exists y(y<p\land xy\equiv1\pmod p)$. A product congruent to one excludes $y=0$ automatically. The printed condition $x<p$ also includes $p=2,x=0$, which would require $0y\equiv1\pmod2$, an impossibility. Thus the additional nonzero restriction is essential.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate prime-field inverses with explicit nonzero representative bounds.
