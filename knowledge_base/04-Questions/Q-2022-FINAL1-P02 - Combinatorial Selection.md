---
id: "Q-2022-FINAL1-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 2
question_number: "2"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Handshakes comprise all cross-group pairs plus pairs within the ten strangers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 8
---
# Q-2022-FINAL1-P02

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

## Question

At a gathering of 30 people, there are 20 people who all know each other, while the other 10 people don’t know anyone. People who know each other hug, and people who do not know each other shake hands. How many handshakes occur within the group?

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-1.pdf#page=2|physical PDF page 2]].

> One way to solve this problem is as follows. Each one of the ten people has to shake hands with all the 20 other people they don't know. So $10\cdot20=200$. From there, we calculate how many handshakes occurred between the people who don't know each other. This is simply counting how many ways to choose two people to shake hands, or $\binom{10}{2}=45$. Thus the answer is $200+45=245$.
>
> Another way to consider this problem is as follows. We can focus on how many handshakes the 10 people get.
> The 1st person gets 29 handshakes.
> 2nd get 28
> ...
> And the 10th receives 20 handshakes. We can write this as the sum of an arithmetic sequence.
>
> $$\frac{10(20+29)}2=5\cdot49=245.$$
>
> Therefore the answer is 245.

## Supplementary Explanation

**Answer.** $245$.

**Derivation/proof.** Each of the ten strangers shakes hands with each of the twenty mutually acquainted people, giving 10·20=200 cross-group handshakes. Within the ten strangers every unordered pair also shakes, contributing C(10,2)=45. The twenty-person group contributes none because they hug. These cases are disjoint and exhaustive, so total 245. Check by complement: C(30,2)−C(20,2)=435−190=245.

The two disjoint classes give $10\cdot20=200$ and $\binom{10}{2}=45$. The independent check is $435-190=245$. Each unordered pair is counted once.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
