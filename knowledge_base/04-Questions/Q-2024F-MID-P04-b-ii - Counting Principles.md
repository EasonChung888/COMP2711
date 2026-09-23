---
id: "Q-2024F-MID-P04-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 8
question_number: "4(b)(ii)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use forced middle-row columns and the fixed top-row fifth-column C choice in the diagonal-strip diagram."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 3
related_questions: ["[[Q-2024F-MID-P04-b-i - Counting Principles]]"]
---
# Q-2024F-MID-P04-b-ii

## Source

[[2024 Fall Midterm]]; printed item 4(b)(ii); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9]]

## Question

(ii) You want to pass from C. Briefly explain why. Simply counting all possible ways will not give you full credits.

Shared printed context: ![[STEM-2024F-MID-P04-b - Shared Problem Prompt#Shared printed wording]]

## 中文解析

源图 C 位于第五列顶行。与不受限情形一样，第二、四、六、八列必须在中行，第三、五、七列决定上下分支。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2^2=4$。

**推导。** 源图 C 位于第五列顶行。与不受限情形一样，第二、四、六、八列必须在中行，第三、五、七列决定上下分支。经过 C 要求第五列选顶行，恰固定三个二选一中的一个；第三、七列仍各有上下两种合法选择。每个选择对都给出一条通过 C 的路径，故数量为 $2\cdot1\cdot2=4$。

## Common Mistakes

- C 是第五列顶点，固定的是中间分支，不是要求全程都走顶行。
- 通过 C 后的第七列仍可上下任选，不能把后半程也完全固定。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]

- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Use forced middle-row columns and the fixed top-row fifth-column C choice in the diagonal-strip diagram.

- [[Q-2024F-MID-P04-b-i - Counting Principles]]: 经过 C 恰好固定三个独立上下分支中的中间分支，因此路径数量由八减为四。
