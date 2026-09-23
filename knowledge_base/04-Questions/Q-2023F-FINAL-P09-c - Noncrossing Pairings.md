---
id: "Q-2023F-FINAL-P09-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 14
question_number: "9(c)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Noncrossing Pairings - 不相交配对]]","[[Recursive Structures - 递归结构]]"]
methods: ["[[Split-at-a-Partner Method - 固定伙伴分解法]]"]
question_types: ["modeling"]
difficulty: 3
difficulty_basis: "A fixed legal chord creates two determined even-sized blocks whose noncrossing pairing counts multiply without a subset-selection factor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14,15]
marks: 5
related_questions: ["[[Q-2023F-FINAL-P09-d - Noncrossing Pairings]]"]
---
# Q-2023F-FINAL-P09-c

## Source

[[2023 Fall Final]]; printed item 9(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=15]]

## Question

Assume $p_1$ is paired with $p_j$ initially. Derive the number of ways to pair up the remaining people in terms of $a_i$.

(Hint: Notice that this handshake will create two separate groups of people on the “left” side and the “right” side of it)

Shared printed context: ![[STEM-2023F-FINAL-P09 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

固定这次握手后，两侧的人选已经由圆周顺序唯一决定，不需要再乘组合数。左侧 j−2 人和右侧 2n−j 人分别形成较小同类问题；任意两边合法配对的组合都合法，因此使用乘法原理。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 偶数 $j$ 时为 $a_{j-2}a_{2n-j}$；奇数 $j$ 时为零。

**推导。**

1. 固定握手 $p_1p_j$ 将其余人分为 $p_2,\ldots,p_{j-1}$ 与 $p_{j+1},\ldots,p_{2n}$，人数分别是 $j-2,2n-j$。跨组握手会穿过固定弦，所以只能在各组内部配对；若 $j$ 奇，两组人数都奇，无法完成，故数量零。
2. 若 $j$ 偶，两侧可分别选择 $a_{j-2}$ 与 $a_{2n-j}$ 个合法 noncrossing pairing。任取一对侧内选择，再加上固定弦，唯一组合成全局合法方案，因为两区域不会产生跨区相交。
3. 反向地，任何含该固定弦的合法全局方案也唯一限制为这两个侧内方案，因此是 bijection。两项必须用 multiplication rule 相乘而非相加；某侧为空时其空配对数按一处理，保持乘积解释。

### English solution

**Answer.** $a_{j-2}a_{2n-j}$ for even $j\in\{2,4,\ldots,2n\}$; zero for odd $j$.

**Derivation/proof.** A chord from $p_1$ to $p_j$ separates $p_2,\ldots,p_{j-1}$ from $p_{j+1},\ldots,p_{2n}$. The groups have sizes $j-2$ and $2n-j$. If j is odd, both are odd and no complete internal pairing exists. For even j, there are $a_{j-2}$ noncrossing pairings in the first group and $a_{2n-j}$ in the second. Any pair of such choices combines with the fixed chord uniquely and introduces no crossings between regions. Conversely, every legal pairing containing the fixed chord restricts to those two choices. This bijection proves the product.

## Common Mistakes

- 两侧组员已确定，不要额外乘二项式系数选人。 / The chord fixes the blocks.
- a 的下标是人数，不是配对数量。 / Keep the original a₂ₙ indexing.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Noncrossing Pairings - 不相交配对]]
- [[Recursive Structures - 递归结构]]
- [[Split-at-a-Partner Method - 固定伙伴分解法]]

A fixed legal chord creates two determined even-sized blocks whose noncrossing pairing counts multiply without a subset-selection factor.

- Used by: [[Q-2023F-FINAL-P09-d - Noncrossing Pairings]]: For each even partner j, (c) supplies the product of the two independent side counts; (d) sums these products with empty-side count one. 两侧独立配对先相乘，再对互斥伙伴选择求和。
