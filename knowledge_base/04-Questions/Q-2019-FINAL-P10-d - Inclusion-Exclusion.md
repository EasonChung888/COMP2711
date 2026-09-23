---
id: "Q-2019-FINAL-P10-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 12
solution_page: [12]
question_number: "10(d)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Three upper bounds use inclusion-exclusion with pair intersections six and an impossible triple intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-FINAL-P10-d

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=12]]

## Question

(d) How many solutions are there so that $x_1,x_2$ and $x_3$ are less than 9?

Shared context: [[STEM-2019-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

上界小于九等于最多八。用容斥扣掉至少一个变量达到九的解，并加回两个变量同时达到九的交集；三个都达到九不可能。再用八减各变量的变换得到总和四，能独立验证十五这一答案。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $15$.

**Derivation/proof.** Let $A_i$ be solutions with $x_i\ge9$. The unrestricted count is 231; each $A_i$ has 78 solutions and each pair intersection has 6. The triple intersection is empty because $27>20$. Thus the desired count is $231-3\cdot78+3\cdot6=15$. Independently set $y_i=8-x_i\ge0$: then $y_1+y_2+y_3=4$, whose $\binom62=15$ solutions automatically have $y_i\le4\le8$, giving a bijection back.

### 中文解答

**推导。** 设坏事件 $A_i$ 为 $x_i\ge9$。总数是 $231$，每个 $A_i$ 有 $78$ 解，每个两两交集有 $6$ 解，三个同时至少九则总和至少 $27>20$，故三重交集为空。容斥后合法数为 $231-3\cdot78+3\cdot6=15$。独立核对可令 $y_i=8-x_i$，得到 $y_1+y_2+y_3=4$，有 $\binom62=15$ 解；每个 $y_i\le4\le8$ 自动保证反向 $x_i\ge0$，所以这个补量代换确为双射。

## Common Mistakes

- 把坏事件写成变量大于九而漏掉九。
- 在三重交集已经为空时仍套有负数的组合数。

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
