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

## 中文解析

必经点把每条路径唯一分为两段。禁行点位于后半段，先计算经过必经点的所有路径，再减去同时经过禁行点的路径。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below; the secondary source label correction is documented in Source.

### 中文解答

**答案。** $\binom52[\binom{11}6-\binom64\binom52]=3120$。

**推导。** 从 $(0,0)$ 到 $(2,3)$ 要二次右移、三次上移，有 $\binom52=10$ 条。之后到 $(8,8)$ 要六次右移、五次上移，共 $\binom{11}6=462$ 条。其中经过 $(6,5)$ 的坏路径分成两段：先四右二上，有 $\binom64=15$ 条；再二右三上，有 $\binom52=10$ 条，故坏路径数是 $150$。后半段可用路径数为 $462-150=312$，与第一段相乘为 $10\cdot312=3120$。每条路径在指定点有唯一分解，所以不重复也不遗漏。

## Common Mistakes

- 页五把 $\#P_{2,\mathrm{bad}}$ 误标在 $462-150$ 上；坏路径其实是 $150$。
- 禁行点只影响经过 $(2,3)$ 后的路径，不能从第一段再减一遍。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Factor paths at (2,3), subtract those continuing through (6,5), and multiply independent path segment counts.
