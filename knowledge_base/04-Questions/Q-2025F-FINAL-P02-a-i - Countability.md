---
id: "Q-2025F-FINAL-P02-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(a)(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Recognize that an infinite alternating binary string is completely determined by its first bit."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2025F-FINAL-P02-a-i

## Source

[[2025 Fall Final]]; printed item 2(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Page 5 explicitly states that the correct answer under the definition is Finite (two strings), while also accepting Countably Infinite for an alternative arbitrary-length interpretation. This note preserves the correct official finite branch and documents the grading concession without adopting it as a second mathematical result.

## Question

![[STEM-2025F-FINAL-P02-a - Shared Problem Prompt#Shared printed wording]]

(i) The set of binary strings of infinite length with no two identical consecutive bits (i.e., no “00” and no “11” anywhere in the sequence).

## 中文解析

没有相同相邻位会强迫每下一位翻转，首位决定整个无限串。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Finite；恰有两个。

**推导。** 若首位是零，为避免“00”，第二位必须是一；为避免“11”，第三位又必须为零，依此类推，唯一得到 $010101\ldots$。首位若为一则唯一得到 $101010\ldots$。只有两个首位选择，而两串不同且都合法，所以集合大小恰为二，是有限集。原阅卷说明也接受 countably infinite，但明确称它针对“arbitrary length”的另一种措辞；本题字面为 infinite length，因此数学分类是有限。

## Common Mistakes

- 每个元素无限长不代表元素数量无限，本题恰只有两种元素。
- 阅卷接受另一分类是针对措辞容错，不能把“两串”和“可数无限”同时视为正确数学结论。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Recognize that an infinite alternating binary string is completely determined by its first bit.
