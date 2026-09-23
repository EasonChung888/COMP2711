---
id: "Q-2023F-FINAL-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 14
question_number: "9(a)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Noncrossing Pairings - 不相交配对]]"]
methods: ["[[Split-at-a-Partner Method - 固定伙伴分解法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "The chord from p1 to p5 leaves exactly three people on one side, forcing a crossing in any perfect pairing."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14,15]
marks: 2
---
# Q-2023F-FINAL-P09-a

## Source

[[2023 Fall Final]]; printed item 9(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=15]]

## Question

Is it possible to pair $p_1,p_5$ together for a handshake? Please explain why in at most 3 lines.

Shared printed context: ![[STEM-2023F-FINAL-P09 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

这条弦把 p₂、p₃、p₄ 隔在一侧，三个人不能在侧内全部配成二人组。为了完成 perfect pairing，至少有人要连到另一侧，必然穿过 p₁ 与 p₅ 的弦，因此不允许。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不可能；下面三行给出完整理由。

**推导。**

1. 固定弦 $p_1p_5$ 后，$p_2,p_3,p_4$ 这三人位于同一侧，而合法完整配对不允许留下任何人未握手。
2. 三是奇数，这三人无法全部在该侧两两配完，因此至少一人必须与弦另一侧的人握手。
3. 连接两侧的握手弦必与已固定的 $p_1p_5$ 相交，违反 noncrossing 条件，所以该伙伴选择不可能。

### English solution

**Answer.** No.

**Derivation/proof.** The chord $p_1p_5$ leaves the three people $p_2,p_3,p_4$ on one side. An odd set cannot be perfectly paired internally, so one must pair with someone on the other side. That handshake crosses $p_1p_5$, contradicting legality.

This three-sentence proof uses the full-pairing requirement in the shared prompt; allowing an unmatched person would be a different problem.

## Common Mistakes

- 仅说 p₅ 是奇数而不解释两侧人数无法证明结论。 / Explain the odd-side obstruction.
- 允许一人不握手会违反总共分成 n 对的要求。 / Every person belongs to a pair.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Noncrossing Pairings - 不相交配对]]
- [[Split-at-a-Partner Method - 固定伙伴分解法]]

The chord from p1 to p5 leaves exactly three people on one side, forcing a crossing in any perfect pairing.
