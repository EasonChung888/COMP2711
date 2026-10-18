# L1.14 原题与答案独立核验

真实选题开始：2026-10-17T05:27:28.138403+00:00。三章92页全部written后才开始。

原题、共享题干、Official Answer、Supplementary Explanation均从知识库快照保留。每题对照源PDF物理页；2013试卷扫描页另外渲染目视核对。

## 秘密密钥、移位与仿射密码 — 0 题

已搜索全部题库的 Caesar/shift/affine/AES/secret key/block cipher 等主题；没有找到直接匹配且带可核验官方答案的原题，保留0题。

## 模幂、重复平方与离散对数 — 3 题

### Q-2019-MID-P12
来源：2019 Midterm，物理第14页；答案页[14]。
Independently squared to i=10: residues8,20,4,16,14,20,4,16,14,20,4; selected2^10+2+1 gives4*20*8 mod22=2. No coprimality needed.

### Q-2016-FINAL-P04-a
来源：2016 Final，物理第8页；答案页[8]。
1161=1024+128+8+1. Independent square table6,36,92,36,92,36,92,36,92,36,92; selected product gives216 mod602. Noncoprime base valid for repeated squaring.

### Q-2023F-FINAL-P06-b
来源：2023 Fall Final，物理第10页；答案页[10]。
17 mod14=3;3^3=-1 mod14;2023=674*3+1 and674 is even, so remainder3. Independent modular pow gives3.

## 费马小定理与幂的周期 — 3 题

### Q-2022-MID-P07-a
来源：2022 Midterm，物理第3页；答案页[3]。
109 prime (trial divisors2,3,5,7). 542=5*108+2; base2 nonzero, FLT yields4. Independent pow gives4.

### Q-2025S-MID-P06-b
来源：2025 Spring Midterm，物理第10页；答案页[10]。
47 mod11=3;FLT period10. Exponent37^27 mod10 independently equals3 via7^4=1 and27 mod4=3;final3^3 mod11=5. Nested exponent reduced under different modulus.

### Q-2024S-MID-P11
来源：2024 Spring Midterm，物理第16页；答案页[16, 17]。
For prime p>=7, p divides neither10 nor9. Telescoping9*(1+10+...+10^(p-2))=10^(p-1)-1 and FLT imply9S=0 modp;inverse9 givesS=0. Checked representative primes7..199 with modular summation; proof covers all.

## 密钥交换与中间人攻击 — 1 题

题库仅找到1道直接匹配的 Diffie–Hellman 原题，保留实际数量。费马小定理课安排在此课之前，以满足题目先修知识。

### Q-2021-MID-P05
来源：2021 Midterm，物理第2页；答案页[2]。
31 prime;34*41=1394=46*30+14.17^2,17^4,17^8 mod31=10,7,18;product1260 mod31=20. Independent two-party calculations both20.

## RSA、公钥身份与数字签名 — 3 题

### Q-2019-MID-P11-c
来源：2019 Midterm，物理第13页；答案页[13]。
Substitute message720<n989 and public exponent53 in encryption C=m^e modn. No private exponent required. Original shared context preserved.

### Q-2024S-MID-P09
来源：2024 Spring Midterm，物理第13页；答案页[13]。
23 and37 prime, n851 andT792. Extended Euclid yields233*17-5*792=1. Inverse233 checked directly; all x=0..850 round-trip using e17,d233 including nonunits.

### Q-2025F-FINAL-P07-iii
来源：2025 Fall Final，物理第12页；答案页[12]。
3^2 mod77=9 and3^4 mod77=4;7=4+2+1;4*9*3 mod77=31. Original prompt omits modulus after m^e; named RSA context and official solution specify77. Wording retained.
印刷原文说明（不改原文）：The printed prompt ends with $c=m^e$ without writing the modulus. The RSA context and the official solution specify $c=m^e\bmod77$; the original prompt is retained.

## RSA 正确性的完整证明 — 3 题

### Q-2013-FINAL-P04
来源：2013 Final，物理第7页；答案页[7]。
7 and11 prime;46 nonzero mod both;120 multiple of6 and10. FLT gives1 modulo7,11;CRT unique standard representative modulo77 is1. Direct pow confirms. Printed solution uses4 in second modulus where46 mod11=2; conclusion remains1, correct derivation preserved in supplement and separate review note.
印刷原文说明（不改原文）：The printed solution uses $4$ as the reduced base in the modulo-$11$ line, although $46\bmod11=2$. Its final answer is still correct. Use $46^{120}=(46^{10})^{12}\equiv1\pmod{11}$ (or use base $2$), together with the modulo-$7$ result. The Official Answer is preserved verbatim; the Supplementary Explanation gives the correct argument.

### Q-2021-MID-P07
来源：2021 Midterm，物理第3页；答案页[3]。
For distinct primes p,q, p nonzero modq and q nonzero modp. FLT term gives1 and other positive-power term0 separately. Coprime divisibility gives1 modpq, including prime2. Enumerated all distinct primes<=199 as numerical cross-check.

### Q-2015-FINAL-P07-a
来源：2015 Final，物理第13页；答案页[13]。
48 divisible by2,4,6;given a nonzero modulo3,5,7. Thus a^49=a modulo each;CRT gives equal standard residues modulo105. Independently enumerated all a in0..104 with gcd(a,105)=1.

