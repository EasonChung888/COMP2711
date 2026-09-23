---
id: "Q-2022-MID-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "5(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A diagonal schedule enumerates the countable union using countable pairs of indices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
---
# Q-2022-MID-P05-c

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

## Question

The union of countably many countable sets.

Shared context: [[STEM-2022-MID-P05 - Shared Problem Prompt]].

## 中文解析

把每个集合列成一行，再按行列编号之和做对角遍历，保证每个位置都在有限时刻被访问。重复元素去重即可；结论是至多可数，不要求并集一定无限。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Countable.

**Derivation/proof.** List the sets A0,A1,… and choose an enumeration a_(i,0),a_(i,1),… for each nonempty one, repeating values for finite sets if needed. Enumerate index pairs (i,j) by increasing i+j and output the corresponding element, skipping repetitions. Every member occurs at a finite pair and hence a finite stage, so the union is at most countable; it may be finite or empty.

### 中文解答

**推导。** 把给定集合列作 $A_0,A_1,\ldots$，对每个非空可数集合选一个枚举 $a_{i,0},a_{i,1},\ldots$；有限非空集合可重复某些元素，空集跳过。再按 $i+j$ 从小到大枚举所有下标对，每层有限，输出相应元素并跳过已出现的重复值。并集中的任意元素属于某个 $A_i$ 且有某个有限下标 $j$，因此会在有限阶段输出。故并集至多可数；它也可能有限或为空，并不必然可数无限。

## Common Mistakes

- 先列完第一行再第二行，导致无法完成。
- 把 countable 一律解释为可数无限而排除有限并集。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
