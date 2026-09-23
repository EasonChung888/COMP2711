---
id: "METHOD-PRIME-EXPONENT"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Prime Exponent Method - 素因数指数方法

## When to use｜适用情形

Use this method for positive-integer divisibility, GCD and LCM constraints when prime factorizations are available. Replace each integer by its vector of prime exponents. 把数值关系转换成每个素因数的指数条件，既能求具体最大公因数／最小公倍数，也能反向计数所有满足给定结果的数对。它不是模幂约化法；这里没有需要保留的余数类。

## Procedure and justification｜步骤与理由

1. Factor every positive input and use exponent zero for missing primes. Write $a=\prod p^{\alpha_p}$ and $b=\prod p^{\beta_p}$. 唯一分解保证指数向量决定整数，零指数不能遗漏，否则无法正确处理只出现在一方的素数。
2. Translate divisibility coordinatewise: $a\mid b$ exactly when every $\alpha_p\le\beta_p$. An integer common multiple must dominate both exponent vectors, so its least possible exponent is $\max(\alpha_p,\beta_p)$. 公因数则不能超过任一向量，对应取最小指数。
3. For a fixed LCM $M=\prod p^{e_p}$, both input integers divide $M$. Exclude every prime not dividing $M$, and impose $0\le\alpha_p,\beta_p\le e_p$ with $\max(\alpha_p,\beta_p)=e_p$. 这一步同时给出上界和“至少一方达到”的必要条件，不能只限制两边都不超过目标。
4. When counting ordered pairs, count each prime independently and apply the product rule. For one target exponent $e$, the square grid of $(e+1)^2$ candidate pairs loses the $e^2$ pairs with both coordinates smaller, leaving $2e+1$. 唯一分解使不同素数的局部选择唯一组合成整体数对，因此乘法原理不会重复计数。

## Worked examples｜算例

For $a=2^3 5^6,b=2^4 5^3$, coordinatewise maxima are $(4,6)$, giving $\operatorname{lcm}(a,b)=2^4 5^6$. Dividing by the inputs gives $2$ and $5^3$; lowering either exponent loses divisibility by one input. 两个核验分别证明它是公共倍数且已达到各指数的最小允许值。

For the fixed target $2^3 5^7 11^{13}$, ordered exponent-pair counts are $7,15,27$, hence $7\cdot15\cdot27=2835$. The pair $(e,e)$ occurs once in each prime's local count. 不能把两条边各算 $e+1$ 后忘记扣去公共角点；也不能把有序数对除以二，因为交换两数通常产生不同对象。

## Boundaries｜边界

This exponent-vector argument is stated for positive integers. Zero has no finite prime factorization, so a separate source-provided convention is required for zero-input GCD or LCM questions. 本方法不会为原题缺失的零输入定义擅自选定约定。

## Connections

- [[Prime Factorization and LCM - 素因数分解与最小公倍数]] supplies the maximum/minimum exponent identities used at every step.
- [[Counting Method - 计数方法]] combines independent prime-wise choices when the problem asks for a number of pairs.
- [[Q-2025S-FINAL-P04-a - Prime Factorization and LCM]] uses coordinatewise maxima to compute a specific LCM.
- [[Q-2025S-FINAL-P04-b - Prime Factorization and LCM]] uses the boundary-square count $2e+1$ for each of three prime factors.

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METHOD-PRIME-EXPONENT - Questions]]
