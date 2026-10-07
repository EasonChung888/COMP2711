---
id: "Q-2018-FINAL-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 13
solution_page: [13]
question_number: "9(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Inclusion-Exclusion - 容斥原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Counting nonunits modulo 70 requires three prime-divisor sets and includes zero in every intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P09-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=13]]

Source verification: The printed union size 36 is an arithmetic error: 35+14+10-7-5-2+1=46. Its final answer 24 is correct and preserved.

Source correction: PDF page13 prints 10+14+35−2−5−7+1=36 and then70−36=24. The inclusion-exclusion sum is46, and70−46=24. The official final count24 and the displayed set counts/method are correct; the intermediate36 is an arithmetic typo.

## Question

(a) How many elements in $\mathbb Z_{70}$ have multiplicative inverses? Explain your answer.

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=13|physical PDF page 13]].

We can write $70=2\cdot5\cdot7$.
$$M_7=\{0,7,14,21,28,35,42,49,56,63\}$$
$$M_5=\{0,5,10,15,20,\ldots,65\}$$
$$M_2=\{0,2,4,6,\ldots,68\}.$$
The integers that do not have an inverse are those that are not relatively prime with $70$, i.e., all the multiples of $7,5,2$, i.e., $M_7\cup M_5\cup M_2$. Note that $\lvert M_7\rvert=10,\lvert M_5\rvert=14,\lvert M_2\rvert=35$. Moreover, $\lvert M_7\cap M_5\rvert=2,\lvert M_7\cap M_2\rvert=5$, and $\lvert M_5\cap M_2\rvert=7$. Finally, $\lvert M_7\cap M_5\cap M_2\rvert=1$.
By the inclusion exclusion principle, $\lvert M_7\cup M_5\cup M_2\rvert=10+14+35-2-5-7+1=36$. Therefore, the number of elements that have an inverse is $70-36=24$.

## Supplementary Explanation

**Answer.** $24$.

**Derivation/proof.** An element is invertible exactly when coprime to $70=2\cdot5\cdot7$. Among residues 0 through 69, counts of multiples of 2,5,7 are 35,14,10; pairwise intersections have sizes 7,5,2 and the triple intersection has size 1. Thus nonunits number $35+14+10-7-5-2+1=46$, and units number $70-46=24$. The independent totient product $70(1-1/2)(1-1/5)(1-1/7)=24$ agrees.

As an independent arithmetic check, $70(1-1/2)(1-1/5)(1-1/7)=24$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Modular Congruence - 同余]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Inclusion-Exclusion Method - 容斥方法]]
