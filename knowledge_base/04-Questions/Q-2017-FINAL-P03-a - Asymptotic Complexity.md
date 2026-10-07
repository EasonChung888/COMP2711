---
id: "Q-2017-FINAL-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Counting Method - 计数方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Fixing the final bit leaves n minus one free bits, each requiring one constant-time print."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P03-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=5]]

## Question

(a) An algorithm that prints all bit strings of length n that end with 1.

Shared context: [[STEM-2017-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=5|physical PDF page 5]].

$2^n$.

## Supplementary Explanation

**Answer.** $O(2^n)$ (in fact $\Theta(2^n)$).

**Derivation/proof.** The last bit is fixed and the other $n-1$ bits have two choices each, so $2^{n-1}$ strings must be printed. Under the stipulated constant cost per string, this output work is $\Theta(2^{n-1})=\Theta(2^n)$; enumeration with constant amortized work per output attains it.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Counting Principles - 计数原理]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Counting Method - 计数方法]]
