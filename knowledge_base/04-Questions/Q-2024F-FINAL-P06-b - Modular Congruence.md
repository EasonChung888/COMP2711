---
id: "Q-2024F-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 17
question_number: "6(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Raise a^2≡−b^2 to the odd power (p−1)/2 and apply Fermat to both nonzero residues for contradiction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 8
related_questions: ["[[Q-2024F-FINAL-P06-a - Modular Congruence]]"]
---
# Q-2024F-FINAL-P06-b

## Source

[[2024 Fall Final]]; printed item 6(b); 8 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P06-a - Modular Congruence]]. Under $p\mid a^2+b^2$ and prime $p$, part (a) supplies $p\mid a\Rightarrow p\mid b$ for the final conclusion.

## Question

(b) Prove that if $p\nmid a$ then there will be contradictions. (In other words, if $p\mid a^2+b^2$ we can conclude that $p\mid a$ and $p\mid b$).
Hint: You might find little Fermat theorem useful here. You can also use part (a) even if you could not prove it.

Shared printed context: ![[STEM-2024F-FINAL-P06 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17|physical PDF page 17]].

> (b) Assume that $p\nmid a$. This also implies that $p\nmid b$ (think why?). This means $\gcd(p,a)=\gcd(p,b)=1$.
> $p\mid a^2+b^2\implies a^2\equiv-b^2\pmod p$. Note that $p-1$ is an even number and $\frac{p-1}2$ is odd.
> $$a^2\equiv-b^2\pmod p\implies(a^2)^{\frac{p-1}2}\equiv(-b^2)^{\frac{p-1}2}\implies a^{p-1}\equiv-b^{p-1}.$$
> By little Fermat theorem we know that $a^{p-1}\equiv b^{p-1}\equiv1\pmod p$. So this means $1\equiv-1\pmod p\implies2\equiv0\pmod p$. This is impossible as $p$ is odd and this is the contradiction.

## Supplementary Explanation

**Answer.** $p\mid a$ and $p\mid b$.

**Derivation/proof.** Suppose $p\nmid a$. If $p\mid b$, subtraction from the square sum would give $p\mid a^2$ and then $p\mid a$, a contradiction. Thus $p\nmid b$. Now $a^2\equiv-b^2\pmod p$. Since $p=4k+3$, the exponent $(p-1)/2=2k+1$ is odd, so raising both sides gives $a^{p-1}\equiv-b^{p-1}\pmod p$. Fermat applies to both nondivisible bases and gives $1\equiv-1\pmod p$, hence $p\mid2$. But $p$ is an odd prime at least three, so this is a contradiction. Therefore $p\mid a$, and part (a) gives $p\mid b$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Raise a^2≡−b^2 to the odd power (p−1)/2 and apply Fermat to both nonzero residues for contradiction.

- Prerequisite: [[Q-2024F-FINAL-P06-a - Modular Congruence]]: 本题导入此前提/结果以完成当前计算或证明：Under $p\mid a^2+b^2$ and prime $p$, part (a) supplies $p\mid a\Rightarrow p\mid b$ for the final conclusion.
