---
id: "CON-GRAPH-COMPLEMENTS"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
prerequisites: ["[[Set Operations - 集合运算]]"]
---
# Graph Complements - 图的补图

## Definition｜定义

For a finite simple undirected graph $G=(V,E)$, its complement $\overline G$ has the same vertices and exactly the missing unordered pairs of distinct vertices as edges. 补图保留顶点，在每对不同顶点之间交换有边与无边。它不增加自环，也不复制已有边。

For every vertex $v$, $\deg_G(v)+\deg_{\overline G}(v)=|V|-1$. Summing and applying the handshaking identity gives $|E(G)|+|E(\overline G)|=\binom{|V|}2$. 每个其他顶点恰在两图中的一图与 v 相邻，因此两个度数之和固定；度数总和分别是各自边数的两倍。

## Self-complementarity｜自补性

A graph is self-complementary when it is isomorphic to its complement. Isomorphism may relabel vertices; it need not preserve the degree of the same named vertex across the two graphs. 自补表示存在重命名顶点的邻接保持双射，不表示同名顶点的邻居或度数在两图相同。

If $n=|V|$ and $S=\sum_v\deg_G(v)$, self-complementarity gives equal edge counts, hence equal degree sums. Therefore $2S=n(n-1)$. Since $S=2|E(G)|$ is even, $4\mid n(n-1)$, so $n\equiv0$ or $1\pmod4$. 这是自补图的必要顶点数条件；不能据此断言任意满足顶点数条件的图都是自补图。

## Worked example｜例子

On vertices $a,b,c,d$, take $E=\{ab,bc,cd\}$, a four-vertex path. The complement edges are $\{ac,ad,bd\}$, another path in the order $c,a,d,b$. The mapping $a\mapsto c,b\mapsto a,c\mapsto d,d\mapsto b$ sends all three original edges to the complement edges. 原图与补图各有三条边、度数和六，且 $2S=12=4\cdot3$。例子展示了重命名的重要性：两幅图的边集不同，但邻接结构同构。

## Connections

- [[Subtopic - Graphs - 图论基础]]：官方 Graphs 范围中的度数、补图与同构。
- [[Graph Proof Method - 图论证明法]]：分别按边与顶点数同一个关联集合。
- [[Modular Congruence - 同余]]：把度数和的偶性转换成模四的必要条件。

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-GRAPH-COMPLEMENTS - Questions]]
