---
id: "Q-2018-FINAL-P10-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 14
solution_page: [15]
question_number: "10(d)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Counting Method - 计数方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Two legal parenthesizations create different intermediate dimensions and costs of 85000 versus 36000."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P10-d

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=15]]

## Question

d) Assume you are given three matrices $M_1,M_2,M_3$ where $M_1$ is $50\times60$, $M_2$ is $60\times25$, and $M_3$ is $25\times8$. You want to compute the product $M_1\cdot M_2\cdot M_3$. In which order will you do the pairwise matrix multiplications, if you want to minimize the total number of multiplications?

Shared context: [[STEM-2018-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=15|physical PDF page 15]].

There are two ways to do the multiplication. Either $M_1\cdot M_2$ and then multiply the result with $M_3$ from the right, or $M_2\cdot M_3$ and then multiply the result with $M_1$ from the left.
For the first case, to multiply $M_1\cdot M_2$ we need $50\cdot60\cdot25$ multiplications and the result is of size $50\times25$. Multiplying this with $M_3$ takes $50\cdot25\cdot8$ multiplications. Total multiplications is $85000$.
For the second case, to multiply $M_2\cdot M_3$ we need $60\cdot25\cdot8$ multiplications and the result is of size $60\times8$. Multiplying this with $M_1$ takes $50\cdot60\cdot8$ multiplications. Total multiplications is $36000$.
Clearly, the second approach is much faster.

## Supplementary Explanation

**Answer.** Compute $M_2M_3$ first, then $M_1(M_2M_3)$; cost $36000$.

**Derivation/proof.** For $(M_1M_2)M_3$, the first product costs $50\cdot60\cdot25=75000$ and is $50\times25$; the second costs $50\cdot25\cdot8=10000$, totaling 85000. For $M_1(M_2M_3)$, the first costs $60\cdot25\cdot8=12000$ and is $60\times8$; the second costs $50\cdot60\cdot8=24000$, totaling 36000. These are the two parenthesizations preserving matrix order, so the second is minimal.

For three matrices in fixed order these are the only two binary parenthesizations.

Comparing the two legal parenthesizations gives $36000<85000$. Thus the product order with thirty-six thousand scalar multiplications is cheaper, even though both yield the same matrix.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Counting Principles - 计数原理]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Counting Method - 计数方法]]
