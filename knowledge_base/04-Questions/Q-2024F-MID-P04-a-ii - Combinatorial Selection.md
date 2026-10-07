---
id: "Q-2024F-MID-P04-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 8
question_number: "4(a)(ii)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count grid paths for restriction 4(a)(ii) with six right moves, four up moves and fixed edge C(5,1)→D(5,2)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 2
related_questions: ["[[Q-2024F-MID-P04-a-iii - Combinatorial Selection]]"]
---
# Q-2024F-MID-P04-a-ii

## Source

[[2024 Fall Midterm]]; printed item 4(a)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9]]

## Question

(ii) You have to pass from CD edge. No explanation is needed.

Shared printed context: ![[STEM-2024F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9|physical PDF page 9]].

> (ii) $\binom61\cdot\binom31$

## Supplementary Explanation

**Answer.** $\binom61\binom31=18$.

**Derivation/proof.** Taking $A=(0,0)$, the diagram gives $C=(5,1)$, $D=(5,2)$ and $B=(6,4)$. A path through $CD$ splits uniquely into $A$ to $C$, the fixed upward edge $CD$, and $D$ to $B$. The first segment has five right moves and one up, giving $\binom61=6$ choices. The last has one right and two up, giving $\binom31=3$ choices. The edge has one choice, so multiplication gives $6\cdot1\cdot3=18$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count grid paths for restriction 4(a)(ii) with six right moves, four up moves and fixed edge C(5,1)→D(5,2).

- [[Q-2024F-MID-P04-a-iii - Combinatorial Selection]]: 固定边 CD 的经过路径与避开路径构成全部单调路径的互补两类，可互相检验计数。
