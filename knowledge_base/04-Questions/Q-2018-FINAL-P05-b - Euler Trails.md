---
id: "Q-2018-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 7
solution_page: [7]
question_number: "5(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]","[[Bipartite Graphs - 二分图]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]","[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification","proof"]
difficulty: 3
difficulty_basis: "Exhaustive parity analysis adds the single-edge case absent from the published formula."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: ["[[Q-2017-FINAL-P13-c - Euler Trails]]"]
---
# Q-2018-FINAL-P05-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=7]]

Source verification: The published answer omits m=n=1. The source gives no restriction excluding the single-edge graph, so the corrected classification is independently derived.

## Question

(b) For what values of $m,n$ will a complete bipartite graph $K_{m,n}$ have an Euler path but not an Euler circuit? Explain your answers.

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=7|physical PDF page 7]].

Only when one of $m$ or $n$ is $2$ and the other is odd. In a complete bipartite graph, each of the $m$ vertices have degree $n$ and each of the $n$ vertices have degree $m$, and we must have exactly two vertices of odd degree.

## Supplementary Explanation

**Answer.** For positive $m,n$: $m=2,n$ odd; $n=2,m$ odd; or $m=n=1$.

**Derivation/proof.** Every vertex in the $m$-part has degree $n$ and every vertex in the $n$-part has degree $m$. Since this graph is connected, it needs exactly two odd vertices. Both even gives zero. If $n$ alone is odd, there are $m$ odd vertices, so $m=2$; the opposite case requires $n=2$. Both odd gives $m+n$ odd vertices, equaling two precisely at $(1,1)$. Directly, $K_{1,1}$ is one edge, an open Euler trail with no circuit.

The graph $K_{1,1}$ is a single edge and has an Euler trail. It must be included alongside the larger cases in which the odd-degree count is at most two.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Bipartite Graphs - 二分图]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]

- Variant / 变式: [[Q-2017-FINAL-P13-c - Euler Trails]] — Both classify open Euler trails in the same family $K_{m,n}$ by counting exactly two odd-degree vertices; the four parity cases in either exam include the easy-to-miss single edge $K_{1,1}$. 两题都对完全二分图按参数奇偶分类，以恰有两个奇度顶点判断开放欧拉通路；两份原答案都漏掉的单边 $K_{1,1}$ 是共同的边界检查。
