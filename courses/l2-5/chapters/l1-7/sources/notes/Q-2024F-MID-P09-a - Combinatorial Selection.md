---
id: "Q-2024F-MID-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 14
question_number: "9(a)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Pair subsets of an odd-sized ground set with complements, proving exactly one member lies below half size."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14]
marks: 7
related_questions: ["[[Q-2024F-MID-P09-b - Binomial Coefficients]]"]
---
# Q-2024F-MID-P09-a

## Source

[[2024 Fall Midterm]]; printed item 9(a); 7 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14]]

## Question

(a) Consider the set $\{1,2,\ldots,2n-1\}$. Show that the number of subsets with at most $n-1$ elements is equal to $\frac{2^{2n-1}}2$.
Hint: Think about the size of any random subset and the size of its complement.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14|physical PDF page 14]].

> Answer: For the first part note that the total number of subsets of $\{1,2,\cdots,2n-1\}$ is $2^{2n-1}$. For each subset with at most $n-1$ elements, there is a complementary subset with $n$ or more elements. Since the total number of subsets is $2^{2n-1}$ and they come in complementary pairs, exactly half, $\frac{2^{2n-1}}2$, have at most $n-1$ elements.

## Supplementary Explanation

**Answer.** $2^{2n-1}/2=2^{2n-2}$.

**Derivation/proof.** Let $U$ have $2n-1$ elements. Pair each subset $A$ with its complement $U\setminus A$; their sizes sum to $2n-1$. If $|A|\le n-1$, the complement has at least $n$ elements, and conversely a subset of size at least $n$ has a complement of size at most $n-1$. Taking the complement twice returns $A$, and no subset equals its complement in a nonempty universe. Thus all $2^{2n-1}$ subsets form disjoint two-element pairs. Each pair contains exactly one small subset, giving half the total.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Pair subsets of an odd-sized ground set with complements, proving exactly one member lies below half size.

- Used by: [[Q-2024F-MID-P09-b - Binomial Coefficients]]: 此结果在后续小题中的具体用途：Part (a) gives exactly $2^{2n-1}/2=2^{2n-2}$ subsets of $\{1,\ldots,2n-1\}$ with at most $n-1$ elements.
