---
id: "Q-2025F-FINAL-P10-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 17
question_number: "10(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["modeling"]
difficulty: 2
difficulty_basis: "Translate the ordered daily doubling-and-loss process into a recurrence with its initial value."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 2
related_questions: ["[[Q-2025F-FINAL-P10-ii - Recurrence Relations]]","[[Q-2025F-FINAL-P10-iii - Mathematical Induction]]"]
---
# Q-2025F-FINAL-P10-i

## Source

[[2025 Fall Final]]; printed item 10(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

## Question

![[STEM-2025F-FINAL-P10 - Shared Problem Prompt#Shared printed wording]]

(i) [2 points] Write the recurrence relation for $a_n$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17|physical PDF page 17]].

(i) The recurrence relation is
$$a_n=2a_{n-1}-2\quad(n\ge1),\qquad a_0=10.$$

## Supplementary Explanation

**Answer.** $a_0=10$ and $a_n=2a_{n-1}-2$ for $n\ge1$.

**Derivation/proof.** At the end of day $n-1$ there are $a_{n-1}$ legs. On day $n$, each splits into two, giving $2a_{n-1}$ legs; exactly two then fall off. Hence $a_n=2a_{n-1}-2$. This update starts on day one, so $n\ge1$, while the given initial value is $a_0=10$. On the first day, $a_1=20-2=18$, agreeing with the stated order of events.

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]

Translate the ordered daily doubling-and-loss process into a recurrence with its initial value.

- Follow-on / contrast: [[Q-2025F-FINAL-P10-ii - Recurrence Relations]]: 展开每日更新得到显式表达。
- Follow-on / contrast: [[Q-2025F-FINAL-P10-iii - Mathematical Induction]]: 证明步骤使用按题意构建的每日递推。
