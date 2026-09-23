---
id: "Q-2022-FINAL2-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 3
question_number: "6(b)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Each fixed-size component is made complete, and edges cannot cross components."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 4
---
# Q-2022-FINAL2-P06-b

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=4]]

Source verification: The published item-specific answer itself uses a summation, despite the paper-wide no-summation note. The mathematical maximum depends on the supplied component sizes; the source answer is retained with this explicit formatting discrepancy.

## Question

If $G$ has exactly $m$ connected components $C_1,C_2,\ldots,C_m$, where $C_i$ is a connected component with $v_i$ vertices, what is the maximum possible value of $X$?

Shared context: [[STEM-2022-FINAL2-P06 - Shared Problem Prompt]].

## 中文解析

已给每个分量的顶点数，因此分别把分量补成完全图就达到最大边数。不同分量之间不能连边，否则分量数会变化；每个分量贡献 v_i 选二，合起来就是所求，不能擅自把顶点重新分配。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\displaystyle\sum_{i=1}^{m}\binom{v_i}{2}$.

**Derivation/proof.** No edge joins distinct components. Within the simple component Ci, at most one edge can occur for each unordered pair of its vi vertices, giving at most C(vi,2) edges. Summing these disjoint edge sets bounds X by the displayed value. Attain it by making every component a complete graph K_(vi), which is connected for vi≥1 and creates no cross edges. Hence this is the exact maximum for the supplied component sizes, not a further optimization over those sizes.

### 中文解答

**推导。** 分量之间没有边，否则它们会合为一个连通分量。在大小 $v_i$ 的简单分量内，每个无序顶点对至多一条边，故最多 $\binom{v_i}{2}$ 条。各分量边集不相交，合计上界 $X\le\sum_{i=1}^m\binom{v_i}{2}$。把每个分量补成完全图 $K_{v_i}$，且不加跨分量边，就同时达到所有局部上界；每个 $v_i\ge1$ 的完全图仍连通，单顶点也成立。因此最大值正是 $\sum_{i=1}^m\binom{v_i}{2}$。这里 $v_i$ 已给定，不能另外重分配顶点来优化分量大小。源官方答案本身使用此求和式，尽管一般试卷说明不许求和；这是源的格式不一致，不改变该极值结论。

## Common Mistakes

- 再优化 v_i 分配，回答另一个问题。
- 在分量间加边而破坏恰有 m 个分量。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Graph Connectivity - 图连通性]]
- [[Combinatorial Selection - 组合选择]]
- [[Graph Proof Method - 图论证明法]]
- [[Combinatorial Case Analysis - 组合分类法]]
