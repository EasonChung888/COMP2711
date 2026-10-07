---
id: "Q-2025F-FINAL-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 7
question_number: "3(c)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Condition on an ordered triple of players and independently place taller C and shorter B around A."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 3
---
# Q-2025F-FINAL-P03-c

## Source

[[2025 Fall Final]]; printed item 3(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

## Question

![[STEM-2025F-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(c) [3 points] Given A is taller than B and shorter than C, what is the probability that A is seventh tallest?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7|physical PDF page 7]].

(c) Given $C>A>B$. Permutations satisfying this: $14!/6$. If $A$ is rank 7, $C$ in ranks $1,\ldots,6$ (6 choices), $B$ in ranks $8,\ldots,14$ (7 choices), arrange remaining 11: $11!$.
$$\Pr(A\text{ rank }7\mid C>A>B)=\frac{6\cdot7\cdot11!}{14!/6}=\frac{252}{14\cdot13\cdot12}=\frac3{26}.$$

## Supplementary Explanation

**Answer.** $3/26$.

**Derivation/proof.** The three distinct-height players have $3!=6$ equally likely relative orders, so $C>A>B$ leaves $14!/6$ rankings. Fix $A$ seventh. Player $C$ has six choices among ranks 1–6; player $B$ has seven choices among ranks 8–14. The other 11 players can be arbitrarily arranged, giving $6\cdot7\cdot11!$ favorable rankings. Hence the conditional probability is $6\cdot7\cdot11!/(14!/6)=252/(14\cdot13\cdot12)=3/26$. The position sets for $C$ and $B$ are disjoint, so multiplication does not create collisions.

## Connections

- [[Topic - Probability - 概率]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Condition on an ordered triple of players and independently place taller C and shorter B around A.
