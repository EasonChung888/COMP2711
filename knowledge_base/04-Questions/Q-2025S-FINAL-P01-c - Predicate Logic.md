---
id: "Q-2025S-FINAL-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(c)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Translate disjointness using universal membership exclusion on the specified natural domain."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
related_questions: ["[[Q-2025S-FINAL-P01-d - Predicate Logic]]"]
---
# Q-2025S-FINAL-P01-c

## Source

[[2025 Spring Final]]; printed item 1(c); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

(c) [2 pts] Assume $A$ and $B$ are two sets with elements in $\mathbb N$. Express the following predicate using only $\forall$, $\exists$, $\land$, $\lor$, $\to$, $\leftrightarrow$, $\neg$, $\in$, $\notin$, parentheses, variables and constants. Take the natural numbers $\mathbb N$ as the domain. You are not allowed to use any other predicates.

Set $A$ and set $B$ are disjoint

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2|physical PDF page 2]].

(c) Possible Solutions:
- $\forall x(x\in A\to x\notin B)\land\forall x(x\in B\to x\notin A)$
- $\forall x(x\notin A\lor x\notin B)$
- $\neg\exists x(x\in A\land x\in B)$

## Supplementary Explanation

**Answer.** $\forall x(x\notin A\lor x\notin B)$.

**Derivation/proof.** Belonging to both sets is $x\in A\land x\in B$. Excluding any such witness gives $\neg\exists x(x\in A\land x\in B)$. Quantifier negation and De Morgan's law give $\forall x(\neg(x\in A)\lor\neg(x\in B))$, or $\forall x(x\notin A\lor x\notin B)$. The natural-number domain contains all elements of both sets, making this necessary and sufficient and using only permitted symbols.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate disjointness using universal membership exclusion on the specified natural domain.

- Follow-on / contrast: [[Q-2025S-FINAL-P01-d - Predicate Logic]]: 本题将上一项的互不相交公式逐层否定。
