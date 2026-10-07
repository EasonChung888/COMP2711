---
id: "Q-2015-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 14
solution_page: [14]
question_number: "8(a)"
year: 2015
term: "fall"
exam_type: "final"
marks: 4
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "An affine recurrence is solved by summing the geometric accumulation of the constant twelve."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P08-a

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=14]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=14]]

## Question

Give a closed-form solution to the recurrence. You only have to give the solution. You do not need to show how you derived it.

Shared context: [[STEM-2015-FINAL-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=14|PDF physical page 14]].

(a) By iterating the recurrence, we get:
$$T(n)=3\cdot7^n+12\cdot\frac{7^n-1}{7-1}=5\cdot7^n-2.$$

## Supplementary Explanation

**Answer.** $T(n)=5\cdot7^n-2$.

**Derivation/proof.** Iteration yields $T(n)=3\cdot7^n+12\sum_{j=0}^{n-1}7^j=3\cdot7^n+12(7^n-1)/6=5\cdot7^n-2$. At $n=0$, the formula gives 3, matching the initial condition.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
