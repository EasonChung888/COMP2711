---
id: "Q-2023F-FINAL-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 14
question_number: "9(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Noncrossing Pairings - 不相交配对]]"]
methods: ["[[Split-at-a-Partner Method - 固定伙伴分解法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "A feasible partner index must be even so both circular blocks have even cardinality, and adjacent pairing proves sufficiency."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14,15]
marks: 2
related_questions: ["[[Q-2023F-FINAL-P09-d - Noncrossing Pairings]]"]
---
# Q-2023F-FINAL-P09-b

## Source

[[2023 Fall Final]]; printed item 9(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=15]]

## Question

Assume that you want to first pair $p_1$ with someone. List all potential candidates who can be paired with $p_1$ initially?

Shared printed context: ![[STEM-2023F-FINAL-P09 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14|physical PDF page 14]].

> (b) It can only be paired with $p_j$ where $j$ is even. Otherwise the number of people in one side is odd and will guarantee an arm cross.

## Supplementary Explanation

**Answer.** $p_2,p_4,p_6,\ldots,p_{2n}$.

**Derivation/proof.** If $p_1$ pairs with $p_j$, the intervening people $p_2,\ldots,p_{j-1}$ number $j-2$, and the other side has $2n-j$ people. A legal complete pairing cannot connect the two sides across the fixed chord, so both counts must be even; this is equivalent to j being even. Conversely, for each even j, pair consecutive people on each side. Those adjacent chords stay in their own sides and do not cross, so every listed candidate is feasible.

The two side sizes are $j-2$ and $2n-j$. If $j$ is even, pair adjacent people on each side to construct a valid completion. This includes an empty side for $j=2$ or $j=2n$.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Noncrossing Pairings - 不相交配对]]
- [[Split-at-a-Partner Method - 固定伙伴分解法]]

A feasible partner index must be even so both circular blocks have even cardinality, and adjacent pairing proves sufficiency.

- Used by: [[Q-2023F-FINAL-P09-d - Noncrossing Pairings]]: The even partner indices j = 2, 4, …, 2n from (b) are the disjoint cases summed in (d). 固定第一人的偶数编号伙伴决定递推求和范围。
