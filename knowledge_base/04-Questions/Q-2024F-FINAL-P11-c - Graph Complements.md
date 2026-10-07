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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27|physical PDF page 27]].

> (c) Note that $n(n-1)=2S$ and $S$ is even. So $4\mid(n)(n-1)$. Also note that between $n$ and $n-1$ one is odd and one is even. So either $4\mid n$ or $4\mid n-1$.

## Supplementary Explanation

**Answer.** $n\equiv0$ or $1\pmod4$.

**Derivation/proof.** By (a), $S$ is even, so $S=2e$ for an integer $e$. By (b), $n(n-1)=2S=4e$, hence $4\mid n(n-1)$. Residues zero and one for $n$ give product zero modulo four. If $n$ has residue two, then $n(n-1)\equiv2\cdot1=2$. If it has residue three, then $n(n-1)\equiv3\cdot2=6\equiv2$. The last two cases contradict divisibility by four, leaving only residues zero and one. This proves the necessary condition.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Graph Complements - 图的补图]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Combine even degree sum and 2S=n(n−1) then inspect the four residues of n modulo four.

- Prerequisite: [[Q-2024F-FINAL-P11-a - Graph Complements]]: 本题导入此前提/结果以完成当前计算或证明：Part (a) gives that $S=\sum_v\deg_G(v)$ is even.
- Prerequisite: [[Q-2024F-FINAL-P11-b - Graph Complements]]: 本题导入此前提/结果以完成当前计算或证明：Part (b) gives $2S=n(n-1)$ for the self-complementary graph.
