---
id: "Q-2013-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Subtracting the three missing-colour cases is valid because selecting five eggs cannot omit two colours when each colour has only four eggs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P01-b

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=3]].

## Question

(b) What is the answer to (a) if the child must choose at least one egg from each color?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=3|PDF physical page 3]].

(b) The wanted number equals the total number of ways minus the number of ways to choose the eggs from only two of the three colors.

The number of ways to choose 5 eggs from among the red and green eggs is $\binom85$. The numbers for the red-purple and green-purple combination are the same. The three subsets of choice plans are disjoint. So, the answer to the question is:
$$\binom{12}{5}-3\binom85.$$

## Supplementary Explanation

**Answer.** $\binom{12}{5}-3\binom{8}{5}=624$.

**Derivation/proof.** Start with all $\binom{12}{5}$ selections. A bad selection omits red, green, or purple; after one colour is omitted only eight eggs remain. Choosing five eggs cannot omit two colours, so the three bad classes are disjoint and the subtraction is valid.

$\binom85=56$, so the subtraction gives $792-3\cdot56=624$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
