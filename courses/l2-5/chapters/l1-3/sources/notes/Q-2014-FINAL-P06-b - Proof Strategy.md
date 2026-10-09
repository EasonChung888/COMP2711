---
id: "Q-2014-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 10
solution_page: [10]
question_number: "6(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The even-product proof needs a complete parity split or contrapositive argument, including the case where both factors are odd."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=10]].

## Question

(b) If $m$ and $n$ are integers such that $mn$ is even, then $m$ is even or $n$ is even.

Shared context: [[STEM-2014-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=10|PDF physical page 10]].

(b) Suppose $m$ and $n$ are both odd. $m=2k+1$ for some integer $k$ and $n=2h+1$ for some integer $h$. Then $mn=(2k+1)(2h+1)=2(2kh+k+h)+1$, which is odd.

## Supplementary Explanation

**Answer.** The statement follows by contraposition.

**Derivation/proof.** Assume $m,n$ are both odd: $m=2k+1$, $n=2h+1$. Then $mn=4kh+2k+2h+1=2(2kh+k+h)+1$, odd. Thus if $mn$ is even, they cannot both be odd, so at least one is even.

The odd representations are $m=2k+1,n=2h+1$ with integer $k,h$.

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
