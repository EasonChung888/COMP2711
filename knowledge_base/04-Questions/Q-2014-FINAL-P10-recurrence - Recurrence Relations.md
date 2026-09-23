---
id: "Q-2014-FINAL-P10-recurrence"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 14
solution_page: [14]
question_number: "10"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["construction"]
difficulty: 3
difficulty_basis: "Appending a digit toggles zero parity only for a zero, so the recurrence must count valid and invalid prefixes separately."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P10-recurrence

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=14]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=14]].

## Question

For $n>1$, find a recurrence for $V_n$ by determining how it is related to $V_{n-1}$.

Shared context: [[STEM-2014-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

末位分类时，非零数字不改变零的奇偶性；添零会把无效（奇数零）字符串变为有效。无效总数来自所有长度 $n-1$ 串减去有效数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** $V_1=9$ and $V_n=8V_{n-1}+10^{n-1}$ for $n>1$.

**Derivation/proof.** Append a nonzero digit (nine choices) to each valid length-$n-1$ string, or append 0 to each invalid one. There are $10^{n-1}-V_{n-1}$ invalid strings, so $V_n=9V_{n-1}+10^{n-1}-V_{n-1}$.

### 中文解答

**推导。** 按最后一位是否为零分类。若非零，有九种数字，前 n−1 位必须已经含偶数个零，贡献 $9V_{n-1}$；若为零，前缀必须含奇数个零，总数为 $10^{n-1}-V_{n-1}$。两类互斥并穷尽，所以 $V_n=9V_{n-1}+10^{n-1}-V_{n-1}=8V_{n-1}+10^{n-1}$，基础值 $V_1=9$。

## Common Mistakes

- 把所有十个数字都接在有效串后。
- 写成 $9V_{n-1}+V_{n-1}$。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
