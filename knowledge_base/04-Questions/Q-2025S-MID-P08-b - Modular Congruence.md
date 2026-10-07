---
id: "Q-2025S-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 12
question_number: "8(b)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Reduce a noncoprime linear congruence, back-substitute Euclidean divisions and enumerate the full residue family."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: ["[[Q-2025S-MID-P08-a - Modular Congruence]]"]
---
# Q-2025S-MID-P08-b

## Source

[[2025 Spring Midterm]]; printed item 8(b); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12]]

Printed answer pages contain the defect below; correction/completion is independently derived: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12]]

Source defect: Page 12 asserts the inverse of 14 modulo 23 is 5 but omits all extended Euclidean steps explicitly required by the prompt. The note independently supplies the division chain, back-substitution and full solution family.

Prerequisite context (editorial): [[Q-2025S-MID-P08-a - Modular Congruence]]. For positive d, $ad\equiv bd\pmod{cd}$ iff $a\equiv b\pmod c$. Here d=2 and c=23.

## Question

(b) Solve the following congruence. When finding the inverse, you must use the extended Euclidean algorithm and show the steps.
$$28x\equiv32\pmod{46}$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12|physical PDF page 12]].

(b) As we can see, we cannot find the inverse of 28 modulo 46 as they are not co-prime. Note that $28x\equiv32\pmod{46}$ is equivalent to $14x\equiv16\pmod{23}$. Now we calculate the inverse of 14 modulo 23 (Euclidean algorithm), which is 5.

$$70x\equiv x\equiv80\equiv11\pmod{23}$$

## Supplementary Explanation

**Answer.** $x\equiv11\pmod{23}$, or $x=11+23t$ for $t\in\mathbb Z$.

**Derivation/proof.** The condition $46\mid28x-32$ is equivalent to $23\mid14x-16$. The extended Euclidean algorithm is
$$23=1\cdot14+9,\quad14=1\cdot9+5,\quad9=1\cdot5+4,\quad5=1\cdot4+1.$$
Back-substitution gives $1=5-4=2\cdot5-9=2\cdot14-3\cdot9=5\cdot14-3\cdot23$, so the inverse of fourteen is five. Multiply by five to get $x\equiv80\equiv11\pmod{23}$. Substituting every $x=11+23t$ into the original expression gives $28x-32=276+644t=46(6+14t)$. Thus all these integers solve it; modulo forty-six they form the two classes eleven and thirty-four.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Reduce a noncoprime linear congruence, back-substitute Euclidean divisions and enumerate the full residue family.

- Prerequisite / related: [[Q-2025S-MID-P08-a - Modular Congruence]]: 约去非互素同余的共同因数，正好应用前一题的双向约分。 For positive d, $ad\equiv bd\pmod{cd}$ iff $a\equiv b\pmod c$. Here d=2 and c=23.
