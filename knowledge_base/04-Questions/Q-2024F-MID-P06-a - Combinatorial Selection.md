---
id: "Q-2024F-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 11
question_number: "6(a)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count six-digit strictly decreasing strings with the specific leading-zero restriction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 4
related_questions: ["[[Q-2024F-MID-P06-b - Combinatorial Selection]]"]
---
# Q-2024F-MID-P06-a

## Source

[[2024 Fall Midterm]]; printed item 6(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

## Question

(a) Are strictly decreasing (e.g., 864320). Briefly explain why.
Hint: Any six different digits give you a unique number with strictly decreasing digits.

Shared printed context: ![[STEM-2024F-MID-P06 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11|physical PDF page 11]].

> Answer: (a) By choosing any 6 digits from $\{0,1,2,\cdots,9\}$ we can form a unique 6 digit number that its digits is strictly decreasing from left to right. so the answer is $\binom{10}6$.

## Supplementary Explanation

**Answer.** $\binom{10}6=210$.

**Derivation/proof.** Strict decrease requires six distinct digits. Choose them from zero through nine in $\binom{10}6$ ways, then sort them in decreasing order. The largest digit is first; six distinct digits cannot all be zero, so the first digit is nonzero. Conversely, every strictly decreasing six-digit number determines one six-element digit set. Hence the count is $\binom{10}6=210$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count six-digit strictly decreasing strings with the specific leading-zero restriction.

- [[Q-2024F-MID-P06-b - Combinatorial Selection]]: 严格降序允许零位于尾端；严格升序若选零会出现前导零，所以候选数字分别为十种与九种。
