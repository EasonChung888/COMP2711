---
id: "Q-2014-FINAL-P10-closed-form"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 14
solution_page: [14]
question_number: "10"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The recurrence solution combines an eight-fold homogeneous term with a ten-power forcing term and must satisfy V1 equals nine."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P10-closed-form

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=14]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=14]].

## Question

Solve the recurrence to get a closed-form formula for $V_n$.

Shared context: [[STEM-2014-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=14|PDF physical page 14]].

A valid length $n$ code can be obtained

- From a valid length $n-1$ code by appending “1”, “2”, $\ldots$, or “9”to the end, or
- From an invalid length $n-1$ code by appending “0” to the end.

The total number of length $n-1$ codes is $10^{n-1}$. Hence the number of invalid length $n-1$ codes is $(10^{n-1}-V_{n-1})$. So, we have
$$V_n=9V_{n-1}+(10^{n-1}-V_{n-1})=8V_{n-1}+10^{n-1}.$$

Iterating the recurrence, we get
$$\begin{aligned}
V_n&=8V_{n-1}+10^{n-1}\\&=8(8V_{n-2}+10^{n-2})+10^{n-1}\\&=8^2V_{n-2}+8\times10^{n-2}+10^{n-1}\\&=\ldots\\&=8^{n-1}V_1+8^{n-2}\times10\ldots+8\times10^{n-2}+10^{n-1}\\&=9\times8^{n-1}+8^{n-2}\times10\times(1+\frac{10}8+\ldots+(\frac{10}8)^{n-2}+(\frac{10}8)^{n-2})\\&=9\times8^{n-1}+8^{n-2}\times10\times\frac{(\frac{10}8)^{n-1}-1}{\frac{10}8-1}\,)\\&=9\times8^{n-1}+\frac{10^n-10\times8^{n-1}}2\\&=\frac1210^n+\frac128^n.
\end{aligned}$$

## Supplementary Explanation

**Answer.** $V_n=(10^n+8^n)/2$.

**Derivation/proof.** Iterating $V_n=8V_{n-1}+10^{n-1}$ gives $V_n=9\cdot8^{n-1}+10\cdot8^{n-2}\sum_{j=0}^{n-2}(10/8)^j=9\cdot8^{n-1}+(10^n-10\cdot8^{n-1})/2=(10^n+8^n)/2$.

For $n=1$, $(10+8)/2=9$. Substituting into the recurrence gives $8(10^{n-1}+8^{n-1})/2+10^{n-1}=(10^n+8^n)/2$, independently checking the formula.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
