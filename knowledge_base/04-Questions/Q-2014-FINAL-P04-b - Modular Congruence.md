---
id: "Q-2014-FINAL-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 7
solution_page: [7]
question_number: "4(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The requested proof of incompatibility turns on the shared divisor of thirty and sixteen, not on trialling a few values of x."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P04-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=7]].

## Question

(b) $m=30,n=16,a=5,b=2$.

Shared context: [[STEM-2014-FINAL-P04 - Shared Problem Prompt]].

## 中文解析

非互素模数时先检查相容性。两式相减得到一个偶数必须等于奇数，立刻矛盾，无须错误套用 CRT。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** No solution exists.

**Derivation/proof.** If a solution existed, $x=30q_1+5=16q_2+2$, so $16q_2-30q_1=3$. The left side is even while the right side is odd, a contradiction.

### 中文解答

**推导。** 反设存在满足两式的 x，则有整数 $q_1,q_2$ 使 $x=30q_1+5=16q_2+2$。移项得到 $16q_2-30q_1=3$。左侧每项都是偶数，差仍为偶数；右侧为奇数，矛盾。因此没有整数解，更没有题目指定范围内的解。

## Common Mistakes

- 仍然强行使用互素版本的 CRT。
- 把 $\gcd(30,16)=2$ 忽略。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
