---
id: "Q-2025F-FINAL-P07-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 12
question_number: "7(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Enumerate encryption exponents in a bounded interval by coprimality to sixty."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 3
---
# Q-2025F-FINAL-P07-i

## Source

[[2025 Fall Final]]; printed item 7(i); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=12]]

## Question

![[STEM-2025F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

(i) [3 pts] Write down the possible values for $e$ if it has to be between 10 and 20. No argument is needed.

## 中文解析

RSA 的公开指数必须和 $T=60$ 互素，只需排除二、三、五的倍数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $e=11,13,17,19$。

**推导。** 分解 $60=2^2\cdot3\cdot5$。$\gcd(e,60)=1$ 当且仅当 $e$ 不被二、三、五整除。十到二十中的偶数全部排除；剩十一、十三、十五、十七、十九，再删去含三与五因数的十五，得到 $11,13,17,19$。四个数分别与六十无共同素因数，所以都存在模六十的乘法逆元，是合法公开指数。

## Common Mistakes

- 不能只要求 e 小于六十，还必须与六十互素。
- 十五是奇数但仍有三和五因数，因此不合格。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]

Enumerate encryption exponents in a bounded interval by coprimality to sixty.
