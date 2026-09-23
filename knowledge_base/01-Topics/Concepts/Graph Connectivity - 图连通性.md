---
id: "CON-GRAPH"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
prerequisites: []
---
# Graph Connectivity - 图连通性

## Definition｜定义
A finite undirected graph $G=(V,E)$ is connected if every pair of vertices is joined by a path. A connected component is a maximal set of mutually reachable vertices. 图的连通性表示任意两点间都有路径；连通分量是彼此可达的最大顶点集合。

A connected graph on $n\ge1$ vertices contains a spanning tree with $n-1$ edges, hence has at least $n-1$ edges. A simple cycle through $n\ge3$ vertices has two incident cycle edges at each vertex and exactly $n$ edges. 连通只保证路径存在，并不要求任意两点直接相连；环上各点度数为二。

## Recognition Cues｜识别线索
Translate dots into vertices and segments into edges. Wording such as “all dots connected” asks about paths, whereas a loop through all dots also constrains degrees. 将图画转换成顶点与边，区分“所有点可达”和“经过所有点的一条环”。边是否共线不会改变其端点或连通性。

## Worked-use note｜使用提醒
Grow a reached set from one vertex: connectivity supplies an edge to a new vertex until all are reached. This selects $n-1$ distinct edges. For cycle bounds, count endpoint incidences with $\sum_{v\in V}\deg(v)=2|E|$. 从一个点逐步扩张可构造生成树；数度数时每条无向边贡献两个端点关联，不能只计一次。

In the 2016 Midterm, “loop” means a cycle through the dots, not a graph-theoretic self-loop edge. 本题的 loop 指经过这些点的闭合环，不是同一顶点上的自环。

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-GRAPH - Questions]]
