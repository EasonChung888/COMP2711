---
id: "Q-2014-MID-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3"
year: 2014
term: "fall"
exam_type: "midterm"
marks: 11
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The requested identity needs a counting proof that gives the two sides distinct interpretations of the same selection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P03

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=5]].

## Question

Give a combinatorial proof of the identity, for all $n\ge13$.
$$\binom n4\binom{n-4}6\binom{n-10}3=\binom n6\binom{n-6}3\binom{n-9}4.$$
Note: An algebraic proof of this identity will not be accepted as a solution.

## 中文解析

组合证明要定义一个共同的被计数集合。本题不同的选择顺序只是构造同一四色标记的方法不同。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** Both sides count colourings with 4 red, 6 green, 3 blue, and $n-13$ yellow items.

**Derivation/proof.** On the left choose red then green then blue; on the right choose green then blue then red. Each procedure selects exactly the same labelled colour assignment, so the counts agree.

### 中文解答

**推导。** 共同计数对象是 n 个不同物品的着色：四个红、六个绿、三个蓝，其余 n−13 个黄。先选红再选绿最后选蓝时，数目为 $\binom n4\binom{n-4}6\binom{n-10}3$。若改为先绿、再蓝、最后红，则为 $\binom n6\binom{n-6}3\binom{n-9}4$。每个最终着色在两种过程各出现恰一次，故两边相等；$n\ge13$ 保证所有组容量合法。

## Common Mistakes

- 把剩余的 $n-13$ 个物品遗漏而没有说明黄色。
- 使用阶乘展开，这不满足组合证明要求。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
