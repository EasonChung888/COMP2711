---
id: "Q-2018-FINAL-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 16
solution_page: [16]
question_number: "11(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "A forbidden-edge path decomposes uniquely into six prefixes to C, the edge, and three suffixes from D."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P11-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=16]]

## Question

b) The line from C to D (the dashed line in the figure below) is missing, so paths cannot pass between C and D?

Shared context: [[STEM-2018-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

经过坏边的路径可唯一拆成到 C、跨过 CD、从 D 到 B 三段。前段两右两上有六种，后段两右一上有三种，中间固定一步，所以坏路径十八种，从全部五十六种中扣除。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 16. The Chinese derivation expands the reasoning.

**Answer.** $56-6\cdot1\cdot3=38$.

**Derivation/proof.** Count paths using the missing edge and subtract. Reaching $C$ requires two right and two up steps, giving $\binom42=6$ prefixes. The step $C\to D$ is forced. From $D$ to $B$, two right and one up step give $\binom32=3$ suffixes. Every forbidden path has this unique decomposition and cannot use the edge twice, so there are 18 forbidden paths. Subtracting from 56 gives 38; a grid dynamic-programming count independently agrees.

### 中文解答

**推导。** 原来共 $56$ 条。经过禁边的路径可唯一分成 $A\to C$、固定一步 $C\to D$、$D\to B$。由图到 $C$ 需两右两上，前缀有 $\binom42=6$；从 $D$ 到 $B$ 需两右一上，后缀有 $\binom32=3$。单调路径不可能重复禁边，因此禁用数恰 $6\cdot1\cdot3=18$。减去后 $56-18=38$，与不允许该格边的动态规划独立计数相同。

## Common Mistakes

- 把通过 C 的所有路径都排除。
- 误读 C 与 D 的高度或相邻方向。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
