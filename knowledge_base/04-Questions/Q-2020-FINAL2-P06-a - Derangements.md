---
id: "Q-2020-FINAL2-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Derangements - 错排]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Choose the sole fixed point then derange all nine remaining positions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4,5]
marks: 2
related_questions: ["[[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]"]
---
# Q-2020-FINAL2-P06-a

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]] ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

## Question

There is exactly one $i$ such that $A[i]=i$.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=4|physical PDF page 4]]; [[knowledge_base/past_paper/2020-final-part-2.pdf#page=5|physical PDF page 5]].

$D_n$ is the number of derangements of a set with $n$ elements,
$$D_n=n!\left[1-\frac1{1!}+\frac1{2!}-\cdots+(-1)^n\frac1{n!}\right].$$
Exactly $1$ digit appears in its index position means that, we randomly select $1$ digit and put it in its index position and dearrange the remaining $9$ digits. So the answer is,
$$\binom{10}1D_9=10\cdot D_9.$$

## Supplementary Explanation

**Answer.** $10D_9$.

**Derivation/proof.** Choose the unique fixed index in 10 ways and put that digit there. The remaining nine digits must avoid their own nine positions, otherwise there would be more than one fixed point. They form a derangement counted by D9. Each permutation has one unique chosen fixed point, so the product 10D9 has no duplication.

The final expression uses the explicitly allowed derangement number and contains no summation sign.

The condition $A[i]=i$ is a fixed point. After choosing its unique index, the remaining positions must be deranged to exclude a second fixed point, which explains the factor $D_9$.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Derangements - 错排]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]
