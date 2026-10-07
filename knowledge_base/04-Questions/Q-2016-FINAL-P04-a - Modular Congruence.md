---
id: "Q-2016-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 8
solution_page: [8]
question_number: "4(a)"
year: 2016
term: "fall"
exam_type: "final"
marks: 5
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Repeated squaring cycles between residues thirty-six and ninety-two before the binary exponent factors are multiplied."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=8]]

## Question

(a) Evaluate $6^{1161}\bmod602$.

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=8|PDF physical page 8]].

(a)
$$\lfloor\log_2 1161\rfloor=10$$
$$\begin{aligned}
R_1&=6^2\bmod602=6\times6\bmod602=36\\
R_2&=6^4\bmod602=R_1\times R_1\bmod602=92\\
R_3&=6^8\bmod602=R_2\times R_2\bmod602=36\\
R_4&=6^{16}\bmod602=R_3\times R_3\bmod602=92\\
R_5&=6^{32}\bmod602=R_4\times R_4\bmod602=36\\
R_6&=6^{64}\bmod602=R_5\times R_5\bmod602=92\\
R_7&=6^{128}\bmod602=R_6\times R_6\bmod602=36\\
R_8&=6^{256}\bmod602=R_7\times R_7\bmod602=92\\
R_9&=6^{512}\bmod602=R_8\times R_8\bmod602=36\\
R_{10}&=6^{1024}\bmod602=R_9\times R_9\bmod602=92
\end{aligned}$$
$$\begin{aligned}
6^{1161}\bmod602&=6^{1024+128+8+1}\bmod602\\&=6^{1024}\cdot6^{128}\cdot6^8\cdot6^1\bmod602\\&=92\cdot36\cdot36\cdot6\bmod602\\&=216
\end{aligned}$$

## Supplementary Explanation

**Answer.** $216$.

**Derivation/proof.** Since $6^2\equiv36$, $6^4\equiv36^2\equiv92$, and $6^8\equiv92^2\equiv36\pmod{602}$, successive squarings alternate 36 and 92. As $1161=1024+128+8+1$, $6^{1161}\equiv92\cdot36\cdot36\cdot6\pmod{602}$. Reducing the products gives $92\cdot36\equiv302$, $302\cdot36\equiv36$, then $36\cdot6=216$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
