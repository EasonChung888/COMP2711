---
id: "Q-2025S-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Factor the common disjunct and recognize two implications as a biconditional."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
---
# Q-2025S-FINAL-P01-b

## Source

[[2025 Spring Final]]; printed item 1(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

(b) [2 pts] Prove or disprove the following statement. In order to prove, you must use propositional laws. In order to disprove, you need to come up with values that this statement is false.
$$ (x\lor y\lor\neg z)\land(\neg x\lor y\lor z)\equiv\neg y\to(x\leftrightarrow z) $$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2|physical PDF page 2]].

(b) $(x\lor y\lor\neg z)\land(\neg x\lor y\lor z)\equiv y\lor((x\lor\neg z)\land(\neg x\lor z))\equiv y\lor((z\to x)\land(x\to z))\equiv y\lor(x\leftrightarrow z)\equiv\neg y\to(x\leftrightarrow z)$

## Supplementary Explanation

**Answer.** The equivalence holds.

**Derivation/proof.** Commutativity and distributivity transform the left side into $y\lor((x\lor\neg z)\land(\neg x\lor z))$. Here $x\lor\neg z\equiv z\to x$ and $\neg x\lor z\equiv x\to z$; their conjunction is the biconditional, giving $y\lor(x\leftrightarrow z)$. By the implication law the right side is $\neg(\neg y)\lor(x\leftrightarrow z)=y\lor(x\leftrightarrow z)$. Both sides therefore have the same expression by propositional laws.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Factor the common disjunct and recognize two implications as a biconditional.
