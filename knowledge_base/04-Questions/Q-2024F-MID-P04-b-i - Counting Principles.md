---
id: "Q-2024F-MID-P04-b-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 8
question_number: "4(b)(i)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use forced middle-row columns and three binary branch choices in the diagonal-strip diagram."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 3
related_questions: ["[[Q-2024F-MID-P04-b-ii - Counting Principles]]"]
---
# Q-2024F-MID-P04-b-i

## Source

[[2024 Fall Midterm]]; printed item 4(b)(i); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9]]

## Question

(i) There are no restrictions. Briefly explain why. Simply counting all possible ways will not give you full credits.
Hint: Note that in order to get from A to B you have to pass from some certain points like X.

Shared printed context: ![[STEM-2024F-MID-P04-b - Shared Problem Prompt#Shared printed wording]]

## 中文解析

把图的九个竖列从左到右编号为一至九。A 与 B 在底行。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2^3=8$。

**推导。** 把图的九个竖列从左到右编号为一至九。A 与 B 在底行。每一步左右坐标增一，高度增减一，因此偶数列二、四、六、八只能位于中行。第一步 A 到第二列中点 X 和最后中点到底部 B 都被迫；第三、五、七列各可选顶行或底行，下一步必回中行，三个选择互不限制。于是乘法原理给出 $2\cdot2\cdot2=8$，每组选择唯一产生一条合法路径。

## Common Mistakes

- 只能使用图示三行，不能把八步四升四降的所有序列都当合法。
- 固定的首尾动作不贡献额外二选一，实际只有三个自由分支。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]

- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Use forced middle-row columns and three binary branch choices in the diagonal-strip diagram.

- [[Q-2024F-MID-P04-b-ii - Counting Principles]]: 经过 C 恰好固定三个独立上下分支中的中间分支，因此路径数量由八减为四。
