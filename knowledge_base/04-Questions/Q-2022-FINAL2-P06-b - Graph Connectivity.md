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

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=4|physical PDF page 4]].

> (b) For connected component $C_i$, the maximum number of edges is $\binom{v_i}{2}$, forming a complete graph.
>
> The maximum of $X$ is attained when all components take the maximal value at the same time.
>
> $$\max(X)=\sum_{i=1}^m\max(C_i)=\sum_{i=1}^m\binom{v_i}{2}.$$

## Supplementary Explanation

**Answer.** $\displaystyle\sum_{i=1}^{m}\binom{v_i}{2}$.

**Derivation/proof.** No edge joins distinct components. Within the simple component Ci, at most one edge can occur for each unordered pair of its vi vertices, giving at most C(vi,2) edges. Summing these disjoint edge sets bounds X by the displayed value. Attain it by making every component a complete graph K_(vi), which is connected for vi≥1 and creates no cross edges. Hence this is the exact maximum for the supplied component sizes, not a further optimization over those sizes.

The bound is $X\le\sum_{i=1}^m\binom{v_i}{2}$. Complete each component to $K_{v_i}$, including singletons, to attain it. The given sizes cannot be reallocated. The printed answer itself uses a summation despite the paper’s general no-summation instruction; that source formatting inconsistency does not change the extremal value.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Graph Connectivity - 图连通性]]
- [[Combinatorial Selection - 组合选择]]
- [[Graph Proof Method - 图论证明法]]
- [[Combinatorial Case Analysis - 组合分类法]]
