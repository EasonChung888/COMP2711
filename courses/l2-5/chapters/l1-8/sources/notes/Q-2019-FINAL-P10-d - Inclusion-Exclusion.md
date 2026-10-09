---
id: "Q-2019-FINAL-P10-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 12
solution_page: [12]
question_number: "10(d)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Three upper bounds use inclusion-exclusion with pair intersections six and an impossible triple intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-FINAL-P10-d

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=12]]

## Question

(d) How many solutions are there so that $x_1,x_2$ and $x_3$ are less than 9?

Shared context: [[STEM-2019-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=12|physical PDF page 12]].

We use $S_\phi$ to denote the set of solutions subject to condition $\phi$. By the inclusion-exclusion principle, we have
$$\begin{aligned}\lvert S_{x_1\ge9\lor x_2\ge9\lor x_3\ge9}\rvert&=3\cdot\lvert S_{x_1\ge9}\rvert-3\cdot\lvert S_{x_1\ge9\land x_2\ge9}\rvert+\lvert S_{x_1\ge9\land x_2\ge9\land x_3\ge9}\rvert\\&=3\cdot78-3\cdot6+0=216.\end{aligned}$$
So, $\lvert S_{x_1<9\land x_2<9\land x_3<9}\rvert=\lvert S\rvert-\lvert S_{x_1\ge9\lor x_2\ge9\lor x_3\ge9}\rvert=231-216=15$.
Alternative solution: Write $y_1=8-x_1,y_2=8-x_2,y_3=8-x_3$. Then the equation becomes $24-y_1-y_2-y_3=20$, or $y_1+y_2+y_3=4$, which has $C(4+3-1,3-1)=C(6,2)=15$ solutions.

## Supplementary Explanation

**Answer.** $15$.

**Derivation/proof.** Let $A_i$ be solutions with $x_i\ge9$. The unrestricted count is 231; each $A_i$ has 78 solutions and each pair intersection has 6. The triple intersection is empty because $27>20$. Thus the desired count is $231-3\cdot78+3\cdot6=15$. Independently set $y_i=8-x_i\ge0$: then $y_1+y_2+y_3=4$, whose $\binom62=15$ solutions automatically have $y_i\le4\le8$, giving a bijection back.

In the complementary-variable check, each $y_i\le4\le8$, so the inverse $x_i=8-y_i$ is automatically nonnegative and the transformation is a bijection.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
