---
id: "Q-2025S-FINAL-P01-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(a)(iii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Functions - 函数]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Construct an explicit bijection by shifting a countable sequence inside two real intervals."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 1
---
# Q-2025S-FINAL-P01-a-iii

## Source

[[2025 Spring Final]]; printed item 1(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

![[STEM-2025S-FINAL-P01-a - Shared Problem Prompt#Shared printed wording]]

(iii) There is a bijection between all the real numbers of $[0,1]$ and all the real numbers of $[0,1)$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2|physical PDF page 2]].

(a) iii) T

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Define $f(1/n)=1/(n+1)$ for $n=1,2,\ldots$, and set $f(x)=x$ for all other $x\in[0,1]$. In particular, 1 goes to 1/2 and 0 stays 0, so the image is contained in $[0,1)$. The shifted reciprocal values are distinct, while unchanged points lie outside that sequence, so no images collide and f is injective. For a target $y=1/m$ with $m\ge2$, the preimage is $1/(m-1)$; every other target is its own preimage. Thus f is surjective and is the required bijection.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Construct an explicit bijection by shifting a countable sequence inside two real intervals.
