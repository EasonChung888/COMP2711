---
id: "Q-2021-FINAL2-BONUS-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 4
question_number: "Bonus(a)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Random Walk Hitting Times - 随机游走到达时间]]","[[Geometric Distribution - 几何分布]]","[[Graph Connectivity - 图连通性]]"]
methods: ["[[First-Step Expectation Method - 首步期望法]]","[[Random-Variable Method - 随机变量方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Every non-target vertex has the same one-step hitting probability in a complete graph."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
related_questions: ["[[Q-2021-FINAL2-BONUS-b - Random Walk Hitting Times]]"]
---
# Q-2021-FINAL2-BONUS-a

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

## Question

For two given vertices $u$ and $v$ of $G$, what’s the expected number of steps of random walk that begins at $u$ and ends upon first reaching $v$?

Shared context: [[STEM-2021-FINAL2-BONUS - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-2.pdf#page=4|physical PDF page 4]].

> (a) The probability of visiting $v$ at the next step is $p=\frac1{n-1}$ if the current vertex is not $v$. So the answer is $1/p=n-1$.

## Supplementary Explanation

**Answer.** $n-1$ for distinct $u,v$; 0 if the starting vertex already equals the target.

**Derivation/proof.** For n≥2 and current vertex different from v, one of its n−1 equally likely neighbors is v. Thus each nonabsorbed step has success probability 1/(n−1), independent of which non-target vertex was reached. Let h be the expected remaining steps. First-step conditioning gives h=1+((n−2)/(n−1))h, hence h=n−1. If u=v, the first hitting time is already zero before any step.

After $k$ steps the non-hitting probability is $(1-p)^k$, a geometric tail proving finite expectation. Symmetry makes the remaining expectation the same at all non-target vertices. For $n=2$ the next step hits with certainty, giving expectation one.

The boundary case is zero if $u=v$. Otherwise $h=1+\frac{n-2}{n-1}h$, so $h=n-1$.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Graphs - 图论基础]]
- [[Random Walk Hitting Times - 随机游走到达时间]]
- [[Geometric Distribution - 几何分布]]
- [[Graph Connectivity - 图连通性]]
- [[First-Step Expectation Method - 首步期望法]]
- [[Random-Variable Method - 随机变量方法]]
- [[Graph Proof Method - 图论证明法]]

- Used by: [[Q-2021-FINAL2-BONUS-b - Random Walk Hitting Times]]
