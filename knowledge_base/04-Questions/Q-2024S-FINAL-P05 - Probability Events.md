---
id: "Q-2024S-FINAL-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 6
question_number: "5"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Probability Events - 概率事件]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Separate parity according to the independent final biased coin and telescope the scaled first-order recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 10
---
# Q-2024S-FINAL-P05

## Source

[[2024 Spring Final]]; printed item 5; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=6]]

## Question

You have a set of $n$ biased coins. For each $m=1,2,\ldots,n$, the $m$-th coin has a probability of $\frac1{2m+1}$ of landing heads when tossed, and the outcomes of the tosses for each coin are independent of each other.
Show that the probability of obtaining an odd number of heads after tossing all the $n$ coins is equal to $\frac n{2n+1}$.
Hint: One possible approach is to think in a recursive way.

## 中文解析

最后一枚出现正面时奇偶性翻转，出现反面时保留。题目明确独立，所以两种情况可用概率相乘；适当乘分母后递推变成每步加一。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 奇数个正面的概率为 $P_n=n/(2n+1)$。

**推导。** 令 $P_n$ 为前 $n$ 枚产生奇数个正面的概率，$P_0=0$。第 $n+1$ 枚的正面概率为 $1/(2n+3)$。奇数总数由“此前偶数且末枚正面”或“此前奇数且末枚反面”组成，二者互斥；独立性给出 $P_{n+1}=\frac1{2n+3}(1-P_n)+\frac{2n+2}{2n+3}P_n$。化简为 $(2n+3)P_{n+1}=(2n+1)P_n+1$。设 $A_n=(2n+1)P_n$，则 $A_{n+1}=A_n+1,A_0=0$，所以 $A_n=n$，即 $P_n=n/(2n+1)$。代入 $n=1$ 得 $1/3$，符合第一枚硬币。

## Common Mistakes

- 第 n+1 枚分母是 $2n+3$，不能继续写 $2n+1$。
- 末枚正面要搭配此前偶数，不是此前奇数，否则总数变偶。

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Recursion - 递归]]

- [[Probability Events - 概率事件]]
- [[Recurrence Relations - 递推关系]]
- [[Probability Calculation Method - 概率计算方法]]

Separate parity according to the independent final biased coin and telescope the scaled first-order recurrence.
