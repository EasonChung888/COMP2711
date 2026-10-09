---
id: "Q-2024F-FINAL-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 3
question_number: "1(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Reduce both implications to the same three-literal disjunction using implication elimination and De Morgan."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2024F-FINAL-P01-a

## Source

[[2024 Fall Final]]; printed item 1(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4]]

Page 4 labels the valid equality ¬p∨(q∨r) ≡ (¬p∨q)∨(¬p∨r) “Distributive law”. It follows from associativity and idempotence; the mathematical conclusion is unchanged.

## Question

(a) Let $p,q,r$ denote primitive statements. Use the laws of logic to show that $p\to(q\lor r)$ is equivalent with $(p\land\neg q)\to r$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4|physical PDF page 4]].

> Answer: (a) Let $p,q,r$ denote primitive statements. We aim to show that: $p\to(q\lor r)\equiv(p\land\neg q)\to r$.
> 1. $p\to(q\lor r)\equiv\neg p\lor(q\lor r)$ (Definition of implication)
> 2. $\equiv(\neg p\lor q)\lor(\neg p\lor r)$ (Distributive law)
> 3. Now consider the other side:
> $(p\land\neg q)\to r\equiv\neg(p\land\neg q)\lor r$ (Definition of implication)
> 4. $\equiv(\neg p\lor q)\lor r$ (De Morgan's Law)
> 5. $\equiv(\neg p\lor q)\lor(\neg p\lor r)$ (Since $(\neg p\lor q)\lor r$ is equivalent to $(\neg p\lor q)\lor(\neg p\lor r)$)
> Thus, $p\to(q\lor r)$ is logically equivalent to $(p\land\neg q)\to r$.

## Supplementary Explanation

**Answer.** $p\to(q\lor r)\equiv(p\land\neg q)\to r$.

**Derivation/proof.** The implication law changes the left expression to $\neg p\lor(q\lor r)\equiv\neg p\lor q\lor r$. On the right, $(p\land\neg q)\to r\equiv\neg(p\land\neg q)\lor r$. De Morgan gives $(\neg p\lor\neg\neg q)\lor r$; double negation gives $\neg p\lor q\lor r$. Both reduce to the same expression, so their truth values agree for every assignment. Repeating $\neg p$ in the printed derivation also preserves equivalence, but uses idempotence and associativity rather than its stated distributive law.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Reduce both implications to the same three-literal disjunction using implication elimination and De Morgan.
