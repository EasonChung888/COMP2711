---
id: "Q-2023F-FINAL-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 12
question_number: "8(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Adding one converts the affine recurrence into a geometric sequence with ratio three and initial value two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12,13]
marks: 4
---
# Q-2023F-FINAL-P08-b

## Source

[[2023 Fall Final]]; printed item 8(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=12]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=13]]

## Question

Calculate the closed form of the following recursive relation:
$$a_0=1,\qquad a_n=3a_{n-1}+2\quad(\text{for }n\ge1).$$

## 中文解析

右边每次多加二，直接当作纯 geometric sequence 会漏掉非齐次部分。令 bₙ=aₙ+1 后常数项被吸收，得到公比三的递推；解出后再减一并检查初值。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $a_n=2\cdot3^n-1$。

**推导。**

1. 为消去常数项二，定义 $b_n=a_n+1$。代入给定 recurrence，$b_n=3a_{n-1}+3=3(a_{n-1}+1)=3b_{n-1}$，初值则是 $b_0=a_0+1=2$。这已成为公比为三的 geometric progression。
2. 重复代入给出 $b_n=2\cdot3^n$，再减一还原 $a_n$，得到答案。检查 $n=0$ 时 $2\cdot3^0-1=1$，与给定初值一致。
3. 对 $n\ge1$，将公式代回原右侧：$3(2\cdot3^{n-1}-1)+2=2\cdot3^n-1$，也与左侧一致。因此公式同时满足初始条件和每一步递推，不是只根据前几项猜出的规律。

### English solution

**Answer.** $a_n=2\cdot3^n-1$.

**Derivation/proof.** Define $b_n=a_n+1$. Then $b_n=3a_{n-1}+3=3(a_{n-1}+1)=3b_{n-1}$ and $b_0=2$. Repeated substitution gives $b_n=2\cdot3^n$, hence $a_n=2\cdot3^n-1$. Verify the initial condition: $2\cdot3^0-1=1$. For n≥1, $3(2\cdot3^{n-1}-1)+2=2\cdot3^n-1$, confirming the formula satisfies the given recurrence for every index.

## Common Mistakes

- 只写 3ⁿ 会忽略每一步加二。 / Account for the nonhomogeneous term.
- 平移变量后别忘记把最后结果减一。 / Convert back from b to a.

## Connections

- [[Subtopic - Recursion - 递归]]

- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]

Adding one converts the affine recurrence into a geometric sequence with ratio three and initial value two.
