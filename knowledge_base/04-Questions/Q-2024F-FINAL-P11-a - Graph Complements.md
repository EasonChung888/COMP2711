---
id: "Q-2024F-FINAL-P11-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 27
question_number: "11(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Complements - 图的补图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Apply the handshaking identity to the degree sum S of the supplied undirected graph."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [27]
marks: 1
related_questions: ["[[Q-2024F-FINAL-P11-c - Graph Complements]]"]
---
# Q-2024F-FINAL-P11-a

## Source

[[2024 Fall Final]]; printed item 11(a); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=27]]

## Question

(a) Is $S$ even or odd? No argument is needed.

Shared printed context: ![[STEM-2024F-FINAL-P11 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

每条无向边在度数和中被两个端点各数一次，所以度数和总为偶数。自补性质不是本小题偶性结论的必要条件，但将在下一部分使用。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Even.

**推导。** 令 G 的边集为 E。对所有顶点相加度数时，一条普通无向边在它的两个不同端点各贡献一，总共贡献二；题给补图使用不同顶点的邻接关系，没有自环参与。因此 handshaking identity 为 $S=\sum_{v\in V(G)}\deg_G(v)=2|E(G)|$。边数是整数，故 S 被二整除，即偶数，包含无边时 S=0 的情况。

## Common Mistakes

- “自补”并不意味着每个顶点度数都偶，只有总和必偶。
- 不能只数每条边一次，度数和对无向边计两次。

## Connections

- [[Subtopic - Graphs - 图论基础]]

- [[Graph Complements - 图的补图]]
- [[Graph Proof Method - 图论证明法]]

Apply the handshaking identity to the degree sum S of the supplied undirected graph.

- Used by: [[Q-2024F-FINAL-P11-c - Graph Complements]]: 此结果在后续小题中的具体用途：Part (a) gives that $S=\sum_v\deg_G(v)$ is even.
