---
id: "Q-2023F-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 11
question_number: "7"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Invert each coefficient, then handle compatible noncoprime moduli with lcm 30 rather than the ordinary coprime CRT product 60."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 11
---
# Q-2023F-FINAL-P07

## Source

[[2023 Fall Final]]; printed item 7; 11 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=11]]

## Question

Solve this system of linear congruences:
$$3x\equiv1\pmod{10},\qquad5x\equiv3\pmod6.$$
Show all the steps.

(Hint: You might want to get rid of the coefficients somehow first)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=11|physical PDF page 11]].

> One approach is to simplify each equation first by multiplying each side by the inverse of the used coefficient.
> In first equation the inverse of $3$ mod $10$ exists as they are relatively prime and the inverse is $7$.
> In second equation the inverse of $5$ mod $6$ exists as they are relatively prime and the inverse is $5$. So the equation converts to:
> $$x\equiv7\pmod{10},\qquad x\equiv3\pmod6.$$
> Now we can not use CRT directly as $6,10$ are not relatively prime. So, we use the same idea as in homework to break them down them into separate cases that are pairwise relatively prime. Which means we need to solve:
> $$x\equiv2\pmod5,\qquad x\equiv1\pmod2,\qquad x\equiv0\pmod3.$$
> $$m=30\quad M_1=6\quad M_2=15\quad M_3=10.$$
> $$y_1=1,\quad y_2=1,\quad y_3=1.$$
> $$x=2\cdot6\cdot1+1\cdot15\cdot1+0\cdot10\cdot1=27.$$
> $$x\equiv27\pmod{30}.$$

## Supplementary Explanation

**Answer.** $x\equiv27\pmod{30}$.

**Derivation/proof.** Because $3\cdot7\equiv1\pmod{10}$ and $5\cdot5\equiv1\pmod6$, the equations become $x\equiv7\pmod{10}$ and $x\equiv15\equiv3\pmod6$. Set $x=7+10k$. Then $7+10k\equiv3\pmod6$ gives $4k\equiv2\pmod6$, equivalently $2k\equiv1\pmod3$, so $k\equiv2\pmod3$. Thus $x=7+10(2+3t)=27+30t$. Check $3\cdot27\equiv1\pmod{10}$ and $5\cdot27\equiv3\pmod6$. The parameterization captures all integer solutions.

Alternatively, substitute $x=7+10k$ to get $4k\equiv2\pmod6$. The equivalence $6\mid(4k-2)\iff3\mid(2k-1)$ gives $k=2+3t$ and therefore $x=27+30t$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Invert each coefficient, then handle compatible noncoprime moduli with lcm 30 rather than the ordinary coprime CRT product 60.
