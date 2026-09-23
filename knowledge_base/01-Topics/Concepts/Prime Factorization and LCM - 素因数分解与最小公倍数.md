---
id: "CON-PRIME-FACTORIZATION-LCM"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
prerequisites: []
---
# Prime Factorization and LCM - 素因数分解与最小公倍数

## Definition｜定义

Every positive integer has a unique prime factorization, up to ordering. If $a=\prod_p p^{\alpha_p}$ and $b=\prod_p p^{\beta_p}$, use zero exponents for absent primes. 每个正整数唯一对应有限多个非零的素因数指数；指数为零表示该素数不整除这个数。

Divisibility is coordinatewise comparison: $a\mid b$ iff $\alpha_p\le\beta_p$ for every prime $p$. Thus
$$\gcd(a,b)=\prod_p p^{\min(\alpha_p,\beta_p)},\qquad \operatorname{lcm}(a,b)=\prod_p p^{\max(\alpha_p,\beta_p)}.$$
公因数的指数不能超过任一原数，因此最大公因数取最小指数；公共倍数的指数必须覆盖两原数，因此最小公倍数取最大指数。此定义限于正整数，不把未声明的零输入约定混入题目。

## Worked example｜算例

For $a=2^3 5^6$ and $b=2^4 5^3$, the LCM is $2^4 5^6$. It is divisible by each input, and every common multiple contains at least four factors of two and six factors of five. 两个除法商分别为二与五的三次幂；若降低任一指数，所得数就不再被相应原数整除。这验证“公倍数”及“最小”两个条件。

## Counting a fixed LCM｜固定 LCM 的计数

For one prime with target exponent $e$, ordered exponent pairs satisfying $\max(u,v)=e$ number $(e+1)^2-e^2=2e+1$. 先数 $0\le u,v\le e$ 的所有格点，再扣去 $u,v<e$ 的内部方阵。右上角 $(e,e)$ 只计一次，不应把两条边直接相加成 $2e+2$。

If the target LCM is $M=\prod_{j=1}^t p_j^{e_j}$, the number of ordered positive pairs with that LCM is $\prod_j(2e_j+1)$. Different primes can be chosen independently. 对 $M=2^3 5^7 11^{13}$，得到 $7\cdot15\cdot27=2835$。任何额外素因数都会进入 LCM，所以没有遗漏其他因子的自由选择。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]] supplies prime factorization and divisibility.
- [[Prime Exponent Method - 素因数指数方法]] translates each divisibility condition into a coordinatewise exponent constraint, including the boundary case where both exponents attain the target.
- [[Counting Method - 计数方法]] counts allowed exponent pairs by subtraction and product rule.
- [[Q-2025S-FINAL-P04-a - Prime Factorization and LCM]] uses the maximum-exponent rule on two specific inputs.
- [[Q-2025S-FINAL-P04-b - Prime Factorization and LCM]] reverses the viewpoint and counts all pairs producing a fixed LCM.

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-PRIME-FACTORIZATION-LCM - Questions]]
