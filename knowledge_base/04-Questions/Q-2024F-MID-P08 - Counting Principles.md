---
id: "Q-2024F-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 13
question_number: "8"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Exclude score 14 from the integer range 0 to 15, leaving at most 15 pigeonholes for 16 teams."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 8
---
# Q-2024F-MID-P08

## Source

[[2024 Fall Midterm]]; printed item 8; 8 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=13]]

Page 13 claims: “If a team with 15 points exists, the next team must have at least a loss”, then excludes scores 13 and 14. The schedule does not imply that claim: two teams may never play each other. The printed conclusion is valid, but the proof is corrected with derived provenance by excluding score 14 without a schedule assumption.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=13]].

## Question

Assume 16 teams. Each team plays exactly 5 games. A win gains 3 points, draw gains 1 point and loss gains 0 point. Prove that at least two teams will have the same number of points.

## 中文解析

把可能总积分当作抽屉。无需假设所有队互相交手，只要证明从零到十五的十六个整数里至少一个不可能，十六队就必有重复。

## Detailed Solution

Provenance: independently derived; any supplied answer discrepancy is documented in Source.

### 中文解答

**答案。** 至少两支球队积分相同。

**推导。** 一队的总积分 $s=3w+d$，其中 $w,d,\ell\ge0$ 且 $w+d+\ell=5$，所以 $0\le s\le15$。若 $w\le4$，则 $s=3w+d\le3w+(5-w)=2w+5\le13$；若 $w=5$，则 $d=0$ 且 $s=15$。因此十四分不可能，所有积分只可能落在 $\{0,1,\ldots,13,15\}$，最多十五种。十六支队放入最多十五个积分类别，由 pigeonhole principle 至少两队同分。这个证明不依赖赛程是否相交。

## Common Mistakes

- 某队全胜不能说明任意另一队输过，因为题目未说它们交手。
- 零分也是可能值，按零到十五计数后需要排除不可能的十四。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]

- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Exclude score 14 from the integer range 0 to 15, leaving at most 15 pigeonholes for 16 teams.
