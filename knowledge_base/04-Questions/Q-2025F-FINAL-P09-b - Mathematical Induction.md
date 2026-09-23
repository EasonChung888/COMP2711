---
id: "Q-2025F-FINAL-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 14
question_number: "9(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Induct on powers of four and use four to the logarithm of three to transform the lower-order term."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [15,16]
verification_status: "verified"
marks: 5
related_questions: ["[[Q-2025F-FINAL-P09-a - Asymptotic Complexity]]"]
---
# Q-2025F-FINAL-P09-b

## Source

[[2025 Fall Final]]; printed item 9(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=14]]

Published official answer with secondary source correction: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=15]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=16]]

Source correction: Page 16 has a stray double minus in the last displayed numerator16n²−−3n^c. The preceding exact expression is256m²−9m^c, and9m^c=3n^c, so the numerator must be16n²−3n^c. The announced induction theorem and page15 closed form already have that single minus, and the complete same-proof substitution is correct. This local transcription typo retains official provenance; it is not a different induction conclusion.

Prerequisite context (editorial): [[Q-2025F-FINAL-P09-a - Asymptotic Complexity]]. $T(n)=3T(n/4)+n^2$, $T(1)=1$, and the candidate $T(n)=(16n^2-3n^{\log_4 3})/13$ for n=4^k.

## Question

(b) [5 points] Prove your result in part (a) using induction.

## 中文解析

归纳变量是幂指数 k，每一步规模从 m 变成 4m，不是 m 加一。

## Detailed Solution

Provenance: published official answer, independently checked; the secondary source slip is retained above.

### 中文解答

**答案。** 对所有 $n=4^k$，$T(n)=(16n^2-3n^{\log_4 3})/13$。

**推导。** 导入 (a) 的递推 $T(n)=3T(n/4)+n^2,T(1)=1$ 与候选闭式，令 $c=\log_4 3$。基础步 $n=1$ 时 $(16-3)/13=1=T(1)$。归纳假设对 $m=4^k$ 有 $T(m)=(16m^2-3m^c)/13$。考察 $n=4m$，代入递推和假设得到 $T(4m)=3(16m^2-3m^c)/13+16m^2=(256m^2-9m^c)/13$。因为 $16n^2=256m^2$，且 $n^c=(4m)^c=4^cm^c=3m^c$，上式就是 $(16n^2-3n^c)/13$。因此归纳完成，前面的负号必须保持单个；若照原答案最后的双负号写，会在基础值即失效。

## Common Mistakes

- 这里的相邻允许规模是四倍，不能假设 n 与 n+1 都在题目定义域中。
- 原答案最后的双减号会把减三次幂变成加号，不能照抄这一排印错误。

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Topic - Algorithms - 算法]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Algorithms - 算法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Induction Proof Method - 归纳证明法]]

Induct on powers of four and use four to the logarithm of three to transform the lower-order term.

- Prerequisite / related: [[Q-2025F-FINAL-P09-a - Asymptotic Complexity]]: 对前项展开得到的闭式在四的幂定义域上进行归纳核验。 $T(n)=3T(n/4)+n^2$, $T(1)=1$, and the candidate $T(n)=(16n^2-3n^{\log_4 3})/13$ for n=4^k.
