---
id: "Q-2023F-FINAL-P09-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 14
question_number: "9(c)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Noncrossing Pairings - 不相交配对]]","[[Recursive Structures - 递归结构]]"]
methods: ["[[Split-at-a-Partner Method - 固定伙伴分解法]]"]
question_types: ["modeling"]
difficulty: 3
difficulty_basis: "A fixed legal chord creates two determined even-sized blocks whose noncrossing pairing counts multiply without a subset-selection factor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14,15]
marks: 5
related_questions: ["[[Q-2023F-FINAL-P09-d - Noncrossing Pairings]]"]
---
# Q-2023F-FINAL-P09-c

## Source

[[2023 Fall Final]]; printed item 9(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=15]]

## Question

Assume $p_1$ is paired with $p_j$ initially. Derive the number of ways to pair up the remaining people in terms of $a_i$.

(Hint: Notice that this handshake will create two separate groups of people on the “left” side and the “right” side of it)

Shared printed context: ![[STEM-2023F-FINAL-P09 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14|physical PDF page 14]].

> (c) In this case we have one group of size $j-2$ on one side and a group of size $2n-j$ on the other side. So We have $a_{j-2}\cdot a_{2n-j}$ number of ways to pair the remaining people in a valid way.

## Supplementary Explanation

**Answer.** $a_{j-2}a_{2n-j}$ for even $j\in\{2,4,\ldots,2n\}$; zero for odd $j$.

**Derivation/proof.** A chord from $p_1$ to $p_j$ separates $p_2,\ldots,p_{j-1}$ from $p_{j+1},\ldots,p_{2n}$. The groups have sizes $j-2$ and $2n-j$. If j is odd, both are odd and no complete internal pairing exists. For even j, there are $a_{j-2}$ noncrossing pairings in the first group and $a_{2n-j}$ in the second. Any pair of such choices combines with the fixed chord uniquely and introduces no crossings between regions. Conversely, every legal pairing containing the fixed chord restricts to those two choices. This bijection proves the product.

The count is $a_{j-2}a_{2n-j}$ for even $j$, and is zero for odd $j$. There is a bijection between completions and ordered pairs of valid side matchings; an empty side contributes its unique empty matching, counted by $a_0=1$.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Noncrossing Pairings - 不相交配对]]
- [[Recursive Structures - 递归结构]]
- [[Split-at-a-Partner Method - 固定伙伴分解法]]

A fixed legal chord creates two determined even-sized blocks whose noncrossing pairing counts multiply without a subset-selection factor.

- Used by: [[Q-2023F-FINAL-P09-d - Noncrossing Pairings]]: For each even partner j, (c) supplies the product of the two independent side counts; (d) sums these products with empty-side count one. 两侧独立配对先相乘，再对互斥伙伴选择求和。
