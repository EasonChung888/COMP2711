---
id: "Q-2025F-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(c)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Double-count a committee with an ordered distinguished subcommittee."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5,6]
marks: 4
---
# Q-2025F-FINAL-P02-c

## Source

[[2025 Fall Final]]; printed item 2(c); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=6]]

## Question

(c) [4 points] Use combinatorial argument to prove:
$$\binom nk P(k,r)=\binom{n-r}{k-r}P(n,r)$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5|physical PDF page 5]], [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=6|physical PDF page 6]].

(c) From a group of $n$ distinct people, choose an ordered committee of $r$ people (positions matter) and also choose an unordered group of $k$ people who will be the full selection committee (ther ordered members are part of these $k$).

Left-hand side:
- First choose the $k$ members of the full selection committee: $\binom nk$ ways.
- Then choose $r$ ordered positions (e.g., chairperson, vice-chair, etc.) from these $k$ people: $P(k,r)$ ways.
Total: $\binom nk\cdot P(k,r)$.

Right-hand side:
- First choose the $r$ people who will hold the $r$ ordered positions, in order: $P(n,r)$ ways.
- Now we still need to choose the remaining $k-r$ members of the full (unordered) committee. These must come from the remaining $n-r$ people (excluding the $r$ already chosen for the ordered roles): $\binom{n-r}{k-r}$ ways.
Total: $\binom{n-r}{k-r}\cdot P(n,r)$.

Both sides count the same thing, so
$$\binom nk\cdot P(k,r)=\binom{n-r}{k-r}\cdot P(n,r).$$

## Supplementary Explanation

**Answer.** Both sides count a $k$-person committee with $r$ ordered offices assigned to distinct committee members.

**Derivation/proof.** In the usual defined range $0\le r\le k\le n$, first choose the full committee from $n$ people in $\binom nk$ ways, and then assign the offices in $P(k,r)$ ways. This gives the left side. Alternatively, assign the $r$ offices from all $n$ people in $P(n,r)$ ways, then choose $k-r$ additional members from the remaining $n-r$ people in $\binom{n-r}{k-r}$ ways. Both constructions are in one-to-one correspondence with the same objects, so their counts agree.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]

Double-count a committee with an ordered distinguished subcommittee.
