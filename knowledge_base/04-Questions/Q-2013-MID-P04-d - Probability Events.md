---
id: "Q-2013-MID-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 6
solution_page: [7]
question_number: "4(d)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Eight of sixteen boys must be chosen and assigned bijectively to eight girls; the unchosen boys remain unpaired."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P04-d

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=7]].

## Question

(d) What is the answer for (a) if there are 16 boys and 8 girls. Note that in this case not all boys can have a dance partner.

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=7|PDF physical page 7]].

(d) There are totally 16 boys. Only 8 of them will have dance partners. The number of ways to pick 8 boys from among 16 is $\binom{16}{8}$. Let $b_1,b_2,\ldots,b_8$ be the 8 boys picked. Boy $b_1$ can be paired up with any of the 8 girls; Boy $b_2$ can be paired up any of the remaining 7 girls; and so on. So the answer is:
$$\binom{16}{8}8!.$$
There is another way to solve the problem. Number the girls from 1 to 8. Girl number 1 can be paired up with any of the 16 boys; girl number 2 can then be paired up with with any of the remaining 15 boys; and so on. So the answer is $16\times15\times\ldots\times9=16^{\underline8}$, which is the same as $\binom{16}{8}8!$.

## Supplementary Explanation

**Answer.** $\binom{16}{8}8!=16!/8!$.

**Derivation/proof.** Choose the eight boys who receive partners, then biject them with the eight girls. This is $\binom{16}{8}8!=16\cdot15\cdots9$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
