---
id: "Q-2019-FINAL-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 11
solution_page: [11]
question_number: "9(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Every unlabeled partition into four nonempty disjoint ten-issue groups has exactly 4! labelings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P09-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=11]]

## Question

(b) the boxes are identical, so that they cannot be distinguished?

Shared context: [[STEM-2019-FINAL-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=11|physical PDF page 11]].

Each distribution into identical boxes gives rise to $4!=24$ distributions into labeled boxes, since once we have made the distribution into unlabeled boxes we can arbitrarily label the boxes. Therefore the answer is the same as the answer in part (a) divided by $24$, namely $(40!/10!^4)/4!$.

## Supplementary Explanation

**Answer.** $\frac{40!}{(10!)^4\cdot4!}$.

**Derivation/proof.** For labeled boxes, the count is $40!/(10!)^4$. Each unlabeled distribution consists of four distinct, nonempty sets of ten distinguishable issues. Assigning box labels to those sets can be done in exactly $4!$ ways, and no nontrivial label permutation fixes the distribution because the disjoint nonempty sets differ. Divide by $4!$ to count each unlabeled partition once.

Every box has ten issues and is nonempty; allowing empty boxes would require rechecking this uniform-labeling argument.

The forty people are pairwise distinct. Assigning them to four equal groups gives $\frac{40!}{(10!)^4\,4!}$ after division by the internal orders and then by the permutation of the four unlabeled groups.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
