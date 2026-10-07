---
id: "Q-2025F-FINAL-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 7
question_number: "3(a)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count rankings conditional on one specified player being taller than another."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 3
---
# Q-2025F-FINAL-P03-a

## Source

[[2025 Fall Final]]; printed item 3(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

## Question

![[STEM-2025F-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(a) [3 points] Given A is taller than B, what is the probability that A is tallest?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7|physical PDF page 7]].

(a) Given $A>B$, permutations satisfying this: $14!/2$. If $A$ is tallest, arrange others: $13!$ permutations.
$$\Pr(A\text{ tallest}\mid A>B)=\frac{13!}{14!/2}=\frac2{14}=\frac17.$$

## Supplementary Explanation

**Answer.** $1/7$.

**Derivation/proof.** All $14!$ rankings are equally likely. Swapping $A$ and $B$ gives a bijection between rankings with $A>B$ and those with $B>A$, so the conditional sample space contains $14!/2$ rankings. If $A$ is first, $A>B$ holds automatically and the other 13 players have $13!$ arrangements. Thus the conditional probability is $13!/(14!/2)=2/14=1/7$. The denominator counts rankings satisfying the condition, not all rankings.

## Connections

- [[Topic - Probability - 概率]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count rankings conditional on one specified player being taller than another.
