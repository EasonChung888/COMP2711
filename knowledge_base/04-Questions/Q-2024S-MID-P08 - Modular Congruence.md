---
id: "Q-2024S-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 11
question_number: "8"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Use modulo-three uniqueness of the first three scores and modulo-four constraints to determine the final entry."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11,12]
marks: 10
---
# Q-2024S-MID-P08

## Source

[[2024 Spring Midterm]]; printed item 8; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=11]] ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=12]]

## Question

The professor gave a mathematics exam to five students. The marks that the five students received (listed in increasing order) were 71, 76, 80, 82, and 91. The professor entered the scores in random order into a spreadsheet, which recalculated the class average after each score was entered. The professor noticed that after each score was entered, the average was always an integer. Based on this information, you need to determine the last score entered by the professor. Justify your answer fully.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=11|physical PDF page 11]].

> Answer.
> We assign variables $a=71,b=76,c=80,d=82,e=91$. Let $x_i$ denote the $i$-th score entered into the spreadsheet, for $1\le i\le5$. We know that $x_1+x_2\equiv0\pmod2$, $x_1+x_2+x_3\equiv0\pmod3$, and $x_1+x_2+x_3+x_4\equiv0\pmod4$. There are several approaches to find the last number.
> Solution 1: First, observe that there are two odd numbers and three even numbers. Since the sum of the first 4 numbers is divisible by 4, it follows that both odd numbers must exist among the first 4 numbers. The sum of these two odd numbers modulo 4 is 2. So the other two even numbers cannot be 76 and 80 (since these are both 0 modulo 4). It follows that the last number has to be either 76 or 80. Now notice that the first two numbers either have to be both odd or both even. But they cannot be both odd because in that case, the sum of first three numbers cannot be divisible by 3 (since the sum of two available odd numbers is divisible by 3 and none of the even numbers is a multiple of 3). So the first two numbers have to be even such that 82 is among them. So in the first three numbers, one is 82, another is an odd number and another is an even number such that each has a remainder 1 mod 3. So the only options will be 76 and 91. So the last number $x_5$ has to be 80.
> Solution 2: There exists an alternative argument that is simpler. The sequence of numbers $a,,b,c,d,e$ modulo 3 is $2,1,2,1,1$. Thus, there is only way to choose 3 numbers out of this set whose sum is $0\pmod3$, namely, by choosing the three numbers $b,d,e$. Next observe that this same sequence of numbers modulo 4 is $3,0,0,2,3$. Note that $b+d+e\pmod4$ is $5\equiv1$. Since the sum of the first 4 numbers is $0\pmod4$, it follows that the 4th number selected must be $a$ (since $a\equiv3\pmod4$). Thus, the last number selected must be $c$, namely 80.

## Supplementary Explanation

**Answer.** The last score is $80$.

**Derivation/proof.** The five residues modulo three are $2,1,2,1,1$. A triple summing to zero modulo three must consist of three ones or three twos; either mixed triple has residue one or two. Only two twos exist, so the first three scores must be $\{76,82,91\}$, with sum $249\equiv1\pmod4$. The fourth score must have residue three modulo four. Of those remaining, $71\equiv3\pmod4$ and $80\equiv0\pmod4$, so the fourth is $71$ and the last is $80$. The sequence $76,82,91,71,80$ has prefix averages $76,79,83,80,80$, all integral, verifying feasibility.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Use modulo-three uniqueness of the first three scores and modulo-four constraints to determine the final entry.
