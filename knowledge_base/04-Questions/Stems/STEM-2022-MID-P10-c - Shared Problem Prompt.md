---
id: "STEM-2022-MID-P10-c"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
---
# STEM-2022-MID-P10-c - Shared Problem Prompt

## Shared printed wording

The following algorithm finds $x$ in an sorted list of $n$ integers (note that instead of comparing with the median, this algorithm compares with the 25%-quantile in each iteration):

~~~text
i ← 1
j ← n
while i ≤ j
    m ← floor((3/4)i + (1/4)j)
    if x = a_m then return m
    if x > a_m then i ← m + 1
    else j ← m − 1
return “not found”
~~~

Determine the best-case and worst-case running time using the $\Theta$ notation. No justification is needed.

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]
