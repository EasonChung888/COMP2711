---
id: "Q-2025F-FINAL-P07-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 12
question_number: "7(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Back-substitute an extended Euclidean chain to invert seven modulo sixty."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 3
---
# Q-2025F-FINAL-P07-ii

## Source

[[2025 Fall Final]]; printed item 7(ii); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

## Question

![[STEM-2025F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

(ii) [3 pts] Assume that Bob chooses $e=7$. Compute his private key $d$ by running the extended Euclidean algorithm.

## 中文解析

私钥指数满足七乘 d 模六十余一，需要展示完整欧几里得回代。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $d=43$，即 $d\equiv43\pmod{60}$。

**推导。** 公钥指数与欧拉函数值互素，所求私钥指数就是前者对后者的乘法逆元；用扩展欧几里得回代直接构造这个系数。除法链为 $60=8\cdot7+4$，$7=1\cdot4+3$，$4=1\cdot3+1$，$3=3\cdot1+0$。从最后非零余数回代：$1=4-3=4-(7-4)=2\cdot4-7=2(60-8\cdot7)-7=2\cdot60-17\cdot7$。因此 $7(-17)\equiv1\pmod{60}$，取正代表 $d=-17+60=43$。验证 $7\cdot43=301=5\cdot60+1$，满足所需逆元条件。

## Common Mistakes

- 私钥求逆所用模数是六十，不是公开模数七十七。
- 回代系数为负不表示无解，添加六十可取得合法正代表。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Back-substitute an extended Euclidean chain to invert seven modulo sixty.
