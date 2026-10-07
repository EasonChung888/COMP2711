---
id: "Q-2016-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "5(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The contrapositive constructs n minus one distinct edges by repeatedly reaching an unvisited vertex."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P05-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=9]]

## Question

(a) Prove by contraposition that if the kid only draws $n-2$ line segments, then the $n$ dots are not all connected.

Shared context: [[STEM-2016-MID-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=9|PDF physical page 9]].

(a) Let $p$ be the kid only draws $n-2$ line segments.

Let $q$ be the $n$ dots are not all connected.

To prove $p\Rightarrow q$ using contraposition, we state $\neg q$ which is “$n$ dots are all conntected”. Since all $n$ dots are connected, each dot must have a least one line segment attached to it. We use a highlighter pen to highlight one arbitrary line segment and the two dots connected by the line segment. Then we highlight another line segment such that it connects one of the “highlighted” dots and one of the “unhighlighted” dots. Thus we will have two line segments and three dots highlighted and $n-3$ dots unhighligthed. The process repeats until all $n$ dots are highlighted. The process is repeatable since every dot is connected. That means there must be some unhighlighted dots connecting with a highlighted dot at any state of the process. After $n$ dots are highlighted, there are $n-1$ line segments highlighted. That implies the kid has drawn at least $n-1$ line segments ($\neg p$).

## Supplementary Explanation

**Answer.** With only $n-2$ segments, the dots cannot all be connected.

**Derivation/proof.** Assume the graph is connected. Start with one highlighted vertex. While fewer than $n$ vertices are highlighted, a path to an unhighlighted vertex has a first edge leaving the highlighted set. Select that edge and its new endpoint. Each step adds one previously unhighlighted vertex using a distinct edge, so reaching all $n$ vertices selects $n-1$ edges. Thus a connected graph cannot have only $n-2$ edges. This proves the contrapositive for the meaningful range $n\ge2$.

For $n=1$, the antecedent of drawing $-1$ segments is impossible, so the statement is vacuous. For $n\ge2$, each chosen crossing edge is new because it reaches a previously unhighlighted vertex.

The construction selects $n-1$ distinct edges, one for each newly reached vertex after the starting vertex.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
