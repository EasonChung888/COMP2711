---
id: "Q-2016-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 11
solution_page: [11]
question_number: "6(a)"
year: 2016
term: "fall"
exam_type: "final"
marks: 8
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The noncoprime congruences are compatible and constrain the quotient to multiples of seven before the range is imposed."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=11]]

## Question

(a) Consider the following two modular equations.
$$x\bmod990=733$$
$$x\bmod693=40$$
Does there exist a solution for $x\in Z_{3000}$ such that $x$ satisfies the above two modular equations? If yes, please give all possible solutions in $Z_{3000}$ and show your steps. If no, please explain why there is no solution in $Z_{3000}$.

Shared context: [[STEM-2016-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

先从第一式写出 $x=733+990t$。代入第二式后得到七整除 $t$，故全部整数解间距六千九百三十。最后必须套上零到二千九百九十九的范围，只留下七百三十三。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** The only solution in $\mathbb Z_{3000}$ is $x=733$.

**Derivation/proof.** Write $x=733+990t$. Since $733\equiv40\pmod{693}$, the second condition is $990t\equiv0\pmod{693}$. Dividing by $\gcd(990,693)=99$ gives $10t\equiv0\pmod7$, hence $t\equiv0\pmod7$. All integer solutions are $733+6930k$. Only $k=0$ lies in $[0,2999]$. Check: $733\bmod990=733$ and $733\bmod693=40$.

### 中文解答

**推导。** 第一式给 $x=733+990t$，t整数。因为733模693为40，第二式等价 $990t\equiv0\pmod{693}$。两模数最大公因数99，约去它得 $10t\equiv0\pmod7$，十与七互素，故t=7k。因此全部整数解 $x=733+6930k$。限制0≤x<3000时只可k=0，唯一解733。直接验证733模990为733、模693为40。

## Common Mistakes

- 因模数不互素就断言没有解。
- 给出一般同余类后不筛选指定的有限范围。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
