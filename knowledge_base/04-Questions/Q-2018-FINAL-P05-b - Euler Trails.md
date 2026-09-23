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

## 中文解析

开放欧拉通路要求恰好两个奇度顶点。按 m 与 n 的四种奇偶情况逐一检查：一奇一偶给熟悉的“偶数那组等于二”，两者都奇则还可能两组各一人，形成单边。

## Detailed Solution

Provenance: derived; independently derived correction; discrepant source material is retained in Source. The Chinese derivation expands the reasoning.

**Answer.** For positive $m,n$: $m=2,n$ odd; $n=2,m$ odd; or $m=n=1$.

**Derivation/proof.** Every vertex in the $m$-part has degree $n$ and every vertex in the $n$-part has degree $m$. Since this graph is connected, it needs exactly two odd vertices. Both even gives zero. If $n$ alone is odd, there are $m$ odd vertices, so $m=2$; the opposite case requires $n=2$. Both odd gives $m+n$ odd vertices, equaling two precisely at $(1,1)$. Directly, $K_{1,1}$ is one edge, an open Euler trail with no circuit.

### 中文解答

**推导。** 对正整数 $m,n$，图连通，左部 $m$ 点度数为 $n$，右部 $n$ 点度数为 $m$。开欧拉迹要求奇度点恰两个：若两参数皆偶，则为零，不合；若仅 $n$ 奇，则奇度点数为 $m$，须 $m=2$；若仅 $m$ 奇，则须 $n=2$；若两者皆奇，则奇度点为 $m+n$，须 $m=n=1$。故答案是 $m=2,n$ 奇，或 $n=2,m$ 奇，或 $(m,n)=(1,1)$。最后的 $K_{1,1}$ 是单边，显然可以走一次且不能形成回路，独立验证了印本遗漏的边界。

## Common Mistakes

- 漏掉 m=n=1。
- 把欧拉通路误要求所有度数为偶数。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Bipartite Graphs - 二分图]]
- [[Euler Degree Method - 欧拉度数方法]]
- [[Graph Proof Method - 图论证明法]]

- Variant / 变式: [[Q-2017-FINAL-P13-c - Euler Trails]] — Both classify open Euler trails in the same family $K_{m,n}$ by counting exactly two odd-degree vertices; the four parity cases in either exam include the easy-to-miss single edge $K_{1,1}$. 两题都对完全二分图按参数奇偶分类，以恰有两个奇度顶点判断开放欧拉通路；两份原答案都漏掉的单边 $K_{1,1}$ 是共同的边界检查。
