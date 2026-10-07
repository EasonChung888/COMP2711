---
id: "Q-2024F-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 17
question_number: "6(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Subtract a divisible square and apply prime divisibility to conclude that p divides b."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 4
related_questions: ["[[Q-2024F-FINAL-P06-b - Modular Congruence]]"]
---
# Q-2024F-FINAL-P06-a

## Source

[[2024 Fall Final]]; printed item 6(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17]]

## Question

(a) Prove that if $p\mid a$ then $p\mid b$.

Shared printed context: ![[STEM-2024F-FINAL-P06 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17|physical PDF page 17]].

> Answer: (a) Note that if $p\mid a$ then $p\mid a^2$ which means $p\mid(a^2+b^2)-a^2\implies p\mid b^2\implies p\mid b$.

## Supplementary Explanation

**Answer.** $p\mid a\Rightarrow p\mid b$.

**Derivation/proof.** From $p\mid a$, write $a=pt$, giving $p\mid a^2$. The shared premise says $p\mid a^2+b^2$. Divisibility is closed under subtraction, so $p\mid[(a^2+b^2)-a^2]=b^2$. Since $p$ is prime, Euclid's lemma applied to $b^2=b\cdot b$ yields $p\mid b$. This part needs primality only; the condition $p\equiv3\pmod4$ is used in the next part.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Subtract a divisible square and apply prime divisibility to conclude that p divides b.

- Used by: [[Q-2024F-FINAL-P06-b - Modular Congruence]]: 此结果在后续小题中的具体用途：Under $p\mid a^2+b^2$ and prime $p$, part (a) supplies $p\mid a\Rightarrow p\mid b$ for the final conclusion.
