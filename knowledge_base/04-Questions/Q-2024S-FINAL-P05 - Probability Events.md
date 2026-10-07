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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=6|physical PDF page 6]].

> Solution: Let $P_n$ be the probability of obtaining an odd number of heads when tossing these $n$ coins. In order to compute $P_{n+1}$, we need to consider two cases:
> Case 1: The $(n+1)$-th coin lands head and we have an even number of heads in the first $n$ coins.
> Case 2: The $(n+1)$-th coin lands tail and we have an odd number of heads in the first $n$ coins.
> Thus:
> $$P_{n+1}=\left(\frac1{2n+3}\right)(1-P_n)+\left(1-\frac1{2n+3}\right)P_n=\left(1-\frac2{2n+3}\right)P_n+\frac1{2n+3}.$$
> Multiplying both sides by $(2n+3)$ we obtain $(2n+3)P_{n+1}=(2n+1)P_n+1$.
> Substituting $A_n=(2n+1)P_n$, we can express this as $A_{n+1}=A_n+1$. We know that $A_0=0$ because $P_0=0$. This implies that $A_n=n$, which in turn implies that $P_n=\frac n{2n+1}$, as desired.

## Supplementary Explanation

**Answer.** $P_n=n/(2n+1)$.

**Derivation/proof.** Let $P_n$ denote the odd-head probability for the first $n$ coins, with $P_0=0$. Coin $n+1$ has head probability $1/(2n+3)$. An odd total comes from an even previous total and a head, or an odd previous total and a tail. These cases are mutually exclusive, and independence gives $P_{n+1}=\frac1{2n+3}(1-P_n)+\frac{2n+2}{2n+3}P_n$. Hence $(2n+3)P_{n+1}=(2n+1)P_n+1$. Set $A_n=(2n+1)P_n$. Then $A_{n+1}=A_n+1,A_0=0$, so $A_n=n$ and $P_n=n/(2n+1)$. At $n=1$ this gives $1/3$, as required.

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Recursion - 递归]]

- [[Probability Events - 概率事件]]
- [[Recurrence Relations - 递推关系]]
- [[Probability Calculation Method - 概率计算方法]]

Separate parity according to the independent final biased coin and telescope the scaled first-order recurrence.
