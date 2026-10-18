---
id: "Q-2025F-FINAL-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 10
question_number: "6"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Remove a redundant modulus and explicitly construct all three CRT basis terms."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10,11]
marks: 8
---
# Q-2025F-FINAL-P06

## Source

[[2025 Fall Final]]; printed item 6; 8 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=10]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=11]]

## Question

Use Chinese Remainder Theorem to solve the following system of congruences:
$$x\equiv1\pmod2,\quad x\equiv1\pmod3,\quad x\equiv3\pmod4,\quad x\equiv1\pmod5.$$
You must show all the steps. If you just write down your answer, you will get 0 points even if the answer is correct.
Hint: Note that one of the above congruences is redundant and can be omitted.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=10|physical PDF page 10]], [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=11|physical PDF page 11]].

Note that the first equation is already included in the third one. So we can simply ignore the first equation. And just consider the following congruence system:
$$\begin{aligned}x&\equiv1\pmod3\\x&\equiv3\pmod4\\x&\equiv1\pmod5.\end{aligned}$$
We solve the system
$$\begin{aligned}x&\equiv1\pmod3\\x&\equiv3\pmod4\\x&\equiv1\pmod5\end{aligned}$$
using the explicit CRT formula. The moduli are pairwise coprime and $M=3\cdot4\cdot5=60$.

Define $M_1=M/3=20$, $M_2=M/4=15$, $M_3=M/5=12$.

Find the inverses:
- $y_1$ such that $20y_1\equiv1\pmod3$: $20\equiv2\pmod3$, inverse of 2 modulo 3 is 2 (because $2\cdot2=4\equiv1$). $\Rightarrow y_1=2$.
- $y_2$ such that $15y_2\equiv1\pmod4$: $15\equiv3\pmod4$, inverse of 3 modulo 4 is 3 (because $3\cdot3=9\equiv1$). $\Rightarrow y_2=3$.
- $y_3$ such that $12y_3\equiv1\pmod5$: $12\equiv2\pmod5$, inverse of 2 modulo 5 is 3 (because $2\cdot3=6\equiv1$). $\Rightarrow y_3=3$.

Now apply the formula:
$$\begin{aligned}x&=a_1M_1y_1+a_2M_2y_2+a_3M_3y_3\\&=1\cdot20\cdot2+3\cdot15\cdot3+1\cdot12\cdot3\\&=40+135+36\\&=211.\end{aligned}$$
Reduce modulo $M=60$:
$$211\equiv31\pmod{60}\qquad(211-3\cdot60=211-180=31).$$
Thus the unique solution is
$$x\equiv31\pmod{60}.$$

## Supplementary Explanation

**Answer.** $x\equiv31\pmod{60}$.

**Derivation/proof.** Since $x\equiv3\pmod4$ implies $x\equiv1\pmod2$, the modulo-two condition is redundant. The remaining moduli 3, 4 and 5 are pairwise coprime, with product $M=60$. Set $M_1=20,M_2=15,M_3=12$. Their corresponding inverses are 2, 3 and 3, since $20\cdot2\equiv1\pmod3$, $15\cdot3\equiv1\pmod4$ and $12\cdot3\equiv1\pmod5$. The CRT formula gives $x\equiv1\cdot20\cdot2+3\cdot15\cdot3+1\cdot12\cdot3=211\equiv31\pmod{60}$. Checking 31 modulo 2, 3, 4 and 5 gives the residues 1, 1, 3, 1, respectively, so all original conditions hold. CRT guarantees one residue class modulo 60.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Remove a redundant modulus and explicitly construct all three CRT basis terms.
