---
id: "Q-2025F-FINAL-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 3
question_number: "1(a)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Eliminate an implication and use absorption to cancel its redundant third proposition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3,4]
marks: 3
---
# Q-2025F-FINAL-P01-a

## Source

[[2025 Fall Final]]; printed item 1(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4]]

## Question

(a) [3 points] Without using truth table prove that:
$$[(\neg p\lor\neg q)\to(p\land q\land r)]\equiv p\land q$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3|physical PDF page 3]], [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4|physical PDF page 4]].

(a)
$$\begin{aligned}
(\neg p\lor\neg q)\to(p\land q\land r)
&\equiv\neg(\neg p\lor\neg q)\lor(p\land q\land r)&&\text{(implication equivalence)}\\
&\equiv(p\land q)\lor(p\land q\land r)&&\text{(De Morgan's law)}\\
&\equiv(p\land q)\lor\big((p\land q)\land r\big)&&\text{(associativity)}\\
&\equiv(p\land q)\land(1\lor r)&&\text{(distributivity: }A\lor(A\land B)\equiv A\land(1\lor B)\text{)}\\
&\equiv(p\land q)\land1&&\text{(since }1\lor r\equiv1\text{)}\\
&\equiv p\land q&&\text{(identity law for }\land\text{)}
\end{aligned}$$
Thus,
$$[(\neg p\lor\neg q)\to(p\land q\land r)]\equiv p\land q.$$
(Note: the proposition $r$ cancels out completely and does not affect the equivalence.)

## Supplementary Explanation

**Answer.** The equivalence holds.

**Derivation/proof.** The implication law rewrites the left side as $\neg(\neg p\lor\neg q)\lor(p\land q\land r)$. De Morgan's law and double negation give $(p\land q)\lor((p\land q)\land r)$. Put $A=p\land q$; absorption states $A\lor(A\land r)\equiv A$, so the expression equals $p\land q$. Every transformation preserves logical equivalence. No truth table or assumption about the truth value of $r$ is used.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Eliminate an implication and use absorption to cancel its redundant third proposition.
