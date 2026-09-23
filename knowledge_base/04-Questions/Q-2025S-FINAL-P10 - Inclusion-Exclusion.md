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

## 中文解析

四个可能的红方块重叠方式不同，容斥中相邻对与对角对必须分开数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $417/512$。

**推导。** 九格独立且等概率着色，共 $2^9=512$ 个等可能结果。令 $A,B,C,D$ 对应左上、右上、左下、右下的 $2\times2$ 格全红事件。每个事件固定四格，故有 $2^5=32$ 个着色。六个两两交集中，四对相邻方块固定六格，各余 $2^3=8$ 种；两对对角方块固定七格，各余 $2^2=4$ 种。任取三个方块固定八格，四个三重交集各有二种；四重交集只有全红的一种。于是至少一个红方块的数为 $4\cdot32-(4\cdot8+2\cdot4)+4\cdot2-1=95$。补事件有 $512-95=417$ 种，所求概率为 $417/512$。

## Common Mistakes

- 把六对交集都看成相邻重叠会错误估算对角方块固定的格数。
- 求得九十五后还须取补事件，题目问的是没有红方块。

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
