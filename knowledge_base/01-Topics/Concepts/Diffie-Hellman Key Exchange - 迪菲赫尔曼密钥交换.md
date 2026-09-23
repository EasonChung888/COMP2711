---
id: "CON-DIFFIE-HELLMAN"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
prerequisites: ["[[Modular Congruence - 同余]]"]
---
# Diffie-Hellman Key Exchange - 迪菲赫尔曼密钥交换

## Definition｜定义

With public modulus $p$ and base $a$, two parties privately choose $k_1,k_2$ and exchange $a^{k_1}\bmod p$ and $a^{k_2}\bmod p$. Raising the received value to one's own private exponent gives the same shared residue $a^{k_1k_2}\bmod p$. 双方交换的是幂的余数，私有指数不公开；共享指数是两者的乘积。

## Calculation｜计算

For a prime $p$ with $p\nmid a$, reduce the product exponent modulo $p-1$ using Fermat, then use repeated squaring modulo $p$. For example $a=2,p=11,k_1=3,k_2=4$ gives $2^{12}\equiv2^2=4\pmod{11}$. 先检查互质，指数用模 $p-1$，最终数值用模 $p$，两者不可互换。

## Pitfall｜易错点

This exchange is not RSA inversion: neither party solves $ed\equiv1\pmod{\varphi(n)}$. 不要把双方指数相加，也不要把交换值本身当成最终密钥。

Use [[Modular Arithmetic Method - 模运算方法]].

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-DIFFIE-HELLMAN - Questions]]
