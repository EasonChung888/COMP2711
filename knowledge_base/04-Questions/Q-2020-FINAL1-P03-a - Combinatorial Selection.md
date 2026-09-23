---
id: "Q-2020-FINAL1-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 2
question_number: "3(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The printed grid requires six right moves and five up moves."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
related_questions: ["[[Q-2020-FINAL1-P03-b - Combinatorial Selection]]"]
---
# Q-2020-FINAL1-P03-a

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=2]]

## Question

In how many ways you can go to point B?

Shared context: [[STEM-2020-FINAL1-P03 - Shared Problem Prompt]].

## 中文解析

先从图上数清横向六格、纵向五格，总共十一步。每条合法路线只差向上步骤在序列中的位置，选出五个位置即可唯一确定路径；不能把横纵格数当作顶点数。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\binom{11}{5}=462$.

**Derivation/proof.** The figure has six columns and five rows between A and B. Every allowed path therefore has exactly six right steps and five up steps, in an eleven-step sequence. Choosing the five positions for up steps uniquely specifies the path, so there are $\binom{11}{5}$ paths. No other move is permitted.

### 中文解答

**推导。** 源图从 $A$ 到 $B$ 共向右六格、向上五格。任何允许路径都恰有六个 R 和五个 U，一共十一步；反过来每个这样的次序都在矩形格上给唯一合法路径。因此只需从十一位置选五处放 U，其余放 R，得 $\binom{11}{5}=462$。图中 C 不对本小题施加限制。

## Common Mistakes

- 数网格线而非格子，造成多算一步。
- 把右步与上步顺序固定。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL1-P03-b - Combinatorial Selection]]
