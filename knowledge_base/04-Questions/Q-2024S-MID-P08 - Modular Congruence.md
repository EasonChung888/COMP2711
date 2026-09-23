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

## 中文解析

整数平均数转成前缀和的整除条件。前三项之和被三整除约束最强，先确定前三项集合，再利用四项平均数确定第四项，余下就是答案。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 最后输入 $80$。

**推导。** 五个分数模三分别为 $2,1,2,1,1$。三个数的模三和为零只可能取三个余一或三个余二（混合分别余一或余二）；但余二仅两个，所以前三项集合必为 $\{76,82,91\}$，和为 $249\equiv1\pmod4$。第四项必须模四余三以使前四项和被四整除。余下 $71\equiv3\pmod4$、$80\equiv0\pmod4$，故第四项是 71，末项是 80。可行序列 $76,82,91,71,80$ 的前缀平均数为 $76,79,83,80,80$，均为整数，验证条件一致且答案可实现。

## Common Mistakes

- 总平均数为整数不足以决定顺序，必须用前三与前四项条件。
- 确定前三项集合后还应检查存在前两项平均数为整数的排列。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Use modulo-three uniqueness of the first three scores and modulo-four constraints to determine the final entry.
