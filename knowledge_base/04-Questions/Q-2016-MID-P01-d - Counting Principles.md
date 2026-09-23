---
id: "Q-2016-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(d)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The two possible alternating category patterns have different counts of digit and letter positions and must be added."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P01-d

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

## Question

(d) How many possible order id’s are there if the order id is alternative between alphabet and digit? (E.g., A3R4B7Q and 4V7X3V7 are valid, B7XB4Q3 is invalid)

Shared context: [[STEM-2016-MID-P01 - Shared Problem Prompt]].

## 中文解析

长度为奇数，可以字母开头也可以数字开头。两种类别序列一旦首类确定就全部确定，分别有四字母三数字和四数字三字母，两个互斥计数相加。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $26^4 10^3+10^4 26^3$.

**Derivation/proof.** Pattern L-D-L-D-L-D-L gives $26^4 10^3$ possibilities; pattern D-L-D-L-D-L-D gives $10^4 26^3$. Repetition within a category is allowed. The patterns cannot overlap, so add the two counts.

### 中文解答

**推导。** 交替七位只有两种类别模式。字母开头时为 L-D-L-D-L-D-L，有四字母三数字，计 $26^4 10^3$；数字开头时为 D-L-D-L-D-L-D，计 $10^4 26^3$。两种模式首位类别不同而互斥，合计 $26^4 10^3+10^4 26^3$，每一类别内部仍可重用字符。

## Common Mistakes

- 只考虑字母开头。
- 把非相邻同类字符禁止重复，尽管例子明确允许。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
