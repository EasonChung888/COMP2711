---
id: "Q-2013-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "8"
year: 2013
term: "spring"
exam_type: "midterm"
marks: 12
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["construction"]
difficulty: 3
difficulty_basis: "A bijection turns three nonnegative summands totaling one hundred into one hundred stars and two separators, including empty blocks."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P08

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=13]].

## Question

In how many different ways can we write 100 as the sum of three non-negative integers? In other words, how many lists $x_1x_2x_3$ of three non-negative integers $x_1$, $x_2$ and $x_3$ are there such that $x_1+x_2+x_3=100$?

You might need to use the Bijection principle for this question. Clearly state the two sets involved, and the function between the two sets.

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=13|PDF physical page 13]].

The collection that we need to count is:
$$S=\{x_1x_2x_3\mid\text{the }x_i\ge0\text{'s are integers such that }x_1+x_2+x_3=100\}.$$
This set is difficult to count directly. To get another set that is easy to count, consider arranging 100 balls on one line and dividing the line of balls into three segments by inserting two separators between the balls. Some of the segments might be empty. Let $T$ be the set of all possible ways to place the two separators.

To define a function from $T$ to $S$, consider one particular way to place the two separators. We can get three non-negative integers as follows: Let $x_1$ be the number of balls one the left side of the first separator, $x_2$ be the number of balls between the two separators, and $x_3$ be the number of balls on the right side of the second separator. It is clear that $x_1+x_2+x_3=100$. It is also obvious that the function is a bijection.

To count $T$, consider placing the 100 balls and the two separators on one line. There are totally 102 positions. The two separators can be placed at any two of those positions. Therefore, the size of $T$ is:
$$\binom{102}{2}.$$
Because there is a bijection between $S$ and $T$, the size of $S$ is the same.

## Supplementary Explanation

**Answer.** $\binom{102}{2}=5151$.

**Derivation/proof.** Map a triple to 100 stars separated into blocks of sizes $x_1,x_2,x_3$ by two bars, allowing adjacent bars and end bars. This is a bijection with placements of two bars among 102 positions, hence $\binom{102}{2}$.

Explicitly, $S$ is the set of ordered nonnegative triples of sum $100$, and $T$ is the set of length-$102$ strings with $100$ identical stars and two identical bars. Counting stars in the three blocks inverts the map, proving bijectivity. Thus $|S|=|T|=\binom{102}{2}=5151$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
