---
id: "Q-2025S-FINAL-P07-N"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 10
question_number: "7"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Find the exact pigeonhole threshold and check a worst-case color allocation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 4
related_questions: ["[[Q-2025S-FINAL-P07-sufficient - Counting Principles]]","[[Q-2025S-FINAL-P07-minimal - Counting Principles]]"]
---
# Q-2025S-FINAL-P07-N

## Source

[[2025 Spring Final]]; printed item 7; 4 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Page 10 marking scheme explicitly assigns 4 pts to correct n; the two separate proof obligations each receive 1 pt.

## Question

![[STEM-2025S-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

What is the smallest number of socks that must be selected to guarantee that the selection contains at least 10 pairs?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10|physical PDF page 10]].

First Solution: For any selection, at most one sock of each color will be left unpaired, and this happens if and only if an odd number of socks of that color is selected. Thus 24 socks suffice: at most 4 will be unpaired, leaving at least 20 in pairs. However, 23 will do! Since 23 is not the sum of four odd numbers, at most 3 socks out of 23 will be unpaired. On the other hand, 22 will not do: if the numbers of red, green, blue, and black socks are $5,5,5,7$, then four are unpaired, leaving 9 pairs. Thus 23 is the minimum.

Second Solution: Proceed inductively. If we require only one pair, then it suffices to select 5 socks. Moreover, selecting 4 socks doesn't guarantee a pair since we might select one sock of each color. If we require two pairs, then it suffices to select 7 socks: any set of 7 socks must contain a pair; if we remove this pair, then the remaining 5 socks will contain a second pair as shown above. On the other hand, 6 socks might contain 3 greens, 1 black, 1 red and 1 blue - hence only one pair. Thus 7 socks is the smallest number to guarantee two pairs. Similar reasoning shows that we must draw 9 socks to guarantee 3 pairs, and in general, $2p+3$ socks to guarantee $p$ pairs. This formula is easily proved by mathematical induction. Thus 23 socks are needed to guarantee 10 pairs.

Marking Scheme
- 4 pts for correct n
- 1 pt for argument that n is sufficient
- 1 pt for argument that n-1 is not sufficient
- If n is wrong, 1-2 pts.

## Supplementary Explanation

**Answer.** $n=23$.

**Derivation/proof.** Pair the socks separately by color and let u be the number left over. Each color leaves at most one, so $u\le4$, with u having the same parity as the total. For twenty-three socks, u is odd, hence $u\le3$ and at least $(23-3)/2=10$ pairs exist. However, twenty-two socks may have color counts $(5,5,5,7)$, giving only $2+2+2+3=9$ pairs without exceeding any inventory. Thus twenty-three guarantees the target and twenty-two does not; the minimum is twenty-three.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Find the exact pigeonhole threshold and check a worst-case color allocation.

- Follow-on / contrast: [[Q-2025S-FINAL-P07-sufficient - Counting Principles]]: 对最小数答案给出任意选择都满足的充分性证明。
- Follow-on / contrast: [[Q-2025S-FINAL-P07-minimal - Counting Principles]]: 用少一只的明确颜色分配证明该阈值不能降低。
