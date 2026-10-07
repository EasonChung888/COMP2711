---
id: "Q-2019-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 8
solution_page: [8]
question_number: "6(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recursive Structures - 递归结构]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The empty-string base and one appended bit determine the count on every finite bit string."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=8]]

## Question

(a) Give a recursive definition of the function $ones(s)$, which counts the number of ones in a bit string $s$.

Shared context: [[STEM-2019-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=8|physical PDF page 8]].

Let $\lambda$ denote an empty bit string.
$\operatorname{ones}(\lambda)=0$ and $\operatorname{ones}(wx)=x+\operatorname{ones}(w)$, where $w$ is a bit string and $x$ is a bit (viewed as an integer when being added).

## Supplementary Explanation

**Answer.** $\operatorname{ones}(\lambda)=0$; $\operatorname{ones}(wx)=\operatorname{ones}(w)+x$ for a bit $x\in\{0,1\}$.

**Derivation/proof.** The empty string has no ones. Appending a zero leaves the count unchanged, and appending a one increases it by one; interpreting the bit as an integer combines those cases in the given rule. Every nonempty string has a unique shorter prefix w and last bit x, so the recursion terminates and defines exactly one value for each finite string.

There is a unique decomposition of any nonempty bit string into its shorter prefix and its last bit. Removing the final bit reduces the length, and restoring it adds exactly its numerical value to the count of ones, so the recursion is well-defined.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recursive Structures - 递归结构]]
- [[Recursive Construction Method - 递归构造法]]
