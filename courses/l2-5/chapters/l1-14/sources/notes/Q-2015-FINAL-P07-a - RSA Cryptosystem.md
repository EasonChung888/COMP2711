---
id: "Q-2015-FINAL-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 13
solution_page: [13]
question_number: "7(a)"
year: 2015
term: "fall"
exam_type: "final"
marks: 6
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Fermat reductions for three different primes must be combined by CRT to recover the modulus one hundred five."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P07-a

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=13]]

## Question

(a) Use Fermat’s Little Theorem and the Chinese Remainder Theorem to show that, if an integer $a$ is not divisible by any of 3, 5 and 7, then
$$a^{49}\bmod105=a\bmod105.$$

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=13|PDF physical page 13]].

(a) Note that $105=3\times5\times7$. We also have:
$$\begin{aligned}
a^{49}\bmod3&=(a^{24*(3-1)+1})\bmod3=a\bmod3&&\text{by FLT}\\
a^{49}\bmod5&=(a^{12*(5-1)+1})\bmod5=a\bmod5&&\text{by FLT}\\
a^{49}\bmod7&=(a^{8*(7-1)+1})\bmod7=a\bmod7&&\text{by FLT}
\end{aligned}$$
By CRT, we have
$$a^{49}\bmod3\times5=a\bmod15.$$
Applying CRT again we get
$$a^{49}\bmod15\times7=a\bmod105.$$

## Supplementary Explanation

**Answer.** $a^{49}\equiv a\pmod{105}$.

**Derivation/proof.** For $r=3,5,7$, the hypothesis gives $\gcd(a,r)=1$, so $a^{r-1}\equiv1\pmod r$. Since $48=24\cdot2=12\cdot4=8\cdot6$, $a^{49}=a(a^{r-1})^{48/(r-1)}\equiv a\pmod r$. The pairwise coprime moduli multiply to 105; CRT therefore makes the two residues equal modulo 105.

CRT uniqueness makes the two standard remainders equal modulo the product $105$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
