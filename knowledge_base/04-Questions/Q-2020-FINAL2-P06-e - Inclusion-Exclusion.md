---
id: "Q-2020-FINAL2-P06-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(e)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Derangements - 错排]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "The union has two nonempty pairwise intersections and the nine-fixed-point event is empty."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 5
related_questions: ["[[Q-2020-FINAL2-P06-a - Derangements]]","[[Q-2020-FINAL2-P06-b - Combinatorial Selection]]","[[Q-2020-FINAL2-P06-c - Combinatorial Selection]]","[[Q-2020-FINAL2-P06-d - Combinatorial Selection]]"]
---
# Q-2020-FINAL2-P06-e

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

Prerequisite context (editorial): [[Q-2020-FINAL2-P06-a - Derangements]]; [[Q-2020-FINAL2-P06-b - Combinatorial Selection]]; [[Q-2020-FINAL2-P06-c - Combinatorial Selection]]; [[Q-2020-FINAL2-P06-d - Combinatorial Selection]]. The four referenced events are: (a) exactly one fixed point, count $10D_9$; (b) exactly nine fixed points, impossible; (c) $A[0]=1,A[1]=0$, count $8!$; (d) $A[4]=4,A[5]=5$, count $8!$. This item asks for their union, not their intersection. “以上任意条件”要求四个事件的并集，需承接各自计数并进一步处理交集。

## Question

Satisfying any of the above conditions.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=5|physical PDF page 5]].

We let $A,B,C,D$ denote the sets of permutations that satisfy the above conditions (a), (b), (c), (d), respectively. Obviously, $B=\varnothing$, and we want to calculate $\lvert A\cup B\cup C\cup D\rvert=\lvert A\cup C\cup D\rvert$.
Considering set $A\cap C$, fixed the first two digits, and pick $1$ digit from $\{2,3,\ldots,9\}$ to put in the corresponding index position and then dearrange the remaining $7$ digits. Thus,
$$\lvert A\cap C\rvert=8\cdot D_7.$$
Considering set $C\cap D$, fix $4$ digits and randomly permute the remaining, thus,
$$\lvert C\cap D\rvert=6!.$$
Considering set $A\cap D$, middle two index is $4$ and $5$, so $A\cap D=\varnothing$. And $A\cap C\cap D=C\cap\varnothing=\varnothing$. So,
$$\lvert A\cap D\rvert=\lvert A\cap C\cap D\rvert=0.$$
By using inclusion-exclusion theorem,
$$\begin{aligned}\lvert A\cup C\cup D\rvert&=\lvert A\rvert+\lvert C\rvert+\lvert D\rvert-\lvert A\cap C\rvert-\lvert A\cap D\rvert-\lvert C\cap D\rvert+\lvert A\cap C\cap D\rvert\\&=10\cdot D_9+2\cdot8!-8\cdot D_7-6!.\end{aligned}$$

## Supplementary Explanation

**Answer.** $10D_9+2\cdot8!-8D_7-6!$.

**Derivation/proof.** Call the four condition sets A,B,C,D. B is empty because nine fixed points force ten. The single counts are |A|=10D9, |C|=|D|=8!. In A∩C, the first two digits are swapped; choose one fixed point among the other eight and derange the remaining seven, giving 8D7. C∩D fixes four named positions, giving 6!. A∩D and the triple intersection are empty because D forces at least two fixed points. Inclusion-exclusion now gives the displayed expression.

Equivalently name the four condition sets $S_1,S_2,S_3,S_4$. In $S_1\cap S_3$, choose the unique fixed point from the eight positions outside the prescribed swap and derange the remaining seven, giving $8D_7$. In $S_3\cap S_4$, four positions are prescribed, leaving $6!$ possibilities. The other intersections involving $S_2$ are empty, and $S_1\cap S_4$ is empty because it forces two fixed points. Inclusion-exclusion therefore subtracts exactly these two nonzero intersections.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Derangements - 错排]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Prerequisite: [[Q-2020-FINAL2-P06-a - Derangements]]
- Prerequisite: [[Q-2020-FINAL2-P06-b - Combinatorial Selection]]
- Prerequisite: [[Q-2020-FINAL2-P06-c - Combinatorial Selection]]
- Prerequisite: [[Q-2020-FINAL2-P06-d - Combinatorial Selection]]
