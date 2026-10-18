# L1.13 原题与答案独立核验

全部 31+27+34=92 页讲解已 written 后开始选题。保留现有解释原文；本工作没有运行最终网站构建。

共 14 道原题，按课程分配为 3 / 3 / 2 / 3 / 0 / 3。每题 Official Answer 和 Supplementary Explanation 均来自原知识库的完整对应段落，仅转换本地引用。无自编题、无改编题、无把同一原题拆开重复计数。

已逐页查看 12 个物理题目/答案页；2020 Midterm 第 6 题答案跨 3–4 页，2025 Fall Final 第 6 题答案跨 10–11 页，两处均保留完整来源。选中的题目没有必需原题图，因而不产生占位 figures。

| 课程 | 原题数 | 说明 |
| --- | ---: | --- |
| 最大公约数与欧几里得算法 | 3 | 原题、完整官方答案与独立核验均可追溯。 |
| Bézout 与扩展欧几里得算法 | 3 | 原题、完整官方答案与独立核验均可追溯。 |
| 乘法逆元的存在、唯一与计算 | 2 | 原题、完整官方答案与独立核验均可追溯。 |
| 线性同余方程与解的数量 | 3 | 原题、完整官方答案与独立核验均可追溯。 |
| 可逆变换与加权校验 | 0 | 全库题干/共享题干检索没有直接的字符串哈希、校验码、位交换检测原题，保留 0 题。 |
| 中国剩余定理 | 3 | 原题、完整官方答案与独立核验均可追溯。 |

## 选题范围与排除理由

检索 knowledge_base/04-Questions 下全部 887 个题目与共享题干 Markdown；完整文件 SHA-256 清单和检索表达式见 l1-13-search-index.json。另逐题审阅 Number Theory/GCDs and Congruences 候选及已完成 27 页解释。

- RSA、Fermat、Diffie–Hellman、模幂与重复平方法题留给后续 L1.14；不借用带密码学前提的求逆题凑数。
- 2018 FINAL 9(a) 需要额外容斥计数且官方中间数值有误，未选；因此逆元课保留直接匹配的 2 题。
- 2018 FINAL 3(b) 依赖递归集合与结构归纳，不属于本章给出的先修范围，未选。
- 2025S MID 8(b) 的题库 answer_source 为 derived，印刷答案遗漏题目明确要求的扩展欧几里得步骤，未计入官方答案原题；线性同余课采用其他完整官方答案原题。
- 非互素模数的一般 CRT、含覆盖规则的字符串题、需要归纳/额外计数的 CRT 应用不优先于本课直接范围；已有 3 道直接匹配且验证通过的 CRT 原题。
- 与 L1.12 已指定的基本整除/余数/同余题不重复。2014 FINAL 2(c) 使用原共享判断题说明，但未复制其他小题到练习计数。
- 哈希/校验码课查遍全部原题和共享题干后没有直接匹配，保留 0 题；不以单纯同余运算或一般整除题替代应用题。

## 逐题核验

### Q-2014-FINAL-P02-c · 2(c)

- 题目：2014 Final，物理 PDF 第 4 页；官方答案物理页 [4]。
- 题源：[Q-2014-FINAL-P02-c - Modular Congruence.md](../notes/Q-2014-FINAL-P02-c - Modular Congruence.md)。
- Note SHA-256：`1205e82045f00bc3b1284ed3123e6b0f727a23e3123883ef6c041b5ab4963082`。PDF SHA-256：`778a2a0e37c04a803edce848127f852e143166c5e472f3474a72cbbf0fc93e2b`。
- Official section SHA-256：`21ff97d4c118594e4dcff5ee1ee4a8352920d4971955a43a7f63120b3993779c`。Supplementary section SHA-256：`f2903d51152321346c7668ae48fdd79312498adb5d77bef6992ff48569e1b54b`。
- Scope: Pages 3-5: common divisors and remainder preservation; a=qn+1 makes every common divisor divide 1. The complete original true/false instruction is supplied.
- Independent verification: For all positive a,n in the printed domain: a=qn+1, so every positive common divisor divides a-qn=1. Hence gcd(a,n)=1. This symbolic divisibility proof, rather than the sample check, proves the universal statement.

### Q-2017-MID-P05-a · 5(a)

- 题目：2017 Midterm，物理 PDF 第 7 页；官方答案物理页 [7]。
- 题源：[Q-2017-MID-P05-a - Modular Congruence.md](../notes/Q-2017-MID-P05-a - Modular Congruence.md)。
- Note SHA-256：`0636bbf40a21988a62010662fe2fe35dd55040e7c2bfdae8e32b14987c021a99`。PDF SHA-256：`918ffd11449e799ce54c62ca0c25961d218ce172f0e034035dbf6604cc2a09b3`。
- Official section SHA-256：`18d4223228622a82a289d0cb0b2a4972ce58548d746eb35f761ce4cf11269a8c`。Supplementary section SHA-256：`3fe4d7c69689c4c5f2499d7eb64e448e3cba54d15be0bad31189583c2a707193`。
- Scope: Pages 4-5: exactly the Euclidean remainder algorithm and its last nonzero remainder.
- Independent verification: Each Euclidean step preserves all common divisors; the last nonzero remainder is 1.

### Q-2023S-MID-P06 · 6

- 题目：2023 Spring Midterm，物理 PDF 第 9 页；官方答案物理页 [9]。
- 题源：[Q-2023S-MID-P06 - Modular Congruence.md](../notes/Q-2023S-MID-P06 - Modular Congruence.md)。
- Note SHA-256：`9f1c0dcc93976d01fcc0a60050d01a3e148d685df257eb47bda90d3df193bac4`。PDF SHA-256：`7cb61aa82894104e5769eb2c2a20c53874e401c9f1e41b1e0cd8e7191a318aa5`。
- Official section SHA-256：`06000edd020341ecff8ad6e57a52f0c4964c9be970ad6c4853f294714030538d`。Supplementary section SHA-256：`70c89646a24f1fc057c024ab80ef4f579cdc52eca10a534cb3ae8a4b4ee31967`。
- Scope: Pages 4-5: ordinary integer Euclidean division suffices even for these powers. Direct quotient/remainder certificates avoid requiring later modular exponentiation or cancellation theorems.
- Independent verification: Direct integer division on the original two numbers gives valid nonnegative remainders 2^35-1, 2^30-1, 31, 0. This proves gcd=31 without any future modular theorem.

**单列来源勘误，官方原文未修改：**

官方答案第 9 页的一句行内因式分解漏写了结尾（应为 $a^n(a^{m-n}-1)$），邻近展示公式和结论 $31$ 正确。官方段落原样保留。

本题也可完全按本课普通带余除法核验：

$$2^{100}-1=2^{35}(2^{65}-1)+(2^{35}-1),$$
$$2^{65}-1=2^{30}(2^{35}-1)+(2^{30}-1),$$
$$2^{35}-1=2^5(2^{30}-1)+(2^5-1).$$

最后 $31=2^5-1$ 整除 $2^{30}-1$，所以最后非零余数为 $31$。每步余数都在合法范围内；不需要 Fermat 定理或预先套用指数 GCD 公式。

### Q-2024S-MID-P12-a · 12(a)

- 题目：2024 Spring Midterm，物理 PDF 第 18 页；官方答案物理页 [18]。
- 题源：[Q-2024S-MID-P12-a - Modular Congruence.md](../notes/Q-2024S-MID-P12-a - Modular Congruence.md)。
- Note SHA-256：`6b8ec9e8bca18a1b78d67816d2bcb76dc560f58559fa86f9b6bb8d30592387e8`。PDF SHA-256：`1cc40fb0f4795239949a0e2f0b4c0b789ab2d3e701f2eebddf5b407b97bae526`。
- Official section SHA-256：`6d74580598bdeb54097de6ac704fb8670cc3ca4d785c6d58598245fada27b969`。Supplementary section SHA-256：`7b2bfb16e0f937c43b323aeceb07677686ac84a52b9be8d9e6cc0033c13abe54`。
- Scope: Pages 6-7: every integer linear combination is divisible by the positive gcd; positivity supplies its lower bound.
- Independent verification: Put d=gcd(a,m)>0. Since a=du and m=dv, any integer combination ra+sm=d(ru+sv). If positive, the integer multiplier is at least 1, so the value is >=d. This holds for all positive a,m and all integer r,s.

### Q-2020-MID-P08 · 8

- 题目：2020 Midterm，物理 PDF 第 4 页；官方答案物理页 [4]。
- 题源：[Q-2020-MID-P08 - Modular Congruence.md](../notes/Q-2020-MID-P08 - Modular Congruence.md)。
- Note SHA-256：`7cb46ee8bca9e268b23719902e6a0b62a91165c42df4725b5eaa2fa4e9bbe16c`。PDF SHA-256：`e4043254770981190c07d2a6729740cdf4ffed8ae0d370efff7f5d93f88bacc0`。
- Official section SHA-256：`6fc4ae5dea7478a6610fe48d9c72c6219ecfd01415c6ade1af3960fabe5eaac8`。Supplementary section SHA-256：`dd3b53f8694e8c646308a506373b54511f1d63f056b070cdf03469fb20cc6fd7`。
- Scope: Pages 6-7: the identity 3(14n+3)-2(21n+4)=1 is a complete symbolic Bezout certificate. No induction or inverse theorem is needed.
- Independent verification: The exact polynomial identity 3(14n+3)-2(21n+4)=1 has n coefficient 0 and constant 1. Every common divisor divides 1. This proves the result for all natural n (including either convention for zero).

### Q-2018-MID-P05-a · 5(a)

- 题目：2018 Midterm，物理 PDF 第 7 页；官方答案物理页 [7]。
- 题源：[Q-2018-MID-P05-a - Modular Congruence.md](../notes/Q-2018-MID-P05-a - Modular Congruence.md)。
- Note SHA-256：`21e40aac440225305d8228ff62c048195df6e4d0658148158cc0707c5cc169d8`。PDF SHA-256：`dce916c9874ffbd95020baa62af4cd3da016e04bb196c62234344ff565d26a48`。
- Official section SHA-256：`7d0931d8c2ea5187ce0c5fdfac03adf3ce7218552332c110b59d1593d7789823`。Supplementary section SHA-256：`e912ebe2ebc329ec03e079926080d1fab73d2c84b1300fe79d29459e54d1de72`。
- Scope: Pages 6-7: multiply a Bezout identity sy+tz=1 by x and use divisibility. It requires no modular inverse or future theorem.
- Independent verification: Bezout supplies s*y+t*z=1 because gcd(y,z)=1. Multiply by x: x=s*(x*y)+t*z*x. Both terms are divisible by z under the printed hypotheses, hence z divides x. Without coprimality this is not valid (x=1,y=z=2).

### Q-2024S-MID-P12-b · 12(b)

- 题目：2024 Spring Midterm，物理 PDF 第 18 页；官方答案物理页 [18]。
- 题源：[Q-2024S-MID-P12-b - Modular Congruence.md](../notes/Q-2024S-MID-P12-b - Modular Congruence.md)。
- Note SHA-256：`a4f2dc99e338474ea60ab16c812c1b6bff96fab044976a8826851e46fc1e6c12`。PDF SHA-256：`1cc40fb0f4795239949a0e2f0b4c0b789ab2d3e701f2eebddf5b407b97bae526`。
- Official section SHA-256：`8a2f939ceb9ff7e8873513b375949996183538db755e373150bddf9cf5b730ba`。Supplementary section SHA-256：`26e2db999c7dd4762ef3f6a5c2d704a322d89982db9016a7c2fdc97e147a34bd`。
- Scope: Pages 10-12: an inverse would express 1 as an integer linear combination despite gcd>1. Original preceding part (a) is supplied verbatim as context, not counted as another exercise here.
- Independent verification: If an inverse b existed, a*b-m*k=1 would represent a positive integer 1 smaller than d=gcd(a,m)>1, contradicting the supplied original part (a). Equivalently every left term is divisible by d, so d would divide 1.

原题引用的前题 (a) 已按原题文字附在 (b) 之前，仅作前提；此处计数为 (b) 一题。

### Q-2020-MID-P06 · 6

- 题目：2020 Midterm，物理 PDF 第 3 页；官方答案物理页 [3, 4]。
- 题源：[Q-2020-MID-P06 - Modular Congruence.md](../notes/Q-2020-MID-P06 - Modular Congruence.md)。
- Note SHA-256：`85917bb7f88ca342d74a97e0436c3028766deecb07aa4d55dec8a9a34954183b`。PDF SHA-256：`e4043254770981190c07d2a6729740cdf4ffed8ae0d370efff7f5d93f88bacc0`。
- Official section SHA-256：`4465851d6015e16970dd5404aa57887f0a1d7bee72afc89215d293ab2e9cfe79`。Supplementary section SHA-256：`907aaeeb273ac61d757c7c94767cf4278fe61efce8b9d9a471a32f5455fd3e89`。
- Scope: Pages 13-14: extended Euclidean algorithm, the coefficient of 53, and normalization modulo 180.
- Independent verification: Independent extended Euclid gives 17*53-5*180=1. All 180 standard representatives have been checked and only 17 multiplies 53 to residue 1.

### Q-2017-MID-P05-b · 5(b)

- 题目：2017 Midterm，物理 PDF 第 7 页；官方答案物理页 [7]。
- 题源：[Q-2017-MID-P05-b - Modular Congruence.md](../notes/Q-2017-MID-P05-b - Modular Congruence.md)。
- Note SHA-256：`7965b66f005ae8991a58ac4f9e79f740ef86605a40500beeb2efe642e2012501`。PDF SHA-256：`918ffd11449e799ce54c62ca0c25961d218ce172f0e034035dbf6604cc2a09b3`。
- Official section SHA-256：`31dca275d7a8e4317b01cb8e2ad5e03bce0eb43e5c2c6390d6692fa67ca07651`。Supplementary section SHA-256：`a86110101752700a2599347783d3eb3381cad567ac3db5d2dd8c2e250613e646`。
- Scope: Pages 15-18, using earlier inverse computation: solve a single coprime linear congruence in the explicitly printed standard range.
- Independent verification: Independent Euclid gives inverse 59; full enumeration of 0..220 yields exactly 118. Substitution satisfies the original affine congruence. Coprimality proves all integer solutions are 118+221k; retain any printed standard-range restriction.

### Q-2019-MID-P10-b · 10(b)

- 题目：2019 Midterm，物理 PDF 第 12 页；官方答案物理页 [12]。
- 题源：[Q-2019-MID-P10-b - Modular Congruence.md](../notes/Q-2019-MID-P10-b - Modular Congruence.md)。
- Note SHA-256：`068fcbfd8095795e0e0e0f434405aa986c6eab000e95f4b23e0de5f4a58c536b`。PDF SHA-256：`912bb71f57d3c5e787eed9ba912ff61ed623f9221e54908f569c5df5a1b16c4f`。
- Official section SHA-256：`c3ace4eacbf9aca6aace6d12a0871bce528bad7a1e61bf42246cf9d616c69938`。Supplementary section SHA-256：`4131e3354ec987c2ff552fb8ba694908f03681f2220caf9a813466f581c9eb09`。
- Scope: Pages 15-18: move a constant, multiply by the inverse already supplied in the original shared prompt, and normalize into 0..103.
- Independent verification: Independent Euclid gives inverse 7; full enumeration of 0..103 yields exactly 47. Substitution satisfies the original affine congruence. Coprimality proves all integer solutions are 47+104k; retain any printed standard-range restriction.

### Q-2020-MID-P07 · 7

- 题目：2020 Midterm，物理 PDF 第 4 页；官方答案物理页 [4]。
- 题源：[Q-2020-MID-P07 - Modular Congruence.md](../notes/Q-2020-MID-P07 - Modular Congruence.md)。
- Note SHA-256：`7cb1fd8c36f127c7a4d356577a8d8687cfa3322f207238ee6315a325dae14d8d`。PDF SHA-256：`e4043254770981190c07d2a6729740cdf4ffed8ae0d370efff7f5d93f88bacc0`。
- Official section SHA-256：`aa90e3f425caf1d9c09a52c95716afaa7320a358c818ed861bc5bea9e9b53365`。Supplementary section SHA-256：`515d908c6e7d0b214b803811f10de865b32060c5d04b055306b11d4ab0533cd2`。
- Scope: Pages 15-18, using earlier extended Euclid: solve one affine congruence; preserve the official coefficient typo and explain it separately.
- Independent verification: Independent Euclid gives inverse 7; full enumeration of 0..22 yields exactly 18. Substitution satisfies the original affine congruence. Coprimality proves all integer solutions are 18+23k; retain any printed standard-range restriction.

**单列来源勘误，官方原文未修改：**

官方第 4 页末行反向代回写成 $1=23(-1)+10\cdot7$，右边实际为 $47$。正确系数是 $-3$：

$$1=10-3\cdot3=10-3(23-2\cdot10)=7\cdot10-3\cdot23.$$

因此逆元 $7$ 和官方最终解 $x\equiv18\pmod{23}$ 正确。验算 $10\cdot18+4=184=8\cdot23$。官方段落未改写，题库补充解析已给出正确系数。

### Q-2013-FINAL-P03 · 3

- 题目：2013 Final，物理 PDF 第 6 页；官方答案物理页 [6]。
- 题源：[Q-2013-FINAL-P03 - Modular Congruence.md](../notes/Q-2013-FINAL-P03 - Modular Congruence.md)。
- Note SHA-256：`23805c229b23449dd7bac4d23ac11ba7f4c28bfef07a25ccb610ab9d118acbae`。PDF SHA-256：`e378c89319b3e8cc14d5c57e75f8db0a16c9d6a2257487684b5687f6e30000f0`。
- Official section SHA-256：`4d3f8956b731f52f705e9c44bd01f664aee61a7f203a2f366488f1e7071df5fb`。Supplementary section SHA-256：`aa11e2e7ab91f52f49ab2dc4848e65182bbc44e4fc44614f9816bcce7e8fa4ae`。
- Scope: Pages 25-26: uniqueness modulo the product of distinct primes; the question gives existence. Basic contrapositive/contradiction proof is prerequisite logic, not a future number-theory theorem.
- Independent verification: For distinct standard representatives, 0<abs(x1-x2)<=pq-1<pq. Equal residues modulo distinct primes p,q would force pq to divide the difference, impossible. Thus distinct representatives differ in at least one residue (the contrapositive); given existence, this proves uniqueness. The official strict <pq-1 bound is a typo; <pq is sufficient.

**单列来源勘误，官方原文未修改：**

官方第 6 页差值的严格上界写为 $0<x_1-x_2<pq-1$，一般应为 $0<x_1-x_2\le pq-1<pq$。所需矛盾只用 $0<|x_1-x_2|<pq$；题库补充解析已采用正确界。

按题目要求也可表述为逆否证明：若 $x_1\ne x_2$ 且两者都在 $\mathbb Z_{pq}$，差的绝对值为正且小于 $pq$；它不可能同时被不同素数 $p,q$ 整除，因此两者至少有一个余数不同。故余数均相同的两个标准代表必相等。官方段落保持原样。

### Q-2019-FINAL-P02 · 2

- 题目：2019 Final，物理 PDF 第 4 页；官方答案物理页 [4]。
- 题源：[Q-2019-FINAL-P02 - Modular Congruence.md](../notes/Q-2019-FINAL-P02 - Modular Congruence.md)。
- Note SHA-256：`0e81e754734ebf8a69b79609e82b2b01953288e1a9dc1ff28096ef2c92d42faa`。PDF SHA-256：`5a29841efef7c05f72bf6d63c44256b2810443f113f9a91f7ee1b649c25edcd7`。
- Official section SHA-256：`b06d8df6a8f30d985f6192b9379adfa2bd8beccbe793343fa0f568afe0b71bbb`。Supplementary section SHA-256：`272e0f1547ac3e87a95d282e3a9550c8a94bd74a76115769908f925adb417865`。
- Scope: Pages 25-27: pairwise coprime moduli, partial products, inverses and the explicit CRT construction.
- Independent verification: Pairwise gcds are 1. Independently calculated partial products [70, 45, 126], inverses [4, 5, 1], and raw sum 3298; exhaustive residue check gives only 148 modulo 630. CRT supplies exactly the full class 148+630k.

### Q-2025F-FINAL-P06 · 6

- 题目：2025 Fall Final，物理 PDF 第 10 页；官方答案物理页 [10, 11]。
- 题源：[Q-2025F-FINAL-P06 - Modular Congruence.md](../notes/Q-2025F-FINAL-P06 - Modular Congruence.md)。
- Note SHA-256：`8503f143b35f2620412d94c771ea2985fee4736bbab027f7eabbad01e18ba418`。PDF SHA-256：`8c99ca5ef7b1426d42aedc27023a61333a17cef4f9133a2e253803604384388f`。
- Official section SHA-256：`99b8d1d4565647ef2287cd8a0f1af284cf35311df35d65a9a8a6190f93ba1274`。Supplementary section SHA-256：`39ae4b02e29844fa516119217010ee8ddf1a8dd0a0799a240a506c565e2a2366`。
- Scope: Pages 25-27: first omit the implied mod-2 condition, then apply exactly the pairwise-coprime CRT taught here. No generalized noncoprime CRT is required.
- Independent verification: Pairwise gcds are 1. Independently calculated partial products [20, 15, 12], inverses [2, 3, 3], and raw sum 211; exhaustive residue check gives only 31 modulo 60. CRT supplies exactly the full class 31+60k. The original mod-2 equation is implied by mod-4=3, so it must be omitted before using the product theorem; period is 60, not 120.

## 可复现与保护

运行 `python3 courses/l2-5/tools/number-theory-practice-l1-13.py`。脚本只更新本章练习、config.questions、快照、审核和真实追加事件；不会运行任何 HTML 构建。数值枚举只作为交叉验证，普遍命题另有完整符号证明。

机器核验证据：l1-13-independent-checks.json。物理页视觉核对和图像/PDF hash：l1-13-physical-source-review.json。原题、共享题干和 PDF 快照均与原库字节一致。

所有92页回答的原 SHA-256在脚本前后保持一致；原知识库题目、共享题干和PDF hash也保持一致。未修改其他章节、共享工具或任何讲解。网页公式、折叠答案、草稿、离线与浏览器交互由主AI最终统一构建后验收。
