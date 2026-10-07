---
id: "Q-2023F-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 12
question_number: "8(a)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Algorithm Correctness - 算法正确性]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Strong induction succeeds after grouping a possible ninefold increase with the following digit deletion into a strictly decreasing macro-step."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12,13]
marks: 7
---
# Q-2023F-FINAL-P08-a

## Source

[[2023 Fall Final]]; printed item 8(a); 7 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=12]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=13]]

The printed hints take positive integer starting values; the natural extra start 0 also terminates on deletion. The page-13 rubric says the two-step value should be “less than k”, but the needed and generally true bound is less than k+1 (at start 6 the value becomes 5). The proof states the correct bound while preserving the official termination conclusion.

## Question

For every non-negative integer $n$, $a_{n+1}$ is calculated from $a_n$ with the following rules:

If the rightmost digit of $a_n$ is bigger than 5, then $a_{n+1}=9\times a_n$. Otherwise, we just “remove” the rightmost digit of $a_n$ and the remaining number is $a_{n+1}$. If $a_{n+1}$ does not contain any digits we stop.

As an example, if $a_n=124$ then $a_{n+1}=12$ as $a_n$'s rightmost digit is 4 and we simply remove it from 124 to form 12. Also if $a_n=16$ then $a_{n+1}=9\times16=144$ as $a_n$'s rightmost digit was bigger than 5.

Use strong induction on $a_0$ to prove that this process stops in finitely many steps for any arbitrary $a_0$. Please write a complete induction proof consisting of base case or cases, inductive hypothesis, inductive step and conclusion.

(Hint 1: If this process stops for any $1\le a_0\le k$, can you show it will stop in finitely many steps for $a_0=k+1$ as well?)

(Hint 2: If the rightmost digit of a number $a_n$ is larger than 5, what can we say about the possible values for the rightmost digit of $9\times a_n$?)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=12|physical PDF page 12]].

> (a) We use strong induction on the first element $a_0$. Obviously this process stops in $1$ step if $a_0=1$. Assume that this assumption is correct for all values between $1$ up to $k$. And now we prove it will be also correct for $k+1$.
> If $K+1$ ends with a digit that is smaller or equal than $5$ then we just simply remove that digit and the result number is already smaller than $K+1$ so it will stop after finitely many steps. If $K+1$ ends with a digit that is bigger than $5$, then We get $9(k+1)$ as the next number that definitely ends with a digit smaller than $6$. So for its next step we need to remove the rightmost digit that will give us a number that is again smaller than $k+1$. (because $9(k+1)/10$ is smaller than $k+1$ for sure)

## Supplementary Explanation

**Answer.** The process terminates for every nonnegative integer starting value.

**Derivation/proof.** For the single-digit starts 0 through 5, deletion immediately removes the only digit and terminates. Use strong induction on a positive starting integer N; assume every smaller nonnegative starting value terminates. If N ends in a digit at most 5, deletion either stops immediately or leaves $\lfloor N/10\rfloor<N$, which terminates by the hypothesis. If its last digit is $r\in\{6,7,8,9\}$, the last digit of $9N$ is $10-r\in\{4,3,2,1\}$. The next step therefore deletes that digit and leaves $\lfloor9N/10\rfloor<N$. This smaller value terminates by the induction hypothesis. In both cases only one or two steps precede a terminating smaller instance, proving the result for N and hence for every allowed start.

Base cases $N=0,1,2,3,4,5$ terminate after deleting the only digit. For $N\ge6$, use the induction hypothesis for all smaller nonnegative starting values. If the last digit exceeds five, the two-step value is $\lfloor9N/10\rfloor<N$. Thus the induction step is complete.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Algorithms - 算法]]

- [[Mathematical Induction - 数学归纳法]]
- [[Algorithm Correctness - 算法正确性]]
- [[Induction Proof Method - 归纳证明法]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]

Strong induction succeeds after grouping a possible ninefold increase with the following digit deletion into a strictly decreasing macro-step.
