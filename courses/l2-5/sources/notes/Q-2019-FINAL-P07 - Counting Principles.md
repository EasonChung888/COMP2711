---
id: "Q-2019-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 9
solution_page: [9]
question_number: "7"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Counting Method - 计数方法]]","[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Five integer coordinate pairs fall into four parity classes, forcing one pair with integer coordinate averages."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 8
---
# Q-2019-FINAL-P07

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=9]]

## Question

Let $P$ be a set of 5 distinct points in the plane with integer coordinates. Draw a line segment between every two points of $P$ (note that a total of 10 line segments will be drawn). Show that at least one of these line segments has its midpoint with integer coordinates.

## 中文解析

核心是模二余数，不需要比较距离或角度。两个坐标各有奇偶两种状态，总共四类；五个点必有同类的一对。它们对应坐标相加均为偶数，除二取平均后仍为整数，正好得到整数坐标中点。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** At least one of the ten segments has an integer-coordinate midpoint.

**Derivation/proof.** Classify a point $(a,b)$ by $(a\bmod2,b\bmod2)$. There are four classes: $(0,0),(0,1),(1,0),(1,1)$. Five points force two distinct points $(a,b),(c,d)$ in one class by pigeonhole principle. Then a+c and b+d are even, so the midpoint $((a+c)/2,(b+d)/2)$ has both coordinates integral. The required segment is present because every pair is joined.

### 中文解答

**推导。** 把每个整数点 $(a,b)$ 按两个坐标的奇偶分进四个鸽巢 $(0,0),(0,1),(1,0),(1,1)$，其中分量表示模 $2$ 的余数。五个不同点多于四个巢，鸽巢原理保证某两个不同点 $(a,b),(c,d)$ 同巢，即 $a\equiv c\pmod2$ 且 $b\equiv d\pmod2$。所以 $a+c$、$b+d$ 都是偶数，连接它们的中点 $((a+c)/2,(b+d)/2)$ 两坐标均为整数。题目画出了每一对点的线段，因此这条所需线段确实在十条之中。

## Common Mistakes

- 只按一个坐标的奇偶分组。
- 把中点坐标写成两个端点坐标的差。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Counting Principles - 计数原理]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Counting Method - 计数方法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
