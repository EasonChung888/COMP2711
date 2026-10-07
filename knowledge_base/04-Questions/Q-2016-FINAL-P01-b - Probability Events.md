---
id: "Q-2016-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2016
term: "fall"
exam_type: "final"
marks: 2
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Linearity adds the five wheel means even though the token displacement is a sum of distinct spins."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P01-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=3]]

## Question

(b) You are now playing a boardgame. Each time you move your token $x$ steps forward if you spin the wheel and obtain a number $x$. What is the expected number of steps moved if you spin the wheel 5 times?

Shared context: [[STEM-2016-FINAL-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=3|PDF physical page 3]].

(b) $E(5x)=5E(x)=5\frac{2+3+4+5+6+7+8+9+10+11+12}{11}=35$

## Supplementary Explanation

**Answer.** $35$ steps.

**Derivation/proof.** For spin $X_i$, $E[X_i]=(2+3+\cdots+12)/11=7$. The total is $S=X_1+\cdots+X_5$, so $E[S]=\sum_{i=1}^{5}E[X_i]=5\cdot7=35$. Independence is not needed for this use of linearity.

The single-spin sum is $77$, so its expectation is $77/11=7$. The total is a sum of five random variables, rather than five copies of the same realized spin.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
