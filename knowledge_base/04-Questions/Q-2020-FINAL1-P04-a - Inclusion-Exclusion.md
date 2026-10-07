---
id: "Q-2020-FINAL1-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 3
question_number: "4(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Modular Congruence - 同余]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Inclusion-exclusion must count zero in each divisibility class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 3
---
# Q-2020-FINAL1-P04-a

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

## Question

$n$ is divisible by 2, 3 or 5?

Shared context: [[STEM-2020-FINAL1-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=3|physical PDF page 3]].

Let $f(k)$ be the number of integers $0\le n<1000$ that are divided by $k$, then $f(k)=1+\lfloor999/k\rfloor$. We have $f(2)=500,f(3)=334,f(5)=200,f(6)=167,f(10)=100,f(15)=67$ and $f(30)=34$. By inclusion-exclusion principle, the answer is $f(2)+f(3)+f(5)-f(6)-f(10)-f(15)+f(30)=734$.

## Supplementary Explanation

**Answer.** $734$.

**Derivation/proof.** For d>0 the number of multiples in [0,999] is $f(d)=1+\lfloor999/d\rfloor$, including zero. The counts for 2,3,5 are 500,334,200; pairwise intersections use 6,10,15 and give 167,100,67; the triple uses 30 and gives 34. Inclusion-exclusion yields $500+334+200-167-100-67+34=734$. Zero is counted once after cancellation.

The coefficient of zero in inclusion-exclusion is $3-3+1=1$.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Modular Congruence - 同余]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Modular Arithmetic Method - 模运算方法]]
