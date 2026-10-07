---
id: "Q-2015-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(a)"
year: 2015
term: "fall"
exam_type: "final"
marks: 4
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Enumerating squares modulo eleven must remove repeated residues while retaining zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=10]]

## Question

(a) Find all integers in $\mathbb Z_{11}$ that are quadratic residues mod 11.

Shared context: [[STEM-2015-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=10|PDF physical page 10]].

(a) $0\ (y=0),\ 1\ (y=1,10),\ 3\ (y=5,6),\ 4\ (y=2,9),\ 5\ (y=4,7),\ 9\ (y=3,8)$.

(Note on grading: Only the value of $x$ is required.)

## Supplementary Explanation

**Answer.** $\{0,1,3,4,5,9\}$.

**Derivation/proof.** Squaring $y=0,1,2,3,4,5$ gives residues $0,1,4,9,5,3$. The remaining roots $6,7,8,9,10$ are congruent to $-5,-4,-3,-2,-1$ and repeat the same squares. This covers every residue class.

The source definition permits the root zero, so zero belongs in the answer.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
