---
id: "Q-2025S-FINAL-P07-minimal"
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
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Produce a legal twenty-two-sock counterexample with exactly nine disjoint pairs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 1
related_questions: ["[[Q-2025S-FINAL-P07-N - Counting Principles]]"]
---
# Q-2025S-FINAL-P07-minimal

## Source

[[2025 Spring Final]]; printed item 7; 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P07-N - Counting Principles]]. The threshold from the numerical atom is n=23, so n−1=22.

## Question

![[STEM-2025S-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

while $n-1$ socks are not enough.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10|physical PDF page 10]].

On the other hand, 22 will not do: if the numbers of red, green, blue, and black socks are $5,5,5,7$, then four are unpaired, leaving 9 pairs. Thus 23 is the minimum.

## Supplementary Explanation

**Answer.** Twenty-two socks do not guarantee ten pairs.

**Derivation/proof.** With $n=23$, test $n-1=22$. Choose five red, five green, five blue and seven black socks: $5+5+5+7=22$, within every inventory bound. The maximum disjoint pairs by color are $\lfloor5/2\rfloor=2$, two, two, and $\lfloor7/2\rfloor=3$, giving nine pairs in total. The remaining four socks all have different colors, so no further pair is possible. This valid counterexample disproves sufficiency of twenty-two.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Produce a legal twenty-two-sock counterexample with exactly nine disjoint pairs.

- Prerequisite / related: [[Q-2025S-FINAL-P07-N - Counting Principles]]: 用少一只的明确颜色分配证明该阈值不能降低。 The threshold from the numerical atom is n=23, so n−1=22.
