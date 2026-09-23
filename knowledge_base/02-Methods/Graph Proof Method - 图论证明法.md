---
id: "METH-GRAPH"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Graph Proof Method - 图论证明法

## Applicability｜适用条件
Use for finite undirected graphs when the target concerns reachability, a minimum edge count, or a cycle through specified vertices. Model dots and segments explicitly using [[Graph Connectivity - 图连通性]]. 适用于有限无向图中的连通、最少边数和环；先明确顶点与边各代表什么。

## Procedure｜步骤
1. State the exact route: for a contrapositive assume connectivity; for contradiction assume a connected graph or cycle has fewer edges than claimed. 按题目要求写出逆否假设或反设。
2. For connectivity, begin with one reached vertex. A path to an unreached vertex supplies an edge crossing the reached-set boundary. Add that edge and its new endpoint. 连通性保证能继续加入新点，每次用一条新边。
3. After $n-1$ additions, all $n$ vertices have been reached with $n-1$ distinct edges. Compare this bound with the assumed edge count. 由生成树的边数给出矛盾或下界。
4. For a cycle, instead count incidences: every cycle vertex contributes two, every segment contributes two, so $2n=2m$ for a simple cycle. 数环时使用度数和，明确每条边的两个端点贡献。

## Failure Modes｜常见失误
Having no isolated vertices does not prove connectivity: two disjoint triangles are a counterexample. Merely drawing one example does not prove a bound for all graphs. Do not count the same edge twice during reached-set expansion, and do not confuse a cycle with one self-loop. 无孤立点不代表连通；扩张过程中须解释新边为何存在且未被选过，度数计数时又必须计每条边的两个端点。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-GRAPH - Questions]]
