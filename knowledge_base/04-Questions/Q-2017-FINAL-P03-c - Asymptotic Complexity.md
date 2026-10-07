---
id: "Q-2017-FINAL-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(c)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Repeated floor division by four reduces the argument geometrically until it is at most one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P03-c

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=5]]

## Question

(c) The number of print statements in the following:

while $n>1$

    print “hello”; $n:=\lfloor n/4\rfloor$

Shared context: [[STEM-2017-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=5|physical PDF page 5]].

$\log n$.

## Supplementary Explanation

**Answer.** $O(\log n)$ (in fact $\Theta(\log n)$).

**Derivation/proof.** After $k$ iterations the value is $\lfloor n/4^k\rfloor$. The loop ends when this is at most one, which occurs after a number of iterations within a constant of $\log_4 n$. Every iteration prints once, so the count is logarithmic; changing the logarithm base only changes a constant factor.

Writing the starting value as $n_0$, the stopping condition $\lfloor n_0/4^k\rfloor\le1$ is equivalent to $n_0/4^k<2$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
