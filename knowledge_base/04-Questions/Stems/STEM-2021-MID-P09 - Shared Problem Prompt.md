---
id: "STEM-2021-MID-P09"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 4
---
# STEM-2021-MID-P09 - Shared Problem Prompt

## Shared printed wording

Given two binary numbers $a$ and $b$, $a\land b$ is the bitwise AND operation of $a$ and $b$. E.g. if $a=3_{10}=011_2$ and $b=6_{10}=110_2$, then $a\land b=2_{10}=010_2$.

Consider the following two algorithms, both of which count the number of 1’s in the binary representation of $n$.

~~~text
procedure CountOneA(n : binary number)
    a ← 0
    while n ≠ 0
        if n mod 2 = 1 then a ← a + 1
        n ← floor(n/2)
    return a

procedure CountOneB(n : binary number)
    a ← 0
    while n ≠ 0
        a ← a + 1
        n ← n AND (n−1)
    return a
~~~

For each algorithm’s running time, select all that apply from the list below, and briefly justify your answer.

(1) $O(\log n)$; (2) $\Omega(\log n)$; (3) $\Theta(\log n)$; (4) $O(1)$; (5) $\Omega(1)$; (6) $\Theta(1)$.

![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]
