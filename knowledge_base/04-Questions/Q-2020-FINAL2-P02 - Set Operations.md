---
id: "Q-2020-FINAL2-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 2
question_number: "2"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Set Operations - 集合运算]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The union bound on the three absence sets leaves at least forty percent in the intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 5
---
# Q-2020-FINAL2-P02

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=2]]

## Question

Three seminars were held by CSE department last week. 70% of students attended the seminar on Monday, 80% of students attended the seminar on Wednesday, and 90% of students attended the seminar on Friday. Prove that at least 40% of students attended all three seminars.

## 中文解析

直接求三个出席集合的交集不容易，但缺席比例分别为三成、两成、一成。至少缺席一次的学生最多六成，剩下至少四成必然三次都到；缺席者可能重叠，所以这里是上界而不是等式。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** At least $40\%$ attended all three.

**Derivation/proof.** Let U be the students and A,B,C the three attendance sets. Their complements have sizes .3|U|,.2|U|,.1|U|. Anyone not attending all three lies in $\overline A\cup\overline B\cup\overline C$, whose size is at most the sum .6|U|. Therefore $|A\cap B\cap C|=|U|-|\overline A\cup\overline B\cup\overline C|\ge.4|U|$. No independence between attendance events is needed.

### 中文解答

**推导。** 设全部学生为 $U$，三次出席集合为 $A,B,C$，则三次缺席比例分别为 $0.3,0.2,0.1$。未全部出席者恰为 $\overline A\cup\overline B\cup\overline C$。并集大小至多各集合大小之和，因此

$$|\overline A\cup\overline B\cup\overline C|\le(0.3+0.2+0.1)|U|=0.6|U|.$$

取补集得 $|A\cap B\cap C|\ge|U|-0.6|U|=0.4|U|$，即至少百分之四十全部出席。这里仅使用并集上界，不需要不同日出席独立。

## Common Mistakes

- 把三个出席比例相乘，擅自假设独立。
- 把缺席比例之和当作精确并集。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Set Operations - 集合运算]]
- [[Counting Principles - 计数原理]]
- [[Set Identity Method - 集合恒等式方法]]
- [[Counting Method - 计数方法]]
