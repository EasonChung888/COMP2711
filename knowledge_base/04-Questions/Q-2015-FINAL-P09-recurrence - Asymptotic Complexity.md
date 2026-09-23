---
id: "Q-2015-FINAL-P09-recurrence"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 15
solution_page: [16]
question_number: "9"
year: 2015
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["modeling"]
difficulty: 2
difficulty_basis: "The multiplication formula contains four half-size recursive products plus a linear combination cost."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P09-recurrence

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=15]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=16]]

## Question

Write a recurrence for $T(n)$,

Shared context: [[STEM-2015-FINAL-P09 - Shared Problem Prompt]].

## 中文解析

公式里有高高、高低、低高、低低四个子乘法，每个输入长度都是原来的一半。将四个子问题时间相加，再加已经给出的线性合并成本，另列单位长度的初值。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 16. The Chinese derivation expands the reasoning.

**Answer.** $T(1)=1$, $T(n)=4T(n/2)+cn$ for powers of two $n>1$.

**Derivation/proof.** Each of the four products in the expansion takes $T(n/2)$ time. Shifts and additions after these results are available cost $cn$ by hypothesis. Therefore their sum is $4T(n/2)+cn$, with the specified direct-multiplication base case.

### 中文解答

**推导。** 二进制高低位展开包含 $A_hB_h,A_hB_l,A_lB_h,A_lB_l$ 四个乘积，每个操作数长度 n/2，所以递归总成本 $4T(n/2)$。四个结果算好后的移位、加法按题给成本 cn 计算，因此 $T(n)=4T(n/2)+cn$，用于二的幂 n>1。直接一位乘法给基础 $T(1)=1$，不能把合并成本再加到基础情形。

## Common Mistakes

- 看到输入被分成两半就只写两个递归调用。
- 把合并成本写成常数，忽略题设的 $cn$。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
