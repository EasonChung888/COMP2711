---
id: "Q-2024S-FINAL-P01-N"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 1
question_number: "1"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Locate an explicit integer threshold with 2^8>3(8)^2, then connect to the separately imported induction proof."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
related_questions: ["[[Q-2024S-FINAL-P01-proof - Mathematical Induction]]"]
---
# Q-2024S-FINAL-P01-N

## Source

[[2024 Spring Final]]; printed item 1; 3 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1]]

Atomic extraction: Problem 1 combines finding N and an induction proof. The page 1 grading strategy explicitly awards 3 points for a correct N. The proof rubric separately awards 3 points for the base case and 4 for the inductive step; no invented single proof-atom mark is assigned.

## Question

Find an integer $N$ such that $2^n>3n^2$ whenever $n$ is greater than $N$.

## 中文解析

题目要求一个有效阈值而非唯一最小值。先试验相邻幂的数值，找到开始成立的位置，再以对应归纳题证明以后不会失效。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 可取 $N=7$。

**推导。** $2^7=128<147=3\cdot7^2$，而 $2^8=256>192=3\cdot8^2$，因此选阈值 $N=7$，使需证明的起点为 $n=8$。为确认之后都有效，对 $k\ge8$ 有 $2k^2-(k+1)^2=k^2-2k-1>0$；若 $2^k>3k^2$，则 $2^{k+1}>6k^2>3(k+1)^2$。由起点反复应用这一步即可覆盖每个 $n>7$。这里 $N=7$ 是有效选择，任何更大整数也有效。

## Common Mistakes

- 阈值条件是 $n>N$，起点八对应 $N=7$ 而不是八。
- 只试算八不能保证所有更大的整数，必须说明不等式如何持续。

## Connections

- [[Subtopic - Induction - 数学归纳法]]

- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]

Locate an explicit integer threshold with 2^8>3(8)^2, then connect to the separately imported induction proof.

- Used by: [[Q-2024S-FINAL-P01-proof - Mathematical Induction]]: 此结果在后续小题中的具体用途：The selected threshold is $N=7$; therefore the statement to prove is $2^n>3n^2$ for all integers $n\ge8$.
