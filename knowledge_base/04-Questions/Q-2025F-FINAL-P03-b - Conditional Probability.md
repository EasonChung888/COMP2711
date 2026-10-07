---
id: "Q-2025F-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 7
question_number: "3(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Fix A at third rank and count the eleven allowed lower ranks for B."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 3
---
# Q-2025F-FINAL-P03-b

## Source

[[2025 Fall Final]]; printed item 3(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7]]

## Question

![[STEM-2025F-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(b) [3 points] Given A is taller than B, what is the probability that A is the third tallest?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=7|physical PDF page 7]].

(b) Given $A>B$. If $A$ is rank 3, $B$ must be in ranks $4,\ldots,14$: 11 choices. Then arrange remaining 12 players: $12!$.
$$\Pr(A\text{ rank }3\mid A>B)=\frac{11\cdot12!}{14!/2}=\frac{11\cdot2}{14\cdot13}=\frac{11}{91}.$$

## Supplementary Explanation

**Answer.** $11/91$.

**Derivation/proof.** The condition $A>B$ leaves $14!/2$ equally likely rankings. Fix $A$ in third place. Then $B$ can occupy ranks 4 through 14, giving $14-3=11$ choices. After fixing both positions, the remaining 12 players have $12!$ arrangements, so there are $11\cdot12!$ favorable rankings. Division gives $11\cdot12!/(14!/2)=22/(14\cdot13)=11/91$. Neither position above $A$ may be given to $B$.

## Connections

- [[Topic - Probability - 概率]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Fix A at third rank and count the eleven allowed lower ranks for B.
