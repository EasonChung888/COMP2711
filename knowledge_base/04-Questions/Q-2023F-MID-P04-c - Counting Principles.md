---
id: "Q-2023F-MID-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 8
question_number: "4(c)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Fix the first balanced row and classify the second by overlap; column constraints then force one, six, or two completions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9,10]
marks: 4
---
# Q-2023F-MID-P04-c

## Source

[[2023 Fall Midterm]]; printed item 4(c); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=9]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=10]]

The page-10 rubric assigns 1 mark for the three-case split plus 1 mark for each correct case, explicitly totaling 4.

## Question

Imagine having a $4\times4$ grid. We want to write either $+1$ or $-1$ in its cells such that the sum of every row is equal to 0. Similarly we want the sum of every column to be 0 also. How many distinct “valid” tables exist?

## 中文解析

每行和每列都要恰好两个正一。固定第一行后，第二行与它相同、相反、各有一半相同三类互斥且完备；第三四行的自由度取决于每列还缺多少个正一，不能把每一行当成独立选择。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $6(1+6+4\cdot2)=90$ 个有效表。

**推导。**

1. 每行四格和为零，必须有两个 $+1$ 和两个 $-1$。第一行正号位置有 $\binom42=6$ 种。固定第一行后，第二行分为与其相同、完全相反、正号位置恰重叠一个三类，数量分别为一、一、四。
2. 若前两行相同，已有两个正号的列下方必须全负、已有两个负号的列下方必须全正，故仅一补法。若前两行相反，每列还缺一个正号，第三行任选两个正号位置有六种，第四行被列和唯一决定。
3. 在四种混合情形中，一列已有两个正号、一列没有正号、另两列各有一个。第三行在前两类列中必须分别负、正，并从剩余两列选一列放另一个正号，所以有两补法；第四行随之确定。三类互斥且完备，总数为 $6(1\cdot1+1\cdot6+4\cdot2)=90$。

### English solution

**Answer.** $\binom42(1\cdot1+1\cdot6+4\cdot2)=90$.

**Derivation/proof.** Choose the two +1 positions in row 1 in six ways. For a fixed row 1, row 2 can match it (one choice), complement it (one choice), or overlap in exactly one +1 position (four choices). If rows 1–2 match, rows 3–4 must both complement them: one completion. If they complement, each column needs one further +1, so row 3 has six choices and row 4 is forced. In the mixed case, one column already has two +1s, one has none, and two have one; row 3 must put -1 in the first, +1 in the second, and select one of the two remaining columns for its other +1. This yields two completions, with row 4 forced. Thus the total is $6(1+6+8)=90$.

## Common Mistakes

- 对四行直接取 6⁴ 没有满足列限制。 / Row balance does not imply column balance.
- 混合类有四种第二行，每种有两种补全，不能把两者混为一项。 / Count the row choice and completion separately.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]

Fix the first balanced row and classify the second by overlap; column constraints then force one, six, or two completions.
