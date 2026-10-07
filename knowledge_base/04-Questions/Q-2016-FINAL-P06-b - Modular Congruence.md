---
id: "Q-2016-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 11
solution_page: [11,12]
question_number: "6(b)"
year: 2016
term: "fall"
exam_type: "final"
marks: 7
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Coprime moduli ensure an integer congruence class but its smallest nonnegative representative exceeds the requested range."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=11]] ![[knowledge_base/past_paper/2016-final.pdf#page=12]]

## Question

(b) Consider the following two modular equations.
$$x\bmod991=752$$
$$x\bmod997=40$$
Does there exist a solution for $x\in Z_{3000}$ such that $x$ satisfies the above two modular equations? If yes, please give all possible solutions in $Z_{3000}$ and show your steps. If no, please explain why there is no solution in $Z_{3000}$.

Shared context: [[STEM-2016-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=11|PDF physical page 11]]; [[knowledge_base/past_paper/2016-final.pdf#page=12|PDF physical page 12]].

(b) No.

Since gcd(991,997) = 1, by Chinese Reminder Theorem, we know that there exists a unique solution in $Z_{988027}$ where $988027=991\times997$. However, this unique solution in $Z_{988027}$ is equal to 447,693 which is greater than or equal to 3000.

By Euclid's Extended GCD algorithm, we derive the following.
$$991(166)+997(-165)=1$$
The multiplicative inverse of 991 in $Z_{997}$ is $166\bmod997=166$.

The multiplicative inverse of 997 in $Z_{991}$ is $-165\bmod991=826$.

Construct $y=752\cdot997\cdot826+40\cdot991\cdot166=625868784$.

The unique solution $x$ in $Z_{988027}$ is $625868784\bmod988027=447,693$, which is greater than or equal to 3000. Thus, there is no solution in $Z_{3000}$.

## Supplementary Explanation

**Answer.** There is no solution in $\mathbb Z_{3000}$.

**Derivation/proof.** Put $x=752+991t$. Modulo 997 this requires $-6t\equiv-712$, or $6t\equiv712$. Since $6\cdot166\equiv-1\pmod{997}$, an inverse of 6 is 831, giving $t\equiv712\cdot831\equiv451\pmod{997}$. Thus $x=447693+988027k$. Its least nonnegative representative exceeds 2999. Independently, the only first-congruence candidates in the requested range are $752,1743,2734$; their remainders modulo 997 are $752,746,740$, none equal to 40.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
