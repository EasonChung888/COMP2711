---
id: "METH-EULER-DEGREE"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Euler Degree Method - 欧拉度数方法

## Procedure｜步骤

1. Resolve which line intersections are vertices using the question's convention and source figure. 图中线条相交不一定自动连接，必须根据来源约定判读。
2. Check that all edges belong to a single connected component. 两个互不相连的环虽然所有度数为偶数，仍没有覆盖两者的欧拉通路。
3. List degrees or describe vertex classes and count odd vertices. 交点度数四不改变奇偶性，末端通常产生奇度顶点。
4. Apply the zero-or-two odd-degree criterion and distinguish an open trail from a circuit. 零个奇点给闭合通路，两个奇点给开放通路，多于两个则都不存在。

## Verification｜复核

The degree sum must equal twice the number of edges. For graph families, check small parameter values as well as parity cases; $K_{1,1}$ is a single edge with two odd endpoints. 只讨论一奇一偶的参数会漏掉两组各一个顶点。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-EULER-DEGREE - Questions]]
