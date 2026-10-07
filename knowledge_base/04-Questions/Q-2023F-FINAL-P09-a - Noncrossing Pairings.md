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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=14|physical PDF page 14]].

> (a) No, because then on their right side they have $\{p_2,p_3,p_4\}$ which one of them has be paired with someone from the other side and this cause cross arm.

## Supplementary Explanation

**Answer.** No.

**Derivation/proof.** The chord $p_1p_5$ leaves the three people $p_2,p_3,p_4$ on one side. An odd set cannot be perfectly paired internally, so one must pair with someone on the other side. That handshake crosses $p_1p_5$, contradicting legality.

This three-sentence proof uses the full-pairing requirement in the shared prompt; allowing an unmatched person would be a different problem.

The side containing $p_2,p_3,p_4$ cannot be internally paired because three is odd. A pairing to the other side violates the noncrossing condition.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Noncrossing Pairings - 不相交配对]]
- [[Split-at-a-Partner Method - 固定伙伴分解法]]

The chord from p1 to p5 leaves exactly three people on one side, forcing a crossing in any perfect pairing.
