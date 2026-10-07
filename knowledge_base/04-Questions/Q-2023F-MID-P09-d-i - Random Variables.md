---
id: "Q-2023F-MID-P09-d-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 19
question_number: "9(d)(i)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "A sum of an even number of ±1 moves has even parity and cannot equal the stopping position +1."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [20]
marks: 1
---
# Q-2023F-MID-P09-d-i

## Source

[[2023 Fall Midterm]]; printed item 9(d)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=20]]

Source discrepancy: the printed sentence says values from ℕ, but it explicitly describes leftward negative moves and assigns probability 1/3 to −1. The PMF and all supplied calculations unambiguously use support {−1,1}; that explicit PMF is retained. Independence between different moves is not stated.

## Question

(i) When $k$ is a positive integer, calculate $P(T=2k)$.

Shared printed context: ![[STEM-2023F-MID-P09 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=20|physical PDF page 20]].

> (d) Denote every right move to be R and every left move to be L. Since the robot will stop once it is in position +1 cm, the last move can only be from 0 to +1 cm. Thus, the last move is R, and before the last move, we need to have the same number of R and L. Denote the subsequence excluding the last move to be sequence S. L is legal if when we read from left to right, we have always encountered at least as many L as R.
>
> (i) Since S has the same number of R and L, the length of S must be even. Adding the last move R, it is impossible for T to be an even number. Thus $P(T=2k)=0$.

## Supplementary Explanation

**Answer.** $P(T=2k)=0$ for every positive integer $k$.

**Derivation/proof.** After t moves, the position is the sum of t numbers each equal to +1 or −1. Both possible increments are congruent to 1 modulo 2, so the position is congruent to t modulo 2. Reaching +1 therefore requires odd t. In particular, no trajectory can first reach +1 at time 2k, and the event is empty. Its probability is zero under any dependence structure of the successive moves.

The event $\{T=2k\}$ is empty, so its probability must be zero. The proof does not use independence between different moves or eventual arrival; trajectories that never arrive cannot create an even hitting time.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Random Variables - 随机变量]]
- [[Counting Principles - 计数原理]]
- [[Probability Calculation Method - 概率计算方法]]

A sum of an even number of ±1 moves has even parity and cannot equal the stopping position +1.
