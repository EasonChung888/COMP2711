---
id: "Q-2025S-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 12
question_number: "8(a)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Prove both directions of cancellation while reducing the modulus by the same positive factor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: ["[[Q-2025S-MID-P08-b - Modular Congruence]]"]
---
# Q-2025S-MID-P08-a

## Source

[[2025 Spring Midterm]]; printed item 8(a); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12]]

Printed answer pages contain the defect below; correction/completion is independently derived: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12]]

Source defect: Page 12 gives only the forward direction, dividing d(a-b)=cdk by d. The reverse implication required by “if and only if” is absent; the note independently supplies multiplication by d.

## Question

(a) Show that for any positive integers $a,b,c,d$,
$$ad\equiv bd\pmod{cd}$$
if and only if
$$a\equiv b\pmod c.$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12|physical PDF page 12]].

(a) We know that $cd\mid ad-bd$. In other words $d(a-b)=cd\cdot k$. We can divide both sides by $d$. So $(a-b)=c\cdot k$, which means $c\mid a-b$. This is the same as $a\equiv b\pmod c$.

## Supplementary Explanation

**Answer.** The two congruences are equivalent.

**Derivation/proof.** Forward direction: $ad\equiv bd\pmod{cd}$ means $d(a-b)=cdk$ for an integer $k$. Since $d>0$, divide the integer equality by $d$ to obtain $a-b=ck$, hence $a\equiv b\pmod c$. Reverse direction: if $a\equiv b\pmod c$, then $a-b=ck$ for an integer $k$. Multiplying by $d$ gives $ad-bd=cdk$, hence $ad\equiv bd\pmod{cd}$. Both directions hold. The reverse direction completes the printed one-direction argument.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Prove both directions of cancellation while reducing the modulus by the same positive factor.

- Follow-on / contrast: [[Q-2025S-MID-P08-b - Modular Congruence]]: 约去非互素同余的共同因数，正好应用前一题的双向约分。
