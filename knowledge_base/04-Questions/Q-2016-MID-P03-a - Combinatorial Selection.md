---
id: "Q-2016-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 9
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Double counting a committee with a distinguished member avoids interpreting a fractional n-over-k factor directly."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P03-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=5]]

## Question

(a) Prove the identity above by means of a combinatorial proof.

Shared context: [[STEM-2016-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=5|PDF physical page 5]].

(a) $\binom nk=\frac nk\binom{n-1}{k-1}$ could be re-written as
$$k\binom nk=n\binom{n-1}{k-1}$$
That is,
$$\binom nk\binom k1=\binom n1\binom{n-1}{k-1}$$
Consider $n$ distinct objects.

Suppose that we want to distribute these $n$ distinct objets into 3 distinguishable buckets. The first bucket contains 1 object, the second bucket contains $k-1$ objects, and the third bucket contains the remaining objects (i.e., $n-k$ objects).

The total number of ways of distributing the objects into these 3 buckets can be interpreted in the following two methods.

- The first method is to select $k$ objects out of $n$ objects first and to keep the remaining objects (i.e., $n-k$ objects) in the third bucket. Then, select 1 object out of the selected $k$ objects and place it to the first bucket and keep the remaining objects (i.e., $k-1$ objects) in the second bucket. Here, the total number of ways in this method is $\binom nk\binom k1$.
- The second method is to select 1 object out of $n$ objects first and put it to the first bucket. Then, we select $k-1$ objects out of the remaining objects (i.e., $n-1$ objects) and put it to the second bucket. All remaining objects (i.e., $n-k$ objects) are put to the third bucket. Here, the total number of ways in the second method is $\binom n1\binom{n-1}{k-1}$.

Since the first method has the same physical meaning as the second method, we have
$$\binom nk\binom k1=\binom n1\binom{n-1}{k-1}$$

## Supplementary Explanation

**Answer.** $k\binom nk=n\binom{n-1}{k-1}$, hence the required identity.

**Derivation/proof.** Count pairs $(S,s)$ with $S\subseteq\{1,\ldots,n\}$, $|S|=k$, and $s\in S$. Choosing $S$ then $s$ gives $\binom nk k$. Choosing $s$ first gives $n$ choices and then $\binom{n-1}{k-1}$ choices for the other members. Equate the counts and divide by the positive integer $k$.

The distinguished member, the other selected members, and the unselected objects correspond exactly to the source's three buckets of sizes $1,k-1,n-k$. Since $k>0$, division by $k$ is legitimate.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
