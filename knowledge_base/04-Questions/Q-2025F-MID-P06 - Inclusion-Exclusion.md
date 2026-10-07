---
id: "Q-2025F-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 15
question_number: "6"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Apply inclusion-exclusion to three forbidden missing-digit events with a separate leading-digit count."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 9
---
# Q-2025F-MID-P06

## Source

[[2025 Fall Midterm]]; printed item 6; 9 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=15]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=15]]

## Question

Use inclusion-exclusion principle to solve the following problem. No other methods are allowed. You do not need to calculate the final value.
In how many 6-digit numbers do all three digits 1, 2, and 3 appear at least once? Note that the leftmost digit can not be equal to 0.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=15|physical PDF page 15]].

> Assume $S$ to be the set of all $6$-digit numbers.
> $$|S|=9\times10^5.$$
> Let $A_1$ be the set of $6$-digit numbers missing digit $1$, $A_2$ be the set of $6$-digit numbers missing digit $2$ and $A_3$ be the set of $6$-digit numbers missing digit $3$. We need the number of $6$-digit numbers where digits $1,2$ and $3$ appear, which is the total minus the numbers missing at least one of $1$ or $2$ or $3$:
> $$S-(A_1\cup A_2\cup A_3).$$
> By inclusion-exclusion:
> $$|A_1\cup A_2\cup A_3|=|A_1|+|A_2|+|A_3|-|A_1\cap A_2|-|A_1\cap A_3|-|A_2\cap A_3|+|A_1\cap A_2\cap A_3|.$$
> – $|A_1|$: Numbers with no $1$. First digit has $8$ choices ($2$ to $9$), other digits have $9$ choices ($0,2$ to $9$):
> $$|A_1|=8\times9^5.$$
> Similarly, $|A_1|=|A_2|=|A_3|=8\times9^5$.
> – $|A_1\cap A_2|$: Numbers with no $1$ and no $2$. First digit has $7$ choices ($3$ to $9$), other digits have $8$ choices ($0,3$ to $9$):
> $$|A_1\cap A_2|=7\times8^5.$$
> Similarly, $|A_2\cap A_3|=|A_1\cap A_3|=|A_1\cap A_2|=7\times8^5$.
> – $|A_1\cap A_2\cap A_3|$: Numbers with no $1$ and no $2$ and no $3$. First digit has $6$ choices ($4$ to $9$), other digits have $7$ choices ($0,4$ to $9$):
> $$|A_1\cap A_2\cap A_3|=6\times7^5.$$
> Now compute:
> $$|A_1\cup A_2\cup A_3|=3\times(8\times9^5)-3\times(7\times8^5)+6\times7^5.$$
> So the answer is $|S|-|A_1\cup A_2\cup A_3|=9\times10^5-3\times(8\times9^5)+3\times(7\times8^5)-6\times7^5$.

## Supplementary Explanation

**Answer.** $9\cdot10^5-3\cdot8\cdot9^5+3\cdot7\cdot8^5-6\cdot7^5$.

**Derivation/proof.** The universe of six-digit numbers has $|S|=9\cdot10^5$ elements. Let $A_i$ be the numbers missing digit i, for i=1,2,3. Missing one specified nonzero digit leaves eight leading choices and nine for each other position, so $|A_i|=8\cdot9^5$. Missing two leaves seven leading choices and eight later choices, giving $7\cdot8^5$ per pairwise intersection. Missing all three gives $6\cdot7^5$. Inclusion-exclusion subtracts the three single-event counts, adds the three pairwise intersections, and subtracts the one triple intersection from the universe. This gives the stated expression.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Apply inclusion-exclusion to three forbidden missing-digit events with a separate leading-digit count.
