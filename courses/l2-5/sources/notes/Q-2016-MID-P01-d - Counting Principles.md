---
id: "Q-2016-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(d)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The two possible alternating category patterns have different counts of digit and letter positions and must be added."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P01-d

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

## Question

(d) How many possible order id’s are there if the order id is alternative between alphabet and digit? (E.g., A3R4B7Q and 4V7X3V7 are valid, B7XB4Q3 is invalid)

Shared context: [[STEM-2016-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=3|PDF physical page 3]].

(d) $10^4\cdot26^3+10^3\cdot26^4$. It can either be four digits and three alphabets or three digits and four alphabets. The position of digits and alphabets are fixed in either case.

## Supplementary Explanation

**Answer.** $26^4 10^3+10^4 26^3$.

**Derivation/proof.** Pattern L-D-L-D-L-D-L gives $26^4 10^3$ possibilities; pattern D-L-D-L-D-L-D gives $10^4 26^3$. Repetition within a category is allowed. The patterns cannot overlap, so add the two counts.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
