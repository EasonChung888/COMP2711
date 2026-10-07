---
id: "Q-2025F-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 10
question_number: "3(a)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Set Operations - 集合运算]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Prove subset containment by following an arbitrary intersection element."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 2
---
# Q-2025F-MID-P03-a

## Source

[[2025 Fall Midterm]]; printed item 3(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

(a) [2 points] Assume $A\subseteq C$ and $B\subseteq C$. Use direct proof to prove that $A\cap B\subseteq C$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11|physical PDF page 11]].

> (a) Let $x\in A\cap B$. By definition of intersection, $x\in A$ and $x\in B$. Since $A\subseteq C$, it follows that $x\in C$. Similarly, since $B\subseteq C$, $x\in C$ also holds. Thus, $x\in C$. Therefore, $A\cap B\subseteq C$.

## Supplementary Explanation

**Answer.** $A\cap B\subseteq C$.

**Derivation/proof.** Take arbitrary $x\in A\cap B$. By the definition of intersection, x belongs to both A and B. Since $A\subseteq C$, from $x\in A$ obtain $x\in C$. Every element of the intersection therefore belongs to C, proving the inclusion. The premise $B\subseteq C$ could be used instead; only one of the two premises is actually needed. An empty intersection satisfies the inclusion vacuously.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Set Operations - 集合运算]]
- [[Set Identity Method - 集合恒等式方法]]

Prove subset containment by following an arbitrary intersection element.
