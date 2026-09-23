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

## 中文解析

无损表示压缩后必须能唯一恢复，因此两个不同文件不能压成同一结果。若所有文件都缩短，长度至多 n 的全部文件会映入长度至多 n 减一的较小集合，必然产生碰撞，与唯一恢复矛盾。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** No lossless compressor can shorten every file.

**Derivation/proof.** Let $F_n$ contain all bit strings of length at most $n$, including the empty string. Then $|F_n|=\sum_{i=0}^n2^i=2^{n+1}-1$, whereas $|F_{n-1}|=2^n-1$. If every input became shorter, compression would map $F_n$ into $F_{n-1}$. Lossless decoding implies injectivity: equal compressed outputs must decode to equal inputs. This contradicts pigeonhole principle because $|F_n|>|F_{n-1}|$.

### 中文解答

**推导。** 反设压缩器能把每个文件严格缩短。取所有长度至多 $n$ 的二进制串集合 $F_n$，则 $|F_n|=\sum_{i=0}^n2^i=2^{n+1}-1$。缩短后像集 $T$ 必在 $F_{n-1}$ 内，因此 $|T|\le2^n-1<2^{n+1}-1=|F_n|$。无损意味着有确定解码器；若两输入输出相同，解码会给同一原文，所以压缩映射必须单射。由(a)单射须 $|T|\ge|F_n|$，与严格较小相矛盾。因此不可能对每个文件都缩短。印本末行的 $F_{n-1}$ 应为定义域 $F_n$，才构成该矛盾。

## Common Mistakes

- 只考虑通常可压缩的文件而非所有文件。
- 沿用印刷解末行错误的下标而未得到矛盾。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Functions - 函数]]
- [[Counting Principles - 计数原理]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
- [[Counting Method - 计数方法]]
