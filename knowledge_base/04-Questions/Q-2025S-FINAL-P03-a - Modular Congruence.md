---
id: "Q-2025S-FINAL-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 4
question_number: "3(a)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Translate the distance from consecutive multiples into the permitted residue interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
related_questions: ["[[Q-2025S-FINAL-P03-b - Modular Congruence]]"]
---
# Q-2025S-FINAL-P03-a

## Source

[[2025 Spring Final]]; printed item 3(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=4]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=4]]

## Question

![[STEM-2025S-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(a) [2 pts] Let $x$ be a 7-safe number. What are the possible values of $x\bmod7$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=4|physical PDF page 4]].

(a) $3,4$

## Supplementary Explanation

**Answer.** $3,4$.

**Derivation/proof.** Write $x=7q+r$, $0\le r<7$. The distance to $7q$ is r and the distance to $7(q+1)$ is $7-r$. Both must exceed two: $r>2$ and $7-r>2$. Thus $2<r<5$, allowing exactly the integer residues three and four. Every more distant multiple is farther away, so both residues satisfy the full condition.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Translate the distance from consecutive multiples into the permitted residue interval.

- Follow-on / contrast: [[Q-2025S-FINAL-P03-b - Modular Congruence]]: 把模七的安全余数与另两个模数的安全区间组合计数。
