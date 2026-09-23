---
id: "STEM-2021-FINAL1-P02"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 1
---
# STEM-2021-FINAL1-P02 - Shared Problem Prompt

## Shared printed wording

There are $n$ coins, all of equal shape and size, but only $n-1$ of them are of equal weight. You are given a balance scale which can compare the weight of any two sets of coins. Assume $n$ is a power of 3. We use the following algorithm to find the coin of different weight.

~~~text
Procedure findCoin(S : a set of coins)
    if |S| = 1:
        return the only coin in S.
    Partition S equally into 3 sets of coins, A, B and C.
    if A and B are of equal weight:
        return findCoin(C)
    else if B and C are of equal weight:
        return findCoin(A)
    else:
        return findCoin(B).
~~~

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=1]]
