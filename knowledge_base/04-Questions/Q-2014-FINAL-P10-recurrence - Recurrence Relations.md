---
id: "Q-2014-FINAL-P10-recurrence"
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
question_types: ["construction"]
difficulty: 3
difficulty_basis: "Appending a digit toggles zero parity only for a zero, so the recurrence must count valid and invalid prefixes separately."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P10-recurrence

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=14]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=14]].

## Question

For $n>1$, find a recurrence for $V_n$ by determining how it is related to $V_{n-1}$.

Shared context: [[STEM-2014-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=14|PDF physical page 14]].

A valid length $n$ code can be obtained

- From a valid length $n-1$ code by appending “1”, “2”, $\ldots$, or “9”to the end, or
- From an invalid length $n-1$ code by appending “0” to the end.

The total number of length $n-1$ codes is $10^{n-1}$. Hence the number of invalid length $n-1$ codes is $(10^{n-1}-V_{n-1})$. So, we have
$$V_n=9V_{n-1}+(10^{n-1}-V_{n-1})=8V_{n-1}+10^{n-1}.$$

## Supplementary Explanation

**Answer.** $V_1=9$ and $V_n=8V_{n-1}+10^{n-1}$ for $n>1$.

**Derivation/proof.** Append a nonzero digit (nine choices) to each valid length-$n-1$ string, or append 0 to each invalid one. There are $10^{n-1}-V_{n-1}$ invalid strings, so $V_n=9V_{n-1}+10^{n-1}-V_{n-1}$.

The classes are disjoint and exhaustive: nine nonzero endings contribute $9V_{n-1}$ and a zero ending contributes $10^{n-1}-V_{n-1}$. The initial value is $V_1=9$.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
