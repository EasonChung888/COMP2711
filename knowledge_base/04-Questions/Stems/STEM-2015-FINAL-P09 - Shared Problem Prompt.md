---
id: "STEM-2015-FINAL-P09"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 15
---
# STEM-2015-FINAL-P09 - Shared Problem Prompt

## Shared printed wording

Let $A$ and $B$ be two positive integers represented as binary sequences, each $n$ bits long. Assume $n$ is a power of 2. The product $A\cdot B$ can be computed recursively as follows:

1. If $n=1$, calculate $A\cdot B$ directly.
2. If $n>1$, partition the bit representation of each number into two parts, the high $n/2$ bits and low $n/2$ bits. Calculate $A\cdot B$ using the following formula:

$$\begin{aligned}A\cdot B&=(A_h\cdot1\underbrace{0\cdots0}_{n/2}+A_l)\cdot(B_h\cdot1\underbrace{0\cdots0}_{n/2}+B_l)\\&=(A_h\cdot B_h)\cdot1\underbrace{0\cdots0}_{n}+(A_h\cdot B_l)\cdot1\underbrace{0\cdots0}_{n/2}\\&\quad+(A_l\cdot B_h)\cdot1\underbrace{0\cdots0}_{n/2}+(A_l\cdot B_l).\tag{2}\end{aligned}$$

where $A_h$ and $B_h$ denote the high $n/2$ bits of $A$ and $B$, respectively, and $A_l$ and $B_l$ denote the low $n/2$ bits of $A$ and $B$, respectively. The terms in ( ) are calculated recursively.

Suppose the calculations take 1 unit of time when $n=1$, and suppose that calculation of the expression (2) takes $cn$ units of time given the results of the recursive calls, where $c$ is a constant.

Let $T(n)$ be the total time it takes to compute $A\cdot B$. Write a recurrence for $T(n)$, find a closed-form expression for it, and simplify the closed-form expression using the big $\Theta$ notation.

![[knowledge_base/past_paper/2015-final.pdf#page=15]]
