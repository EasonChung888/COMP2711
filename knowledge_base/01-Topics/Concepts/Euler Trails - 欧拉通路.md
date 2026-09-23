---
id: "CON-EULER"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
prerequisites: ["[[Graph Connectivity - 图连通性]]"]
---
# Euler Trails - 欧拉通路

## Definition｜定义

An Euler trail uses every edge exactly once. An Euler circuit is a closed Euler trail. The word “Euler path” in these papers uses the trail convention, so vertices may repeat. 欧拉通路限制的是边不能重复；它并不是顶点不重复的简单路径。

## Degree criterion｜度数判据

In an undirected graph whose nonisolated vertices lie in one connected component, an Euler circuit exists exactly when every degree is even. An open Euler trail exists exactly when two vertices have odd degree. 连通性不能漏查。每次进入内部顶点都需离开，所以内部使用的边成对；开放通路的两个端点各剩一条。

## Complete bipartite case｜完全二分图

For $m,n\ge1$, $K_{m,n}$ is connected. The number of odd-degree vertices is $m\,\mathbf1_{n\text{ odd}}+n\,\mathbf1_{m\text{ odd}}$. Exactly two occurs when $m=2$ and $n$ is odd, when $n=2$ and $m$ is odd, or when $m=n=1$. 最后一个单边边界情况也必须计入。

## Connections

- [[Euler Degree Method - 欧拉度数方法]]
- [[Bipartite Graphs - 二分图]]

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-EULER - Questions]]
