---
id: "Q-2015-MID-P07-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "7(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The sharp pigeonhole threshold needs both a maximum distribution below the target and the extra coupon that forces it."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P07-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=12]]

## Question

(c) Suppose you have an unlimited number of cash coupons, instead of $kn$ cash coupons. Each member may receive 0 or more cash coupons, and you distribute the cash coupons randomly. For each rank $r$, let $t_r$ be the total number of coupons members at the rank receive altogether. What is the minimum number of cash coupons you will need to distribute so that there is at least one rank $r$ for which $t_r\ge2k$?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P07 - Shared Problem Prompt]].

## 中文解析

若每个等级都未达到 $2k$ 张，则每个等级最多 $2k-1$ 张，所有等级合计最多 $n(2k-1)$。再多发一张就必然有等级达到目标；而前一个数确实可平均塞到每组上限，说明答案最小。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $n(2k-1)+1$.

**Derivation/proof.** A distribution with every $t_r\le2k-1$ contains at most $n(2k-1)$ coupons. Therefore $n(2k-1)+1$ forces some $t_r\ge2k$. Sharpness follows by giving exactly $2k-1$ coupons to each rank, which avoids the event using one fewer coupon.

### 中文解答

**推导。** 若所有等级均未达到 2k 张，则每个等级至多 $2k-1$，n 个等级合计至多 $n(2k-1)$。因此发 $n(2k-1)+1$ 张时鸽巢原理保证某等级达到 2k。为证最小，恰给每个等级 $2k-1$ 张，可由等级内一人全领，满足每人可领任意非负张数；总数少一张且仍没有等级达到目标。所以最小值正是 $n(2k-1)+1$。

## Common Mistakes

- 把成员数 $kn$ 当作抽屉数，题目目标按等级统计。
- 仅证明足够，却没有说明少一张可以不满足目标。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
