---
id: "Q-2015-FINAL-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 13
solution_page: [13]
question_number: "7(a)"
year: 2015
term: "fall"
exam_type: "final"
marks: 6
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Fermat reductions for three different primes must be combined by CRT to recover the modulus one hundred five."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P07-a

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=13]]

## Question

(a) Use Fermat’s Little Theorem and the Chinese Remainder Theorem to show that, if an integer $a$ is not divisible by any of 3, 5 and 7, then
$$a^{49}\bmod105=a\bmod105.$$

## 中文解析

指数四十九减一等于四十八，可被二、四、六整除，分别对应三个素数的费马指数。先在模三、五、七下得到同余，再利用互素模数的中国剩余定理合并。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $a^{49}\equiv a\pmod{105}$.

**Derivation/proof.** For $r=3,5,7$, the hypothesis gives $\gcd(a,r)=1$, so $a^{r-1}\equiv1\pmod r$. Since $48=24\cdot2=12\cdot4=8\cdot6$, $a^{49}=a(a^{r-1})^{48/(r-1)}\equiv a\pmod r$. The pairwise coprime moduli multiply to 105; CRT therefore makes the two residues equal modulo 105.

### 中文解答

**推导。** a 不被三个素数整除，所以在各模数 r=3、5、7 下均有 $\gcd(a,r)=1$，可用费马小定理 $a^{r-1}\equiv1\pmod r$。因为 $48=24\cdot2=12\cdot4=8\cdot6$，故 $a^{49}=a(a^{r-1})^{48/(r-1)}\equiv a\pmod r$。三个模数两两互素，乘积105，CRT 说明满足这三个余数的模105类唯一。因此 $a^{49}\equiv a\pmod{105}$，两边标准余数相等。

## Common Mistakes

- 直接对合数 105 使用素数版本的费马小定理。
- 只证明其中一个素数模数的同余就下最终结论。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
