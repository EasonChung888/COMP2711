---
id: "Q-2019-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The stretched exponential lies between polylogarithms and positive powers of n, while fixed-base exponentials dominate all fixed powers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2019-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=6]]

## Question

(a) Arrange the functions $n^n$, $(\log n)^2$, $n^{1.0001}$, $(1.0001)^n$, $2^{\sqrt{\log n}}$, and $n(\log n)^{1001}$ in asymptotic increasing order, i.e., each function is big-O of the next function.

## 中文解析

两项容易误判：根号对数放在指数中，比任何固定对数幂快，却比任意固定正幂的 n 慢；另外再高的对数固定幂，最终也比 n 的零点零零零一次幂慢。比较的是无限增长趋势，不是小规模数值。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $(\log n)^2,\ 2^{\sqrt{\log n}},\ n(\log n)^{1001},\ n^{1.0001},\ (1.0001)^n,\ n^n$.

**Derivation/proof.** Set $t=\log n$. A power of t is dominated by $2^{\sqrt t}$ since $\sqrt t$ dominates $\log t$, while $2^{\sqrt{\log n}}=n^{o(1)}$ is smaller than n. Also $(\log n)^{1001}=o(n^{0.0001})$, giving $n(\log n)^{1001}=o(n^{1.0001})$. Every fixed polynomial is dominated by the fixed-base exponential $(1.0001)^n$. Finally its ratio to $n^n$ is $(1.0001/n)^n\to0$.

### 中文解答

**推导。** 所求顺序为

$$ (\log n)^2,\quad2^{\sqrt{\log n}},\quad n(\log n)^{1001},\quad n^{1.0001},\quad(1.0001)^n,\quad n^n.$$

令 $t=\log n$。第一对比较取对数，$2\log t=o(\sqrt t)$，所以 $t^2=o(2^{\sqrt t})$。又 $2^{\sqrt{\log n}}=n^{o(1)}=o(n)$，故小于后面的 $n(\log n)^{1001}$。接着 $(\log n)^{1001}=o(n^{0.0001})$，乘 $n$ 即得第三项为第四项的小量。固定幂次 $n^{1.0001}$ 小于固定底数大于一的指数 $(1.0001)^n$。最后 $(1.0001)^n/n^n=(1.0001/n)^n\to0$。每一相邻比值都趋零，故均满足题目的大 O 顺序。

## Common Mistakes

- 看到 1001 就认为对数项永远更大。
- 把 2 的根号 log n 次方误读成 2 乘根号。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
