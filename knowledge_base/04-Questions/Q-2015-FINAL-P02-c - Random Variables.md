---
id: "Q-2015-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 5
solution_page: [5]
question_number: "2(c)"
year: 2015
term: "fall"
exam_type: "final"
marks: 2
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Linearity adds the sixty one-minute sale indicators, each with expectation pq."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P02-c

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=5]]

## Question

(c) What is the expectation $E(X)$ of $X$?

There is no need to justify your answers in this problem.

Shared context: [[STEM-2015-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=5|PDF physical page 5]].

This is an independent Bernoulli trials process with success probability $pq$.

(c) $E(X)=60pq$.

## Supplementary Explanation

**Answer.** $E(X)=60pq$.

**Derivation/proof.** Let $I_t$ indicate a sale in minute $t$. Then $X=\sum_{t=1}^{60}I_t$ and $E(I_t)=P(I_t=1)=pq$. Linearity gives $E(X)=\sum_{t=1}^{60}pq=60pq$.

The multiplication formula gives $P(I_t=1)=P(\text{arrival})P(\text{purchase}\mid\text{arrival})=pq$; arrival and purchase need not be independent. The expectation calculation remains valid even if different minutes are dependent. The source solution invokes an independent-trials model for the other parts; that additional assumption is unnecessary here.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
