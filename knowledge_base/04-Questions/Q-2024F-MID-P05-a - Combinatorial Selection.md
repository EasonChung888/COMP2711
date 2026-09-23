---
id: "Q-2024F-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 10
question_number: "5(a)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Fix face 1 on top, choose its opposite face and count cyclic orders of four distinct side labels."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 6
---
# Q-2024F-MID-P05-a

## Source

[[2024 Fall Midterm]]; printed item 5(a); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10]]

## Question

(a) How many ways are there to place numbers 1 to 6 on a dice so that different rotations are considered equivalent? Explain your solution.

## 中文解析

旋转等价可通过固定顶面消除，再处理四个侧面的循环排列。反射不会由空间旋转产生，不能再额外把镜像除掉。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $5\cdot3!=30$。

**推导。** 任何标号骰子都能旋转使数字一在顶面，因此可固定一朝上。与一相对的底面有其余五个数字可选。余下四个不同数字围绕侧面排列，只识别绕竖直轴的四种转动，所以循环排列数为 $4!/4=3!=6$。因此总数 $5\cdot6=30$。等价检查：六面有 $6!$ 个标号，每个旋转类含 $6\cdot4=24$ 个方向，标签互异保证没有非平凡旋转固定它，故 $6!/24=30$。

## Common Mistakes

- 不应把镜像也当作同一骰子，题目只识别 rotations。
- 数字全部不同，侧面按循环排列计数，不是无序集合。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Fix face 1 on top, choose its opposite face and count cyclic orders of four distinct side labels.
