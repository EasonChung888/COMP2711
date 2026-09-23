---
id: "Q-2020-MID-P10"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 5
question_number: "10"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["construction","proof"]
difficulty: 3
difficulty_basis: "The attacker chooses a unit, blinds the message using the public exponent, and cancels the signed factor with a public modular inverse."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 10
---
# Q-2020-MID-P10

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=5]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=5]]

Source verification: The printed condition $r\ne1$ alone does not make every r invertible. Here r is explicitly chosen by the attacker, so the construction deliberately chooses $\gcd(r,n)=1$. This makes the inverse step in the published answer valid; it is a choice in the attack, not an unstated universal assumption about all r.

## Question

Recall the digital signature scheme based on RSA. Suppose your public key is $(n,e)$ and private key is $d$, and you want to sign a message $x\in\mathbb Z_n$. You release both $x$ and $C=x^d\bmod n$. People can then verify your signature by checking $C^e\bmod n=x$.

However, you should be careful not to just sign any message people give you. Suppose an attacker asks you to sign another message $y=r^e x\bmod n$ where $r\ne1$ is a number chosen by the attacker, and you sign it (i.e., release $y^d\bmod n$). Then the attacker can forge your signature on $x$, i.e., compute $C$ without knowing $d$. Show how the attacker can do this. (This is known as a chosen-message-attack.)

## 中文解析

r 由攻击者自己选择，因此可以先用公开的 n 检查 gcd，确保选到与 n 互质且不等于一的数，而不是要求任意 r 都能攻击。用公钥算出混淆消息并索取签名后，签名中多出的因子恰好是 r；再乘模 n 的逆元即可消掉它。逆元可由扩展欧几里得算法公开计算，不需要知道 d，也不要求消息 x 可逆。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Choose $r\ne1$ with $\gcd(r,n)=1$, obtain $s=y^d\bmod n$, and output $C=sr^{-1}\bmod n$.

**Derivation/proof.** Because the source lets the attacker choose r, choose a unit modulo n rather than an arbitrary nonunit: compute gcd(r,n) with the public n and retain a value coprime to n. For a standard RSA modulus n>2, n−1 is already such a unit distinct from 1. Extended Euclid computes t with $rt\equiv1\pmod n$ using no private information. The attacker computes $y=r^e x\bmod n$ with the public e and requests its signature s. Since $ed=1+k\varphi(n)$ and r is a unit, Euler's theorem gives $r^{ed}\equiv r\pmod n$. Hence $s\equiv(r^e x)^d\equiv r^{ed}x^d\equiv r x^d\pmod n$ and $st\equiv x^d=C\pmod n$. No inverse of x is needed, so x itself need not be a unit. As an independent numerical check, take n=55, e= 3, d=27, x=7 and r=2. Then y=1, s=1, and $2^{-1}\equiv28\pmod{55}$, so the forged C is 28; indeed $7^{27}\equiv28$ and $28^3\equiv7\pmod{55}$.

### 中文解答

**推导。** 攻击者有权选择 $r$，先选 $r\ne1$ 且 $\gcd(r,n)=1$，可用公开的 $n$ 检查；标准 RSA 模数 $n>2$ 时 $r=n-1$ 就是一个这样的选择。这是构造攻击的选择步骤，不是断言任意非一数都可逆。用扩展欧几里得算公开逆元 $t$，满足 $rt\equiv1\pmod n$。算出 $y=r^ex\bmod n$ 并索取签名 $s=y^d\bmod n$。由 $ed=1+k\varphi(n)$ 和欧拉定理，$r^{ed}\equiv r\pmod n$，故

$$s\equiv(r^ex)^d\equiv r^{ed}x^d\equiv rx^d\pmod n,$$
$$st\equiv rx^dt\equiv x^d=C\pmod n.$$

攻击者只需计算 $st\bmod n$，不用知道 $d$，也没有除以可能不可逆的消息 $x$。数值核对：$n=55,e=3,d=27,x=7,r=2$ 时 $y=1,s=1,t=28$，输出 $C=28$，且 $7^{27}\bmod55=28$、$28^3\bmod55=7$。

## Common Mistakes

- 选到 r=0 或其他非单位后仍直接写 r 的逆元。
- 把消去混淆因子的逆元算在模 φ(n) 下，而不是模 n 下。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
