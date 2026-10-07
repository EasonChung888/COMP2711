---
id: "Q-2024F-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 5
question_number: "2(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Set Operations - 集合运算]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Prove both containments by sending any member of either set through the union-into-intersection premise."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2024F-FINAL-P02-a

## Source

[[2024 Fall Final]]; printed item 2(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=6]]

## Question

(a) Prove or disprove that if $(A\cup B)\subseteq(A\cap B)$, then $A=B$.
Note that one approach can be showing that $A\subseteq B$ and $B\subseteq A$, which means that they have to be equal.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=6|physical PDF page 6]].

> Answer: (a) To prove $A\subseteq B$, assume $x\in A$. $x\in A\implies x\in A\cup B$ by the definition of union. Then This implies that $x\in A\cap B$ Because $(A\cup B)\subseteq(A\cap B)$. This means $x\in B$ according to the definition of intersection. Therefore, $A\subseteq B$.
> The same argument can be applied for the other way. So we can prove that $A=B$.

## Supplementary Explanation

**Answer.** True: $A=B$.

**Derivation/proof.** For any $x\in A$, union membership gives $x\in A\cup B$. The hypothesis forces $x\in A\cap B$, hence $x\in B$. Thus $A\subseteq B$. Conversely, if $x\in B$, then $x\in A\cup B$, so $x\in A\cap B$ and $x\in A$. Therefore $B\subseteq A$. The two-way inclusion proves $A=B$, including cases involving empty sets.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Set Operations - 集合运算]]
- [[Set Identity Method - 集合恒等式方法]]

Prove both containments by sending any member of either set through the union-into-intersection premise.
