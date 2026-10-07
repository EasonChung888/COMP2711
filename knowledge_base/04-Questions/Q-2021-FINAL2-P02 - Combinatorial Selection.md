---
id: "Q-2021-FINAL2-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 1
question_number: "2"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Inclusion-Exclusion - 容斥原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Eight leading-zero-padded digits form a bounded stars-and-bars count with at most one upper-bound violation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1,2]
marks: 10
---
# Q-2021-FINAL2-P02

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=1]] ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=2]]

## Question

How many positive integers less than 100,000,000 have the sum of their digits equal to 19?

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-2.pdf#page=1|physical PDF page 1]], [[knowledge_base/past_paper/2021-final-part-2.pdf#page=2|physical PDF page 2]].

> Let $d_1,d_2,d_3,d_4,d_5,d_6,d_7,d_8$ be the eight digits of the positive integer less than 100,000,000. Assuming each $d_i$ can take any non-negative integers, there are $\binom{8+19-1}{19}$ ways to assign non-negative integers to $d_i$ for every $i$ so that their sum equals to 19. At most one $d_i$ can be greater than 9, because $10+10=20>19$. The integer exceeding 9 can be any of the eight $d_i$. After selecting one, say $d_1$, to be exceeding 9, there are $\binom{8+9-1}{9}$ positive integers that the digits sum to 19.
>
> So, the total number of positive integers less than 100,000,000 and have the sum of their digits equal to 19 is $\binom{8+19-1}{19}-8\cdot\binom{8+9-1}{9}=566280$.

## Supplementary Explanation

**Answer.** $\binom{26}{7}-8\binom{16}{7}=566280$.

**Derivation/proof.** Pad every allowed integer to eight digits; digit sum 19 excludes the all-zero integer automatically. Ignoring the digit upper bound, nonnegative solutions of d1+…+d8=19 number C(26,7). If a specified digit is at least10, subtract10 from it, leaving sum9 and C(16,7) solutions. Two digits cannot both be at least10 because their sum would exceed19. The eight bad sets are therefore disjoint, so subtract 8C(16,7) and obtain 566280.

Numerically, $\binom{26}{7}-8\binom{16}{7}=657800-8\cdot11440=566280$. Leading zeros create no duplication because each integer has a unique representation padded to exactly eight positions.

The eight bad sets are pairwise disjoint.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Inclusion-Exclusion Method - 容斥方法]]
