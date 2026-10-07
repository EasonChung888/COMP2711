---
id: "Q-2015-FINAL-P09-recurrence"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 15
solution_page: [16]
question_number: "9"
year: 2015
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["modeling"]
difficulty: 2
difficulty_basis: "The multiplication formula contains four half-size recursive products plus a linear combination cost."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P09-recurrence

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=15]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=16]]

## Question

Write a recurrence for $T(n)$,

Shared context: [[STEM-2015-FINAL-P09 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=16|PDF physical page 16]].

According to the above expression of $A\cdot B$,
$$T(n)=4T(\frac n2)+cn$$

## Supplementary Explanation

**Answer.** $T(1)=1$, $T(n)=4T(n/2)+cn$ for powers of two $n>1$.

**Derivation/proof.** Each of the four products in the expansion takes $T(n/2)$ time. Shifts and additions after these results are available cost $cn$ by hypothesis. Therefore their sum is $4T(n/2)+cn$, with the specified direct-multiplication base case.

The four products are $A_hB_h,A_hB_l,A_lB_h,A_lB_l$. The base $T(1)=1$ is direct multiplication, with no additional combine term.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
