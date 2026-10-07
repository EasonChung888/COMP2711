---
id: "Q-2020-FINAL1-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 3
question_number: "4(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Any two digits determine exactly one allowed third digit modulo nine."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 7
---
# Q-2020-FINAL1-P04-c

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Source correction: PDF page3 first solution writes n=100x_1+10x_2+x_3, but immediately indexes its digit restriction by i=0,1,2. The intended digit indices are i=1,2,3, as correctly printed in the alternative solution on the same page. Correct only this index list; both official counts1+52+28 and9×9 equal81.

## Question

$n$ is divisible by 9 but it has no digit 9?

Shared context: [[STEM-2020-FINAL1-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=3|physical PDF page 3]].

Let $n=100x_1+10x_2+x_3$, i.e. $n$ is represented by $3$ digits $\overline{x_1x_2x_3}$. Then $x_i\in\{0,1,\cdots,8\}$ for $i=0,1,2$, and $9\mid100x_1+10x_2+x_3$, or equivalently $9\mid x_1+x_2+x_3$. Since $0\le x_1+x_2+x_3\le24$, we have $x_1+x_2+x_3=0,9$ or $18$.
(1) $x_1+x_2+x_3=0$. There is only one solution: $x_1=x_2=x_3=0$.
(2) $x_1+x_2+x_3=9$. By the combinations with repetition theorem, there are $\binom{9+3-1}{3-1}=55$ non-negative solutions to this equation. However we need to exclude three solutions $(9,0,0),(0,9,0)$ and $(0,0,9)$. Therefore the number of solutions is $52$.
(3) $x_1+x_2+x_3=18$. First note that there is no solution when $x_3=0$ or $1$. Suppose $x_3=i$ where $i\in\{2,3,\cdots,8\}$, the solutions to the equation $x_1+x_2=18-i$ are $(j,18-i-j)$ where $j\in\{10-i,11-i,\cdots,8\}$, i.e. there are $i-1$ solutions to this equation. Therefore the number of solutions to $x_1+x_2+x_3=18$ is $\sum_{i=2}^8(i-1)=28$.
Therefore we conclude that the answer is $1+52+28=81$.
Alternative Solution: We also find the number of solutions to $9\mid x_1+x_2+x_3$ where $x_i\in\{0,1,\cdots,8\}$ for $i=1,2,3$. For any $x_1$ and $x_2$, $9\mid x_1+x_2+x_3$ is equivalent to $x_3\equiv9-x_1-x_2\pmod9$, which has exactly one solution in $\{0,1,\cdots,8\}$. Therefore the number of solutions is $9\times9=81$.

## Supplementary Explanation

**Answer.** $81$.

**Derivation/proof.** Represent each integer uniquely as a three-digit string $abc$ with leading zeros allowed. This does not introduce any digit 9. Each digit lies in {0,…,8}. Since $100\equiv10\equiv1\pmod9$, divisibility is $a+b+c\equiv0$. For each of the 9² choices of a,b there is exactly one c in {0,…,8} satisfying this congruence. Therefore 81 strings, including 000, qualify.

After choosing the first two residues, the third must satisfy $x_3\equiv-x_1-x_2\pmod9$. Each residue has one representative in the allowed range, so there are $9^2=81$ choices in total.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Modular Congruence - 同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Counting Method - 计数方法]]
