---
id: "Q-2017-MID-P10-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(c)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Reserving five candies in each of four boxes leaves thirty, exposing the printed arithmetic error."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
---
# Q-2017-MID-P10-c

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

Source verification: The printed result is $\binom{35+4-1}{3}$. It incorrectly leaves 35 candies. The corrected answer is independently derived from $50-4\cdot5=30$.

## Question

(c) How many ways can you put the candies in the boxes, assuming that the candies are identical and each box must have at least five candies put into it?

Shared context: [[STEM-2017-MID-P10 - Shared Problem Prompt]].

## 中文解析

四个盒子各保留五颗，一共先用掉二十颗，因此剩下三十颗，而不是三十五颗。把每个盒子的数量减五后得到四个非负整数之和为三十，再用隔板法即可。

## Detailed Solution

Provenance: derived; independently derived correction; discrepant source material is retained in Source. The Chinese derivation expands the reasoning.

**Answer.** $\binom{33}{3}=5456$.

**Derivation/proof.** Write each box count as $x_i=5+y_i$, where $y_i\ge0$. Then $y_1+y_2+y_3+y_4=50-4\cdot5=30$. Stars and bars gives $\binom{30+4-1}{3}=\binom{33}{3}=5456$. Independently, direct enumeration of nonnegative quadruples summing to 30 gives the same 5456; the bijection adds five to each coordinate.

### 中文解答

**推导。** 先在四盒各放五颗，共使用 $4\cdot5=20$ 颗。令 $x_i=5+y_i$，则 $y_i\ge0$ 且 $y_1+y_2+y_3+y_4=50-20=30$；减五与加五建立合法分配和非负整数解的双射。隔板法给出 $\binom{30+4-1}{3}=\binom{33}{3}=33\cdot32\cdot31/6=5456$。独立逐次枚举 $y_1=0,\ldots,30$、$y_2=0,\ldots,30-y_1$、$y_3=0,\ldots,30-y_1-y_2$，第四个由和决定，同样得 $5456$。印本的 $35$ 不是实际剩余数，因此保留为来源错误而不采用。

## Common Mistakes

- 只减十五颗而漏掉一个盒子的保底。
- 把至少五颗误当作恰好五颗。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
