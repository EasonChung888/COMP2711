---
id: "Q-2014-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 7
solution_page: [7]
question_number: "4(a)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Solving the simultaneous congruences requires checking compatibility modulo the gcd before constructing a residue class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=7]].

## Question

(a) $m=15,n=16,a=5,b=2$.

Shared context: [[STEM-2014-FINAL-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=7|PDF physical page 7]].

(a) In this case, $m$ and $n$ are relatively prime. So,there is a solution. To find the solution, first compute multiplicative inverses:
$$\bar m\text{ s.t. }m\cdot\bar m=1\bmod n,$$
$$\bar n\text{ s.t. }n\cdot\bar n=1\bmod m.$$
It turns out that $\bar m=15$ and $\bar n=1$. Now we can find the solution:
$$\begin{aligned}x&=(an\bar n+bm\bar m)\bmod mn\\&=(5\cdot16\cdot1+2\cdot15\cdot15)\bmod15\cdot16\\&=50\end{aligned}$$

## Supplementary Explanation

**Answer.** Yes, $x=50$.

**Derivation/proof.** Since $15,16$ are coprime, CRT applies. Inverses are $15^{-1}\equiv15\pmod{16}$ and $16^{-1}\equiv1\pmod{15}$. Thus $x\equiv5\cdot16\cdot1+2\cdot15\cdot15=530\equiv50\pmod{240}$.

The representative $50$ lies in $0\le x<240$, with $50\bmod15=5$ and $50\bmod16=2$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
