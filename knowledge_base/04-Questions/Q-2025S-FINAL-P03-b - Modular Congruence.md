---
id: "Q-2025S-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 4
question_number: "3(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Count independent allowed residue triples and use CRT uniqueness within the product interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 6
related_questions: ["[[Q-2025S-FINAL-P03-a - Modular Congruence]]"]
---
# Q-2025S-FINAL-P03-b

## Source

[[2025 Spring Final]]; printed item 3(b); 6 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=4]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=4]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P03-a - Modular Congruence]]. Part (a) establishes the 7-safe residues {3,4}.

## Question

![[STEM-2025S-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(b) [6 pts] Find the number of positive integers less than 1001 ($1001=7\cdot11\cdot13$) that are simultaneously 7-safe, 11-safe, and 13-safe. Please justify your answer.

## 中文解析

三个安全条件给出三个余数集合，CRT 将每个余数组合唯一对应到指定区间的数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $96$。

**推导。** 模七允许 $\{3,4\}$，模十一允许 $\{3,4,5,6,7,8\}$，模十三允许 $\{3,4,5,6,7,8,9,10\}$。三者分别有二、六、八种。七、十一、十三两两互素，Chinese Remainder Theorem 保证每个余数三元组唯一确定模 $1001$ 的一个解，因此不同三元组不会计数重叠。零不满足任何允许的余数，故每个类在 $1\le x<1001$ 中恰有一个代表。用 product rule 得 $2\cdot6\cdot8=96$。

## Common Mistakes

- 不能直接把安全概率相乘而不说明区间上余数组合的一一对应。
- CRT 的代表区间包含零，但零不合法，需要明确排除这一边界。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Topic - Counting - 计数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Modular Congruence - 同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Counting Method - 计数方法]]

Count independent allowed residue triples and use CRT uniqueness within the product interval.

- Prerequisite / related: [[Q-2025S-FINAL-P03-a - Modular Congruence]]: 把模七的安全余数与另两个模数的安全区间组合计数。 Part (a) establishes the 7-safe residues {3,4}.
