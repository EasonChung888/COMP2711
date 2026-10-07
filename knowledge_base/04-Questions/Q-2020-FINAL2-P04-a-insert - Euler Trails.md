---
id: "Q-2020-FINAL2-P04-a-insert"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 3
question_number: "4(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Pair the four odd midpoint vertices with two previously absent diagonal edges."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-FINAL2-P04-a-decision - Euler Trails]]"]
---
# Q-2020-FINAL2-P04-a-insert

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=3]]

Prerequisite context (editorial): [[Q-2020-FINAL2-P04-a-decision - Euler Trails]]. The decision item finds no Euler cycle: the connected Figure 1 has exactly four odd vertices E,F,G,H. The insertion question asks to repair that parity obstruction with as few new edges as possible. 前一原子题的否定结果与这四个奇度点确定了本题需要修补的对象。

## Question

(a) Figure 1 — if not, insert the least number of edges so that it has an Euler cycle.

Shared context: [[STEM-2020-FINAL2-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=3|physical PDF page 3]].

It is not an Euler circuit, since $E,H,G,F$ have odd degree.
The official answer drawing adds $HF$ and $EG$.

## Supplementary Explanation

**Answer.** Insert $HF$ and $EG$; the minimum is 2 edges.

**Derivation/proof.** The odd vertices are E,F,G,H. Each inserted edge changes parity at at most two vertices, so at least four divided by two, or two edges, are necessary. HF and EG are absent in the original grid and pair all four odd vertices. After adding them all degrees are even and the graph remains connected, so the Euler criterion proves sufficiency and minimality.

The drawing is transcribed into edge names above; the original figure is on the cited physical page. Each odd midpoint changes from degree three to degree four.

An inserted edge can correct at most two odd degrees, so $4/2=2$ edges are necessary. The chosen pairs each raise their endpoint degrees from three to four and together attain this lower bound.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

- Prerequisite: [[Q-2020-FINAL2-P04-a-decision - Euler Trails]]
