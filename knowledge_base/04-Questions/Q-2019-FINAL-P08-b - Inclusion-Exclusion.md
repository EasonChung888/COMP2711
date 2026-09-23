---
id: "Q-2019-FINAL-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 10
solution_page: [10]
question_number: "8(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Two forbidden-letter events overlap in the strings using only 24 letters."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-FINAL-P08-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=10]]

## Question

(b) the letters a and b?

Shared context: [[STEM-2019-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

把“不含 a”和“不含 b”作为两个坏事件，分别扣除后，不含二者的字符串被扣了两次，必须加回一次。这样得到同时含有 a 与 b 的数量，重复出现仍然允许。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $26^6-2\cdot25^6+24^6$.

**Derivation/proof.** Let A be strings missing a and B strings missing b. Their sizes are $25^6$ each, and their intersection misses both, with $24^6$ strings. The strings containing both are outside $A\cup B$. Inclusion-exclusion gives $26^6-(25^6+25^6-24^6)$, which simplifies to the answer.

### 中文解答

**推导。** 令 $A$ 是不含 $a$ 的串，$B$ 是不含 $b$ 的串，则 $|A|=|B|=25^6$，同时不含二者的交集有 $|A\cap B|=24^6$ 个。所求串为两者并集的补集，容斥原理给 $26^6-|A\cup B|=26^6-2\cdot25^6+24^6$。加回交集是因为前两次扣除把既无 $a$ 也无 $b$ 的串扣了两遍。

## Common Mistakes

- 忘记加回同时缺少两字母的交集。
- 把含 a 或 b 误当成含 a 且 b。

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Counting Principles - 计数原理]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Counting Method - 计数方法]]
