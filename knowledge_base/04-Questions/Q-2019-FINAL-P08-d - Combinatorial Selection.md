---
id: "Q-2019-FINAL-P08-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 10
solution_page: [10]
question_number: "8(d)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Choosing two unordered positions determines a on the left and b on the right, with no adjacency requirement."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-FINAL-P08-d

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=10]]

## Question

(d) the letters a and b, where a is somewhere to the left of b in the string, with all the letters distinct?

Shared context: [[STEM-2019-FINAL-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=10|physical PDF page 10]].

First choose the positions for the $a$ and $b$; this can be done in $C(6,2)$ ways, since once we pick two positions, we put the $a$ in the left-most and the $b$ in the other. There are four remaining positions, and these can be filled in $P(24,4)$ ways, since there are $24$ letters left (no repetitions being allowed this time). Therefore the answer is $C(6,2)P(24,4)=3825360$.

## Supplementary Explanation

**Answer.** $\binom62P(24,4)=3825360$.

**Derivation/proof.** Choose the two positions occupied by a and b in $\binom62=15$ ways. Their roles are determined: put a in the earlier position and b in the later. Fill the four remaining positions by an ordered selection of distinct letters from the other 24, giving $P(24,4)=255024$. The product is 3825360.

$\binom62=15$ and $P(24,4)=255024$, so $15\cdot255024=3825360$.

The required occurrences need not be adjacent. Choosing their positions handles separated occurrences as well as consecutive ones without imposing an extra block condition.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
