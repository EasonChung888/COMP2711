---
id: "Q-2018-FINAL-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 13
solution_page: [13]
question_number: "9(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Inclusion-Exclusion - 容斥原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Counting nonunits modulo 70 requires three prime-divisor sets and includes zero in every intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P09-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=13]]

Source verification: The printed union size 36 is an arithmetic error: 35+14+10-7-5-2+1=46. Its final answer 24 is correct and preserved.

Source correction: PDF page13 prints 10+14+35−2−5−7+1=36 and then70−36=24. The inclusion-exclusion sum is46, and70−46=24. The official final count24 and the displayed set counts/method are correct; the intermediate36 is an arithmetic typo.

## Question

(a) How many elements in $\mathbb Z_{70}$ have multiplicative inverses? Explain your answer.

## 中文解析

可逆当且仅当与七十互质。把二、五、七的倍数作为坏集合，用容斥得到四十六个不可逆元素，再从七十中扣除。来源中间算成三十六是算术笔误，其最终二十四的答案才正确。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $24$.

**Derivation/proof.** An element is invertible exactly when coprime to $70=2\cdot5\cdot7$. Among residues 0 through 69, counts of multiples of 2,5,7 are 35,14,10; pairwise intersections have sizes 7,5,2 and the triple intersection has size 1. Thus nonunits number $35+14+10-7-5-2+1=46$, and units number $70-46=24$. The independent totient product $70(1-1/2)(1-1/5)(1-1/7)=24$ agrees.

### 中文解答

**推导。** 模 $70=2\cdot5\cdot7$ 的元素可逆当且仅当与模数互素。在 $0,\ldots,69$ 中，$2,5,7$ 倍数各有 $35,14,10$ 个；两两交集即 $10,14,35$ 倍数，各 $7,5,2$ 个；三重交集只有零，共一。故不可逆者数 $35+14+10-7-5-2+1=46$，可逆者 $70-46=24$。也可核对欧拉函数 $70(1-1/2)(1-1/5)(1-1/7)=24$。印本误把中间 $46$ 写成 $36$，但最终 $24$ 是正确结论。

## Common Mistakes

- 把零从倍数交集中漏掉。
- 沿用来源 70-36=24 的错误算术。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Modular Congruence - 同余]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Inclusion-Exclusion Method - 容斥方法]]
