---
id: "Q-2024S-MID-P12-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 18
question_number: "12(b)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Turn an assumed modular inverse into a representation of 1 contradicting the gcd lower bound from 12(a)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [18]
marks: 5
related_questions: ["[[Q-2024S-MID-P12-a - Modular Congruence]]"]
---
# Q-2024S-MID-P12-b

## Source

[[2024 Spring Midterm]]; printed item 12(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18]]

Prerequisite context (editorial): [[Q-2024S-MID-P12-a - Modular Congruence]]. Part (a) states that no positive integer smaller than $\gcd(a,m)$ is an integer linear combination of $a$ and $m$.

## Question

(b) Let $a$ and $m$ be positive integers. Use the fact given in part (a) to prove that if $\gcd(a,m)>1$, then $a$ does not have a multiplicative inverse modulo $m$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18|physical PDF page 18]].

> (b) Assume that $a$ has a multiplicative inverse modulo $m$. Let us denote it $a^{-1}$. By definition, $aa^{-1}\equiv1\pmod m$. It follows that $aa^{-1}-mk=1$ for some integer $k$. In other words, 1 can be obtained as an integer linear combination of $a$ and $m$. But 1 is smaller than $\gcd(a,m)$, which contradicts part (a). This completes the proof.

## Supplementary Explanation

**Answer.** If $\gcd(a,m)>1$, then $a$ has no multiplicative inverse modulo $m$.

**Derivation/proof.** Let $d=\gcd(a,m)>1$ and suppose an inverse $b$ exists, so $ab\equiv1\pmod m$. The congruence means $ab-1=tm$ for some integer $t$, hence $1=ba-tm$. This is a linear combination of $a,m$ with integer coefficients $b,-t$. By part (a), any positive such combination is at least $d$, whereas $0<1<d$. This contradiction shows no such $b$ exists.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

Turn an assumed modular inverse into a representation of 1 contradicting the gcd lower bound from 12(a).

- Prerequisite: [[Q-2024S-MID-P12-a - Modular Congruence]]: 本题导入此前提/结果以完成当前计算或证明：Part (a) states that no positive integer smaller than $\gcd(a,m)$ is an integer linear combination of $a$ and $m$.
