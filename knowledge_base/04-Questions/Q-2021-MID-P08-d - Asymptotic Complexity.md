---
id: "Q-2021-MID-P08-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "8(d)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Changing logarithm bases gives a fixed positive ratio."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2021-MID-P08-d

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

$f(x)=\log_3(x),g(x)=\log_{20}(x)$.

Shared context: [[STEM-2021-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=4|physical PDF page 4]].

> (d) (i)(ii)(iii), $f(x)=\Theta(g(x))$. $\log_{20}(x)=\log_3(x)/\log_3 20$ where $1/\log_3 20$ is a constant.

## Supplementary Explanation

**Answer.** (i), (ii), and (iii).

**Derivation/proof.** For x>1, change of base gives $f(x)=\ln x/\ln3$ and $g(x)=\ln x/\ln20$. Consequently f/g=ln20/ln3 is a fixed positive constant. Taking that constant (or slightly larger/smaller constants) yields both upper and lower bounds, so Θ holds and automatically includes O and Ω.

Precisely, $f(x)/g(x)=\ln20/\ln3=c>0$, so select (i), (ii), and (iii).

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
