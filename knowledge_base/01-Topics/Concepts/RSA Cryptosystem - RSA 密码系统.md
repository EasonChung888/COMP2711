---
id: "CON-RSA"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
prerequisites: []
---
# RSA Cryptosystem - RSA 密码系统

## Definition｜定义

RSA uses $n=pq$, public exponent $e$, and private exponent $d$ satisfying $ed\equiv1\pmod{\varphi(n)}$. RSA 中私钥是公钥指数在欧拉函数模数下的逆元。

## Recognition Cues｜识别线索

Key-generation questions mention primes $p,q$ and $\varphi(n)$; encryption asks for $m^e\bmod n$. 识别是求密钥、加密，还是分析公开信息泄露。

## Worked-use note｜使用提醒

Use extended GCD for $d$ and repeated squaring for powers; never compute the inverse modulo $n$ when the definition requires $\varphi(n)$.

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-RSA - Questions]]
