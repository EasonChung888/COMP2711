---
id: "Q-2018-MID-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Counting - 计数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Functions - 函数]]","[[Counting Principles - 计数原理]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Lossless decoding forces injectivity but shrinking all files maps 2^(n+1)-1 strings into only 2^n-1 shorter strings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P04-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

Source verification: The printed proof ends with $|T|\ge|F_{n-1}|$; injectivity actually requires $|T|\ge|F_n|$. The conclusion is unchanged.

Source correction: PDF page6 defines the compression domain as F_n and its image T⊆F_(n−1), but the final injectivity line prints |T|≥|F_(n−1)|. The cited part(a) requires |T|≥|F_n|, contradicting |T|<|F_n|. The official impossibility conclusion and pigeonhole method remain unchanged; this subscript is corrected.

## Question

(c) Consider a lossless data compression algorithm, like zip or rar: compressed files can always be de-compressed to obtain the original files. Prove that it is impossible for a lossless data compression algorithm to reduce the size of every file. (Hint: Use (a), and prove by contradiction on the set of all files of size n bits or less.)

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=6|physical PDF page 6]].

By contradiction, consider such a function $f$ defined on $F_n\to T$, where $F_n$ is the set of all files of size $n$ bits or less. As $f$ reduces the sizes of all files, $T$ satisfies $T\subseteq F_{n-1}$, the size of all files of size $n-1$ bits or less. Clearly $F_{n-1}\subset F_n$, so $\lvert T\rvert<\lvert F_n\rvert$. However, since $f$ is invertible, $f$ must be injective. Therefore, using (a), we have $\lvert T\rvert\ge\lvert F_{n-1}\rvert$. This is a contradiction.

## Supplementary Explanation

**Answer.** No lossless compressor can shorten every file.

**Derivation/proof.** Let $F_n$ contain all bit strings of length at most $n$, including the empty string. Then $|F_n|=\sum_{i=0}^n2^i=2^{n+1}-1$, whereas $|F_{n-1}|=2^n-1$. If every input became shorter, compression would map $F_n$ into $F_{n-1}$. Lossless decoding implies injectivity: equal compressed outputs must decode to equal inputs. This contradicts pigeonhole principle because $|F_n|>|F_{n-1}|$.

More explicitly, $|T|\le2^n-1<2^{n+1}-1=|F_n|$, while lossless decoding requires $|T|\ge|F_n|$.

A decoder must reconstruct every original string from its compressed representation. Thus two distinct inputs cannot share one output; injectivity and the pigeonhole principle supply the cardinality obstruction.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
- [[Counting Method - 计数方法]]
