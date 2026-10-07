---
id: "Q-2020-FINAL2-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The forced swap removes two digits and positions while leaving eight unrestricted."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
related_questions: ["[[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]"]
---
# Q-2020-FINAL2-P06-c

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

## Question

$A[0]=1,A[1]=0$.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=5|physical PDF page 5]].

Fix the first two digits, and the remaining $8$ digits are randomly permuted, so the answer is $8!$.

## Supplementary Explanation

**Answer.** $8!$.

**Derivation/proof.** The conditions place digit 1 at position 0 and digit 0 at position 1. The other eight positions receive digits 2 through 9 bijectively with no remaining restriction, giving 8! assignments. They are allowed to be fixed or not; a derangement restriction is not present in this part.

After fixing the swap of zero and one, the remaining digits are $2,3,\ldots,9$. These may occupy their original positions, so do not use $D_8$; all $8!$ permutations are allowed.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]
