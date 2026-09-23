---
id: "Q-2024F-FINAL-P11-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 27
question_number: "11(c)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Graph Complements - 图的补图]]","[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Combine even degree sum and 2S=n(n−1) then inspect the four residues of n modulo four."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [27]
marks: 3
related_questions: ["[[Q-2024F-FINAL-P11-a - Graph Complements]]","[[Q-2024F-FINAL-P11-b - Graph Complements]]"]
---
# Q-2024F-FINAL-P11-c

## Source

[[2024 Fall Final]]; printed item 11(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P11-a - Graph Complements]]. Part (a) gives that $S=\sum_v\deg_G(v)$ is even.

Prerequisite context (editorial): [[Q-2024F-FINAL-P11-b - Graph Complements]]. Part (b) gives $2S=n(n-1)$ for the self-complementary graph.

## Question

(c) Prove that $n\equiv0\pmod4$ or $n\equiv1\pmod4$.
You can use part (b) as a fact even if you could not solve it.

Shared printed context: ![[STEM-2024F-FINAL-P11 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

把握手定理得到的偶性代入自补图度数等式，推出相邻整数乘积被四整除。相邻两数只一个偶，四的因子必须全部落在这个偶数中。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $n\equiv0$ 或 $1\pmod4$。

**推导。** 由 (a) 导入 S 为偶数，存在整数 e 使 $S=2e$。由 (b) 导入 $n(n-1)=2S=4e$，所以 $4\mid n(n-1)$。如果 n 模四余零或一，该乘积模四为零；若 n 模四余二，则 $n(n-1)\equiv2\cdot1=2$；若余三，则 $n(n-1)\equiv3\cdot2=6\equiv2$。后两类与整除四矛盾，排除后只剩 $n\equiv0$ 或 $1\pmod4$，完成必要条件证明。

## Common Mistakes

- 偶数乘奇数只能保证被二整除，仍须检查是否被四整除。
- 这里证明自补图顶点数的必要条件，不能反过来把它当作任意图自补的充分条件。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Graph Complements - 图的补图]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Combine even degree sum and 2S=n(n−1) then inspect the four residues of n modulo four.

- Prerequisite: [[Q-2024F-FINAL-P11-a - Graph Complements]]: 本题导入此前提/结果以完成当前计算或证明：Part (a) gives that $S=\sum_v\deg_G(v)$ is even.
- Prerequisite: [[Q-2024F-FINAL-P11-b - Graph Complements]]: 本题导入此前提/结果以完成当前计算或证明：Part (b) gives $2S=n(n-1)$ for the self-complementary graph.
