---
id: "Q-2022-MID-P10-c-worst"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "The larger remaining interval shrinks by a constant fraction, and repeated right branches attain logarithmic depth."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-c-worst

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the worst-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-c - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=5|physical PDF page 5]].

> (c) The best-case running time is $\Theta(1)$. Since each iteration reduces $j-i$ by $1/4$, the worst-case running time is $\Theta(\log_{3/4}\frac1n)=\Theta(\log n)$.

## Supplementary Explanation

**Answer.** $\Theta(\log n)$.

**Derivation/proof.** For interval length L=j−i+1, m=i+floor((L−1)/4). The larger right remainder has length L−1−floor((L−1)/4), at most3L/4, so O(log n) iterations suffice. A target larger than every entry always takes this larger side, whose length is at least3(L−1)/4. Thus reaching constant size requires Ω(log n) iterations. Constant work per probe yields Θ(log n); the logarithm base4/3 affects only a constant.

For interval length $L=j-i+1$, the left remainder is $\lfloor(L-1)/4\rfloor$ and the larger right remainder is $L-1-\lfloor(L-1)/4\rfloor$. The latter is at most $3L/4$ and at least $3(L-1)/4$. Along right branches, $L_{t+1}+3\ge\tfrac34(L_t+3)$; induction gives $L_t+3\ge(3/4)^t(n+3)$. At termination $L_t=0$, so $t\ge\log_{4/3}((n+3)/3)=\Omega(\log n)$. Rounding affects only constants; each step does not remove exactly one quarter.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
