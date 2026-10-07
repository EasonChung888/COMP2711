---
id: "Q-2020-FINAL2-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Fixing nine digits forces the last unused digit into its own remaining position."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
related_questions: ["[[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]"]
---
# Q-2020-FINAL2-P06-b

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

## Question

There are exactly nine $i$’s such that $A[i]=i$.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=5|physical PDF page 5]].

If $9$ digits appear in their corresponding index positions, the remaining one digit must also appear in its index position, so the answer is $0$.

## Supplementary Explanation

**Answer.** $0$.

**Derivation/proof.** If nine positions contain their own digits, exactly one digit and one position remain unused. Because all other digits are already at their matching positions, the remaining digit is the label of that remaining position. It too must be fixed, producing ten fixed points rather than exactly nine. Hence no such permutation exists.

If $j$ is the sole unused position, all other digits already match their positions. At the empty position $j$ the remaining digit must be $j$, producing ten rather than nine fixed points. Hence the answer is $0$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]
