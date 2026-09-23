---
id: "Q-2022-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "5(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Infinite zero-two digit sequences inject into the even-digit decimal set without expansion ambiguity."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
related_questions: ["[[Q-2025F-MID-P03-c-vii - Countability]]"]
---
# Q-2022-MID-P05-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

$\{x\in\mathbb R\mid\text{there is a decimal expansion of }x\text{ with only even digits}\}$

Shared context: [[STEM-2022-MID-P05 - Shared Problem Prompt]].

## 中文解析

只用偶数字零和二就已经能编码所有无限二进制串。第一次不同小数位的差大于后面所有位可能补偿的差，因此编码是单射，也避开无限九造成的双表示问题；这足以证明完整集合不可数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Uncountable.

**Derivation/proof.** For every infinite binary sequence b1,b2,… map it to decimal 0.(2b1)(2b2)…. All its digits are 0 or2 and hence even. If two sequences first differ at place k, the leading difference is 2·10^(−k), while the maximum possible tail difference is 2∑_(j>k)10^(−j)=(2/9)10^(−k), smaller. Thus the map is injective. Binary sequences are uncountable by diagonalization, so this subset and hence the source set are uncountable.

### 中文解答

**推导。** 只考察小数位取零或二的子集就足够。对每个无限二进制串 $(b_i)$，定义实数 $x=\sum_{i\ge1}2b_i10^{-i}$，所有十进制位都是偶数。若两串首次在第 $k$ 位不同，首个差的大小是 $2\cdot10^{-k}$，而后续位最多抵消 $2\sum_{j>k}10^{-j}=\tfrac29 10^{-k}$，严格较小，因此所得实数仍不同。这给无限二进制串集合到题目集合的单射。前者由对角论证不可数，故这个子集及整个题目集合均不可数；只用零和二也避开无限九的表示重合。

## Common Mistakes

- 只数有限小数而漏掉无限展开。
- 未经唯一性检查就直接说不同数字串代表不同实数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Contrast / 对比: [[Q-2025F-MID-P03-c-vii - Countability]] — Both classify sets encoded by infinite digit strings. Even-digit decimals retain an independent 0-or-2 choice at every position and are uncountable; exactly three 1s in a binary string leave only three position parameters and form a countable set. 两题都涉及无限位数字串；偶数小数位保留无限次独立选择，因而不可数，而二进制串恰有三个一时只需三个位置参数，因而可数。
