---
id: "Q-2024S-MID-P12-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 18
question_number: "12(a)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Use gcd divisibility of every integer linear combination and positivity to establish its minimum possible positive size."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [18]
marks: 5
related_questions: ["[[Q-2024S-MID-P12-b - Modular Congruence]]"]
---
# Q-2024S-MID-P12-a

## Source

[[2024 Spring Midterm]]; printed item 12(a); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18]]

## Question

(a) Let $a$ and $m$ be positive integers. Prove that no positive integer smaller than $\gcd(a,m)$ can be expressed as an integer linear combination of $a$ and $m$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18|physical PDF page 18]].

> Answer.
> (a) Let $d=\gcd(a,m)$. Let $y$ be a positive integer that is an integer linear combination of $a$ and $m$, that is, $y=ak+mk'$, for some integers $k$ and $k'$. By definition of gcd, we have $d\mid a$ and $d\mid m$. It follows that $d\mid ak+mk'$. Since $y=ak+mk'$ is a positive integer, it cannot be smaller than $d$.

## Supplementary Explanation

**Answer.** Every positive integer linear combination is at least $\gcd(a,m)$.

**Derivation/proof.** Let $d=\gcd(a,m)>0$. There are integers $u,v$ with $a=du,m=dv$. For any integer linear combination $y=ra+sm$, with $r,s\in\mathbb Z$, we have $y=d(ru+sv)$, hence $d\mid y$. If $y>0$, the integer $ru+sv$ is at least one, giving $y\ge d$. Thus no integer with $0<y<d$ can be represented, as claimed.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

Use gcd divisibility of every integer linear combination and positivity to establish its minimum possible positive size.

- Used by: [[Q-2024S-MID-P12-b - Modular Congruence]]: 此结果在后续小题中的具体用途：Part (a) states that no positive integer smaller than $\gcd(a,m)$ is an integer linear combination of $a$ and $m$.
