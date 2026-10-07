---
id: "Q-2025S-FINAL-P12-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Separate edges incident to one labeled vertex from unrestricted edges on the other six."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16,17]
marks: 4
---
# Q-2025S-FINAL-P12-b

## Source

[[2025 Spring Final]]; printed item 12(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]] ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=17]]

## Question

(b) [4 pts] How many distinct simple undirected graphs exist on 7 labeled vertices $\{a,b,c,d,e,f,g\}$ such that $\deg(a)\ge4$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16|physical PDF page 16]], [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=17|physical PDF page 17]].

(b) First Solution: There are $2^{21}$ possible graphs in total. Among these, exactly $\binom63\times2^{15}$ graphs satisfy $\deg(a)=3$; the remaining $2^{21}-\binom63\times2^{15}$ graphs are split equally between those with $\deg(a)\ge4$ and those with $\deg(a)\le2$. This symmetry is due to each graph with $\deg(a)\ge4$ has a complement graph with $\deg(a)\le2$. So, the answer to the question is:
$$\frac{2^{21}-\binom63\times2^{15}}2=720896$$
Second Solution: We can count the number of graphs with $\deg(a)=4$, $\deg(a)=5$ and $\deg(a)=6$ directly:
$$\left(\binom64+\binom65+\binom66\right)\cdot2^{15}=720896$$

## Supplementary Explanation

**Answer.** $\bigl(\binom64+\binom65+\binom66\bigr)2^{15}=720896$.

**Derivation/proof.** If $\deg(a)=d$ for $d=4,5,6$, choose its neighbors from the other six vertices in $\binom6d$ ways. This fixes all potential edges incident to a. Among the remaining six vertices there are $\binom62=15$ possible edges, each independently present or absent, yielding $2^{15}$ graphs for each neighbor set. The three degree cases are disjoint, giving $(15+6+1)2^{15}=22\cdot32768=720896$. Vertices are labeled, so distinct neighbor sets or edge sets are distinct graphs without division by isomorphism symmetries.

## Connections

- [[Topic - Graphs - 图论]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Graph Connectivity - 图连通性]]
- [[Combinatorial Selection - 组合选择]]
- [[Graph Proof Method - 图论证明法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Separate edges incident to one labeled vertex from unrestricted edges on the other six.
