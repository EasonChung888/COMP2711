---
id: "Q-2024S-FINAL-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 4
question_number: "4"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Factor paths at (2,3), subtract those continuing through (6,5), and multiply independent path segment counts."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [4,5]
verification_status: "verified"
marks: 10
---
# Q-2024S-FINAL-P04

## Source

[[2024 Spring Final]]; printed item 4; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=4]]

Published solution pages 4–5. Page 5 prints $\#P_{2,\mathrm{bad}}=\binom{11}6-\binom64\binom52$, which equals the good-path count, not the bad-path count. The label should be $\#P_2$; the final expression $\binom52[\binom{11}6-\binom64\binom52]=3120$ is correct. This secondary label correction preserves the official conclusion and the valid good-equals-all-minus-bad relation already printed on page 4.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=4]]; [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=5]].

## Question

You want to walk from the point $(0,0)$ to the point $(8,8)$ on a square grid, where each point on the grid has integer coordinates. In each step, you can move from a point $(i,j)$ to either $(i+1,j)$ or $(i,j+1)$, which means you can move one unit in the positive x-direction or one unit in the positive y-direction, respectively. The walk will take exactly 16 unit steps in total. Additionally, your path must include the grid position $(2,3)$ and you must avoid the grid position $(6,5)$. How many different paths can you take from $(0,0)$ to $(8,8)$ while satisfying these conditions?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=4|physical PDF page 4]], [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=5|physical PDF page 5]].

> Answer: We say that a path is monotonic if at each step it either moves one unit in the positive x-direction or one unit in the positive y-direction. Let $P$ be a path satisfying the requirements of the problem. Since it must include the point $(2,3)$, we can decompose $P$ into two monotonic paths $P_1$ and $P_2$ as follows:
> $$\underbrace{(0,0)\to\cdots\to(2,3)}_{P_1}\underbrace{\to\cdots\to(8,8)}_{P_2}.$$
> Our answer will be $\#P_1\cdot\#P_2$, where $\#P_1$ ($\#P_2$) is the number of possibilities for $P_1$ ($P_2$). It is clear that the requirement of $P$ avoiding $(6,5)$ only restricts the possibilities for $P_2$ but not $P_1$. Thus, $\#P_1$ is simply the number of all monotonic paths from $(0,0)$ to $(2,3)$, which is given by $\binom{2+3}{2}=\binom52$.
> We can count $\#P_2$ as $\#P_2=\#P_{2,\mathrm{all}}-\#P_{2,\mathrm{bad}}$ where $\#P_{2,\mathrm{all}}$ is the number of all monotonic paths from $(2,3)$ to $(8,8)$ and $\#P_{2,\mathrm{bad}}$ is the number of ‘bad’ monotonic paths from $(2,3)$ to $(8,8)$ that go through $(6,5)$. Using the same reasoning for counting $\#P_1$, we get that:
> $$\#P_{2,\mathrm{all}}=\binom{(8-2)+(8-3)}{8-2}=\binom{11}6.$$
> Similar to $P$, the paths counted by $\#P_{2,\mathrm{bad}}$ have the form:
> $$\underbrace{(2,3)\to\cdots\to(6,5)}_{P_3}\underbrace{\to\cdots\to(8,8)}_{P_4},$$
> where $P_3$ and $P_4$ are monotonic paths. The number of possibilities for $P_3$ is $\binom{(6-2)+(5-3)}{6-2}=\binom64$, and the number of possibilities for $P_4$ is $\binom{(8-6)+(8-5)}{8-6}=\binom52$.
> Overall, we get that $\#P_{2,\mathrm{bad}}=\binom{11}6-\binom64\cdot\binom52$, which implies that our final answer is: $\binom52\cdot\left[\binom{11}6-\binom64\cdot\binom52\right]$.

## Supplementary Explanation

**Answer.** $\binom52[\binom{11}6-\binom64\binom52]=3120$.

**Derivation/proof.** From $(0,0)$ to $(2,3)$ there are two right steps and three up steps, giving $\binom52=10$ paths. From there to $(8,8)$ there are six right steps and five up steps, giving $\binom{11}6=462$ paths. A bad continuation through $(6,5)$ consists of four right and two up steps, then two right and three up steps. Their counts are $\binom64=15$ and $\binom52=10$, so there are $150$ bad continuations. There are $462-150=312$ permissible continuations and $10\cdot312=3120$ complete paths. The unique decomposition at each specified point prevents duplication or omission.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Factor paths at (2,3), subtract those continuing through (6,5), and multiply independent path segment counts.
