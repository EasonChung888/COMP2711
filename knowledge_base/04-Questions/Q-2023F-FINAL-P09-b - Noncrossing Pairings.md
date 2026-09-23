---
id: "Q-2023F-FINAL-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 14
question_number: "9(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Noncrossing Pairings - 不相交配对]]"]
methods: ["[[Split-at-a-Partner Method - 固定伙伴分解法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "A feasible partner index must be even so both circular blocks have even cardinality, and adjacent pairing proves sufficiency."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14,15]
marks: 2
related_questions: ["[[Q-2023F-FINAL-P09-d - Noncrossing Pairings]]"]
---
# Q-2023F-FINAL-P09-b

## Source

[[2023 Fall Final]]; printed item 9(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=15]]

## Question

Assume that you want to first pair $p_1$ with someone. List all potential candidates who can be paired with $p_1$ initially?

Shared printed context: ![[STEM-2023F-FINAL-P09 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

选 pⱼ 后一边剩 j−2 人，另一边剩 2n−j 人；两边都必须能组成二人组，故 j 必须偶数。反过来只要 j 偶数，两边都按相邻的人配对就能构造出合法方案。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 全部候选为 $p_2,p_4,p_6,\ldots,p_{2n}$。

**推导。**

1. 若先把 $p_1$ 与 $p_j$ 配对，固定弦两侧分别剩 $j-2$ 人和 $2n-j$ 人。为了不越过该弦相交，每侧都必须内部完全配对，所以这两个人数都应为偶数，等价于 $j$ 为偶数。
2. 还要证明每个偶数候选确实可行，而不是只给必要条件。对任一偶数 $j$，将两侧各自按圆周顺序相邻两人配成对；每侧人数偶数，全部人都可配完，且相邻弦不会互相交叉，也不会跨越固定弦。
3. 因此所有偶数编号都能实现、所有奇数编号都被排除。端点情形 $j=2$ 或 $j=2n$ 使一侧为空，另一侧照样可相邻配对，故两端也保留在候选表中。

### English solution

**Answer.** $p_2,p_4,p_6,\ldots,p_{2n}$.

**Derivation/proof.** If $p_1$ pairs with $p_j$, the intervening people $p_2,\ldots,p_{j-1}$ number $j-2$, and the other side has $2n-j$ people. A legal complete pairing cannot connect the two sides across the fixed chord, so both counts must be even; this is equivalent to j being even. Conversely, for each even j, pair consecutive people on each side. Those adjacent chords stay in their own sides and do not cross, so every listed candidate is feasible.

## Common Mistakes

- 只证明 j 为偶数必要还不够列出所有可行伙伴。 / Show even indices also suffice.
- p₁ 不能与自己配对，范围从 p₂ 开始。 / Exclude the distinguished person.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Noncrossing Pairings - 不相交配对]]
- [[Split-at-a-Partner Method - 固定伙伴分解法]]

A feasible partner index must be even so both circular blocks have even cardinality, and adjacent pairing proves sufficiency.

- Used by: [[Q-2023F-FINAL-P09-d - Noncrossing Pairings]]: The even partner indices j = 2, 4, …, 2n from (b) are the disjoint cases summed in (d). 固定第一人的偶数编号伙伴决定递推求和范围。
