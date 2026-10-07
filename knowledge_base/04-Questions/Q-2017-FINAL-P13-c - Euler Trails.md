---
id: "Q-2017-FINAL-P13-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 17
solution_page: [17]
question_number: "13(c)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]","[[Bipartite Graphs - 二分图]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification","proof"]
difficulty: 3
difficulty_basis: "Counting odd-degree vertices in all four parameter parity cases reveals the omitted single-edge family."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 3
related_questions: ["[[Q-2018-FINAL-P05-b - Euler Trails]]"]
---
# Q-2017-FINAL-P13-c

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=17]]

Source verification: The published parity answer omits K1,1. The source permits m=n=1; this additional case is independently verified by its single-edge Euler trail.

## Question

(c) Can a complete bipartite graph $K_{m,n}$ have an Euler path but not an Euler circuit? Explain what conditions $m$ and $n$ must satisfy if it is possible.

Shared context: [[STEM-2017-FINAL-P13 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=17|physical PDF page 17]].

For a bipartite graph, the vertices in $U$ all have degree $n$ and the vertices in $V$ all have degree $m$. We know that there exists an Euler path but not an Euler circuit if there are exactly two vertices of odd degree and all other vertices have even degree. For such a scenario to occur, this means that either $m=2$ and $n$ is odd, or $n=2$ and $m$ is odd. So it is possible.

## Supplementary Explanation

**Answer.** Yes: $m=2$ and $n$ odd, or $n=2$ and $m$ odd, or $(m,n)=(1,1)$.

**Derivation/proof.** The graph is connected for $m,n\ge1$. Its $m$ vertices in one part have degree $n$, and its other $n$ vertices have degree $m$. An open Euler trail requires exactly two odd-degree vertices. If both parameters are even, the count is zero. If only $n$ is odd, the count is $m$, requiring $m=2$; symmetrically the other mixed case needs $n=2$. If both are odd, the count is $m+n$, which equals two exactly for $m=n=1$. Checking the single edge independently confirms the final case.

The single-edge graph $K_{1,1}$ has exactly two odd-degree vertices and therefore an Euler trail, supplying the small case omitted by the printed classification.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Bipartite Graphs - 二分图]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]

- Variant / 变式: [[Q-2018-FINAL-P05-b - Euler Trails]] — Both classify open Euler trails in the same family $K_{m,n}$ by counting exactly two odd-degree vertices; the four parity cases in either exam include the easy-to-miss single edge $K_{1,1}$. 两题都对完全二分图按参数奇偶分类，以恰有两个奇度顶点判断开放欧拉通路；两份原答案都漏掉的单边 $K_{1,1}$ 是共同的边界检查。
