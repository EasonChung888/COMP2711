---
id: "Q-2014-FINAL-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 7
solution_page: [7]
question_number: "4(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The requested proof of incompatibility turns on the shared divisor of thirty and sixteen, not on trialling a few values of x."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P04-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=7]].

## Question

(b) $m=30,n=16,a=5,b=2$.

Shared context: [[STEM-2014-FINAL-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=7|PDF physical page 7]].

(b) Assume there is a solution $x$. Then there exist integers $q_1$ and $q_2$ such that
$$x=q_1\cdot30+5,$$
$$x=q_2\cdot16+2.$$
Hence we have
$$q_2\cdot16-q_1\cdot30=5-2=3.$$
This equation cannot be satisfied because the left hand side is divisible by 2, while the right hand side is not. Therefore, there is no solution.

## Supplementary Explanation

**Answer.** No solution exists.

**Derivation/proof.** If a solution existed, $x=30q_1+5=16q_2+2$, so $16q_2-30q_1=3$. The left side is even while the right side is odd, a contradiction.

The contradiction excludes every integer solution, and therefore every solution in the specified interval.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
