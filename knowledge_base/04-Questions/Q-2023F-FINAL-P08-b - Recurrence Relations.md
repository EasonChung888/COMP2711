---
id: "Q-2023F-FINAL-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 12
question_number: "8(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Adding one converts the affine recurrence into a geometric sequence with ratio three and initial value two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12,13]
marks: 4
---
# Q-2023F-FINAL-P08-b

## Source

[[2023 Fall Final]]; printed item 8(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=12]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=13]]

## Question

Calculate the closed form of the following recursive relation:
$$a_0=1,\qquad a_n=3a_{n-1}+2\quad(\text{for }n\ge1).$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=12|physical PDF page 12]].

> (b) $a_0=1\quad b=3\quad c=2$
> $$f_n=1\cdot3^n+2\frac{3^n-1}{3-1}.$$

## Supplementary Explanation

**Answer.** $a_n=2\cdot3^n-1$.

**Derivation/proof.** Define $b_n=a_n+1$. Then $b_n=3a_{n-1}+3=3(a_{n-1}+1)=3b_{n-1}$ and $b_0=2$. Repeated substitution gives $b_n=2\cdot3^n$, hence $a_n=2\cdot3^n-1$. Verify the initial condition: $2\cdot3^0-1=1$. For n≥1, $3(2\cdot3^{n-1}-1)+2=2\cdot3^n-1$, confirming the formula satisfies the given recurrence for every index.

Let $b_n=a_n+1$. Then $b_n=3a_{n-1}+3=3b_{n-1}$ with $b_0=a_0+1=2$. Hence $a_n=2\cdot3^n-1$, and substitution gives $3(2\cdot3^{n-1}-1)+2=2\cdot3^n-1$.

## Connections

- [[Subtopic - Recursion - 递归]]

- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]

Adding one converts the affine recurrence into a geometric sequence with ratio three and initial value two.
