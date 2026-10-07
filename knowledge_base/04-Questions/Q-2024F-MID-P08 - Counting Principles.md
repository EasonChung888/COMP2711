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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=13|physical PDF page 13]].

> Answer: If a team with 15 points exists, the next team must have at least a loss, which means the next possible value for total points is 12 (i.e., 13 and 14 cannot occur). If no team achieves 15, the next maximum is 13 points for team(s) with for 4 wins and a tie (i.e., 14 and 15 cannot occur). In any case, the options for total points is less than 15, while we have 16 teams.

## Supplementary Explanation

**Answer.** At least two teams have equal points.

**Derivation/proof.** A team scores $s=3w+d$, where $w,d,\ell\ge0$ and $w+d+\ell=5$, so $0\le s\le15$. If $w\le4$, then $s\le3w+(5-w)=2w+5\le13$. If $w=5$, then $d=0$ and $s=15$. Therefore fourteen points is impossible, and every score lies in $\{0,1,\ldots,13,15\}$, at most fifteen possibilities. Sixteen teams occupy at most fifteen score classes, so the pigeonhole principle gives two with the same score. The argument does not depend on overlapping schedules.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]

- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Exclude score 14 from the integer range 0 to 15, leaving at most 15 pigeonholes for 16 teams.
