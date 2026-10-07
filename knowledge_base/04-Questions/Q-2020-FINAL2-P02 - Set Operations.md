---
id: "Q-2020-FINAL2-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 2
question_number: "2"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Set Operations - 集合运算]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The union bound on the three absence sets leaves at least forty percent in the intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 5
---
# Q-2020-FINAL2-P02

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=2]]

## Question

Three seminars were held by CSE department last week. 70% of students attended the seminar on Monday, 80% of students attended the seminar on Wednesday, and 90% of students attended the seminar on Friday. Prove that at least 40% of students attended all three seminars.

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=2|physical PDF page 2]].

$U$ - Set of all students;
$A$ - Set of students having attended the seminar on Monday, $\lvert A\rvert=70\%\lvert U\rvert$;
$B$ - Set of students having attended the seminar on Wednesday, $\lvert B\rvert=80\%\lvert U\rvert$;
$C$ - Set of students having attended the seminar on Friday, $\lvert C\rvert=90\%\lvert U\rvert$.
$$\begin{aligned}\lvert A\cap B\cap C\rvert&=\lvert U\rvert-\lvert\overline A\cup\overline B\cup\overline C\rvert\\&\ge\lvert U\rvert-(\lvert\overline A\rvert+\lvert\overline B\rvert+\lvert\overline C\rvert)\\&=\lvert U\rvert-(30\%\lvert U\rvert+20\%\lvert U\rvert+10\%\lvert U\rvert)\\&=40\%\lvert U\rvert.\end{aligned}$$
The inequality uses the fact that $\lvert X\cup Y\cup Z\rvert\le\lvert X\rvert+\lvert Y\rvert+\lvert Z\rvert$.

## Supplementary Explanation

**Answer.** At least $40\%$ attended all three.

**Derivation/proof.** Let U be the students and A,B,C the three attendance sets. Their complements have sizes .3|U|,.2|U|,.1|U|. Anyone not attending all three lies in $\overline A\cup\overline B\cup\overline C$, whose size is at most the sum .6|U|. Therefore $|A\cap B\cap C|=|U|-|\overline A\cup\overline B\cup\overline C|\ge.4|U|$. No independence between attendance events is needed.

The union of the three absence sets has size at most $(0.3+0.2+0.1)|U|=0.6|U|$. Taking its complement yields $|A\cap B\cap C|\ge|U|-0.6|U|=0.4|U|$, so at least forty percent attend all three.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Set Operations - 集合运算]]
- [[Counting Principles - 计数原理]]
- [[Set Identity Method - 集合恒等式方法]]
- [[Counting Method - 计数方法]]
