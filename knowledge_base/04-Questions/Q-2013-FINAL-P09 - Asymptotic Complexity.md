---
id: "Q-2013-FINAL-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 12
solution_page: [12]
question_number: "9"
year: 2013
term: "spring"
exam_type: "final"
marks: 11
topics: ["[[Topic - Algorithms - 算法]]", "[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]", "[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]", "[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The advanced-induction step must choose a constant large enough for the negative logarithmic term to absorb both the quadratic and linear additions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P09

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=12]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=12]].

## Question

Consider a function $T(n)$ defined on integers $n$ that are powers of 3. Suppose
$$T(1)=1,\qquad T(n)\le9T\left(\frac n3\right)+4n^2+100n\quad\forall n>1.$$
Use advanced induction to prove that $T(n)=O(n^2\log n)$.

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=12|PDF physical page 12]]; [[knowledge_base/past_paper/2013-final.pdf#page=13|PDF physical page 13]].

**Proof 1:** It suffices to show that there exist $n_0$ and $c$ such that
$$T(n)\le cn^2\log n\qquad\forall n=3^i,n>n_0.$$

- Base case: Pick $n_0=1$. Then the base case is when $n=3^1=3$:
$$T(3)\le9T(1)+4\,3^2+100\times3=345.$$
We want the right hand side to be no greater than $c3^2\log3$. To satisfy the condition, we need $c\ge\frac{115}{3\log3}$.
- Induction Hypothesis: Suppose
$$T(m)\le cm^2\log m\qquad\forall m=3^i,m<n.$$
- Induction Step:
$$\begin{aligned}
T(n)&\le9T(\frac n3)+4n^2+100n\\
&\le9c(\frac n3)^2\log\frac n3+4n^2+100n\\
&=cn^2\log n-cn^2\log3+4n^2+100n\\
&=cn^2\log n\quad\text{if }c>104/\log3
\end{aligned}$$
So, the proof follows through if we choose $n_0=1$ and $c=\max\{\frac{115}{3\log3},104/\log3\}=104/\log3$. The proof is completed.

**Proof 2:** It suffices to show there exist positive constants $c_1,c_2$ and $n_0$ such that
$$T(n)\le c_1n^2\log_3 n-c_2n,\ \forall n>n_0.\qquad(*)$$

**Base case:** Let $n_0=1$. Remember $n$ is a power of 3. The smallest such integer such that $n>1$ is 3. So, the base case is $n=3$. For this case, we have
$$T(3)\le9T(1)+4\times3^2+100\times3=345\le9c_1-3c_2.$$
This is true when $c_1\ge\frac{3c_2+345}{9}=\frac{c_2+115}{3}$.

**Induction hypothesis:** Now let $n>3$. Assume that, for any $m$ such that $1\le m<n$ and $m$ is power of 3, the following is true:
$$T(m)\le c_1m^2\log_3 m-c_2m.$$

**Induction step:** Now consider the case of $n$:
$$\begin{aligned}
T(n)&\le9T(\frac n3)+4n^2+100n\\
&\le9(c_1(\frac n3)^2\log_3\frac n3-c_2\frac n3)+4n^2+100n\\
&=c_1n^2\log_3 n-c_1n^2-3c_2n+4n^2+100n\\
&=c_1n^2\log_3 n-c_2n+(4-c_1)n^2+(100-2c_2)n\\
&\le c_1n^2\log_3 n-c_2n+(4-c_1)n^2+(100-2c_2)n^2\\
&=c_1n^2\log_3 n-c_2n+(104-c_1-8c_2)n^2\\
&\le c_1n^2\log_3 n-c_2n,\quad\text{when }(104-c_1-2c_2)n^2\le0
\end{aligned}$$
So, we have shown that inequality (*) is true when
$$n_0=1,c_2>0,c_1\ge\max\{\frac{c_2+115}{3},104-2c_2\}.$$
Consequently, $T(n)=O(n^2\log n)$. Q.E.D

## Supplementary Explanation

**Answer.** $T(n)\le c n^2\log n$ for suitable $c$; thus $T(n)=O(n^2\log n)$.

**Derivation/proof.** For $n=3$, $T(3)\le345$, so take $c\ge115/(3\log3)$. Assume $T(m)\le cm^2\log m$ for smaller powers. Then $T(n)\le9c(n/3)^2\log(n/3)+4n^2+100n=cn^2\log n-cn^2\log3+4n^2+100n\le cn^2\log n$ when $c\ge104/\log3$ (using $100n\le100n^2/3$ for $n\ge3$).

For powers of three with $n\ge9$, the induction hypothesis applies to $n/3\ge3$. Taking $c=104/\log3$ gives $-cn^2\log3=-104n^2$, while $4n^2+100n\le104n^2$. The estimate need not hold at $n=1$, where $\log1=0$.

The base calculation is $T(3)\le9+36+300=345$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
