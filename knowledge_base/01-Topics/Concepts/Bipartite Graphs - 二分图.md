---
id: "CON-BIPARTITE"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
prerequisites: ["[[Graph Connectivity - 图连通性]]"]
---
# Bipartite Graphs - 二分图

## Definition｜定义

A graph is bipartite if its vertices can be partitioned into two independent sets; equivalently, every edge joins different colors in a two-coloring. Empty parts are allowed in the standard definition, so the single isolated vertex $K_1$ is bipartite. 二分图要求每条边跨分组，而不是要求每组都有边或顶点。

## Cycle test｜环的判别

Colors alternate along a cycle. An even cycle closes with opposite colors at the endpoints of the last edge; an odd cycle forces equal colors there. Thus a graph is bipartite exactly when it has no odd cycle. 奇环与二着色矛盾；完整判别需要检查各连通分量。

## Complete families｜完全图族

$K_n$ is bipartite exactly for $n=1,2$ (for the convention $n\ge1$), since every $K_n$ with $n\ge3$ contains a triangle. In $K_{m,n}$ each of the $m$ vertices has degree $n$ and each of the $n$ vertices has degree $m$. 完全二分图中，度数等于对面分组大小，不是本组大小。

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-BIPARTITE - Questions]]
