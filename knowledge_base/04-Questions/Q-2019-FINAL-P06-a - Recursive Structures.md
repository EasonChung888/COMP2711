---
id: "Q-2019-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 8
solution_page: [8]
question_number: "6(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recursive Structures - 递归结构]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The empty-string base and one appended bit determine the count on every finite bit string."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=8]]

## Question

(a) Give a recursive definition of the function $ones(s)$, which counts the number of ones in a bit string $s$.

Shared context: [[STEM-2019-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

递归定义必须先说明空串的值。非空串可唯一拆成前缀和末位，末位零不增加计数，末位一增加一；把位当整数相加就能统一两种规则，并且前缀变短保证终止。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $\operatorname{ones}(\lambda)=0$; $\operatorname{ones}(wx)=\operatorname{ones}(w)+x$ for a bit $x\in\{0,1\}$.

**Derivation/proof.** The empty string has no ones. Appending a zero leaves the count unchanged, and appending a one increases it by one; interpreting the bit as an integer combines those cases in the given rule. Every nonempty string has a unique shorter prefix w and last bit x, so the recursion terminates and defines exactly one value for each finite string.

### 中文解答

**推导。** 令 $\lambda$ 为空串，基例定义 $\operatorname{ones}(\lambda)=0$。若 $w$ 为位串、$x\in\{0,1\}$ 是最后一位，把 $x$ 当整数，定义 $\operatorname{ones}(wx)=\operatorname{ones}(w)+x$。追加 $0$ 不增加一的个数，追加 $1$ 恰增加一个，因此规则符合计数含义。每个非空有限位串都唯一分解成较短前缀与末位，递归最终到空串，所以定义对每个位串完备且唯一。

## Common Mistakes

- 省略空串基例。
- 把字符串拼接误当数字加法。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recursive Structures - 递归结构]]
- [[Recursive Construction Method - 递归构造法]]
