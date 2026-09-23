---
id: "Q-2020-FINAL2-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Fixing nine digits forces the last unused digit into its own remaining position."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
related_questions: ["[[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]"]
---
# Q-2020-FINAL2-P06-b

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

## Question

There are exactly nine $i$’s such that $A[i]=i$.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## 中文解析

九位固定后，唯一剩下的数字正好等于唯一剩下的位置编号，因此第十位也必定固定。置换不能只移动一个元素；题目要求恰好九个固定点，所以数量为零。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $0$.

**Derivation/proof.** If nine positions contain their own digits, exactly one digit and one position remain unused. Because all other digits are already at their matching positions, the remaining digit is the label of that remaining position. It too must be fixed, producing ten fixed points rather than exactly nine. Hence no such permutation exists.

### 中文解答

**推导。** 假设已有九个固定点，这九个数字都占据各自同名位置。只剩一个空位置 $j$ 和一个未用数字，后者只能是 $j$，因为其他数字已经全部使用。于是第十个位置也固定，实际固定点为十个而不是九个，矛盾。因此没有任何满足“恰九个”的排列，答案为 $0$。

## Common Mistakes

- 用十种选择剩余位置作为答案。
- 把“恰好九个”误读为“至少九个”。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]
