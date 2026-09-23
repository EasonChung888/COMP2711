---
id: "Q-2024F-FINAL-P07-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 19
question_number: "7(2)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Complete CRT modulo 140 from the normalized residues with three independently computed inverse weights."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: ["[[Q-2024F-FINAL-P07-1 - Modular Congruence]]"]
---
# Q-2024F-FINAL-P07-2

## Source

[[2024 Fall Final]]; printed item 7(2). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19]]

Atomic extraction of printed step 2. The page 19 answer stops after normalizing the system and saying CRT can find x; it supplies no CRT computation or final residue. Page 20 is blank. This completion is independently derived; the aggregate 10 marks are not apportioned.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19]]; [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=20]].

Prerequisite context (editorial): [[Q-2024F-FINAL-P07-1 - Modular Congruence]]. Step 1 supplies the equivalent system $x\equiv3\pmod5$, $x\equiv2\pmod4$, $x\equiv2\pmod7$.

## Question

2. Use Chinese Remainder Theorem to find the solution.

Shared printed context: ![[STEM-2024F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

规范化后三个模数两两互素，可构造 CRT 权重。最后必须写出模一百四十的完整解类，并代回带系数的原式验证。

## Detailed Solution

Provenance: independently derived; any supplied answer discrepancy is documented in Source.

### 中文解答

**答案。** $x=58+140t$，$t\in\mathbb Z$。

**推导。** 导入第 1 步的系统 $x\equiv3\pmod5,x\equiv2\pmod4,x\equiv2\pmod7$。取 $M=5\cdot4\cdot7=140$，部分乘积为 $28,35,20$。它们模对应模数的逆元分别为 $2,3,6$：$28\cdot2\equiv1\pmod5$，$35\cdot3\equiv1\pmod4$，$20\cdot6\equiv1\pmod7$。因此 $x\equiv3\cdot28\cdot2+2\cdot35\cdot3+2\cdot20\cdot6=618\equiv58\pmod{140}$。验算 $3\cdot58=174$ 模五余四、模七余六，58 模四余二。由 CRT 唯一性，所有解是 $58+140t$。

## Common Mistakes

- 页十九未实际求出剩余类，不能将本题的 58 称为打印的官方答案。
- 最终周期是三个模数之积一百四十，不是模数之和十六。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Complete CRT modulo 140 from the normalized residues with three independently computed inverse weights.

- Prerequisite: [[Q-2024F-FINAL-P07-1 - Modular Congruence]]: 本题导入此前提/结果以完成当前计算或证明：Step 1 supplies the equivalent system $x\equiv3\pmod5$, $x\equiv2\pmod4$, $x\equiv2\pmod7$.
