---
id: "Q-2025S-FINAL-P10"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 13
question_number: "10"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Probability Events - 概率事件]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Classify neighboring and diagonal overlaps among four red-square events and apply full inclusion-exclusion."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 7
---
# Q-2025S-FINAL-P10

## Source

[[2025 Spring Final]]; printed item 10; 7 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=13]]

## Question

A 3-by-3 unit-square grid is to be colored such that each unit square is independently colored red or blue with equal probability. What is the probability that the grid does not contain any 2-by-2 red square? Justify your answer.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=13|physical PDF page 13]].

Since each of the 9 unit squares of the 3-by-3 square can take one of two colors, in total there are $2^9$ different ways of coloring the 3-by-3 square.

Let us count now the colorings that form a 2-by-2 red square. This red square can be formed in the upper left, upper right, bottom left or bottom right corner of the 3-by-3 square. Let $A,B,C,D$ be, respectively, the sets of the four types of colorings listed above that produce a 2-by-2 red square. Since the other 5 squares of the 3-by-3 square can have any color, we have $|A|=|B|=|C|=|D|=2^5$. These sets are however not disjoint, so we must apply inclusion-exclusion:
$$\begin{aligned}
|A\cup B\cup C\cup D|&=|A|+|B|+|C|+|D|\\
&\quad-|A\cap B|-|A\cap C|-|A\cap D|-|B\cap C|-|B\cap D|-|C\cap D|\\
&\quad+|A\cap B\cap C|+|A\cap B\cap D|+|A\cap C\cap D|+|B\cap C\cap D|\\
&\quad-|A\cap B\cap C\cap D|.
\end{aligned}$$
As $A\cap B$ represents the set of the colorings having the first two rows red (and the 3 squares of the lowest row free to take any of the two colors), we have $|A\cap B|=2^3$. Similarly, $|A\cap C|=2^3$, $|B\cap D|=2^3$ and $|C\cap D|=2^3$. We have a different situation for $A\cap D$ and $B\cap C$: if two opposing 2-by-2 squares are red, this leaves uncertain only the colors of the two remaining 1-by-1 corners, therefore $|A\cap D|=|B\cap C|=2^2$. The intersections of 3 of the sets leaves undecided only the color of one square, therefore each of these intersections has 2 elements. Finally, the intersection of all the four sets contains only the square completely colored in red, that is, one element. We obtain:
$$|A\cup B\cup C\cup D|=4\cdot2^5-(4\cdot2^3+2\cdot2^2)+4\cdot2-1=95.$$
So from the 512 possible colorings, $512-95=417$ do not contain any 2-by-2 red square, so the probability of not having a 2-by-2 red square is $\frac{417}{512}$.

## Supplementary Explanation

**Answer.** $417/512$.

**Derivation/proof.** The nine independent fair colors give $2^9=512$ equally likely outcomes. Events A,B,C,D require the top-left, top-right, bottom-left and bottom-right $2\times2$ squares to be all red. Each fixes four cells and permits $2^5=32$ colorings. Of the six pair intersections, four adjacent pairs fix six cells and permit eight colorings each; two diagonal pairs fix seven and permit four each. Any three events fix eight cells, yielding two colorings for each of four triple intersections. All four events require the unique all-red grid. Inclusion-exclusion gives $4\cdot32-(4\cdot8+2\cdot4)+4\cdot2-1=95$ colorings with a red square. The complement has $512-95=417$, giving probability $417/512$.

## Connections

- [[Topic - Counting - 计数]]
- [[Topic - Probability - 概率]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Probability Events - 概率事件]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Probability Calculation Method - 概率计算方法]]

Classify neighboring and diagonal overlaps among four red-square events and apply full inclusion-exclusion.
