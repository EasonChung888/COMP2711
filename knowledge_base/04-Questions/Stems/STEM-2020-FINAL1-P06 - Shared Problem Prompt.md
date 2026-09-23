---
id: "STEM-2020-FINAL1-P06"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 4
---
# STEM-2020-FINAL1-P06 - Shared Problem Prompt

## Shared printed wording

Read the following algorithms and answer the questions.

Algorithm 1: MultiplyTwoPolys($p(x),q(x)$)
Input: A polynomial $p(x)$ with degree $m$ and a polynomial $q(x)$ with degree $n$
Output: The polynomial $r(x)=p(x)\cdot q(x)$

~~~text
for i ← 0 to m do
    a_i ← the coefficient of x^i in p(x)
end
for i ← 0 to n do
    b_i ← the coefficient of x^i in q(x)
end
for i ← 0 to m+n do
    c_i ← 0
end
for i ← 0 to m do
    for j ← 0 to n do
        c_(i+j) ← c_(i+j) + a_i b_j
    end
end
r(x) ← sum from i=0 to m+n of c_i x^i
return r(x)
~~~

Algorithm 2: MultiplyManyPolys($p_1(x),p_2(x),\ldots,p_n(x)$)
Input: Polynomials $p_1(x),p_2(x),\ldots,p_n(x)$
Output: The polynomial $r(x)=p_1(x)p_2(x)\cdots p_n(x)$

~~~text
if n = 1 then
    return p_1(x)
end
r_1(x) ← MultiplyManyPolys(p_1(x),p_2(x),…,p_(n−1)(x))
r(x) ← MultiplyTwoPolys(r_1(x),p_n(x))
return r(x)
~~~

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=4]]
