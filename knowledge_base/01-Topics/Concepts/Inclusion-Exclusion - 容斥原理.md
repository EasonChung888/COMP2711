---
id: "CON-INCLUSION-EXCLUSION"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
prerequisites: ["[[Counting Principles - 计数原理]]"]
---
# Inclusion-Exclusion - 容斥原理

## Definition｜定义

For finite sets $A_1,\ldots,A_n$,
$$\left|\bigcup_iA_i\right|=\sum_{\varnothing\ne S\subseteq\{1,\ldots,n\}}(-1)^{|S|+1}\left|\bigcap_{i\in S}A_i\right|.$$
The same formula holds with probability in place of cardinality. 容斥将并集写成单集合大小之和，减去两两交集，加回三重交集，依此交替；概率事件同样适用。

## Recognition Cues｜识别线索

Use for overlapping “at least one” events or the complement of “every category appears.” Missing weekdays, unseen brands, and adjacent-family events can occur together. 缺失多个类别或多家同时相邻都可能重叠，不能直接相加或把事件误当独立。

## Worked-use note｜使用提醒

An outcome in exactly $r\ge1$ events receives weight $\sum_{k=1}^r(-1)^{k+1}\binom rk=1$, explaining the correction. If all intersections of size $k$ have probability $p_k$, the union becomes $\sum_{k=1}^n(-1)^{k+1}\binom nk p_k$. 同阶交集确实相等时才能提取组合系数；不需要假设各事件独立。

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-INCLUSION-EXCLUSION - Questions]]
